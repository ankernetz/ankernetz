"use client";

import { useT } from "../i18n/useT";

const TRANS = {
  de: {
    eyebrow: "Rechtliches",
    h1: "Datenschutz­erklärung",
    sub: "Informationen nach Art. 13 DSGVO zum Umgang mit personenbezogenen Daten auf dieser Website.",
    stand: "Stand: April 2026 · Diese Datenschutzerklärung gilt für ankernetz.com",
    rechte: [
      { art: "Art. 15", text: "Auskunft über Ihre gespeicherten personenbezogenen Daten" },
      { art: "Art. 16", text: "Berichtigung unrichtiger oder unvollständiger Daten" },
      { art: "Art. 17", text: "Löschung Ihrer Daten (\"Recht auf Vergessenwerden\")" },
      { art: "Art. 18", text: "Einschränkung der Verarbeitung Ihrer Daten" },
      { art: "Art. 20", text: "Datenübertragbarkeit in einem maschinenlesbaren Format" },
      { art: "Art. 21", text: "Widerspruch gegen die Verarbeitung Ihrer Daten" },
    ],
    cookieCats: [
      {
        name: "Notwendig",
        basis: "Art. 6 Abs. 1 lit. f DSGVO",
        dauer: "Sitzung",
        desc: "Technisch erforderliche Cookies für den einwandfreien Betrieb der Website (z.B. Einwilligungsspeicherung). Keine Einwilligung erforderlich.",
        required: true,
      },
      {
        name: "Komfort und Personalisierung",
        basis: "Art. 6 Abs. 1 lit. a DSGVO",
        dauer: "30 Tage",
        desc: "Einmalige Erfassung Ihres geografischen Standorts (GPS-Koordinaten) über die Geolocation API des Browsers. Diese Daten werden ausschließlich im Notfall verwendet, um unserem Team eine schnellere Reaktion zu ermöglichen. Die Koordinaten werden lokal gespeichert und nur im Krisenfall an unser internes Benachrichtigungssystem übermittelt.",
        required: false,
      },
      {
        name: "Analyse",
        basis: "Art. 6 Abs. 1 lit. a DSGVO",
        dauer: "-",
        desc: "Analyse des Nutzerverhaltens zur Verbesserung der Website. Derzeit nicht aktiv - es werden keine Analyse-Tools eingesetzt.",
        required: false,
      },
      {
        name: "Marketing",
        basis: "Art. 6 Abs. 1 lit. a DSGVO",
        dauer: "-",
        desc: "Cookies für zielgerichtete Werbemaßnahmen. Derzeit nicht aktiv - es werden keine Marketing-Cookies eingesetzt.",
        required: false,
      },
    ],
    speicherDauer: "Speicherdauer",
    abschnitte: [
      {
        nr: "1",
        titel: "Datenschutz auf einen Blick",
        type: "overview" as const,
        sub: [
          { head: "Allgemeine Hinweise", text: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können." },
          { head: "Wer ist verantwortlich?", text: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen." },
          { head: "Wie erfassen wir Ihre Daten?", text: "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen - z.B. durch das Ausfüllen eines Kontakt- oder Platzanfrageformulars. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (technische Daten wie Browsertyp, Betriebssystem, IP-Adresse)." },
          { head: "Wofür nutzen wir Ihre Daten?", text: "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten werden zur Bearbeitung Ihrer Anfragen genutzt. Wir verwenden keine Tracking-Tools oder Werbecookies." },
        ],
      },
      {
        nr: "2",
        titel: "Verantwortliche Stelle",
        type: "verantwortlich" as const,
        intro: "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:",
      },
      {
        nr: "3",
        titel: "Ihre Rechte als betroffene Person",
        type: "rechte" as const,
        intro: "Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:",
        supervisor: "Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Zuständig ist die",
        supervisorName: "Berliner Beauftragte für Datenschutz und Informationsfreiheit",
      },
      {
        nr: "4",
        titel: "Datenerfassung auf dieser Website",
        type: "overview" as const,
        sub: [
          { head: "Server-Log-Dateien", text: "Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser automatisch übermittelt: Browsertyp und -version, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO." },
          { head: "Kontaktformular", text: "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO." },
          { head: "Platzanfrage", text: "Die im Rahmen einer Platzanfrage übermittelten Daten werden ausschließlich zur Prüfung und Bearbeitung Ihrer Anfrage genutzt. Eine Weitergabe an Dritte erfolgt nicht, sofern dies nicht zur Leistungserbringung erforderlich ist. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO." },
          { head: "KI-Chat-Assistent", text: "Unser Chat-Widget ermöglicht Ihnen den direkten Kontakt mit unserem Team. Ihre Nachrichten werden an unsere KI-gestützte Assistenz und an unser Team weitergeleitet. Es werden keine Chat-Verläufe dauerhaft gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO." },
        ],
      },
      {
        nr: "5",
        titel: "Cookies & Einwilligungsverwaltung",
        type: "cookies" as const,
        intro: "Beim Besuch unserer Website erscheint ein Cookie-Banner, über das Sie Ihre Einwilligung zu verschiedenen Kategorien von Cookies und ähnlichen Technologien erteilen oder verweigern können. Ihre Auswahl wird im lokalen Speicher Ihres Browsers gespeichert und kann jederzeit widerrufen werden.",
        revoke: "Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie den lokalen Speicher Ihres Browsers löschen oder uns unter",
        revoke2: "kontaktieren.",
      },
      {
        nr: "6",
        titel: "Hosting bei Vercel",
        type: "vercel" as const,
        text: "Diese Website wird bei",
        text2: "gehostet. Vercel ist ein Auftragsverarbeiter gemäß Art. 28 DSGVO. Es besteht ein Auftragsverarbeitungsvertrag. Die Übertragung in die USA erfolgt auf Basis der EU-Standardvertragsklauseln. Weitere Informationen:",
      },
      {
        nr: "7",
        titel: "Speicherdauer",
        type: "text" as const,
        text: "Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungsfristen es vorschreiben. Formulardaten werden nach vollständiger Bearbeitung Ihrer Anfrage gelöscht, sofern keine weiteren gesetzlichen Aufbewahrungspflichten bestehen.",
      },
      {
        nr: "8",
        titel: "Datenschutzbeauftragter / Kontakt",
        type: "dsb" as const,
        intro: "Bei Fragen zum Datenschutz, zur Auskunft über gespeicherte Daten oder zur Geltendmachung Ihrer Rechte wenden Sie sich bitte direkt an uns:",
        label: "Datenschutz · Ankernetz gGmbH",
      },
    ],
  },
  en: {
    eyebrow: "Legal",
    h1: "Privacy Policy",
    sub: "Information pursuant to Art. 13 GDPR on the processing of personal data on this website.",
    stand: "As of: April 2026 · This privacy policy applies to ankernetz.com",
    rechte: [
      { art: "Art. 15", text: "Access to your stored personal data" },
      { art: "Art. 16", text: "Rectification of inaccurate or incomplete data" },
      { art: "Art. 17", text: "Erasure of your data (\"right to be forgotten\")" },
      { art: "Art. 18", text: "Restriction of processing of your data" },
      { art: "Art. 20", text: "Data portability in a machine-readable format" },
      { art: "Art. 21", text: "Objection to the processing of your data" },
    ],
    cookieCats: [
      {
        name: "Necessary",
        basis: "Art. 6(1)(f) GDPR",
        dauer: "Session",
        desc: "Technically necessary cookies for the proper operation of the website (e.g. storing consent). No consent required.",
        required: true,
      },
      {
        name: "Comfort and personalisation",
        basis: "Art. 6(1)(a) GDPR",
        dauer: "30 days",
        desc: "One-time collection of your geographical location (GPS coordinates) via the browser's Geolocation API. This data is used exclusively in emergencies to enable our team to respond more quickly. The coordinates are stored locally and only transmitted to our internal notification system in a crisis.",
        required: false,
      },
      {
        name: "Analytics",
        basis: "Art. 6(1)(a) GDPR",
        dauer: "-",
        desc: "Analysis of user behaviour to improve the website. Currently not active - no analytics tools are used.",
        required: false,
      },
      {
        name: "Marketing",
        basis: "Art. 6(1)(a) GDPR",
        dauer: "-",
        desc: "Cookies for targeted advertising. Currently not active - no marketing cookies are used.",
        required: false,
      },
    ],
    speicherDauer: "Storage period",
    abschnitte: [
      {
        nr: "1",
        titel: "Privacy at a glance",
        type: "overview" as const,
        sub: [
          { head: "General information", text: "The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally." },
          { head: "Who is responsible?", text: "Data processing on this website is carried out by the website operator. You can find their contact details in the legal notice of this website." },
          { head: "How do we collect your data?", text: "Your data is collected in part when you provide it to us - e.g. by filling in a contact or placement enquiry form. Other data is collected automatically by our IT systems when you visit the website (technical data such as browser type, operating system, IP address)." },
          { head: "What do we use your data for?", text: "Some of the data is collected to ensure the error-free operation of the website. Other data is used to process your enquiries. We do not use tracking tools or advertising cookies." },
        ],
      },
      {
        nr: "2",
        titel: "Data controller",
        type: "verantwortlich" as const,
        intro: "The data controller responsible for processing on this website is:",
      },
      {
        nr: "3",
        titel: "Your rights as a data subject",
        type: "rechte" as const,
        intro: "You have the following rights with regard to your personal data:",
        supervisor: "You also have the right to lodge a complaint with a data protection supervisory authority regarding our processing of your personal data. The responsible authority is the",
        supervisorName: "Berlin Commissioner for Data Protection and Freedom of Information",
      },
      {
        nr: "4",
        titel: "Data collection on this website",
        type: "overview" as const,
        sub: [
          { head: "Server log files", text: "The provider of the pages automatically collects and stores information in server log files that your browser transmits automatically: browser type and version, operating system, referrer URL, hostname of the accessing computer, time of the server request and IP address. This data is not merged with other data sources. Legal basis: Art. 6(1)(f) GDPR." },
          { head: "Contact form", text: "If you send us enquiries via the contact form, your details from the enquiry form, including the contact details you provide, will be stored for the purpose of processing the enquiry. We do not share this data without your consent. Legal basis: Art. 6(1)(b) GDPR." },
          { head: "Placement enquiry", text: "The data submitted as part of a placement enquiry is used exclusively to review and process your enquiry. It is not passed on to third parties unless this is necessary for the provision of the service. Legal basis: Art. 6(1)(b) GDPR." },
          { head: "AI chat assistant", text: "Our chat widget enables you to contact our team directly. Your messages are forwarded to our AI-supported assistant and to our team. No chat histories are stored permanently. Legal basis: Art. 6(1)(f) GDPR." },
        ],
      },
      {
        nr: "5",
        titel: "Cookies & consent management",
        type: "cookies" as const,
        intro: "When you visit our website, a cookie banner appears through which you can grant or refuse your consent to various categories of cookies and similar technologies. Your selection is stored in your browser's local storage and can be revoked at any time.",
        revoke: "You can revoke your consent at any time with effect for the future by deleting your browser's local storage or contacting us at",
        revoke2: "",
      },
      {
        nr: "6",
        titel: "Hosting with Vercel",
        type: "vercel" as const,
        text: "This website is hosted by",
        text2: "Vercel is a processor pursuant to Art. 28 GDPR. A data processing agreement is in place. The transfer to the USA is carried out on the basis of EU standard contractual clauses. Further information:",
      },
      {
        nr: "7",
        titel: "Storage period",
        type: "text" as const,
        text: "Personal data is only stored for as long as is necessary for the respective purpose or as required by statutory retention periods. Form data is deleted after your enquiry has been fully processed, provided there are no further statutory retention obligations.",
      },
      {
        nr: "8",
        titel: "Data protection contact",
        type: "dsb" as const,
        intro: "If you have any questions about data protection, wish to obtain information about stored data or wish to exercise your rights, please contact us directly:",
        label: "Data Protection · Ankernetz gGmbH",
      },
    ],
  },
};

type Abschnitt = (typeof TRANS.de.abschnitte)[number];

export default function DatenschutzPage() {
  const t = useT(TRANS);

  const renderAbschnitt = (a: Abschnitt) => {
    if (a.type === "overview") return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {a.sub.map((s) => (
          <div key={s.head}>
            <p style={{ fontWeight: 700, color: "#1a3f6f", marginBottom: "6px" }}>{s.head}</p>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    );

    if (a.type === "verantwortlich") return (
      <div>
        <p style={{ marginBottom: "1rem" }}>{a.intro}</p>
        <div style={{ background: "#f4f7fb", borderRadius: "12px", padding: "1.25rem 1.5rem", borderLeft: "3px solid #1a3f6f", lineHeight: 1.9 }}>
          <p style={{ fontWeight: 700, color: "#1a3f6f" }}>Ankernetz gGmbH</p>
          <p>Friedrich-Franz-Straße 13</p>
          <p>12103 Berlin</p>
          <p style={{ marginTop: "8px" }}>
            Telefon:{" "}
            <a href="tel:+493022454322" style={{ color: "#1a3f6f", fontWeight: 600, textDecoration: "none" }}>+49 (0) 30 22 45 43 22</a>
          </p>
          <p>
            E-Mail:{" "}
            <a href="mailto:hilfe@ankernetz.com" style={{ color: "#1a3f6f", fontWeight: 600, textDecoration: "none" }}>hilfe@ankernetz.com</a>
          </p>
        </div>
      </div>
    );

    if (a.type === "rechte") return (
      <div>
        <p style={{ marginBottom: "1.25rem" }}>{a.intro}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          {t.rechte.map((r) => (
            <div key={r.art} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.75rem 1rem", borderRadius: "10px", background: "#f4f7fb" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#6FA3FE", background: "white", padding: "3px 8px", borderRadius: "6px", whiteSpace: "nowrap", flexShrink: 0, letterSpacing: "0.04em" }}>
                {r.art}
              </span>
              <p style={{ color: "#374151", fontSize: "14px", lineHeight: 1.5 }}>{r.text}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "1.25rem", fontSize: "14px" }}>
          {a.supervisor}{" "}
          <strong style={{ color: "#1a3f6f" }}>{a.supervisorName}</strong>.
        </p>
      </div>
    );

    if (a.type === "cookies") return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <p>{a.intro}</p>
        {t.cookieCats.map(cat => (
          <div key={cat.name} style={{ background: "#f4f7fb", borderRadius: "12px", padding: "1rem 1.25rem", borderLeft: `3px solid ${cat.required ? "#22c55e" : "#1a3f6f"}` }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px", flexWrap: "wrap", gap: "8px" }}>
              <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "14px" }}>{cat.name}</p>
              <div style={{ display: "flex", gap: "8px" }}>
                <span style={{ fontSize: "11px", background: "#eef4ff", color: "#1a3f6f", fontWeight: 600, padding: "2px 8px", borderRadius: "6px" }}>{cat.basis}</span>
                <span style={{ fontSize: "11px", background: "white", color: "#6b7280", fontWeight: 600, padding: "2px 8px", borderRadius: "6px", border: "1px solid #e5e7eb" }}>{t.speicherDauer}: {cat.dauer}</span>
              </div>
            </div>
            <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.6 }}>{cat.desc}</p>
          </div>
        ))}
        <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.6 }}>
          {a.revoke}{" "}
          <a href="mailto:datenschutz@ankernetz.com" style={{ color: "#1a3f6f", fontWeight: 600, textDecoration: "none" }}>datenschutz@ankernetz.com</a>
          {a.revoke2 ? " " + a.revoke2 : "."}
        </p>
      </div>
    );

    if (a.type === "vercel") return (
      <p>
        {a.text}{" "}
        <strong style={{ color: "#1a3f6f" }}>Vercel Inc.</strong>, 340 Pine Street, Suite 900, San Francisco, CA 94104, USA{" "}
        {a.text2}{" "}
        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#1a3f6f", textDecoration: "underline" }}>
          vercel.com/legal/privacy-policy
        </a>
      </p>
    );

    if (a.type === "dsb") return (
      <div>
        <p style={{ marginBottom: "1rem" }}>{a.intro}</p>
        <div style={{ background: "#f4f7fb", borderRadius: "12px", padding: "1.25rem 1.5rem", borderLeft: "3px solid #6FA3FE", lineHeight: 1.9 }}>
          <p style={{ fontWeight: 700, color: "#1a3f6f" }}>{a.label}</p>
          <p>Friedrich-Franz-Straße 13, 12103 Berlin</p>
          <p>
            E-Mail:{" "}
            <a href="mailto:datenschutz@ankernetz.com" style={{ color: "#1a3f6f", fontWeight: 600, textDecoration: "none" }}>datenschutz@ankernetz.com</a>
          </p>
        </div>
      </div>
    );

    return <p>{(a as any).text}</p>;
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f4f7fb" }}>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(160deg, #1a3f6f 0%, #2d5fa0 60%, #1a3f6f 100%)",
        paddingTop: "120px", paddingBottom: "72px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
        <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "16px" }}>
            {t.eyebrow}
          </p>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, color: "white", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "20px" }}>
            {t.h1}
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, maxWidth: "520px" }}>
            {t.sub}
          </p>
        </div>
      </div>

      {/* Abschnitte */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 2rem 5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#eef2f8", borderRadius: "20px", overflow: "hidden", boxShadow: "0 2px 24px rgba(26,63,111,0.07)" }}>
          {t.abschnitte.map((a) => (
            <div key={a.nr} style={{ background: "white", padding: "2rem 2.5rem" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#6FA3FE", background: "#eef4ff", padding: "4px 10px", borderRadius: "8px", letterSpacing: "0.04em", flexShrink: 0 }}>
                  {a.nr}
                </span>
                <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#1a3f6f", lineHeight: 1.3 }}>
                  {a.titel}
                </h2>
              </div>
              <div style={{ fontSize: "14px", color: "#374151", lineHeight: 1.75 }}>
                {renderAbschnitt(a)}
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "12px", color: "#9ca3af", textAlign: "center", marginTop: "2rem", lineHeight: 1.6 }}>
          {t.stand}
        </p>
      </div>
    </main>
  );
}
