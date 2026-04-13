import Link from "next/link";
import {
  Phone, Heart, Shield, Brain, Star, Clock,
  CheckCircle, ArrowRight, Users, FileText,
  Baby, Home, BookOpen, Stethoscope, HandHeart,
  Eye, AlertTriangle, UserCheck, ClipboardList,
  MessageSquare, ChevronDown, Lock, Zap, Activity,
  TreePine, Sun, Smile,
} from "lucide-react";

/* ─── Daten ─────────────────────────────────────────────────── */

const kennzahlen = [
  { wert: "0–6", label: "Jahre — früheste und vulnerabelste Lebensphase", icon: Baby },
  { wert: "24/7", label: "Notaufnahme bei akuter Kindeswohlgefährdung", icon: Shield },
  { wert: "100%", label: "Bindungsorientierter Ansatz in allen Bereichen", icon: Heart },
  { wert: "15+", label: "Jahre Erfahrung in der Kleinstkinderarbeit", icon: Star },
];

const warnsignale = [
  { icon: AlertTriangle, titel: "Vernachlässigung", text: "Mangelnde Grundversorgung, fehlende Körperpflege, Unterernährung, unzureichende medizinische Versorgung.", akzent: "#f97316" },
  { icon: Shield, titel: "Kindeswohlgefährdung", text: "Akute oder latente Gefährdungssituationen, die einen sofortigen Schutz und eine Herausnahme aus dem familiären Umfeld erfordern.", akzent: "#ef4444" },
  { icon: Brain, titel: "Entwicklungsverzögerungen", text: "Sprachliche, motorische oder kognitive Rückstände, die auf fehlende Förderung oder traumatische Erfahrungen zurückzuführen sind.", akzent: "#8b5cf6" },
  { icon: Home, titel: "Hochbelastete Familiensysteme", text: "Psychische Erkrankung der Bezugspersonen, Sucht, häusliche Gewalt oder Wohnungslosigkeit als Belastungsfaktoren.", akzent: "#1a3f6f" },
  { icon: Heart, titel: "Bindungsstörungen", text: "Deutliche Zeichen unsicherer oder desorganisierter Bindungsmuster, die eine professionelle bindungspädagogische Arbeit erfordern.", akzent: "#e11d48" },
  { icon: Baby, titel: "Neugeborene in Gefährdungslagen", text: "Säuglinge, deren Eltern nicht in der Lage sind, die notwendige Fürsorge zu gewährleisten — z.B. bei Sucht oder schwerer psychischer Erkrankung.", akzent: "#0891b2" },
];

const leistungen = [
  {
    icon: Home,
    titel: "Schutzpflegestellen & Kleinstgruppen",
    text: "Aufnahme in familienähnlichen Schutzpflegestellen oder kleinen Gruppen mit maximal 4 Kindern. Enge Betreuungsschlüssel garantieren individuelle Zuwendung rund um die Uhr.",
  },
  {
    icon: Heart,
    titel: "Bindungsaufbau & Bindungsdiagnostik",
    text: "Systematische Einschätzung der Bindungsqualität mit validierten Verfahren. Gezielte Förderung sicherer Bindungserfahrungen als Grundlage jeder weiteren Entwicklung.",
  },
  {
    icon: Brain,
    titel: "Entwicklungspsychologische Förderung",
    text: "Individuelle Förderpläne basierend auf entwicklungspsychologischer Diagnostik. Sprache, Motorik, Kognition und sozio-emotionale Entwicklung werden gezielt begleitet.",
  },
  {
    icon: Stethoscope,
    titel: "Medizinische & heilpädagogische Begleitung",
    text: "Kooperation mit Kinderärztinnen, Logopädie, Ergo- und Physiotherapie. Lückenlose medizinische Dokumentation und Vorsorgeuntersuchungen.",
  },
  {
    icon: Users,
    titel: "Elternarbeit & Rückführungsplanung",
    text: "Strukturierte Elternarbeit mit dem Ziel der Rückführung — sofern das Kindeswohl dies erlaubt. Eltern werden begleitet, gestärkt und in den Hilfeprozess einbezogen.",
  },
  {
    icon: BookOpen,
    titel: "Kita-Kooperation & Bildungsförderung",
    text: "Enge Zusammenarbeit mit Kindertageseinrichtungen. Begleitung beim Kita-Einstieg, Unterstützung des Betreuungspersonals, Übergabeplanung.",
  },
  {
    icon: HandHeart,
    titel: "Traumasensible Alltagsgestaltung",
    text: "Jeder Alltag wird nach traumapädagogischen Prinzipien gestaltet: Verlässlichkeit, Vorhersehbarkeit, feinfühlige Reaktion — als tägliche Sprache der Sicherheit.",
  },
  {
    icon: ClipboardList,
    titel: "Fachberatung für Kitas & Einrichtungen",
    text: "Externe Fachberatung für Kita-Teams bei Auffälligkeiten, Verdacht auf Kindeswohlgefährdung oder Fragen zur Entwicklungsbegleitung — niedrigschwellig und praxisnah.",
  },
  {
    icon: FileText,
    titel: "Dokumentation & Jugendamtskooperation",
    text: "Detaillierte Entwicklungsberichte, Verlaufsdokumentationen und Einschätzungen für das Jugendamt. Regelmäßige Hilfeplanvorbereitung und aktive HPG-Teilnahme.",
  },
];

