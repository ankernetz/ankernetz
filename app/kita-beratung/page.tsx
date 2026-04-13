import Link from "next/link";
import {
  Phone, Heart, Shield, Brain, Star, Clock,
  CheckCircle, ArrowRight, Users, FileText,
  MessageSquare, BookOpen, Lightbulb, ChevronDown,
  Zap, Home, Target, Layers, ClipboardList, UserCheck,
  GraduationCap, TreePine, Sun, Coffee, Eye, AlertTriangle,
  Smile, Baby, HandHeart, Award, Building2, Search,
  Megaphone, Handshake, Calendar, MapPin, Video,
} from "lucide-react";

/* ─── Daten ──────────────────────────────────────────────────── */

const kennzahlen = [
  { wert: "vor Ort", label: "Direkt in Ihrer Kita — kein Umweg nötig", icon: MapPin },
  { wert: "0 Bürokratie", label: "Kein Antrag, keine Überweisung erforderlich", icon: Zap },
  { wert: "< 48h", label: "Erste Rückmeldung innerhalb von 48 Stunden", icon: Clock },
  { wert: "vernetzt", label: "Eingebunden ins gesamte Ankernetz-System", icon: Layers },
];

const kernleistungen = [
  {
    icon: Eye,
    titel: "Fallbezogene Beratung",
    text: "Gemeinsame Einschätzung schwieriger Situationen rund um einzelne Kinder — Verhaltensauffälligkeiten, Entwicklungsverzögerungen, familiäre Belastungen. Wir schauen zusammen hin und entwickeln Handlungsoptionen.",
    badge: "Kernleistung",
    badgeColor: "#1a3f6f",
  },
  {
    icon: AlertTriangle,
    titel: "Kindeswohleinschätzung",
    text: "Strukturierte Einschätzung bei Verdacht auf Kindeswohlgefährdung nach § 8a SGB VIII. Wir begleiten Ihr Team bei der Risikoeinschätzung — fachlich fundiert, rechtssicher und ohne Zeitdruck.",
    badge: "§ 8a SGB VIII",
    badgeColor: "#dc2626",
  },
  {
    icon: Users,
    titel: "Kollegiale Supervision",
    text: "Gemeinsame Reflexion belastender Fälle im Team. Supervision für Erzieherinnen und Erzieher, die mit herausfordernden Kindern und Familien arbeiten — strukturiert, entlastend und praxisnah.",
    badge: "Team",
    badgeColor: "#7c3aed",
  },
  {
    icon: GraduationCap,
    titel: "Fortbildung & Qualifizierung",
    text: "Inhouse-Fortbildungen zu Themen wie frühkindliche Traumatisierung, Bindungsstörungen, Verhaltensauffälligkeiten oder Elternkommunikation. Direkt in Ihrer Einrichtung, zugeschnitten auf Ihr Team.",
    badge: "Inhouse",
    badgeColor: "#059669",
  },
  {
    icon: Handshake,
    titel: "Elterngespräche & Mediation",
    text: "Schwierige Elterngespräche begleiten wir auf Wunsch gemeinsam. Bei Konflikten zwischen Kita und Familie vermitteln wir lösungsorientiert — immer mit dem Kindeswohl im Mittelpunkt.",
    badge: "Begleitung",
    badgeColor: "#d97706",
  },
  {
    icon: Layers,
    titel: "Vernetzung & Vermittlung",
    text: "Wenn weiterführende Hilfen nötig sind, vermitteln wir direkt: Frühförderung, Therapeuten, Jugendamt, Familienberatung. Das gesamte Ankernetz steht als Ressource hinter jeder Beratung.",
    badge: "Netzwerk",
    badgeColor: "#0ea5e9",
  },
  {
    icon: ClipboardList,
    titel: "Konzeptberatung",
    text: "Beratung bei der Weiterentwicklung von Schutzkonzepten, Inklusionskonzepten oder Qualitätsentwicklung. Wir bringen therapeutische Fachkenntnisse ein und stärken Ihre interne Kompetenz dauerhaft.",
    badge: "Qualität",
    badgeColor: "#6d28d9",
  },
  {
    icon: MessageSquare,
    titel: "Telefon- & Onlineberatung",
    text: "Nicht jede Frage braucht einen Besuch vor Ort. Für schnelle Einschätzungen, Zwischenfragen oder erste Orientierung stehen wir per Telefon und Videocall zur Verfügung — unkompliziert und ohne Wartezeit.",
    badge: "Flexibel",
    badgeColor: "#1a3f6f",
  },
  {
    icon: Baby,
    titel: "Frühkindliche Entwicklung",
    text: "Beratung bei Fragen zur frühkindlichen Entwicklung: Bindungsverhalten, Schlaf- und Essprobleme, Sprachentwicklung, sensorische Besonderheiten. Für Krippen und Kitas mit Kindern von 0 bis 6 Jahren.",
    badge: "0–6 Jahre",
    badgeColor: "#be185d",
  },
];

