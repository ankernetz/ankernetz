import Link from "next/link";

const stellen = [
  {
    bereich: "Krisenintervention",
    titel: "Sozialpädagogin / Sozialpädagoge (m/w/d)",
    umfang: "Vollzeit / Teilzeit",
    eintrittsdatum: "Ab sofort",
    akzent: "#ef4444",
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
    akzent: "#6FA3FE",
    aufgaben: [
      "Alltagsbegleitung in der therapeutischen Wohngruppe (12–17 J.)",
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
    umfang: "Teilzeit (20–30 Std.)",
    eintrittsdatum: "Ab sofort",
    akzent: "#22c55e",
    aufgaben: [
      "Aufsuchende Arbeit mit Familien mit Kleinkindern (0–3 Jahre)",
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
    akzent: "#a78bfa",
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
    akzent: "#FEC274",
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
    akzent: "#22c55e",
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
];

const vorteile = [
  { titel: "Faire Vergütung", text: "Anlehnung an TVöD mit regelmäßigen Stufensteigerungen.", akzent: "#6FA3FE" },
  { titel: "Supervision", text: "Regelmäßige Einzel- und Teamsupervision als fester Bestandteil der Arbeitszeit.", akzent: "#FEC274" },
  { titel: "Fortbildung", text: "Jährliches Fortbildungsbudget und interne Schulungen — mindestens 40 Stunden pro Jahr.", akzent: "#22c55e" },
  { titel: "Teamkultur", text: "Kleine, gut eingespielte Teams mit echter Kollegialität und flachen Hierarchien.", akzent: "#6FA3FE" },
  { titel: "Sinnstiftende Arbeit", text: "Echte Wirkung für Kinder und Jugendliche, die es sonst schwer hätten.", akzent: "#FEC274" },
  { titel: "Stabilität", text: "Ankernetz wächst kontinuierlich — sichere Stellen, kein Projektbefristungs-Karussell.", akzent: "#22c55e" },
];

export default function KarrierePage() {
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
            Ankernetz — Karriere
          </p>
          <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1.5rem", maxWidth: "20ch" }}>
            Arbeit mit Sinn.<br />
            <span style={{ color: "#6FA3FE" }}>Team mit Haltung.</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.85,
            maxWidth: "48ch", marginBottom: "3rem" }}>
            Bei Ankernetz arbeiten Menschen, die echte Veränderung bewirken wollen — für Kinder
            und Jugendliche, die auf verlässliche Fachkräfte angewiesen sind.
            Wir suchen Sie.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#stellen" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "white", color: "#1a3f6f", padding: "0.875rem 1.75rem",
              fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.04em",
              textTransform: "uppercase", textDecoration: "none" }}>
              Offene Stellen ansehen
            </a>
            <a href="mailto:karriere@ankernetz.com" style={{ border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.7)", padding: "0.875rem 1.5rem",
              fontWeight: 500, fontSize: "0.875rem", textDecoration: "none" }}>
              Initiativbewerbung
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
                textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>Warum Ankernetz</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
                letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                Ein Arbeitgeber, der seine Fachkräfte ernst nimmt.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85 }}>
                  Die Kinder- und Jugendhilfe ist eine anspruchsvolle Branche. Wer hier arbeitet,
                  gibt viel — und verdient im Gegenzug echte Unterstützung, Anerkennung und Entwicklung.
                </p>
                <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85 }}>
                  Bei Ankernetz sind Supervision, Fortbildung und kollegialer Austausch keine Extras,
                  die man beantragen muss — sie sind fester Bestandteil der Arbeitskultur.
                  Wir glauben: Wer gut für sich gesorgt ist, kann gut für andere sorgen.
                </p>
                <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85 }}>
                  Außerdem: Ankernetz wächst. Wer heute einsteigt, kann morgen Verantwortung übernehmen.
                  Interne Karrierewege sind kein Versprechen — sie passieren bei uns wirklich.
                </p>
              </div>
            </div>

            {/* Kennzahlen */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px",
              background: "#dde4ee", border: "1px solid #dde4ee" }}>
              {[
                { zahl: "TVöD-nah", label: "Vergütung", sub: "Faire Bezahlung mit Stufen" },
                { zahl: "40 Std.", label: "Fortbildung/Jahr", sub: "Festes Budget pro Fachkraft" },
                { zahl: "Wöchentlich", label: "Supervision", sub: "Einzel & Team" },
                { zahl: "< 10", label: "Teamgröße", sub: "Kleine, enge Teams" },
                { zahl: "Unbefristet", label: "Stellen", sub: "Keine Projektstellen" },
                { zahl: "11", label: "Einsatzbereiche", sub: "Interne Entwicklungswege" },
              ].map(k => (
                <div key={k.label} style={{ background: "white", padding: "1.5rem",
                  textAlign: "center" }}>
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
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>Was Sie erwartet</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em" }}>Ihre Vorteile bei Ankernetz</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {vorteile.map(v => (
              <div key={v.titel} className="bento-card"
                style={{ background: "white", padding: "2rem" }}>
                <div style={{ width: "28px", height: "3px", background: v.akzent,
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
                textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>Offene Stellen</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
                letterSpacing: "-0.025em" }}>Wir suchen Sie.</h2>
            </div>
            <a href="mailto:karriere@ankernetz.com" style={{ background: "#1a3f6f", color: "white",
              padding: "0.75rem 1.5rem", fontWeight: 700, fontSize: "0.8125rem",
              letterSpacing: "0.04em", textTransform: "uppercase", textDecoration: "none",
              display: "inline-block" }}>
              Initiativbewerbung →
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px",
            background: "#dde4ee", border: "1px solid #dde4ee" }}>
            {stellen.map((s) => (
              <details key={s.titel}
                style={{ background: "white" }}>
                <summary style={{ padding: "1.5rem 2rem", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  listStyle: "none", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flex: 1 }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%",
                      background: s.akzent, flexShrink: 0 }} />
                    <div>
                      <p style={{ fontSize: "0.65rem", fontWeight: 700, color: s.akzent,
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

                <div style={{ padding: "0 2rem 2rem 4.25rem",
                  borderTop: "1px solid #eef2f7" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", paddingTop: "1.75rem" }}>
                    <div>
                      <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em",
                        textTransform: "uppercase", color: "rgba(26,63,111,0.4)", marginBottom: "1rem" }}>
                        Ihre Aufgaben
                      </p>
                      {s.aufgaben.map(a => (
                        <div key={a} style={{ display: "flex", gap: "0.75rem",
                          marginBottom: "0.625rem", alignItems: "flex-start" }}>
                          <div style={{ width: "5px", height: "5px", borderRadius: "50%",
                            background: s.akzent, flexShrink: 0, marginTop: "0.45rem" }} />
                          <p style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.7)",
                            lineHeight: 1.6 }}>{a}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em",
                        textTransform: "uppercase", color: "rgba(26,63,111,0.4)", marginBottom: "1rem" }}>
                        Voraussetzungen
                      </p>
                      {s.voraussetzungen.map(v => (
                        <div key={v} style={{ display: "flex", gap: "0.75rem",
                          marginBottom: "0.625rem", alignItems: "flex-start" }}>
                          <div style={{ width: "5px", height: "5px", borderRadius: "50%",
                            background: "rgba(26,63,111,0.3)", flexShrink: 0, marginTop: "0.45rem" }} />
                          <p style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.7)",
                            lineHeight: 1.6 }}>{v}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: "1.75rem", paddingTop: "1.5rem",
                    borderTop: "1px solid #eef2f7", display: "flex", gap: "0.75rem" }}>
                    <a href={`mailto:karriere@ankernetz.com?subject=Bewerbung: ${encodeURIComponent(s.titel)}`}
                      style={{ background: "#1a3f6f", color: "white",
                        padding: "0.625rem 1.25rem", fontWeight: 700, fontSize: "0.8rem",
                        letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none" }}>
                      Jetzt bewerben
                    </a>
                    <a href="tel:+4930224543220"
                      style={{ border: "1px solid #dde4ee", color: "rgba(26,63,111,0.6)",
                        padding: "0.625rem 1.25rem", fontWeight: 500, fontSize: "0.8rem",
                        textDecoration: "none" }}>
                      Rückfragen: +49 30 22 45 43 22
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
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>Wie es läuft</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em" }}>Der Bewerbungsprozess</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0" }}>
            {[
              { nr: "01", titel: "Bewerbung", text: "Unterlagen per E-Mail an karriere@ankernetz.com — Anschreiben, Lebenslauf, relevante Zeugnisse." },
              { nr: "02", titel: "Rückmeldung", text: "Innerhalb von 5 Werktagen erhalten Sie eine Eingangsbestätigung und einen ersten Überblick." },
              { nr: "03", titel: "Erstgespräch", text: "Telefonisches Kennenlernen — 20–30 Minuten, offen und unverbindlich." },
              { nr: "04", titel: "Vorstellungsgespräch", text: "Persönliches Gespräch im Team — Sie lernen uns kennen, wir lernen Sie kennen." },
              { nr: "05", titel: "Angebot", text: "Bei gegenseitigem Interesse: Vertragsangebot mit klaren Konditionen — ohne lange Wartezeit." },
            ].map((s, i) => (
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
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>Das sagen Kolleginnen & Kollegen</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em" }}>Stimmen aus dem Team</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {[
              { initiale: "S", farbe: "#6FA3FE", name: "Sozialpädagogin", bereich: "Krisenintervention", seit: "Seit 2018",
                zitat: "Ich habe in mehreren Trägern gearbeitet. Bei Ankernetz ist es das erste Mal, dass ich das Gefühl habe, meine Arbeit wirklich gut machen zu können — weil das Drumherum stimmt." },
              { initiale: "M", farbe: "#FEC274", name: "Erzieherin", bereich: "Therapie & Wohnen", seit: "Seit 2020",
                zitat: "Die Supervision ist kein Pro-forma-Termin. Wir arbeiten wirklich daran. Das hat meine Haltung und meine Belastbarkeit verändert." },
              { initiale: "T", farbe: "#22c55e", name: "Sozialarbeiter", bereich: "Beratung & Prävention", seit: "Seit 2021",
                zitat: "Ich konnte nach zwei Jahren intern in einen anderen Bereich wechseln. Das war nie ein Problem — im Gegenteil, es wurde gefördert." },
            ].map(s => (
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
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.5rem" }}>Jetzt bewerben</p>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)", fontWeight: 800, color: "white",
              letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
              Passen wir zusammen?
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.85 }}>
              Wenn Sie in der Kinder- und Jugendhilfe arbeiten oder es sich vorstellen können,
              schreiben Sie uns — auch wenn gerade keine passende Stelle ausgeschrieben ist.
              Initiativbewerbungen sind bei uns immer willkommen.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a href="mailto:karriere@ankernetz.com"
              style={{ background: "white", color: "#1a3f6f",
                padding: "1rem 1.5rem", fontWeight: 700, fontSize: "0.875rem",
                letterSpacing: "0.04em", textTransform: "uppercase", textDecoration: "none",
                display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span>Jetzt bewerben</span>
              <span>karriere@ankernetz.com →</span>
            </a>
            <a href="tel:+4930224543220"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)",
                padding: "1rem 1.5rem", fontWeight: 500, fontSize: "0.875rem",
                textDecoration: "none", display: "flex", alignItems: "center",
                justifyContent: "space-between" }}>
              <span>Rückfragen</span>
              <span>+49 30 22 45 43 22</span>
            </a>
            <div style={{ padding: "1rem 1.5rem", background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>
                Bitte senden Sie: Anschreiben, Lebenslauf, relevante Abschlüsse &amp; Zeugnisse.
                Wir melden uns innerhalb von 5 Werktagen.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