const ansatz = [
  {
    nr: "01",
    icon: Heart,
    titel: "Bindung als Fundament",
    text: "Jede Entwicklung baut auf sicherer Bindung auf. Unser gesamtes Team ist in bindungsbasierter Pädagogik ausgebildet — vom ersten Kontakt bis zur Übergabe.",
  },
  {
    nr: "02",
    icon: Eye,
    titel: "Feinfühligkeit als Haltung",
    text: "Wir nehmen Signale des Kindes ernst und antworten prompt, angemessen und konsistent. Feinfühligkeit ist keine Technik — sie ist unsere Grundhaltung.",
  },
  {
    nr: "03",
    icon: Sun,
    titel: "Entwicklung fördern, nicht erzwingen",
    text: "Jedes Kind hat sein eigenes Tempo. Wir begleiten, fordern und fördern — aber immer im Rhythmus des Kindes, nicht im Rhythmus der Institutionen.",
  },
  {
    nr: "04",
    icon: Shield,
    titel: "Schutz ohne Ausnahme",
    text: "Kindeswohlschutz steht über allem. Unsere Fachkräfte sind in Kinderschutz geschult und arbeiten nach klar definierten Schutzkonzepten.",
  },
  {
    nr: "05",
    icon: Users,
    titel: "Eltern einbeziehen, nicht ersetzen",
    text: "Wir sind keine Alternative zur Familie — wir sind Unterstützer. Eltern werden wo immer möglich einbezogen, gestärkt und auf Rückführung vorbereitet.",
  },
  {
    nr: "06",
    icon: TreePine,
    titel: "Langfristige Perspektive",
    text: "Frühe Hilfen sind keine Übergangslösung. Was in den ersten Lebensjahren entsteht, wirkt ein Leben lang. Wir denken in Entwicklungsjahren, nicht in Hilfedauern.",
  },
];

const prozessSchritte = [
  {
    nr: "01",
    titel: "Meldung & Ersteinschätzung",
    icon: Phone,
    text: "Jugendamt oder Familiengericht nimmt Kontakt auf. Innerhalb von 24 Stunden erste Rückmeldung zur Aufnahmekapazität und Passung.",
    dauer: "Tag 0",
  },
  {
    nr: "02",
    titel: "Aufnahme",
    icon: Home,
    text: "Geplante oder Sofortaufnahme — abgestimmt auf die Dringlichkeit. Strukturiertes Aufnahmegespräch mit Jugendamt und — wenn möglich — den Eltern.",
    dauer: "Tag 1",
  },
  {
    nr: "03",
    titel: "Eingewöhnung & Bindungsaufbau",
    icon: Heart,
    text: "Behutsame erste Wochen mit klarer Bezugsperson. Fokus auf Sicherheit, Orientierung und erste Vertrauensbildung.",
    dauer: "Woche 1–4",
  },
  {
    nr: "04",
    titel: "Diagnostik & Förderplanung",
    icon: Brain,
    text: "Entwicklungspsychologische Einschätzung, Bindungsdiagnostik und Erstellung des individuellen Förderplans — in Abstimmung mit dem Jugendamt.",
    dauer: "Monat 1–2",
  },
  {
    nr: "05",
    titel: "Perspektivklärung",
    icon: ArrowRight,
    text: "Regelmäßige Standortgespräche mit Jugendamt und Eltern. Planung der weiteren Hilfe: Rückführung, Anschlusspflege oder andere Perspektive.",
    dauer: "Laufend",
  },
];

