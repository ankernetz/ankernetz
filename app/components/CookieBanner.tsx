"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY   = "ankernetz_consent";
const LOCATION_KEY  = "ankernetz_location";

function requestLocation() {
  if (typeof navigator !== "undefined" && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => localStorage.setItem(LOCATION_KEY, JSON.stringify({ lat: pos.coords.latitude, lon: pos.coords.longitude })),
      () => { /* verweigert */ }
    );
  }
}

export default function CookieBanner() {
  const [visible,  setVisible]  = useState(false);
  const [details,  setDetails]  = useState(false);
  const [komfort,  setKomfort]  = useState(false);
  const [analyse,  setAnalyse]  = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function save(komfortOn: boolean) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ komfort: komfortOn, analyse, marketing }));
    if (komfortOn) requestLocation();
    setVisible(false);
  }

  function acceptAll()  { setKomfort(true); setAnalyse(true); setMarketing(true); save(true); }
  function saveChoice() { save(komfort); }
  function rejectAll()  { setKomfort(false); setAnalyse(false); setMarketing(false); save(false); }

  if (!visible) return null;

  const Toggle = ({ on, onChange, disabled }: { on: boolean; onChange: () => void; disabled?: boolean }) => (
    <button
      onClick={disabled ? undefined : onChange}
      style={{
        width: "40px", height: "22px", borderRadius: "11px", border: "none",
        background: on ? "#1a3f6f" : "#d1d5db",
        cursor: disabled ? "default" : "pointer",
        position: "relative", flexShrink: 0, transition: "background 0.2s",
        opacity: disabled ? 1 : 1,
      }}
    >
      <span style={{
        position: "absolute", top: "3px",
        left: on ? "21px" : "3px",
        width: "16px", height: "16px", borderRadius: "50%", background: "white",
        transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      }} />
    </button>
  );

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999,
      background: "white",
      boxShadow: "0 -4px 32px rgba(0,0,0,0.14)",
      fontFamily: "Inter, system-ui, sans-serif",
      fontSize: "13px", color: "#1a1a1a",
    }}>

      {/* ── Hauptbereich ── */}
      <div style={{ display: "flex", gap: 0, borderBottom: "1px solid #e5e7eb", maxHeight: "220px" }}>

        {/* Text links */}
        <div style={{
          flex: 1, padding: "20px 24px", overflowY: "auto",
          borderRight: "1px solid #e5e7eb",
        }}>
          <p style={{ fontWeight: 700, fontSize: "14px", marginBottom: "10px" }}>
            Ihre Cookie-Einstellungen
          </p>
          <p style={{ lineHeight: 1.65, color: "#374151" }}>
            Neben technisch notwendigen Cookies verwenden wir und unsere hier aufgelisteten Empfänger
            auch Einwilligungs-bedürftige Cookies und ähnliche Technologien. Indem Sie auf die
            Schaltfläche „Alle optionalen Cookies zulassen" klicken, stimmen Sie dem Setzen der
            optionalen Cookies selbst sowie der weiteren Verarbeitung – inklusive Übermittlung –
            Ihrer personenbezogenen Daten zu Zwecken der Verbesserung Ihres Komforts und der
            Berücksichtigung von Präferenzen durch Personalisierung, Analyse des Nutzerverhaltens
            sowie der Durchführung und Überprüfung von Werbemaßnahmen zu. Alternativ können Sie
            auch einzelne Kategorien von Cookies auswählen und deren Verwendung zustimmen, indem
            Sie auf die Schaltfläche „Auswahl speichern" klicken. Ihre Einwilligung umfasst dabei
            stets die Verarbeitung in unsicheren Drittländern. Wir weisen auf ein nicht mit der EU
            vergleichbares Datenschutzniveau bei solchen Ländern hin. Es besteht u.a. das Risiko,
            dass dortige Behörden auf die verarbeiteten Daten zugreifen können und Ihre
            Datenschutzrechte eingeschränkt sind. Weitere Erklärungen zu den verwendeten Cookies
            und ähnlichen Technologien sowie zur Verarbeitung Ihrer personenbezogenen Daten, z.B.
            zu den verarbeiteten Daten, den Speicherdauern und den Datenempfängern, können Sie
            durch Anklicken von „Details zeigen" oder durch Aufrufen unserer Datenschutzerklärung,
            die am Ende der Webseite verlinkt ist, finden. Je nach den von Ihnen gewählten
            Einstellungen oder wenn Sie die Schaltfläche „Alle optionalen Cookies ablehnen" wählen,
            stehen Ihnen möglicherweise einige Funktionen der Website nicht mehr zur Verfügung. Sie
            können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft in unserer
            Datenschutzerklärung oder durch Anklicken des Datenschutz-Symbols am Ende der Seite
            widerrufen.
          </p>

          {/* Details-Bereich */}
          {details && (
            <div style={{ marginTop: "16px", borderTop: "1px solid #e5e7eb", paddingTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "Notwendig", desc: "Technisch erforderliche Cookies für den Betrieb der Website. Speicherdauer: Sitzung.", required: true },
                { label: "Komfort und Personalisierung", desc: "Ermöglicht personalisierte Funktionen, z.B. die Standorterfassung im Chat für schnellere Hilfe in Notfällen. Speicherdauer: 30 Tage.", on: komfort, toggle: () => setKomfort(v => !v) },
                { label: "Analyse", desc: "Hilft uns zu verstehen, wie Besucher die Website nutzen. Derzeit nicht aktiv.", on: analyse, toggle: () => setAnalyse(v => !v) },
                { label: "Marketing", desc: "Cookies für zielgerichtete Werbung. Derzeit nicht aktiv.", on: marketing, toggle: () => setMarketing(v => !v) },
              ].map(cat => (
                <div key={cat.label} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <Toggle on={cat.required || (cat.on ?? false)} onChange={cat.toggle ?? (() => {})} disabled={cat.required} />
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: "2px" }}>{cat.label}{cat.required && <span style={{ color: "#6b7280", fontWeight: 400, marginLeft: "6px" }}>(immer aktiv)</span>}</p>
                    <p style={{ color: "#6b7280", fontSize: "12px", lineHeight: 1.5 }}>{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Buttons rechts */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "20px 20px", justifyContent: "center", minWidth: "220px" }}>
          <button onClick={acceptAll} style={{
            padding: "10px 16px", borderRadius: "4px", fontSize: "13px", fontWeight: 700,
            background: "#b91c1c", border: "none", color: "white", cursor: "pointer",
            whiteSpace: "nowrap", transition: "background 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#991b1b")}
            onMouseLeave={e => (e.currentTarget.style.background = "#b91c1c")}
          >
            Alle optionalen Cookies zulassen
          </button>
          <button onClick={saveChoice} style={{
            padding: "10px 16px", borderRadius: "4px", fontSize: "13px", fontWeight: 700,
            background: "white", border: "2px solid #1a1a1a", color: "#1a1a1a", cursor: "pointer",
            whiteSpace: "nowrap", transition: "background 0.15s",
          }}
            onMouseEnter={e => { (e.currentTarget.style.background = "#f9fafb"); }}
            onMouseLeave={e => { (e.currentTarget.style.background = "white"); }}
          >
            Auswahl speichern
          </button>
          <button onClick={rejectAll} style={{
            padding: "10px 16px", borderRadius: "4px", fontSize: "13px", fontWeight: 700,
            background: "white", border: "2px solid #1a1a1a", color: "#1a1a1a", cursor: "pointer",
            whiteSpace: "nowrap", transition: "background 0.15s",
          }}
            onMouseEnter={e => { (e.currentTarget.style.background = "#f9fafb"); }}
            onMouseLeave={e => { (e.currentTarget.style.background = "white"); }}
          >
            Alle optionalen Cookies ablehnen
          </button>
        </div>
      </div>

      {/* ── Footer-Leiste ── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "12px",
        padding: "10px 24px", background: "#f9fafb",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{
            width: "28px", height: "28px", borderRadius: "6px",
            background: "linear-gradient(135deg, #1a3f6f, #2563eb)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "12px", fontWeight: 900, color: "white",
          }}>A</div>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, lineHeight: 1, color: "#0f172a" }}>Ankernetz</p>
            <p style={{ fontSize: "9px", color: "#9ca3af", lineHeight: 1, marginTop: "1px" }}>Datenschutz</p>
          </div>
        </div>

        {/* Toggles */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
          {[
            { label: "Notwendig",                  on: true,     toggle: undefined,                   required: true },
            { label: "Komfort und Personalisierung", on: komfort,  toggle: () => setKomfort(v => !v) },
            { label: "Analyse",                    on: analyse,  toggle: () => setAnalyse(v => !v)  },
            { label: "Marketing",                  on: marketing, toggle: () => setMarketing(v => !v) },
          ].map(cat => (
            <div key={cat.label} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <Toggle on={cat.on} onChange={cat.toggle ?? (() => {})} disabled={cat.required} />
              <span style={{ fontSize: "12px", color: "#374151", fontWeight: 500, whiteSpace: "nowrap" }}>{cat.label}</span>
            </div>
          ))}
        </div>

        {/* Details */}
        <button onClick={() => setDetails(v => !v)} style={{
          background: "none", border: "none", cursor: "pointer",
          fontSize: "12px", color: "#b91c1c", fontWeight: 700,
          display: "flex", alignItems: "center", gap: "4px",
          whiteSpace: "nowrap",
        }}>
          {details ? "Details ausblenden" : "Details zeigen"} <span style={{ fontSize: "14px" }}>&gt;</span>
        </button>
      </div>
    </div>
  );
}
