"use client";

import Link from "next/link";
import { articles, type Article } from "../aktuelles/articles";
import { useLang } from "../contexts/LanguageContext";

const LABELS = {
  de: { eyebrow: "Ratgeber & Fachwissen", cta: "Alle Artikel →" },
  en: { eyebrow: "Guides & Expert Knowledge", cta: "All articles →" },
};

/**
 * Verlinkt von einer Service-Seite auf passende Ratgeber-Artikel in "Aktuelles".
 * Stärkt die interne Verlinkung in beide Richtungen (bisher verwiesen nur
 * Artikel auf Service-Seiten, nie umgekehrt) und beschleunigt die Indexierung
 * neuer Artikel durch bereits gut verlinkte, etablierte Seiten.
 */
export function RelatedArticles({ slugs, accent = "#8B3A22" }: { slugs: string[]; accent?: string }) {
  const { lang } = useLang();
  const al = <T,>(field: { de: T; en: T }): T => field[lang];
  const t = LABELS[lang];

  const items = slugs
    .map((s) => articles.find((a) => a.slug === s))
    .filter((a): a is Article => !!a);

  if (items.length === 0) return null;

  return (
    <section style={{ background: "#FAF6F1", padding: "4.5rem 0" }}>
      <div className="site-container" style={{ maxWidth: "960px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: accent, margin: 0 }}>
            {t.eyebrow}
          </p>
          <Link href="/aktuelles" style={{ fontSize: "13px", fontWeight: 600, color: accent, textDecoration: "none" }}>
            {t.cta}
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
          {items.map((article) => (
            <Link key={article.slug} href={`/aktuelles/${article.slug}`} style={{ textDecoration: "none" }} className="related-article-card">
              <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "14px", padding: "1.5rem", height: "100%" }}>
                <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1614", margin: "0 0 0.5rem", lineHeight: 1.4 }}>
                  {al(article.title)}
                </p>
                <p style={{ fontSize: "0.8125rem", color: "#7A6E6A", margin: 0, lineHeight: 1.6 }}>
                  {al(article.readTime)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .related-article-card div { transition: border-color 0.15s, box-shadow 0.15s; }
        .related-article-card:hover div { border-color: ${accent}66; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
      `}</style>
    </section>
  );
}
