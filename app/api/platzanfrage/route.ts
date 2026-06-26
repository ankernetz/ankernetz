import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8549927404:AAHTB447XJDAe9OMW6_rR_Lvb7pNKpTBQ48";
const CHAT_ID   = process.env.TELEGRAM_CHAT_ID   || "8619391689";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

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
    ].filter(Boolean).join("\n");

    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!res.ok) throw new Error("Telegram send failed");

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Platzanfrage error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
