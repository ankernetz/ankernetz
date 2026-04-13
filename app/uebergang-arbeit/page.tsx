import Link from "next/link";
import {
  Phone, Heart, Shield, Brain, Star, Clock,
  CheckCircle, ArrowRight, Users, FileText,
  MessageSquare, BookOpen, Lightbulb, ChevronDown,
  Zap, Home, Target, Layers, ClipboardList, UserCheck,
  GraduationCap, Briefcase, TrendingUp, MapPin,
  Award, Building2, Handshake, Calendar, Compass,
  DollarSign, Key, Scale, Smile, Coffee, TreePine,
} from "lucide-react";

/* ─── Daten ──────────────────────────────────────────────────── */

const kennzahlen = [
  { wert: "18+", label: "Unterstützung auch über das 18. Lebensjahr hinaus", icon: Calendar },
  { wert: "ganzheitlich", label: "Wohnen, Arbeit, Finanzen — alles aus einer Hand", icon: Layers },
  { wert: "Netzwerk", label: "Echte Kontakte zu lokalen Arbeitgebern & Betrieben", icon: Handshake },
  { wert: "individuell", label: "Keine Schablone — jeder Plan ist einzigartig", icon: Compass },
];

const herausforderungen = [
  {
    icon: Briefcase,
    titel: "Kein Abschluss, keine Chancen?",
    text: "Viele Jugendliche aus Hilfesystemen haben Schullücken, unvollständige Abschlüsse oder Bildungsunterbrechungen. Wir starten dort, wo sie stehen — nicht dort, wo das System sie erwartet.",
    akzent: "#1a3f6f",
  },
  {
    icon: Home,
    titel: "Wohnen nach der Hilfe",
    text: "Der Schritt aus der stationären Jugendhilfe in eigene vier Wände scheitert oft an fehlendem Einkommen, fehlenden Referenzen oder mangelnder Unterstützung. Wir begleiten diesen Übergang aktiv.",
    akzent: "#059669",
  },
  {
    icon: DollarSign,
    titel: "Schulden und Finanzchaos",
    text: "Viele junge Erwachsene starten mit Schulden, ungeöffneten Briefen und keiner Ahnung, wie Behörden und Sozialleistungen funktionieren. Finanzkompetenz ist Teil unserer Begleitung.",
    akzent: "#dc2626",
  },
  {
    icon: Scale,
    titel: "Behörden und Bürokratie",
    text: "Jobcenter, Agentur für Arbeit, Wohnungsamt — das System ist komplex. Wir gehen mit, übersetzen und begleiten aktiv bei jedem Behördengang.",
    akzent: "#7c3aed",
  },
  {
    icon: Users,
    titel: "Fehlende soziale Netzwerke",
    text: "Wer in Einrichtungen aufgewachsen ist, hat oft kein familiäres Auffangnetz. Wir helfen beim Aufbau stabiler Beziehungen und zeigen, wo Anschluss möglich ist.",
    akzent: "#d97706",
  },
  {
    icon: Brain,
    titel: "Psychische Belastungen",
    text: "Trauma, Bindungsstörungen, emotionale Instabilität — viele Jugendliche aus Hilfesystemen kämpfen mit unsichtbaren Lasten. Unser Ansatz berücksichtigt die psychische Dimension.",
    akzent: "#0ea5e9",
  },
];

