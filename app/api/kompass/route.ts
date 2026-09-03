import { NextRequest, NextResponse } from "next/server";
import { hatGueltigeDomain } from "../../lib/validateEmail";
import { holeAnfrageInfo, formatiereAnfrageInfo } from "../../lib/requestInfo";

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
    const data = await req.json();
    const info = holeAnfrageInfo(req);

    // Honeypot: unsichtbares Feld, das nur Bots ausfüllen.
    if (typeof data.website === "string" && data.website.trim() !== "") {
      await sendeTelegram(`🤖 *Bot abgewehrt (Honeypot) - Ankernetz-Kompass*\n\n${formatiereAnfrageInfo(info)}`);
      return NextResponse.json({ ok: true });
    }

    const antworten: { frage: string; antwort: string }[] = data.antworten ?? [];
    const empfehlungen: { label: string; prozent: number }[] = data.empfehlungen ?? [];
    const kontakt: { name?: string; email?: string; telefon?: string; nachricht?: string } | undefined = data.kontakt;
    const hatKontakt = !!(kontakt && (kontakt.email?.trim() || kontakt.telefon?.trim()));

    if (kontakt?.email?.trim() && !(await hatGueltigeDomain(kontakt.email.trim()))) {
      await sendeTelegram(
        `🚫 *Ungültige Anfrage abgelehnt - Ankernetz-Kompass*\n\nAngegebene E-Mail: ${kontakt.email.trim()}\n\n${formatiereAnfrageInfo(info)}`
      );
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }

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