const themen = [
  { icon: Brain, titel: "Verhaltensauffälligkeiten", text: "Aggressives Verhalten, Rückzug, Trotzphasen, Hyperaktivität — wenn ein Kind den Alltag der Gruppe sprengt oder sich selbst verliert." },
  { icon: Shield, titel: "Kindeswohlgefährdung", text: "Auffälligkeiten, die auf Vernachlässigung, Misshandlung oder häusliche Gewalt hindeuten. Sichere Einschätzung und klare nächste Schritte." },
  { icon: Heart, titel: "Trauernde & traumatisierte Kinder", text: "Kinder, die Verluste, Trennungen oder belastende Erlebnisse verarbeiten. Praxistipps für den Kita-Alltag." },
  { icon: Users, titel: "Elternkonflikte & Hochstreit", text: "Trennungssituationen, Rosenkrieg, Loyalitätskonflikte — wenn Elternkonflikte in der Kita sichtbar werden." },
  { icon: Star, titel: "Besonders begabte Kinder", text: "Hochbegabung, unerfüllte Potenziale, Langeweile und Unterforderung als Ursache von Auffälligkeiten." },
  { icon: Baby, titel: "Bindungsstörungen", text: "Unsichere oder desorganisierte Bindungsmuster, Bindungslosigkeit, häufige Pflegestellenwechsel in der Vorgeschichte." },
  { icon: Smile, titel: "Entwicklungsverzögerungen", text: "Sprache, Motorik, Kognition — wenn Kinder deutlich hinter dem Entwicklungsdurchschnitt liegen und weiterführende Einschätzung nötig ist." },
  { icon: AlertTriangle, titel: "Teambelastung & Burnout", text: "Wenn das Team unter chronischer Belastung leidet, Konflikte entstehen oder die Freude an der Arbeit nachlässt." },
  { icon: Building2, titel: "Inklusion & Besondere Bedarfe", text: "Kinder mit diagnostizierten oder vermuteten Beeinträchtigungen: Integration, Förderpläne, Zusammenarbeit mit Therapeuten und Frühförderstellen." },
];

const besonderheiten = [
  { icon: MapPin, titel: "Direkt vor Ort", text: "Wir kommen in Ihre Kita — kein Pendelaufwand, keine Distanz zum Alltag. Die Beratung findet dort statt, wo die Fragen entstehen." },
  { icon: Shield, titel: "Therapeutisch fundiert", text: "Unser Team vereint kinder- und jugendpsychiatrische, psychotherapeutische und sozialpädagogische Expertise — nicht nur Beratung, sondern Fachkompetenz." },
  { icon: Zap, titel: "Schnell und unbürokratisch", text: "Kein langer Beantragungsprozess, kein Warten auf Kostenzusagen. Ein Anruf oder eine E-Mail reichen für den Einstieg." },
  { icon: Heart, titel: "Vertraulich und kollegial", text: "Wir verstehen uns als Fachkollegen, nicht als externe Kontrollinstanz. Alles was besprochen wird, bleibt im Rahmen professioneller Vertraulichkeit." },
  { icon: Layers, titel: "Systemisch vernetzt", text: "Wenn eine Situation mehr braucht als Beratung, vermitteln wir direkt: Frühförderung, Kinder- und Jugendpsychiatrie, Familienberatung, Jugendamt." },
  { icon: Award, titel: "Bedarfsorientiert", text: "Wir passen uns Ihren Bedürfnissen an — einmalige Fallberatung, regelmäßige Supervision, Jahresvertrag mit fester Kontingent-Stundenzahl, alles möglich." },
];