const teamProfile = [
  { icon: Baby, titel: "Kleinstkinderpädagoginnen", text: "Spezialisiert auf 0–3-Jährige. Ausgebildet in Bindungstheorie, Pikler-Pädagogik und Entwicklungsbegleitung." },
  { icon: Brain, titel: "Entwicklungspsychologinnen", text: "Diagnostik und Einschätzung mit validierten Verfahren. Individuelle Förderpläne auf wissenschaftlicher Grundlage." },
  { icon: Heart, titel: "Bindungstherapeutinnen", text: "Gezielte therapeutische Arbeit bei Bindungsstörungen und frühen Traumatisierungen." },
  { icon: Stethoscope, titel: "Medizinische Fachkräfte", text: "Kooperierendes Kinderarztteam, Hebammen und Fachärztinnen für lückenlose Gesundheitsversorgung." },
  { icon: Users, titel: "Familien- & Elternberaterinnen", text: "Begleitung der Eltern auf dem Weg zur Rückführung oder zur eigenständigen Fürsorge." },
  { icon: BookOpen, titel: "Kita-Fachberaterinnen", text: "Externe Beratung für Kindertageseinrichtungen im Netzwerk Ankernetz Frühe Hilfen." },
];

const faq = [
  {
    frage: "Ab welchem Alter nehmen Sie Kinder auf?",
    antwort: "Wir nehmen Kinder ab dem Säuglingsalter auf — in Ausnahmefällen auch Neugeborene direkt nach der Geburt, wenn eine akute Kindeswohlgefährdung vorliegt. Unser Angebot richtet sich an Kinder von 0 bis 6 Jahren.",
  },
  {
    frage: "Wie funktioniert eine Notaufnahme bei akuter Gefährdung?",
    antwort: "Unser Bereitschaftsdienst ist rund um die Uhr erreichbar. Bei akuter Kindeswohlgefährdung kann eine Aufnahme noch am selben Tag erfolgen. Das Jugendamt nimmt telefonisch Kontakt auf — wir melden uns innerhalb von 30 Minuten mit einer konkreten Rückmeldung.",
  },
  {
    frage: "Werden die Eltern in den Prozess einbezogen?",
    antwort: "Ja — soweit dies dem Kindeswohl nicht entgegensteht. Wir führen strukturierte Elterngespräche, begleiten Besuchskontakte und arbeiten aktiv auf eine Rückführung hin, wenn die Voraussetzungen dafür gegeben sind. Eltern sind Partner im Hilfeprozess.",
  },
  {
    frage: "Was unterscheidet Frühe Hilfen von einer regulären Pflegestelle?",
    antwort: "Unsere Schutzpflegestellen sind keine klassischen Pflegefamilien. Sie werden fachlich eng begleitet, sind speziell geschult und arbeiten mit therapeutischer Unterstützung. Entwicklungsdiagnostik, Bindungsarbeit und Elternarbeit sind fester Bestandteil — nicht optionale Ergänzung.",
  },
  {
    frage: "Wie werden Entwicklungsfortschritte dokumentiert?",
    antwort: "Wir erstellen monatliche Entwicklungsberichte mit Bezug auf den individuellen Förderplan. Bei Hilfeplangesprächen übergeben wir strukturierte Einschätzungen zu Bindungsqualität, Entwicklungsstand und Förderfortschritten. Das Jugendamt erhält außerdem jederzeit auf Anfrage Rückmeldung.",
  },
  {
    frage: "Bieten Sie auch ambulante Beratung für Kitas an?",
    antwort: "Ja. Unser Fachberatungsangebot für Kitas umfasst Fallberatung bei auffälligem Verhalten, Beratung bei Verdacht auf Kindeswohlgefährdung, kollegiale Fallbesprechung und Fortbildungen für Kita-Teams. Der Zugang ist niedrigschwellig und ohne formellen Hilfeauftrag möglich.",
  },
  {
    frage: "Welche therapeutischen Verfahren kommen zum Einsatz?",
    antwort: "Wir arbeiten bindungsbasiert und traumasensibel. Eingesetzte Verfahren umfassen unter anderem Bindungsdiagnostik nach Ainsworth, Entwicklungspsychologische Beratung (EPB) nach Karl Heinz Brisch, spieltherapeutische Elemente sowie Eltern-Kind-Interaktionstherapie (PCIT) bei Bedarf.",
  },
  {
    frage: "Wie lange dauert ein Frühe-Hilfen-Aufenthalt in der Regel?",
    antwort: "Das hängt stark vom Einzelfall ab. Kurzfristige Schutzmaßnahmen dauern wenige Wochen, längerfristige Begleitungen 6–18 Monate. Die Dauer wird gemeinsam mit dem Jugendamt und im Hilfeplan festgelegt — immer mit dem Ziel, eine nachhaltige Perspektive für das Kind zu entwickeln.",
  },
];

