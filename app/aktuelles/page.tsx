"use client";

import Link from "next/link";
import { articles } from "./articles";
import ExternalLinks from "../components/ExternalLinks";
import { useT } from "../i18n/useT";

const TRANS = {
  de: {
    dateLocale: "de-DE",
    eyebrow: "Ratgeber & Fachwissen",
    h1: "Aktuelles von Ankernetz",
    lead: "Fachbeiträge zu Jugendhilfe, Krisenintervention, sensorischer Kleidung und Unterstützungsangeboten für Kinder und Jugendliche in Berlin und Brandenburg.",
    readArticle: "Artikel lesen",
    ctaEyebrow: "Ankernetz Berlin · 24/7 Krisentelefon",
    ctaH2: "Sie brauchen Hilfe? Melden Sie sich.",
    ctaBody: "Unser Team ist rund um die Uhr erreichbar - für Familien, Jugendliche und Fachkräfte. Krisenintervention, Platzanfragen, Beratung.",
    ctaBtn1: "030 22 45 43 22",
    ctaBtn2: "Platzanfrage stellen",
    ctaBtn3: "Kontakt",
    ctaSub: "24 Stunden · 7 Tage · 365 Tage",
    offersEyebrow: "Alle Angebote von Ankernetz Berlin Brandenburg",
    offers: [
      { href: "/krisenintervention",   label: "Krisenintervention 24/7",        desc: "Sofortiger Schutzraum in akuten Notlagen. Tag und Nacht." },
      { href: "/psychotherapie",        label: "Psychotherapie mit Kassensitz",  desc: "Kinder- und Jugendpsychotherapie. Keine Privatkosten." },
      { href: "/fruehe-hilfen",         label: "Frühe Hilfen",                  desc: "Unterstützung für Familien ab der Geburt." },
      { href: "/therapie-wohnen",       label: "Therapeutisches Wohnen",         desc: "Stationäre therapeutische Wohngruppen." },
      { href: "/jugendhilfe",           label: "Jugendhilfe",                   desc: "Ambulante und stationäre Jugendhilfeleistungen." },
      { href: "/diagnostik-clearing",   label: "Diagnostik & Clearing",          desc: "Fachdiagnostik und Hilfeplanung nach SGB VIII." },
      { href: "/beratung-praevention",  label: "Beratung & Prävention",          desc: "Erziehungsberatung, Fachberatung, Prävention." },
      { href: "/kita-beratung",         label: "Kita-Beratung",                 desc: "Beratung und Begleitung für Kindertagesstätten." },
      { href: "/ankerkleidung",         label: "Ankerkleidung",                 desc: "Spezialisierte Kleidung nach Störungsbild." },
      { href: "/versorgung",            label: "Versorgung",                    desc: "Medizinische und pflegerische Grundversorgung." },
      { href: "/platzanfrage",          label: "Platzanfrage stellen",           desc: "Direkt und unkompliziert einen Platz anfragen." },
      { href: "/kontakt",               label: "Kontakt & Anfahrt",             desc: "Adresse, Telefon, E-Mail und Anfahrtsbeschreibung." },
    ],
  },
  en: {
    dateLocale: "en-GB",
    eyebrow: "Guides & Expertise",
    h1: "Latest from Ankernetz",
    lead: "Expert articles on youth welfare, crisis intervention, sensory clothing and support services for children and young people in Berlin and Brandenburg.",
    readArticle: "Read article",
    ctaEyebrow: "Ankernetz Berlin · 24/7 Crisis Line",
    ctaH2: "Need help? Get in touch.",
    ctaBody: "Our team is available around the clock - for families, young people and professionals. Crisis intervention, place requests, counselling.",
    ctaBtn1: "030 22 45 43 22",
    ctaBtn2: "Request a place",
    ctaBtn3: "Contact",
    ctaSub: "24 hours · 7 days · 365 days",
    offersEyebrow: "All services from Ankernetz Berlin Brandenburg",
    offers: [
      { href: "/krisenintervention",   label: "Crisis Intervention 24/7",       desc: "Immediate safe space in acute emergencies. Day and night." },
      { href: "/psychotherapie",        label: "Psychotherapy (insured)",        desc: "Child & youth psychotherapy. No private costs." },
      { href: "/fruehe-hilfen",         label: "Early Help",                    desc: "Support for families from birth." },
      { href: "/therapie-wohnen",       label: "Therapeutic Housing",           desc: "Inpatient therapeutic residential groups." },
      { href: "/jugendhilfe",           label: "Youth Welfare",                 desc: "Outpatient and inpatient youth welfare services." },
      { href: "/diagnostik-clearing",   label: "Diagnostics & Clearing",        desc: "Expert diagnostics and care planning (SGB VIII)." },
      { href: "/beratung-praevention",  label: "Counselling & Prevention",      desc: "Parenting counselling, professional guidance, prevention." },
      { href: "/kita-beratung",         label: "Daycare Counselling",           desc: "Counselling and support for childcare centres." },
      { href: "/ankerkleidung",         label: "Anchor Clothing",               desc: "Specialised clothing by clinical profile." },
      { href: "/versorgung",            label: "Care & Supplies",               desc: "Basic medical and nursing care." },
      { href: "/platzanfrage",          label: "Request a place",               desc: "Request a place directly and without hassle." },
      { href: "/kontakt",               label: "Contact & Directions",          desc: "Address, phone, e-mail and directions." },
    ],
  },
};

