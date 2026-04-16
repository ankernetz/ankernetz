import Link from "next/link";

export default function UeberUnsPage() {
  return (
    <main style={{ overflowX: "hidden", background: "#ffffff" }}>

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", minHeight: "100vh",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
      }}>
        {/* Dot-Grid */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px" }} />
        {/* Glow */}
        <div style={{ position: "absolute", top: "25%", right: "10%", width: "500px", height: "500px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(111,163,254,0.12) 0%, transparent 65%)" }} />

        <div className="site-container" style={{ position: "relative", zIndex: 2, paddingBottom: "5rem", paddingTop: "10rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.5rem" }}>
            Ankernetz — Wer wir sind
          </p>
          <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1.5rem", maxWidth: "18ch" }}>
            Wir sind das Netz,<br />
            <span style={{ color: "#6FA3FE" }}>das hält.</span>
          </h1>
          <div style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.85,
            maxWidth: "52ch", marginBottom: "3.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p>
              Ankernetz ist ein Zusammenschluss spezialisierter Angebote der Kinder- und Jugendhilfe in Berlin.
              Wir verbinden Krisenintervention, therapeutische Begleitung, Wohnen, Diagnostik und soziale Teilhabe
              - abgestimmt auf die individuellen Bedürfnisse junger Menschen und Familien.
            </p>
            <p>
              Unser Angebot richtet sich an Kinder und Jugendliche von 0 bis 18 Jahren sowie an Mütter und Väter
              mit ihren Kindern im Rahmen von Mutter-Kind-Angeboten.
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>
              Ziel ist es, Stabilität zu schaffen, Entwicklung zu ermöglichen und verlässliche Perspektiven zu eröffnen.
            </p>
          </div>

          {/* Kennzahlen-Leiste */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
            {[
              { zahl: "2015", label: "Gründungsjahr" },
              { zahl: "11", label: "Angebotsbereiche" },
              { zahl: "24/7", label: "Krisenbereitschaft" },
              { zahl: "Berlin", label: "Unser Standort" },
            ].map(z => (
              <div key={z.label}>
                <p style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)", fontWeight: 800,
                  color: "white", lineHeight: 1, letterSpacing: "-0.02em" }}>{z.zahl}</p>
                <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "0.375rem" }}>{z.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WARUM WIR EXISTIEREN
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "6rem 0" }}>
        <div className="site-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>Unsere Geschichte</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.75rem" }}>
              Entstanden aus der Überzeugung,<br />dass es besser geht.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
              <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85 }}>
                Ankernetz wurde 2015 gegründet — von Menschen, die selbst in der Kinder- und Jugendhilfe
                gearbeitet haben und täglich erlebt haben, wie Kinder zwischen den Systemen verloren gehen.
                Zu viele Übergaben, zu wenig Kontinuität, zu wenig Vernetzung.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85 }}>
                Die Idee war simpel: Was wäre, wenn alle spezialisierten Hilfeformen unter einem Dach wären?
                Wenn eine Krisenaufnahme direkt in eine Wohngruppe übergeht, die Psychotherapie im Haus ist
                und das Jugendamt einen verlässlichen Ansprechpartner hat?
              </p>
              <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85 }}>
                Aus dieser Idee ist Ankernetz geworden — ein echtes Netzwerk, kein Träger-Konstrukt.
                Mit 11 Angeboten, die ineinandergreifen. Mit Teams, die sich kennen. Für Kinder,
                die sonst durch das Netz fallen würden.
              </p>
            </div>
          </div>

          {/* Zeitleiste */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { jahr: "2015", ereignis: "Gründung", detail: "Ankernetz startet mit Krisenintervention und erster Wohngruppe." },
              { jahr: "2017", ereignis: "Diagnostik & Clearing", detail: "Aufbau des Diagnostikzentrums — erste umfassende Einschätzungsstelle in Berlin." },
              { jahr: "2018", ereignis: "Psychotherapie", detail: "Eröffnung der Psychotherapiepraxis mit Kassenzulassung für Kinder und Jugendliche." },
              { jahr: "2020", ereignis: "Frühe Hilfen", detail: "Erweiterung auf das Kleinkindbereich — 0 bis 6 Jahre." },
              { jahr: "2022", ereignis: "Ankerkleidung", detail: "Start des spezialisierten Kleidungsangebots nach Störungsbild." },
              { jahr: "2024", ereignis: "11 Angebote", detail: "Das Netzwerk ist vollständig — alle Bereiche von 0 bis 25 Jahren abgedeckt." },
            ].map((e, i) => (
              <div key={e.jahr} style={{ display: "flex", gap: "1.5rem", paddingBottom: "1.75rem",
                position: "relative" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%",
                    background: i === 5 ? "#1a3f6f" : "#f0f4f8",
                    border: `2px solid ${i === 5 ? "#1a3f6f" : "#dde4ee"}`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%",
                      background: i === 5 ? "#6FA3FE" : "#1a3f6f" }} />
                  </div>
                  {i < 5 && (
                    <div style={{ width: "2px", flex: 1, background: "#dde4ee", marginTop: "4px" }} />
                  )}
                </div>
                <div style={{ paddingTop: "0.375rem", paddingBottom: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.25rem" }}>
                    <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "#6FA3FE" }}>{e.jahr}</span>
                    <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1a3f6f" }}>{e.ereignis}</span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(26,63,111,0.55)", lineHeight: 1.6 }}>{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "6rem 0" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
            <div style={{ background: "#1a3f6f", padding: "3rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, opacity: 0.04,
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "28px 28px" }} />
              <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.5rem",
                position: "relative", zIndex: 1 }}>Mission</p>
              <h3 style={{ fontSize: "1.625rem", fontWeight: 800, color: "white",
                letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "1.25rem",
                position: "relative", zIndex: 1 }}>
                Kein Kind fällt durch das Netz.
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.55)",
                lineHeight: 1.85, position: "relative", zIndex: 1 }}>
                Wir stellen sicher, dass jedes Kind — unabhängig von Diagnose, Herkunft oder
                Schweregrad — den spezialisierten Zugang zu Hilfe bekommt, den es braucht.
                Nicht irgendwann. Jetzt.
              </p>
            </div>
            <div style={{ background: "white", padding: "3rem" }}>
              <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.5rem" }}>Vision</p>
              <h3 style={{ fontSize: "1.625rem", fontWeight: 800, color: "#1a3f6f",
                letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "1.25rem" }}>
                Ein Netz, das trägt.
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.6)", lineHeight: 1.85 }}>
                Wir vision eine Kinder- und Jugendhilfe, in der Übergaben reibungslos funktionieren,
                Spezialisierung und Menschlichkeit kein Widerspruch sind und jedes Hilfesystem
                mit jedem anderen spricht — für das Kind, nicht für die Verwaltung.
              </p>
            </div>
          </div>

          {/* Drei Säulen */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginTop: "1.5rem" }}>
            {[
              { titel: "Spezialisierung", farbe: "#6FA3FE", text: "Jedes Angebot ist auf spezifische Störungsbilder, Altersgruppen und Bedarfe ausgerichtet. Kein Einheitsangebot, sondern präzise Hilfe." },
              { titel: "Vernetzung",       farbe: "#FEC274", text: "Alle 11 Bereiche sind intern verzahnt. Übergaben erfolgen ohne Informationsverlust, mit persönlicher Übergabe und Kontinuität." },
              { titel: "Menschlichkeit",  farbe: "#22c55e", text: "Fachlichkeit ohne Wärme ist wertlos. Jede Begegnung bei Ankernetz ist geprägt von echter Haltung, nicht von Protokoll." },
            ].map(s => (
              <div key={s.titel} style={{ background: "white", padding: "2rem" }}>
                <div style={{ width: "32px", height: "3px", background: s.farbe,
                  marginBottom: "1.25rem", borderRadius: "9999px" }} />
                <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#1a3f6f",
                  marginBottom: "0.75rem" }}>{s.titel}</h4>
                <p style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.6)", lineHeight: 1.75 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ZAHLEN & FAKTEN (dark)
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 100%)", padding: "5rem 0" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px" }} />
        <div className="site-container" style={{ position: "relative" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#6FA3FE", marginBottom: "3rem", textAlign: "center" }}>
            Ankernetz in Zahlen
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {[
              { zahl: "11",    einheit: "Angebotsbereiche",  text: "Vollständige Abdeckung aller Hilfebedarfe" },
              { zahl: "24/7",  einheit: "Krisenbereitschaft", text: "An 365 Tagen im Jahr erreichbar" },
              { zahl: "0–25",  einheit: "Lebensjahre",        text: "Von Frühe Hilfen bis Übergang Arbeit" },
              { zahl: "100 %", einheit: "Fachkräfte",         text: "Qualifiziertes Personal in allen Bereichen" },
              { zahl: "< 30",  einheit: "Min. Rückmeldung",   text: "Erste Antwort bei Krisenaufnahmen" },
              { zahl: "SGB VIII", einheit: "Rechtsbasis",     text: "Alle Angebote gesetzlich anerkannt" },
              { zahl: "Berlin", einheit: "Standort",          text: "Zentral im Berliner Hilfesystem verankert" },
              { zahl: "1",      einheit: "Dach",              text: "Ein Träger, ein Verständnis, ein Ziel" },
            ].map(z => (
              <div key={z.zahl} style={{ textAlign: "center", padding: "1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <p style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", fontWeight: 800,
                  color: "white", letterSpacing: "-0.025em", lineHeight: 1, marginBottom: "0.5rem" }}>
                  {z.zahl}
                </p>
                <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#6FA3FE",
                  letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  {z.einheit}
                </p>
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>
                  {z.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          UNSERE WERTE
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "6rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>Was uns leitet</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em" }}>Unsere Werte</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {[
              { titel: "Menschlichkeit",  text: "Jedes Kind verdient echte Begegnung, Würde und Respekt. Das ist unser Fundament — nicht Protokoll, sondern Haltung.", akzent: "#6FA3FE" },
              { titel: "Fachlichkeit",    text: "Wir handeln evidenzbasiert, reflektiert und mit hohem professionellen Anspruch. Gute Absicht reicht nicht — es braucht Kompetenz.", akzent: "#FEC274" },
              { titel: "Verlässlichkeit", text: "Jugendämter, Familien und Kinder können sich auf uns verlassen — in der Krise um 3 Uhr nachts genauso wie im Alltag.", akzent: "#22c55e" },
              { titel: "Vernetzung",      text: "Kein Angebot steht allein. Alle Bereiche greifen ineinander. Wir denken Hilfeketten — nicht Einzelmaßnahmen.", akzent: "#6FA3FE" },
              { titel: "Transparenz",     text: "Offene Kommunikation mit allen Beteiligten. Eltern, Jugendämter und Kinder wissen immer, was passiert und warum.", akzent: "#FEC274" },
              { titel: "Entwicklung",     text: "Wir stehen nie still. Wir lernen aus jedem Fall, jedem Rückmeldung und jeder Forschung — und passen uns an.", akzent: "#22c55e" },
            ].map(w => (
              <div key={w.titel} className="bento-card"
                style={{ background: "#f0f4f8", padding: "2rem" }}>
                <div style={{ width: "28px", height: "3px", background: w.akzent,
                  marginBottom: "1.25rem", borderRadius: "9999px" }} />
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#1a3f6f",
                  marginBottom: "0.75rem" }}>{w.titel}</h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.6)", lineHeight: 1.75 }}>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          UNSER ANSATZ
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "6rem 0" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>Wie wir arbeiten</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
                letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.75rem" }}>
                Anders gedacht.<br />Anders gemacht.
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Die meisten Träger der Jugendhilfe arbeiten in Silos. Ein Heim hier, eine Therapiepraxis dort,
                eine Beratungsstelle irgendwo anders — und dazwischen: das Kind, das niemand kennt.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Bei Ankernetz kennen sich die Teams. Übergaben werden persönlich begleitet.
                Diagnostik informiert die Pädagogik, die Pädagogik informiert die Therapie.
                Und das Jugendamt hat immer einen verlässlichen Ansprechpartner — über alle Bereiche hinweg.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85 }}>
                Unser Ansatz basiert auf traumasensibler Pädagogik, systemischer Begleitung und
                klarer fachlicher Steuerung. Wir messen uns nicht an Auslastung, sondern an Entwicklung.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { nr: "01", titel: "Systemische Vernetzung", text: "Alle 11 Angebote sind organisatorisch und fachlich vernetzt. Keine Informationsverluste bei Übergaben." },
                { nr: "02", titel: "Traumasensible Grundhaltung", text: "Alle Teams sind in traumasensibler Pädagogik ausgebildet. Das ist kein Zusatz — es ist die Basis." },
                { nr: "03", titel: "Störungsbildspezifisch", text: "Jedes Angebot ist auf konkrete Diagnose- und Bedarfsprofile ausgerichtet. Kein One-size-fits-all." },
                { nr: "04", titel: "Transparente Kommunikation", text: "Regelmäßige schriftliche Rückmeldungen, offene Falldiskussionen, klare Eskalationswege." },
                { nr: "05", titel: "Qualitätsgesicherte Fachlichkeit", text: "Supervision, Fortbildung und interne Qualitätsprüfungen als Daueraufgabe — nicht als Ausnahme." },
                { nr: "06", titel: "Zielorientierte Arbeit", text: "Hilfeplanung bedeutet bei uns: messbare Ziele, regelmäßige Überprüfung, ehrliche Rückmeldung." },
              ].map(a => (
                <div key={a.nr} style={{ background: "white", padding: "1.25rem 1.5rem",
                  display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "#6FA3FE",
                    letterSpacing: "0.08em", flexShrink: 0, paddingTop: "2px" }}>{a.nr}</span>
                  <div>
                    <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1a3f6f",
                      marginBottom: "0.25rem" }}>{a.titel}</p>
                    <p style={{ fontSize: "0.8125rem", color: "rgba(26,63,111,0.55)", lineHeight: 1.6 }}>{a.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          DAS NETZWERK — 11 ANGEBOTE
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "6rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>Alle Angebote</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em", marginBottom: "0.75rem" }}>Das Ankernetz</h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.5)", maxWidth: "48ch", margin: "0 auto" }}>
              11 Angebotsbereiche. Ein Träger. Ein gemeinsames Ziel: das Beste für das Kind.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px",
            background: "#dde4ee", border: "1px solid #dde4ee" }}>
            {[
              { titel: "Krisenintervention",    sub: "24/7 Sofortaufnahme",             href: "/krisenintervention",    akzent: "#ef4444" },
              { titel: "Psychotherapie",         sub: "Kinder & Jugendliche, Kassensitz", href: "/psychotherapie",        akzent: "#6FA3FE" },
              { titel: "Frühe Hilfen",            sub: "0–6 Jahre, Bindung & Entwicklung", href: "/fruehe-hilfen",         akzent: "#22c55e" },
              { titel: "Therapie & Wohnen",      sub: "Therapeutische Wohngruppen 12–17", href: "/therapie-wohnen",       akzent: "#6FA3FE" },
              { titel: "Jugendhilfe",             sub: "Kinderwohngruppen 6–12 Jahre",     href: "/jugendhilfe",           akzent: "#FEC274" },
              { titel: "Diagnostik & Clearing",  sub: "Einschätzung & Gutachten",          href: "/diagnostik-clearing",   akzent: "#a78bfa" },
              { titel: "Beratung & Prävention",  sub: "Niedrigschwellig & online",         href: "/beratung-praevention",  akzent: "#6FA3FE" },
              { titel: "Beratung in Kitas",       sub: "Fachberatung vor Ort",              href: "/kita-beratung",         akzent: "#FEC274" },
              { titel: "Übergang Arbeit",         sub: "Schule → Beruf",                   href: "/uebergang-arbeit",      akzent: "#22c55e" },
              { titel: "Ankerkleidung",           sub: "Kleidung nach Störungsbild",        href: "/ankerkleidung",         akzent: "#6FA3FE" },
              { titel: "Versorgung",              sub: "Ausstattung & Bedarfe",             href: "/versorgung",            akzent: "#FEC274" },
            ].map(a => (
              <Link key={a.href} href={a.href}
                style={{ background: "white", padding: "1.75rem 2rem", textDecoration: "none",
                  display: "block", transition: "background 0.15s ease" }}
                className="angebot-link">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.375rem" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%",
                    background: a.akzent, flexShrink: 0 }} />
                  <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1a3f6f" }}>{a.titel}</span>
                </div>
                <p style={{ fontSize: "0.8rem", color: "rgba(26,63,111,0.45)", paddingLeft: "1.5rem" }}>{a.sub}</p>
              </Link>
            ))}
          </div>
          <style>{`
            .angebot-link:hover { background: #f0f4f8 !important; }
          `}</style>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TEAM
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "6rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>Wer wir sind</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em" }}>Das Team</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>
            {[
              { rolle: "Geschäftsführung", initialen: "GF", farbe: "#1a3f6f",
                text: "Verantwortlich für Strategie, Qualitätsentwicklung und die übergreifende Steuerung des Ankernetzes. Direkter Ansprechpartner für Kooperationspartner und Behörden." },
              { rolle: "Fachliche Leitung", initialen: "FL", farbe: "#6FA3FE",
                text: "Steuerung der pädagogischen und therapeutischen Qualität aller Angebote. Zuständig für Fallsteuerung, Supervision und interdisziplinäre Koordination." },
              { rolle: "Psychologischer Dienst", initialen: "PD", farbe: "#FEC274",
                text: "Diagnostik, Einschätzungen und Psychotherapie für alle Altersgruppen. Fachliche Beratung der pädagogischen Teams in komplexen Fallkonstellationen." },
              { rolle: "Pädagogische Teams", initialen: "PT", farbe: "#22c55e",
                text: "Qualifizierte Fachkräfte der Sozialpädagogik, Sozialarbeit und Erziehungswissenschaft in allen Wohngruppen, Krisendiensten und Beratungsangeboten." },
              { rolle: "Verwaltung & Koordination", initialen: "VK", farbe: "#a78bfa",
                text: "Belegungs- und Hilfeplankoordination, Finanzmanagement und Kommunikation mit Jugendämtern — Rückgrat der täglichen Betriebsführung." },
              { rolle: "Qualitätsmanagement", initialen: "QM", farbe: "#6FA3FE",
                text: "Interne Qualitätssicherung, Dokumentation und Beschwerdemanagement. Verantwortlich für Standards, Evaluationen und Weiterentwicklung der Konzepte." },
            ].map(t => (
              <div key={t.rolle} style={{ background: "white", padding: "1.75rem",
                display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%",
                  background: t.farbe, display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "white",
                    letterSpacing: "0.04em" }}>{t.initialen}</span>
                </div>
                <div>
                  <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em",
                    textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.35rem" }}>{t.rolle}</p>
                  <p style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.7 }}>{t.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem", background: "#1a3f6f", padding: "2rem",
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem",
            flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "white", marginBottom: "0.375rem" }}>
                Sie möchten Teil des Ankernetz-Teams werden?
              </p>
              <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>
                Wir suchen laufend qualifizierte Fachkräfte für alle Bereiche.
              </p>
            </div>
            <Link href="/karriere" style={{ background: "#6FA3FE", color: "#0b1828",
              padding: "0.75rem 1.5rem", fontWeight: 700, fontSize: "0.8125rem",
              letterSpacing: "0.04em", textTransform: "uppercase", textDecoration: "none",
              whiteSpace: "nowrap", flexShrink: 0 }}>
              Zur Karriereseite →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          QUALITÄTSSTANDARDS
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "6rem 0" }}>
        <div className="site-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>Standards & Regulierung</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.5rem" }}>
              Professionell.<br />Reguliert.<br />Verlässlich.
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85 }}>
              Alle Ankernetz-Angebote werden nach den gesetzlichen Anforderungen des SGB VIII betrieben
              und sind durch die zuständigen Berliner Behörden genehmigt und beaufsichtigt.
              Regelmäßige interne Qualitätssicherung und externe Prüfungen sichern unsere Standards.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { titel: "Betriebserlaubnis nach § 45 SGB VIII",       detail: "Für alle stationären und teilstationären Einrichtungen" },
              { titel: "Regelmäßige interne Supervision",             detail: "Wöchentlich für alle pädagogischen Teams" },
              { titel: "Fortlaufende Mitarbeiterfortbildungen",        detail: "Mindestens 40 Stunden pro Jahr und Fachkraft" },
              { titel: "Externe Qualitätsprüfungen",                  detail: "Jährliche Überprüfung durch Landesjugendamt Berlin" },
              { titel: "Beschwerdemanagement nach Standard",           detail: "Transparentes Verfahren für Kinder, Eltern und Fachkräfte" },
              { titel: "Datenschutz nach DSGVO",                      detail: "Vollständige Umsetzung inkl. Datenschutzbeauftragter" },
              { titel: "Traumasensible Qualifikation aller Teams",     detail: "Zertifizierte Grundausbildung als Aufnahmevoraussetzung" },
              { titel: "Dokumentation nach Hilfeplan-Standard",        detail: "Einheitliche, nachvollziehbare Berichtsformate" },
            ].map((q, i) => (
              <div key={q.titel} style={{ display: "flex", gap: "1rem", padding: "1rem 0",
                borderBottom: i < 7 ? "1px solid #eef2f7" : "none", alignItems: "flex-start" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6FA3FE",
                  flexShrink: 0, marginTop: "0.4rem" }} />
                <div>
                  <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1a3f6f", marginBottom: "0.15rem" }}>
                    {q.titel}
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "rgba(26,63,111,0.45)" }}>{q.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STANDORT BERLIN
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "6rem 0" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>Unser Standort</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
                letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                Verwurzelt in Berlin.
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Ankernetz ist in Berlin beheimatet und im Berliner Hilfesystem fest verankert.
                Wir kennen die Struktur der Berliner Jugendämter, die Anforderungen des Landesjugendamts
                und die spezifischen Bedarfe in den verschiedenen Bezirken.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85, marginBottom: "2rem" }}>
                Unsere Einrichtungen sind im gesamten Stadtgebiet erreichbar. Für Kinder aus anderen
                Bundesländern bieten wir ebenfalls Aufnahmen an — in Absprache mit dem zuständigen
                Jugendamt und Kostenträger.
              </p>
              <a href="tel:+4930224543220" style={{ display: "inline-flex", alignItems: "center", gap: "0.625rem",
                background: "#1a3f6f", color: "white", padding: "0.875rem 1.5rem",
                fontWeight: 700, fontSize: "0.875rem", textDecoration: "none",
                letterSpacing: "0.04em" }}>
                +49 30 22 45 43 22 — Jetzt anrufen
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px",
              background: "#dde4ee", border: "1px solid #dde4ee" }}>
              {[
                { label: "Adresse",        wert: "Berlin, Deutschland" },
                { label: "Direktnummer",   wert: "+49 (0) 30 22 45 43 22" },
                { label: "E-Mail",         wert: "hilfe@ankernetz.com" },
                { label: "Krisentelefon",  wert: "24/7 erreichbar" },
                { label: "Einzugsgebiet",  wert: "Alle Berliner Bezirke + bundesweit" },
                { label: "Kostenträger",   wert: "Alle Berliner Jugendämter" },
              ].map(r => (
                <div key={r.label} style={{ background: "white", padding: "1rem 1.5rem",
                  display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8rem", color: "rgba(26,63,111,0.45)",
                    fontWeight: 600, letterSpacing: "0.04em" }}>{r.label}</span>
                  <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1a3f6f" }}>{r.wert}</span>
                </div>
              ))}
            </div>
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
        <div className="site-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.5rem" }}>Jetzt Kontakt aufnehmen</p>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 800, color: "white",
            letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Lernen Sie Ankernetz kennen.
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8,
            maxWidth: "44ch", margin: "0 auto 3rem" }}>
            Ob Platzanfrage, Kooperation oder einfach ein erstes Gespräch —
            wir sind erreichbar und freuen uns auf den Austausch.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/kontakt" style={{ background: "white", color: "#1a3f6f",
              padding: "0.875rem 2rem", fontWeight: 700, fontSize: "0.875rem",
              letterSpacing: "0.04em", textTransform: "uppercase", textDecoration: "none" }}>
              Kontakt aufnehmen
            </Link>
            <Link href="/platzanfrage" style={{ border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.7)", padding: "0.875rem 2rem",
              fontWeight: 500, fontSize: "0.875rem", textDecoration: "none" }}>
              Platzanfrage stellen
            </Link>
            <a href="tel:+4930224543220" style={{ border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.7)", padding: "0.875rem 2rem",
              fontWeight: 500, fontSize: "0.875rem", textDecoration: "none" }}>
              +49 30 22 45 43 22
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
