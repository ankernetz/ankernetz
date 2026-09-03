import { BookOpen } from "lucide-react";

import { SeoFaqSchema } from "./SeoFaqSchema";
import { glossarKategorien as kategorien, type FaqItem } from "../data/glossar";


const alleItems: FaqItem[] = kategorien.flatMap((k) => k.items);

export default function GlossarSection() {
  return (
    <div id="glossar" style={{ scrollMarginTop: "80px" }}>
      <section style={{ background: "#0b1220", padding: "4.5rem 1.5rem 3rem" }}>
        <div className="site-container" style={{ maxWidth: "820px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "999px", padding: "6px 14px", marginBottom: "1.5rem",
          }}>
            <BookOpen size={14} color="#8fb8ff" />
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8fb8ff", letterSpacing: "0.03em" }}>Glossar &amp; FAQ</span>
          </div>
          <h2 style={{
            fontSize: "clamp(1.75rem,4vw,2.75rem)", fontWeight: 700, color: "#ffffff",
            letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "1.25rem",
          }}>
            Glossar & häufige Fragen zur Jugendhilfe
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, maxWidth: "680px" }}>
            Was bedeutet SGB VIII? Was unterscheidet Jugendhilfe von Sozialhilfe? Was ist eine Inobhutnahme?
            Hier erklären wir die wichtigsten Begriffe und Fragen rund um Kinder- und Jugendhilfe -
            verständlich, ohne Behördendeutsch, und immer mit Bezug zur Praxis.
          </p>
        </div>
      </section>

      <nav aria-label="Glossar-Kategorien" style={{ background: "#ffffff", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "1.5rem" }}>
        <div className="site-container" style={{ maxWidth: "820px", display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
          {kategorien.map((k, i) => (
            <a key={i} href={`#glossar-kategorie-${i}`} style={{
              fontSize: "0.8125rem", fontWeight: 600, color: "#1a3f6f",
              background: "#eef3fb", padding: "0.5rem 0.875rem", borderRadius: "8px",
              textDecoration: "none",
            }}>
              {k.titel}
            </a>
          ))}
        </div>
      </nav>

      {kategorien.map((kategorie, ki) => (
        <section key={ki} id={`glossar-kategorie-${ki}`} style={{
          background: ki % 2 === 0 ? "#F5F0EA" : "#ffffff",
          padding: "4.5rem 1.5rem", borderTop: "1px solid rgba(0,0,0,0.06)",
          scrollMarginTop: "80px",
        }}>
          <div className="site-container" style={{ maxWidth: "860px" }}>
            <h3 style={{
              fontSize: "clamp(1.375rem,2.75vw,1.875rem)", fontWeight: 700, color: "#1A1614",
              letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "0.75rem",
            }}>
              {kategorie.titel}
            </h3>
            <p style={{ fontSize: "1rem", color: "#5A4E48", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "680px" }}>
              {kategorie.intro}
            </p>
            <div>
              {kategorie.items.map((item, ii) => (
                <details key={ii} className="seo-faq-item" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", padding: "0" }}>
                  <summary style={{
                    fontSize: "0.9375rem", fontWeight: 600, color: "#1A1614",
                    cursor: "pointer", listStyle: "none", display: "flex",
                    justifyContent: "space-between", alignItems: "center",
                    gap: "1rem", padding: "1.375rem 0",
                  }}>
                    <span>{item.q}</span>
                    <span className="faq-icon" style={{ fontSize: "1.375rem", flexShrink: 0, color: "#8B3A22", fontWeight: 300, lineHeight: 1, transition: "transform 0.2s" }}>+</span>
                  </summary>
                  <p style={{ fontSize: "0.9375rem", color: "#5A4E48", lineHeight: 1.85, paddingBottom: "1.5rem", paddingRight: "2.5rem" }}>
                    {item.a}
                  </p>
                </details>
              ))}
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />
            </div>
          </div>
        </section>
      ))}

      <style>{`
        .seo-faq-item[open] .faq-icon { transform: rotate(45deg); }
        .seo-faq-item summary::-webkit-details-marker { display: none; }
      `}</style>

      <SeoFaqSchema items={alleItems} />
    </div>
  );
}
