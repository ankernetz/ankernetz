import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "./articles";

export const metadata: Metadata = {
  title: "Aktuelles & Ratgeber | Ankernetz Berlin Brandenburg",
  description:
    "Ratgeber und Fachbeiträge zu Jugendhilfe, Krisenintervention, sensorischer Kleidung und Unterstützungsangeboten für Kinder und Jugendliche in Berlin und Brandenburg.",
  keywords: [
    "Jugendhilfe Ratgeber Berlin",
    "Krisenintervention Kinder Berlin",
    "sensorische Kleidung ADHS Autismus",
    "Ankerkleidung Ratgeber",
    "Ankernetz Berlin Brandenburg",
  ],
  alternates: { canonical: "https://www.ankernetz.com/aktuelles" },
  openGraph: {
    title: "Aktuelles & Ratgeber | Ankernetz Berlin Brandenburg",
    description:
      "Fachbeiträge zu Jugendhilfe, Krisenintervention und Ankerkleidung - von Ankernetz Berlin Brandenburg.",
    url: "https://www.ankernetz.com/aktuelles",
  },
};

export default function AktuellesPage() {
  return (
    <main style={{ background: "#FAF6F1", minHeight: "100vh", paddingTop: "5rem" }}>
      {/* Hero */}
      <section style={{ padding: "4rem 1.5rem 3rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{
            fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "#8B3A22", marginBottom: "0.75rem",
          }}>
            Ratgeber & Fachwissen
          </p>
          <h1 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700,
            color: "#1A1614", letterSpacing: "-0.025em", lineHeight: 1.15,
            marginBottom: "1.25rem",
          }}>
            Aktuelles von Ankernetz
          </h1>
          <p style={{
            fontSize: "1.0625rem", color: "#4A3E38", lineHeight: 1.75,
            maxWidth: "680px",
          }}>
            Fachbeiträge zu Jugendhilfe, Krisenintervention, sensorischer Kleidung und
            Unterstützungsangeboten für Kinder und Jugendliche in Berlin und Brandenburg.
          </p>
        </div>
      </section>

      {/* Artikel-Liste */}
      <section style={{ padding: "0 1.5rem 6rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.75rem",
          }}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/aktuelles/${article.slug}`}
                style={{ textDecoration: "none" }}
                className="article-card"
              >
                <article style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "16px",
                  padding: "2rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 0.2s ease, transform 0.2s ease",
                }}>
                  {/* Meta */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: "0.75rem",
                    marginBottom: "1.25rem",
                  }}>
                    <time style={{
                      fontSize: "0.75rem", color: "#8B3A22", fontWeight: 600,
                      letterSpacing: "0.05em",
                    }}>
                      {new Date(article.date).toLocaleDateString("de-DE", {
                        day: "2-digit", month: "long", year: "numeric",
                      })}
                    </time>
                    <span style={{ color: "rgba(0,0,0,0.2)", fontSize: "0.75rem" }}>·</span>
                    <span style={{ fontSize: "0.75rem", color: "#7A6E6A" }}>
                      {article.readTime}
                    </span>
                  </div>

                  {/* Titel */}
                  <h2 style={{
                    fontSize: "1.125rem", fontWeight: 700, color: "#1A1614",
                    lineHeight: 1.35, marginBottom: "1rem", letterSpacing: "-0.015em",
                  }}>
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p style={{
                    fontSize: "0.9375rem", color: "#5A4E48", lineHeight: 1.7,
                    marginBottom: "1.75rem", flexGrow: 1,
                  }}>
                    {article.excerpt}
                  </p>

                  {/* CTA */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: "0.375rem",
                    fontSize: "0.875rem", fontWeight: 600, color: "#8B3A22",
                  }}>
                    Artikel lesen
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .article-card article:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.10);
          transform: translateY(-2px);
        }
      `}</style>
    </main>
  );
}
