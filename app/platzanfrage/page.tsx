"use client";
import { useState } from "react";

export default function PlatzanfragePage() {
  const [form, setForm] = useState({
    vorname: "", nachname: "", institution: "",
    email: "", telefon: "", bereich: "",
    alter: "", geschlecht: "", dringlichkeit: "",
    situation: "", bisherige: "",
  });
  const [dsgvo, setDsgvo] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!dsgvo) return;
    setSubmitting(true);
    try {
      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: [{
            name: "Platzanfrage",
            quantity: 1,
            price: 0,
            size: form.bereich,
          }],
          total: 0,
          customer: `${form.vorname} ${form.nachname}`,
          note: `Institution: ${form.institution}\nE-Mail: ${form.email}\nTelefon: ${form.telefon}\nBereich: ${form.bereich}\nAlter: ${form.alter}\nGeschlecht: ${form.geschlecht}\nDringlichkeit: ${form.dringlichkeit}\nSituation: ${form.situation}\nBisherige Hilfen: ${form.bisherige}`,
        }),
      });
      setSubmitted(true);
    } catch {
      // submit silently
    } finally {
      setSubmitting(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px",
    border: "1.5px solid #dde4ee", borderRadius: "10px",
    background: "#f4f7fb", fontSize: "14px", color: "#1a3f6f",
    outline: "none", boxSizing: "border-box",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "12px", fontWeight: 700,
    color: "#1a3f6f", marginBottom: "6px", letterSpacing: "0.02em",
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f4f7fb" }}>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(160deg, #1a3f6f 0%, #2d5fa0 60%, #1a3f6f 100%)",
        paddingTop: "110px",
        paddingBottom: "64px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
        <div style={{ position: "relative", maxWidth: "960px", margin: "0 auto", padding: "0 2rem" }}>
          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "14px",
          }}>
            Für Jugendämter & Fachkräfte
          </p>
          <h1 style={{
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800,
            color: "white", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "18px",
          }}>
            Platzanfrage
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, maxWidth: "480px" }}>
            Wir prüfen Ihren Bedarf und melden uns innerhalb von 24 Stunden.
          </p>

          {/* Kennzahlen */}
          <div style={{
            display: "flex", gap: "2rem", marginTop: "2.5rem", flexWrap: "wrap",
          }}>
            {[
              { zahl: "< 24h", text: "Rückmeldung auf Ihre Anfrage" },
              { zahl: "24/7", text: "Erreichbar bei Krisenaufnahmen" },
            ].map((k) => (
              <div key={k.zahl} style={{
                borderLeft: "2px solid rgba(255,255,255,0.25)",
                paddingLeft: "1rem",
              }}>
                <p style={{ fontSize: "1.75rem", fontWeight: 800, color: "white", lineHeight: 1 }}>{k.zahl}</p>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", marginTop: "4px" }}>{k.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "3rem 2rem 5rem" }}>

        {submitted ? (
          <div style={{
            background: "white", borderRadius: "20px",
            padding: "4rem 2.5rem", textAlign: "center",
            boxShadow: "0 2px 24px rgba(26,63,111,0.08)",
          }}>
            <div style={{
              width: "72px", height: "72px", borderRadius: "50%",
              background: "#dcfce7", display: "flex", alignItems: "center",
              justifyContent: "center", margin: "0 auto 1.5rem",
              fontSize: "32px",
            }}>✓</div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1a3f6f", marginBottom: "12px" }}>
              Anfrage eingegangen
            </h2>
            <p style={{ color: "#374151", lineHeight: 1.7, maxWidth: "420px", margin: "0 auto" }}>
              Vielen Dank. Wir haben Ihre Platzanfrage erhalten und melden uns
              innerhalb von 24 Stunden bei Ihnen.
            </p>
            <p style={{ marginTop: "1.5rem", fontSize: "14px", color: "#6b7280" }}>
              Bei dringenden Krisenaufnahmen:{" "}
              <a href="tel:+4930224543220" style={{ color: "#1a3f6f", fontWeight: 700, textDecoration: "none" }}>
                +49 (0) 30 22 45 43 22
              </a>
            </p>
          </div>
        ) : (
          <div style={{
            background: "white", borderRadius: "20px", overflow: "hidden",
            boxShadow: "0 2px 24px rgba(26,63,111,0.08)",
          }}>
            {/* Formular-Header */}
            <div style={{
              background: "#f4f7fb", padding: "1.75rem 2.5rem",
              borderBottom: "1px solid #eef2f8",
            }}>
              <h2 style={{ fontSize: "1.375rem", fontWeight: 800, color: "#1a3f6f" }}>
                Anfrage stellen
              </h2>
              <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>
                Alle mit * markierten Felder sind Pflichtfelder.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ padding: "2.5rem" }}>

              {/* Abschnitt: Ihre Daten */}
              <p style={{
                fontSize: "10px", fontWeight: 800, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.25rem",
              }}>
                Ihre Daten
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <label style={labelStyle}>Vorname *</label>
                  <input type="text" required style={inputStyle} value={form.vorname}
                    onChange={(e) => set("vorname", e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>Nachname *</label>
                  <input type="text" required style={inputStyle} value={form.nachname}
                    onChange={(e) => set("nachname", e.target.value)} />
                </div>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>Jugendamt / Institution *</label>
                <input type="text" required style={inputStyle} value={form.institution}
                  onChange={(e) => set("institution", e.target.value)}
                  placeholder="z.B. Jugendamt Berlin Mitte" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
                <div>
                  <label style={labelStyle}>E-Mail *</label>
                  <input type="email" required style={inputStyle} value={form.email}
                    onChange={(e) => set("email", e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>Telefon *</label>
                  <input type="tel" required style={inputStyle} value={form.telefon}
                    onChange={(e) => set("telefon", e.target.value)} />
                </div>
              </div>

              {/* Abschnitt: Gewünschtes Angebot */}
              <div style={{ borderTop: "1px solid #eef2f8", paddingTop: "2rem", marginBottom: "2rem" }}>
                <p style={{
                  fontSize: "10px", fontWeight: 800, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.25rem",
                }}>
                  Gewünschtes Angebot
                </p>
                <label style={labelStyle}>Bereich *</label>
                <select required style={inputStyle} value={form.bereich}
                  onChange={(e) => set("bereich", e.target.value)}>
                  <option value="">Bitte wählen …</option>
                  <option>Krisenintervention (24/7)</option>
                  <option>Therapie & Wohnen</option>
                  <option>Jugendhilfe (Kinder)</option>
                  <option>Frühe Hilfen (Kleinkinder)</option>
                  <option>Diagnostik & Clearing</option>
                  <option>Kinder- und Jugendpsychotherapie</option>
                  <option>Beratung & Prävention</option>
                  <option>Übergang Arbeit</option>
                  <option>Versorgung / Ankerkleidung</option>
                  <option>Noch unklar — Beratungsbedarf</option>
                </select>
              </div>

              {/* Abschnitt: Angaben zum Kind */}
              <div style={{ borderTop: "1px solid #eef2f8", paddingTop: "2rem", marginBottom: "2rem" }}>
                <p style={{
                  fontSize: "10px", fontWeight: 800, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.25rem",
                }}>
                  Angaben zum Kind / Jugendlichen
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Alter *</label>
                    <input type="number" min={0} max={25} required style={inputStyle}
                      value={form.alter} onChange={(e) => set("alter", e.target.value)}
                      placeholder="z.B. 14" />
                  </div>
                  <div>
                    <label style={labelStyle}>Geschlecht</label>
                    <select style={inputStyle} value={form.geschlecht}
                      onChange={(e) => set("geschlecht", e.target.value)}>
                      <option value="">Bitte wählen</option>
                      <option>Männlich</option>
                      <option>Weiblich</option>
                      <option>Divers</option>
                      <option>Keine Angabe</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <label style={labelStyle}>Dringlichkeit *</label>
                  <select required style={inputStyle} value={form.dringlichkeit}
                    onChange={(e) => set("dringlichkeit", e.target.value)}>
                    <option value="">Bitte wählen</option>
                    <option>Sofort (Krisenaufnahme)</option>
                    <option>Innerhalb von 1 Woche</option>
                    <option>Innerhalb von 1 Monat</option>
                    <option>Planbar (über 1 Monat)</option>
                  </select>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <label style={labelStyle}>Kurzbeschreibung der Situation *</label>
                  <textarea
                    required rows={5}
                    style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
                    value={form.situation}
                    onChange={(e) => set("situation", e.target.value)}
                    placeholder="Bitte beschreiben Sie kurz die aktuelle Situation und den Hilfebedarf …"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Bisherige Hilfen (optional)</label>
                  <textarea
                    rows={3}
                    style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
                    value={form.bisherige}
                    onChange={(e) => set("bisherige", e.target.value)}
                    placeholder="Welche Hilfen wurden bisher gewährt?"
                  />
                </div>
              </div>

              {/* DSGVO */}
              <div style={{
                display: "flex", alignItems: "flex-start", gap: "12px",
                padding: "1.25rem", background: "#f4f7fb", borderRadius: "12px",
                marginBottom: "1.5rem",
              }}>
                <input
                  type="checkbox" id="dsgvo" required
                  checked={dsgvo} onChange={(e) => setDsgvo(e.target.checked)}
                  style={{ marginTop: "3px", flexShrink: 0, accentColor: "#1a3f6f" }}
                />
                <label htmlFor="dsgvo" style={{ fontSize: "13px", color: "#374151", lineHeight: 1.6 }}>
                  Ich stimme der Verarbeitung der übermittelten Daten gemäß der{" "}
                  <a href="/datenschutz" style={{ color: "#1a3f6f", fontWeight: 600, textDecoration: "underline" }}>
                    Datenschutzerklärung
                  </a>{" "}
                  zu. Die Daten werden ausschließlich zur Bearbeitung dieser Anfrage genutzt. *
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting || !dsgvo}
                style={{
                  width: "100%", padding: "16px",
                  background: dsgvo ? "#1a3f6f" : "#c8d5e8",
                  color: "white", fontWeight: 700, fontSize: "15px",
                  border: "none", borderRadius: "12px",
                  cursor: dsgvo ? "pointer" : "not-allowed",
                  transition: "background 0.2s",
                  letterSpacing: "0.02em",
                }}
              >
                {submitting ? "Wird gesendet …" : "Platzanfrage absenden"}
              </button>

              <p style={{ fontSize: "12px", color: "#9ca3af", textAlign: "center", marginTop: "1rem" }}>
                Bei dringenden Krisenaufnahmen rufen Sie uns bitte direkt an:{" "}
                <a href="tel:+4930224543220" style={{ color: "#1a3f6f", fontWeight: 700, textDecoration: "none" }}>
                  +49 (0) 30 22 45 43 22
                </a>
              </p>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
