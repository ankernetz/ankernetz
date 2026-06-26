"use client";
import { useState } from "react";
import { useT } from "../i18n/useT";

const TRANS = {
  de: {
    heroEyebrow: "Für Jugendämter & Fachkräfte",
    heroH1: "Platzanfrage",
    heroSub: "Wir prüfen Ihren Bedarf und melden uns innerhalb von 24 Stunden.",
    kenn: [
      { zahl: "< 24h", text: "Rückmeldung auf Ihre Anfrage" },
      { zahl: "24/7", text: "Erreichbar bei Krisenaufnahmen" },
    ],
    successTitle: "Anfrage eingegangen",
    successText: "Vielen Dank. Wir haben Ihre Platzanfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.",
    successCrisis: "Bei dringenden Krisenaufnahmen:",
    formTitle: "Anfrage stellen",
    formRequired: "Alle mit * markierten Felder sind Pflichtfelder.",
    sec1: "Ihre Daten",
    labelVorname: "Vorname *",
    labelNachname: "Nachname *",
    labelInstitution: "Jugendamt / Institution *",
    placeholderInstitution: "z.B. Jugendamt Berlin Mitte",
    labelEmail: "E-Mail *",
    labelTelefon: "Telefon *",
    sec2: "Gewünschtes Angebot",
    labelBereich: "Bereich *",
    selectBereich: "Bitte wählen …",
    bereichOptions: [
      "Krisenintervention (24/7)",
      "Therapie & Wohnen",
      "Jugendhilfe (Kinder)",
      "Frühe Hilfen (Kleinkinder)",
      "Diagnostik & Clearing",
      "Kinder- und Jugendpsychotherapie",
      "Beratung & Prävention",
      "Übergang Arbeit",
      "Versorgung / Ankerkleidung",
      "Noch unklar - Beratungsbedarf",
    ],
    sec3: "Angaben zum Kind / Jugendlichen",
    labelAlter: "Alter *",
    placeholderAlter: "z.B. 14",
    labelGeschlecht: "Geschlecht",
    selectGeschlecht: "Bitte wählen",
    geschlechtOptions: ["Männlich", "Weiblich", "Divers", "Keine Angabe"],
    labelDringlichkeit: "Dringlichkeit *",
    selectDringlichkeit: "Bitte wählen",
    dringlichkeitOptions: [
      "Sofort (Krisenaufnahme)",
      "Innerhalb von 1 Woche",
      "Innerhalb von 1 Monat",
      "Planbar (über 1 Monat)",
    ],
    labelSituation: "Kurzbeschreibung der Situation *",
    placeholderSituation: "Bitte beschreiben Sie kurz die aktuelle Situation und den Hilfebedarf …",
    labelBisherige: "Bisherige Hilfen (optional)",
    placeholderBisherige: "Welche Hilfen wurden bisher gewährt?",
    dsgvoText1: "Ich stimme der Verarbeitung der übermittelten Daten gemäß der",
    dsgvoLink: "Datenschutzerklärung",
    dsgvoText2: "zu. Die Daten werden ausschließlich zur Bearbeitung dieser Anfrage genutzt. *",
    submitSending: "Wird gesendet …",
    submitBtn: "Platzanfrage absenden",
    footerCrisis: "Bei dringenden Krisenaufnahmen rufen Sie uns bitte direkt an:",
  },
  en: {
    heroEyebrow: "For Youth Welfare Offices & professionals",
    heroH1: "Placement request",
    heroSub: "We will review your needs and get back to you within 24 hours.",
    kenn: [
      { zahl: "< 24 h", text: "Response to your request" },
      { zahl: "24/7", text: "Available for emergency admissions" },
    ],
    successTitle: "Request received",
    successText: "Thank you. We have received your placement request and will get back to you within 24 hours.",
    successCrisis: "For urgent crisis admissions:",
    formTitle: "Submit a request",
    formRequired: "All fields marked with * are required.",
    sec1: "Your details",
    labelVorname: "First name *",
    labelNachname: "Last name *",
    labelInstitution: "Youth Welfare Office / Institution *",
    placeholderInstitution: "e.g. Youth Welfare Office Berlin Mitte",
    labelEmail: "E-mail *",
    labelTelefon: "Phone *",
    sec2: "Requested service",
    labelBereich: "Service area *",
    selectBereich: "Please select …",
    bereichOptions: [
      "Crisis intervention (24/7)",
      "Therapy & residential care",
      "Youth welfare (children)",
      "Early support (infants/toddlers)",
      "Diagnostics & clearing",
      "Child and adolescent psychotherapy",
      "Counselling & prevention",
      "Transition to employment",
      "Care & supply services",
      "Not yet clear — need advice",
    ],
    sec3: "Information about the child / young person",
    labelAlter: "Age *",
    placeholderAlter: "e.g. 14",
    labelGeschlecht: "Gender",
    selectGeschlecht: "Please select",
    geschlechtOptions: ["Male", "Female", "Non-binary / other", "Prefer not to say"],
    labelDringlichkeit: "Urgency *",
    selectDringlichkeit: "Please select",
    dringlichkeitOptions: [
      "Immediate (crisis admission)",
      "Within 1 week",
      "Within 1 month",
      "Plannable (more than 1 month)",
    ],
    labelSituation: "Brief description of the situation *",
    placeholderSituation: "Please briefly describe the current situation and the need for support …",
    labelBisherige: "Previous support services (optional)",
    placeholderBisherige: "Which services have been provided previously?",
    dsgvoText1: "I consent to the processing of the submitted data in accordance with the",
    dsgvoLink: "Privacy Policy",
    dsgvoText2: "The data will be used exclusively to process this request. *",
    submitSending: "Sending …",
    submitBtn: "Submit placement request",
    footerCrisis: "For urgent crisis admissions please call us directly:",
  },
};

