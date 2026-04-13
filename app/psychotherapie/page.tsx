import Link from "next/link";
import {
  Phone, Heart, Shield, Brain, Star, Clock,
  CheckCircle, ArrowRight, Users, FileText,
  Stethoscope, HandHeart, UserCheck, ClipboardList,
  ChevronDown, Lock, Activity, Zap,
  BookOpen, Target, Layers, MessageSquare,
  AlertTriangle, Eye, Smile, GraduationCap,
  RefreshCw, Sparkles, ThumbsUp,
} from "lucide-react";

/* ─── Daten ─────────────────────────────────────────────────── */

const kennzahlen = [
  { wert: "Kassensitz", label: "Keine Privatkosten — abgerechnet über gesetzliche Krankenversicherung", icon: Shield },
  { wert: "KJP", label: "Approbierte Kinder- und Jugendlichenpsychotherapeuten", icon: Brain },
  { wert: "direkt", label: "Eingebunden in das Ankernetz-Betreuungsnetz", icon: Layers },
  { wert: "kurz", label: "Kurze Wartezeiten durch eigene interne Kapazitäten", icon: Zap },
];

const stoerungsbilder = [
  { icon: Brain, titel: "Trauma-Folgestörungen (PTBS)", text: "Einfache und komplexe PTBS nach Misshandlung, Missbrauch, Vernachlässigung oder anderen traumatischen Erlebnissen. Spezialisierung auf entwicklungstraumatische Störungsbilder.", akzent: "#8b5cf6" },
  { icon: Heart, titel: "Depressionen & affektive Störungen", text: "Depressive Episoden, Dysthymie, bipolare Entwicklungen und emotionale Regulationsstörungen bei Kindern und Jugendlichen.", akzent: "#e11d48" },
  { icon: AlertTriangle, titel: "Angststörungen", text: "Trennungsangst, soziale Phobie, generalisierte Angststörung, Panikstörung, spezifische Phobien und Schulangst.", akzent: "#f97316" },
  { icon: Activity, titel: "ADHS & Aufmerksamkeitsstörungen", text: "Diagnostik und Behandlung von ADHS mit und ohne Hyperaktivität. Verhaltenstherapeutische Interventionen, Elternberatung, Schulkooperation.", akzent: "#0891b2" },
  { icon: Shield, titel: "Verhaltensauffälligkeiten & Störungen des Sozialverhaltens", text: "Aggressives Verhalten, Dissozialität, Oppositionelles Trotzverhalten (ODD) als Ausdruck von Belastungserleben und Regulationsproblemen.", akzent: "#ef4444" },
  { icon: Eye, titel: "Selbstverletzendes Verhalten", text: "Nicht-suizidales selbstverletzendes Verhalten, Suizidgedanken und -handlungen als Krisenzeichen — im spezialisierten therapeutischen Setting.", akzent: "#dc2626" },
  { icon: Users, titel: "Bindungs- und Beziehungsstörungen", text: "Reaktive Bindungsstörungen und andere Störungen des Bindungsverhaltens, die therapeutische Arbeit an frühen Beziehungserfahrungen erfordern.", akzent: "#1a3f6f" },
  { icon: Smile, titel: "Somatoforme & psychosomatische Störungen", text: "Körperliche Beschwerden ohne ausreichend erklärenden Organbefund als Ausdruck psychischer Belastung — bei Kindern und Jugendlichen häufig unterschätzt.", akzent: "#059669" },
];

