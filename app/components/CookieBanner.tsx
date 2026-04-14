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
  const [komfort,   setKomfort]   = useState(false);
  const [analyse,   setAnalyse]   = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [details,   setDetails]   = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function save(komfortOn: boolean) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ komfort: komfortOn, analyse, marketing }));
    if (komfortOn) requestLocation();
    setVisible(false);
  }

  if (!visible) return null;

  /* ── Toggle ─────────────────────────────────────────────────── */
  const Toggle = ({
    on, onChange, disabled,
  }: { on: boolean; onChange: () => void; disabled?: boolean }) => (
    <button
      role="switch"
      aria-checked={on}
      onClick={disabled ? undefined : onChange}
      style={{
        width: "42px", height: "22px", borderRadius: "11px",
        border: "none", padding: 0, flexShrink: 0,
        background: on ? "#bd002c" : "#222222",
        cursor: disabled ? "default" : "pointer",
        position: "relative", transition: "background 0.2s",
        outline: "none",
      }}
    >
      <span style={{
        position: "absolute",
        top: "3px",
        left: on ? "23px" : "3px",
        width: "16px", height: "16px",
        borderRadius: "50%", background: "white",
        transition: "left 0.2s",
        boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
        display: "block",
      }} />
    </button>
  );

  /* ── Button-Basis ────────────────────────────────────────────── */
  const btnBase: React.CSSProperties = {
    width: "100%",
    padding: "12px 15px",
    fontSize: "13px",
    fontWeight: 700,
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "0px",
    lineHeight: 1.3,
    transition: "opacity 0.15s",
  };

  return (
    <>
      {/* ── Dunkles Overlay — sperrt die Seite ──────────────────── */}
      <div style={{
        position: "fixed", inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 9998,
      }} />

      {/* ── Banner-Container ────────────────────────────────────── */}
      <div style={{
        position: "fixed",
        bottom: 0, left: 0, right: 0,
        zIndex: 9999,
        background: "#ffffff",
        borderTop: "1px solid #cccccc",
        boxShadow: "0 -2px 16px rgba(0,0,0,0.12)",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "12px",
        color: "#1a1a1a",
      }}>
        {/* ── Zentrierter Inhalts-Container ───────────────────── */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 0",
          display: "flex",
          gap: "40px",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}>

          {/* ── SPALTE 1: Logo unten links ──────────────────────── */}
          <div style={{
            width: "17%",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            minHeight: "160px",
          }}>
            {/* Logo sitzt unten */}
            <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "7px" }}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <rect width="26" height="26" rx="4" fill="#1a3f6f"/>
                <text x="13" y="18" textAnchor="middle" fill="white" fontSize="14" fontWeight="900" fontFamily="Arial">A</text>
              </svg>
              <div>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2 }}>Ankernetz</div>
                <div style={{ fontSize: "9px", color: "#888888", lineHeight: 1.2 }}>by Datenschutz</div>
              </div>
            </div>
          </div>

          {/* ── SPALTE 2: Hauptinhalt ──────────────────────────── */}
          <div style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}>
            {/* Überschrift */}
            <p style={{
              fontWeight: 700,
              fontSize: "13px",
              color: "#000000",
              marginBottom: "10px",
            }}>
              Ihre Cookie-Einstellungen
            </p>

            {/* Fließtext mit Ausblend-Effekt nach unten */}
            <div style={{ position: "relative" }}>
              <div style={{
                maxHeight: details ? "none" : "80px",
                overflow: "hidden",
                fontSize: "12px",
                lineHeight: "1.6",
                color: "#333333",
              }}>
                Neben technisch notwendigen Cookies verwenden wir und unsere hier aufgelisteten
                Empfänger auch Einwilligungs-bedürftige Cookies und ähnliche Technologien. Indem
                Sie auf die Schaltfläche "Alle optionalen Cookies zulassen" klicken, stimmen Sie
                dem Setzen der optionalen Cookies selbst sowie der weiteren Verarbeitung –
                inklusive Übermittlung – Ihrer personenbezogenen Daten zu Zwecken der
                Verbesserung Ihres Komforts und der Berücksichtigung von Präferenzen durch
                Personalisierung, Analyse des Nutzerverhaltens sowie der Durchführung und
                Überprüfung von Werbemaßnahmen zu. Alternativ können Sie auch einzelne Kategorien
                von Cookies auswählen und deren Verwendung zustimmen, indem Sie auf die
                Schaltfläche "Auswahl speichern" klicken. Ihre Einwilligung umfasst dabei stets
                die Verarbeitung in unsicheren Drittländern. Wir weisen auf ein nicht mit der EU
                vergleichbares Datenschutzniveau bei solchen Ländern hin. Es besteht u.a. das
                Risiko, dass dortige Behörden auf die verarbeiteten Daten zugreifen können und
                Ihre Datenschutzrechte eingeschränkt sind. Weitere Erklärungen zu den verwendeten
                Cookies können Sie durch Aufrufen unserer Datenschutzerklärung finden. Sie können
                Ihre Einwilligung jederzeit widerrufen.
              </div>
              {/* Gradient-Ausblendung wenn eingeklappt */}
              {!details && (
                <div style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  height: "36px",
                  background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                  pointerEvents: "none",
                }} />
              )}
            </div>

            {/* ── Toggles-Reihe ─────────────────────────────── */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
              flexWrap: "wrap",
              gap: "10px",
            }}>
              {/* 4 Toggles */}
              {([
                { label: "Notwendig",                   on: true,     fn: undefined as (() => void) | undefined, disabled: true  },
                { label: "Komfort und Personalisierung", on: komfort,  fn: () => setKomfort(v => !v),            disabled: false },
                { label: "Analyse",                     on: analyse,  fn: () => setAnalyse(v => !v),             disabled: false },
                { label: "Marketing",                   on: marketing, fn: () => setMarketing(v => !v),          disabled: false },
              ]).map(t => (
                <div key={t.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "12px", color: "#333333", whiteSpace: "nowrap" }}>{t.label}</span>
                  <Toggle on={t.on} onChange={t.fn ?? (() => {})} disabled={t.disabled} />
                </div>
              ))}

              {/* Details-Link */}
              <button
                onClick={() => setDetails(v => !v)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: "12px", fontWeight: 700, color: "#bd002c",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  whiteSpace: "nowrap", padding: 0,
                  display: "flex", alignItems: "center", gap: "2px",
                }}
              >
                {details ? "Details ausblenden" : "Details zeigen"} &gt;
              </button>
            </div>
          </div>

          {/* ── SPALTE 3: Buttons ─────────────────────────────── */}
          <div style={{
            width: "22%",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}>
            <button
              onClick={() => save(true)}
              style={{
                ...btnBase,
                background: "#bd002c",
                color: "white",
                border: "none",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Alle optionalen Cookies zulassen
            </button>
            <button
              onClick={() => save(komfort)}
              style={{
                ...btnBase,
                background: "white",
                color: "#000000",
                border: "2px solid black",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#f0f0f0")}
              onMouseLeave={e => (e.currentTarget.style.background = "white")}
            >
              Auswahl speichern
            </button>
            <button
              onClick={() => save(false)}
              style={{
                ...btnBase,
                background: "white",
                color: "#000000",
                border: "2px solid black",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#f0f0f0")}
              onMouseLeave={e => (e.currentTarget.style.background = "white")}
            >
              Alle optionalen Cookies ablehnen
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
