import { NextRequest, NextResponse } from "next/server";
import type { NextFetchEvent } from "next/server";

// Typische Pfade, nach denen automatisierte Scanner suchen - auf dieser
// Next.js-Seite existiert keiner davon. Ein Zugriff darauf ist praktisch
// immer ein Bot, der nach bekannten Schwachstellen (WordPress, PHP,
// Admin-Panels, offengelegte Konfigurationsdateien etc.) sucht.
const SCAN_MUSTER = [
  "/wp-admin", "/wp-login", "/wp-content", "/wp-includes", "/xmlrpc.php",
  "/.env", "/.git", "/.aws", "/.ssh", "/.docker",
  "/phpmyadmin", "/pma", "/admin.php", "/administrator",
  "/config.php", "/config.json", "/.well-known/traefik",
  "/vendor/phpunit", "/server-status", "/_profiler", "/actuator",
  "/shell.php", "/cgi-bin", "/.vscode/sftp.json", "/id_rsa",
];

let letzterAlarm = 0;

async function meldeScanVersuch(req: NextRequest) {
  const jetzt = Date.now();
  // Höchstens alle 5 Minuten eine Meldung, damit ein Scan-Durchlauf mit
  // vielen Pfaden nicht die Telegram-Chat flutet.
  if (jetzt - letzterAlarm < 5 * 60 * 1000) return;
  letzterAlarm = jetzt;

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const ip = req.headers.get("x-real-ip") || req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unbekannt";
  const land = req.headers.get("x-vercel-ip-country") || "unbekannt";
  const stadt = req.headers.get("x-vercel-ip-city") ? decodeURIComponent(req.headers.get("x-vercel-ip-city")!) : "unbekannt";
  const userAgent = req.headers.get("user-agent") || "unbekannt";

  const text = [
    "🕵️ *Scan-Versuch erkannt*",
    "",
    `Pfad: \`${req.nextUrl.pathname}\``,
    `IP: ${ip}`,
    `Ort: ${stadt}, ${land}`,
    `User-Agent: ${userAgent}`,
    "",
    "_Weitere Treffer werden für 5 Minuten stummgeschaltet, um die Chat nicht zu fluten._",
  ].join("\n");

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
    });
  } catch {
    // Telegram-Fehler hier bewusst ignorieren, blockiert sonst die Anfrage
  }
}

export function middleware(req: NextRequest, event: NextFetchEvent) {
  const pfad = req.nextUrl.pathname.toLowerCase();
  if (SCAN_MUSTER.some((muster) => pfad.startsWith(muster))) {
    // waitUntil statt "fire and forget": ohne das wird der Telegram-Request
    // im Edge-Runtime abgebrochen, sobald die Antwort rausgeht, bevor er fertig ist.
    event.waitUntil(meldeScanVersuch(req));
    return new NextResponse(null, { status: 404 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logo.svg|og-image.png|robots.txt|sitemap.xml|llms.txt).*)",
  ],
};
