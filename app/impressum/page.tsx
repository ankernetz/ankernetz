"use client";

import { useT } from "../i18n/useT";

const TRANS = {
  de: {
    eyebrow: "Rechtliches",
    h1: "Impressum",
    sub: "Pflichtangaben gemäß § 5 TMG sowie rechtliche Hinweise zur Website der Ankernetz gGmbH.",
    stand: "Stand: April 2026 · Ankernetz gGmbH · Berlin",
    sections: [
      {
        title: "Angaben gemäß § 5 TMG",
        content: { type: "address" as const },
      },
      {
        title: "Vertreten durch",
        content: { type: "geschaeftsfuehrer" as const },
      },
      {
        title: "Kontakt",
        content: { type: "kontakt" as const },
      },
      {
        title: "Registereintrag",
        content: { type: "register" as const },
      },
      {
        title: "Gemeinnützigkeit",
        content: {
          type: "text" as const,
          text: "Die Ankernetz gGmbH ist als gemeinnützige Gesellschaft anerkannt. Sie verfolgt ausschliesslich und unmittelbar gemeinnuetzige Zwecke im Sinne des Abschnitts 'Steuerbeguenstigte Zwecke' der Abgabenordnung.",
        },
      },
      {
        title: "Umsatzsteuer-Identifikationsnummer",
        content: {
          type: "ust" as const,
          label: "Gemäß § 27a Umsatzsteuergesetz:",
        },
      },
      {
        title: "Zuständige Aufsichtsbehörde",
        content: {
          type: "text" as const,
          text: "Betriebserlaubnis gemäß § 45 SGB VIII erteilt durch: Ministerium für Bildung, Jugend und Sport",
        },
      },
      {
        title: "Haftung für Inhalte",
        content: {
          type: "text" as const,
          small: true,
          text: "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen.",
        },
      },
      {
        title: "Haftung für Links",
        content: {
          type: "text" as const,
          small: true,
          text: "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
        },
      },
      {
        title: "Urheberrecht",
        content: {
          type: "text" as const,
          small: true,
          text: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
        },
      },
      {
        title: "Streitschlichtung",
        content: { type: "streit" as const },
      },
    ],
    streitText1: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:",
    streitText2: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    ceo: "Geschäftsführerin:",
    registerGericht: "Registergericht:",
    registerNr: "Registernummer:",
  },
  en: {
    eyebrow: "Legal",
    h1: "Legal Notice",
    sub: "Mandatory information pursuant to § 5 TMG (German Telemedia Act) and legal notices for the Ankernetz gGmbH website.",
    stand: "As of: April 2026 · Ankernetz gGmbH · Berlin",
    sections: [
      {
        title: "Information pursuant to § 5 TMG",
        content: { type: "address" as const },
      },
      {
        title: "Represented by",
        content: { type: "geschaeftsfuehrer" as const },
      },
      {
        title: "Contact",
        content: { type: "kontakt" as const },
      },
      {
        title: "Register entry",
        content: { type: "register" as const },
      },
      {
        title: "Non-profit status",
        content: {
          type: "text" as const,
          text: "Ankernetz gGmbH is recognised as a non-profit organisation. It pursues exclusively and directly charitable purposes within the meaning of the section 'Tax-privileged purposes' of the German Fiscal Code (AO).",
        },
      },
      {
        title: "VAT identification number",
        content: {
          type: "ust" as const,
          label: "Pursuant to § 27a of the German VAT Act:",
        },
      },
      {
        title: "Responsible supervisory authority",
        content: {
          type: "text" as const,
          text: "Operating licence pursuant to § 45 SGB VIII granted by: Ministry of Education, Youth and Sport",
        },
      },
      {
        title: "Liability for content",
        content: {
          type: "text" as const,
          small: true,
          text: "The content of our pages has been created with the utmost care. However, we cannot guarantee the accuracy, completeness or timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with general legislation pursuant to § 7 para. 1 TMG. According to §§ 8 to 10 TMG, however, we as a service provider are not obliged to monitor transmitted or stored third-party information.",
        },
      },
      {
        title: "Liability for links",
        content: {
          type: "text" as const,
          small: true,
          text: "Our website contains links to external third-party websites over whose content we have no influence. We therefore cannot accept any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognisable at the time of linking.",
        },
      },
      {
        title: "Copyright",
        content: {
          type: "text" as const,
          small: true,
          text: "The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author. Downloads and copies of this site are only permitted for private, non-commercial use.",
        },
      },
      {
        title: "Dispute resolution",
        content: { type: "streit" as const },
      },
    ],
    streitText1: "The European Commission provides a platform for online dispute resolution (ODR):",
    streitText2: "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
    ceo: "Managing Director:",
    registerGericht: "Register court:",
    registerNr: "Registration number:",
  },
};

