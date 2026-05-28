"use client";

import { useT } from "../i18n/useT";

const stellenAkzente = ["#ef4444", "#6FA3FE", "#22c55e", "#a78bfa", "#FEC274", "#22c55e"];
const vorteileAkzente = ["#6FA3FE", "#FEC274", "#22c55e", "#6FA3FE", "#FEC274", "#22c55e"];

const TRANS = {
  de: {
    hero: {
      eyebrow: "Ankernetz - Karriere",
      h1a: "Arbeit mit Sinn.",
      h1b: "Team mit Haltung.",
      p: "Bei Ankernetz arbeiten Menschen, die echte Veränderung bewirken wollen - für Kinder und Jugendliche, die auf verlässliche Fachkräfte angewiesen sind. Wir suchen Sie.",
      ctaPrimary: "Offene Stellen ansehen",
      ctaSecondary: "Initiativbewerbung",
    },
    warum: {
      eyebrow: "Warum Ankernetz",
      h2: "Ein Arbeitgeber, der seine Fachkräfte ernst nimmt.",
      p1: "Die Kinder- und Jugendhilfe ist eine anspruchsvolle Branche. Wer hier arbeitet, gibt viel - und verdient im Gegenzug echte Unterstützung, Anerkennung und Entwicklung.",
      p2: "Bei Ankernetz sind Supervision, Fortbildung und kollegialer Austausch keine Extras, die man beantragen muss - sie sind fester Bestandteil der Arbeitskultur. Wir glauben: Wer gut für sich gesorgt ist, kann gut für andere sorgen.",
      p3: "Außerdem: Ankernetz wächst. Wer heute einsteigt, kann morgen Verantwortung übernehmen. Interne Karrierewege sind kein Versprechen - sie passieren bei uns wirklich.",
      kennzahlen: [
        { zahl: "TVöD-nah", label: "Vergütung", sub: "Faire Bezahlung mit Stufen" },
        { zahl: "40 Std.", label: "Fortbildung/Jahr", sub: "Festes Budget pro Fachkraft" },
        { zahl: "Wöchentlich", label: "Supervision", sub: "Einzel & Team" },
        { zahl: "< 10", label: "Teamgröße", sub: "Kleine, enge Teams" },
        { zahl: "Unbefristet", label: "Stellen", sub: "Keine Projektstellen" },
        { zahl: "11", label: "Einsatzbereiche", sub: "Interne Entwicklungswege" },
      ],
    },
    vorteile: {
      eyebrow: "Was Sie erwartet",
      h2: "Ihre Vorteile bei Ankernetz",
      items: [
        { titel: "Faire Vergütung", text: "Anlehnung an TVöD mit regelmäßigen Stufensteigerungen." },
        { titel: "Supervision", text: "Regelmäßige Einzel- und Teamsupervision als fester Bestandteil der Arbeitszeit." },
        { titel: "Fortbildung", text: "Jährliches Fortbildungsbudget und interne Schulungen - mindestens 40 Stunden pro Jahr." },
        { titel: "Teamkultur", text: "Kleine, gut eingespielte Teams mit echter Kollegialität und flachen Hierarchien." },
        { titel: "Sinnstiftende Arbeit", text: "Echte Wirkung für Kinder und Jugendliche, die es sonst schwer hätten." },
        { titel: "Stabilität", text: "Ankernetz wächst kontinuierlich - sichere Stellen, kein Projektbefristungs-Karussell." },
      ],
    },
    stellen: {
      eyebrow: "Offene Stellen",
      h2: "Wir suchen Sie.",
      ctaInitiativ: "Initiativbewerbung →",
      aufgabenLabel: "Ihre Aufgaben",
      voraussetzungenLabel: "Voraussetzungen",
      bewerbenBtn: "Jetzt bewerben",
      rueckfragenBtn: "Rückfragen: +49 30 22 45 43 22",
      items: [
        {
          bereich: "Krisenintervention",
          titel: "Sozialpädagogin / Sozialpädagoge (m/w/d)",
          umfang: "Vollzeit / Teilzeit",
          eintrittsdatum: "Ab sofort",
          aufgaben: [
            "Begleitung von Jugendlichen in akuten Krisensituationen",
            "Kriseninterventionsgespräche und Stabilisierungsmaßnahmen",
            "Enge Abstimmung mit Jugendämtern und Fachkräften",
            "Dokumentation und Berichterstellung",
          ],
          voraussetzungen: [
            "Abschluss in Sozialpädagogik, Soziale Arbeit oder vergleichbar",
            "Berufserfahrung in der Kinder- und Jugendhilfe",
            "Bereitschaft zum Schichtdienst (inkl. Nacht und Wochenende)",
            "Kenntnisse in traumasensibler Arbeit von Vorteil",
          ],
        },
        {
          bereich: "Therapie & Wohnen",
          titel: "Erzieherin / Erzieher (m/w/d)",
          umfang: "Vollzeit",
          eintrittsdatum: "Ab sofort",
          aufgaben: [
            "Alltagsbegleitung in der therapeutischen Wohngruppe (12-17 J.)",
            "Bezugsbetreuung und intensive Einzelbegleitung",
            "Mitgestaltung von Freizeit- und Erlebnispädagogik",
            "Familienarbeit und Kooperation mit Schulen",
          ],
          voraussetzungen: [
            "Staatliche Anerkennung als Erzieherin / Erzieher",
            "Einfühlungsvermögen und Belastbarkeit",
            "Teamfähigkeit und Reflexionsbereitschaft",
            "Führerschein Klasse B von Vorteil",
          ],
        },
        {
          bereich: "Frühe Hilfen",
          titel: "Familienhebamme / Familiengesundheitspflegerin (m/w/d)",
          umfang: "Teilzeit (20-30 Std.)",
          eintrittsdatum: "Ab sofort",
          aufgaben: [
            "Aufsuchende Arbeit mit Familien mit Kleinkindern (0-3 Jahre)",
            "Unterstützung bei Bindungsaufbau und Entwicklungsförderung",
            "Vernetzung mit Kinderärzten, Kitas und Jugendamt",
            "Gruppenangebote für Mütter und Väter",
          ],
          voraussetzungen: [
            "Ausbildung als Hebamme oder Gesundheits- und Kinderkrankenpflegerin",
            "Weiterbildung zur Familienhebamme erwünscht",
            "Einfühlsame, ressourcenorientierte Grundhaltung",
            "Belastbarkeit in schwierigen Familiensituationen",
          ],
        },
        {
          bereich: "Psychologischer Dienst",
          titel: "Psychologin / Psychologe (m/w/d)",
          umfang: "Vollzeit / Teilzeit",
          eintrittsdatum: "Nach Vereinbarung",
          aufgaben: [
            "Diagnostische Einschätzungen und Gutachten",
            "Psychotherapeutische Behandlung (falls approbiert)",
            "Fachberatung pädagogischer Teams",
            "Kriseninterventionelle Mitarbeit bei Bedarf",
          ],
          voraussetzungen: [
            "Abschluss Psychologie (Diplom oder Master)",
            "Erfahrung in der Kinder- und Jugendpsychologie",
            "Approbation oder laufende Ausbildung zum Psychotherapeuten von Vorteil",
            "Belastbarkeit und Teamorientierung",
          ],
        },
        {
          bereich: "Beratung & Prävention",
          titel: "Sozialarbeiterin / Sozialarbeiter (m/w/d)",
          umfang: "Vollzeit",
          eintrittsdatum: "Ab sofort",
          aufgaben: [
            "Niedrigschwellige Beratung von Kindern, Jugendlichen und Familien",
            "Onlineberatung und aufsuchende Angebote",
            "Präventivangebote in Schulen und Kitas",
            "Vernetzungsarbeit im Sozialraum",
          ],
          voraussetzungen: [
            "Abschluss Soziale Arbeit oder Sozialpädagogik (B.A. / M.A.)",
            "Erfahrung in der Einzelfall- und Gruppenarbeit",
            "Kommunikationsstärke und interkulturelle Kompetenz",
            "Grundkenntnisse in systemischer Beratung erwünscht",
          ],
        },
        {
          bereich: "Übergang Arbeit",
          titel: "Jobcoach / Berufsbegleiterin (m/w/d)",
          umfang: "Vollzeit / Teilzeit",
          eintrittsdatum: "Nach Vereinbarung",
          aufgaben: [
            "Individuelle Begleitung junger Erwachsener beim Übergang in Ausbildung und Arbeit",
            "Bewerbungstraining und Praktikumsvermittlung",
            "Kooperation mit Betrieben, Schulen und Arbeitsagentur",
            "Krisenbegleitung bei Abbrüchen und Rückschlägen",
          ],
          voraussetzungen: [
            "Pädagogischer oder sozialwissenschaftlicher Abschluss",
            "Erfahrung im Bereich Berufsorientierung oder Jugendberufshilfe",
            "Netzwerkkompetenzen im Berliner Arbeitsmarkt von Vorteil",
            "Motivierender, ressourcenorientierter Arbeitsstil",
          ],
        },
      ],
    },
    prozess: {
      eyebrow: "Wie es läuft",
      h2: "Der Bewerbungsprozess",
      schritte: [
        { nr: "01", titel: "Bewerbung", text: "Unterlagen per E-Mail an karriere@ankernetz.com - Anschreiben, Lebenslauf, relevante Zeugnisse." },
        { nr: "02", titel: "Rückmeldung", text: "Innerhalb von 5 Werktagen erhalten Sie eine Eingangsbestätigung und einen ersten Überblick." },
        { nr: "03", titel: "Erstgespräch", text: "Telefonisches Kennenlernen - 20-30 Minuten, offen und unverbindlich." },
        { nr: "04", titel: "Vorstellungsgespräch", text: "Persönliches Gespräch im Team - Sie lernen uns kennen, wir lernen Sie kennen." },
        { nr: "05", titel: "Angebot", text: "Bei gegenseitigem Interesse: Vertragsangebot mit klaren Konditionen - ohne lange Wartezeit." },
      ],
    },
    stimmen: {
      eyebrow: "Das sagen Kolleginnen & Kollegen",
      h2: "Stimmen aus dem Team",
      items: [
        { initiale: "S", farbe: "#6FA3FE", name: "Sozialpädagogin", bereich: "Krisenintervention", seit: "Seit 2018",
          zitat: "Ich habe in mehreren Trägern gearbeitet. Bei Ankernetz ist es das erste Mal, dass ich das Gefühl habe, meine Arbeit wirklich gut machen zu können - weil das Drumherum stimmt." },
        { initiale: "M", farbe: "#FEC274", name: "Erzieherin", bereich: "Therapie & Wohnen", seit: "Seit 2020",
          zitat: "Die Supervision ist kein Pro-forma-Termin. Wir arbeiten wirklich daran. Das hat meine Haltung und meine Belastbarkeit verändert." },
        { initiale: "T", farbe: "#22c55e", name: "Sozialarbeiter", bereich: "Beratung & Prävention", seit: "Seit 2021",
          zitat: "Ich konnte nach zwei Jahren intern in einen anderen Bereich wechseln. Das war nie ein Problem - im Gegenteil, es wurde gefördert." },
      ],
    },
    cta: {
      eyebrow: "Jetzt bewerben",
      h2: "Passen wir zusammen?",
      p: "Wenn Sie in der Kinder- und Jugendhilfe arbeiten oder es sich vorstellen können, schreiben Sie uns - auch wenn gerade keine passende Stelle ausgeschrieben ist. Initiativbewerbungen sind bei uns immer willkommen.",
      bewerbenBtn: "Jetzt bewerben",
      rueckfragenLabel: "Rückfragen",
      hinweis: "Bitte senden Sie: Anschreiben, Lebenslauf, relevante Abschlüsse & Zeugnisse. Wir melden uns innerhalb von 5 Werktagen.",
    },
  },
  en: {
    hero: {
      eyebrow: "Ankernetz - Careers",
      h1a: "Meaningful Work.",
      h1b: "Team with Values.",
      p: "At Ankernetz, people work who want to make a real difference - for children and young people who depend on reliable professionals. We are looking for you.",
      ctaPrimary: "View Open Positions",
      ctaSecondary: "Unsolicited Application",
    },
    warum: {
      eyebrow: "Why Ankernetz",
      h2: "An employer who takes its professionals seriously.",
      p1: "Child and youth welfare is a demanding field. Those who work here give a great deal - and deserve genuine support, recognition and development in return.",
      p2: "At Ankernetz, supervision, continuing education and collegial exchange are not extras you have to apply for - they are a fixed part of the work culture. We believe: those who take good care of themselves can take good care of others.",
      p3: "What's more: Ankernetz is growing. Those who join today can take on responsibility tomorrow. Internal career paths are not just a promise - they actually happen here.",
      kennzahlen: [
        { zahl: "TVöD-level", label: "Compensation", sub: "Fair pay with increments" },
        { zahl: "40 hrs.", label: "Training/Year", sub: "Fixed budget per professional" },
        { zahl: "Weekly", label: "Supervision", sub: "Individual & team" },
        { zahl: "< 10", label: "Team size", sub: "Small, close-knit teams" },
        { zahl: "Permanent", label: "Positions", sub: "No project-based contracts" },
        { zahl: "11", label: "Departments", sub: "Internal development paths" },
      ],
    },
    vorteile: {
      eyebrow: "What to Expect",
      h2: "Your Benefits at Ankernetz",
      items: [
        { titel: "Fair Compensation", text: "Aligned with TVöD with regular pay increments." },
        { titel: "Supervision", text: "Regular individual and team supervision as a fixed part of working hours." },
        { titel: "Continuing Education", text: "Annual training budget and internal workshops - at least 40 hours per year." },
        { titel: "Team Culture", text: "Small, well-established teams with genuine collegiality and flat hierarchies." },
        { titel: "Meaningful Work", text: "Real impact for children and young people who would otherwise struggle." },
        { titel: "Stability", text: "Ankernetz is continuously growing - secure positions, no project contract carousel." },
      ],
    },
    stellen: {
      eyebrow: "Open Positions",
      h2: "We are looking for you.",
      ctaInitiativ: "Unsolicited Application →",
      aufgabenLabel: "Your Responsibilities",
      voraussetzungenLabel: "Requirements",
      bewerbenBtn: "Apply Now",
      rueckfragenBtn: "Questions: +49 30 22 45 43 22",
      items: [
        {
          bereich: "Crisis Intervention",
          titel: "Social Pedagogue (m/f/d)",
          umfang: "Full-time / Part-time",
          eintrittsdatum: "Immediately",
          aufgaben: [
            "Supporting young people in acute crisis situations",
            "Crisis intervention counselling and stabilisation measures",
            "Close coordination with youth welfare offices and specialists",
            "Documentation and reporting",
          ],
          voraussetzungen: [
            "Degree in social pedagogy, social work or equivalent",
            "Professional experience in child and youth welfare",
            "Willingness to work shifts (including nights and weekends)",
            "Knowledge of trauma-sensitive work is an advantage",
          ],
        },
        {
          bereich: "Therapy & Residential",
          titel: "Childcare Worker / Educator (m/f/d)",
          umfang: "Full-time",
          eintrittsdatum: "Immediately",
          aufgaben: [
            "Day-to-day support in the therapeutic residential group (ages 12-17)",
            "Primary keyworker support and intensive individual accompaniment",
            "Co-designing leisure and experiential education activities",
            "Family work and cooperation with schools",
          ],
          voraussetzungen: [
            "State-recognised qualification as an educator / childcare worker",
            "Empathy and resilience",
            "Ability to work in a team and willingness to reflect",
            "Driving licence class B is an advantage",
          ],
        },
        {
          bereich: "Early Intervention",
          titel: "Family Midwife / Family Health Nurse (m/f/d)",
          umfang: "Part-time (20-30 hrs.)",
          eintrittsdatum: "Immediately",
          aufgaben: [
            "Outreach work with families with young children (ages 0-3)",
            "Support with bonding and developmental promotion",
            "Networking with paediatricians, nurseries and youth welfare offices",
            "Group activities for mothers and fathers",
          ],
          voraussetzungen: [
            "Training as a midwife or paediatric nurse",
            "Additional qualification as a family midwife desirable",
            "Empathetic, resource-oriented approach",
            "Resilience in difficult family situations",
          ],
        },
        {
          bereich: "Psychology Services",
          titel: "Psychologist (m/f/d)",
          umfang: "Full-time / Part-time",
          eintrittsdatum: "By arrangement",
          aufgaben: [
            "Diagnostic assessments and expert reports",
            "Psychotherapeutic treatment (if licensed)",
            "Professional consultation for educational teams",
            "Crisis intervention support as needed",
          ],
          voraussetzungen: [
            "Degree in psychology (diploma or master's)",
            "Experience in child and adolescent psychology",
            "Full licensure or ongoing psychotherapy training is an advantage",
            "Resilience and team orientation",
          ],
        },
        {
          bereich: "Counselling & Prevention",
          titel: "Social Worker (m/f/d)",
          umfang: "Full-time",
          eintrittsdatum: "Immediately",
          aufgaben: [
            "Low-threshold counselling for children, young people and families",
            "Online counselling and outreach services",
            "Prevention programmes in schools and nurseries",
            "Community networking work",
          ],
          voraussetzungen: [
            "Degree in social work or social pedagogy (B.A. / M.A.)",
            "Experience in individual and group work",
            "Strong communication skills and intercultural competence",
            "Basic knowledge of systemic counselling desirable",
          ],
        },
        {
          bereich: "Transition to Employment",
          titel: "Job Coach / Employment Support Worker (m/f/d)",
          umfang: "Full-time / Part-time",
          eintrittsdatum: "By arrangement",
          aufgaben: [
            "Individual support for young adults transitioning to training and employment",
            "Application training and internship placement",
            "Cooperation with companies, schools and employment agencies",
            "Crisis support during setbacks and dropouts",
          ],
          voraussetzungen: [
            "Pedagogical or social science degree",
            "Experience in career guidance or youth employment support",
            "Network competencies in the Berlin labour market are an advantage",
            "Motivating, resource-oriented working style",
          ],
        },
      ],
    },
    prozess: {
      eyebrow: "How it works",
      h2: "The Application Process",
      schritte: [
        { nr: "01", titel: "Application", text: "Documents by email to karriere@ankernetz.com - cover letter, CV, relevant certificates." },
        { nr: "02", titel: "Response", text: "Within 5 working days you will receive a confirmation of receipt and an initial overview." },
        { nr: "03", titel: "Initial Call", text: "Getting to know each other by phone - 20-30 minutes, open and non-binding." },
        { nr: "04", titel: "Interview", text: "In-person meeting with the team - you get to know us, we get to know you." },
        { nr: "05", titel: "Offer", text: "If there is mutual interest: a contract offer with clear terms - without a long wait." },
      ],
    },
    stimmen: {
      eyebrow: "What colleagues say",
      h2: "Voices from the Team",
      items: [
        { initiale: "S", farbe: "#6FA3FE", name: "Social Pedagogue", bereich: "Crisis Intervention", seit: "Since 2018",
          zitat: "I have worked with several organisations. At Ankernetz it is the first time I feel I can actually do my job well - because everything around me is right." },
        { initiale: "M", farbe: "#FEC274", name: "Educator", bereich: "Therapy & Residential", seit: "Since 2020",
          zitat: "Supervision is not a pro-forma appointment. We really work on things. It has changed my attitude and my resilience." },
        { initiale: "T", farbe: "#22c55e", name: "Social Worker", bereich: "Counselling & Prevention", seit: "Since 2021",
          zitat: "After two years I was able to move internally to a different area. That was never a problem - on the contrary, it was actively encouraged." },
      ],
    },
    cta: {
      eyebrow: "Apply Now",
      h2: "Are we a match?",
      p: "If you work in child and youth welfare or can imagine doing so, write to us - even if no suitable position is currently advertised. Unsolicited applications are always welcome.",
      bewerbenBtn: "Apply Now",
      rueckfragenLabel: "Questions",
      hinweis: "Please send: cover letter, CV, relevant qualifications & references. We will get back to you within 5 working days.",
    },
  },
};

