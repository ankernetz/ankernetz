import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { regionen, getRegionBySlug } from "../regionen";
import { SeoBreadcrumb } from "../../components/SeoBreadcrumb";

const BASE = "https://www.ankernetz.com";

const angebote = [
  { label: "Krisenintervention 24/7", href: "/krisenintervention", beschreibung: "Sofortaufnahme rund um die Uhr" },
  { label: "Psychotherapie", href: "/psychotherapie", beschreibung: "Mit kassenärztlichem Sitz" },
  { label: "Frühe Hilfen", href: "/fruehe-hilfen", beschreibung: "Für Kleinkinder 0–6 Jahre" },
  { label: "Therapie & Wohnen", href: "/therapie-wohnen", beschreibung: "Therapeutische Wohngruppen" },
  { label: "Jugendhilfe", href: "/jugendhilfe", beschreibung: "Kinderwohngruppen 6–12 J." },
  { label: "Diagnostik & Clearing", href: "/diagnostik-clearing", beschreibung: "Einschätzung & Gutachten" },
  { label: "Beratung & Prävention", href: "/beratung-praevention", beschreibung: "Niedrigschwellig & online" },
  { label: "Beratung in Kitas", href: "/kita-beratung", beschreibung: "Fachberatung vor Ort" },
  { label: "Übergang Arbeit", href: "/uebergang-arbeit", beschreibung: "Schule – Beruf" },
  { label: "Ankerkleidung", href: "/ankerkleidung", beschreibung: "Kleidung nach Störungsbild" },
  { label: "Versorgung", href: "/versorgung", beschreibung: "Ausstattung & Bedarfe" },
];

function getTypLabel(region: { typ: string; bundesland: string }) {
  if (region.typ === "bezirk") return "Berliner Bezirk";
  if (region.typ === "stadt") return "Kreisfreie Stadt";
  return "Landkreis";
}

function getIntroText(region: { name: string; bundesland: string; typ: string; keywords: string[] }) {
  const isBerlin = region.bundesland === "berlin";
  const typLabel = getTypLabel(region);

  const paragraphs = [
    `Ankernetz ist ein spezialisierter freier Träger der Kinder- und Jugendhilfe mit Sitz in Berlin und Einzugsgebiet in der gesamten Hauptstadtregion — einschließlich ${region.name}. Als ${typLabel} ${isBerlin ? "in Berlin" : "in Brandenburg"} ${isBerlin ? "greift" : "greift"} ${region.name} auf ein breites Netz lokaler und überregionaler Jugendhilfeangebote zurück, das durch Träger wie Ankernetz ergänzt wird.`,

    `Familien, Jugendliche und Fachkräfte in ${region.name}, die Unterstützung suchen, können alle Ankernetz-Angebote in Anspruch nehmen. Dazu gehören Krisenintervention rund um die Uhr, therapeutische Wohngruppen, Frühe Hilfen, Psychotherapie mit kassenärztlichem Sitz und spezialisierte Kleidungsangebote durch Ankerkleidung. Kostenübernahme erfolgt in der Regel durch das zuständige Jugendamt nach SGB VIII.`,

    `Für Jugendämter in ${region.name} ist Ankernetz ein verlässlicher Kooperationspartner: schnelle Rückmeldung auf Platzanfragen, transparente Einschätzungen und nahtlose Übergänge zwischen den Hilfeformen. ${isBerlin ? "Im Gegensatz zu vielen Trägern, die auf einen Bezirk beschränkt sind, arbeitet Ankernetz berlinweit." : "Als Berliner Träger mit Brandenburg-Erfahrung kennen wir die besonderen Anforderungen des Flächenlandes."}`,

    `Eltern und Sorgeberechtigte in ${region.name} können sich direkt an uns wenden — entweder über das zuständige Jugendamt oder über unsere direkte Platzanfrage. In Krisensituationen ist unser Bereitschaftsdienst 24 Stunden an 365 Tagen erreichbar.`,
  ];

  return paragraphs;
}

