import Link from "next/link";
import {
  Phone, Heart, Shield, Brain, Star, Clock,
  CheckCircle, ArrowRight, Users, FileText,
  MessageSquare, BookOpen, Lightbulb, ChevronDown,
  Zap, Home, Target, Layers, ClipboardList, UserCheck,
  GraduationCap, Briefcase, TrendingUp, MapPin,
  Award, Building2, Handshake, Calendar, Compass,
  Package, ShoppingBag, Shirt, Backpack, Pencil,
  Smile, Baby, Leaf, Sparkles, Box, Truck,
} from "lucide-react";

/* ─── Daten ──────────────────────────────────────────────────── */

const kennzahlen = [
  { wert: "individuell", label: "Jeder Bedarf wird persönlich ermittelt — keine Schablone", icon: Target },
  { wert: "würdevoll", label: "Kleidung und Ausstattung, die Selbstwert stärken", icon: Heart },
  { wert: "schnell", label: "Bereitstellung bei akutem Bedarf innerhalb von 48h", icon: Zap },
  { wert: "vernetzt", label: "Eingebettet in den gesamten Hilfeprozess", icon: Layers },
];

const versorgungsBereiche = [
  {
    icon: Shirt,
    titel: "Kleidungsversorgung",
    text: "Bedarfsorientierte, altersgerechte Kleidung — angepasst an Jahreszeit, Größe und die besonderen Anforderungen des Kindes. Kein Einheitslook, sondern Kleidung, die das Kind als Person stärkt.",
    details: ["Altersgerechte Auswahl", "Saisonale Vollausstattung", "Schulkleidung & Sportkleidung", "Sensibel für taktile Besonderheiten"],
    akzent: "#1a3f6f",
  },
  {
    icon: Backpack,
    titel: "Schul- & Lernausstattung",
    text: "Schulranzen, Schreibwaren, Hefte, Bücher — alles, was ein Kind für einen erfolgreichen Schulstart braucht. Für Kinder in stationären Hilfen, die oft ohne eigene Schulsachen ankommen.",
    details: ["Vollständige Schulausstattung", "Schulfächer-spezifisches Material", "Ergonomische Schulranzen", "Nachhilfemittel bei Bedarf"],
    akzent: "#059669",
  },
  {
    icon: Star,
    titel: "Freizeitausstattung",
    text: "Spielzeug, Sportausrüstung, Hobbymaterial — Kinder brauchen mehr als das Nötigste. Freizeit, Spiel und eigene Interessen sind Teil einer gesunden Entwicklung und dürfen nicht im Hilfesystem verloren gehen.",
    details: ["Altersgerechtes Spielzeug", "Sportausrüstung für Vereinsmitgliedschaft", "Kreativmaterial & Bücher", "Persönliche Interessensförderung"],
    akzent: "#d97706",
  },
  {
    icon: Shield,
    titel: "Spezialisierte Ausstattung",
    text: "Kinder mit Traumafolgestörungen, sensorischen Besonderheiten oder anderen spezifischen Bedarfen brauchen speziell ausgewählte Materialien. Wir kennen die klinischen Hintergründe und wählen entsprechend aus.",
    details: ["Gewichtsdecken bei Trauma/ADHS", "Sensorisch verträgliche Materialien", "Adaptierte Sportausrüstung", "Therapeutisch sinnvolle Spielmittel"],
    akzent: "#7c3aed",
  },
  {
    icon: Home,
    titel: "Zimmerausstattung",
    text: "Eigene vier Wände brauchen mehr als ein Bett. Bei Neuaufnahmen unterstützen wir bei der würdevollen Einrichtung des Kinderzimmers — persönlich, einladend, ankerstiftend.",
    details: ["Grundausstattung bei Neuaufnahme", "Persönliche Dekorationsgegenstände", "Bücher & Medienzugang", "Erinnerungsboxen & persönliche Gegenstände"],
    akzent: "#be185d",
  },
  {
    icon: Package,
    titel: "Bedarfsermittlung & Koordination",
    text: "Die Grundlage jeder Versorgung ist eine genaue Bedarfsermittlung. Wir arbeiten eng mit dem Betreuungsteam, dem Jugendamt und wenn möglich der Familie zusammen, um den echten Bedarf zu erfassen.",
    details: ["Strukturierte Bedarfserhebung", "Abstimmung mit Betreuungsteam", "Dokumentation für Kostenträger", "Regelmäßige Überprüfung"],
    akzent: "#0ea5e9",
  },
];