const prozessSchritte = [
  {
    nr: "01",
    titel: "Kontaktaufnahme",
    text: "Kita-Leitung oder Fachkraft nimmt Kontakt auf — per Telefon, E-Mail oder über das Platzanfrage-Formular. Kurze Schilderung des Anliegens reicht.",
    icon: Phone,
  },
  {
    nr: "02",
    titel: "Erstgespräch",
    text: "Kostenloses Erstgespräch zur Klärung: Was ist das Anliegen? Welches Format passt? Vor Ort, telefonisch oder Videocall — nach Wunsch.",
    icon: MessageSquare,
  },
  {
    nr: "03",
    titel: "Beratung / Supervision",
    text: "Fallbesprechung, Teamsupervision oder Fortbildung — je nach Bedarf. Wir kommen in Ihre Kita oder Sie nutzen unsere Online-Formate.",
    icon: Users,
  },
  {
    nr: "04",
    titel: "Maßnahmenplan",
    text: "Gemeinsame Entwicklung konkreter Handlungsschritte: Was kann das Team selbst tun? Welche externen Unterstützungen sind sinnvoll?",
    icon: ClipboardList,
  },
  {
    nr: "05",
    titel: "Vernetzung",
    text: "Wenn nötig: direkte Einbindung von Frühförderstellen, Jugendamt, Familienberatung oder Kinder- und Jugendpsychiatrie. Wir begleiten die Übergabe.",
    icon: Layers,
  },
];

const fachkraefteLeistungen = [
  { icon: FileText, titel: "§ 8a-Beratung", text: "Fachberatung zur Risikoeinschätzung Kindeswohlgefährdung — strukturiert, dokumentierbar, rechtssicher." },
  { icon: GraduationCap, titel: "Inhouse-Fortbildungen", text: "Maßgeschneiderte Seminare für Ihr Team zu frühkindlicher Traumatisierung, Bindung, Elternarbeit u.v.m." },
  { icon: Users, titel: "Teamsupervision", text: "Regelmäßige Supervision für Kita-Teams — entlastend, reflektierend, stärkend." },
  { icon: ClipboardList, titel: "Konzeptbegleitung", text: "Unterstützung bei der Entwicklung oder Überarbeitung von Schutzkonzepten und Qualitätsstandards." },
  { icon: Handshake, titel: "Kooperationsvereinbarung", text: "Langfristige Zusammenarbeit mit Stundenkontingent — planbar, verlässlich, kostentransparent." },
  { icon: Layers, titel: "Netzwerkarbeit", text: "Direkte Schnittstelle zum Jugendamt, Frühförderstellen, Kinder- und Jugendpsychiatrie und weiteren Fachstellen." },
  { icon: Video, titel: "Online-Beratung", text: "Kurzberatungen und Supervision auch per Videocall — für schnelle Fragen ohne Terminaufwand." },
  { icon: Calendar, titel: "Regelmäßige Sprechstunde", text: "Feste Sprechstundenzeiten für Kitas mit laufender Begleitung — verlässlicher Ansprechpartner für Ihr Team." },
];