export default function AktuellesPage() {
  const t = useT(TRANS);
  return (
    <main style={{ background: "#FAF6F1", minHeight: "100vh", paddingTop: "5rem" }}>
      {/* Hero */}
      <section style={{ padding: "4rem 1.5rem 3rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{
            fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "#8B3A22", marginBottom: "0.75rem",
          }}>
            {t.eyebrow}
          </p>
          <h1 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700,
            color: "#1A1614", letterSpacing: "-0.025em", lineHeight: 1.15,
            marginBottom: "1.25rem",
          }}>
            {t.h1}
          </h1>
          <p style={{
            fontSize: "1.0625rem", color: "#4A3E38", lineHeight: 1.75,
            maxWidth: "680px",
          }}>
            {t.lead}
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
                      {new Date(article.date).toLocaleDateString(t.dateLocale, {
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
                    {t.readArticle}
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

      <ExternalLinks />

      {/* Hilfe-CTA Block */}
      <section style={{ padding: "0 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, #1A1614 0%, #2D1810 100%)",
            borderRadius: "20px",
            padding: "clamp(2rem, 4vw, 3rem)",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "2rem",
            alignItems: "center",
          }}>
            <div>
              <p style={{
                fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#C4916F", marginBottom: "0.5rem",
              }}>
                {t.ctaEyebrow}
              </p>
              <h2 style={{
                fontSize: "clamp(1.375rem, 3vw, 2rem)", fontWeight: 700,
                color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1.2,
                marginBottom: "0.75rem", marginTop: 0,
              }}>
                {t.ctaH2}
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "0 0 1.5rem" }}>
                {t.ctaBody}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <a
                  href="tel:+493022454322"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.625rem",
                    background: "#8B3A22", color: "#FFFFFF",
                    padding: "0.875rem 1.5rem", borderRadius: "12px",
                    fontSize: "1rem", fontWeight: 700, textDecoration: "none",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3.5 2h3l1.5 4-1.75 1.25c.9 1.8 2.25 3.15 4.05 4.05L11.5 9.5l4 1.5v3c0 .83-.67 1.5-1.5 1.5C6.33 15.5 2.5 11.67 2.5 7A1.5 1.5 0 0 1 3.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t.ctaBtn1}
                </a>
                <Link
                  href="/platzanfrage"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    background: "rgba(255,255,255,0.1)", color: "#FFFFFF",
                    padding: "0.875rem 1.5rem", borderRadius: "12px",
                    fontSize: "0.9375rem", fontWeight: 600, textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {t.ctaBtn2}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link
                  href="/kontakt"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    background: "rgba(255,255,255,0.1)", color: "#FFFFFF",
                    padding: "0.875rem 1.5rem", borderRadius: "12px",
                    fontSize: "0.9375rem", fontWeight: 600, textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {t.ctaBtn3}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem",
            }}>
              <p style={{ fontSize: "2rem", fontWeight: 800, color: "#FFFFFF", margin: 0, letterSpacing: "-0.03em", whiteSpace: "nowrap" }}>
                030 22 45 43 22
              </p>
              <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", margin: 0, whiteSpace: "nowrap" }}>
                {t.ctaSub}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alle Angebote - Interne Verlinkung */}
      <section style={{ padding: "0 1.5rem 6rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{
            fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "#8B3A22", marginBottom: "1.5rem",
          }}>
            {t.offersEyebrow}
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1rem",
          }}>
            {t.offers.map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }} className="offer-card">
                <div style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  height: "100%",
                  transition: "border-color 0.15s, box-shadow 0.15s",
                }}>
                  <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1614", margin: "0 0 0.375rem", letterSpacing: "-0.01em" }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: "0.8125rem", color: "#7A6E6A", margin: 0, lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
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
        .offer-card div:hover { border-color: rgba(139,58,34,0.3); box-shadow: 0 4px 16px rgba(0,0,0,0.07); }
      `}</style>
    </main>
  );
}
