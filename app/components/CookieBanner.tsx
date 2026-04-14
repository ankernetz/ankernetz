"use client";

import { useState, useEffect } from "react";
import { MapPin, Shield } from "lucide-react";

const STORAGE_KEY = "ankernetz_consent";
const LOCATION_KEY = "ankernetz_location";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "full");
    setVisible(false);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          localStorage.setItem(LOCATION_KEY, JSON.stringify({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          }));
        },
        () => { /* verweigert — kein Standort */ }
      );
    }
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "minimal");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 2000,
      background: "white",
      borderTop: "1px solid #e2e8f0",
      boxShadow: "0 -8px 32px rgba(0,0,0,0.12)",
      padding: "20px 24px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      flexWrap: "wrap", gap: "16px",
      fontFamily: "Inter, system-ui, sans-serif",
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", flex: 1, minWidth: "260px" }}>
        <div style={{
          width: "40px", height: "40px", borderRadius: "10px", flexShrink: 0,
          background: "linear-gradient(135deg, #1a3f6f, #2563eb)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Shield size={18} color="white" />
        </div>
        <div>
          <p style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a", marginBottom: "4px" }}>
            Cookies & Standortdaten
          </p>
          <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.5, maxWidth: "560px" }}>
            Wir nutzen Cookies für den Betrieb der Website. Mit{" "}
            <span style={{ fontWeight: 600, color: "#1a3f6f" }}>„Alles akzeptieren"</span> erlauben
            Sie zusätzlich die einmalige Erfassung Ihres Standorts —{" "}
            <span style={{ display: "inline-flex", alignItems: "center", gap: "3px", color: "#dc2626", fontWeight: 600 }}>
              <MapPin size={12} />nur für Notfälle
            </span>
            , damit unser Team Sie im Ernstfall schneller erreichen kann.
          </p>
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", flexShrink: 0, alignItems: "center" }}>
        <button
          onClick={decline}
          style={{
            padding: "9px 18px", borderRadius: "10px", fontSize: "13px", fontWeight: 600,
            background: "transparent", border: "1.5px solid #e2e8f0", color: "#64748b",
            cursor: "pointer", transition: "all 0.15s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#94a3b8"; (e.currentTarget as HTMLElement).style.color = "#0f172a"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0"; (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
        >
          Nur notwendige
        </button>
        <button
          onClick={accept}
          style={{
            padding: "9px 20px", borderRadius: "10px", fontSize: "13px", fontWeight: 700,
            background: "linear-gradient(135deg, #1a3f6f, #2563eb)",
            border: "none", color: "white", cursor: "pointer",
            boxShadow: "0 4px 14px rgba(26,63,111,0.4)",
            transition: "opacity 0.15s, transform 0.15s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
        >
          Alles akzeptieren
        </button>
      </div>
    </div>
  );
}
