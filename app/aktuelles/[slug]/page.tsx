import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug, type ArticleSection } from "../articles";
import { SeoFaq } from "../../components/SeoFaq";
import { SeoBreadcrumb } from "../../components/SeoBreadcrumb";
import ExternalLinks from "../../components/ExternalLinks";

const BASE = "https://www.ankernetz.com";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title} | Ankernetz`,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: { canonical: `${BASE}/aktuelles/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${BASE}/aktuelles/${article.slug}`,
      type: "article",
      publishedTime: article.date,
    },
  };
}

function renderSection(section: ArticleSection, index: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2
          key={index}
          style={{
            fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
            fontWeight: 700,
            color: "#1A1614",
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
            marginTop: "3rem",
            marginBottom: "1rem",
          }}
        >
          {section.content as string}
        </h2>
      );

    case "h3":
      return (
        <h3
          key={index}
          style={{
            fontSize: "1.125rem",
            fontWeight: 700,
            color: "#1A1614",
            letterSpacing: "-0.015em",
            lineHeight: 1.35,
            marginTop: "2rem",
            marginBottom: "0.75rem",
          }}
        >
          {section.content as string}
        </h3>
      );

    case "p":
      return (
        <p
          key={index}
          style={{
            fontSize: "1.0625rem",
            color: "#3A3230",
            lineHeight: 1.85,
            marginBottom: "1.25rem",
          }}
        >
          {section.content as string}
        </p>
      );

    case "ul":
      return (
        <ul
          key={index}
          style={{
            margin: "1rem 0 1.5rem",
            paddingLeft: "0",
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
          }}
        >
          {(section.content as string[]).map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                fontSize: "1rem",
                color: "#3A3230",
                lineHeight: 1.75,
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#8B3A22",
                  flexShrink: 0,
                  marginTop: "0.625rem",
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      );

    case "highlight":
      return (
        <div
          key={index}
          style={{
            background: "rgba(139,58,34,0.07)",
            borderLeft: "3px solid #8B3A22",
            borderRadius: "0 12px 12px 0",
            padding: "1.25rem 1.5rem",
            margin: "1.75rem 0",
          }}
        >
          <p
            style={{
              fontSize: "1.0625rem",
              color: "#3A2018",
              lineHeight: 1.8,
              fontStyle: "italic",
              margin: 0,
            }}
          >
            {section.content as string}
          </p>
        </div>
      );

    default:
      return null;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "Ankernetz",
      url: BASE,
    },
    publisher: {
      "@type": "Organization",
      name: "Ankernetz",
      url: BASE,
    },
    description: article.excerpt,
    keywords: article.keywords.join(", "),
    url: `${BASE}/aktuelles/${article.slug}`,
  };

  return (
    <main style={{ background: "#FAF6F1", minHeight: "100vh", paddingTop: "5rem" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoBreadcrumb
        crumbs={[
          { name: "Aktuelles", slug: "aktuelles" },
          { name: article.title, slug: `aktuelles/${article.slug}` },
        ]}
      />

      {/* Header */}
      <header style={{ padding: "4rem 1.5rem 0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Link
              href="/aktuelles"
              style={{ fontSize: "0.875rem", color: "#8B3A22", textDecoration: "none" }}
            >
              Aktuelles
            </Link>
            <span style={{ color: "rgba(0,0,0,0.3)", fontSize: "0.875rem" }}>/</span>
            <span style={{ fontSize: "0.875rem", color: "#7A6E6A" }}>{article.title}</span>
          </nav>

          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <time style={{
              fontSize: "0.8125rem", color: "#8B3A22", fontWeight: 600, letterSpacing: "0.05em",
            }}>
              {new Date(article.date).toLocaleDateString("de-DE", {
                day: "2-digit", month: "long", year: "numeric",
              })}
            </time>
            <span style={{ color: "rgba(0,0,0,0.25)" }}>·</span>
            <span style={{ fontSize: "0.8125rem", color: "#7A6E6A" }}>{article.readTime}</span>
          </div>

          {/* Titel */}
          <h1 style={{
            fontSize: "clamp(1.875rem, 4vw, 2.875rem)",
            fontWeight: 800,
            color: "#1A1614",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBottom: "1.5rem",
          }}>
            {article.title}
          </h1>

          {/* Excerpt */}
          <p style={{
            fontSize: "1.125rem",
            color: "#5A4E48",
            lineHeight: 1.75,
            marginBottom: "3rem",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
          }}>
            {article.excerpt}
          </p>
        </div>
      </header>

      {/* Artikel-Inhalt */}
      <article style={{ padding: "0 1.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          {article.sections.map((section, i) => renderSection(section, i))}
        </div>
      </article>

      {/* Verwandte Seiten */}
      {article.relatedPages.length > 0 && (
        <section style={{ padding: "4rem 1.5rem 0" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{
              borderTop: "1px solid rgba(0,0,0,0.08)",
              paddingTop: "3rem",
            }}>
              <p style={{
                fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#8B3A22", marginBottom: "1.25rem",
              }}>
                Verwandte Angebote
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {article.relatedPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      padding: "0.625rem 1.125rem",
                      background: "#ffffff",
                      border: "1px solid rgba(0,0,0,0.10)",
                      borderRadius: "9999px",
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: "#1A1614",
                      textDecoration: "none",
                      transition: "border-color 0.15s, color 0.15s",
                    }}
                    className="related-link"
                  >
                    {page.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6h7M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Keywords als Tags (sichtbar für Nutzer und SEO) */}
      <section style={{ padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {article.keywords.map((kw) => (
              <span
                key={kw}
                style={{
                  fontSize: "0.75rem",
                  color: "#7A6E6A",
                  background: "rgba(0,0,0,0.04)",
                  borderRadius: "9999px",
                  padding: "0.25rem 0.625rem",
                }}
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hilfe-CTA Block */}
      <section style={{ padding: "0 1.5rem 0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, #1A1614 0%, #2D1810 100%)",
            borderRadius: "20px",
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}>
            <div>
              <p style={{
                fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#C4916F", marginBottom: "0.5rem",
              }}>
                Ankernetz Berlin · 24/7 erreichbar
              </p>
              <h2 style={{
                fontSize: "clamp(1.375rem, 3vw, 1.75rem)", fontWeight: 700,
                color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1.25,
                marginBottom: "0.75rem", marginTop: 0,
              }}>
                Brauchen Sie jetzt Hilfe?
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>
                Unser Krisentelefon ist rund um die Uhr besetzt - auch nachts, an Wochenenden und Feiertagen.
                Kein Wartezimmer, keine Bürokratie, keine Warteliste.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
              <a
                href="tel:+493022454322"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.625rem",
                  background: "#8B3A22", color: "#FFFFFF",
                  padding: "0.875rem 1.5rem", borderRadius: "12px",
                  fontSize: "1rem", fontWeight: 700, textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3.5 2h3l1.5 4-1.75 1.25c.9 1.8 2.25 3.15 4.05 4.05L11.5 9.5l4 1.5v3c0 .83-.67 1.5-1.5 1.5C6.33 15.5 2.5 11.67 2.5 7A1.5 1.5 0 0 1 3.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                030 22 45 43 22
              </a>
              <Link
                href="/krisenintervention"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "rgba(255,255,255,0.1)", color: "#FFFFFF",
                  padding: "0.875rem 1.5rem", borderRadius: "12px",
                  fontSize: "0.9375rem", fontWeight: 600, textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                Krisenintervention
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
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
                Platzanfrage stellen
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", margin: 0 }}>
              ankernetz.com · Friedrich-Franz-Str. 13, 12103 Berlin
            </p>
          </div>
        </div>
      </section>

      <ExternalLinks />

      {/* Interne Verlinkung - Alle Angebote */}
      <section style={{ padding: "3rem 1.5rem 0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{
            fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "#8B3A22", marginBottom: "1.25rem",
          }}>
            Alle Angebote von Ankernetz
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "0.75rem" }}>
            {[
              { href: "/krisenintervention",   label: "Krisenintervention 24/7",        desc: "Sofortiger Schutz in Notlagen" },
              { href: "/psychotherapie",        label: "Psychotherapie",                 desc: "Kassensitz für Kinder & Jugendliche" },
              { href: "/fruehe-hilfen",         label: "Frühe Hilfen",                  desc: "Unterstützung ab Geburt" },
              { href: "/therapie-wohnen",       label: "Therapeutisches Wohnen",         desc: "Stationäre Begleitung & Stabilisierung" },
              { href: "/jugendhilfe",           label: "Jugendhilfe",                   desc: "Ambulante & stationäre Hilfen" },
              { href: "/diagnostik-clearing",   label: "Diagnostik & Clearing",          desc: "Fachdiagnostik & Hilfeplanung" },
              { href: "/beratung-praevention",  label: "Beratung & Prävention",          desc: "Erziehungsberatung & Fachberatung" },
              { href: "/ankerkleidung",         label: "Ankerkleidung",                 desc: "Kleidung nach Störungsbild" },
              { href: "/platzanfrage",          label: "Platzanfrage",                  desc: "Jetzt direkt anfragen" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ textDecoration: "none" }}
                className="service-link-card"
              >
                <div style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "12px",
                  padding: "1.25rem",
                  transition: "border-color 0.15s, box-shadow 0.15s",
                }}>
                  <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#1A1614", margin: "0 0 0.25rem" }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: "0.8125rem", color: "#7A6E6A", margin: 0, lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sektion */}
      <SeoFaq
        items={[
          {
            q: `Was macht Ankernetz in Berlin und Brandenburg?`,
            a: "Ankernetz ist ein spezialisierter Träger der Kinder- und Jugendhilfe mit Angeboten in Berlin und Brandenburg. Wir bieten Krisenintervention 24/7, therapeutische Wohngruppen, Psychotherapie mit Kassensitz, Diagnostik, Frühe Hilfen und die spezialisierte Ankerkleidung nach Störungsbild.",
          },
          {
            q: "Wie kann ich eine Platzanfrage stellen?",
            a: "Platzanfragen können direkt über unser Online-Formular, per E-Mail oder telefonisch gestellt werden. Für Kriseninterventionen steht unser Bereitschaftsdienst rund um die Uhr zur Verfügung. Für stationäre Hilfeformen erfolgt die Anfrage in der Regel über das zuständige Jugendamt.",
          },
          {
            q: "Entstehen für Familien Kosten?",
            a: "Jugendhilfeleistungen werden vollständig durch das zuständige Jugendamt finanziert. Für Familien und Jugendliche entstehen keine direkten Kosten. Ankerkleidung kann über den Shop erworben oder im Rahmen von Hilfeleistungen zur Verfügung gestellt werden.",
          },
        ]}
      />

      <style>{`
        .related-link:hover { border-color: #8B3A22; color: #8B3A22; }
        .service-link-card div:hover { border-color: rgba(139,58,34,0.3); box-shadow: 0 4px 16px rgba(0,0,0,0.07); }
      `}</style>
    </main>
  );
}
