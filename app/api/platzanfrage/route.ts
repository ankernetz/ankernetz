import { NextRequest, NextResponse } from "next/server";
import { holeAnfrageInfo, formatiereAnfrageInfo } from "../../lib/requestInfo";
import { istRateLimitiert } from "../../lib/rateLimit";
import { escapeHtml } from "../../lib/escapeHtml";

const EMAIL_FORMAT = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID   = process.env.TELEGRAM_CHAT_ID;

async function sendeTelegram(text: string) {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("[Platzanfrage] Telegram-Zugangsdaten fehlen");
    return;
  }
  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" }),
    });
    if (!res.ok) {
      console.error("[Platzanfrage] Telegram hat die Nachricht abgelehnt:", res.status, await res.text().catch(() => ""));
    }
  } catch (e) {
    console.error("[Platzanfrage] Telegram-Fehler:", e);
  }
}

export async function POST(req: NextRequest) {
  try {
    const info = holeAnfrageInfo(req);

    if (istRateLimitiert(info.ip, "platzanfrage", 5, 10 * 60 * 1000)) {
      return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
    }

    const data = await req.json();

    // Honeypot: unsichtbares Feld, das nur Bots ausfüllen.
    if (typeof data.hp37 === "string" && data.hp37.trim() !== "") {
      await sendeTelegram(`🤖 <b>Bot abgewehrt (Honeypot) - Platzanfrage</b>\n\n${escapeHtml(formatiereAnfrageInfo(info))}`);
      return NextResponse.json({ ok: true });
    }

    if (!data.vorname || !data.situation || !EMAIL_FORMAT.test(data.email ?? "")) {
      await sendeTelegram(
        `🚫 <b>Ungültige Anfrage abgelehnt - Platzanfrage</b>\n\nAngegebene E-Mail: ${escapeHtml(data.email || "-")}\n\n${escapeHtml(formatiereAnfrageInfo(info))}`
      );
      return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
    }

    const text = [
      "🏥 <b>NEUE PLATZANFRAGE</b>",
      "",
      `<b>Von:</b> ${escapeHtml(data.vorname)} ${escapeHtml(data.nachname || "")}`,
      `<b>Institution:</b> ${escapeHtml(data.institution || "-")}`,
      `<b>E-Mail:</b> ${escapeHtml(data.email)}`,
      `<b>Telefon:</b> ${escapeHtml(data.telefon || "-")}`,
      "",
      `<b>Bereich:</b> ${escapeHtml(data.bereich || "-")}`,
      `<b>Dringlichkeit:</b> ${escapeHtml(data.dringlichkeit || "-")}`,
      "",
      `<b>Kind/Jugendliche/r:</b>`,
      `Alter: ${escapeHtml(data.alter || "-")} | Geschlecht: ${escapeHtml(data.geschlecht || "Keine Angabe")}`,
      "",
      `<b>Situation:</b>`,
      escapeHtml(data.situation),
      "",
      data.bisherige ? `<b>Bisherige Hilfen:</b>\n${escapeHtml(data.bisherige)}` : "",
      "",
      `📧 Antworten an: ${escapeHtml(data.email)}`,
      `📞 Rückruf: ${escapeHtml(data.telefon || "-")}`,
      "",
      `<i>${escapeHtml(formatiereAnfrageInfo(info))}</i>`,
    ].filter(Boolean).join("\n");

    await sendeTelegram(text);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Platzanfrage error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
