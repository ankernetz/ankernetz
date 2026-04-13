import Link from "next/link";
import {
  Phone, Brain, Shield, Star, Clock,
  CheckCircle, ArrowRight, Users, FileText,
  Search, Layers, Target, ClipboardList,
  ChevronDown, Lock, Zap, Eye,
  BarChart2, BookOpen, MessageSquare,
  AlertTriangle, UserCheck, Microscope,
  ScanSearch, ListChecks, Lightbulb,
} from "lucide-react";

/* ─── Daten ─────────────────────────────────────────────────── */

const kennzahlen = [
  { wert: "0–21", label: "Jahre — alle Altersgruppen, von Säugling bis jungem Erwachsenen", icon: Users },
  { wert: "< 4 Wo", label: "Durchlaufzeit bei Standard-Clearing", icon: Clock },
  { wert: "ICD-11", label: "Diagnostik auf aktuellem internationalem Standard", icon: Brain },
  { wert: "neutral", label: "Unabhängige Facheinschätzung ohne Interessenkonflikt", icon: Shield },
];

const diagnostikarten = [
  {
    icon: Brain,
    titel: "Intelligenz- & Leistungsdiagnostik",
    text: "Standardisierte IQ-Testung (WISC-V, WPPSI, SON-R), Erfassung von Teilleistungsschwächen (LRS, Dyskalkulie), Hochbegabungsdiagnostik.",
    akzent: "#8b5cf6",
  },
  {
    icon: AlertTriangle,
    titel: "Verhaltens- & Emotionsdiagnostik",
    text: "Erfassung von Verhaltensauffälligkeiten, Emotionsregulation, Internalisierung und Externalisierung über Selbst- und Fremdbeurteilungsbögen (CBCL, SDQ, DISYPS).",
    akzent: "#f97316",
  },
  {
    icon: Shield,
    titel: "Traumadiagnostik",
    text: "Strukturierte Erfassung traumatischer Erlebnisse und PTBS-Symptomatik. Eingesetzte Verfahren: CATS, CPSS, UCLA-PTSD-RI, CRTI — altersadaptiert.",
    akzent: "#ef4444",
  },
  {
    icon: Users,
    titel: "Bindungsdiagnostik",
    text: "Einschätzung der Bindungsqualität und -sicherheit. Für jüngere Kinder: Bindungsgeschichten, AQS. Für ältere: AAI-Ableitung, SSBU.",
    akzent: "#0891b2",
  },
  {
    icon: Eye,
    titel: "Entwicklungsdiagnostik",
    text: "Altersgerechte Entwicklungseinschätzung in den Bereichen Motorik, Sprache, Kognition und Sozialverhalten (Bayley-4, ET 6-6-R, Griffiths).",
    akzent: "#059669",
  },
  {
    icon: Microscope,
    titel: "Persönlichkeits- & Strukturdiagnostik",
    text: "Tiefergehende Einschätzung der Persönlichkeitsstruktur bei Jugendlichen. Einschließlich Identitätsentwicklung, Abwehrmechanismen und Ich-Funktionen.",
    akzent: "#1a3f6f",
  },
  {
    icon: BarChart2,
    titel: "ADHS-Diagnostik",
    text: "Mehrdimensionale Diagnostik auf Basis von Fremd- und Selbsturteil, Verhaltensbeobachtung und standardisierten Tests (CONNERS, DISYPS-ADHS, Beobachtungsbögen).",
    akzent: "#d97706",
  },
  {
    icon: ListChecks,
    titel: "Clearing & Hilfeplangutachten",
    text: "Umfassende Situationsanalyse auf Auftrag des Jugendamts. Einschätzung von Schutzbedarf, Ressourcen und geeigneter Hilfeform — mit klarer Empfehlung.",
    akzent: "#6FA3FE",
  },
];

