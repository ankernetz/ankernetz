import { NextRequest, NextResponse } from "next/server";
import { hatGueltigeDomain } from "../../lib/validateEmail";
import { holeAnfrageInfo, formatiereAnfrageInfo } from "../../lib/requestInfo";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function sendeTelegram(text: string) {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("[Kontakt] Telegram-Zugangsdaten fehlen");
    return;
  }
  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" }),
    });
  } catch (e) {
    console.error("[Kontakt] Telegram-Fehler:", e);
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const info = holeAnfrageInfo(req);

    // Honeypot: unsichtbares Feld, das nur Bots ausfüllen.
    if (typeof data.website === "string" && data.website.trim() !== "") {
      await sendeTelegram(
        `🤖 <b>Bot abgewehrt (Honeypot) - Kontaktformular</b>\n\n${escapeHtml(formatiereAnfrageInfo(info))}`
      );
      return NextResponse.json({ ok: true });
    }

    const vorname = typeof data.vorname === "string" ? data.vorname.trim() : "";
    const nachname = typeof data.nachname === "string" ? data.nachname.trim() : "";
    const email = typeof data.email === "string" ? data.email.trim() : "";
    const nachricht = typeof data.nachricht === "string" ? data.nachricht.trim() : "";
    const organisation = typeof data.organisation === "string" ? data.organisation.trim() : "";
    const telefon = typeof data.telefon === "string" ? data.telefon.trim() : "";
    const anliegen = typeof data.anliegen === "string" ? data.anliegen.trim() : "";

    if (!vorname || !nachricht || !(await hatGueltigeDomain(email))) {
      await sendeTelegram(
        `🚫 <b>Ungültige Anfrage abgelehnt - Kontaktformular</b>\n\n<b>Angegebene E-Mail:</b> ${escapeHtml(email) || "-"}\n\n${escapeHtml(formatiereAnfrageInfo(info))}`
      );
      return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
    }
    if ([vorname, nachname, organisation, telefon, anliegen, nachricht].some((v) => v.length > 2000)) {
      return NextResponse.json({ ok: false, error: "too_long" }, { status: 400 });
    }

    const text = [
      "📬 <b>Neue Kontaktanfrage - Ankernetz</b>",
      "",
      `<b>Name:</b> ${escapeHtml(vorname)} ${escapeHtml(nachname)}`,
      `<b>Organisation:</b> ${escapeHtml(organisation) || "-"}`,
      `<b>E-Mail:</b> ${escapeHtml(email)}`,
      `<b>Telefon:</b> ${escapeHtml(telefon) || "-"}`,
      `<b>Anliegen:</b> ${escapeHtml(anliegen) || "-"}`,
      "",
      "<b>Nachricht:</b>",
      escapeHtml(nachricht),
      "",
      `<i>${escapeHtml(formatiereAnfrageInfo(info))}</i>`,
    ].join("\n");

    await sendeTelegram(text);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Kontakt error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