/* ─── Seite ─────────────────────────────────────────────────── */

export default function FrueheHilfenPage() {
  return (
    <main style={{ overflowX: "hidden", background: "#f4f7fb" }}>

      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: "5rem",
        paddingTop: "8rem",
        background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <div style={{
          position: "absolute", top: "15%", right: "5%",
          width: "500px", height: "500px", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(111,163,254,0.1) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", bottom: "20%", left: "3%",
          width: "300px", height: "300px", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(254,194,116,0.07) 0%, transparent 65%)",
        }} />

        <div className="site-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
            marginBottom: "1.25rem",
          }}>
            Ankernetz Frühe Hilfen
          </p>

          <h1 style={{
            fontSize: "clamp(2.75rem, 6vw, 5rem)", fontWeight: 900,
            color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.03em",
            marginBottom: "1.25rem", maxWidth: "14ch",
          }}>
            Schutz von<br />
            <span style={{ color: "#6FA3FE" }}>Anfang an.</span>
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.75, maxWidth: "540px", marginBottom: "3rem",
          }}>
            Die ersten Lebensjahre entscheiden über alles. Unser Team schützt und begleitet
            Kleinkinder in besonders vulnerablen Situationen — bindungsorientiert,
            entwicklungsfördernd und mit höchster Fachlichkeit.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
            <Link href="/platzanfrage" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#6FA3FE", color: "white",
              fontWeight: 700, fontSize: "15px",
              padding: "14px 28px", borderRadius: "12px",
              textDecoration: "none",
            }}>
              <Baby size={18} />
              Platzanfrage stellen
            </Link>
            <a href="tel:+4930224543220" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white", fontWeight: 600, fontSize: "14px",
              padding: "14px 24px", borderRadius: "12px",
              textDecoration: "none",
            }}>
              <Phone size={16} />
              +49 30 22 45 43 22
            </a>
          </div>

          {/* Kennzahlen */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px", background: "rgba(255,255,255,0.08)",
            borderRadius: "16px", overflow: "hidden",
          }}>
            {kennzahlen.map((k) => {
              const Icon = k.icon;
              return (
                <div key={k.wert} style={{
                  background: "rgba(255,255,255,0.04)",
                  padding: "1.5rem 1.25rem",
                }}>
                  <Icon size={18} color="#6FA3FE" style={{ marginBottom: "10px" }} />
                  <p style={{ fontSize: "1.75rem", fontWeight: 900, color: "white", lineHeight: 1 }}>{k.wert}</p>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "6px", lineHeight: 1.5 }}>{k.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ EINLEITUNG ════════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center",
        }}>
          <div>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem",
            }}>
              Was sind Frühe Hilfen?
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}>
              Die ersten Jahre wirken ein Leben lang.
            </h2>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px", marginBottom: "1.25rem" }}>
              Frühe Hilfen sind ein spezialisiertes Angebot der Kinder- und Jugendhilfe, das
              Säuglinge und Kleinkinder in den ersten Lebensjahren schützt, fördert und
              begleitet. Sie greifen dann, wenn das familiäre Umfeld nicht in der Lage ist,
              die notwendige Fürsorge zu leisten.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px", marginBottom: "1.25rem" }}>
              Die Forschung ist eindeutig: Was in den ersten 1000 Tagen eines Kindes passiert,
              legt die Grundlage für die gesamte weitere Entwicklung — kognitiv,
              emotional und sozial. Frühe Traumatisierung, Vernachlässigung und
              Bindungslosigkeit hinterlassen Spuren, die ohne professionelle Intervention
              ein Leben lang bestehen bleiben.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px" }}>
              Unser Team kombiniert bindungsbasierte Pädagogik, entwicklungspsychologische
              Fachkompetenz und intensive Elternarbeit — damit aus einem schwierigen
              Start eine echte Chance werden kann.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {[
              { icon: CheckCircle, text: "Bindungsaufbau als zentrales Entwicklungsfundament" },
              { icon: CheckCircle, text: "Entwicklungspsychologische Diagnostik und individuelle Förderpläne" },
              { icon: CheckCircle, text: "24/7-Notaufnahme bei akuter Kindeswohlgefährdung" },
              { icon: CheckCircle, text: "Strukturierte Elternarbeit und Rückführungsplanung" },
              { icon: CheckCircle, text: "Enge Kooperation mit Jugendamt und Familiengericht" },
              { icon: CheckCircle, text: "Medizinische Versorgung und heilpädagogische Begleitung" },
              { icon: CheckCircle, text: "Fachberatung für Kitas und Kindertageseinrichtungen" },
              { icon: CheckCircle, text: "Traumasensible Alltagsgestaltung nach wissenschaftlichem Standard" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: "12px",
                  padding: "1rem 1.25rem", background: i % 2 === 0 ? "#f4f7fb" : "white",
                  borderRadius: "10px",
                }}>
                  <Icon size={16} color="#22c55e" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <p style={{ fontSize: "14px", color: "#1a3f6f", lineHeight: 1.55, fontWeight: 500 }}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ WARNSIGNALE / INDIKATIONEN ════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#1a3f6f", marginBottom: "0.75rem",
            }}>
              Wann wir helfen
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}>
              Indikationen für Frühe Hilfen
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", maxWidth: "560px", margin: "0 auto", lineHeight: 1.75 }}>
              Frühe Hilfen werden aktiv, wenn das Kindeswohl gefährdet ist oder das
              familiäre System die notwendige Fürsorge nicht leisten kann.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
          }}>
            {warnsignale.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.titel} className="bento-card" style={{
                  background: "white", borderRadius: "16px",
                  padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)",
                }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    background: w.akzent + "15",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1rem",
                  }}>
                    <Icon size={22} color={w.akzent} />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.5rem" }}>
                    {w.titel}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.7 }}>
                    {w.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ LEISTUNGEN ════════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem",
            }}>
              Unser Leistungsangebot
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              maxWidth: "520px",
            }}>
              Was wir für die Kleinsten leisten
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}>
            {leistungen.map((l) => {
              const Icon = l.icon;
              return (
                <div key={l.titel} className="bento-card" style={{
                  background: "#f4f7fb", borderRadius: "16px",
                  padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)",
                }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "10px",
                    background: "#1a3f6f",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}>
                    <Icon size={20} color="white" />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.625rem" }}>
                    {l.titel}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.75 }}>
                    {l.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ UNSER ANSATZ ══════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
        padding: "5rem 0", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <div className="site-container" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.75rem",
            }}>
              Unser Ansatz
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "white", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              Bindung. Feinfühligkeit. Schutz.
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem",
          }}>
            {ansatz.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.nr} style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px", padding: "2rem",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem" }}>
                    <span style={{
                      fontSize: "11px", fontWeight: 800, color: "#6FA3FE",
                      background: "rgba(111,163,254,0.15)", padding: "4px 10px",
                      borderRadius: "8px", letterSpacing: "0.04em",
                    }}>{a.nr}</span>
                    <Icon size={18} color="#6FA3FE" />
                  </div>
                  <p style={{ fontWeight: 700, color: "white", fontSize: "15px", marginBottom: "0.75rem" }}>
                    {a.titel}
                  </p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>
                    {a.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ PROZESS ═══════════════════════════════════════════════ */}
      <section style={{ background: "#f4f7fb", padding: "5rem 0" }}>
        <div className="site-container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem",
            }}>
              Ablauf
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              Von der Meldung zur Perspektive
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {prozessSchritte.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} style={{
                  display: "flex", gap: "1.75rem",
                  paddingBottom: i < prozessSchritte.length - 1 ? "0" : "0",
                }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{
                      width: "52px", height: "52px", borderRadius: "50%",
                      background: "#1a3f6f", color: "white",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, zIndex: 1,
                    }}>
                      <Icon size={22} />
                    </div>
                    {i < prozessSchritte.length - 1 && (
                      <div style={{ width: "2px", flex: 1, background: "#dde4ee", minHeight: "40px", margin: "4px 0" }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: "2.5rem", paddingTop: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
                      <p style={{ fontWeight: 800, color: "#1a3f6f", fontSize: "16px" }}>{s.titel}</p>
                      <span style={{
                        fontSize: "11px", fontWeight: 700, color: "#6FA3FE",
                        background: "#eef4ff", padding: "3px 10px", borderRadius: "9999px",
                        letterSpacing: "0.04em",
                      }}>{s.dauer}</span>
                    </div>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.75 }}>{s.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ ZIELGRUPPE ════════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ marginBottom: "3rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem",
            }}>
              Zielgruppe
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              Für wen sind Frühe Hilfen?
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div style={{ background: "#1a3f6f", borderRadius: "20px", padding: "2.5rem" }}>
              <p style={{
                fontSize: "3.5rem", fontWeight: 900, color: "#6FA3FE",
                letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "0.5rem",
              }}>0–6</p>
              <p style={{ fontWeight: 700, fontSize: "18px", color: "white", marginBottom: "1rem" }}>Jahre</p>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontSize: "14px" }}>
                Die vulnerabelste Lebensphase. Alles, was in diesen Jahren passiert,
                beeinflusst die körperliche, geistige und emotionale Entwicklung
                nachhaltig. Frühzeitiger Schutz ist keine Ausnahme — er ist die Regel.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: Baby, label: "Säuglinge & Kleinkinder (0–3)", desc: "Höchster Schutzbedarf, speziell geschultes Pflegepersonal, 24/7-Betreuung" },
                { icon: Smile, label: "Kindergartenkinder (3–6)", desc: "Entwicklungsförderung, Kita-Integration, Bindungsarbeit und Elternbegleitung" },
                { icon: Home, label: "Kinder aus hochbelasteten Familien", desc: "Sucht, psychische Erkrankung, Armut, häusliche Gewalt als Belastungsfaktoren" },
                { icon: AlertTriangle, label: "Kinder bei akuter Kindeswohlgefährdung", desc: "Sofortschutz, Notaufnahme und strukturierte Diagnostik im Krisenkontext" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} style={{
                    background: "#f4f7fb", borderRadius: "12px",
                    padding: "1.25rem 1.5rem",
                    display: "flex", gap: "1rem", alignItems: "flex-start",
                    border: "1px solid rgba(26,63,111,0.07)",
                  }}>
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "9px",
                      background: "#1a3f6f", display: "flex", alignItems: "center",
                      justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon size={16} color="white" />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "14px", marginBottom: "4px" }}>{item.label}</p>
                      <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TEAM ══════════════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#1a3f6f", marginBottom: "0.75rem",
            }}>
              Unser Team
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              Spezialisierte Fachkräfte für die frühe Kindheit
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
          }}>
            {teamProfile.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.titel} className="bento-card" style={{
                  background: "white", borderRadius: "16px",
                  padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)",
                }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    background: "#eef4ff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1rem",
                  }}>
                    <Icon size={22} color="#1a3f6f" />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "14px", marginBottom: "0.5rem" }}>
                    {t.titel}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.7 }}>
                    {t.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ FÜR FACHKRÄFTE ════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container" style={{
          display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "5rem", alignItems: "start",
        }}>
          <div>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem",
            }}>
              Für Jugendämter & Fachkräfte
            </p>
            <h2 style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.25, letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}>
              Ihr Partner für frühen Kinderschutz
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.85, marginBottom: "2rem" }}>
              Frühe Hilfen erfordern schnelle Reaktion und enge Kooperation. Wir
              verstehen Ihre Anforderungen an Dokumentation, Transparenz und
              fachliche Qualität.
            </p>
            <Link href="/platzanfrage" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#1a3f6f", color: "white",
              fontWeight: 700, fontSize: "14px",
              padding: "12px 22px", borderRadius: "10px",
              textDecoration: "none",
            }}>
              <ClipboardList size={16} />
              Platzanfrage stellen
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { icon: Phone, text: "Direkter Zugang — Notaufnahmen auch nachts und am Wochenende" },
              { icon: FileText, text: "Aufnahmebericht innerhalb von 48h nach Einzug" },
              { icon: Brain, text: "Entwicklungspsychologische Ersteinschätzung nach 4 Wochen" },
              { icon: ClipboardList, text: "Monatliche Entwicklungsberichte mit Förderfortschritten" },
              { icon: UserCheck, text: "Feste Ansprechperson für die gesamte Hilfedauer" },
              { icon: Users, text: "Aktive Teilnahme an Hilfeplangesprächen" },
              { icon: Heart, text: "Strukturierte Elternarbeit und Rückführungsbegleitung" },
              { icon: Lock, text: "Vollständige DSGVO-konforme Dokumentation" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  padding: "1rem 1.25rem", background: "#f4f7fb",
                  borderRadius: "12px", border: "1px solid rgba(26,63,111,0.07)",
                }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "9px",
                    background: "#1a3f6f",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon size={16} color="white" />
                  </div>
                  <p style={{ fontSize: "13px", color: "#1a3f6f", fontWeight: 500, lineHeight: 1.55 }}>
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════ */}
      <section style={{ background: "#f4f7fb", padding: "5rem 0" }}>
        <div className="site-container" style={{ maxWidth: "760px" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem",
            }}>
              Häufige Fragen
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              Was Fachkräfte und Eltern fragen
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {faq.map((f, i) => (
              <details key={i} style={{ background: "white", borderRadius: "12px", overflow: "hidden" }}>
                <summary style={{
                  padding: "1.25rem 1.5rem",
                  cursor: "pointer", listStyle: "none",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  fontWeight: 700, color: "#1a3f6f", fontSize: "14px", lineHeight: 1.45,
                }}>
                  {f.frage}
                  <ChevronDown size={16} color="#6FA3FE" style={{ flexShrink: 0, marginLeft: "1rem" }} />
                </summary>
                <div style={{
                  padding: "0 1.5rem 1.25rem",
                  fontSize: "13px", color: "#374151", lineHeight: 1.8,
                }}>
                  {f.antwort}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
        padding: "6rem 0", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <div className="site-container" style={{ position: "relative", maxWidth: "640px" }}>
          <Baby size={36} color="#6FA3FE" style={{ marginBottom: "1.5rem" }} />
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800,
            color: "white", marginBottom: "1.25rem", letterSpacing: "-0.02em", lineHeight: 1.2,
          }}>
            Jedes Kind verdient den besten Start.
          </h2>
          <p style={{
            fontSize: "15px", color: "rgba(255,255,255,0.6)",
            marginBottom: "2.5rem", lineHeight: 1.75,
          }}>
            Stellen Sie eine Platzanfrage oder nehmen Sie direkt Kontakt auf. Wir
            melden uns innerhalb von 24 Stunden.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/platzanfrage" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#6FA3FE", color: "white",
              fontWeight: 700, fontSize: "15px",
              padding: "15px 30px", borderRadius: "12px",
              textDecoration: "none",
            }}>
              <Baby size={18} />
              Platzanfrage stellen
            </Link>
            <a href="tel:+4930224543220" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white", fontWeight: 600, fontSize: "14px",
              padding: "15px 26px", borderRadius: "12px",
              textDecoration: "none",
            }}>
              <Phone size={16} />
              +49 30 22 45 43 22
            </a>
            <Link href="/kontakt" style={{
              display: "inline-flex", alignItems: "center",
              color: "rgba(255,255,255,0.55)", fontWeight: 500, fontSize: "14px",
              padding: "15px 20px", textDecoration: "none",
            }}>
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