const leistungen = [
  { icon: Target, titel: "Persönliche Bedarfsermittlung", text: "Kein standardisierter Warenkorb. Wir ermitteln gemeinsam mit dem Kind und dem Betreuungsteam, was tatsächlich gebraucht wird — nach Störungsbild, Alter, Interessen und Lebenssituation." },
  { icon: Shirt, titel: "Vollständige Kleidungsausstattung", text: "Von Unterwäsche bis Winterjacke — alles, was ein Kind braucht, um sich wohl und würdevoll zu fühlen. Inklusive Anpassung bei Wachstumsschüben." },
  { icon: Backpack, titel: "Schul- und Lernmittel", text: "Schulranzen, Hefte, Stifte, Bücher — vollständige Ausstattung für den Schulalltag. Bei Schulwechsel oder Neuaufnahme sofort verfügbar." },
  { icon: Star, titel: "Freizeit und Hobby", text: "Sportverein, Musikschule, Kreativkurse — Kinder in stationären Hilfen haben dasselbe Recht auf Freizeitgestaltung wie andere. Wir stellen die Ausstattung sicher." },
  { icon: Shield, titel: "Spezialmaterialien bei besonderen Bedarfen", text: "Trauma, sensorische Verarbeitungsstörungen, ADHS, Bindungsstörungen — wir kennen die klinischen Anforderungen und wählen entsprechend aus." },
  { icon: Home, titel: "Zimmergestaltung bei Neuaufnahme", text: "Ein eigenes Zimmer ist mehr als ein Schlafplatz. Bei Neuaufnahmen begleiten wir die Gestaltung eines persönlichen, einladenden Rückzugsraums." },
  { icon: FileText, titel: "Dokumentation für Kostenträger", text: "Vollständige Dokumentation aller Versorgungsleistungen — transparent, nachvollziehbar, jugendhilfe-konform. Für Jugendamt, Kostenträger und interne Qualitätssicherung." },
  { icon: Truck, titel: "Schnelle Bereitstellung", text: "Bei akutem Bedarf — z.B. bei Notaufnahme ohne Gepäck — stellen wir eine Erstausstattung innerhalb von 48 Stunden bereit." },
  { icon: Layers, titel: "Regelmäßige Anpassung", text: "Bedarfe verändern sich. Wir überprüfen regelmäßig, passen an und dokumentieren — damit kein Kind dauerhaft mit zu kleiner Kleidung oder veralteter Ausstattung zurechtkommen muss." },
];

const warum = [
  {
    icon: Heart,
    titel: "Würde ist kein Luxus",
    text: "Kinder, die mit geflickter, fremder oder zu kleiner Kleidung zur Schule gehen, erfahren täglich, dass sie weniger wert sind. Gute Ausstattung ist ein Akt der Würde — nicht eine Nebensache.",
  },
  {
    icon: Brain,
    titel: "Versorgung und psychische Gesundheit",
    text: "Kinder, die in Vernachlässigung aufgewachsen sind, haben oft besondere Beziehungen zu Besitz und Ausstattung. Eine würdevolle, verlässliche Versorgung kann Teil des therapeutischen Prozesses sein.",
  },
  {
    icon: Users,
    titel: "Soziale Teilhabe sichern",
    text: "Wer keine Sportausrüstung hat, geht nicht in den Verein. Wer kein Fahrrad hat, fährt nicht mit Freunden. Ausstattung ist die Voraussetzung für Teilhabe — und Teilhabe ist die Voraussetzung für Entwicklung.",
  },
  {
    icon: Shield,
    titel: "Schutz durch Stabilität",
    text: "Kinder aus Hilfesystemen erleben oft massive Diskontinuität. Verlässliche, stabile Versorgung ist ein kleines, aber wichtiges Element im Aufbau von Sicherheitsgefühl und Grundvertrauen.",
  },
];

