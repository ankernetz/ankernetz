import Link from "next/link";
import {
  Phone, Heart, Shield, Brain, Star, Clock,
  CheckCircle, ArrowRight, Users, FileText,
  Home, BookOpen, Stethoscope, HandHeart,
  AlertTriangle, UserCheck, ClipboardList,
  ChevronDown, Lock, Activity, Sun,
  Smile, Target, Layers, Zap,
  Pencil, Gamepad2, Utensils, TreePine,
  Bus, Music, GraduationCap, Compass,
} from "lucide-react";

/* ─── Daten ─────────────────────────────────────────────────── */

const kennzahlen = [
  { wert: "6–12", label: "Jahre — Kinder in einer prägenden Entwicklungsphase", icon: Users },
  { wert: "4–6", label: "Kinder pro Gruppe — Qualität durch Überschaubarkeit", icon: Home },
  { wert: "24/7", label: "Betreuung und Bereitschaft an allen Tagen", icon: Clock },
  { wert: "100%", label: "Bindungsorientierte Pädagogik als Grundprinzip", icon: Heart },
];

const indikationen = [
  {
    icon: AlertTriangle,
    titel: "Vernachlässigung & Misshandlung",
    text: "Kinder, die körperliche, emotionale oder entwicklungsbezogene Vernachlässigung erfahren haben und einen sicheren, verlässlichen Ort zum Aufwachsen brauchen.",
    akzent: "#f97316",
  },
  {
    icon: Home,
    titel: "Hochbelastete Familiensysteme",
    text: "Elterliche psychische Erkrankungen, Sucht, Gewalt, Armut oder Wohnungslosigkeit, die eine Schutzunterbringung notwendig machen.",
    akzent: "#ef4444",
  },
  {
    icon: Heart,
    titel: "Bindungsstörungen",
    text: "Kinder mit deutlich gestörten oder desorganisierten Bindungsmustern, die eine intensive, bindungspädagogisch ausgerichtete Begleitung benötigen.",
    akzent: "#e11d48",
  },
  {
    icon: Brain,
    titel: "Entwicklungsverzögerungen",
    text: "Sprachliche, kognitive, soziale oder motorische Rückstände infolge von Vernachlässigung, Traumatisierung oder fehlender Förderung.",
    akzent: "#8b5cf6",
  },
  {
    icon: Shield,
    titel: "Kindeswohlgefährdung",
    text: "Akute oder chronische Gefährdungslagen, in denen das Kind nicht im familiären Umfeld verbleiben kann und ein klarer Schutzauftrag besteht.",
    akzent: "#0891b2",
  },
  {
    icon: Activity,
    titel: "Verhaltensauffälligkeiten",
    text: "Aggressives, regressives oder sozial rückgezogenes Verhalten als Ausdruck früherer Belastungserfahrungen, die pädagogische Begleitung erfordern.",
    akzent: "#059669",
  },
];