const clearingPhasen = [
  {
    icon: MessageSquare,
    titel: "Auftragsgespräch",
    text: "Klärung des Auftrags, der Fragestellung und des Zeitrahmens mit dem Jugendamt. Was soll beantwortet werden? Was ist der Anlass?",
    dauer: "Tag 1",
  },
  {
    icon: Users,
    titel: "Erhebungsphase",
    text: "Gespräche mit dem Kind/Jugendlichen, den Eltern, Betreuern und relevanten Bezugspersonen. Parallele Fremdanamnese und Aktensichtung.",
    dauer: "Woche 1–2",
  },
  {
    icon: ScanSearch,
    titel: "Testdiagnostik",
    text: "Durchführung der vereinbarten psychologischen Testverfahren. Verhaltensbeobachtung, projektive Verfahren, strukturierte Interviews.",
    dauer: "Woche 2–3",
  },
  {
    icon: BarChart2,
    titel: "Auswertung & Integration",
    text: "Systematische Auswertung aller erhobenen Daten. Integration zu einem konsistenten diagnostischen Bild. Einschätzung nach ICD-11.",
    dauer: "Woche 3–4",
  },
  {
    icon: FileText,
    titel: "Berichterstellung",
    text: "Schriftlicher Bericht mit Befunden, Einschätzung und konkreten Empfehlungen zur Hilfeform. Verständlich, handlungsorientiert, verwertbar.",
    dauer: "Woche 4",
  },
  {
    icon: Lightbulb,
    titel: "Rückmeldegespräch",
    text: "Gemeinsame Besprechung der Ergebnisse mit Jugendamt, Familie und — altersgerecht — dem Kind selbst. Offene Fragen werden geklärt.",
    dauer: "Nach Bericht",
  },
];

const berichtsarten = [
  {
    icon: FileText,
    titel: "Psychologisches Gutachten",
    text: "Vollständiges diagnostisches Gutachten mit Testbefunden, Einschätzung und Empfehlungen. Für Familiengerichte, Jugendämter und Hilfeplanung verwertbar.",
  },
  {
    icon: ClipboardList,
    titel: "Clearing-Bericht",
    text: "Strukturierte Situationsanalyse mit Einschätzung des Hilfebedarfs und konkreter Empfehlung zur Hilfeform. Basis für fundierte Entscheidungen im Jugendamt.",
  },
  {
    icon: Target,
    titel: "Hilfeplanstellungnahme",
    text: "Fachliche Einschätzung zur Vorbereitung oder Überprüfung eines Hilfeplans. Entwicklungsstand, Ressourcen, Zielerreichung und weiterer Bedarf.",
  },
  {
    icon: Brain,
    titel: "Diagnostischer Kurzbrief",
    text: "Kompakte Einschätzung für dringende Entscheidungen. Prägnant, verwertbar, ohne langen Vorlauf — bei Bedarf innerhalb von 2 Wochen.",
  },
];

const unterschiede = [
  { merkmal: "Wartezeit", ankernetz: "Unter 4 Wochen durch eigene Kapazitäten", andere: "3–12 Monate in externen Stellen" },
  { merkmal: "Vernetzung", ankernetz: "Direkt mit allen Ankernetz-Angeboten", andere: "Isoliert, ohne Systemkenntnis" },
  { merkmal: "Bericht", ankernetz: "Handlungsorientiert, für ASD direkt verwertbar", andere: "Oft akademisch, kaum praxisnah" },
  { merkmal: "Altersbreite", ankernetz: "0–21 Jahre, alle Entwicklungsphasen", andere: "Oft nur bestimmte Altersgruppen" },
  { merkmal: "Transparenz", ankernetz: "Rückmeldegespräch mit allen Beteiligten", andere: "Bericht per Post, kein Gespräch" },
];