const verfahren = [
  {
    icon: Brain,
    titel: "Kognitive Verhaltenstherapie (KVT)",
    text: "Evidenzbasiertes Standardverfahren. Arbeit an dysfunktionalen Denk- und Verhaltensmustern, Aufbau von Bewältigungsstrategien und Emotionsregulation.",
    kassensitz: true,
  },
  {
    icon: Shield,
    titel: "Traumafokussierte KVT (TF-KVT)",
    text: "Spezialisiertes Verfahren bei PTBS und komplexen Traumatisierungen. Stabilisierung, Traumabearbeitung und Integration in klar strukturierten Phasen.",
    kassensitz: true,
  },
  {
    icon: RefreshCw,
    titel: "EMDR",
    text: "Eye Movement Desensitization and Reprocessing. Effektives Verfahren zur Verarbeitung traumatischer Erinnerungen. Zugelassen für Erwachsene, adaptiert für Kinder und Jugendliche.",
    kassensitz: true,
  },
  {
    icon: Heart,
    titel: "Bindungsbasierte Therapieverfahren",
    text: "Therapiemethoden, die gezielt an frühen Bindungserfahrungen ansetzen — für Kinder mit Bindungsstörungen und desorganisierten Bindungsmustern.",
    kassensitz: false,
  },
  {
    icon: Users,
    titel: "Eltern- und Familientherapie",
    text: "Einbeziehung der Familie als Ressource und Wirkfaktor. Elterngespräche, Erziehungsberatung, Kommunikationsarbeit und systemische Interventionen.",
    kassensitz: true,
  },
  {
    icon: Sparkles,
    titel: "Spieltherapeutische Methoden",
    text: "Für Kinder, die noch nicht verbal kommunizieren können. Symbolspiel, Sandspiel, kreative Medien als therapeutischer Zugang.",
    kassensitz: false,
  },
  {
    icon: Activity,
    titel: "DBT-A (Dialektisch-Behaviorale Therapie)",
    text: "Adaptiertes DBT für Jugendliche — speziell bei Borderline-Entwicklungen, selbstverletzendem Verhalten und schwerer Emotionsdysregulation.",
    kassensitz: true,
  },
  {
    icon: BookOpen,
    titel: "Psychoedukation",
    text: "Verständnis für das eigene Erleben entwickeln. Störungsaufklärung für Kinder, Jugendliche und Eltern als Basis jeder therapeutischen Arbeit.",
    kassensitz: false,
  },
];

const therapeutischerProzess = [
  {
    nr: "01",
    titel: "Anmeldung & Erstgespräch",
    icon: Phone,
    text: "Anmeldung über das Jugendamt, eine Einrichtung, die Familie oder direkt. Probatorische Sitzungen zur gegenseitigen Einschätzung — ohne Verpflichtung.",
    dauer: "Woche 1–2",
  },
  {
    nr: "02",
    titel: "Diagnostik & Einschätzung",
    icon: ClipboardList,
    text: "Systematische Diagnostik mit validierten Verfahren. ICD-11-orientierte Einschätzung, Anamnese und Erstellung des therapeutischen Behandlungsplans.",
    dauer: "Woche 2–4",
  },
  {
    nr: "03",
    titel: "Antrag & Bewilligung",
    icon: FileText,
    text: "Beantragung der Kostenübernahme bei der Krankenkasse. Unser Team übernimmt die gesamte Bürokratie — für Familien und Jugendämter.",
    dauer: "Parallel",
  },
  {
    nr: "04",
    titel: "Therapiebeginn",
    icon: Brain,
    text: "Wöchentliche Einzelsitzungen à 50 Minuten. Ergänzt durch Elterngespräche, Gruppenangebote und — wo sinnvoll — Koordination mit dem Betreuungsteam.",
    dauer: "Ab Monat 1",
  },
  {
    nr: "05",
    titel: "Vernetzung im System",
    icon: Layers,
    text: "Regelmäßige Fallbesprechungen mit Wohngruppenpädagogen, Lehrern, Jugendamtsfachkräften. Therapie und Alltag sprechen eine Sprache.",
    dauer: "Laufend",
  },
  {
    nr: "06",
    titel: "Abschluss & Weiterversorgung",
    icon: ArrowRight,
    text: "Gezielter Therapieabschluss mit Stabilisierungsplan. Übergabe in ambulante Nachsorge oder Weiterbehandlung — kein abruptes Ende.",
    dauer: "Ab Monat 12",
  },
];

const unterschiede = [
  {
    merkmal: "Kassensitz",
    ankernetz: "Ja — abgerechnet über gesetzliche KV",
    andere: "Oft nur Privatpraxis oder Selbstzahler",
    plus: true,
  },
  {
    merkmal: "Vernetzung mit Wohngruppe",
    ankernetz: "Direkt — kurze Wege, täglicher Austausch",
    andere: "Externe Praxis — oft kein Kontakt",
    plus: true,
  },
  {
    merkmal: "Wartezeit",
    ankernetz: "Kurz durch eigene Kapazitäten",
    andere: "6–18 Monate in externen Praxen",
    plus: true,
  },
  {
    merkmal: "Fallbesprechungen",
    ankernetz: "Wöchentlich intern möglich",
    andere: "Selten, aufwendig zu koordinieren",
    plus: true,
  },
  {
    merkmal: "Kriseninterventionen",
    ankernetz: "Direkt, ohne Umwege",
    andere: "Termingebunden, keine Flexibilität",
    plus: true,
  },
];