const leistungen = [
  {
    icon: Home,
    titel: "Stabile Wohngruppe & Alltagsrahmen",
    text: "Ein klarer, vorhersehbarer Alltag gibt Sicherheit. Strukturierte Morgen- und Abendroutinen, verlässliche Mahlzeiten und ein eigenes Zimmer — das ist mehr als Unterkunft: es ist Heimat.",
  },
  {
    icon: Heart,
    titel: "Bezugsbetreuung & Beziehungskontinuität",
    text: "Jedes Kind hat eine feste Bezugsfachkraft. Diese Eine ist konstant, verlässlich und begleitet das Kind durch seinen gesamten Aufenthalt. Kontinuität ist kein Komfort — sie ist Heilung.",
  },
  {
    icon: GraduationCap,
    titel: "Schulbegleitung & Bildungsförderung",
    text: "Tägliche Hausaufgabenbegleitung, enge Kooperation mit den Schulen, individuelle Lernförderung und Unterstützung bei schulischen Übergängen. Bildung als Schlüssel zur Zukunft.",
  },
  {
    icon: Brain,
    titel: "Entwicklungspsychologische Förderung",
    text: "Gezielte Förderung von Sprache, Kognition, Sozialverhalten und emotionaler Regulation — abgestimmt auf den individuellen Entwicklungsstand jedes Kindes.",
  },
  {
    icon: Shield,
    titel: "Bindungsorientierte Pädagogik",
    text: "Alle Fachkräfte arbeiten nach bindungspädagogischen Grundsätzen: feinfühlig, verlässlich, konsistent. Beziehung als therapeutisches Fundament für jede Entwicklung.",
  },
  {
    icon: Users,
    titel: "Elternarbeit & Familienkontakte",
    text: "Eltern werden nicht ausgeschlossen — sie werden einbezogen. Wir führen regelmäßige Elterngespräche, begleiten Besuchskontakte und arbeiten, wo möglich, auf Rückführung hin.",
  },
  {
    icon: Music,
    titel: "Freizeitgestaltung & soziale Integration",
    text: "Vereine, Hobbies, Freundschaften, Ausflüge — Kinder sollen Kind sein dürfen. Freizeit ist kein Luxus, sondern Voraussetzung für gesunde Entwicklung.",
  },
  {
    icon: Stethoscope,
    titel: "Therapeutische Anbindung",
    text: "Bei diagnostizierten Störungen oder erhöhtem therapeutischem Bedarf koordinieren wir die Anbindung an Kinder- und Jugendpsychotherapeuten und heilpädagogische Fachkräfte.",
  },
  {
    icon: Activity,
    titel: "Krisenbegleitung im Alltag",
    text: "Krisen gehören dazu. Unser Team ist ausgebildet in De-Eskalation und traumasensiblem Krisenmanagement — klar, ruhig und ohne Eskalation als Reaktionsprinzip.",
  },
];

const alltagsRhythmus = [
  { zeit: "07:00", icon: Sun, titel: "Guter Morgen", text: "Strukturiertes Aufstehen, Körperpflege, gemeinsames Frühstück. Der Morgen gibt den Ton für den Tag." },
  { zeit: "08:00", icon: Bus, titel: "Schule", text: "Begleiteter Schulweg, enge Kooperation mit Lehrerinnen, verlässliche Abhol- und Bringzeiten." },
  { zeit: "13:30", icon: Utensils, titel: "Mittagessen", text: "Gemeinsames Essen — täglich, warm, zuverlässig. Mahlzeiten sind soziale Ankerpunkte." },
  { zeit: "14:30", icon: Pencil, titel: "Hausaufgaben", text: "Ruhige, begleitete Hausaufgabenzeit mit individueller Unterstützung durch Bezugsfachkräfte." },
  { zeit: "16:00", icon: Gamepad2, titel: "Freizeit & Aktivitäten", text: "Spielen, Sport, Kreativität, Vereine — Kinder sein. Gezielte Freizeitangebote durch das Team." },
  { zeit: "18:00", icon: Utensils, titel: "Abendessen", text: "Gemeinsames Abendessen, Tagesgespräch, Positives aus dem Tag benennen." },
  { zeit: "19:30", icon: BookOpen, titel: "Abendroutine", text: "Vorlesen, Einzelgespräch mit der Bezugsperson, Gute-Nacht-Ritual — Sicherheit für die Nacht." },
  { zeit: "Nacht", icon: Shield, titel: "Nachtbereitschaft", text: "Eine Fachkraft ist immer im Haus. Kein Kind ist allein — auch nicht um 2 Uhr morgens." },
];

const foerderBereiche = [
  { icon: BookOpen, titel: "Sprache & Kommunikation", text: "Vorlesen, Geschichtenerzählen, Sprachförderung — Sprache ist der Schlüssel zur Welt." },
  { icon: Brain, titel: "Kognition & Lernen", text: "Individuelle Lernbegleitung, Förderung von Konzentration, Gedächtnis und Problemlösung." },
  { icon: Heart, titel: "Emotionale Regulation", text: "Benennen von Gefühlen, Umgang mit Wut und Trauer, Selbstberuhigung — Lebenskompetenzen." },
  { icon: Users, titel: "Soziale Kompetenz", text: "Konfliktlösung, Freundschaften, Grenzen, Kooperation — im täglichen Miteinander lernen." },
  { icon: Activity, titel: "Motorik & Koordination", text: "Bewegungsangebote, Sport, Feinmotorik — Körper und Geist sind untrennbar verbunden." },
  { icon: Smile, titel: "Selbstwert & Identität", text: "Was kann ich? Was bin ich wert? Gezielter Aufbau von Selbstvertrauen und positivem Selbstbild." },
];

