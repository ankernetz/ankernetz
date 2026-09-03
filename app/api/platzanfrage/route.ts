import { NextRequest, NextResponse } from "next/server";
import { hatGueltigeDomain } from "../../lib/validateEmail";
import { holeAnfrageInfo, formatiereAnfrageInfo } from "../../lib/requestInfo";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID   = process.env.TELEGRAM_CHAT_ID;

async function sendeTelegram(text: string) {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("[Platzanfrage] Telegram-Zugangsdaten fehlen");
    return;
  }
  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" }),
    });
  } catch (e) {
    console.error("[Platzanfrage] Telegram-Fehler:", e);
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const info = holeAnfrageInfo(req);

    // Honeypot: unsichtbares Feld, das nur Bots ausfüllen.
    if (typeof data.website === "string" && data.website.trim() !== "") {
      await sendeTelegram(`🤖 *Bot abgewehrt (Honeypot) - Platzanfrage*\n\n${formatiereAnfrageInfo(info)}`);
      return NextResponse.json({ ok: true });
    }

    if (!data.vorname || !data.situation || !(await hatGueltigeDomain(data.email ?? ""))) {
      await sendeTelegram(
        `🚫 *Ungültige Anfrage abgelehnt - Platzanfrage*\n\nAngegebene E-Mail: ${data.email || "-"}\n\n${formatiereAnfrageInfo(info)}`
      );
      return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
    }

    const text = [
      "🏥 *NEUE PLATZANFRAGE*",
      "",
      `*Von:* ${data.vorname} ${data.nachname}`,
      `*Institution:* ${data.institution}`,
      `*E-Mail:* ${data.email}`,
      `*Telefon:* ${data.telefon}`,
      "",
      `*Bereich:* ${data.bereich}`,
      `*Dringlichkeit:* ${data.dringlichkeit}`,
      "",
      `*Kind/Jugendliche/r:*`,
      `Alter: ${data.alter} | Geschlecht: ${data.geschlecht || "Keine Angabe"}`,
      "",
      `*Situation:*`,
      data.situation,
      "",
      data.bisherige ? `*Bisherige Hilfen:*\n${data.bisherige}` : "",
      "",
      `📧 Antworten an: ${data.email}`,
      `📞 Rückruf: ${data.telefon}`,
      "",
      `_${formatiereAnfrageInfo(info)}_`,
    ].filter(Boolean).join("\n");

    await sendeTelegram(text);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Platzanfrage error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