const faq = [
  {
    frage: "Was ist der Unterschied zwischen Diagnostik und Clearing?",
    antwort: "Diagnostik bezeichnet die gezielte Erfassung psychologischer Merkmale (z.B. IQ, Störungsbild, Traumatisierung). Clearing ist ein umfassenderer Prozess: Es geht um die Gesamteinschätzung einer Situation — Schutzbedarf, Ressourcen, Hilfebedarf — mit dem Ziel, eine fundierte Empfehlung zur passenden Hilfeform zu liefern. Oft werden beide Elemente kombiniert.",
  },
  {
    frage: "Wer kann eine Diagnostik oder ein Clearing beauftragen?",
    antwort: "Jugendämter, Familiengerichte, Betreuungseinrichtungen und Familien können Diagnostik und Clearing beauftragen. Bei Clearings im Rahmen des SGB VIII erfolgt der Auftrag in der Regel durch das zuständige Jugendamt.",
  },
  {
    frage: "Wie lange dauert ein vollständiges Clearing?",
    antwort: "Ein Standardclearing dauert 3–4 Wochen von Auftragserteilung bis Berichtsfertigstellung. Bei dringenden Fällen ist ein diagnostischer Kurzbrief innerhalb von 2 Wochen möglich. Der genaue Zeitrahmen wird im Auftragsgespräch festgelegt.",
  },
  {
    frage: "Sind die Berichte für Familiengerichte verwertbar?",
    antwort: "Ja. Unsere Gutachten werden nach wissenschaftlichen Standards erstellt und sind gerichtsverwertbar. Sie enthalten Testbefunde, Diagnosen nach ICD-11 und begründete Empfehlungen. Auf Wunsch erläutern wir unsere Einschätzungen auch mündlich vor Gericht.",
  },
  {
    frage: "Werden Kinder und Eltern über die Ergebnisse informiert?",
    antwort: "Ja — das ist uns wichtig. Nach Fertigstellung des Berichts führen wir ein Rückmeldegespräch mit dem Kind/Jugendlichen (altersgerecht), den Eltern und dem Jugendamt. Niemand erfährt Ergebnisse über seinen Kopf hinweg.",
  },
  {
    frage: "Welche Verfahren setzt ihr ein?",
    antwort: "Wir arbeiten ausschließlich mit validierten, normierten Verfahren. Für Intelligenzdiagnostik: WISC-V, WPPSI. Für Verhalten: CBCL, SDQ, DISYPS. Für Trauma: CATS, CPSS. Für Entwicklung: Bayley-4, ET 6-6-R. Die Auswahl richtet sich nach Fragestellung, Alter und Fragestellung.",
  },
  {
    frage: "Kann Diagnostik auch ambulant für externe Kinder erfolgen?",
    antwort: "Ja. Unser Diagnostikangebot steht nicht nur Kindern in Ankernetz-Einrichtungen offen. Familien und Jugendämter können direkt anfragen. Die Abrechnung erfolgt über SGB VIII oder — bei Krankenkassenleistung — über die gesetzliche KV.",
  },
  {
    frage: "Was passiert nach dem Clearing?",
    antwort: "Das Clearing mündet in eine konkrete Empfehlung zur passenden Hilfeform. Wenn der Bedarf in ein Ankernetz-Angebot passt, begleiten wir die Überleitung aktiv. Wenn nicht, vermitteln wir in geeignete externe Einrichtungen. Das Clearing endet nicht mit dem Bericht — es beginnt damit.",
  },
];

/* ─── Seite ─────────────────────────────────────────────────── */