const faqItems = [
  {
    frage: "Kostet die Kita-Beratung etwas?",
    antwort: "Ein Erstgespräch ist für Sie kostenlos. Für regelmäßige Beratung, Supervision oder Fortbildungen arbeiten wir auf Basis von Vereinbarungen mit Trägern oder Kommunen. In vielen Fällen übernehmen Jugendämter oder Träger die Kosten. Sprechen Sie uns an — wir finden eine Lösung.",
  },
  {
    frage: "Wie schnell kann Ankernetz in unsere Kita kommen?",
    antwort: "In dringenden Fällen sind wir innerhalb von 24–48 Stunden erreichbar. Für geplante Supervisionen oder Fortbildungen vereinbaren wir Termine nach Ihrem Rhythmus — in der Regel innerhalb einer Woche.",
  },
  {
    frage: "Wie gehe ich vor, wenn ich Verdacht auf Kindeswohlgefährdung habe?",
    antwort: "Rufen Sie uns direkt an. Wir begleiten Sie durch die strukturierte Risikoeinschätzung nach § 8a SGB VIII — dokumentierbar, transparent und ohne Druck. Wir beraten auch, ob und wann eine Meldung an das Jugendamt sinnvoll ist.",
  },
  {
    frage: "Kann auch ein einzelner Erzieher Beratung anfordern, oder muss die Leitung anfragen?",
    antwort: "Beides ist möglich. Einzelne Fachkräfte können bei uns anrufen und eine Kurzberatung erhalten. Für umfangreichere Maßnahmen empfehlen wir, die Kita-Leitung einzubeziehen — aber der erste Kontakt kann von jedem Teammitglied kommen.",
  },
  {
    frage: "Wie läuft eine Supervision ab?",
    antwort: "Nach einer kurzen Orientierungsphase bringen Teammitglieder konkrete Situationen oder Fälle ein. Gemeinsam analysieren wir das Geschehen aus verschiedenen Blickwinkeln und entwickeln Handlungsoptionen. Die Sitzungen dauern in der Regel 90–120 Minuten.",
  },
  {
    frage: "Sind die Gespräche vertraulich?",
    antwort: "Ja. Was in der Beratung besprochen wird, bleibt im Rahmen der professionellen Verschwiegenheit. Ausnahmen gelten nur dort, wo gesetzliche Meldepflichten greifen — das besprechen wir transparent mit Ihnen.",
  },
  {
    frage: "Können Sie auch online beraten?",
    antwort: "Ja. Für Kurzberatungen, Zwischenfragen und Folgebesprechungen stehen wir per Telefon und verschlüsseltem Videocall zur Verfügung. Fortbildungen können ebenfalls als Webinar angeboten werden.",
  },
  {
    frage: "Was unterscheidet Ankernetz von der Fachberatung durch das Jugendamt?",
    antwort: "Wir sind kein Teil des öffentlichen Systems — das ermöglicht eine offenere, kollegiale Beratung ohne den Eindruck von Kontrolle. Gleichzeitig arbeiten wir eng mit dem Jugendamt zusammen, wenn es sinnvoll ist. Wir ergänzen das öffentliche System, wir ersetzen es nicht.",
  },
];

/* ─── Seite ──────────────────────────────────────────────────── */