const besonderheiten = [
  { icon: Target, titel: "Individuell statt Standard", text: "Wir lehnen Einheitsversorgung ab. Jedes Kind hat einen eigenen Bedarf — an Kleidungsgröße, Materialverträglichkeit, Interessen und Entwicklungsstand." },
  { icon: Heart, titel: "Würde im Mittelpunkt", text: "Kleidung und Ausstattung sollen Selbstwert stärken — nicht beschämen. Wir wählen bewusst aus und erklären dem Kind, was es bekommt und warum." },
  { icon: Brain, titel: "Klinisch informiert", text: "Unser Team kennt die Hintergründe von Trauma, Vernachlässigung, ADHS und Bindungsstörungen. Das fließt in die Auswahl von Materialien und Ausstattung ein." },
  { icon: Layers, titel: "In den Hilfeprozess integriert", text: "Versorgung ist kein isoliertes Angebot. Wir arbeiten eng mit dem Betreuungsteam zusammen und stimmen alles auf den laufenden Hilfeprozess ab." },
  { icon: Zap, titel: "Schnell bei akutem Bedarf", text: "Notaufnahmen, unvorhergesehene Situationen, Wachstumsschübe — wir reagieren schnell. Erstausstattung innerhalb von 48 Stunden ist für uns Standard." },
  { icon: FileText, titel: "Transparent dokumentiert", text: "Alle Versorgungsleistungen werden sorgfältig dokumentiert — für Jugendamt, Kostenträger und interne Qualitätssicherung." },
];

const prozessSchritte = [
  {
    nr: "01",
    titel: "Bedarfsermittlung",
    text: "Gemeinsam mit dem Betreuungsteam und wenn möglich dem Kind selbst wird der individuelle Bedarf strukturiert erfasst.",
    icon: Target,
  },
  {
    nr: "02",
    titel: "Planung & Auswahl",
    text: "Auf Basis der Bedarfsermittlung wird eine passgenaue Auswahl getroffen — klinisch informiert, altersgerecht, würdevoll.",
    icon: ClipboardList,
  },
  {
    nr: "03",
    titel: "Bereitstellung",
    text: "Schnelle Bereitstellung — direkte Lieferung oder Abholung. Bei Erstausstattung innerhalb von 48 Stunden.",
    icon: Truck,
  },
  {
    nr: "04",
    titel: "Übergabe & Einführung",
    text: "Die Ausstattung wird dem Kind würdevoll übergeben — nicht als Almosen, sondern als selbstverständlicher Teil seiner Versorgung.",
    icon: Heart,
  },
  {
    nr: "05",
    titel: "Anpassung & Dokumentation",
    text: "Regelmäßige Überprüfung des Bedarfs, Anpassung bei Veränderungen und vollständige Dokumentation für Kostenträger.",
    icon: FileText,
  },
];

const fachkraefteInfos = [
  { icon: FileText, titel: "Kostenträger-Dokumentation", text: "Vollständige, jugendhilfe-konforme Dokumentation aller Versorgungsleistungen — direkt verwendbar für Berichte und Abrechnungen." },
  { icon: Zap, titel: "Notaufnahme-Erstausstattung", text: "Bei Notaufnahmen ohne Gepäck stellen wir eine vollständige Erstausstattung innerhalb von 48 Stunden bereit." },
  { icon: Target, titel: "Bedarfsorientierte Beratung", text: "Fachliche Beratung des Betreuungsteams zu Ausstattungsfragen — insbesondere bei Kindern mit speziellen Störungsbildern." },
  { icon: Layers, titel: "Systemintegration", text: "Enge Abstimmung mit Hilfeplan, Betreuungskonzept und therapeutischen Zielen — Versorgung als Teil des Gesamtkonzepts." },
  { icon: Calendar, titel: "Regelmäßige Bedarfsprüfung", text: "Geplante Überprüfungsintervalle sichern, dass die Ausstattung aktuell und bedarfsgerecht bleibt." },
  { icon: Handshake, titel: "Kooperation mit Jugendamt", text: "Direkte Koordination mit dem zuständigen Jugendamt zu Kostenübernahme und Bedarfsfeststellung." },
];

