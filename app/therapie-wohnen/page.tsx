import Link from "next/link";
import {
  Phone, Heart, Shield, Brain, Star, Clock,
  CheckCircle, ArrowRight, Users, FileText,
  Home, BookOpen, Stethoscope, HandHeart,
  AlertTriangle, UserCheck, ClipboardList,
  MessageSquare, ChevronDown, Lock, Activity,
  Sun, Smile, TreePine, Zap, Target, Layers,
  Coffee, Music, Compass, GraduationCap,
} from "lucide-react";

/* ─── Daten ─────────────────────────────────────────────────── */

const kennzahlen = [
  { wert: "12–17", label: "Jahre — Jugendliche in besonders kritischer Entwicklungsphase", icon: Users },
  { wert: "24/7", label: "Bezugsbetreuung und Krisenbegleitung im Alltag", icon: Clock },
  { wert: "Ø 18", label: "Monate therapeutische Begleitung pro Jugendlichem", icon: Target },
  { wert: "klein", label: "Wohngruppen mit 4–6 Jugendlichen — Qualität vor Quantität", icon: Home },
];

const indikationen = [
  {
    icon: Brain,
    titel: "Komplexe Trauma-Folgestörungen",
    text: "Jugendliche mit PTBS, komplexen Traumatisierungen durch Misshandlung, Vernachlässigung oder wiederholte Gewalterfahrungen, die ambulante Hilfen überschreiten.",
    akzent: "#8b5cf6",
  },
  {
    icon: AlertTriangle,
    titel: "Psychische Erkrankungen",
    text: "Depressionen, Angststörungen, Persönlichkeitsentwicklungsstörungen oder andere psychiatrische Diagnosen, die eine therapeutisch gestützte Wohnumgebung erfordern.",
    akzent: "#ef4444",
  },
  {
    icon: Activity,
    titel: "Verhaltensauffälligkeiten",
    text: "Externalisierendes Verhalten, Schulverweigerung, selbstverletzendes Verhalten, dissoziales Auftreten — wenn herkömmliche Hilfen nicht mehr greifen.",
    akzent: "#f97316",
  },
  {
    icon: Home,
    titel: "Schwerwiegende familiäre Belastungen",
    text: "Zerbrochene Familiensysteme, elterliche Erkrankungen, Sucht, Gewalt oder Vernachlässigung als Ursache des Hilfebedarfs.",
    akzent: "#1a3f6f",
  },
  {
    icon: Shield,
    titel: "Gescheiterte Vorgängerhilfen",
    text: "Jugendliche, die in anderen Einrichtungen, Pflegefamilien oder Wohngruppen nicht gehalten werden konnten und eine intensivere, therapeutischere Umgebung benötigen.",
    akzent: "#0891b2",
  },
  {
    icon: Compass,
    titel: "Übergang Klinik → Jugendhilfe",
    text: "Nach stationär-psychiatrischen Aufenthalten als stabilisierende Anschlussversorgung — strukturiert, therapeutisch begleitet und alltagsnah.",
    akzent: "#059669",
  },
];