const prozessSchritte = [
  {
    nr: "01",
    titel: "Platzanfrage",
    icon: ClipboardList,
    text: "Das Jugendamt stellt eine Anfrage. Wir prüfen die Passung anhand der vorhandenen Unterlagen und melden uns innerhalb von 48 Stunden.",
    dauer: "Tag 0–2",
  },
  {
    nr: "02",
    titel: "Kennenlernen",
    icon: Smile,
    text: "Ein erstes Treffen des Kindes mit der Gruppe, dem Team und den Räumlichkeiten — ohne Druck, im eigenen Tempo. Die Meinung des Kindes zählt.",
    dauer: "Woche 1",
  },
  {
    nr: "03",
    titel: "Gemeinsame Vorbereitung",
    icon: Users,
    text: "Vorbereitung des Einzugs mit Kind, Familie und Jugendamt. Zimmergestaltung, Alltagsplanung, Übergabegespräch.",
    dauer: "Woche 1–2",
  },
  {
    nr: "04",
    titel: "Einzug & Eingewöhnung",
    icon: Home,
    text: "Behutsamer Einzug mit Bezugsperson von Tag eins. Eingewöhnungsplan, der dem Tempo des Kindes folgt — keine Schocktherapie.",
    dauer: "Woche 2–6",
  },
  {
    nr: "05",
    titel: "Entwicklung & Hilfeplanung",
    icon: Target,
    text: "Regelmäßige Entwicklungsgespräche, Hilfeplangespräche mit Jugendamt und Familie, Förderplanüberarbeitung.",
    dauer: "Laufend",
  },
  {
    nr: "06",
    titel: "Perspektive & Übergang",
    icon: ArrowRight,
    text: "Rückführung in die Familie, Wechsel in eine Pflegefamilie oder Übergang in eine andere Hilfeform — begleitet, vorbereitet, sicher.",
    dauer: "Bei Bedarf",
  },
];

const ansatz = [
  {
    nr: "01",
    icon: Shield,
    titel: "Sicherheit zuerst",
    text: "Kein Kind kann lernen, wachsen oder sich entwickeln, wenn es sich nicht sicher fühlt. Sicherheit ist keine Vorbedingung — sie ist das Ziel jedes einzelnen Tages.",
  },
  {
    nr: "02",
    icon: Heart,
    titel: "Beziehung trägt alles",
    text: "Kinder, die Verlässlichkeit nicht kennen, haben gelernt, ihr nicht zu trauen. Wir bauen dieses Vertrauen geduldig auf — Tag für Tag, Geste für Geste.",
  },
  {
    nr: "03",
    icon: Brain,
    titel: "Verstehen vor Reagieren",
    text: "Kein Kind ist schwierig — kein Kind ist absichtlich problematisch. Verhalten ist Kommunikation. Wir übersetzen, bevor wir handeln.",
  },
  {
    nr: "04",
    icon: Sun,
    titel: "Alltag als Entwicklungsraum",
    text: "Jede Mahlzeit, jede Gute-Nacht-Geschichte, jeder gelöste Streit ist Entwicklungsarbeit. Wir gestalten den Alltag bewusst als pädagogischen Raum.",
  },
  {
    nr: "05",
    icon: Layers,
    titel: "Familie denken, nicht ersetzen",
    text: "Wir ersetzen keine Familie — wir überbrücken, stärken und begleiten. Eltern sind Partner, nicht Problemquelle. Familie ist immer Teil des Hilfesystems.",
  },
  {
    nr: "06",
    icon: Compass,
    titel: "Zukunft im Blick",
    text: "Von Anfang an denken wir in Perspektiven. Nicht nur Heute, sondern auch: Wo soll dieses Kind in zwei Jahren stehen? Welche Stärken trägt es in die Zukunft?",
  },
];

