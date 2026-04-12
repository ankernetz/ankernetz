"use client";

import { useState } from "react";
import Link from "next/link";

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "0.75rem 1rem",
  border: "1px solid #dde4ee", background: "#f4f7fb",
  fontSize: "0.9rem", color: "#1a3f6f", outline: "none",
  fontFamily: "inherit", boxSizing: "border-box",
  transition: "border-color 0.15s ease",
};

export default function KontaktPage() {
  const [form, setForm] = useState({
    vorname: "", nachname: "", organisation: "",
    email: "", telefon: "", anliegen: "", nachricht: "",
  });
  const [dsgvo, setDsgvo] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.vorname || !form.email || !form.nachricht || !dsgvo) return;
    setSubmitting(true);
    const text = `📬 <b>Neue Kontaktanfrage — Ankernetz</b>\n\n<b>Name:</b> ${form.vorname} ${form.nachname}\n<b>Organisation:</b> ${form.organisation || "—"}\n<b>E-Mail:</b> ${form.email}\n<b>Telefon:</b> ${form.telefon || "—"}\n<b>Anliegen:</b> ${form.anliegen || "—"}\n\n<b>Nachricht:</b>\n${form.nachricht}`;
    try {
      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
    } catch { /**/ }
    setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <main style={{ overflowX: "hidden", background: "#ffffff" }}>

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", minHeight: "72vh",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: "20%", right: "8%", width: "380px", height: "380px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(111,163,254,0.12) 0%, transparent 65%)" }} />

        <div className="site-container" style={{ position: "relative", zIndex: 2, paddingBottom: "0", paddingTop: "10rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.5rem" }}>
            Ankernetz — Kontakt
          </p>
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1rem", maxWidth: "22ch" }}>
            Wir sind für Sie da.<br />
            <span style={{ color: "#6FA3FE" }}>Immer.</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.85,
            maxWidth: "46ch", marginBottom: "0" }}>
            Ob Platzanfrage, Krisenintervention, Beratung oder allgemeine Frage —
            wir melden uns schnell und persönlich.
          </p>
        </div>

        {/* Kontakt-Schnellkacheln direkt an Hero-Unterkante */}
        <div className="site-container" style={{ position: "relative", zIndex: 2, marginTop: "3rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px",
            background: "rgba(255,255,255,0.1)" }}>
            {[
              { label: "Telefon", wert: "+49 (0) 30 22 45 43 22",
                sub: "Mo–Fr 8–18 Uhr", note: "Krisennotfall: 24/7 erreichbar",
                href: "tel:+4930224543220", noteColor: "#ef4444" },
              { label: "E-Mail", wert: "hilfe@ankernetz.com",
                sub: "Antwort innerhalb von 24 Stunden", note: null,
                href: "mailto:hilfe@ankernetz.com", noteColor: null },
              { label: "Karriere", wert: "karriere@ankernetz.com",
                sub: "Bewerbungen & Initiativbewerbungen", note: null,
                href: "mailto:karriere@ankernetz.com", noteColor: null },
              { label: "Adresse", wert: "Friedrich-Franz-Str. 13",
                sub: "12103 Berlin", note: "Termine nach Vereinbarung",
                href: null, noteColor: "#6FA3FE" },
            ].map(k => (
              <div key={k.label} style={{ background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(8px)", padding: "1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "0.625rem" }}>
                  {k.label}
                </p>
                {k.href ? (
                  <a href={k.href} style={{ fontSize: "0.9375rem", fontWeight: 700,
                    color: "white", textDecoration: "none", display: "block", marginBottom: "0.25rem" }}>
                    {k.wert}
                  </a>
                ) : (
                  <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white", marginBottom: "0.25rem" }}>
                    {k.wert}
                  </p>
                )}
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>{k.sub}</p>
                {k.note && (
                  <p style={{ fontSize: "0.72rem", fontWeight: 600, color: k.noteColor ?? "#6FA3FE",
                    marginTop: "0.375rem" }}>{k.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FÜR WEN
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "6rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>Für alle</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em" }}>Wir sind für Sie da</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
            {[
              { titel: "Familien & Erziehungsberechtigte", akzent: "#6FA3FE",
                punkte: [
                  "Beratung zu passenden Hilfeangeboten",
                  "Begleitung durch den Antragsprozess",
                  "Informationen zu Frühe Hilfen (0–6 J.)",
                  "Ansprechpartner bei akuter Not",
                  "Psychotherapie für Ihr Kind",
                ] },
              { titel: "Jugendämter & Kostenträger", akzent: "#FEC274",
                punkte: [
                  "Direkte Platzanfragen ohne Warteliste",
                  "Schnelle Rückmeldung innerhalb von 30 Min.",
                  "Krisenaufnahmen rund um die Uhr",
                  "Feste Ansprechpartner für alle Bereiche",
                  "Regelmäßige Berichte und Dokumentation",
                ] },
              { titel: "Fachkräfte & Kooperationspartner", akzent: "#22c55e",
                punkte: [
                  "Fachberatung und Diagnostikaufträge",
                  "Kooperationsvereinbarungen",
                  "Informationen zu Beratung in Kitas",
                  "Fortbildungen und gemeinsame Angebote",
                  "Netzwerktreffen und Fachaustausch",
                ] },
              { titel: "Kinder & Jugendliche", akzent: "#a78bfa",
                punkte: [
                  "Wir hören zu — ohne Druck",
                  "Unser Chat mit Lena ist täglich erreichbar",
                  "Krisenhilfe sofort: +49 30 22 45 43 22",
                  "Beratung auch anonym möglich",
                  "Du musst das nicht alleine schaffen",
                ] },
            ].map(g => (
              <div key={g.titel} className="bento-card"
                style={{ background: "#f0f4f8", padding: "2rem" }}>
                <div style={{ width: "28px", height: "3px", background: g.akzent,
                  marginBottom: "1.25rem", borderRadius: "9999px" }} />
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#1a3f6f",
                  marginBottom: "1.25rem", lineHeight: 1.3 }}>{g.titel}</h3>
                {g.punkte.map(p => (
                  <div key={p} style={{ display: "flex", gap: "0.625rem",
                    marginBottom: "0.5rem", alignItems: "flex-start" }}>
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%",
                      background: g.akzent, flexShrink: 0, marginTop: "0.4rem" }} />
                    <p style={{ fontSize: "0.825rem", color: "rgba(26,63,111,0.7)", lineHeight: 1.55 }}>{p}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FORMULAR + SEITENINFO
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "6rem 0" }}>
        <div className="site-container" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "4rem", alignItems: "start" }}>

          {/* Links: Info */}
          <div>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>Schreiben Sie uns</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.5rem" }}>
              Direkte Nachricht ans Team.
            </h2>
            <p style={{ fontSize: "0.9rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85, marginBottom: "2rem" }}>
              Nutzen Sie das Formular für allgemeine Anfragen, Platzanfragen oder Kooperationsinteressen.
              Wir melden uns innerhalb von einem Werktag persönlich bei Ihnen.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { label: "Reaktionszeit allgemein", wert: "Innerhalb von 24 Std." },
                { label: "Krisenaufnahme",          wert: "Innerhalb von 30 Min." },
                { label: "Telefonische Erreichbarkeit", wert: "Mo–Fr, 8–18 Uhr" },
                { label: "Krisentelefon",            wert: "24/7 erreichbar" },
                { label: "Persönliche Termine",      wert: "Nach Vereinbarung" },
              ].map((r, i) => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between",
                  padding: "0.875rem 0", borderBottom: i < 4 ? "1px solid rgba(26,63,111,0.1)" : "none",
                  alignItems: "center" }}>
                  <span style={{ fontSize: "0.8125rem", color: "rgba(26,63,111,0.5)" }}>{r.label}</span>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1a3f6f" }}>{r.wert}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2rem", padding: "1.25rem",
              background: "#1a3f6f", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.1em", textTransform: "uppercase" }}>Krisennotfall</p>
              <a href="tel:+4930224543220" style={{ fontSize: "1.125rem", fontWeight: 800,
                color: "white", textDecoration: "none" }}>+49 (0) 30 22 45 43 22</a>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>
                24 Stunden täglich, 365 Tage im Jahr
              </p>
            </div>
          </div>

          {/* Rechts: Formular */}
          <div style={{ background: "white", padding: "2.5rem" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ width: "60px", height: "60px", border: "2px solid #22c55e",
                  borderRadius: "50%", display: "flex", alignItems: "center",
                  justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                    <path d="M2 9l7 7L22 2" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1a3f6f",
                  marginBottom: "0.75rem" }}>Nachricht eingegangen.</h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(26,63,111,0.55)", lineHeight: 1.75 }}>
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  Bei dringendem Bedarf rufen Sie uns direkt an:
                  <strong style={{ color: "#1a3f6f", display: "block", marginTop: "0.5rem" }}>
                    +49 (0) 30 22 45 43 22
                  </strong>
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em",
                  textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.25rem" }}>
                  Kontaktformular
                </p>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1a3f6f",
                  letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
                  Schreiben Sie uns.
                </h3>

                {/* Name */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <div>
                    <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(26,63,111,0.45)",
                      letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.375rem" }}>
                      Vorname *
                    </label>
                    <input type="text" required placeholder="Max" value={form.vorname}
                      onChange={set("vorname")} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(26,63,111,0.45)",
                      letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.375rem" }}>
                      Nachname *
                    </label>
                    <input type="text" required placeholder="Mustermann" value={form.nachname}
                      onChange={set("nachname")} style={inputStyle} />
                  </div>
                </div>

                {/* Organisation */}
                <div>
                  <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(26,63,111,0.45)",
                    letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.375rem" }}>
                    Organisation / Jugendamt
                  </label>
                  <input type="text" placeholder="Jugendamt Berlin Tempelhof" value={form.organisation}
                    onChange={set("organisation")} style={inputStyle} />
                </div>

                {/* E-Mail + Telefon */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <div>
                    <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(26,63,111,0.45)",
                      letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.375rem" }}>
                      E-Mail *
                    </label>
                    <input type="email" required placeholder="max@jugendamt.de" value={form.email}
                      onChange={set("email")} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(26,63,111,0.45)",
                      letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.375rem" }}>
                      Telefon
                    </label>
                    <input type="tel" placeholder="+49 30 ..." value={form.telefon}
                      onChange={set("telefon")} style={inputStyle} />
                  </div>
                </div>

                {/* Anliegen */}
                <div>
                  <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(26,63,111,0.45)",
                    letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.375rem" }}>
                    Ihr Anliegen *
                  </label>
                  <select required value={form.anliegen} onChange={set("anliegen")}
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                    <option value="">Bitte wählen…</option>
                    <option>Platzanfrage (Krisenwohngruppe / Jugendhilfe)</option>
                    <option>Krisenintervention — dringend</option>
                    <option>Psychotherapie-Anfrage</option>
                    <option>Diagnostik & Clearing</option>
                    <option>Frühe Hilfen (0–6 Jahre)</option>
                    <option>Beratung & Prävention</option>
                    <option>Beratung in Kitas</option>
                    <option>Übergang Arbeit</option>
                    <option>Ankerkleidung / Bestellung</option>
                    <option>Kooperation / Partnerschaft</option>
                    <option>Allgemeine Information</option>
                    <option>Sonstiges</option>
                  </select>
                </div>

                {/* Nachricht */}
                <div>
                  <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(26,63,111,0.45)",
                    letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.375rem" }}>
                    Nachricht *
                  </label>
                  <textarea required rows={5} value={form.nachricht} onChange={set("nachricht")}
                    placeholder="Bitte beschreiben Sie kurz Ihr Anliegen…"
                    style={{ ...inputStyle, resize: "none" }} />
                </div>

                {/* DSGVO */}
                <label style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer" }}>
                  <input type="checkbox" checked={dsgvo} onChange={e => setDsgvo(e.target.checked)}
                    style={{ marginTop: "3px", accentColor: "#1a3f6f", width: "14px", height: "14px",
                      flexShrink: 0, cursor: "pointer" }} />
                  <span style={{ fontSize: "0.78rem", color: "rgba(26,63,111,0.55)", lineHeight: 1.6 }}>
                    Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                    <Link href="/datenschutz" style={{ color: "#6FA3FE", textDecoration: "underline" }}>
                      Datenschutzerklärung
                    </Link>{" "}
                    zu. *
                  </span>
                </label>

                {/* Submit */}
                <button type="submit" disabled={!form.vorname || !form.email || !form.nachricht || !dsgvo || submitting}
                  style={{
                    width: "100%", padding: "0.875rem",
                    background: (form.vorname && form.email && form.nachricht && dsgvo) ? "#1a3f6f" : "#dde4ee",
                    color: (form.vorname && form.email && form.nachricht && dsgvo) ? "white" : "rgba(26,63,111,0.3)",
                    border: "none", fontWeight: 700, fontSize: "0.875rem",
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    cursor: (form.vorname && form.email && form.nachricht && dsgvo) ? "pointer" : "not-allowed",
                  }}>
                  {submitting ? "Wird gesendet…" : "Nachricht senden"}
                </button>
                <p style={{ fontSize: "0.7rem", color: "rgba(26,63,111,0.35)", textAlign: "center" }}>
                  Ihre Daten werden vertraulich behandelt und nicht weitergegeben.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "6rem 0" }}>
        <div className="site-container" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem" }}>
          <div>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>FAQ</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 2vw, 2.25rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              Häufige Fragen
            </h2>
            <p style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.55)", lineHeight: 1.75 }}>
              Nicht gefunden, was Sie suchen? Rufen Sie uns direkt an oder schreiben Sie uns.
            </p>
            <a href="tel:+4930224543220" style={{ display: "inline-block", marginTop: "1.5rem",
              background: "#1a3f6f", color: "white", padding: "0.75rem 1.25rem",
              fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.06em",
              textTransform: "uppercase", textDecoration: "none" }}>
              Jetzt anrufen
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#dde4ee",
            border: "1px solid #dde4ee" }}>
            {[
              { frage: "Wie schnell reagieren Sie auf eine Platzanfrage?",
                antwort: "Bei Krisenaufnahmen erhalten Sie innerhalb von 30 Minuten eine erste Rückmeldung zur Kapazität. Bei allgemeinen Platzanfragen melden wir uns innerhalb eines Werktages." },
              { frage: "Wer kann eine Platzanfrage stellen?",
                antwort: "Platzanfragen können von Jugendämtern, Fachkräften der Sozialen Arbeit und direkt von Familien gestellt werden. Bei minderjährigen Kindern wird die Kostenübernahme mit dem zuständigen Jugendamt geklärt." },
              { frage: "Welche Altersgruppen nehmen Sie auf?",
                antwort: "Unsere Angebote decken die gesamte Spanne von 0 bis 25 Jahren ab — von Frühe Hilfen für Kleinkinder bis zum Übergang in den Arbeitsmarkt für junge Erwachsene." },
              { frage: "Ist die Krisenhotline wirklich 24/7 erreichbar?",
                antwort: "Ja. Unsere Krisenbereitschaft ist 365 Tage im Jahr, rund um die Uhr besetzt. Rufen Sie +49 (0) 30 22 45 43 22 an — auch mitten in der Nacht." },
              { frage: "Übernehmen Jugendämter die Kosten?",
                antwort: "In der Regel ja. Alle unsere stationären und ambulanten Angebote sind nach SGB VIII anerkannt und werden von den zuständigen Jugendämtern als Kostenträger finanziert. Wir unterstützen bei der Antragstellung." },
              { frage: "Wie läuft eine Aufnahme ab?",
                antwort: "Nach telefonischer Kontaktaufnahme erfolgt eine kurze Einschätzung der Passung. Bei Eignung erhalten Sie innerhalb von 30 Minuten Rückmeldung. Die eigentliche Aufnahme mit Erstgespräch und Stabilisierung findet innerhalb von 24 Stunden statt." },
              { frage: "Arbeiten Sie auch mit Schulen und Kitas zusammen?",
                antwort: "Ja. Wir haben ein spezielles Angebot für Kitas (Fachberatung vor Ort) und kooperieren regelmäßig mit Schulen im Rahmen unserer Beratungs- und Präventionsangebote." },
              { frage: "Kann ich mich auch anonym beraten lassen?",
                antwort: "Für niedrigschwellige Beratung ist eine anonyme Kontaktaufnahme grundsätzlich möglich. Unser Chat mit Lena auf dieser Website ist jederzeit erreichbar — ohne Angabe persönlicher Daten." },
            ].map((faq, i) => (
              <details key={i} style={{ background: "white" }}>
                <summary style={{ padding: "1.25rem 1.5rem", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  listStyle: "none", gap: "1rem" }}>
                  <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#1a3f6f",
                    lineHeight: 1.4 }}>{faq.frage}</span>
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="#6FA3FE" style={{ flexShrink: 0 }}>
                    <path d="M0 0l6 7 6-7z" />
                  </svg>
                </summary>
                <div style={{ padding: "0 1.5rem 1.25rem",
                  borderTop: "1px solid #eef2f7" }}>
                  <p style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.65)",
                    lineHeight: 1.8, paddingTop: "1rem" }}>{faq.antwort}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          KRISENNOTFALL-BANNER
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 100%)", padding: "5rem 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px" }} />
        <div className="site-container" style={{ position: "relative", zIndex: 1,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.5rem" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%",
                background: "#ef4444", animation: "pulse 2s infinite", display: "inline-block" }} />
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#ef4444" }}>Krisennotfall 24/7</p>
            </div>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "white",
              letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              Akuter Bedarf?<br />Wir sind sofort da.
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.85 }}>
              Für akute Kriseninterventionen, sofortige Aufnahmebedarfe oder Notfallsituationen
              stehen wir rund um die Uhr zur Verfügung — ohne Wartezeiten, ohne Bürokratie.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a href="tel:+4930224543220" style={{
              background: "#ef4444", color: "white",
              padding: "1.125rem 1.5rem", fontWeight: 800, fontSize: "1.0625rem",
              textDecoration: "none", display: "flex", alignItems: "center",
              justifyContent: "space-between" }}>
              <span>Jetzt anrufen</span>
              <span>+49 (0) 30 22 45 43 22</span>
            </a>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <Link href="/krisenintervention" style={{ border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.6)", padding: "0.875rem 1rem",
                fontWeight: 500, fontSize: "0.8125rem", textDecoration: "none",
                textAlign: "center" }}>
                Krisenintervention
              </Link>
              <Link href="/platzanfrage" style={{ border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.6)", padding: "0.875rem 1rem",
                fontWeight: 500, fontSize: "0.8125rem", textDecoration: "none",
                textAlign: "center" }}>
                Platzanfrage stellen
              </Link>
            </div>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.25)", textAlign: "center" }}>
              Erreichbar an 365 Tagen · 24 Stunden täglich · Keine Warteliste
            </p>
          </div>
        </div>
        <style>{`
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        `}</style>
      </section>

    </main>
  );
}