const leistungen = [
  {
    icon: Home,
    titel: "Therapeutisch geleitete Wohngruppe",
    text: "Kleine Gruppen mit 4–6 Jugendlichen. Klarer Strukturrahmen, verlässliche Bezugspersonen und ein therapeutisch gestalteter Alltag als Grundlage jeder Veränderung.",
  },
  {
    icon: Heart,
    titel: "Intensive Bezugsbetreuung",
    text: "Jeder Jugendliche hat eine feste Bezugsfachkraft, die ihn durch den gesamten Hilfeprozess begleitet. Kontinuität als therapeutisches Kernelement.",
  },
  {
    icon: Brain,
    titel: "Einzel- und Gruppentherapie",
    text: "Wöchentliche Einzeltherapie mit ausgebildeten Therapeuten. Ergänzt durch Gruppentherapieangebote zu Themen wie Emotionsregulation, soziale Kompetenz und Traumaverarbeitung.",
  },
  {
    icon: Shield,
    titel: "Traumasensible Alltagsgestaltung",
    text: "Der gesamte Alltag — von der Morgenroutine bis zum Abendgespräch — wird nach traumapädagogischen Prinzipien gestaltet: Vorhersehbarkeit, Verlässlichkeit, Sicherheit.",
  },
  {
    icon: GraduationCap,
    titel: "Schulbegleitung & Bildungsförderung",
    text: "Enge Kooperation mit Schulen, individuelle Lernbegleitung und Förderung. Schulische Entwicklung als Teil des Gesamthilfeplans.",
  },
  {
    icon: Users,
    titel: "Familienarbeit & Elterngespräche",
    text: "Eltern sind kein Gegenüber — sie sind Teil des Hilfesystems. Wir führen regelmäßige Familiengespräche, begleiten Besuchskontakte und arbeiten an Beziehungsklärung.",
  },
  {
    icon: Music,
    titel: "Freizeitpädagogik & Erlebnisangebote",
    text: "Gemeinsame Aktivitäten, Sport, kreative Angebote und Ausflüge — Freizeit als Raum für soziales Lernen, Selbstvertrauen und positive Erfahrungen.",
  },
  {
    icon: Coffee,
    titel: "Alltagskompetenz & Verselbständigung",
    text: "Kochen, Haushalt, Finanzen, Behördengänge — gezielte Vorbereitung auf ein eigenständiges Leben als Teil jeder Hilfeplanung.",
  },
  {
    icon: Stethoscope,
    titel: "Psychiatrische Kooperation & Medikation",
    text: "Enge Zusammenarbeit mit kooperierenden Kinder- und Jugendpsychiatern. Medikamentöse Behandlung wird wenn möglich ambulant koordiniert.",
  },
];

const therapeutischerAlltag = [
  { zeit: "07:00", titel: "Strukturierter Morgen", text: "Gemeinsames Frühstück, Morgenrunde, Tagesplanung — Rhythmus als therapeutisches Mittel." },
  { zeit: "08:30", titel: "Schule & Bildung", text: "Begleiteter Schulbesuch oder schulische Förderung im Haus — abgestimmt auf den Entwicklungsstand." },
  { zeit: "14:00", titel: "Therapiezeiten", text: "Einzel- oder Gruppentherapie, Skill-Training, kreative Angebote — therapeutische Arbeit im Alltag." },
  { zeit: "16:00", titel: "Freizeit & Gemeinschaft", text: "Sport, Kochen, Aktivitäten, Einzelgespräche — Beziehung entsteht im gemeinsamen Tun." },
  { zeit: "18:30", titel: "Abend & Rückblick", text: "Gemeinsames Abendessen, Tagesrückblick, Bezugspersonengespräch — der Abend als Ankerpunkt." },
  { zeit: "21:00", titel: "Sicherheit in der Nacht", text: "Bereitschaftsdienst im Haus. Kein Jugendlicher ist allein — auch nicht um Mitternacht." },
];

const prozessSchritte = [
  {
    nr: "01",
    titel: "Platzanfrage",
    icon: ClipboardList,
    text: "Das Jugendamt stellt eine Anfrage mit relevanten Unterlagen. Wir prüfen die Passung und melden uns innerhalb von 48 Stunden zurück.",
    dauer: "Tag 0–2",
  },
  {
    nr: "02",
    titel: "Schnupperwohnen",
    icon: Home,
    text: "Ein bis drei Tage Kennenlernen der Gruppe, des Teams und des Alltags. Der Jugendliche entscheidet mit — kein Einzug ohne Zustimmung.",
    dauer: "Woche 1",
  },
  {
    nr: "03",
    titel: "Einzug & Eingewöhnung",
    icon: Heart,
    text: "Strukturierter Einzug mit individuellem Eingewöhnungsplan. Bezugsperson ab dem ersten Tag. Fokus auf Ankommen und Sicherheit.",
    dauer: "Woche 1–4",
  },
  {
    nr: "04",
    titel: "Diagnostik & Hilfeplanung",
    icon: Brain,
    text: "Therapeutische Diagnostik, Erstellung eines individuellen Behandlungsplans und gemeinsame Zielformulierung im Hilfeplan mit Jugendamt und Familie.",
    dauer: "Monat 1–2",
  },
  {
    nr: "05",
    titel: "Therapeutische Arbeit",
    icon: Activity,
    text: "Intensive Begleitungsphase: Therapie, Schulbegleitung, Familienarbeit, Krisenmanagement — und messbare Fortschritte.",
    dauer: "Laufend",
  },
  {
    nr: "06",
    titel: "Perspektive & Übergang",
    icon: ArrowRight,
    text: "Vorbereitung auf Rückführung, Verselbständigung oder ambulante Nachbetreuung. Wir begleiten den Übergang aktiv — kein abruptes Ende.",
    dauer: "Ab Monat 12",
  },
];

