import { NextRequest, NextResponse } from "next/server";
import { holeAnfrageInfo, formatiereAnfrageInfo } from "../../lib/requestInfo";
import { istRateLimitiert } from "../../lib/rateLimit";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID   = process.env.TELEGRAM_CHAT_ID;

async function sendeTelegram(text: string) {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("[Ankernetz-Kompass] Telegram-Zugangsdaten fehlen");
    return;
  }
  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" }),
    });
  } catch (e) {
    console.error("[Ankernetz-Kompass] Telegram-Fehler:", e);
  }
}

export async function POST(req: NextRequest) {
  try {
    const info = holeAnfrageInfo(req);

    if (istRateLimitiert(info.ip, "kompass", 10, 10 * 60 * 1000)) {
      return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
    }

    const data = await req.json();

    // Honeypot: unsichtbares Feld, das nur Bots ausfüllen.
    if (typeof data.hp37 === "string" && data.hp37.trim() !== "") {
      await sendeTelegram(`🤖 *Bot abgewehrt (Honeypot) - Ankernetz-Kompass*\n\n${formatiereAnfrageInfo(info)}`);
      return NextResponse.json({ ok: true });
    }

    const antworten: { frage: string; antwort: string }[] = data.antworten ?? [];
    const empfehlungen: { label: string; prozent: number }[] = data.empfehlungen ?? [];
    const kontakt: { name?: string; email?: string; telefon?: string; nachricht?: string } | undefined = data.kontakt;
    const hatKontakt = !!(kontakt && (kontakt.email?.trim() || kontakt.telefon?.trim()));

    const text = [
      hatKontakt ? "🧭📞 *ANKERNETZ-KOMPASS - KONTAKTANFRAGE*" : "🧭 *ANKERNETZ-KOMPASS AUSGEFÜLLT*",
      "",
      ...(hatKontakt ? [
        `*Name:* ${kontakt?.name?.trim() || "nicht angegeben"}`,
        `*E-Mail:* ${kontakt?.email?.trim() || "-"}`,
        `*Telefon:* ${kontakt?.telefon?.trim() || "-"}`,
        kontakt?.nachricht?.trim() ? `*Nachricht:*\n${kontakt.nachricht.trim()}` : "",
        "",
      ] : []),
      ...antworten.map((a) => `*${a.frage}:*\n${a.antwort}`),
      "",
      "*Empfehlung:*",
      ...empfehlungen.map((e) => `- ${e.label} (${e.prozent}%)`),
      "",
      `_${formatiereAnfrageInfo(info)}_`,
    ].filter(Boolean).join("\n");

    await sendeTelegram(text);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Kompass error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