const faqItems = [
  {
    frage: "Wer hat Anspruch auf Versorgungsleistungen von Ankernetz?",
    antwort: "Kinder und Jugendliche in stationären Hilfen des Ankernetz-Systems sowie Kinder mit besonderem Versorgungsbedarf, die im Rahmen ambulanter Hilfen begleitet werden. Im Einzelfall klären wir mit dem Jugendamt, welche Leistungen möglich sind.",
  },
  {
    frage: "Wer trägt die Kosten?",
    antwort: "In der Regel trägt das Jugendamt die Kosten im Rahmen der bewilligten Jugendhilfeleistung. Wir erstellen vollständige Dokumentationen für die Kostenabrechnung. Bei offenen Fragen zur Finanzierung sprechen Sie uns direkt an.",
  },
  {
    frage: "Wie schnell kann eine Erstausstattung bereitgestellt werden?",
    antwort: "Bei Notaufnahmen oder akutem Bedarf stellen wir eine Grundausstattung innerhalb von 48 Stunden bereit. Für umfassendere Ausstattungen stimmen wir einen realistischen Zeitplan mit dem Betreuungsteam ab.",
  },
  {
    frage: "Wie wird der Bedarf ermittelt?",
    antwort: "Wir führen gemeinsam mit dem Betreuungsteam eine strukturierte Bedarfsermittlung durch. Wenn möglich, beziehen wir das Kind selbst ein — altersgerecht und unter Berücksichtigung seiner Vorlieben und Bedürfnisse. Das Störungsbild und der Entwicklungsstand fließen in die Auswahl ein.",
  },
  {
    frage: "Was ist mit speziellen Materialien bei Trauma oder ADHS?",
    antwort: "Ja, wir berücksichtigen klinische Besonderheiten aktiv. Gewichtsdecken, sensorisch verträgliche Kleidungsmaterialien, strukturgebende Spielmaterialien — unser Team ist mit den klinischen Anforderungen vertraut und wählt entsprechend aus.",
  },
  {
    frage: "Wird die Ausstattung regelmäßig überprüft?",
    antwort: "Ja. Kinder wachsen, Bedarfe verändern sich, neue Interessen entstehen. Wir überprüfen in regelmäßigen Abständen und passen an — damit kein Kind dauerhaft mit veralteter oder zu kleiner Ausstattung zurechtkommen muss.",
  },
  {
    frage: "Kann ein Kind bei der Auswahl mitreden?",
    antwort: "Soweit möglich und sinnvoll: ja. Kinder sollten das Gefühl haben, dass ihre Ausstattung ihnen gehört und zu ihnen passt — nicht eine fremdbestimmte Zuweisung ist. Eigene Entscheidungen zu treffen stärkt Selbstwert und Eigenverantwortung.",
  },
  {
    frage: "Wie wird die Versorgung dokumentiert?",
    antwort: "Alle Versorgungsleistungen werden vollständig und nachvollziehbar dokumentiert — mit Datum, Inhalt, Begründung und Kostenzuordnung. Diese Dokumentation ist direkt für Berichte an das Jugendamt und für die Abrechnung mit Kostenträgern verwendbar.",
  },
];

/* ─── Seite ──────────────────────────────────────────────────── */