const leistungen = [
  {
    icon: Target,
    titel: "Standortbestimmung & Stärkenanalyse",
    text: "Wo bin ich? Was kann ich? Was will ich? Eine ehrliche, ressourcenorientierte Bestandsaufnahme bildet die Grundlage jeder Begleitung. Wir schauen gemeinsam auf Biografie, Interessen und reale Möglichkeiten.",
    badge: "Einstieg",
    badgeColor: "#1a3f6f",
  },
  {
    icon: Briefcase,
    titel: "Berufsorientierung",
    text: "Berufsfelder erkunden, Praktika ausprobieren, eigene Vorstellungen entwickeln. Wir begleiten den Prozess der beruflichen Orientierung — ohne Druck, aber mit klarer Struktur.",
    badge: "Kernleistung",
    badgeColor: "#059669",
  },
  {
    icon: FileText,
    titel: "Bewerbungstraining & CV",
    text: "Lebenslauf, Anschreiben, Vorstellungsgespräch — von Null bis Abschluss. Praktisch, realistisch, mit echter Übung. Für Ausbildungen, Einstiegsjobs und berufsvorbereitende Maßnahmen.",
    badge: "Praxis",
    badgeColor: "#7c3aed",
  },
  {
    icon: Handshake,
    titel: "Praktikumsvermittlung",
    text: "Wir verfügen über echte Netzwerke zu lokalen Betrieben und Arbeitgebern. Kein Bewerbungsmarathon ins Leere — sondern konkrete Vermittlung und Begleitung während des Praktikums.",
    badge: "Netzwerk",
    badgeColor: "#d97706",
  },
  {
    icon: Home,
    titel: "Wohnungsvermittlung & -begleitung",
    text: "Von der Zimmersuche bis zum ersten Mietvertrag. Wir unterstützen bei der Wohnungssuche, erklären Mietrecht, begleiten Besichtigungen und helfen beim Einrichten des ersten eigenen Lebens.",
    badge: "Wohnen",
    badgeColor: "#059669",
  },
  {
    icon: Building2,
    titel: "Behördenbegleitung",
    text: "Jobcenter, Agentur für Arbeit, Sozialamt, Wohnungsamt — wir begleiten persönlich bei Terminen, erklären Bescheide, helfen beim Ausfüllen von Anträgen und stehen als Übersetzer zwischen Jugendlichen und Behörden.",
    badge: "Aktiv",
    badgeColor: "#dc2626",
  },
  {
    icon: DollarSign,
    titel: "Finanzkompetenz & Schuldnerberatung",
    text: "Haushaltsplan erstellen, Schulden sortieren, Ansprüche kennen. Wir vermitteln Grundlagen der Finanzplanung und begleiten bei der Regulierung von Schulden — ohne Stigma, mit konkreten Schritten.",
    badge: "Finanzen",
    badgeColor: "#be185d",
  },
  {
    icon: TrendingUp,
    titel: "Begleitung in der Ausbildung",
    text: "Der Start in die Ausbildung ist kein Endpunkt. Wir bleiben ansprechbar, begleiten Krisen, vermitteln zwischen Betrieb und Azubi und helfen, drohende Abbrüche abzuwenden.",
    badge: "Nachsorge",
    badgeColor: "#0ea5e9",
  },
  {
    icon: UserCheck,
    titel: "Nachbetreuung über das Hilfesystem hinaus",
    text: "Auch nach dem offiziellen Ende der Jugendhilfe sind wir erreichbar. Kein abrupter Abbruch — sondern ein fließender Übergang in Eigenverantwortung mit verläßlichem Rückhalt.",
    badge: "18+",
    badgeColor: "#1a3f6f",
  },
];

const besonderheiten = [
  { icon: Compass, titel: "Individuelle Begleitung ohne Schablone", text: "Kein Standardplan, keine Checkliste. Wir entwickeln mit jedem jungen Menschen seinen eigenen Weg — realistisch, erreichbar, selbstbestimmt." },
  { icon: Handshake, titel: "Echte Arbeitgeber-Netzwerke", text: "Wir pflegen aktive Kontakte zu lokalen Betrieben, Unternehmen und Ausbildungsbetrieben. Keine Jobbörsen — sondern echte Vermittlung." },
  { icon: Calendar, titel: "Auch nach dem 18. Lebensjahr", text: "Das Hilfesystem endet oft abrupt mit der Volljährigkeit. Bei uns nicht. Wir begleiten so lange, wie Unterstützung sinnvoll und gewünscht ist." },
  { icon: Building2, titel: "Enge Kooperation mit Institutionen", text: "Jobcenter, Agentur für Arbeit, Berufsschule, Wohnungsamt — wir sprechen die Sprache der Behörden und arbeiten konstruktiv mit ihnen zusammen." },
  { icon: Brain, titel: "Ganzheitlicher Blick", text: "Wir schauen nicht nur auf Beruf. Wohnen, Finanzen, psychische Gesundheit, soziale Netzwerke — der Mensch ist mehr als sein Lebenslauf." },
  { icon: Heart, titel: "Verlässliche Beziehungsarbeit", text: "Viele unserer Jugendlichen haben Vertrauen als Beziehungserfahrung nie wirklich erlebt. Wir investieren in echte, verlässliche Begleitung — auch wenn es mal schwierig wird." },
];