export default function PlatzanfragePage() {
  const t = useT(TRANS);
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
      const res = await fetch("/api/platzanfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Fehler beim Senden");
      setSubmitted(true);
    } catch {
      alert("Fehler beim Senden. Bitte rufen Sie uns direkt an: 030 22 45 43 22");
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
            {t.heroEyebrow}
          </p>
          <h1 style={{
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800,
            color: "white", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "18px",
          }}>
            {t.heroH1}
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, maxWidth: "480px" }}>
            {t.heroSub}
          </p>

          {/* Kennzahlen */}
          <div style={{
            display: "flex", gap: "2rem", marginTop: "2.5rem", flexWrap: "wrap",
          }}>
            {t.kenn.map((k) => (
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
              {t.successTitle}
            </h2>
            <p style={{ color: "#374151", lineHeight: 1.7, maxWidth: "420px", margin: "0 auto" }}>
              {t.successText}
            </p>
            <p style={{ marginTop: "1.5rem", fontSize: "14px", color: "#6b7280" }}>
              {t.successCrisis}{" "}
              <a href="tel:+493022454322" style={{ color: "#1a3f6f", fontWeight: 700, textDecoration: "none" }}>
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
                {t.formTitle}
              </h2>
              <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>
                {t.formRequired}
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ padding: "2.5rem" }}>

              {/* Abschnitt: Ihre Daten */}
              <p style={{
                fontSize: "10px", fontWeight: 800, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.25rem",
              }}>
                {t.sec1}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <label style={labelStyle}>{t.labelVorname}</label>
                  <input type="text" required style={inputStyle} value={form.vorname}
                    onChange={(e) => set("vorname", e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>{t.labelNachname}</label>
                  <input type="text" required style={inputStyle} value={form.nachname}
                    onChange={(e) => set("nachname", e.target.value)} />
                </div>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>{t.labelInstitution}</label>
                <input type="text" required style={inputStyle} value={form.institution}
                  onChange={(e) => set("institution", e.target.value)}
                  placeholder={t.placeholderInstitution} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
                <div>
                  <label style={labelStyle}>{t.labelEmail}</label>
                  <input type="email" required style={inputStyle} value={form.email}
                    onChange={(e) => set("email", e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>{t.labelTelefon}</label>
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
                  {t.sec2}
                </p>
                <label style={labelStyle}>{t.labelBereich}</label>
                <select required style={inputStyle} value={form.bereich}
                  onChange={(e) => set("bereich", e.target.value)}>
                  <option value="">{t.selectBereich}</option>
                  {t.bereichOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>

              {/* Abschnitt: Angaben zum Kind */}
              <div style={{ borderTop: "1px solid #eef2f8", paddingTop: "2rem", marginBottom: "2rem" }}>
                <p style={{
                  fontSize: "10px", fontWeight: 800, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.25rem",
                }}>
                  {t.sec3}
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={labelStyle}>{t.labelAlter}</label>
                    <input type="number" min={0} max={25} required style={inputStyle}
                      value={form.alter} onChange={(e) => set("alter", e.target.value)}
                      placeholder={t.placeholderAlter} />
                  </div>
                  <div>
                    <label style={labelStyle}>{t.labelGeschlecht}</label>
                    <select style={inputStyle} value={form.geschlecht}
                      onChange={(e) => set("geschlecht", e.target.value)}>
                      <option value="">{t.selectGeschlecht}</option>
                      {t.geschlechtOptions.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <label style={labelStyle}>{t.labelDringlichkeit}</label>
                  <select required style={inputStyle} value={form.dringlichkeit}
                    onChange={(e) => set("dringlichkeit", e.target.value)}>
                    <option value="">{t.selectDringlichkeit}</option>
                    {t.dringlichkeitOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <label style={labelStyle}>{t.labelSituation}</label>
                  <textarea
                    required rows={5}
                    style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
                    value={form.situation}
                    onChange={(e) => set("situation", e.target.value)}
                    placeholder={t.placeholderSituation}
                  />
                </div>

                <div>
                  <label style={labelStyle}>{t.labelBisherige}</label>
                  <textarea
                    rows={3}
                    style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
                    value={form.bisherige}
                    onChange={(e) => set("bisherige", e.target.value)}
                    placeholder={t.placeholderBisherige}
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
                  {t.dsgvoText1}{" "}
                  <a href="/datenschutz" style={{ color: "#1a3f6f", fontWeight: 600, textDecoration: "underline" }}>
                    {t.dsgvoLink}
                  </a>{" "}
                  {t.dsgvoText2}
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
                {submitting ? t.submitSending : t.submitBtn}
              </button>

              <p style={{ fontSize: "12px", color: "#9ca3af", textAlign: "center", marginTop: "1rem" }}>
                {t.footerCrisis}{" "}
                <a href="tel:+493022454322" style={{ color: "#1a3f6f", fontWeight: 700, textDecoration: "none" }}>
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
