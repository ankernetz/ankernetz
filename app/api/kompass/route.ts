import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID   = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const antworten: { frage: string; antwort: string }[] = data.antworten ?? [];
    const empfehlungen: { label: string; prozent: number }[] = data.empfehlungen ?? [];

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("[Ankernetz-Kompass] Telegram-Zugangsdaten fehlen");
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const text = [
      "🧭 *WEGWEISER AUSGEFÜLLT*",
      "",
      ...antworten.map((a) => `*${a.frage}:*\n${a.antwort}`),
      "",
      "*Empfehlung:*",
      ...empfehlungen.map((e) => `- ${e.label} (${e.prozent}%)`),
    ].join("\n");

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
    console.error("Kompass error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