const prozessSchritte = [
  {
    nr: "01",
    titel: "Standortbestimmung",
    text: "Wo stehe ich? Was kann ich? Was will ich? Ehrliche Bestandsaufnahme ohne Druck — Biografie, Stärken, Interessen, Hemmnisse.",
    icon: Target,
  },
  {
    nr: "02",
    titel: "Ziele entwickeln",
    text: "Realistische, erreichbare Ziele gemeinsam formulieren. Kein Wunschdenken, aber auch kein Kleinreden: Was ist in welchem Zeitraum wirklich möglich?",
    icon: Compass,
  },
  {
    nr: "03",
    titel: "Vorbereitung & Praktika",
    text: "Bewerbungen schreiben, Praktika vermitteln und begleiten, Berufserkundung. Alles strukturiert vorbereitet — mit echter Unterstützung.",
    icon: Briefcase,
  },
  {
    nr: "04",
    titel: "Übergang aktiv begleiten",
    text: "In den ersten Wochen am Ausbildungs- oder Arbeitsplatz bleiben wir aktiv dabei. Keine Übergabe ins Leere.",
    icon: TrendingUp,
  },
  {
    nr: "05",
    titel: "Nachsorge",
    text: "Weiterhin erreichbar — auch wenn der offizielle Hilfeprozess endet. Kein abrupter Abbruch, sondern fließender Übergang in Selbstständigkeit.",
    icon: UserCheck,
  },
];

const tagAblauf = [
  { zeit: "08:00", titel: "Morgengespräch", text: "Tagesbesprechung: Was steht an? Welche Termine? Was braucht Unterstützung?" },
  { zeit: "09:00", titel: "Praktikum / Berufsschule", text: "Begleitung zu Terminen oder Praktikumsstelle — bei Bedarf direkte Ansprechbarkeit." },
  { zeit: "11:00", titel: "Bewerbungsblock", text: "Gemeinsames Arbeiten an Bewerbungsunterlagen, Vorbereitung auf Vorstellungsgespräche." },
  { zeit: "13:00", titel: "Behördengang", text: "Begleitung zu Jobcenter, Agentur für Arbeit oder anderen Stellen — mit Vorbereitung und Nachbesprechung." },
  { zeit: "15:00", titel: "Alltagsorganisation", text: "Finanzplanung, Briefe öffnen, Anträge stellen, Wohnsituation klären." },
  { zeit: "17:00", titel: "Reflexion", text: "Tagesabschluss: Was lief gut? Was war schwierig? Wie geht es dem jungen Menschen wirklich?" },
];

const fachkraefteLeistungen = [
  { icon: FileText, titel: "Frühzeitige Übergangsplanung", text: "Gemeinsam mit dem Jugendamt bereiten wir den Übergang vor — idealerweise 12–18 Monate vor Hilfeende." },
  { icon: Building2, titel: "Abstimmung mit Agentur für Arbeit", text: "Direkte Koordination mit der Agentur für Arbeit für nahtlose Anschlussversorgung." },
  { icon: ClipboardList, titel: "Dokumentation für Kostenträger", text: "Vollständige Dokumentation, Berichte und Sachstandsmitteilungen für Jugendamt und Kostenträger." },
  { icon: Layers, titel: "Flexible Unterstützungsmodelle", text: "Von der Einzelfallbegleitung bis zum Rahmenvertrag — wir passen uns dem Bedarf des Jugendamts an." },
  { icon: GraduationCap, titel: "Fallberatung & Supervision", text: "Fachliche Beratung für Sozialarbeiterinnen beim Thema Übergangsgestaltung und Ablösung." },
  { icon: Handshake, titel: "Netzwerkkoordination", text: "Wir übernehmen die Koordination mit Arbeitgebern, Berufsschule, Wohnungsmarkt und weiteren Fachstellen." },
];

