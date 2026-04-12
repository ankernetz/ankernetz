export default function ImpressumPage() {
  const sections = [
    {
      title: "Angaben gemäß § 5 TMG",
      content: (
        <div style={{ lineHeight: 1.8, color: "#374151" }}>
          <p style={{ fontWeight: 700, fontSize: "16px", color: "#1a3f6f", marginBottom: "4px" }}>Ankernetz gGmbH</p>
          <p>Friedrich-Franz-Straße 13</p>
          <p>12103 Berlin</p>
          <p>Deutschland</p>
        </div>
      ),
    },
    {
      title: "Vertreten durch",
      content: (
        <p style={{ color: "#374151", lineHeight: 1.8 }}>
          Geschäftsführer: <strong style={{ color: "#1a3f6f" }}>Marcus Weber</strong>
        </p>
      ),
    },
    {
      title: "Kontakt",
      content: (
        <div style={{ lineHeight: 2, color: "#374151" }}>
          <p>Telefon: <a href="tel:+4930224543220" style={{ color: "#1a3f6f", fontWeight: 600, textDecoration: "none" }}>+49 (0) 30 22 45 43 22</a></p>
          <p>E-Mail: <a href="mailto:hilfe@ankernetz.com" style={{ color: "#1a3f6f", fontWeight: 600, textDecoration: "none" }}>hilfe@ankernetz.com</a></p>
        </div>
      ),
    },
    {
      title: "Registereintrag",
      content: (
        <div style={{ lineHeight: 2, color: "#374151" }}>
          <p>Registergericht: <strong style={{ color: "#1a3f6f" }}>Amtsgericht Berlin</strong></p>
          <p>Registernummer: <strong style={{ color: "#1a3f6f" }}>HRB 167432</strong></p>
        </div>
      ),
    },
    {
      title: "Gemeinnützigkeit",
      content: (
        <p style={{ color: "#374151", lineHeight: 1.8 }}>
          Die Ankernetz gGmbH ist als gemeinnützige Gesellschaft anerkannt. Sie verfolgt
          ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne des Abschnitts
          „Steuerbegünstigte Zwecke" der Abgabenordnung.
        </p>
      ),
    },
    {
      title: "Umsatzsteuer-Identifikationsnummer",
      content: (
        <p style={{ color: "#374151", lineHeight: 1.8 }}>
          Gemäß § 27a Umsatzsteuergesetz:{" "}
          <strong style={{ color: "#1a3f6f" }}>DE 312 456 789</strong>
        </p>
      ),
    },
    {
      title: "Zuständige Aufsichtsbehörde",
      content: (
        <p style={{ color: "#374151", lineHeight: 1.8 }}>
          Betriebserlaubnis gemäß § 45 SGB VIII erteilt durch:{" "}
          <strong style={{ color: "#1a3f6f" }}>
            Landesjugendamt Berlin, Senatsverwaltung für Bildung, Jugend und Familie
          </strong>
        </p>
      ),
    },
    {
      title: "Haftung für Inhalte",
      content: (
        <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "14px" }}>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
          Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
          keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG
          für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der
          Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen.
        </p>
      ),
    },
    {
      title: "Haftung für Links",
      content: (
        <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "14px" }}>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte
          wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
          keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
          jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
          Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
      ),
    },
    {
      title: "Urheberrecht",
      content: (
        <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "14px" }}>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
          unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
          Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
          bedürfen der schriftlichen Zustimmung des jeweiligen Autors. Downloads und
          Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
      ),
    },
    {
      title: "Streitschlichtung",
      content: (
        <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "14px" }}>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1a3f6f", textDecoration: "underline" }}
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          <br /><br />
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      ),
    },
  ];

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
        {/* Dot grid */}
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
            Rechtliches
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800,
            color: "white", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "20px",
          }}>
            Impressum
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, maxWidth: "480px" }}>
            Pflichtangaben gemäß § 5 TMG sowie rechtliche Hinweise zur Website der Ankernetz gGmbH.
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
          {sections.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "2rem 2.5rem",
                borderBottom: i < sections.length - 1 ? "1px solid #eef2f8" : "none",
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
              <div>{s.content}</div>
            </div>
          ))}
        </div>

        <p style={{
          fontSize: "12px", color: "#9ca3af", textAlign: "center",
          marginTop: "2rem", lineHeight: 1.6,
        }}>
          Stand: April 2026 · Ankernetz gGmbH · Berlin
        </p>
      </div>
    </main>
  );
}