export default function KitaBeratungPage() {
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
        {/* Hintergrund-Kreis */}
        <div style={{
          position: "absolute", top: "-80px", right: "-80px",
          width: "500px", height: "500px",
          borderRadius: "50%",
          background: "rgba(111,163,254,0.07)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-120px", left: "-60px",
          width: "400px", height: "400px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }} />

        <div className="site-container" style={{ position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(5,150,105,0.2)",
            border: "1px solid rgba(5,150,105,0.4)",
            borderRadius: "24px", padding: "6px 16px",
            marginBottom: "28px",
          }}>
            <Building2 size={14} color="#34d399" />
            <span style={{ fontSize: "13px", color: "#34d399", fontWeight: 600, letterSpacing: "0.05em" }}>
              FACHBERATUNG FÜR KINDERTAGESEINRICHTUNGEN
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px", maxWidth: "780px" }}>
            Beratung in Kitas
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#d8e4f0", maxWidth: "640px", lineHeight: 1.7, marginBottom: "16px", fontWeight: 300 }}>
            Früh erkennen. Gezielt begleiten.
          </p>
          <p style={{ fontSize: "1.05rem", color: "rgba(216,228,240,0.85)", maxWidth: "680px", lineHeight: 1.8, marginBottom: "48px" }}>
            Kitas sind oft der erste Ort, an dem Auffälligkeiten sichtbar werden. Unser therapeutisch fundiertes Beratungsangebot stärkt Kita-Fachkräfte im Umgang mit herausfordernden Situationen — und schützt Kinder frühzeitig.
          </p>

          {/* Kennzahlen */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px", maxWidth: "780px" }}>
            {kennzahlen.map((k) => {
              const Icon = k.icon;
              return (
                <div key={k.wert} style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "12px",
                  padding: "20px 16px",
                  backdropFilter: "blur(8px)",
                }}>
                  <Icon size={20} color="#6FA3FE" style={{ marginBottom: "10px" }} />
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: "4px" }}>{k.wert}</div>
                  <div style={{ fontSize: "0.78rem", color: "rgba(216,228,240,0.8)", lineHeight: 1.4 }}>{k.label}</div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "40px" }}>
            <Link href="/platzanfrage" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#6FA3FE", color: "#fff",
              padding: "14px 28px", borderRadius: "8px",
              fontWeight: 700, fontSize: "0.95rem",
              textDecoration: "none",
            }}>
              Beratung anfragen <ArrowRight size={16} />
            </Link>
            <Link href="/kontakt" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "transparent",
              border: "2px solid rgba(255,255,255,0.35)",
              color: "#fff",
              padding: "14px 28px", borderRadius: "8px",
              fontWeight: 600, fontSize: "0.95rem",
              textDecoration: "none",
            }}>
              <Phone size={16} /> Direkt anrufen
            </Link>
          </div>
        </div>
      </section>

      {/* Niedrigschwellig-Banner */}
      <section style={{ background: "#059669", color: "#fff", padding: "16px 24px", textAlign: "center" }}>
        <div className="site-container">
          <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.02em" }}>
            Kein Antrag. Keine Kostenzusage vorab. Kein langer Vorlauf. — Ein Anruf reicht für den ersten Kontakt.
          </p>
        </div>
      </section>

      {/* Einleitung */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "0.8rem", color: "#6FA3FE", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px", textTransform: "uppercase" }}>Warum Kita-Beratung</div>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
                Kita-Fachkräfte brauchen professionelle Rückendeckung
              </h2>
              <p style={{ color: "#4a5568", lineHeight: 1.8, marginBottom: "16px" }}>
                Erzieherinnen und Erzieher leisten täglich Außerordentliches. Sie beobachten Kinder aus nächster Nähe, nehmen Veränderungen wahr — und stehen dabei oft ohne direkte fachliche Unterstützung da. Kindeswohlgefährdung einzuschätzen, schwierige Elterngespräche zu führen, ein verhaltensauffälliges Kind zu begleiten: Das ist anspruchsvolle Facharbeit.
              </p>
              <p style={{ color: "#4a5568", lineHeight: 1.8, marginBottom: "16px" }}>
                Ankernetz schließt diese Lücke. Wir sind nicht die Aufsichtsbehörde — wir sind Fachkollegen, die auf Augenhöhe beraten, entlasten und stärken. Therapeutisch fundiert, praxisnah, ohne Umwege.
              </p>
              <p style={{ color: "#4a5568", lineHeight: 1.8 }}>
                Vom Einzelfall bis zur Teamentwicklung: Wir passen uns Ihrem Bedarf an und bringen die Kompetenz mit, die in Ihrem Team gebraucht wird.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Kitas sind rechtlich verpflichtet, Kindeswohlgefährdung einzuschätzen — aber ohne ausreichende Unterstützung",
                "Verhaltensauffällige Kinder belasten das gesamte Team und überfordern oft einzelne Fachkräfte",
                "Elterngespräche in Konfliktsituationen erfordern Techniken, die in der Ausbildung kaum vermittelt werden",
                "Viele Hilfen werden zu spät eingeleitet, weil keine fachliche Einschätzung zur Verfügung steht",
                "Kita-Teams leiden zunehmend unter Burnout, Überlastung und Fachkräftemangel",
              ].map((p, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle size={18} color="#059669" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ color: "#4a5568", fontSize: "0.95rem", lineHeight: 1.6 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kernleistungen */}
      <section style={{ padding: "80px 24px", background: "#f4f7fb" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "0.8rem", color: "#6FA3FE", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px", textTransform: "uppercase" }}>Leistungsangebot</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}>Was wir für Ihre Kita leisten</h2>
            <p style={{ color: "#6b7280", marginTop: "12px", maxWidth: "560px", margin: "12px auto 0", lineHeight: 1.7 }}>
              Von der Einzelfallberatung bis zur Teamentwicklung — bedarfsorientiert, praxisnah, sofort einsetzbar.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {kernleistungen.map((l) => {
              const Icon = l.icon;
              return (
                <div key={l.titel} className="bento-card" style={{ background: "#fff", borderRadius: "16px", padding: "28px", border: "1px solid #e8edf5" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ background: "#f4f7fb", borderRadius: "10px", padding: "10px", flexShrink: 0 }}>
                      <Icon size={22} color="#1a3f6f" />
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px", flexWrap: "wrap" }}>
                        <h3 style={{ fontWeight: 700, fontSize: "1rem", margin: 0 }}>{l.titel}</h3>
                        <span style={{
                          fontSize: "0.68rem", fontWeight: 700, padding: "2px 8px",
                          borderRadius: "12px", letterSpacing: "0.04em",
                          background: l.badgeColor + "18",
                          color: l.badgeColor,
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

      {/* Themen */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "0.8rem", color: "#6FA3FE", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px", textTransform: "uppercase" }}>Beratungsthemen</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}>Womit kommen Kitas zu uns?</h2>
            <p style={{ color: "#6b7280", marginTop: "12px", maxWidth: "560px", margin: "12px auto 0", lineHeight: 1.7 }}>
              Diese Themen begegnen uns am häufigsten — aber jede Situation ist individuell.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {themen.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.titel} className="bento-card" style={{
                  background: "#f4f7fb",
                  borderRadius: "14px",
                  padding: "24px",
                  border: "1px solid #e8edf5",
                  display: "flex", gap: "14px", alignItems: "flex-start",
                }}>
                  <div style={{ background: "#d8e4f0", borderRadius: "8px", padding: "8px", flexShrink: 0 }}>
                    <Icon size={20} color="#1a3f6f" />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "6px" }}>{t.titel}</h3>
                    <p style={{ color: "#4a5568", fontSize: "0.84rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
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
              Was Ankernetz-Beratung ausmacht
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
            {besonderheiten.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.titel} className="bento-card" style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "14px",
                  padding: "28px",
                  backdropFilter: "blur(8px)",
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
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}>So läuft die Zusammenarbeit ab</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0" }}>
            {prozessSchritte.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.nr} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", padding: "0 8px" }}>
                  {i < prozessSchritte.length - 1 && (
                    <div style={{
                      position: "absolute", top: "28px", left: "calc(50% + 28px)", right: "-calc(50% - 28px)",
                      height: "2px", background: "#d8e4f0", width: "calc(100% - 56px)", zIndex: 0,
                    }} />
                  )}
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "50%",
                    background: "#1a3f6f", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.75rem", fontWeight: 800, marginBottom: "16px",
                    position: "relative", zIndex: 1, flexShrink: 0,
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
              <div style={{ fontSize: "0.8rem", color: "#6FA3FE", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px", textTransform: "uppercase" }}>Für Leitungen & Träger</div>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
                Ankernetz als verlässlicher Fachpartner für Ihre Einrichtung
              </h2>
              <p style={{ color: "#4a5568", lineHeight: 1.8, marginBottom: "24px" }}>
                Wir bieten Kitas, Trägern und kommunalen Trägern die Möglichkeit, eine strukturierte Kooperationsvereinbarung zu schließen. Mit festem Stundenkontingent, verlässlichem Ansprechpartner und planbaren Kosten.
              </p>
              <Link href="/platzanfrage" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#1a3f6f", color: "#fff",
                padding: "12px 24px", borderRadius: "8px",
                fontWeight: 700, fontSize: "0.9rem",
                textDecoration: "none",
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
                    background: "#f4f7fb", borderRadius: "12px", padding: "18px",
                    border: "1px solid #e8edf5",
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
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}>FAQ — Kita-Beratung</h2>
          </div>
          <div style={{ maxWidth: "820px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqItems.map((f, i) => (
              <details key={i} style={{ background: "#fff", border: "1px solid #e8edf5", borderRadius: "12px", overflow: "hidden" }}>
                <summary style={{
                  padding: "20px 24px",
                  fontWeight: 700, fontSize: "0.95rem",
                  cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  listStyle: "none",
                  userSelect: "none",
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
        color: "#fff",
        textAlign: "center",
      }}>
        <div className="site-container">
          <div style={{ background: "rgba(111,163,254,0.15)", borderRadius: "50%", width: "72px", height: "72px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <Building2 size={36} color="#6FA3FE" />
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, marginBottom: "20px", color: "#fff" }}>
            Ihre Kita braucht Unterstützung?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(216,228,240,0.85)", maxWidth: "600px", margin: "0 auto 40px", lineHeight: 1.7 }}>
            Kein langer Vorlauf, kein Antrag. Nehmen Sie einfach Kontakt auf — wir melden uns innerhalb von 48 Stunden.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/platzanfrage" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#6FA3FE", color: "#fff",
              padding: "16px 32px", borderRadius: "8px",
              fontWeight: 700, fontSize: "1rem",
              textDecoration: "none",
            }}>
              Jetzt anfragen <ArrowRight size={18} />
            </Link>
            <Link href="/kontakt" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "transparent",
              border: "2px solid rgba(255,255,255,0.35)",
              color: "#fff",
              padding: "16px 32px", borderRadius: "8px",
              fontWeight: 600, fontSize: "1rem",
              textDecoration: "none",
            }}>
              <Phone size={18} /> Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
