import { NextRequest, NextResponse } from "next/server";
import { hatGueltigeDomain } from "../../lib/validateEmail";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Honeypot: unsichtbares Feld, das nur Bots ausfüllen. Still ablehnen,
    // ohne dem Bot zu verraten, dass er erkannt wurde.
    if (typeof data.website === "string" && data.website.trim() !== "") {
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
      return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
    }
    if ([vorname, nachname, organisation, telefon, anliegen, nachricht].some((v) => v.length > 2000)) {
      return NextResponse.json({ ok: false, error: "too_long" }, { status: 400 });
    }

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("[Kontakt] Telegram-Zugangsdaten fehlen");
      return NextResponse.json({ ok: false }, { status: 500 });
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
    ].join("\n");

    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" }),
    });

    if (!res.ok) throw new Error("Telegram send failed");

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Kontakt error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
