"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY  = "ankernetz_consent_v3";
const LOCATION_KEY = "ankernetz_location";

function requestLocation() {
  if (typeof navigator !== "undefined" && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => localStorage.setItem(LOCATION_KEY, JSON.stringify({
        lat: pos.coords.latitude, lon: pos.coords.longitude,
      })),
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

  if (!visible) return null;

  // ── Toggle-Komponente ──────────────────────────────────────────
  const Toggle = ({ on, onChange, disabled }: { on: boolean; onChange: () => void; disabled?: boolean }) => (
    <button
      onClick={disabled ? undefined : onChange}
      aria-checked={on}
      role="switch"
      style={{
        width: "40px", height: "22px", borderRadius: "11px",
        border: "none", padding: 0, flexShrink: 0,
        background: on ? "#cc0000" : "#555555",
        cursor: disabled ? "default" : "pointer",
        position: "relative", transition: "background 0.2s",
        outline: "none",
      }}
    >
      <span style={{
        position: "absolute",
        top: "3px",
        left: on ? "21px" : "3px",
        width: "16px", height: "16px",
        borderRadius: "50%",
        background: "white",
        transition: "left 0.2s",
        boxShadow: "0 1px 3px rgba(0,0,0,0.35)",
        display: "block",
      }} />
    </button>
  );

  const BTN_BASE: React.CSSProperties = {
    display: "block", width: "100%",
    padding: "9px 10px",
    fontSize: "12px", fontWeight: 700,
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "center", cursor: "pointer",
    border: "2px solid #1a1a1a",
    borderRadius: "0px",
    whiteSpace: "nowrap",
    lineHeight: 1.3,
    transition: "opacity 0.15s",
  };

  return (
    <>
      {/* ── Dunkles Overlay — sperrt die Seite ── */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 9998,
        background: "rgba(0,0,0,0.5)",
      }} />

      {/* ── Cookie-Banner ── */}
      <div
        id="CybotCookiebotDialog"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
          background: "#ffffff",
          boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "12px", color: "#1a1a1a",
          lineHeight: "1.5",
        }}
      >
        {/* ── Hauptbereich: Text | Buttons ── */}
        <div style={{
          display: "flex",
          borderBottom: "1px solid #cccccc",
        }}>

          {/* Linke Spalte: Scrollbarer Text */}
          <div style={{
            flex: 1,
            minWidth: 0,
            height: "128px",
            overflowY: "scroll",
            padding: "14px 20px 14px 20px",
            borderRight: "1px solid #cccccc",
          }}>
            <p style={{
              fontWeight: 700,
              fontSize: "13px",
              marginBottom: "8px",
              color: "#000000",
            }}>
              Ihre Cookie-Einstellungen
            </p>
            <p style={{ color: "#333333", fontSize: "12px" }}>
              Neben technisch notwendigen Cookies verwenden wir und unsere hier
              aufgelisteten Empfänger auch Einwilligungs-bedürftige Cookies und ähnliche
              Technologien. Indem Sie auf die Schaltfläche "Alle optionalen Cookies
              zulassen" klicken, stimmen Sie dem Setzen der optionalen Cookies selbst
              sowie der weiteren Verarbeitung – inklusive Übermittlung – Ihrer
              personenbezogenen Daten zu Zwecken der Verbesserung Ihres Komforts und der
              Berücksichtigung von Präferenzen durch Personalisierung, Analyse des
              Nutzerverhaltens sowie der Durchführung und Überprüfung von
              Werbemaßnahmen zu. Alternativ können Sie auch einzelne Kategorien von
              Cookies auswählen und deren Verwendung zustimmen, indem Sie auf die
              Schaltfläche "Auswahl speichern" klicken. Ihre Einwilligung umfasst dabei
              stets die Verarbeitung in unsicheren Drittländern. Wir weisen auf ein nicht
              mit der EU vergleichbares Datenschutzniveau bei solchen Ländern hin. Es
              besteht u.a. das Risiko, dass dortige Behörden auf die verarbeiteten Daten
              zugreifen können und Ihre Datenschutzrechte eingeschränkt sind. Weitere
              Erklärungen zu den verwendeten Cookies und ähnlichen Technologien sowie zur
              Verarbeitung Ihrer personenbezogenen Daten, z.B. zu den verarbeiteten
              Daten, den Speicherdauern und den Datenempfängern, können Sie durch
              Anklicken von "Details zeigen" oder durch Aufrufen unserer
              Datenschutzerklärung, die am Ende der Webseite verlinkt ist, wählen und
              finden. Je nach den von Ihnen gewählten Einstellungen oder wenn Sie die
              Schaltfläche "Alle optionalen Cookies ablehnen" wählen, stehen Ihnen
              möglicherweise einige Funktionen der Website nicht mehr zur Verfügung. Sie
              können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft in unserer
              Datenschutzerklärung oder durch Anklicken des Datenschutz-Symbols am Ende
              der Seite widerrufen.
            </p>

            {/* Details-Bereich */}
            {details && (
              <div style={{
                marginTop: "14px",
                borderTop: "1px solid #cccccc",
                paddingTop: "14px",
                display: "flex", flexDirection: "column", gap: "10px",
              }}>
                {([
                  { label: "Notwendig",                   on: true,     fn: undefined,                   req: true,  desc: "Technisch notwendige Cookies für den Betrieb der Website. Speicherdauer: Sitzung." },
                  { label: "Komfort und Personalisierung", on: komfort,  fn: () => setKomfort(v => !v),   req: false, desc: "Standorterfassung für schnelle Notfallhilfe im Chat. Speicherdauer: 30 Tage." },
                  { label: "Analyse",                     on: analyse,  fn: () => setAnalyse(v => !v),   req: false, desc: "Analyse des Nutzerverhaltens. Derzeit nicht aktiv." },
                  { label: "Marketing",                   on: marketing, fn: () => setMarketing(v => !v), req: false, desc: "Zielgerichtete Werbung. Derzeit nicht aktiv." },
                ] as const).map(c => (
                  <div key={c.label} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <Toggle on={c.on} onChange={c.fn ?? (() => {})} disabled={c.req} />
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "12px", marginBottom: "2px" }}>
                        {c.label}
                        {c.req && <span style={{ fontWeight: 400, color: "#777", marginLeft: "5px" }}>(immer aktiv)</span>}
                      </p>
                      <p style={{ color: "#666", fontSize: "11px", lineHeight: 1.4 }}>{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Rechte Spalte: Buttons */}
          <div style={{
            width: "208px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "8px",
            padding: "14px 16px",
          }}>
            <button
              onClick={() => save(true)}
              style={{ ...BTN_BASE, background: "#cc0000", border: "none", color: "white" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Alle optionalen Cookies zulassen
            </button>
            <button
              onClick={() => save(komfort)}
              style={{ ...BTN_BASE, background: "white", color: "#1a1a1a" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#f0f0f0")}
              onMouseLeave={e => (e.currentTarget.style.background = "white")}
            >
              Auswahl speichern
            </button>
            <button
              onClick={() => save(false)}
              style={{ ...BTN_BASE, background: "white", color: "#1a1a1a" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#f0f0f0")}
              onMouseLeave={e => (e.currentTarget.style.background = "white")}
            >
              Alle optionalen Cookies ablehnen
            </button>
          </div>
        </div>

        {/* ── Footer-Leiste ── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 20px",
          background: "#ffffff",
          gap: "16px",
          flexWrap: "wrap",
        }}>
          {/* Logo — Cookiebot-Style */}
          <div style={{ display: "flex", alignItems: "center", gap: "7px", flexShrink: 0 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="3" fill="#1a3f6f"/>
              <text x="12" y="17" textAnchor="middle" fill="white" fontSize="13" fontWeight="900" fontFamily="Arial">A</text>
            </svg>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.1 }}>Ankernetz</div>
              <div style={{ fontSize: "9px", color: "#999999", lineHeight: 1.1 }}>by Datenschutz</div>
            </div>
          </div>

          {/* Kategorie-Toggles */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            flex: 1,
            justifyContent: "center",
          }}>
            {([
              { label: "Notwendig",                   on: true,     fn: undefined as (() => void) | undefined,  req: true  },
              { label: "Komfort und Personalisierung", on: komfort,  fn: () => setKomfort(v => !v),             req: false },
              { label: "Analyse",                     on: analyse,  fn: () => setAnalyse(v => !v),              req: false },
              { label: "Marketing",                   on: marketing, fn: () => setMarketing(v => !v),           req: false },
            ]).map(c => (
              <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <Toggle on={c.on} onChange={c.fn ?? (() => {})} disabled={c.req} />
                <span style={{ fontSize: "12px", color: "#333333", whiteSpace: "nowrap" }}>{c.label}</span>
              </div>
            ))}
          </div>

          {/* Details zeigen */}
          <button
            onClick={() => setDetails(v => !v)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "12px", fontWeight: 700, color: "#cc0000",
              display: "flex", alignItems: "center", gap: "3px",
              whiteSpace: "nowrap", flexShrink: 0,
              fontFamily: "Arial, Helvetica, sans-serif",
              padding: 0,
            }}
          >
            {details ? "Details ausblenden" : "Details zeigen"}{" "}
            <span style={{ fontSize: "13px", lineHeight: 1 }}>›</span>
          </button>
        </div>
      </div>
    </>
  );
}
