import { NextRequest, NextResponse } from "next/server";
import { hatGueltigeDomain } from "../../lib/validateEmail";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID   = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Honeypot: unsichtbares Feld, das nur Bots ausfüllen.
    if (typeof data.website === "string" && data.website.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const antworten: { frage: string; antwort: string }[] = data.antworten ?? [];
    const empfehlungen: { label: string; prozent: number }[] = data.empfehlungen ?? [];
    const kontakt: { name?: string; email?: string; telefon?: string; nachricht?: string } | undefined = data.kontakt;
    const hatKontakt = !!(kontakt && (kontakt.email?.trim() || kontakt.telefon?.trim()));

    if (kontakt?.email?.trim() && !(await hatGueltigeDomain(kontakt.email.trim()))) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("[Ankernetz-Kompass] Telegram-Zugangsdaten fehlen");
      return NextResponse.json({ ok: false }, { status: 500 });
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
    console.error("Kompass error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
