"use client";

import { useState } from "react";
import Link from "next/link";
import { useT } from "../i18n/useT";

const TRANS = {
  de: {
    heroEyebrow: "Ankernetz - Kontakt",
    heroH1a: "Wir sind für Sie da.",
    heroH1b: "Immer.",
    heroP: "Ob Platzanfrage, Krisenintervention, Beratung oder allgemeine Frage - wir melden uns schnell und persönlich.",
    tiles: [
      { label: "Telefon",  sub: "Mo-Fr 8-18 Uhr",                      note: "Krisennotfall: 24/7 erreichbar",  noteColor: "#ef4444" },
      { label: "E-Mail",   sub: "Antwort innerhalb von 24 Stunden",      note: null,                             noteColor: null },
      { label: "Karriere", sub: "Bewerbungen & Initiativbewerbungen",    note: null,                             noteColor: null },
      { label: "Adresse",  sub: "12103 Berlin",                          note: "Termine nach Vereinbarung",      noteColor: "#6FA3FE" },
    ],
    fuerWenEyebrow: "Für alle",
    fuerWenH2: "Wir sind für Sie da",
    gruppen: [
      { titel: "Familien & Erziehungsberechtigte", akzent: "#6FA3FE", punkte: [
        "Beratung zu passenden Hilfeangeboten",
        "Begleitung durch den Antragsprozess",
        "Informationen zu Frühe Hilfen (0-6 J.)",
        "Ansprechpartner bei akuter Not",
        "Psychotherapie für Ihr Kind",
      ]},
      { titel: "Jugendämter & Kostenträger", akzent: "#FEC274", punkte: [
        "Direkte Platzanfragen ohne Warteliste",
        "Schnelle Rückmeldung innerhalb von 30 Min.",
        "Krisenaufnahmen rund um die Uhr",
        "Feste Ansprechpartner für alle Bereiche",
        "Regelmäßige Berichte und Dokumentation",
      ]},
      { titel: "Fachkräfte & Kooperationspartner", akzent: "#22c55e", punkte: [
        "Fachberatung und Diagnostikaufträge",
        "Kooperationsvereinbarungen",
        "Informationen zu Beratung in Kitas",
        "Fortbildungen und gemeinsame Angebote",
        "Netzwerktreffen und Fachaustausch",
      ]},
      { titel: "Kinder & Jugendliche", akzent: "#a78bfa", punkte: [
        "Wir hören zu - ohne Druck",
        "Unser Chat mit Lena ist täglich erreichbar",
        "Krisenhilfe sofort: +49 30 22 45 43 22",
        "Beratung auch anonym möglich",
        "Du musst das nicht alleine schaffen",
      ]},
    ],
    schreibenEyebrow: "Schreiben Sie uns",
    schreibenH2: "Direkte Nachricht ans Team.",
    schreibenP: "Nutzen Sie das Formular für allgemeine Anfragen, Platzanfragen oder Kooperationsinteressen. Wir melden uns innerhalb von einem Werktag persönlich bei Ihnen.",
    reaktion: [
      { label: "Reaktionszeit allgemein",      wert: "Innerhalb von 24 Std." },
      { label: "Krisenaufnahme",               wert: "Innerhalb von 30 Min." },
      { label: "Telefonische Erreichbarkeit",  wert: "Mo-Fr, 8-18 Uhr" },
      { label: "Krisentelefon",                wert: "24/7 erreichbar" },
      { label: "Persönliche Termine",          wert: "Nach Vereinbarung" },
    ],
    krisenNotfallLabel: "Krisennotfall",
    krisenInfo: "24 Stunden täglich, 365 Tage im Jahr",
    formEyebrow: "Kontaktformular",
    formH3: "Schreiben Sie uns.",
    labelVorname: "Vorname *",
    labelNachname: "Nachname *",
    labelOrg: "Organisation / Jugendamt",
    labelEmail: "E-Mail *",
    labelTelefon: "Telefon",
    labelAnliegen: "Ihr Anliegen *",
    anliegenSelect: "Bitte wählen…",
    anliegenOptionen: [
      "Platzanfrage (Krisenwohngruppe / Jugendhilfe)",
      "Krisenintervention - dringend",
      "Psychotherapie-Anfrage",
      "Diagnostik & Clearing",
      "Frühe Hilfen (0-6 Jahre)",
      "Beratung & Prävention",
      "Beratung in Kitas",
      "Übergang Arbeit",
      "Ankerkleidung / Bestellung",
      "Kooperation / Partnerschaft",
      "Allgemeine Information",
      "Sonstiges",
    ],
    labelNachricht: "Nachricht *",
    placeholderVorname: "Max",
    placeholderNachname: "Mustermann",
    placeholderOrg: "Jugendamt Berlin Tempelhof",
    placeholderNachricht: "Bitte beschreiben Sie kurz Ihr Anliegen…",
    dsgvo1: "Ich stimme der Verarbeitung meiner Daten gemäß der",
    dsgvoLink: "Datenschutzerklärung",
    dsgvo2: "zu. *",
    submitSending: "Wird gesendet…",
    submitBtn: "Nachricht senden",
    submitFooter: "Ihre Daten werden vertraulich behandelt und nicht weitergegeben.",
    successH3: "Nachricht eingegangen.",
    successP: "Wir melden uns innerhalb von 24 Stunden bei Ihnen. Bei dringendem Bedarf rufen Sie uns direkt an:",
    faqEyebrow: "FAQ",
    faqH2: "Häufige Fragen",
    faqP: "Nicht gefunden, was Sie suchen? Rufen Sie uns direkt an oder schreiben Sie uns.",
    faqCTA: "Jetzt anrufen",
    faqs: [
      { frage: "Wie schnell reagieren Sie auf eine Platzanfrage?", antwort: "Bei Krisenaufnahmen erhalten Sie innerhalb von 30 Minuten eine erste Rückmeldung zur Kapazität. Bei allgemeinen Platzanfragen melden wir uns innerhalb eines Werktages." },
      { frage: "Wer kann eine Platzanfrage stellen?", antwort: "Platzanfragen können von Jugendämtern, Fachkräften der Sozialen Arbeit und direkt von Familien gestellt werden. Bei minderjährigen Kindern wird die Kostenübernahme mit dem zuständigen Jugendamt geklärt." },
      { frage: "Welche Altersgruppen nehmen Sie auf?", antwort: "Unsere Angebote decken die gesamte Spanne von 0 bis 25 Jahren ab - von Frühe Hilfen für Kleinkinder bis zum Übergang in den Arbeitsmarkt für junge Erwachsene." },
      { frage: "Ist die Krisenhotline wirklich 24/7 erreichbar?", antwort: "Ja. Unsere Krisenbereitschaft ist 365 Tage im Jahr, rund um die Uhr besetzt. Rufen Sie +49 (0) 30 22 45 43 22 an - auch mitten in der Nacht." },
      { frage: "Übernehmen Jugendämter die Kosten?", antwort: "In der Regel ja. Alle unsere stationären und ambulanten Angebote sind nach SGB VIII anerkannt und werden von den zuständigen Jugendämtern als Kostenträger finanziert. Wir unterstützen bei der Antragstellung." },
      { frage: "Wie läuft eine Aufnahme ab?", antwort: "Nach telefonischer Kontaktaufnahme erfolgt eine kurze Einschätzung der Passung. Bei Eignung erhalten Sie innerhalb von 30 Minuten Rückmeldung. Die eigentliche Aufnahme mit Erstgespräch und Stabilisierung findet innerhalb von 24 Stunden statt." },
      { frage: "Arbeiten Sie auch mit Schulen und Kitas zusammen?", antwort: "Ja. Wir haben ein spezielles Angebot für Kitas (Fachberatung vor Ort) und kooperieren regelmäßig mit Schulen im Rahmen unserer Beratungs- und Präventionsangebote." },
      { frage: "Kann ich mich auch anonym beraten lassen?", antwort: "Für niedrigschwellige Beratung ist eine anonyme Kontaktaufnahme grundsätzlich möglich. Unser Chat mit Lena auf dieser Website ist jederzeit erreichbar - ohne Angabe persönlicher Daten." },
    ],
    krisenBannerLabel: "Krisennotfall 24/7",
    krisenBannerH2a: "Akuter Bedarf?",
    krisenBannerH2b: "Wir sind sofort da.",
    krisenBannerP: "Für akute Kriseninterventionen, sofortige Aufnahmebedarfe oder Notfallsituationen stehen wir rund um die Uhr zur Verfügung - ohne Wartezeiten, ohne Bürokratie.",
    krisenBannerCall: "Jetzt anrufen",
    krisenBannerLink1: "Krisenintervention",
    krisenBannerLink2: "Platzanfrage stellen",
    krisenBannerFoot: "Erreichbar an 365 Tagen · 24 Stunden täglich · Keine Warteliste",
  },
  en: {
    heroEyebrow: "Ankernetz - Contact",
    heroH1a: "We are here for you.",
    heroH1b: "Always.",
    heroP: "Whether it's a placement request, crisis intervention, counselling or a general enquiry - we respond quickly and personally.",
    tiles: [
      { label: "Phone",   sub: "Mon-Fri 8am-6pm",               note: "Crisis emergency: 24/7 available",   noteColor: "#ef4444" },
      { label: "E-mail",  sub: "Response within 24 hours",       note: null,                                noteColor: null },
      { label: "Careers", sub: "Applications & open applications", note: null,                             noteColor: null },
      { label: "Address", sub: "12103 Berlin",                   note: "Appointments by arrangement",       noteColor: "#6FA3FE" },
    ],
    fuerWenEyebrow: "For everyone",
    fuerWenH2: "We are here for you",
    gruppen: [
      { titel: "Families & guardians", akzent: "#6FA3FE", punkte: [
        "Advice on suitable support services",
        "Guidance through the application process",
        "Information on Early Help (0-6 yrs.)",
        "Contact person in acute need",
        "Psychotherapy for your child",
      ]},
      { titel: "Youth welfare offices & funding bodies", akzent: "#FEC274", punkte: [
        "Direct placement requests without a waiting list",
        "Quick response within 30 minutes",
        "Crisis admissions around the clock",
        "Dedicated contact persons for all areas",
        "Regular reports and documentation",
      ]},
      { titel: "Professionals & cooperation partners", akzent: "#22c55e", punkte: [
        "Expert advice and diagnostic referrals",
        "Cooperation agreements",
        "Information on daycare counselling",
        "Training and joint programmes",
        "Networking meetings and professional exchange",
      ]},
      { titel: "Children & young people", akzent: "#a78bfa", punkte: [
        "We listen - without pressure",
        "Our chat with Lena is available every day",
        "Crisis help now: +49 30 22 45 43 22",
        "Anonymous advice is possible",
        "You don't have to manage this alone",
      ]},
    ],
    schreibenEyebrow: "Write to us",
    schreibenH2: "A direct message to the team.",
    schreibenP: "Use this form for general enquiries, placement requests or partnership interests. We will get back to you personally within one working day.",
    reaktion: [
      { label: "General response time",  wert: "Within 24 hours" },
      { label: "Crisis admission",       wert: "Within 30 minutes" },
      { label: "Phone availability",     wert: "Mon-Fri, 8am-6pm" },
      { label: "Crisis line",            wert: "24/7 available" },
      { label: "Personal appointments",  wert: "By arrangement" },
    ],
    krisenNotfallLabel: "Crisis emergency",
    krisenInfo: "24 hours a day, 365 days a year",
    formEyebrow: "Contact form",
    formH3: "Write to us.",
    labelVorname: "First name *",
    labelNachname: "Last name *",
    labelOrg: "Organisation / Youth welfare office",
    labelEmail: "E-mail *",
    labelTelefon: "Phone",
    labelAnliegen: "Your enquiry *",
    anliegenSelect: "Please select…",
    anliegenOptionen: [
      "Placement request (crisis / youth welfare group)",
      "Crisis intervention - urgent",
      "Psychotherapy request",
      "Diagnostics & clearing",
      "Early help (0-6 years)",
      "Counselling & prevention",
      "Daycare counselling",
      "Transition to employment",
      "Ankernetz Clothing / order",
      "Cooperation / partnership",
      "General information",
      "Other",
    ],
    labelNachricht: "Message *",
    placeholderVorname: "Jane",
    placeholderNachname: "Smith",
    placeholderOrg: "Youth Welfare Office Berlin Mitte",
    placeholderNachricht: "Please briefly describe your enquiry…",
    dsgvo1: "I consent to the processing of my data in accordance with the",
    dsgvoLink: "Privacy Policy",
    dsgvo2: ". *",
    submitSending: "Sending…",
    submitBtn: "Send message",
    submitFooter: "Your data will be treated confidentially and will not be shared.",
    successH3: "Message received.",
    successP: "We will get back to you within 24 hours. If you need urgent help, please call us directly:",
    faqEyebrow: "FAQ",
    faqH2: "Frequently asked questions",
    faqP: "Didn't find what you're looking for? Call us directly or write to us.",
    faqCTA: "Call now",
    faqs: [
      { frage: "How quickly do you respond to a placement request?", antwort: "For crisis admissions you will receive an initial response on capacity within 30 minutes. For general placement requests we get back to you within one working day." },
      { frage: "Who can submit a placement request?", antwort: "Placement requests can be submitted by youth welfare offices, social work professionals and directly by families. For minors, cost coverage is arranged with the relevant youth welfare office." },
      { frage: "Which age groups do you accept?", antwort: "Our services cover the full range from 0 to 25 years - from Early Help for toddlers to the transition into employment for young adults." },
      { frage: "Is the crisis hotline really available 24/7?", antwort: "Yes. Our crisis team is staffed 365 days a year, around the clock. Call +49 (0) 30 22 45 43 22 - even in the middle of the night." },
      { frage: "Do youth welfare offices cover the costs?", antwort: "As a rule, yes. All our inpatient and outpatient services are recognised under SGB VIII and are funded by the responsible youth welfare offices. We support you through the application process." },
      { frage: "How does an admission work?", antwort: "After initial contact by phone, a brief assessment of suitability takes place. If there is a match, you receive feedback within 30 minutes. The actual admission, with an initial interview and stabilisation, takes place within 24 hours." },
      { frage: "Do you also work with schools and nurseries?", antwort: "Yes. We have a dedicated service for childcare centres (on-site expert counselling) and regularly cooperate with schools as part of our counselling and prevention programmes." },
      { frage: "Can I receive advice anonymously?", antwort: "For low-threshold counselling, anonymous contact is generally possible. Our chat with Lena on this website is available at any time - without providing personal data." },
    ],
    krisenBannerLabel: "Crisis emergency 24/7",
    krisenBannerH2a: "Urgent need?",
    krisenBannerH2b: "We are here immediately.",
    krisenBannerP: "For acute crisis interventions, immediate placement needs or emergency situations, we are available around the clock - no waiting, no bureaucracy.",
    krisenBannerCall: "Call now",
    krisenBannerLink1: "Crisis intervention",
    krisenBannerLink2: "Request a place",
    krisenBannerFoot: "Available 365 days · 24 hours a day · No waiting list",
  },
};

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "0.75rem 1rem",
  border: "1px solid #dde4ee", background: "#f4f7fb",
  fontSize: "0.9rem", color: "#1a3f6f", outline: "none",
  fontFamily: "inherit", boxSizing: "border-box",
  transition: "border-color 0.15s ease",
};