const ansatz = [
  {
    nr: "01",
    icon: Home,
    titel: "Alltag als Therapie",
    text: "Veränderung entsteht nicht im Behandlungszimmer — sie entsteht im echten Leben. Jeder gemeinsame Mahlzeit, jede Konfliktlösung, jeder Erfolg ist Teil der therapeutischen Arbeit.",
  },
  {
    nr: "02",
    icon: Heart,
    titel: "Beziehung als Wirkfaktor",
    text: "Forschungskonsens: Der stärkste Prädiktor für therapeutischen Erfolg ist die Beziehungsqualität. Wir investieren alles in verlässliche, authentische Beziehungen.",
  },
  {
    nr: "03",
    icon: Brain,
    titel: "Traumasensible Grundhaltung",
    text: "Verhaltensauffälligkeiten sind Überlebensstrategien, keine Charakterfehler. Wir verstehen bevor wir handeln — und handeln immer auf Basis von Sicherheit.",
  },
  {
    nr: "04",
    icon: Target,
    titel: "Klare Ziele, messbare Schritte",
    text: "Jeder Hilfeplan enthält konkrete, erreichbare Ziele. Wir überprüfen regelmäßig, passen an und feiern Fortschritte — auch die kleinen.",
  },
  {
    nr: "05",
    icon: Layers,
    titel: "Systemisch denken",
    text: "Der Jugendliche ist nicht das Problem — er ist Teil eines Systems. Wir arbeiten mit Familie, Schule, Jugendamt und psychiatrischen Partnern als Team.",
  },
  {
    nr: "06",
    icon: Sun,
    titel: "Ressourcen stärken",
    text: "Defizitorientierung schwächt. Wir sehen, was da ist: Stärken, Interessen, Überlebensmut. Diese Ressourcen sind der Motor jeder Veränderung.",
  },
];

const faq = [
  {
    frage: "Wie lange dauert ein Aufenthalt in einer therapeutischen Wohngruppe?",
    antwort: "Im Durchschnitt 12–24 Monate. Die genaue Dauer richtet sich nach dem individuellen Hilfebedarf und wird gemeinsam mit dem Jugendamt im Hilfeplan festgelegt. Wir planen nicht auf Zeit — wir planen auf Ziele.",
  },
  {
    frage: "Was unterscheidet eine therapeutische Wohngruppe von einer regulären Heimgruppe?",
    antwort: "Therapeutische Wohngruppen haben einen deutlich höheren Betreuungsschlüssel, ausgebildete Therapeuten als festen Teil des Teams, eine traumasensible Konzeption des gesamten Alltags und eine engere psychiatrische Anbindung. Der therapeutische Auftrag ist nicht Ergänzung — er ist Kern.",
  },
  {
    frage: "Welche Störungsbilder können Sie begleiten?",
    antwort: "Wir begleiten Jugendliche mit PTBS, komplexen Traumatisierungen, Depressionen, Angststörungen, Persönlichkeitsentwicklungsstörungen, ADHS mit Komorbiditäten, selbstverletzendem Verhalten und externalisierenden Störungsbildern. Ausschlusskriterien sind akute Psychosen oder stark fremdgefährdendes Verhalten — hier vermitteln wir in geeignetere Einrichtungen.",
  },
  {
    frage: "Gibt es Therapie durch ausgebildete Therapeuten oder durch Pädagogen?",
    antwort: "Wir haben approbierte Kinder- und Jugendlichenpsychotherapeuten als festes Teammitglied. Diese führen die Einzeltherapie durch. Gruppentherapeutische Angebote werden von therapeutisch ausgebildeten Pädagogen begleitet. Beides ergänzt sich.",
  },
  {
    frage: "Wie werden Eltern in den Prozess einbezogen?",
    antwort: "Eltern sind fester Bestandteil des Hilfeprozesses. Wir führen regelmäßige Eltern- und Familiengespräche, begleiten Besuchskontakte und arbeiten aktiv an Beziehungsklärung. Ziel ist immer die bestmögliche Perspektive für den Jugendlichen — ob das Rückführung, Verselbständigung oder eine andere Lösung ist.",
  },
  {
    frage: "Was passiert in einer Krise innerhalb der Gruppe?",
    antwort: "Unser Team ist 24/7 im Haus. Bei Krisen greift ein klares Krisenprotokoll: De-Eskalation, Einzelbetreuung, Sicherung. Bei psychiatrischen Notfällen kooperieren wir direkt mit unseren psychiatrischen Partnern. Fremdgefährdende Krisen werden mit dem Jugendamt abgestimmt.",
  },
  {
    frage: "Wie läuft das Schnupperwohnen ab?",
    antwort: "Vor dem offiziellen Einzug verbringt der Jugendliche 1–3 Tage in der Gruppe: Kennenlernen des Teams, der Mitbewohner, der Räume und des Alltags. Kein Einzug ohne ein Gespräch mit dem Jugendlichen selbst. Seine Zustimmung ist für uns entscheidend.",
  },
  {
    frage: "Welche Schulmodelle gibt es?",
    antwort: "Wir kooperieren mit umliegenden Schulen aller Schulformen und bieten schulische Förderung im Haus an. Bei Schulverweigerung oder nach längeren Fehlzeiten gibt es ein abgestuftes Wiedereingliederungsmodell — angepasst an den individuellen Stand des Jugendlichen.",
  },
];

