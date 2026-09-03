import { NextRequest, NextResponse } from "next/server";
import { holeAnfrageInfo, formatiereAnfrageInfo } from "../../lib/requestInfo";
import { istRateLimitiert } from "../../lib/rateLimit";
import { escapeHtml } from "../../lib/escapeHtml";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID   = process.env.TELEGRAM_CHAT_ID;

async function sendeTelegram(text: string) {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("[Ankernetz-Kompass] Telegram-Zugangsdaten fehlen");
    return;
  }
  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" }),
    });
    if (!res.ok) {
      console.error("[Ankernetz-Kompass] Telegram hat die Nachricht abgelehnt:", res.status, await res.text().catch(() => ""));
    }
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
      await sendeTelegram(`🤖 <b>Bot abgewehrt (Honeypot) - Ankernetz-Kompass</b>\n\n${escapeHtml(formatiereAnfrageInfo(info))}`);
      return NextResponse.json({ ok: true });
    }

    const antworten: { frage: string; antwort: string }[] = data.antworten ?? [];
    const empfehlungen: { label: string; prozent: number }[] = data.empfehlungen ?? [];
    const kontakt: { name?: string; email?: string; telefon?: string; nachricht?: string } | undefined = data.kontakt;
    const hatKontakt = !!(kontakt && (kontakt.email?.trim() || kontakt.telefon?.trim()));

    const text = [
      hatKontakt ? "🧭📞 <b>ANKERNETZ-KOMPASS - KONTAKTANFRAGE</b>" : "🧭 <b>ANKERNETZ-KOMPASS AUSGEFÜLLT</b>",
      "",
      ...(hatKontakt ? [
        `<b>Name:</b> ${escapeHtml(kontakt?.name?.trim() || "nicht angegeben")}`,
        `<b>E-Mail:</b> ${escapeHtml(kontakt?.email?.trim() || "-")}`,
        `<b>Telefon:</b> ${escapeHtml(kontakt?.telefon?.trim() || "-")}`,
        kontakt?.nachricht?.trim() ? `<b>Nachricht:</b>\n${escapeHtml(kontakt.nachricht.trim())}` : "",
        "",
      ] : []),
      ...antworten.map((a) => `<b>${escapeHtml(a.frage)}:</b>\n${escapeHtml(a.antwort)}`),
      "",
      "<b>Empfehlung:</b>",
      ...empfehlungen.map((e) => `- ${escapeHtml(e.label)} (${e.prozent}%)`),
      "",
      `<i>${escapeHtml(formatiereAnfrageInfo(info))}</i>`,
    ].filter(Boolean).join("\n");

    await sendeTelegram(text);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Kompass error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