export default function KontaktPage() {
  const t = useT(TRANS);
  const [form, setForm] = useState({
    vorname: "", nachname: "", organisation: "",
    email: "", telefon: "", anliegen: "", nachricht: "",
  });
  const [dsgvo, setDsgvo] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.vorname || !form.email || !form.nachricht || !dsgvo) return;
    setSubmitting(true);
    const text = `📬 <b>Neue Kontaktanfrage - Ankernetz</b>\n\n<b>Name:</b> ${form.vorname} ${form.nachname}\n<b>Organisation:</b> ${form.organisation || "-"}\n<b>E-Mail:</b> ${form.email}\n<b>Telefon:</b> ${form.telefon || "-"}\n<b>Anliegen:</b> ${form.anliegen || "-"}\n\n<b>Nachricht:</b>\n${form.nachricht}`;
    try {
      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
    } catch { /**/ }
    setSubmitted(true);
    setSubmitting(false);
  }

  const tileHrefs = [
    "tel:+493022454322",
    "mailto:hilfe@ankernetz.com",
    "mailto:karriere@ankernetz.com",
    null,
  ];
  const tileValues = [
    "+49 (0) 30 22 45 43 22",
    "hilfe@ankernetz.com",
    "karriere@ankernetz.com",
    "Friedrich-Franz-Str. 13",
  ];

  return (
    <main style={{ overflowX: "hidden", background: "#ffffff" }}>

      {/* HERO */}
      <section style={{
        position: "relative", minHeight: "72vh",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: "20%", right: "8%", width: "380px", height: "380px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(111,163,254,0.12) 0%, transparent 65%)" }} />

        <div className="site-container" style={{ position: "relative", zIndex: 2, paddingBottom: "0", paddingTop: "10rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.5rem" }}>
            {t.heroEyebrow}
          </p>
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1rem", maxWidth: "22ch" }}>
            {t.heroH1a}<br />
            <span style={{ color: "#6FA3FE" }}>{t.heroH1b}</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.85,
            maxWidth: "46ch", marginBottom: "0" }}>
            {t.heroP}
          </p>
        </div>

        <div className="site-container" style={{ position: "relative", zIndex: 2, marginTop: "3rem" }}>
          <div className="stack-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px",
            background: "rgba(255,255,255,0.1)" }}>
            {t.tiles.map((k, i) => (
              <div key={k.label} style={{ background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(8px)", padding: "1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "0.625rem" }}>
                  {k.label}
                </p>
                {tileHrefs[i] ? (
                  <a href={tileHrefs[i]!} style={{ fontSize: "0.9375rem", fontWeight: 700,
                    color: "white", textDecoration: "none", display: "block", marginBottom: "0.25rem" }}>
                    {tileValues[i]}
                  </a>
                ) : (
                  <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white", marginBottom: "0.25rem" }}>
                    {tileValues[i]}
                  </p>
                )}
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>{k.sub}</p>
                {k.note && (
                  <p style={{ fontSize: "0.72rem", fontWeight: 600, color: k.noteColor ?? "#6FA3FE",
                    marginTop: "0.375rem" }}>{k.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FÜR WEN */}
      <section style={{ background: "#ffffff", padding: "6rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>{t.fuerWenEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em" }}>{t.fuerWenH2}</h2>
          </div>
          <div className="stack-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
            {t.gruppen.map(g => (
              <div key={g.titel} className="bento-card"
                style={{ background: "#f0f4f8", padding: "2rem" }}>
                <div style={{ width: "28px", height: "3px", background: g.akzent,
                  marginBottom: "1.25rem", borderRadius: "9999px" }} />
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#1a3f6f",
                  marginBottom: "1.25rem", lineHeight: 1.3 }}>{g.titel}</h3>
                {g.punkte.map(p => (
                  <div key={p} style={{ display: "flex", gap: "0.625rem",
                    marginBottom: "0.5rem", alignItems: "flex-start" }}>
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%",
                      background: g.akzent, flexShrink: 0, marginTop: "0.4rem" }} />
                    <p style={{ fontSize: "0.825rem", color: "rgba(26,63,111,0.7)", lineHeight: 1.55 }}>{p}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULAR + SEITENINFO */}
      <section style={{ background: "#d8e4f0", padding: "6rem 0" }}>
        <div className="site-container stack-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "4rem", alignItems: "start" }}>

          <div>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>{t.schreibenEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.5rem" }}>
              {t.schreibenH2}
            </h2>
            <p style={{ fontSize: "0.9rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85, marginBottom: "2rem" }}>
              {t.schreibenP}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {t.reaktion.map((r, i) => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between",
                  padding: "0.875rem 0", borderBottom: i < 4 ? "1px solid rgba(26,63,111,0.1)" : "none",
                  alignItems: "center" }}>
                  <span style={{ fontSize: "0.8125rem", color: "rgba(26,63,111,0.5)" }}>{r.label}</span>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1a3f6f" }}>{r.wert}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2rem", padding: "1.25rem",
              background: "#1a3f6f", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.1em", textTransform: "uppercase" }}>{t.krisenNotfallLabel}</p>
              <a href="tel:+493022454322" style={{ fontSize: "1.125rem", fontWeight: 800,
                color: "white", textDecoration: "none" }}>+49 (0) 30 22 45 43 22</a>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>{t.krisenInfo}</p>
            </div>
          </div>

          <div style={{ background: "white", padding: "2.5rem" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ width: "60px", height: "60px", border: "2px solid #22c55e",
                  borderRadius: "50%", display: "flex", alignItems: "center",
                  justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                    <path d="M2 9l7 7L22 2" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1a3f6f",
                  marginBottom: "0.75rem" }}>{t.successH3}</h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(26,63,111,0.55)", lineHeight: 1.75 }}>
                  {t.successP}
                  <strong style={{ color: "#1a3f6f", display: "block", marginTop: "0.5rem" }}>
                    +49 (0) 30 22 45 43 22
                  </strong>
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em",
                  textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.25rem" }}>
                  {t.formEyebrow}
                </p>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1a3f6f",
                  letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
                  {t.formH3}
                </h3>

                <div className="stack-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <div>
                    <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(26,63,111,0.45)",
                      letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.375rem" }}>
                      {t.labelVorname}
                    </label>
                    <input type="text" required placeholder={t.placeholderVorname} value={form.vorname}
                      onChange={set("vorname")} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(26,63,111,0.45)",
                      letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.375rem" }}>
                      {t.labelNachname}
                    </label>
                    <input type="text" required placeholder={t.placeholderNachname} value={form.nachname}
                      onChange={set("nachname")} style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(26,63,111,0.45)",
                    letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.375rem" }}>
                    {t.labelOrg}
                  </label>
                  <input type="text" placeholder={t.placeholderOrg} value={form.organisation}
                    onChange={set("organisation")} style={inputStyle} />
                </div>

                <div className="stack-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <div>
                    <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(26,63,111,0.45)",
                      letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.375rem" }}>
                      {t.labelEmail}
                    </label>
                    <input type="email" required placeholder="max@jugendamt.de" value={form.email}
                      onChange={set("email")} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(26,63,111,0.45)",
                      letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.375rem" }}>
                      {t.labelTelefon}
                    </label>
                    <input type="tel" placeholder="+49 30 ..." value={form.telefon}
                      onChange={set("telefon")} style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(26,63,111,0.45)",
                    letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.375rem" }}>
                    {t.labelAnliegen}
                  </label>
                  <select required value={form.anliegen} onChange={set("anliegen")}
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                    <option value="">{t.anliegenSelect}</option>
                    {t.anliegenOptionen.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(26,63,111,0.45)",
                    letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.375rem" }}>
                    {t.labelNachricht}
                  </label>
                  <textarea required rows={5} value={form.nachricht} onChange={set("nachricht")}
                    placeholder={t.placeholderNachricht}
                    style={{ ...inputStyle, resize: "none" }} />
                </div>

                <label style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer" }}>
                  <input type="checkbox" checked={dsgvo} onChange={e => setDsgvo(e.target.checked)}
                    style={{ marginTop: "3px", accentColor: "#1a3f6f", width: "14px", height: "14px",
                      flexShrink: 0, cursor: "pointer" }} />
                  <span style={{ fontSize: "0.78rem", color: "rgba(26,63,111,0.55)", lineHeight: 1.6 }}>
                    {t.dsgvo1}{" "}
                    <Link href="/datenschutz" style={{ color: "#6FA3FE", textDecoration: "underline" }}>
                      {t.dsgvoLink}
                    </Link>{" "}
                    {t.dsgvo2}
                  </span>
                </label>

                <button type="submit" disabled={!form.vorname || !form.email || !form.nachricht || !dsgvo || submitting}
                  style={{
                    width: "100%", padding: "0.875rem",
                    background: (form.vorname && form.email && form.nachricht && dsgvo) ? "#1a3f6f" : "#dde4ee",
                    color: (form.vorname && form.email && form.nachricht && dsgvo) ? "white" : "rgba(26,63,111,0.3)",
                    border: "none", fontWeight: 700, fontSize: "0.875rem",
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    cursor: (form.vorname && form.email && form.nachricht && dsgvo) ? "pointer" : "not-allowed",
                  }}>
                  {submitting ? t.submitSending : t.submitBtn}
                </button>
                <p style={{ fontSize: "0.7rem", color: "rgba(26,63,111,0.35)", textAlign: "center" }}>
                  {t.submitFooter}
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#ffffff", padding: "6rem 0" }}>
        <div className="site-container stack-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem" }}>
          <div>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>{t.faqEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 2vw, 2.25rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              {t.faqH2}
            </h2>
            <p style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.55)", lineHeight: 1.75 }}>
              {t.faqP}
            </p>
            <a href="tel:+493022454322" style={{ display: "inline-block", marginTop: "1.5rem",
              background: "#1a3f6f", color: "white", padding: "0.75rem 1.25rem",
              fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.06em",
              textTransform: "uppercase", textDecoration: "none" }}>
              {t.faqCTA}
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#dde4ee",
            border: "1px solid #dde4ee" }}>
            {t.faqs.map((faq, i) => (
              <details key={i} style={{ background: "white" }}>
                <summary style={{ padding: "1.25rem 1.5rem", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  listStyle: "none", gap: "1rem" }}>
                  <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#1a3f6f",
                    lineHeight: 1.4 }}>{faq.frage}</span>
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="#6FA3FE" style={{ flexShrink: 0 }}>
                    <path d="M0 0l6 7 6-7z" />
                  </svg>
                </summary>
                <div style={{ padding: "0 1.5rem 1.25rem", borderTop: "1px solid #eef2f7" }}>
                  <p style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.65)",
                    lineHeight: 1.8, paddingTop: "1rem" }}>{faq.antwort}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* KRISENNOTFALL-BANNER */}
      <section style={{ background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 100%)", padding: "5rem 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px" }} />
        <div className="site-container stack-mobile" style={{ position: "relative", zIndex: 1,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.5rem" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%",
                background: "#ef4444", animation: "pulse 2s infinite", display: "inline-block" }} />
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#ef4444" }}>{t.krisenBannerLabel}</p>
            </div>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "white",
              letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              {t.krisenBannerH2a}<br />{t.krisenBannerH2b}
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.85 }}>
              {t.krisenBannerP}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a href="tel:+493022454322" style={{
              background: "#ef4444", color: "white",
              padding: "1.125rem 1.5rem", fontWeight: 800, fontSize: "1.0625rem",
              textDecoration: "none", display: "flex", alignItems: "center",
              justifyContent: "space-between" }}>
              <span>{t.krisenBannerCall}</span>
              <span>+49 (0) 30 22 45 43 22</span>
            </a>
            <div className="stack-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <Link href="/krisenintervention" style={{ border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.6)", padding: "0.875rem 1rem",
                fontWeight: 500, fontSize: "0.8125rem", textDecoration: "none", textAlign: "center" }}>
                {t.krisenBannerLink1}
              </Link>
              <Link href="/platzanfrage" style={{ border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.6)", padding: "0.875rem 1rem",
                fontWeight: 500, fontSize: "0.8125rem", textDecoration: "none", textAlign: "center" }}>
                {t.krisenBannerLink2}
              </Link>
            </div>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.25)", textAlign: "center" }}>
              {t.krisenBannerFoot}
            </p>
          </div>
        </div>
        <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
      </section>

    </main>
  );
}