/* ─── Seite ─────────────────────────────────────────────────── */

export default function TherapieWohnenPage() {
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
          width: "320px", height: "320px", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(254,194,116,0.06) 0%, transparent 65%)",
        }} />

        <div className="site-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
            marginBottom: "1.25rem",
          }}>
            Ankernetz Therapie & Wohnen
          </p>

          <h1 style={{
            fontSize: "clamp(2.75rem, 6vw, 5rem)", fontWeight: 900,
            color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.03em",
            marginBottom: "1.25rem", maxWidth: "16ch",
          }}>
            Raum zum Ankommen.<br />
            <span style={{ color: "#6FA3FE" }}>Begleitung zum Wachsen.</span>
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.75, maxWidth: "560px", marginBottom: "3rem",
          }}>
            Unsere therapeutischen Wohngruppen bieten Jugendlichen den Rahmen, den
            sie brauchen: therapeutisch begleitet, alltagsnah und mit echter Beziehung
            als Fundament. Veränderung entsteht im echten Leben — nicht im
            Behandlungszimmer.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
            <Link href="/platzanfrage" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#6FA3FE", color: "white",
              fontWeight: 700, fontSize: "15px",
              padding: "14px 28px", borderRadius: "12px",
              textDecoration: "none",
            }}>
              <ClipboardList size={18} />
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
                  <p style={{ fontSize: "1.625rem", fontWeight: 900, color: "white", lineHeight: 1 }}>{k.wert}</p>
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
              Was ist Therapie & Wohnen?
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}>
              Therapie, die im Alltag stattfindet.
            </h2>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px", marginBottom: "1.25rem" }}>
              Therapeutische Wohngruppen verbinden das Beste aus zwei Welten: den
              strukturierten Schutzrahmen der stationären Jugendhilfe mit der Tiefe
              therapeutischer Arbeit. Jugendliche leben hier nicht neben ihrer Therapie —
              sie leben in ihr.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px", marginBottom: "1.25rem" }}>
              Jeder gemeinsame Abend, jedes gelöste Konfliktgespräch, jeder überwundene
              schwierige Morgen ist therapeutisch wirksam — weil echte Beziehung der
              stärkste Wirkfaktor ist, den die Forschung kennt.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px" }}>
              Unser Team aus Therapeuten, Pädagogen und Bezugsbetreuern arbeitet nach
              einem gemeinsamen Verständnis: traumasensibel, ressourcenorientiert und
              immer mit dem Jugendlichen — nicht über seinen Kopf hinweg.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {[
              { icon: CheckCircle, text: "Kleines Gruppenformat: 4–6 Jugendliche pro Gruppe" },
              { icon: CheckCircle, text: "Approbierte Therapeuten als festes Teammitglied" },
              { icon: CheckCircle, text: "Wöchentliche Einzel- und Gruppentherapie" },
              { icon: CheckCircle, text: "24/7 Betreuung durch Bezugsfachkräfte" },
              { icon: CheckCircle, text: "Traumasensible Alltagsgestaltung nach Konzept" },
              { icon: CheckCircle, text: "Schulbegleitung und individuelle Bildungsförderung" },
              { icon: CheckCircle, text: "Aktive Eltern- und Familienarbeit" },
              { icon: CheckCircle, text: "Vorbereitung auf Verselbständigung von Anfang an" },
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

      {/* ══ INDIKATIONEN ══════════════════════════════════════════ */}
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
              Indikationen für Therapie & Wohnen
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", maxWidth: "540px", margin: "0 auto", lineHeight: 1.75 }}>
              Therapie & Wohnen ist die richtige Hilfe, wenn ambulante Maßnahmen
              nicht mehr ausreichen und ein stabiler therapeutischer Lebensrahmen
              gebraucht wird.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
          }}>
            {indikationen.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.titel} className="bento-card" style={{
                  background: "white", borderRadius: "16px",
                  padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)",
                }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    background: ind.akzent + "15",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1rem",
                  }}>
                    <Icon size={22} color={ind.akzent} />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.5rem" }}>
                    {ind.titel}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.7 }}>
                    {ind.text}
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
              Was wir für Jugendliche leisten
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

      {/* ══ EIN TAG IN DER GRUPPE ═════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#1a3f6f", marginBottom: "0.75rem",
            }}>
              Einblick
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              Ein Tag in der therapeutischen Wohngruppe
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", maxWidth: "500px", margin: "0.75rem auto 0", lineHeight: 1.75 }}>
              Struktur gibt Sicherheit. Sicherheit ermöglicht Entwicklung.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem",
          }}>
            {therapeutischerAlltag.map((t, i) => (
              <div key={i} className="bento-card" style={{
                background: "white", borderRadius: "16px",
                padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)",
              }}>
                <p style={{
                  fontSize: "11px", fontWeight: 800, color: "#6FA3FE",
                  letterSpacing: "0.08em", marginBottom: "0.75rem",
                  background: "#eef4ff", display: "inline-block",
                  padding: "3px 10px", borderRadius: "9999px",
                }}>
                  {t.zeit}
                </p>
                <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "14px", marginBottom: "0.5rem" }}>
                  {t.titel}
                </p>
                <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.7 }}>
                  {t.text}
                </p>
              </div>
            ))}
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
              Alltag. Beziehung. Veränderung.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
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
              Von der Anfrage zur Perspektive
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {prozessSchritte.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} style={{ display: "flex", gap: "1.75rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{
                      width: "52px", height: "52px", borderRadius: "50%",
                      background: "#1a3f6f",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, zIndex: 1,
                    }}>
                      <Icon size={22} color="white" />
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
              Ihr verlässlicher Partner in der Hilfeplanung
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.85, marginBottom: "2rem" }}>
              Therapeutisches Wohnen erfordert enge Kooperation. Wir sind transparent,
              gut erreichbar und liefern Ihnen die Dokumentation, die Sie brauchen.
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
              { icon: Phone, text: "Direkte Erreichbarkeit der Gruppenleitung — täglich" },
              { icon: FileText, text: "Aufnahmebericht innerhalb von 72h" },
              { icon: ClipboardList, text: "Monatliche Entwicklungsberichte mit Therapiefortschritten" },
              { icon: UserCheck, text: "Fester Ansprechpartner für die gesamte Hilfedauer" },
              { icon: Brain, text: "Therapeutische Einschätzungen zur Hilfeplanvorbereitung" },
              { icon: Users, text: "Aktive Teilnahme an Hilfeplangesprächen und Familienmeetings" },
              { icon: Shield, text: "Klares Krisenprotokoll mit direkter Rückmeldung" },
              { icon: Lock, text: "Vollständige Dokumentation nach SGB VIII und DSGVO" },
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
              Was Jugendämter & Familien fragen
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
          <Home size={36} color="#6FA3FE" style={{ marginBottom: "1.5rem" }} />
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800,
            color: "white", marginBottom: "1.25rem", letterSpacing: "-0.02em", lineHeight: 1.2,
          }}>
            Ein Platz, der wirklich passt.
          </h2>
          <p style={{
            fontSize: "15px", color: "rgba(255,255,255,0.6)",
            marginBottom: "2.5rem", lineHeight: 1.75,
          }}>
            Stellen Sie eine Platzanfrage oder rufen Sie uns direkt an. Wir prüfen die
            Passung und melden uns innerhalb von 48 Stunden.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/platzanfrage" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#6FA3FE", color: "white",
              fontWeight: 700, fontSize: "15px",
              padding: "15px 30px", borderRadius: "12px",
              textDecoration: "none",
            }}>
              <ClipboardList size={18} />
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
