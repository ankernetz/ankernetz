"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY  = "ankernetz_consent";
const LOCATION_KEY = "ankernetz_location";

function requestLocation() {
  if (typeof navigator !== "undefined" && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => localStorage.setItem(LOCATION_KEY, JSON.stringify({ lat: pos.coords.latitude, lon: pos.coords.longitude })),
      () => {}
    );
  }
}

export default function CookieBanner() {
  const [visible,   setVisible]   = useState(false);
  const [details,   setDetails]   = useState(false);
  const [komfort,   setKomfort]   = useState(false);
  const [analyse,   setAnalyse]   = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function save(komfortOn: boolean) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ komfort: komfortOn, analyse, marketing }));
    if (komfortOn) requestLocation();
    setVisible(false);
  }
  function acceptAll()  { save(true); }
  function saveChoice() { save(komfort); }
  function rejectAll()  { save(false); }

  if (!visible) return null;

  const Toggle = ({ on, onChange, disabled }: { on: boolean; onChange: () => void; disabled?: boolean }) => (
    <button onClick={disabled ? undefined : onChange} style={{
      width: "38px", height: "20px", borderRadius: "10px", border: "none", padding: 0,
      background: on ? "#c0392b" : "#555",
      cursor: disabled ? "default" : "pointer",
      position: "relative", flexShrink: 0, transition: "background 0.18s",
    }}>
      <span style={{
        position: "absolute", top: "2px", left: on ? "20px" : "2px",
        width: "16px", height: "16px", borderRadius: "50%", background: "white",
        transition: "left 0.18s", boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
        display: "block",
      }} />
    </button>
  );

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
      background: "white",
      boxShadow: "0 2px 16px rgba(0,0,0,0.22)",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: "12px", color: "#222",
      lineHeight: 1.5,
    }}>

      {/* ── Hauptbereich: Text links | Buttons rechts ── */}
      <div style={{ display: "flex", borderBottom: "1px solid #ddd" }}>

        {/* Text scrollbar links */}
        <div style={{
          flex: 1,
          height: "130px",
          overflowY: "scroll",
          padding: "14px 18px",
          borderRight: "1px solid #ddd",
        }}>
          <p style={{ fontWeight: 700, fontSize: "13px", marginBottom: "8px" }}>
            Ihre Cookie-Einstellungen
          </p>
          <p style={{ color: "#333" }}>
            Neben technisch notwendigen Cookies verwenden wir und unsere hier aufgelisteten Empfänger
            auch Einwilligungs-bedürftige Cookies und ähnliche Technologien. Indem Sie auf die
            Schaltfläche "Alle optionalen Cookies zulassen" klicken, stimmen Sie dem Setzen der
            optionalen Cookies selbst sowie der weiteren Verarbeitung – inklusive Übermittlung –
            Ihrer personenbezogenen Daten zu Zwecken der Verbesserung Ihres Komforts und der
            Berücksichtigung von Präferenzen durch Personalisierung, Analyse des Nutzerverhaltens
            sowie der Durchführung und Überprüfung von Werbemaßnahmen zu. Alternativ können Sie
            auch einzelne Kategorien von Cookies auswählen und deren Verwendung zustimmen, indem
            Sie auf die Schaltfläche "Auswahl speichern" klicken. Ihre Einwilligung umfasst dabei
            stets die Verarbeitung in unsicheren Drittländern. Wir weisen auf ein nicht mit der EU
            vergleichbares Datenschutzniveau bei solchen Ländern hin. Es besteht u.a. das Risiko,
            dass dortige Behörden auf die verarbeiteten Daten zugreifen können und Ihre
            Datenschutzrechte eingeschränkt sind. Weitere Erklärungen zu den verwendeten Cookies
            und ähnlichen Technologien sowie zur Verarbeitung Ihrer personenbezogenen Daten, z.B.
            zu den verarbeiteten Daten, den Speicherdauern und den Datenempfängern, können Sie
            durch Anklicken von "Details zeigen" oder durch Aufrufen unserer Datenschutzerklärung,
            die am Ende der Webseite verlinkt ist, wählen und finden. Je nach den von Ihnen
            gewählten Einstellungen oder wenn Sie die Schaltfläche "Alle optionalen Cookies
            ablehnen" wählen, stehen Ihnen möglicherweise einige Funktionen der Website nicht mehr
            zur Verfügung. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft in
            unserer Datenschutzerklärung oder durch Anklicken des Datenschutz-Symbols am Ende der
            Seite widerrufen.
          </p>

          {details && (
            <div style={{ marginTop: "14px", borderTop: "1px solid #ddd", paddingTop: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Notwendig",                   desc: "Technisch erforderliche Cookies. Speicherdauer: Sitzung.", on: true,     required: true,  fn: undefined },
                { label: "Komfort und Personalisierung", desc: "Standorterfassung für Notfallhilfe im Chat. Speicherdauer: 30 Tage.",   on: komfort,  required: false, fn: () => setKomfort(v => !v) },
                { label: "Analyse",                     desc: "Analyse des Nutzerverhaltens. Derzeit nicht aktiv.",          on: analyse,  required: false, fn: () => setAnalyse(v => !v) },
                { label: "Marketing",                   desc: "Zielgerichtete Werbung. Derzeit nicht aktiv.",                on: marketing, required: false, fn: () => setMarketing(v => !v) },
              ].map(c => (
                <div key={c.label} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <Toggle on={c.on} onChange={c.fn ?? (() => {})} disabled={c.required} />
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "12px" }}>{c.label}{c.required && <span style={{ fontWeight: 400, color: "#888", marginLeft: "5px" }}>(immer aktiv)</span>}</p>
                    <p style={{ color: "#666", fontSize: "11px" }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Buttons rechts */}
        <div style={{
          width: "210px", flexShrink: 0,
          display: "flex", flexDirection: "column", gap: "7px",
          padding: "14px 16px", justifyContent: "center",
        }}>
          <button onClick={acceptAll} style={{
            padding: "8px 12px", border: "none", borderRadius: "2px",
            background: "#c0392b", color: "white",
            fontSize: "12px", fontWeight: 700, cursor: "pointer",
            whiteSpace: "nowrap", transition: "background 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#a93226")}
            onMouseLeave={e => (e.currentTarget.style.background = "#c0392b")}
          >
            Alle optionalen Cookies zulassen
          </button>
          <button onClick={saveChoice} style={{
            padding: "8px 12px", borderRadius: "2px",
            background: "white", border: "2px solid #222", color: "#222",
            fontSize: "12px", fontWeight: 700, cursor: "pointer",
            whiteSpace: "nowrap", transition: "background 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#f5f5f5")}
            onMouseLeave={e => (e.currentTarget.style.background = "white")}
          >
            Auswahl speichern
          </button>
          <button onClick={rejectAll} style={{
            padding: "8px 12px", borderRadius: "2px",
            background: "white", border: "2px solid #222", color: "#222",
            fontSize: "12px", fontWeight: 700, cursor: "pointer",
            whiteSpace: "nowrap", transition: "background 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#f5f5f5")}
            onMouseLeave={e => (e.currentTarget.style.background = "white")}
          >
            Alle optionalen Cookies ablehnen
          </button>
        </div>
      </div>

      {/* ── Footer-Leiste ── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "8px 18px", background: "#fff",
        borderTop: "1px solid #e8e8e8",
        gap: "12px", flexWrap: "wrap",
      }}>
        {/* Cookiebot-Style Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect width="22" height="22" rx="4" fill="#1a3f6f"/>
            <text x="11" y="16" textAnchor="middle" fill="white" fontSize="12" fontWeight="900" fontFamily="Arial">A</text>
          </svg>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#1a3f6f" }}>Ankernetz</div>
            <div style={{ fontSize: "9px", color: "#999" }}>by Datenschutz</div>
          </div>
        </div>

        {/* Toggles */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px", flexWrap: "wrap" }}>
          {[
            { label: "Notwendig",                   on: true,     fn: undefined,                   required: true },
            { label: "Komfort und Personalisierung", on: komfort,  fn: () => setKomfort(v => !v) },
            { label: "Analyse",                     on: analyse,  fn: () => setAnalyse(v => !v)  },
            { label: "Marketing",                   on: marketing, fn: () => setMarketing(v => !v) },
          ].map(c => (
            <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Toggle on={c.on} onChange={c.fn ?? (() => {})} disabled={c.required} />
              <span style={{ fontSize: "12px", color: "#333", whiteSpace: "nowrap" }}>{c.label}</span>
            </div>
          ))}
        </div>

        {/* Details zeigen */}
        <button onClick={() => setDetails(v => !v)} style={{
          background: "none", border: "none", cursor: "pointer",
          fontSize: "12px", color: "#c0392b", fontWeight: 700,
          display: "flex", alignItems: "center", gap: "3px", flexShrink: 0,
          whiteSpace: "nowrap",
        }}>
          {details ? "Details ausblenden" : "Details zeigen"} &gt;
        </button>
      </div>
    </div>
  );
}