const faq = [
  {
    frage: "Wer übernimmt die Kosten der Psychotherapie?",
    antwort: "Wir verfügen über einen Kassensitz. Das bedeutet: Die Therapie wird über die gesetzliche Krankenversicherung abgerechnet. Für Familien entstehen keine Eigenkosten. Bei Kindern und Jugendlichen in Jugendhilfeleistungen kann die Kostenübernahme auch über SGB VIII erfolgen — wir klären das gemeinsam.",
  },
  {
    frage: "Wie lange dauert eine Psychotherapie?",
    antwort: "Das hängt von Störungsbild und Therapieziel ab. Kurztherapien umfassen 12–24 Stunden, Langzeittherapien bis zu 80 Stunden und mehr. Bei komplexen Traumatisierungen ist eine längere Therapiedauer in der Regel erforderlich. Die Kassenleistung sieht verschiedene Kontingente vor.",
  },
  {
    frage: "Ab welchem Alter können Kinder in Therapie?",
    antwort: "Wir arbeiten mit Kindern ab dem Vorschulalter (ca. 5 Jahre) bis zum Ende der Jugendhilfeleistung. Für sehr junge Kinder setzen wir spieltherapeutische und bindungsbasierte Methoden ein. Säuglinge und Kleinkinder werden in unserem Frühe-Hilfen-Angebot begleitet.",
  },
  {
    frage: "Wie ist die Therapie mit dem Alltag in der Wohngruppe vernetzt?",
    antwort: "Das ist einer unserer zentralen Vorteile: Therapeuten und Pädagogen tauschen sich regelmäßig aus — in kollegialen Fallbesprechungen, im direkten Gespräch und durch gemeinsame Behandlungspläne. Was in der Therapiestunde bearbeitet wird, kann im Alltag aufgegriffen und geübt werden.",
  },
  {
    frage: "Können auch ambulante Kinder (ohne Heimunterbringung) in Therapie?",
    antwort: "Ja. Unser Therapieangebot steht nicht nur Kindern in Ankernetz-Einrichtungen offen. Familien, Jugendliche und Kinder aus dem Berliner Umfeld können sich direkt anmelden. Der Kassensitz gilt für alle gesetzlich Versicherten.",
  },
  {
    frage: "Werden Eltern in die Therapie einbezogen?",
    antwort: "Ja — in aller Regel. Elterngespräche sind fester Bestandteil jeder Kinder- und Jugendlichenpsychotherapie. Bei Bedarf bieten wir auch Eltern-Kind-Therapie oder spezifische Elternberatung an. Die Einbeziehung der Familie verbessert die Therapieergebnisse nachweislich.",
  },
  {
    frage: "Was ist der Unterschied zwischen Psychotherapie und heilpädagogischer Förderung?",
    antwort: "Psychotherapie zielt auf die Behandlung psychischer Störungen — sie ist krankenkassenfinanziert und an ein Störungsbild geknüpft. Heilpädagogische Förderung unterstützt Entwicklung und Alltagskompetenz — sie ist pädagogisch ausgerichtet und oft jugendhilfefinanziert. Beides kann sich sinnvoll ergänzen.",
  },
  {
    frage: "Wie verläuft eine typische Therapiestunde?",
    antwort: "50 Minuten, wöchentlich. Inhalt und Methode richten sich nach Alter, Störungsbild und aktuellem Befinden des Kindes. Bei Jüngeren arbeiten wir viel mit Spiel, Symbolik und kreativen Medien. Bei Jugendlichen stehen Gespräch, Verhaltensanalysen und Skill-Training im Vordergrund.",
  },
];

/* ─── Seite ─────────────────────────────────────────────────── */

