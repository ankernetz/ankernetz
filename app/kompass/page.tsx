import { Compass } from "lucide-react";
import Kompass from "../components/Kompass";

export default function KompassPage() {
  return (
    <main style={{ overflowX: "hidden", background: "#f4f7fb", paddingTop: "5rem" }}>
      <section style={{ background: "#0b1220", padding: "5rem 1.5rem 3rem" }}>
        <div className="site-container" style={{ maxWidth: "680px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "999px", padding: "6px 14px", marginBottom: "1.5rem",
          }}>
            <Compass size={14} color="#8fb8ff" />
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8fb8ff", letterSpacing: "0.03em" }}>Kompass</span>
          </div>
          <h1 style={{
            fontSize: "clamp(1.875rem,4vw,2.75rem)", fontWeight: 700, color: "#ffffff",
            letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: "1.25rem",
          }}>
            Der Ankernetz-Kompass: Welche Hilfe passt zu Ihrer Situation?
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}>
            Ein kurzer, ernsthafter Fragebogen - keine Diagnose, sondern eine erste Orientierung,
            welches unserer Angebote zu Ihrer Situation passen könnte. Etwa 3 Minuten, anonym, ohne Anmeldung.
          </p>
        </div>
      </section>

      <Kompass />
    </main>
  );
}