export default function VersorgungPage() {
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
            <Package size={14} color="#FEC274" />
            <span style={{ fontSize: "13px", color: "#FEC274", fontWeight: 600, letterSpacing: "0.05em" }}>
              VERSORGUNG FÜR KINDER UND JUGENDLICHE IN HILFEN
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px", maxWidth: "780px" }}>
            Versorgung
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#d8e4f0", maxWidth: "640px", lineHeight: 1.7, marginBottom: "16px", fontWeight: 300 }}>
            Mehr als das Nötigste. Würde im Alltag.
          </p>
          <p style={{ fontSize: "1.05rem", color: "rgba(216,228,240,0.85)", maxWidth: "680px", lineHeight: 1.8, marginBottom: "48px" }}>
            Kinder und Jugendliche mit besonderen Bedarfen brauchen mehr als Standardversorgung. Ankernetz stellt sicher, dass jedes Kind die Ausstattung bekommt, die es braucht — angepasst an sein Störungsbild, seinen Alltag und seine Würde.
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
              Bedarf melden <ArrowRight size={16} />
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
      <section style={{ background: "#1a3f6f", color: "#fff", padding: "16px 24px", textAlign: "center" }}>
        <div className="site-container">
          <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.02em" }}>
            Kein Kind in unserer Einrichtung geht ohne das aus, was es braucht. Versorgung ist ein Grundrecht — kein Bonus.
          </p>
        </div>
      </section>

      {/* Warum */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "0.8rem", color: "#6FA3FE", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px", textTransform: "uppercase" }}>Hintergrund</div>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
                Warum Versorgung mehr ist als Logistik
              </h2>
              <p style={{ color: "#4a5568", lineHeight: 1.8, marginBottom: "16px" }}>
                Viele Kinder, die in stationäre Hilfen aufgenommen werden, kommen mit dem sprichwörtlichen Müllsack — zu klein, zerrissen, fremd. Das ist keine Ausnahme, das ist die Regel. Und es hinterlässt Spuren.
              </p>
              <p style={{ color: "#4a5568", lineHeight: 1.8, marginBottom: "16px" }}>
                Gute Kleidung, eigene Schulsachen, ein persönliches Zimmer — das sind keine Nebensächlichkeiten. Sie sind Träger von Botschaften: Du bist es wert. Du gehörst dazu. Du hast einen Platz.
              </p>
              <p style={{ color: "#4a5568", lineHeight: 1.8 }}>
                Ankernetz behandelt Versorgung deshalb als professionellen Auftrag: strukturiert, klinisch informiert, würdevoll und eng eingebettet in den gesamten Hilfeprozess.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {warum.map((w) => {
                const Icon = w.icon;
                return (
                  <div key={w.titel} className="bento-card" style={{
                    background: "#f4f7fb", borderRadius: "14px", padding: "24px", border: "1px solid #e8edf5",
                  }}>
                    <div style={{ background: "#d8e4f0", borderRadius: "8px", padding: "8px", width: "fit-content", marginBottom: "12px" }}>
                      <Icon size={20} color="#1a3f6f" />
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "8px" }}>{w.titel}</h3>
                    <p style={{ color: "#4a5568", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>{w.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Versorgungsbereiche */}
      <section style={{ padding: "80px 24px", background: "#f4f7fb" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "0.8rem", color: "#6FA3FE", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px", textTransform: "uppercase" }}>Versorgungsbereiche</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}>Was Ankernetz Versorgung abdeckt</h2>
            <p style={{ color: "#6b7280", marginTop: "12px", maxWidth: "560px", margin: "12px auto 0", lineHeight: 1.7 }}>
              Von der Kleidung bis zum Zimmer — vollständig, individuell, würdevoll.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {versorgungsBereiche.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.titel} className="bento-card" style={{ background: "#fff", borderRadius: "16px", padding: "28px", border: "1px solid #e8edf5" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <div style={{ background: b.akzent + "14", borderRadius: "10px", padding: "10px" }}>
                      <Icon size={22} color={b.akzent} />
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{b.titel}</h3>
                  </div>
                  <p style={{ color: "#4a5568", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "16px" }}>{b.text}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {b.details.map((d, i) => (
                      <div key={i} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                        <CheckCircle size={14} color={b.akzent} style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: "0.82rem", color: "#6b7280" }}>{d}</span>
                      </div>
                    ))}
                  </div>
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
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}>Unsere Versorgungsleistungen im Überblick</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {leistungen.map((l) => {
              const Icon = l.icon;
              return (
                <div key={l.titel} className="bento-card" style={{
                  background: "#f4f7fb", borderRadius: "14px", padding: "24px", border: "1px solid #e8edf5",
                  display: "flex", gap: "14px", alignItems: "flex-start",
                }}>
                  <div style={{ background: "#d8e4f0", borderRadius: "8px", padding: "8px", flexShrink: 0 }}>
                    <Icon size={20} color="#1a3f6f" />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "6px" }}>{l.titel}</h3>
                    <p style={{ color: "#4a5568", fontSize: "0.84rem", lineHeight: 1.6, margin: 0 }}>{l.text}</p>
                  </div>
                </div>
              );
            })}
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
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#fff" }}>
              Was Ankernetz-Versorgung ausmacht
            </h2>
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
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}>Wie Versorgung bei Ankernetz funktioniert</h2>
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
              <div style={{ fontSize: "0.8rem", color: "#6FA3FE", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px", textTransform: "uppercase" }}>Für Fachkräfte & Teams</div>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
                Verlässlicher Versorgungspartner für Ihr Betreuungsteam
              </h2>
              <p style={{ color: "#4a5568", lineHeight: 1.8, marginBottom: "24px" }}>
                Versorgungsfragen belasten Betreuungsteams oft mehr als nötig. Wir nehmen diese Aufgabe strukturiert ab — dokumentierbar, verlässlich und mit dem Wissen, das für besondere Bedarfe nötig ist.
              </p>
              <Link href="/platzanfrage" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#1a3f6f", color: "#fff",
                padding: "12px 24px", borderRadius: "8px",
                fontWeight: 700, fontSize: "0.9rem", textDecoration: "none",
              }}>
                Versorgungsbedarf melden <ArrowRight size={16} />
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {fachkraefteInfos.map((f) => {
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
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}>FAQ — Versorgung</h2>
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
            <Package size={36} color="#6FA3FE" />
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, marginBottom: "20px", color: "#fff" }}>
            Versorgungsbedarf melden
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(216,228,240,0.85)", maxWidth: "580px", margin: "0 auto 40px", lineHeight: 1.7 }}>
            Ob Erstausstattung, akuter Bedarf oder regelmäßige Begleitung — sprechen Sie uns an. Kein Kind soll ohne das sein, was es braucht.
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