export default function PsychotherapiePage() {
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
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)",
        }} />

        <div className="site-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
            marginBottom: "1.25rem",
          }}>
            Ankernetz Psychotherapie
          </p>

          <h1 style={{
            fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 900,
            color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.03em",
            marginBottom: "1.25rem", maxWidth: "18ch",
          }}>
            Kinder- und Jugend&shy;psychotherapie.<br />
            <span style={{ color: "#6FA3FE" }}>Mit Kassensitz.</span>
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.75, maxWidth: "560px", marginBottom: "3rem",
          }}>
            Professionelle Therapie, direkt eingebunden in das Ankernetz-System.
            Approbierte Therapeuten, evidenzbasierte Verfahren und kurze Wege —
            für Kinder und Jugendliche, die therapeutische Unterstützung brauchen.
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
              Termin anfragen
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

      {/* ══ KASSENSITZ-BANNER ═════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(90deg, #1a3f6f 0%, #2d5fa0 100%)",
        padding: "1.25rem 0",
      }}>
        <div className="site-container" style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "1rem", flexWrap: "wrap",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Shield size={20} color="#6FA3FE" />
            <p style={{ color: "white", fontWeight: 700, fontSize: "14px" }}>
              Kassensitz vorhanden — keine Privatkosten für Familien
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px" }}>
              Abrechnung über alle gesetzlichen Krankenkassen.
            </p>
          </div>
          <a href="tel:+4930224543220" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)",
            color: "white", fontWeight: 700, fontSize: "13px",
            padding: "8px 18px", borderRadius: "8px", textDecoration: "none", flexShrink: 0,
          }}>
            <Phone size={14} />
            Termin vereinbaren
          </a>
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
              Warum Psychotherapie im Hilfesystem?
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}>
              Therapie dort, wo Kinder leben.
            </h2>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px", marginBottom: "1.25rem" }}>
              Der größte Schwachpunkt im Jugendhilfesystem ist die Trennung von
              pädagogischer Betreuung und therapeutischer Behandlung. Kinder in
              Wohngruppen bekommen Therapie in externen Praxen — ohne Verbindung
              zum Alltag, ohne Abstimmung mit den Betreuern.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px", marginBottom: "1.25rem" }}>
              Wir schließen diese Lücke. Unsere approbierten Kinder- und
              Jugendlichenpsychotherapeuten sind direkt in das Ankernetz-System
              eingebunden. Was in der Therapiestunde bearbeitet wird, kann im
              Alltag aufgegriffen werden — und umgekehrt.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px" }}>
              Das Ergebnis: Therapie, die wirkt. Nicht trotz des Systems —
              sondern durch es.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {[
              { icon: CheckCircle, text: "Approbierte Kinder- und Jugendlichenpsychotherapeuten" },
              { icon: CheckCircle, text: "Kassensitz — kein Eigenanteil für Familien" },
              { icon: CheckCircle, text: "Direkt vernetzt mit Wohngruppen und Bezugsbetreuern" },
              { icon: CheckCircle, text: "Kurze Wartezeiten durch eigene interne Kapazitäten" },
              { icon: CheckCircle, text: "Traumaspezialisierung: PTBS, komplexe Traumatisierung" },
              { icon: CheckCircle, text: "Eltern- und Familientherapie als fester Bestandteil" },
              { icon: CheckCircle, text: "Regelmäßige Fallbesprechungen mit dem Betreuungsteam" },
              { icon: CheckCircle, text: "Kriseninterventionsgespräche ohne lange Wartezeiten" },
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

      {/* ══ STÖRUNGSBILDER ════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#1a3f6f", marginBottom: "0.75rem",
            }}>
              Störungsbilder
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}>
              Was wir behandeln
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", maxWidth: "540px", margin: "0 auto", lineHeight: 1.75 }}>
              Wir behandeln das gesamte Spektrum psychischer Störungen bei
              Kindern und Jugendlichen — mit besonderer Expertise in
              komplexen Traumatisierungen und Bindungsstörungen.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem",
          }}>
            {stoerungsbilder.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.titel} className="bento-card" style={{
                  background: "white", borderRadius: "16px",
                  padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)",
                }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    background: s.akzent + "15",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1rem",
                  }}>
                    <Icon size={22} color={s.akzent} />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.5rem" }}>{s.titel}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.7 }}>{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ VERFAHREN ═════════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem",
            }}>
              Therapeutische Verfahren
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              maxWidth: "540px",
            }}>
              Evidenzbasierte Methoden für wirksame Behandlung
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem",
          }}>
            {verfahren.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.titel} className="bento-card" style={{
                  background: "#f4f7fb", borderRadius: "16px",
                  padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)",
                  position: "relative",
                }}>
                  {v.kassensitz && (
                    <div style={{
                      position: "absolute", top: "1.25rem", right: "1.25rem",
                      background: "#dcfce7", borderRadius: "9999px",
                      padding: "2px 10px", fontSize: "10px", fontWeight: 700,
                      color: "#166534", letterSpacing: "0.04em",
                    }}>
                      Kassenleistung
                    </div>
                  )}
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "10px",
                    background: "#1a3f6f",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}>
                    <Icon size={20} color="white" />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.625rem" }}>{v.titel}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.75 }}>{v.text}</p>
                </div>
              );
            })}
          </div>

          <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "1.5rem", textAlign: "center" }}>
            Kassenleistung = Abrechnung über gesetzliche Krankenversicherung möglich
          </p>
        </div>
      </section>

      {/* ══ UNSER VORTEIL ══════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#1a3f6f", marginBottom: "0.75rem",
            }}>
              Warum Ankernetz?
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              Therapie im Verbund — nicht im Silo
            </h2>
          </div>

          <div style={{
            background: "white", borderRadius: "20px", overflow: "hidden",
            boxShadow: "0 2px 24px rgba(26,63,111,0.08)",
          }}>
            {/* Tabellenkopf */}
            <div style={{
              display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr",
              background: "#1a3f6f", padding: "1rem 1.5rem", gap: "1rem",
            }}>
              <p style={{ fontWeight: 700, color: "rgba(255,255,255,0.5)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Merkmal</p>
              <p style={{ fontWeight: 700, color: "#6FA3FE", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Ankernetz</p>
              <p style={{ fontWeight: 700, color: "rgba(255,255,255,0.5)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Externe Praxis</p>
            </div>
            {unterschiede.map((u, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr",
                padding: "1rem 1.5rem", gap: "1rem",
                background: i % 2 === 0 ? "#f4f7fb" : "white",
                alignItems: "center",
                borderBottom: i < unterschiede.length - 1 ? "1px solid #eef2f8" : "none",
              }}>
                <p style={{ fontWeight: 600, color: "#1a3f6f", fontSize: "14px" }}>{u.merkmal}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle size={14} color="#22c55e" style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.4 }}>{u.ankernetz}</p>
                </div>
                <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: 1.4 }}>{u.andere}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROZESS ═══════════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
        padding: "5rem 0", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <div className="site-container" style={{ position: "relative", maxWidth: "820px" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.75rem",
            }}>
              Ablauf
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800,
              color: "white", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              Von der Anmeldung zur Behandlung
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {therapeutischerProzess.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} style={{ display: "flex", gap: "1.75rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{
                      width: "52px", height: "52px", borderRadius: "50%",
                      background: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon size={22} color="white" />
                    </div>
                    {i < therapeutischerProzess.length - 1 && (
                      <div style={{ width: "1px", flex: 1, background: "rgba(255,255,255,0.12)", minHeight: "40px", margin: "4px 0" }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: "2.5rem", paddingTop: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
                      <p style={{ fontWeight: 800, color: "white", fontSize: "16px" }}>{s.titel}</p>
                      <span style={{
                        fontSize: "11px", fontWeight: 700, color: "#6FA3FE",
                        background: "rgba(111,163,254,0.15)", padding: "3px 10px", borderRadius: "9999px",
                      }}>{s.dauer}</span>
                    </div>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>{s.text}</p>
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
              Für Jugendämter & Einrichtungen
            </p>
            <h2 style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.25, letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}>
              Therapie als Teil des Hilfesystems
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.85, marginBottom: "2rem" }}>
              Für Fachkräfte im Jugendamt bedeutet unser Angebot: eine therapeutische
              Versorgung, die ins Gesamtsystem eingebettet ist und keine parallelen
              Kommunikationswege erfordert.
            </p>
            <a href="tel:+4930224543220" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#1a3f6f", color: "white",
              fontWeight: 700, fontSize: "14px",
              padding: "12px 22px", borderRadius: "10px",
              textDecoration: "none",
            }}>
              <Phone size={16} />
              Direkt anfragen
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { icon: Shield, text: "Kassensitz — keine zusätzliche Kostenübernahme erforderlich" },
              { icon: Zap, text: "Kurze Wartezeiten: priorisierte Aufnahme für Kinder in Ankernetz-Einrichtungen" },
              { icon: MessageSquare, text: "Regelmäßige Rückmeldungen an Bezugsbetreuer und Jugendamt" },
              { icon: ClipboardList, text: "Therapeutische Stellungnahmen für Hilfeplanvorbereitung" },
              { icon: Users, text: "Teilnahme an Fallbesprechungen und Hilfeplangesprächen" },
              { icon: Brain, text: "Kriseninterventionsgespräche ohne lange Wartezeiten" },
              { icon: FileText, text: "Gutachten und Einschätzungsberichte auf Anfrage" },
              { icon: Lock, text: "Schweigepflicht und DSGVO-konforme Datenweitergabe" },
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
              Was Familien und Fachkräfte fragen
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
          <Brain size={36} color="#6FA3FE" style={{ marginBottom: "1.5rem" }} />
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800,
            color: "white", marginBottom: "1.25rem", letterSpacing: "-0.02em", lineHeight: 1.2,
          }}>
            Therapie, die dort wirkt, wo das Leben stattfindet.
          </h2>
          <p style={{
            fontSize: "15px", color: "rgba(255,255,255,0.6)",
            marginBottom: "2.5rem", lineHeight: 1.75,
          }}>
            Termin anfragen oder Informationen für Ihr Jugendamt. Wir melden uns
            innerhalb von 24 Stunden.
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
              Termin anfragen
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