const faq = [
  {
    frage: "Wie lange leben Kinder in einer Jugendhilfe-Wohngruppe?",
    antwort: "Die Verweildauer hängt vom individuellen Hilfebedarf ab. Kurzfristige Unterbringungen können wenige Monate dauern; bei langfristigem Schutzbedarf begleiten wir Kinder bis zum Übergang ins Jugendlichensystem mit 12 Jahren. Die Hilfe endet erst, wenn eine nachhaltige Perspektive gesichert ist.",
  },
  {
    frage: "Können Eltern ihre Kinder besuchen?",
    antwort: "Ja — in aller Regel. Besuchskontakte werden mit dem Jugendamt abgestimmt und von uns begleitet. Wir gestalten Kontakte so, dass sie für das Kind positiv und sicher sind. Bei Gefährdungslagen werden Besuche mit dem Jugendamt gemeinsam geregelt.",
  },
  {
    frage: "Was passiert, wenn ein Kind in eine Krise gerät?",
    antwort: "Unser Team ist rund um die Uhr im Haus und in De-Eskalation geschult. Bei eskalierenden Situationen greift ein klares Krisenprotokoll: Rückzug in Sicherheit, Einzelbetreuung, Beruhigung. Psychiatrische Notfälle werden in Kooperation mit unseren Partnern gehandhabt.",
  },
  {
    frage: "Gibt es therapeutische Unterstützung vor Ort?",
    antwort: "Bei diagnostiziertem therapeutischem Bedarf koordinieren wir die Anbindung an externe Kinder- und Jugendpsychotherapeuten. Heilpädagogische Maßnahmen werden direkt vor Ort angeboten. Das pädagogische Team arbeitet traumasensibel und bindungsorientiert — das ist kein Ersatz für Therapie, aber eine wirksame Ergänzung.",
  },
  {
    frage: "Welche Schule besuchen die Kinder?",
    antwort: "Wir kooperieren mit umliegenden Grundschulen und weiterführenden Schulen aller Schulformen. Bei Schuleintritt oder -wechsel begleiten wir aktiv. Schulverweigerung oder lange Fehlzeiten begegnen wir mit einem abgestimmten Wiedereingliederungsplan.",
  },
  {
    frage: "Wie werden Eltern in die Hilfeplanung einbezogen?",
    antwort: "Eltern werden regelmäßig zu Gesprächen eingeladen, an Hilfeplangesprächen beteiligt und über Entwicklungen ihres Kindes informiert. Familienarbeit ist fester Bestandteil unseres Konzepts — nicht Bonus, sondern Standard.",
  },
  {
    frage: "Gibt es ein Konzept für Kinder mit besonderem Förderbedarf?",
    antwort: "Ja. Kinder mit diagnostizierten Entwicklungsverzögerungen, Lernschwächen oder heilpädagogischem Bedarf erhalten individuelle Förderpläne. Wir koordinieren externe Fachdienste (Logopädie, Ergotherapie, Frühförderung) und begleiten die Förderung alltagsintegriert.",
  },
  {
    frage: "Wie läuft die Aufnahme konkret ab?",
    antwort: "Nach der Platzanfrage des Jugendamts prüfen wir die Passung und laden das Kind und seine Familie zu einem Kennenlerntreffen ein. Kein Kind zieht ein, ohne die Gruppe und sein Zimmer gesehen zu haben. Der Einzug selbst wird individuell vorbereitet und so ruhig und vertraut wie möglich gestaltet.",
  },
];

/* ─── Seite ─────────────────────────────────────────────────── */