export function generateStaticParams() {
  return regionen.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) return {};

  const typLabel = getTypLabel(region);
  const title = `Ankernetz in ${region.name} — Jugendhilfe & Krisenintervention`;
  const description = `Ankernetz bietet in ${region.name} (${typLabel}) spezialisierte Jugendhilfe: Krisenintervention 24/7, therapeutische Wohngruppen, Psychotherapie und Ankerkleidung. Kostenübernahme durch ${region.jugendamt}.`;

  return {
    title,
    description,
    keywords: region.keywords,
    alternates: { canonical: `${BASE}/regionen/${region.slug}` },
    openGraph: {
      title,
      description,
      url: `${BASE}/regionen/${region.slug}`,
    },
  };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) notFound();

  const introText = getIntroText(region);
  const typLabel = getTypLabel(region);

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ankernetz",
    url: BASE,
    telephone: "+493022454322",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: region.name,
    },
    description: `Spezialisierter freier Träger der Kinder- und Jugendhilfe mit Angeboten in ${region.name}`,
    serviceType: "Kinder- und Jugendhilfe, Krisenintervention, Psychotherapie",
  };

  return (
    <main style={{ background: "#FAF6F1", minHeight: "100vh", paddingTop: "5rem" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <SeoBreadcrumb
        crumbs={[
          { name: "Regionen", slug: "regionen" },
          { name: region.name, slug: `regionen/${region.slug}` },
        ]}
      />

      {/* Hero */}
      <section style={{
        padding: "4rem 1.5rem 4rem",
        background: "linear-gradient(180deg, #1A1614 0%, #2D1F18 100%)",
        color: "#FAF6F1",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <nav style={{ marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Link href="/" style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
              Ankernetz
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8125rem" }}>/</span>
            <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>Regionen</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8125rem" }}>/</span>
            <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)" }}>{region.name}</span>
          </nav>

          <p style={{
            fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "#C8916C", marginBottom: "0.875rem",
          }}>
            {typLabel} · {region.bundesland === "berlin" ? "Berlin" : "Brandenburg"}
          </p>
          <h1 style={{
            fontSize: "clamp(1.875rem, 4vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBottom: "1.25rem",
            color: "#FAF6F1",
          }}>
            Ankernetz in {region.name}
            <br />
            <span style={{ color: "#C8916C" }}>Hilfen für Kinder und Jugendliche</span>
          </h1>
          <p style={{
            fontSize: "1.0625rem", color: "rgba(250,246,241,0.75)",
            lineHeight: 1.75, maxWidth: "680px",
          }}>
            {region.beschreibung}
          </p>
        </div>
      </section>

      {/* Intro-Text */}
      <section style={{ padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
          <div>
            {introText.slice(0, 2).map((p, i) => (
              <p key={i} style={{
                fontSize: "1.0625rem", color: "#3A3230",
                lineHeight: 1.85, marginBottom: "1.25rem",
              }}>
                {p}
              </p>
            ))}
          </div>
          <div>
            {introText.slice(2).map((p, i) => (
              <p key={i} style={{
                fontSize: "1.0625rem", color: "#3A3230",
                lineHeight: 1.85, marginBottom: "1.25rem",
              }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Alle Angebote */}
      <section style={{ padding: "0 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{
            fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "#8B3A22", marginBottom: "0.75rem",
          }}>
            Alle Angebote
          </p>
          <h2 style={{
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 700, color: "#1A1614", letterSpacing: "-0.025em",
            marginBottom: "2.5rem",
          }}>
            Spezialisierte Hilfen in {region.name}
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
          }}>
            {angebote.map((angebot) => (
              <Link
                key={angebot.href}
                href={angebot.href}
                style={{ textDecoration: "none" }}
                className="angebot-card"
              >
                <div style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}>
                  <p style={{ fontSize: "1rem", fontWeight: 700, color: "#1A1614", margin: 0 }}>
                    {angebot.label}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#7A6E6A", margin: 0 }}>
                    {angebot.beschreibung}
                  </p>
                  <span style={{
                    marginTop: "0.5rem",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "#8B3A22",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}>
                    Mehr erfahren
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M2 5.5h7M6.5 2.5L9.5 5.5l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Jugendamt */}
      <section style={{ padding: "0 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{
            background: "#ffffff",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: "16px",
            padding: "2.5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}>
            <div>
              <p style={{
                fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#8B3A22", marginBottom: "0.75rem",
              }}>
                Zuständiges Jugendamt
              </p>
              <h2 style={{
                fontSize: "1.375rem", fontWeight: 700, color: "#1A1614",
                marginBottom: "0.875rem", letterSpacing: "-0.015em",
              }}>
                {region.jugendamt}
              </h2>
              <p style={{
                fontSize: "0.9375rem", color: "#5A4E48", lineHeight: 1.75,
              }}>
                Jugendhilfeleistungen werden über das zuständige Jugendamt beantragt und finanziert. Ankernetz arbeitet als freier Träger direkt mit dem {region.jugendamt} zusammen und übernimmt Plätze auf Basis eines Hilfeplanbeschlusses nach SGB VIII.
              </p>
            </div>
            <div style={{
              background: "#FAF6F1",
              borderRadius: "12px",
              padding: "1.75rem",
            }}>
              <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1A1614", marginBottom: "1rem" }}>
                Ankernetz kontaktieren
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                <a href="tel:+493022454322" style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  fontSize: "0.9375rem", color: "#1A1614", textDecoration: "none", fontWeight: 500,
                }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 10.5v2a1 1 0 01-1.09 1A9.98 9.98 0 017.8 12a9.83 9.83 0 01-3-3 9.98 9.98 0 01-1.5-4.58A1 1 0 014.29 3.5h2a1 1 0 011 .86c.06.49.17.97.33 1.43a1 1 0 01-.23 1.05l-.85.85A8 8 0 008.5 10.5l.85-.85a1 1 0 011.05-.23c.46.16.94.27 1.43.33a1 1 0 01.67 1.25z" stroke="#8B3A22" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  030 22 45 43 22
                </a>
                <Link href="/platzanfrage" style={{
                  display: "inline-flex", alignItems: "center", gap: "0.375rem",
                  marginTop: "0.5rem",
                  padding: "0.625rem 1.25rem",
                  background: "#8B3A22", color: "#ffffff",
                  borderRadius: "9999px",
                  fontSize: "0.9375rem", fontWeight: 600,
                  textDecoration: "none",
                }}>
                  Platzanfrage stellen
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ankernetz in Berlin und Brandenburg */}
      <section style={{ padding: "0 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, #1A1614 0%, #2D1F18 100%)",
            borderRadius: "20px",
            padding: "3rem",
            color: "#FAF6F1",
          }}>
            <p style={{
              fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#C8916C", marginBottom: "0.75rem",
            }}>
              Reichweite
            </p>
            <h2 style={{
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              fontWeight: 700, color: "#FAF6F1",
              letterSpacing: "-0.02em", marginBottom: "1.25rem",
            }}>
              Ankernetz in Berlin und Brandenburg
            </h2>
            <p style={{
              fontSize: "1.0625rem", color: "rgba(250,246,241,0.80)",
              lineHeight: 1.8, maxWidth: "720px", marginBottom: "1.25rem",
            }}>
              Ankernetz ist mit Sitz in Berlin tätig und betreut Kinder und Jugendliche in allen Berliner Bezirken sowie in den Landkreisen und Städten Brandenburgs. Für Jugendämter in der gesamten Hauptstadtregion sind wir ein erprobter Kooperationspartner — mit kurzen Reaktionszeiten und einem vollständigen Hilfe-Ökosystem unter einem Dach.
            </p>
            <p style={{
              fontSize: "1.0625rem", color: "rgba(250,246,241,0.80)",
              lineHeight: 1.8, maxWidth: "720px",
            }}>
              Kein Kind und kein Jugendlicher soll an den Grenzen eines Bezirks oder Landkreises scheitern. Deswegen bieten wir überregionale Versorgung — von der Krisenintervention in der Nacht bis zur langfristigen therapeutischen Wohnbegleitung.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 1.5rem 6rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 700, color: "#1A1614",
            letterSpacing: "-0.025em", marginBottom: "1rem",
          }}>
            Platzanfrage für {region.name} stellen
          </h2>
          <p style={{
            fontSize: "1.0625rem", color: "#5A4E48", lineHeight: 1.75,
            maxWidth: "580px", margin: "0 auto 2rem",
          }}>
            Fachkräfte, Eltern und Jugendämter aus {region.name} können direkt eine Platzanfrage stellen — wir melden uns innerhalb von 24 Stunden.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/platzanfrage" style={{
              display: "inline-flex", alignItems: "center", gap: "0.375rem",
              padding: "0.875rem 2rem",
              background: "#8B3A22", color: "#ffffff",
              borderRadius: "9999px",
              fontSize: "1rem", fontWeight: 700,
              textDecoration: "none",
            }}>
              Platzanfrage stellen
            </Link>
            <a href="tel:+493022454322" style={{
              display: "inline-flex", alignItems: "center", gap: "0.375rem",
              padding: "0.875rem 2rem",
              background: "#ffffff", color: "#1A1614",
              border: "1.5px solid rgba(0,0,0,0.12)",
              borderRadius: "9999px",
              fontSize: "1rem", fontWeight: 600,
              textDecoration: "none",
            }}>
              030 22 45 43 22
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .angebot-card div:hover {
          box-shadow: 0 6px 24px rgba(0,0,0,0.09);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
