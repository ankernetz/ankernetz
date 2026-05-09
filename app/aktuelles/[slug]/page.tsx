import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug, type ArticleSection } from "../articles";
import { SeoFaq } from "../../components/SeoFaq";
import { SeoBreadcrumb } from "../../components/SeoBreadcrumb";

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
        .related-link:hover {
          border-color: #8B3A22;
          color: #8B3A22;
        }
      `}</style>
    </main>
  );
}