export default function DiagnostikClearingPage() {
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
          position: "absolute", top: "12%", right: "6%",
          width: "480px", height: "480px", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(111,163,254,0.1) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", bottom: "20%", left: "3%",
          width: "300px", height: "300px", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%)",
        }} />

        <div className="site-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
            marginBottom: "1.25rem",
          }}>
            Ankernetz Diagnostik & Clearing
          </p>

          <h1 style={{
            fontSize: "clamp(2.75rem, 6vw, 5rem)", fontWeight: 900,
            color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.03em",
            marginBottom: "1.25rem", maxWidth: "16ch",
          }}>
            Klarheit schafft<br />
            <span style={{ color: "#6FA3FE" }}>die richtige Hilfe.</span>
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.75, maxWidth: "560px", marginBottom: "3rem",
          }}>
            Bevor die richtige Hilfe greifen kann, braucht es ein klares Bild.
            Unser Diagnostik- und Clearingteam liefert fundierte, handlungsorientierte
            Einschätzungen — für Jugendämter, Fachkräfte und Familien.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
            <a href="tel:+4930224543220" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#6FA3FE", color: "white",
              fontWeight: 700, fontSize: "15px",
              padding: "14px 28px", borderRadius: "12px",
              textDecoration: "none",
            }}>
              <Phone size={18} />
              Auftrag anfragen
            </a>
            <Link href="/kontakt" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white", fontWeight: 600, fontSize: "14px",
              padding: "14px 24px", borderRadius: "12px",
              textDecoration: "none",
            }}>
              Kontakt aufnehmen
            </Link>
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
                  <p style={{ fontSize: "1.5rem", fontWeight: 900, color: "white", lineHeight: 1 }}>{k.wert}</p>
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
              Warum Diagnostik & Clearing?
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}>
              Falsche Hilfe kostet Zeit. Fehlende Diagnostik kostet Entwicklung.
            </h2>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px", marginBottom: "1.25rem" }}>
              Im Jugendhilfesystem werden Hilfen häufig ohne ausreichende diagnostische
              Grundlage vergeben. Das Ergebnis: Hilfen, die nicht passen, Kinder, die
              nicht erreicht werden, und Ressourcen, die wirkungslos verpuffen.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px", marginBottom: "1.25rem" }}>
              Gute Diagnostik ist keine Bürokratie — sie ist die Voraussetzung für
              wirksame Hilfe. Sie beantwortet die entscheidenden Fragen: Was hat
              dieses Kind erlebt? Wie wirkt es sich aus? Was braucht es jetzt?
            </p>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px" }}>
              Unser Team liefert Einschätzungen, die nicht im Aktenschrank landen,
              sondern Entscheidungen ermöglichen — klar, verständlich und
              handlungsorientiert.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {[
              { icon: CheckCircle, text: "Validierte, normierte Diagnostikverfahren nach aktuellem Standard" },
              { icon: CheckCircle, text: "ICD-11-orientierte Einschätzung und Diagnosestellung" },
              { icon: CheckCircle, text: "Handlungsorientierte Berichte — direkt für den ASD verwertbar" },
              { icon: CheckCircle, text: "Altersbreite 0–21 Jahre, alle Entwicklungsphasen" },
              { icon: CheckCircle, text: "Gerichtsverwertbare Gutachten auf Anfrage" },
              { icon: CheckCircle, text: "Rückmeldegespräch mit Kind, Eltern und Jugendamt" },
              { icon: CheckCircle, text: "Kurze Wartezeiten durch eigene Diagnostikkapazitäten" },
              { icon: CheckCircle, text: "Direkte Überleitung in passende Hilfen im Ankernetz-Verbund" },
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

      {/* ══ DIAGNOSTIKARTEN ═══════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#1a3f6f", marginBottom: "0.75rem",
            }}>
              Leistungsangebot
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}>
              Was wir diagnostizieren
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", maxWidth: "540px", margin: "0 auto", lineHeight: 1.75 }}>
              Von der Entwicklungsdiagnostik beim Kleinkind bis zur Persönlichkeitsdiagnostik
              beim Jugendlichen — mit validierten Verfahren und klarer Fragestellung.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem",
          }}>
            {diagnostikarten.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.titel} className="bento-card" style={{
                  background: "white", borderRadius: "16px",
                  padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)",
                }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    background: d.akzent + "15",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1rem",
                  }}>
                    <Icon size={22} color={d.akzent} />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.5rem" }}>{d.titel}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.7 }}>{d.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CLEARING-PROZESS ══════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container" style={{ maxWidth: "820px" }}>
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
              Der Clearing-Prozess im Detail
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", maxWidth: "480px", margin: "0.75rem auto 0", lineHeight: 1.75 }}>
              Strukturiert, transparent, zügig. Von der Auftragsklärung bis zur Empfehlung
              in unter vier Wochen.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {clearingPhasen.map((s, i) => {
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
                    {i < clearingPhasen.length - 1 && (
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

      {/* ══ BERICHTSARTEN ═════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }}>
            <div>
              <p style={{
                fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "#1a3f6f", marginBottom: "1rem",
              }}>
                Berichte & Gutachten
              </p>
              <h2 style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800,
                color: "#1a3f6f", lineHeight: 1.25, letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}>
                Das richtige Format für jede Fragestellung
              </h2>
              <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.85 }}>
                Nicht jede Frage braucht ein vollständiges Gutachten — und nicht
                jede Situation verträgt einen Kurzbrief. Wir besprechen im
                Auftragsgespräch, welches Format Ihrer Fragestellung gerecht wird.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {berichtsarten.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.titel} className="bento-card" style={{
                    background: "white", borderRadius: "16px",
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
                    <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "14px", marginBottom: "0.625rem" }}>{b.titel}</p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.75 }}>{b.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ VERGLEICH ═════════════════════════════════════════════ */}
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
              Warum Ankernetz?
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800,
              color: "white", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              Diagnostik im Verbund — nicht auf der Warteliste
            </h2>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.05)", borderRadius: "20px", overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            <div style={{
              display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr",
              background: "rgba(255,255,255,0.08)", padding: "1rem 1.5rem", gap: "1rem",
            }}>
              <p style={{ fontWeight: 700, color: "rgba(255,255,255,0.4)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Merkmal</p>
              <p style={{ fontWeight: 700, color: "#6FA3FE", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Ankernetz</p>
              <p style={{ fontWeight: 700, color: "rgba(255,255,255,0.4)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Externe Stelle</p>
            </div>
            {unterschiede.map((u, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr",
                padding: "1rem 1.5rem", gap: "1rem",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                alignItems: "center",
              }}>
                <p style={{ fontWeight: 600, color: "white", fontSize: "14px" }}>{u.merkmal}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle size={14} color="#4ade80" style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: 1.4 }}>{u.ankernetz}</p>
                </div>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", lineHeight: 1.4 }}>{u.andere}</p>
              </div>
            ))}
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
              Für Jugendämter & Gerichte
            </p>
            <h2 style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.25, letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}>
              Fundiert entscheiden, nicht raten
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.85, marginBottom: "2rem" }}>
              Unsere Berichte sind so geschrieben, dass sie Ihnen die Entscheidung
              erleichtern — nicht erschweren. Klar, begründet, verwertbar.
            </p>
            <a href="tel:+4930224543220" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#1a3f6f", color: "white",
              fontWeight: 700, fontSize: "14px",
              padding: "12px 22px", borderRadius: "10px",
              textDecoration: "none",
            }}>
              <Phone size={16} />
              Auftrag anfragen
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { icon: Zap, text: "Ergebnisse in unter 4 Wochen — auch bei dringendem Bedarf schneller" },
              { icon: FileText, text: "Berichte, die direkt in den Hilfeplan einfließen können" },
              { icon: Search, text: "Klare Diagnosen nach ICD-11 mit Handlungsempfehlung" },
              { icon: UserCheck, text: "Fester Ansprechpartner während des gesamten Prozesses" },
              { icon: Users, text: "Rückmeldegespräch mit Kind, Familie und Jugendamt" },
              { icon: Shield, text: "Neutrale, unabhängige Facheinschätzung ohne Interessenkonflikt" },
              { icon: BookOpen, text: "Gerichtsverwertbare Gutachten auf Anfrage" },
              { icon: Lock, text: "Strenge Vertraulichkeit und DSGVO-konforme Datenverarbeitung" },
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
              Was Jugendämter und Familien fragen
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
          <Search size={36} color="#6FA3FE" style={{ marginBottom: "1.5rem" }} />
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800,
            color: "white", marginBottom: "1.25rem", letterSpacing: "-0.02em", lineHeight: 1.2,
          }}>
            Die richtige Hilfe beginnt mit dem richtigen Bild.
          </h2>
          <p style={{
            fontSize: "15px", color: "rgba(255,255,255,0.6)",
            marginBottom: "2.5rem", lineHeight: 1.75,
          }}>
            Auftrag anfragen oder Informationen für Ihr Jugendamt anfordern.
            Wir melden uns innerhalb von 24 Stunden.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+4930224543220" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#6FA3FE", color: "white",
              fontWeight: 700, fontSize: "15px",
              padding: "15px 30px", borderRadius: "12px",
              textDecoration: "none",
            }}>
              <Phone size={18} />
              Auftrag anfragen
            </a>
            <Link href="/kontakt" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white", fontWeight: 600, fontSize: "14px",
              padding: "15px 26px", borderRadius: "12px",
              textDecoration: "none",
            }}>
              Kontakt aufnehmen
              <ArrowRight size={15} />
            </Link>
            <Link href="/platzanfrage" style={{
              display: "inline-flex", alignItems: "center",
              color: "rgba(255,255,255,0.55)", fontWeight: 500, fontSize: "14px",
              padding: "15px 20px", textDecoration: "none",
            }}>
              Platzanfrage stellen
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