export default function ImpressumPage() {
  const t = useT(TRANS);

  const renderContent = (s: (typeof t.sections)[number], idx: number) => {
    const c = s.content;
    if (c.type === "address") return (
      <div style={{ lineHeight: 1.8, color: "#374151" }}>
        <p style={{ fontWeight: 700, fontSize: "16px", color: "#1a3f6f", marginBottom: "4px" }}>Ankernetz gGmbH</p>
        <p>Friedrich-Franz-Straße 13</p>
        <p>12103 Berlin</p>
        <p>Deutschland</p>
      </div>
    );
    if (c.type === "geschaeftsfuehrer") return (
      <p style={{ color: "#374151", lineHeight: 1.8 }}>
        {t.ceo} <strong style={{ color: "#1a3f6f" }}>Susanne Krause</strong>
      </p>
    );
    if (c.type === "kontakt") return (
      <div style={{ lineHeight: 2, color: "#374151" }}>
        <p>Telefon: <a href="tel:+493022454322" style={{ color: "#1a3f6f", fontWeight: 600, textDecoration: "none" }}>+49 (0) 30 22 45 43 22</a></p>
        <p>E-Mail: <a href="mailto:hilfe@ankernetz.com" style={{ color: "#1a3f6f", fontWeight: 600, textDecoration: "none" }}>hilfe@ankernetz.com</a></p>
      </div>
    );
    if (c.type === "register") return (
      <div style={{ lineHeight: 2, color: "#374151" }}>
        <p>{t.registerGericht} <strong style={{ color: "#1a3f6f" }}>Amtsgericht Berlin</strong></p>
        <p>{t.registerNr} <strong style={{ color: "#1a3f6f" }}>HRB 167432</strong></p>
      </div>
    );
    if (c.type === "ust") return (
      <p style={{ color: "#374151", lineHeight: 1.8 }}>
        {c.label}{" "}<strong style={{ color: "#1a3f6f" }}>DE 312 456 789</strong>
      </p>
    );
    if (c.type === "streit") return (
      <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "14px" }}>
        {t.streitText1}{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"
          style={{ color: "#1a3f6f", textDecoration: "underline" }}>
          https://ec.europa.eu/consumers/odr/
        </a>
        <br /><br />
        {t.streitText2}
      </p>
    );
    return (
      <p style={{ color: "#374151", lineHeight: 1.8, fontSize: c.small ? "14px" : "inherit" }}>
        {c.text}
      </p>
    );
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f4f7fb" }}>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(160deg, #1a3f6f 0%, #2d5fa0 60%, #1a3f6f 100%)",
        paddingTop: "120px",
        paddingBottom: "72px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
        <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto", padding: "0 2rem" }}>
          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "16px",
          }}>
            {t.eyebrow}
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800,
            color: "white", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "20px",
          }}>
            {t.h1}
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, maxWidth: "480px" }}>
            {t.sub}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 2rem 5rem" }}>
        <div style={{
          background: "white",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 2px 24px rgba(26,63,111,0.07)",
        }}>
          {t.sections.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "2rem 2.5rem",
                borderBottom: i < t.sections.length - 1 ? "1px solid #eef2f8" : "none",
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: "1.5rem",
                alignItems: "start",
              }}
            >
              <p style={{
                fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", color: "#6FA3FE", paddingTop: "3px",
                lineHeight: 1.4,
              }}>
                {s.title}
              </p>
              <div>{renderContent(s, i)}</div>
            </div>
          ))}
        </div>

        <p style={{
          fontSize: "12px", color: "#9ca3af", textAlign: "center",
          marginTop: "2rem", lineHeight: 1.6,
        }}>
          {t.stand}
        </p>
      </div>
    </main>
  );
}