const faqItems = [
  {
    frage: "Ab welchem Alter kann die Begleitung starten?",
    antwort: "Idealerweise beginnen wir die Übergangsplanung 12–18 Monate vor dem geplanten Ende der Jugendhilfe — also oft ab 16 oder 17 Jahren. Wir können aber auch in späteren Phasen einsteigen, wenn der Übergang bereits begonnen hat.",
  },
  {
    frage: "Wie lange dauert die Begleitung?",
    antwort: "Das ist individuell. Ein Übergangsprozess kann sechs Monate dauern oder auch zwei Jahre. Wir richten uns nach dem Bedarf des jungen Menschen, nicht nach festgelegten Fristen. Auch nach der Volljährigkeit bleiben wir ansprechbar.",
  },
  {
    frage: "Wer bezahlt die Begleitung?",
    antwort: "In der Regel trägt das Jugendamt die Kosten im Rahmen der Jugendhilfe. Nach dem 18. Lebensjahr gibt es verschiedene Finanzierungswege — § 41 SGB VIII (Hilfe für junge Volljährige), Jobcenter oder eigenfinanzierte Angebote. Sprechen Sie uns an, wir klären das gemeinsam.",
  },
  {
    frage: "Was passiert, wenn ein Jugendlicher die Begleitung abbricht?",
    antwort: "Wir halten die Tür offen. Rückzug und Ambivalenz sind Teil der Ablösungsphase, nicht das Ende. Wir dokumentieren transparent, respektieren Entscheidungen und bleiben erreichbar — ohne Druck.",
  },
  {
    frage: "Begleiten Sie auch bei der Wohnungssuche?",
    antwort: "Ja. Wohnungsvermittlung und -begleitung ist ein fester Bestandteil unseres Angebots. Wir unterstützen bei der Suche, begleiten Besichtigungen, erklären Mietverträge und helfen beim Einrichten des ersten eigenen Zuhauses.",
  },
  {
    frage: "Können Sie auch Jugendliche ohne Berufsabschluss begleiten?",
    antwort: "Ja — das ist die Regel, nicht die Ausnahme. Wir starten dort, wo der junge Mensch steht. Manchmal ist der erste Schritt ein Praktikum, manchmal ein berufsvorbereitendes Jahr, manchmal nur das Stabilisieren des Alltags.",
  },
  {
    frage: "Arbeiten Sie auch mit der Agentur für Arbeit zusammen?",
    antwort: "Ja, eng. Wir koordinieren mit der Agentur für Arbeit, kennen die relevanten Ansprechpartner und begleiten Jugendliche zu Terminen. Wir übersetzen zwischen dem Bürokratiesystem und dem jungen Menschen.",
  },
  {
    frage: "Was passiert, wenn eine Ausbildung zu scheitern droht?",
    antwort: "Wir schalten uns aktiv ein. Klärungsgespräche mit dem Betrieb, Krisenbegleitung für den Jugendlichen, Mediation wenn nötig. Ausbildungsabbrüche sind oft vermeidbar, wenn früh reagiert wird.",
  },
];

/* ─── Seite ──────────────────────────────────────────────────── */