export default function KarrierePage() {
  const t = useT(TRANS);

  return (
    <main style={{ overflowX: "hidden", background: "#ffffff" }}>

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", minHeight: "80vh",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: "20%", right: "8%", width: "420px", height: "420px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(111,163,254,0.12) 0%, transparent 65%)" }} />
        <div className="site-container" style={{ position: "relative", zIndex: 2, paddingBottom: "5rem", paddingTop: "10rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.5rem" }}>
            {t.hero.eyebrow}
          </p>
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1.5rem", maxWidth: "20ch" }}>
            {t.hero.h1a}<br />
            <span style={{ color: "#6FA3FE" }}>{t.hero.h1b}</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.85,
            maxWidth: "48ch", marginBottom: "3rem" }}>
            {t.hero.p}
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#stellen" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "white", color: "#1a3f6f", padding: "0.875rem 1.75rem",
              fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.04em",
              textTransform: "uppercase", textDecoration: "none" }}>
              {t.hero.ctaPrimary}
            </a>
            <a href="mailto:karriere@ankernetz.com" style={{ border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.7)", padding: "0.875rem 1.5rem",
              fontWeight: 500, fontSize: "0.875rem", textDecoration: "none" }}>
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WARUM ANKERNETZ
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "6rem 0" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>{t.warum.eyebrow}</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
                letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                {t.warum.h2}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85 }}>{t.warum.p1}</p>
                <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85 }}>{t.warum.p2}</p>
                <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85 }}>{t.warum.p3}</p>
              </div>
            </div>

            {/* Kennzahlen */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px",
              background: "#dde4ee", border: "1px solid #dde4ee" }}>
              {t.warum.kennzahlen.map(k => (
                <div key={k.label} style={{ background: "white", padding: "1.5rem", textAlign: "center" }}>
                  <p style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1a3f6f",
                    letterSpacing: "-0.02em", marginBottom: "0.25rem" }}>{k.zahl}</p>
                  <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#6FA3FE",
                    letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.2rem" }}>{k.label}</p>
                  <p style={{ fontSize: "0.72rem", color: "rgba(26,63,111,0.4)" }}>{k.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          VORTEILE
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "6rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>{t.vorteile.eyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em" }}>{t.vorteile.h2}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {t.vorteile.items.map((v, i) => (
              <div key={v.titel} className="bento-card"
                style={{ background: "white", padding: "2rem" }}>
                <div style={{ width: "28px", height: "3px", background: vorteileAkzente[i],
                  marginBottom: "1.25rem", borderRadius: "9999px" }} />
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#1a3f6f",
                  marginBottom: "0.625rem" }}>{v.titel}</h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.6)", lineHeight: 1.75 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          OFFENE STELLEN
      ══════════════════════════════════════════════════ */}
      <section id="stellen" style={{ background: "#ffffff", padding: "6rem 0" }}>
        <div className="site-container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>{t.stellen.eyebrow}</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
                letterSpacing: "-0.025em" }}>{t.stellen.h2}</h2>
            </div>
            <a href="mailto:karriere@ankernetz.com" style={{ background: "#1a3f6f", color: "white",
              padding: "0.75rem 1.5rem", fontWeight: 700, fontSize: "0.8125rem",
              letterSpacing: "0.04em", textTransform: "uppercase", textDecoration: "none",
              display: "inline-block" }}>
              {t.stellen.ctaInitiativ}
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px",
            background: "#dde4ee", border: "1px solid #dde4ee" }}>
            {t.stellen.items.map((s, i) => (
              <details key={s.titel} style={{ background: "white" }}>
                <summary style={{ padding: "1.5rem 2rem", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  listStyle: "none", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flex: 1 }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%",
                      background: stellenAkzente[i], flexShrink: 0 }} />
                    <div>
                      <p style={{ fontSize: "0.65rem", fontWeight: 700, color: stellenAkzente[i],
                        letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                        {s.bereich}
                      </p>
                      <p style={{ fontSize: "1rem", fontWeight: 700, color: "#1a3f6f" }}>{s.titel}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexShrink: 0 }}>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ fontSize: "0.75rem", color: "rgba(26,63,111,0.5)" }}>{s.umfang}</p>
                      <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#22c55e" }}>
                        {s.eintrittsdatum}
                      </p>
                    </div>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%",
                      border: "1.5px solid #dde4ee", display: "flex", alignItems: "center",
                      justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="#1a3f6f">
                        <path d="M0 0l5 6 5-6z" />
                      </svg>
                    </div>
                  </div>
                </summary>

                <div style={{ padding: "0 2rem 2rem 4.25rem", borderTop: "1px solid #eef2f7" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", paddingTop: "1.75rem" }}>
                    <div>
                      <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em",
                        textTransform: "uppercase", color: "rgba(26,63,111,0.4)", marginBottom: "1rem" }}>
                        {t.stellen.aufgabenLabel}
                      </p>
                      {s.aufgaben.map(a => (
                        <div key={a} style={{ display: "flex", gap: "0.75rem",
                          marginBottom: "0.625rem", alignItems: "flex-start" }}>
                          <div style={{ width: "5px", height: "5px", borderRadius: "50%",
                            background: stellenAkzente[i], flexShrink: 0, marginTop: "0.45rem" }} />
                          <p style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.7)", lineHeight: 1.6 }}>{a}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em",
                        textTransform: "uppercase", color: "rgba(26,63,111,0.4)", marginBottom: "1rem" }}>
                        {t.stellen.voraussetzungenLabel}
                      </p>
                      {s.voraussetzungen.map(v => (
                        <div key={v} style={{ display: "flex", gap: "0.75rem",
                          marginBottom: "0.625rem", alignItems: "flex-start" }}>
                          <div style={{ width: "5px", height: "5px", borderRadius: "50%",
                            background: "rgba(26,63,111,0.3)", flexShrink: 0, marginTop: "0.45rem" }} />
                          <p style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.7)", lineHeight: 1.6 }}>{v}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: "1.75rem", paddingTop: "1.5rem",
                    borderTop: "1px solid #eef2f7", display: "flex", gap: "0.75rem" }}>
                    <a href={`mailto:karriere@ankernetz.com?subject=${encodeURIComponent(s.titel)}`}
                      style={{ background: "#1a3f6f", color: "white",
                        padding: "0.625rem 1.25rem", fontWeight: 700, fontSize: "0.8rem",
                        letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none" }}>
                      {t.stellen.bewerbenBtn}
                    </a>
                    <a href="tel:+493022454322"
                      style={{ border: "1px solid #dde4ee", color: "rgba(26,63,111,0.6)",
                        padding: "0.625rem 1.25rem", fontWeight: 500, fontSize: "0.8rem",
                        textDecoration: "none" }}>
                      {t.stellen.rueckfragenBtn}
                    </a>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          BEWERBUNGSPROZESS
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "6rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>{t.prozess.eyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em" }}>{t.prozess.h2}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0" }}>
            {t.prozess.schritte.map((s, i) => (
              <div key={s.nr} style={{ background: "white", padding: "2rem 1.5rem",
                borderRight: i < 4 ? "1px solid #dde4ee" : "none",
                position: "relative" }}>
                <p style={{ fontSize: "0.65rem", fontWeight: 800, color: "#6FA3FE",
                  letterSpacing: "0.12em", marginBottom: "0.875rem" }}>{s.nr}</p>
                <h4 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1a3f6f",
                  marginBottom: "0.625rem" }}>{s.titel}</h4>
                <p style={{ fontSize: "0.8125rem", color: "rgba(26,63,111,0.55)", lineHeight: 1.7 }}>{s.text}</p>
                {i < 4 && (
                  <div style={{ position: "absolute", right: "-10px", top: "50%",
                    transform: "translateY(-50%)", width: "20px", height: "20px",
                    background: "#d8e4f0", borderRadius: "50%", zIndex: 1,
                    display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="#6FA3FE">
                      <path d="M0 0l7 3.5-7 3.5z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STIMMEN AUS DEM TEAM
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "6rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>{t.stimmen.eyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em" }}>{t.stimmen.h2}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {t.stimmen.items.map(s => (
              <div key={s.name} className="bento-card"
                style={{ background: "#f0f4f8", padding: "2rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.25rem" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%",
                    background: s.farbe, display: "flex", alignItems: "center",
                    justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: "1rem", fontWeight: 800, color: "white" }}>{s.initiale}</span>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1a3f6f" }}>{s.name}</p>
                    <p style={{ fontSize: "0.72rem", color: "rgba(26,63,111,0.5)" }}>
                      {s.bereich} · {s.seit}
                    </p>
                  </div>
                </div>
                <p style={{ fontSize: "0.9rem", color: "rgba(26,63,111,0.7)", lineHeight: 1.75,
                  fontStyle: "italic" }}>
                  „{s.zitat}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 100%)", padding: "6rem 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px" }} />
        <div className="site-container" style={{ position: "relative", zIndex: 1,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.5rem" }}>{t.cta.eyebrow}</p>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)", fontWeight: 800, color: "white",
              letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
              {t.cta.h2}
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.85 }}>
              {t.cta.p}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a href="mailto:karriere@ankernetz.com"
              style={{ background: "white", color: "#1a3f6f",
                padding: "1rem 1.5rem", fontWeight: 700, fontSize: "0.875rem",
                letterSpacing: "0.04em", textTransform: "uppercase", textDecoration: "none",
                display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span>{t.cta.bewerbenBtn}</span>
              <span>karriere@ankernetz.com →</span>
            </a>
            <a href="tel:+493022454322"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)",
                padding: "1rem 1.5rem", fontWeight: 500, fontSize: "0.875rem",
                textDecoration: "none", display: "flex", alignItems: "center",
                justifyContent: "space-between" }}>
              <span>{t.cta.rueckfragenLabel}</span>
              <span>+49 30 22 45 43 22</span>
            </a>
            <div style={{ padding: "1rem 1.5rem", background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>
                {t.cta.hinweis}
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
