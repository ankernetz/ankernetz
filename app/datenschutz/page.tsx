export default function DatenschutzPage() {
  const rechte = [
    { art: "Art. 15", text: "Auskunft über Ihre gespeicherten personenbezogenen Daten" },
    { art: "Art. 16", text: "Berichtigung unrichtiger oder unvollständiger Daten" },
    { art: "Art. 17", text: "Löschung Ihrer Daten (\"Recht auf Vergessenwerden\")" },
    { art: "Art. 18", text: "Einschränkung der Verarbeitung Ihrer Daten" },
    { art: "Art. 20", text: "Datenübertragbarkeit in einem maschinenlesbaren Format" },
    { art: "Art. 21", text: "Widerspruch gegen die Verarbeitung Ihrer Daten" },
  ];

  const abschnitte = [
    {
      nr: "1",
      titel: "Datenschutz auf einen Blick",
      inhalt: (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div>
            <p style={{ fontWeight: 700, color: "#1a3f6f", marginBottom: "6px" }}>Allgemeine Hinweise</p>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
              werden können.
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 700, color: "#1a3f6f", marginBottom: "6px" }}>Wer ist verantwortlich?</p>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 700, color: "#1a3f6f", marginBottom: "6px" }}>Wie erfassen wir Ihre Daten?</p>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen —
              z.B. durch das Ausfüllen eines Kontakt- oder Platzanfrageformulars. Andere
              Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme
              erfasst (technische Daten wie Browsertyp, Betriebssystem, IP-Adresse).
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 700, color: "#1a3f6f", marginBottom: "6px" }}>Wofür nutzen wir Ihre Daten?</p>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website
              zu gewährleisten. Andere Daten werden zur Bearbeitung Ihrer Anfragen genutzt.
              Wir verwenden keine Tracking-Tools oder Werbecookies.
            </p>
          </div>
        </div>
      ),
    },
    {
      nr: "2",
      titel: "Verantwortliche Stelle",
      inhalt: (
        <div>
          <p style={{ marginBottom: "1rem" }}>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <div style={{
            background: "#f4f7fb", borderRadius: "12px", padding: "1.25rem 1.5rem",
            borderLeft: "3px solid #1a3f6f", lineHeight: 1.9,
          }}>
            <p style={{ fontWeight: 700, color: "#1a3f6f" }}>Ankernetz gGmbH</p>
            <p>Friedrich-Franz-Straße 13</p>
            <p>12103 Berlin</p>
            <p style={{ marginTop: "8px" }}>
              Telefon:{" "}
              <a href="tel:+4930224543220" style={{ color: "#1a3f6f", fontWeight: 600, textDecoration: "none" }}>
                +49 (0) 30 22 45 43 22
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a href="mailto:hilfe@ankernetz.com" style={{ color: "#1a3f6f", fontWeight: 600, textDecoration: "none" }}>
                hilfe@ankernetz.com
              </a>
            </p>
          </div>
        </div>
      ),
    },
    {
      nr: "3",
      titel: "Ihre Rechte als betroffene Person",
      inhalt: (
        <div>
          <p style={{ marginBottom: "1.25rem" }}>
            Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {rechte.map((r) => (
              <div
                key={r.art}
                style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  padding: "0.75rem 1rem", borderRadius: "10px",
                  background: "#f4f7fb",
                }}
              >
                <span style={{
                  fontSize: "11px", fontWeight: 700, color: "#6FA3FE",
                  background: "white", padding: "3px 8px", borderRadius: "6px",
                  whiteSpace: "nowrap", flexShrink: 0, letterSpacing: "0.04em",
                }}>
                  {r.art}
                </span>
                <p style={{ color: "#374151", fontSize: "14px", lineHeight: 1.5 }}>{r.text}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "1.25rem", fontSize: "14px" }}>
            Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
            über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
            Zuständig ist die{" "}
            <strong style={{ color: "#1a3f6f" }}>Berliner Beauftragte für Datenschutz und Informationsfreiheit</strong>.
          </p>
        </div>
      ),
    },
    {
      nr: "4",
      titel: "Datenerfassung auf dieser Website",
      inhalt: (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div>
            <p style={{ fontWeight: 700, color: "#1a3f6f", marginBottom: "6px" }}>Server-Log-Dateien</p>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in
              Server-Log-Dateien, die Ihr Browser automatisch übermittelt: Browsertyp und
              -version, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners,
              Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten
              mit anderen Datenquellen wird nicht vorgenommen.
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 700, color: "#1a3f6f", marginBottom: "6px" }}>Kontaktformular</p>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
              aus dem Anfrageformular inklusive der von Ihnen angegebenen Kontaktdaten zwecks
              Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne
              Ihre Einwilligung weiter. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 700, color: "#1a3f6f", marginBottom: "6px" }}>Platzanfrage</p>
            <p>
              Die im Rahmen einer Platzanfrage übermittelten Daten werden ausschließlich
              zur Prüfung und Bearbeitung Ihrer Anfrage genutzt. Eine Weitergabe an Dritte
              erfolgt nicht, sofern dies nicht zur Leistungserbringung erforderlich ist.
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 700, color: "#1a3f6f", marginBottom: "6px" }}>KI-Chat-Assistent</p>
            <p>
              Unser Chat-Widget ermöglicht Ihnen den direkten Kontakt mit unserem Team.
              Ihre Nachrichten werden an unsere KI-gestützte Assistenz und an unser Team
              weitergeleitet. Es werden keine Chat-Verläufe dauerhaft gespeichert.
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>
        </div>
      ),
    },
    {
      nr: "5",
      titel: "Cookies",
      inhalt: (
        <div>
          <div style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            background: "#f0fdf4", border: "1px solid #bbf7d0",
            borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem",
          }}>
            <span style={{ fontSize: "20px" }}>🍪</span>
            <p style={{ color: "#166534", fontSize: "14px", fontWeight: 600 }}>
              Diese Website verwendet keine Tracking-Cookies oder Analyse-Tools.
            </p>
          </div>
          <p>
            Es werden ausschließlich technisch notwendige Cookies eingesetzt, die für den
            Betrieb der Website erforderlich sind (z.B. Session-Verwaltung). Diese Cookies
            erfordern keine Einwilligung gemäß Art. 6 Abs. 1 lit. f DSGVO und können in
            Ihren Browsereinstellungen deaktiviert werden.
          </p>
        </div>
      ),
    },
    {
      nr: "6",
      titel: "Hosting bei Vercel",
      inhalt: (
        <p>
          Diese Website wird bei{" "}
          <strong style={{ color: "#1a3f6f" }}>Vercel Inc.</strong>, 340 Pine Street,
          Suite 900, San Francisco, CA 94104, USA gehostet. Vercel ist ein
          Auftragsverarbeiter gemäß Art. 28 DSGVO. Es besteht ein
          Auftragsverarbeitungsvertrag. Die Übertragung in die USA erfolgt auf Basis
          der EU-Standardvertragsklauseln. Weitere Informationen:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1a3f6f", textDecoration: "underline" }}
          >
            vercel.com/legal/privacy-policy
          </a>
        </p>
      ),
    },
    {
      nr: "7",
      titel: "Speicherdauer",
      inhalt: (
        <p>
          Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen
          Zweck erforderlich ist oder gesetzliche Aufbewahrungsfristen es vorschreiben.
          Formulardaten werden nach vollständiger Bearbeitung Ihrer Anfrage gelöscht,
          sofern keine weiteren gesetzlichen Aufbewahrungspflichten bestehen.
        </p>
      ),
    },
    {
      nr: "8",
      titel: "Datenschutzbeauftragter / Kontakt",
      inhalt: (
        <div>
          <p style={{ marginBottom: "1rem" }}>
            Bei Fragen zum Datenschutz, zur Auskunft über gespeicherte Daten oder zur
            Geltendmachung Ihrer Rechte wenden Sie sich bitte direkt an uns:
          </p>
          <div style={{
            background: "#f4f7fb", borderRadius: "12px", padding: "1.25rem 1.5rem",
            borderLeft: "3px solid #6FA3FE", lineHeight: 1.9,
          }}>
            <p style={{ fontWeight: 700, color: "#1a3f6f" }}>Datenschutz · Ankernetz gGmbH</p>
            <p>Friedrich-Franz-Straße 13, 12103 Berlin</p>
            <p>
              E-Mail:{" "}
              <a href="mailto:datenschutz@ankernetz.com" style={{ color: "#1a3f6f", fontWeight: 600, textDecoration: "none" }}>
                datenschutz@ankernetz.com
              </a>
            </p>
          </div>
        </div>
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
            Datenschutz&shy;erklärung
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, maxWidth: "520px" }}>
            Informationen nach Art. 13 DSGVO zum Umgang mit personenbezogenen Daten auf
            dieser Website.
          </p>
        </div>
      </div>

      {/* Abschnitte */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 2rem 5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#eef2f8", borderRadius: "20px", overflow: "hidden", boxShadow: "0 2px 24px rgba(26,63,111,0.07)" }}>
          {abschnitte.map((a) => (
            <div
              key={a.nr}
              style={{ background: "white", padding: "2rem 2.5rem" }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "1.25rem" }}>
                <span style={{
                  fontSize: "11px", fontWeight: 800, color: "#6FA3FE",
                  background: "#eef4ff", padding: "4px 10px", borderRadius: "8px",
                  letterSpacing: "0.04em", flexShrink: 0,
                }}>
                  {a.nr}
                </span>
                <h2 style={{
                  fontSize: "17px", fontWeight: 700, color: "#1a3f6f", lineHeight: 1.3,
                }}>
                  {a.titel}
                </h2>
              </div>
              <div style={{ fontSize: "14px", color: "#374151", lineHeight: 1.75 }}>
                {a.inhalt}
              </div>
            </div>
          ))}
        </div>

        <p style={{
          fontSize: "12px", color: "#9ca3af", textAlign: "center",
          marginTop: "2rem", lineHeight: 1.6,
        }}>
          Stand: April 2026 · Diese Datenschutzerklärung gilt für ankernetz.com
        </p>
      </div>
    </main>
  );
}