export default function UebergangArbeitPage() {
  return (
    <main style={{ fontFamily: "Inter, system-ui, sans-serif", color: "#1a1a2e", background: "#f4f7fb" }}>

      {/* Hero */}
      <section style={{
        background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 24px 64px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(111,163,254,0.07)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-120px", left: "-60px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

        <div className="site-container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(253,186,116,0.2)", border: "1px solid rgba(253,186,116,0.4)",
            borderRadius: "24px", padding: "6px 16px", marginBottom: "28px",
          }}>
            <Briefcase size={14} color="#FEC274" />
            <span style={{ fontSize: "13px", color: "#FEC274", fontWeight: 600, letterSpacing: "0.05em" }}>
              ÜBERGANG JUGENDHILFE → ARBEIT & SELBSTSTÄNDIGKEIT
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px", maxWidth: "780px" }}>
            Übergang Arbeit
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#d8e4f0", maxWidth: "640px", lineHeight: 1.7, marginBottom: "16px", fontWeight: 300 }}>
            Der nächste Schritt. Mit Begleitung.
          </p>
          <p style={{ fontSize: "1.05rem", color: "rgba(216,228,240,0.85)", maxWidth: "680px", lineHeight: 1.8, marginBottom: "48px" }}>
            Der Übergang von der Jugendhilfe in ein eigenständiges Leben ist eine der größten Herausforderungen. Wir begleiten Jugendliche und junge Erwachsene dabei — konkret, individuell und mit langem Atem.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px", maxWidth: "780px" }}>
            {kennzahlen.map((k) => {
              const Icon = k.icon;
              return (
                <div key={k.wert} style={{
                  background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "12px", padding: "20px 16px", backdropFilter: "blur(8px)",
                }}>
                  <Icon size={20} color="#6FA3FE" style={{ marginBottom: "10px" }} />
                  <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: "4px" }}>{k.wert}</div>
                  <div style={{ fontSize: "0.78rem", color: "rgba(216,228,240,0.8)", lineHeight: 1.4 }}>{k.label}</div>
                </div>
              );
            })}
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "40px" }}>
            <Link href="/platzanfrage" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#6FA3FE", color: "#fff",
              padding: "14px 28px", borderRadius: "8px",
              fontWeight: 700, fontSize: "0.95rem", textDecoration: "none",
            }}>
              Begleitung anfragen <ArrowRight size={16} />
            </Link>
            <Link href="/kontakt" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "transparent", border: "2px solid rgba(255,255,255,0.35)", color: "#fff",
              padding: "14px 28px", borderRadius: "8px",
              fontWeight: 600, fontSize: "0.95rem", textDecoration: "none",
            }}>
              <Phone size={16} /> Direkt anrufen
            </Link>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section style={{ background: "#FEC274", color: "#7c2d12", padding: "16px 24px", textAlign: "center" }}>
        <div className="site-container">
          <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 700, letterSpacing: "0.02em" }}>
            Kein abruptes Ende mit 18. — Wir begleiten so lange, wie Unterstützung sinnvoll und gewünscht ist.
          </p>
        </div>
      </section>

      {/* Einleitung */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "0.8rem", color: "#6FA3FE", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px", textTransform: "uppercase" }}>Die Herausforderung</div>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
                Warum dieser Übergang so schwer ist
              </h2>
              <p style={{ color: "#4a5568", lineHeight: 1.8, marginBottom: "16px" }}>
                Das Jugendhilfesystem endet in der Regel mit dem 18. Lebensjahr. Für viele Jugendliche bedeutet das: von heute auf morgen auf sich allein gestellt. Ohne familiäres Netz, mit Schullücken, oft mit psychischen Belastungen und ohne die Alltagskompetenzen, die in einer normalen Biografie selbstverständlich wären.
              </p>
              <p style={{ color: "#4a5568", lineHeight: 1.8, marginBottom: "16px" }}>
                Gleichzeitig erwartet die Gesellschaft Selbstständigkeit — Wohnung, Arbeit, Behördenkommunikation, Finanzen. Das ist eine Zumutung. Und es scheitern viele daran, nicht weil sie es nicht wollen, sondern weil sie es nie gelernt haben und alleine nie die Chance hatten.
              </p>
              <p style={{ color: "#4a5568", lineHeight: 1.8 }}>
                Ankernetz schließt diese Lücke. Wir begleiten den Übergang aktiv, konkret und nachhaltig — nicht mit Gutscheinen und Infoblättern, sondern mit echter Präsenz.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                "Laut Studien haben ca. 40% der Jugendlichen nach Hilfeende keinen stabilen Wohnraum",
                "Über die Hälfte ist 12 Monate nach Hilfeende weder in Ausbildung noch Arbeit",
                "Viele scheitern an Bürokratie — nicht an mangelndem Willen",
                "Schuldenfallen entstehen oft in den ersten Monaten nach dem Auszug aus der Einrichtung",
                "Ohne familiäres Auffangnetz ist die Fallhöhe beim ersten Scheitern enorm",
                "Frühzeitige, aktive Begleitung reduziert Rückfälle und Hilfebedarf langfristig",
              ].map((p, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle size={18} color="#059669" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ color: "#4a5568", fontSize: "0.93rem", lineHeight: 1.6 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Herausforderungen */}
      <section style={{ padding: "80px 24px", background: "#f4f7fb" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "0.8rem", color: "#6FA3FE", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px", textTransform: "uppercase" }}>Typische Themen</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}>Womit Jugendliche zu uns kommen</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {herausforderungen.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.titel} className="bento-card" style={{ background: "#fff", borderRadius: "14px", padding: "28px", border: "1px solid #e8edf5" }}>
                  <div style={{ background: h.akzent + "14", borderRadius: "10px", padding: "10px", width: "fit-content", marginBottom: "14px" }}>
                    <Icon size={22} color={h.akzent} />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "10px" }}>{h.titel}</h3>
                  <p style={{ color: "#4a5568", fontSize: "0.87rem", lineHeight: 1.7, margin: 0 }}>{h.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "0.8rem", color: "#6FA3FE", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px", textTransform: "uppercase" }}>Leistungsangebot</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}>Was wir konkret leisten</h2>
            <p style={{ color: "#6b7280", marginTop: "12px", maxWidth: "540px", margin: "12px auto 0", lineHeight: 1.7 }}>
              Von der Standortbestimmung bis zur Nachsorge — alles aus einer Hand.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {leistungen.map((l) => {
              const Icon = l.icon;
              return (
                <div key={l.titel} className="bento-card" style={{ background: "#f4f7fb", borderRadius: "16px", padding: "28px", border: "1px solid #e8edf5" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ background: "#fff", borderRadius: "10px", padding: "10px", flexShrink: 0, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                      <Icon size={22} color="#1a3f6f" />
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px", flexWrap: "wrap" }}>
                        <h3 style={{ fontWeight: 700, fontSize: "1rem", margin: 0 }}>{l.titel}</h3>
                        <span style={{
                          fontSize: "0.68rem", fontWeight: 700, padding: "2px 8px", borderRadius: "12px",
                          letterSpacing: "0.04em", background: l.badgeColor + "18", color: l.badgeColor,
                          border: `1px solid ${l.badgeColor}30`,
                        }}>{l.badge}</span>
                      </div>
                    </div>
                  </div>
                  <p style={{ color: "#4a5568", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{l.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ein Tag */}
      <section style={{ padding: "80px 24px", background: "#f4f7fb" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "0.8rem", color: "#6FA3FE", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px", textTransform: "uppercase" }}>Alltag in der Begleitung</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}>Ein Tag mit Ankernetz-Unterstützung</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px", maxWidth: "1100px", margin: "0 auto" }}>
            {tagAblauf.map((t) => (
              <div key={t.zeit} className="bento-card" style={{ background: "#fff", borderRadius: "14px", padding: "24px", border: "1px solid #e8edf5" }}>
                <div style={{
                  display: "inline-block",
                  background: "#1a3f6f", color: "#fff",
                  fontSize: "0.78rem", fontWeight: 800,
                  padding: "4px 12px", borderRadius: "20px",
                  marginBottom: "12px", letterSpacing: "0.04em",
                }}>{t.zeit}</div>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "8px" }}>{t.titel}</h3>
                <p style={{ color: "#4a5568", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Besonderheiten (Navy) */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
        color: "#fff",
      }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "0.8rem", color: "#6FA3FE", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px", textTransform: "uppercase" }}>Unser Ansatz</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#fff" }}>Was uns unterscheidet</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
            {besonderheiten.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.titel} className="bento-card" style={{
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "14px", padding: "28px", backdropFilter: "blur(8px)",
                }}>
                  <div style={{ background: "rgba(111,163,254,0.15)", borderRadius: "10px", padding: "10px", width: "fit-content", marginBottom: "14px" }}>
                    <Icon size={22} color="#6FA3FE" />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "10px", color: "#fff" }}>{b.titel}</h3>
                  <p style={{ color: "rgba(216,228,240,0.82)", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prozess */}
      <section style={{ padding: "80px 24px", background: "#f4f7fb" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "0.8rem", color: "#6FA3FE", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px", textTransform: "uppercase" }}>Ablauf</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}>Der Übergangsweg Schritt für Schritt</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0" }}>
            {prozessSchritte.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.nr} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", padding: "0 8px" }}>
                  {i < prozessSchritte.length - 1 && (
                    <div style={{
                      position: "absolute", top: "28px", left: "calc(50% + 28px)",
                      height: "2px", background: "#d8e4f0", width: "calc(100% - 56px)", zIndex: 0,
                    }} />
                  )}
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "50%",
                    background: "#1a3f6f", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "16px", position: "relative", zIndex: 1, flexShrink: 0,
                  }}>
                    <Icon size={22} />
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#6FA3FE", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "6px" }}>{s.nr}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "8px" }}>{s.titel}</h3>
                  <p style={{ color: "#4a5568", fontSize: "0.82rem", lineHeight: 1.6 }}>{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Für Fachkräfte */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "64px", alignItems: "start" }}>
            <div>
              <div style={{ fontSize: "0.8rem", color: "#6FA3FE", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px", textTransform: "uppercase" }}>Für Fachkräfte & Jugendämter</div>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
                Übergangsbegleitung als verlässlicher Fachpartner
              </h2>
              <p style={{ color: "#4a5568", lineHeight: 1.8, marginBottom: "24px" }}>
                Für Jugendämter und Fachkräfte in der Jugendhilfe sind wir ein verlässlicher Partner für die Gestaltung von Übergängen. Früh geplant, gut begleitet — das schützt Jugendliche und entlastet das System.
              </p>
              <Link href="/platzanfrage" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#1a3f6f", color: "#fff",
                padding: "12px 24px", borderRadius: "8px",
                fontWeight: 700, fontSize: "0.9rem", textDecoration: "none",
              }}>
                Kooperation anfragen <ArrowRight size={16} />
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {fachkraefteLeistungen.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.titel} style={{
                    display: "flex", gap: "12px", alignItems: "flex-start",
                    background: "#f4f7fb", borderRadius: "12px", padding: "18px", border: "1px solid #e8edf5",
                  }}>
                    <Icon size={18} color="#1a3f6f" style={{ marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: "4px" }}>{f.titel}</div>
                      <div style={{ color: "#6b7280", fontSize: "0.8rem", lineHeight: 1.5 }}>{f.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "#f4f7fb" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "0.8rem", color: "#6FA3FE", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px", textTransform: "uppercase" }}>Häufige Fragen</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}>FAQ — Übergang Arbeit</h2>
          </div>
          <div style={{ maxWidth: "820px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqItems.map((f, i) => (
              <details key={i} style={{ background: "#fff", border: "1px solid #e8edf5", borderRadius: "12px", overflow: "hidden" }}>
                <summary style={{
                  padding: "20px 24px", fontWeight: 700, fontSize: "0.95rem",
                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between",
                  listStyle: "none", userSelect: "none",
                }}>
                  {f.frage}
                  <ChevronDown size={18} color="#6FA3FE" style={{ flexShrink: 0, marginLeft: "12px" }} />
                </summary>
                <div style={{ padding: "0 24px 20px", color: "#4a5568", lineHeight: 1.8, borderTop: "1px solid #f0f4f8", paddingTop: "16px" }}>
                  {f.antwort}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
        color: "#fff", textAlign: "center",
      }}>
        <div className="site-container">
          <div style={{ background: "rgba(111,163,254,0.15)", borderRadius: "50%", width: "72px", height: "72px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <Briefcase size={36} color="#6FA3FE" />
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, marginBottom: "20px", color: "#fff" }}>
            Unterstützung im Übergang anfragen
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(216,228,240,0.85)", maxWidth: "600px", margin: "0 auto 40px", lineHeight: 1.7 }}>
            Ob für einen einzelnen Jugendlichen oder als strukturierte Kooperation mit dem Jugendamt — wir sind ansprechbar.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/platzanfrage" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#6FA3FE", color: "#fff",
              padding: "16px 32px", borderRadius: "8px",
              fontWeight: 700, fontSize: "1rem", textDecoration: "none",
            }}>
              Jetzt anfragen <ArrowRight size={18} />
            </Link>
            <Link href="/kontakt" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "transparent", border: "2px solid rgba(255,255,255,0.35)", color: "#fff",
              padding: "16px 32px", borderRadius: "8px",
              fontWeight: 600, fontSize: "1rem", textDecoration: "none",
            }}>
              <Phone size={18} /> Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
