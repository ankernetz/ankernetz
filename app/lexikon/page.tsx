import Link from "next/link";
import { BookOpenText } from "lucide-react";
import LexikonBrowser from "../components/LexikonBrowser";

import { lexikonBuchstaben as lexikon } from "../data/lexikon";


const alleTerme = lexikon.flatMap((l) => l.entries);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Wortlexikon Kinder- und Jugendhilfe",
  description: "Alphabetisches Lexikon der wichtigsten Begriffe rund um Kinder- und Jugendhilfe, SGB VIII und die Angebote von Ankernetz.",
  hasDefinedTerm: alleTerme.map((e) => ({
    "@type": "DefinedTerm",
    name: e.term,
    description: e.def,
  })),
};

export default function LexikonPage() {
  return (
    <main style={{ overflowX: "hidden", background: "#f4f7fb", paddingTop: "5rem" }}>
      <section style={{ background: "#0b1220", padding: "5rem 1.5rem 3.5rem" }}>
        <div className="site-container" style={{ maxWidth: "820px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "999px", padding: "6px 14px", marginBottom: "1.5rem",
          }}>
            <BookOpenText size={14} color="#8fb8ff" />
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8fb8ff", letterSpacing: "0.03em" }}>Wortlexikon</span>
          </div>
          <h1 style={{
            fontSize: "clamp(2rem,4.5vw,3.25rem)", fontWeight: 700, color: "#ffffff",
            letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "1.25rem",
          }}>
            Wortlexikon Kinder- und Jugendhilfe
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, maxWidth: "680px" }}>
            Von ADHS bis Zuständigkeitswechsel - ein alphabetisches Nachschlagewerk der wichtigsten
            Fachbegriffe aus SGB VIII, Diagnostik und Jugendhilfe-Praxis. Kurz erklärt, ohne Behördendeutsch.
          </p>
        </div>
      </section>

      <LexikonBrowser lexikon={lexikon} />

      <section style={{ background: "#0b1220", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div className="site-container" style={{ maxWidth: "620px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
            Begriff nicht gefunden - oder Fragen zum konkreten Fall?
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Im Glossar beantworten wir auch komplexere Fragen im Zusammenhang - oder melden Sie sich direkt.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/aktuelles#glossar" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#6FA3FE", color: "white", fontWeight: 700, fontSize: "15px",
              padding: "15px 30px", borderRadius: "12px", textDecoration: "none",
            }}>
              Zum Glossar & FAQ
            </Link>
            <Link href="/kontakt" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)",
              color: "white", fontWeight: 600, fontSize: "14px",
              padding: "15px 26px", borderRadius: "12px", textDecoration: "none",
            }}>
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