export default function JugendhilfePage() {
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
          position: "absolute", bottom: "25%", left: "3%",
          width: "320px", height: "320px", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(254,194,116,0.06) 0%, transparent 65%)",
        }} />

        <div className="site-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
            marginBottom: "1.25rem",
          }}>
            Ankernetz Jugendhilfe
          </p>

          <h1 style={{
            fontSize: "clamp(2.75rem, 6vw, 5rem)", fontWeight: 900,
            color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.03em",
            marginBottom: "1.25rem", maxWidth: "16ch",
          }}>
            Sicherheit im Alltag.<br />
            <span style={{ color: "#6FA3FE" }}>Zukunft im Blick.</span>
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.75, maxWidth: "560px", marginBottom: "3rem",
          }}>
            Kinder brauchen Sicherheit, Verlässlichkeit und Beziehungen, die tragen.
            Unsere Kinderwohngruppen bieten genau das: einen stabilen Ort, an dem
            Kinder wachsen, lernen und sich entwickeln können — mit echten Menschen,
            die für sie da sind.
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

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px", background: "rgba(255,255,255,0.08)",
            borderRadius: "16px", overflow: "hidden",
          }}>
            {kennzahlen.map((k) => {
              const Icon = k.icon;
              return (
                <div key={k.wert} style={{ background: "rgba(255,255,255,0.04)", padding: "1.5rem 1.25rem" }}>
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
              Was ist Jugendhilfe?
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}>
              Ein Zuhause, das hält — wenn das eigene es nicht kann.
            </h2>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px", marginBottom: "1.25rem" }}>
              Stationäre Jugendhilfe ist mehr als eine Unterbringung. Sie ist ein
              pädagogischer Schutzraum, in dem Kinder nachholen dürfen, was sie
              brauchen: verlässliche Beziehungen, klare Strukturen, echte Zuwendung.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px", marginBottom: "1.25rem" }}>
              Viele der Kinder, die zu uns kommen, haben erfahren, dass Erwachsene
              unzuverlässig, gefährlich oder nicht verfügbar sind. Unser Auftrag ist
              es, dieses Bild Schritt für Schritt zu verändern — durch Verlässlichkeit,
              Feinfühligkeit und echte Präsenz.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px" }}>
              Mit kleinen Gruppen, geschulten Teams und einem klar strukturierten
              Alltag schaffen wir den Rahmen, den Kinder brauchen, um sich zu
              entwickeln — schulisch, sozial und als Persönlichkeit.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {[
              { icon: CheckCircle, text: "Kleine Gruppen: 4–6 Kinder für intensive Beziehungsarbeit" },
              { icon: CheckCircle, text: "Feste Bezugsperson von Tag eins — über den gesamten Aufenthalt" },
              { icon: CheckCircle, text: "Tägliche Hausaufgabenbegleitung und Schulkooperation" },
              { icon: CheckCircle, text: "Bindungsorientierte Pädagogik als Teamstandard" },
              { icon: CheckCircle, text: "Strukturierter, vorhersehbarer Alltag als Sicherheitsfundament" },
              { icon: CheckCircle, text: "Aktive Eltern- und Familienarbeit mit Rückführungsperspektive" },
              { icon: CheckCircle, text: "Freizeitangebote, Vereine, soziale Integration" },
              { icon: CheckCircle, text: "Therapeutische Anbindung bei diagnostiziertem Bedarf" },
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
              Indikationen für stationäre Jugendhilfe
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", maxWidth: "540px", margin: "0 auto", lineHeight: 1.75 }}>
              Stationäre Jugendhilfe greift dann, wenn das familiäre Umfeld den
              Schutzbedarf des Kindes nicht mehr gewährleisten kann.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem",
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
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.5rem" }}>{ind.titel}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.7 }}>{ind.text}</p>
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
              Was wir für Kinder leisten
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem",
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
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.625rem" }}>{l.titel}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.75 }}>{l.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ ALLTAGSRHYTHMUS ═══════════════════════════════════════ */}
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
              Ein Tag in der Kinderwohngruppe
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", maxWidth: "480px", margin: "0.75rem auto 0", lineHeight: 1.75 }}>
              Vorhersehbarkeit gibt Sicherheit. Sicherheit schafft Raum zum Wachsen.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem",
          }}>
            {alltagsRhythmus.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={i} className="bento-card" style={{
                  background: "white", borderRadius: "16px",
                  padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1rem" }}>
                    <span style={{
                      fontSize: "11px", fontWeight: 800, color: "#6FA3FE",
                      background: "#eef4ff", padding: "3px 10px", borderRadius: "9999px",
                      letterSpacing: "0.04em",
                    }}>{t.zeit}</span>
                    <Icon size={14} color="#1a3f6f" />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "13px", marginBottom: "0.5rem" }}>{t.titel}</p>
                  <p style={{ fontSize: "12px", color: "#374151", lineHeight: 1.7 }}>{t.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ FÖRDERUNG ═════════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", alignItems: "start" }}>
            <div>
              <p style={{
                fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem",
              }}>
                Entwicklungsförderung
              </p>
              <h2 style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800,
                color: "#1a3f6f", lineHeight: 1.25, letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}>
                Ganzheitliche Förderung — in allen Bereichen
              </h2>
              <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.85 }}>
                Entwicklung findet nicht in einem Fach statt. Wir fördern Kinder
                in allen relevanten Entwicklungsbereichen — individuell, alltagsintegriert
                und auf Basis einer fundierten Einschätzung ihres Entwicklungsstands.
              </p>
            </div>

            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem",
            }}>
              {foerderBereiche.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.titel} style={{
                    background: "#f4f7fb", borderRadius: "14px",
                    padding: "1.5rem", border: "1px solid rgba(26,63,111,0.07)",
                  }}>
                    <Icon size={20} color="#6FA3FE" style={{ marginBottom: "0.75rem" }} />
                    <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "13px", marginBottom: "4px" }}>{f.titel}</p>
                    <p style={{ fontSize: "12px", color: "#374151", lineHeight: 1.65 }}>{f.text}</p>
                  </div>
                );
              })}
            </div>
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
              Sicherheit. Beziehung. Zukunft.
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
                  <p style={{ fontWeight: 700, color: "white", fontSize: "15px", marginBottom: "0.75rem" }}>{a.titel}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>{a.text}</p>
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
              Von der Anfrage zum neuen Zuhause
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
                      flexShrink: 0,
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
              Verlässliche Kooperation auf Augenhöhe
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.85, marginBottom: "2rem" }}>
              Wir verstehen, was Fachkräfte im ASD brauchen: schnelle Reaktion,
              klare Kommunikation und Dokumentation, auf die Verlass ist.
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
              { icon: Phone, text: "Direkte Erreichbarkeit des Gruppenteams — täglich" },
              { icon: FileText, text: "Aufnahmebericht innerhalb von 72h nach Einzug" },
              { icon: ClipboardList, text: "Monatliche Entwicklungsberichte mit Förderfortschritten" },
              { icon: UserCheck, text: "Feste Ansprechperson während der gesamten Hilfedauer" },
              { icon: Users, text: "Aktive Beteiligung an Hilfeplangesprächen" },
              { icon: Heart, text: "Strukturierte Elternarbeit und Besuchsbegleitung" },
              { icon: Shield, text: "Klare Meldewege bei Vorkommnissen und Krisen" },
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
                  <p style={{ fontSize: "13px", color: "#1a3f6f", fontWeight: 500, lineHeight: 1.55 }}>{item.text}</p>
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
                <div style={{ padding: "0 1.5rem 1.25rem", fontSize: "13px", color: "#374151", lineHeight: 1.8 }}>
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
          <Heart size={36} color="#6FA3FE" style={{ marginBottom: "1.5rem" }} />
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800,
            color: "white", marginBottom: "1.25rem", letterSpacing: "-0.02em", lineHeight: 1.2,
          }}>
            Jedes Kind verdient einen sicheren Ort.
          </h2>
          <p style={{
            fontSize: "15px", color: "rgba(255,255,255,0.6)",
            marginBottom: "2.5rem", lineHeight: 1.75,
          }}>
            Stellen Sie eine Platzanfrage oder nehmen Sie direkt Kontakt auf.
            Wir melden uns innerhalb von 48 Stunden.
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
