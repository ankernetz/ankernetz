import Link from "next/link";
import {
  Phone, Clock, Shield, AlertTriangle, Heart, Brain,
  Users, FileText, CheckCircle, ArrowRight, Home,
  Zap, Activity, Eye, HandHeart, MessageSquare,
  Star, Lock, Stethoscope, UserCheck, ClipboardList,
  ChevronDown, Siren,
} from "lucide-react";

/* ─── Daten ─────────────────────────────────────────── */

const kennzahlen = [
  { wert: "24/7", label: "Erreichbar an 365 Tagen im Jahr", icon: Clock },
  { wert: "< 30 Min", label: "Erste Rückmeldung nach Ihrem Anruf", icon: Zap },
  { wert: "< 4h", label: "Aufnahme in akuten Krisensituationen", icon: AlertTriangle },
  { wert: "15+", label: "Jahre Erfahrung in der Krisenarbeit", icon: Star },
];

const indikationen = [
  {
    icon: AlertTriangle,
    titel: "Suizidgefährdung",
    text: "Akute Gedanken, Pläne oder Handlungen in Bezug auf selbstverletzende oder suizidale Verhaltensweisen.",
    akzent: "#ef4444",
  },
  {
    icon: Shield,
    titel: "Fremdgefährdung",
    text: "Situationen, in denen von dem Jugendlichen eine ernsthafte Gefährdung für andere Personen ausgeht.",
    akzent: "#f97316",
  },
  {
    icon: Brain,
    titel: "Akute psychische Dekompensation",
    text: "Psychotische Episoden, schwere Dissoziationen, manische Phasen oder andere akute psychiatrische Zustände.",
    akzent: "#8b5cf6",
  },
  {
    icon: Home,
    titel: "Familiäre Eskalation / Inobhutnahme",
    text: "Häusliche Gewalt, Trennung, Wohnungslosigkeit oder Konstellationen, die eine sofortige Herausnahme erfordern.",
    akzent: "#1a3f6f",
  },
  {
    icon: Activity,
    titel: "Traumatische Ereignisse",
    text: "Unmittelbar nach Misshandlung, sexuellem Missbrauch, Unfällen oder dem Verlust einer nahestehenden Person.",
    akzent: "#0891b2",
  },
  {
    icon: Heart,
    titel: "Selbstverletzendes Verhalten",
    text: "Eskalierendes selbstverletzendes Verhalten, das eine intensive Begleitung und Sicherung erfordert.",
    akzent: "#e11d48",
  },
  {
    icon: Users,
    titel: "Systemversagen / Hilfeabbruch",
    text: "Wenn laufende Hilfen abbrechen, Unterbringungen scheitern oder das Kind aus dem Hilfesystem herausfällt.",
    akzent: "#059669",
  },
  {
    icon: Eye,
    titel: "Unklare Gefährdungslage",
    text: "Situationen, bei denen der Schutzbedarf noch nicht eingeschätzt werden kann und rasch Klarheit benötigt wird.",
    akzent: "#6FA3FE",
  },
];

const leistungen = [
  {
    icon: Phone,
    titel: "Sofortaufnahme rund um die Uhr",
    text: "Unser Bereitschaftsdienst ist täglich 24 Stunden erreichbar. Aufnahmen sind auch nachts, an Wochenenden und Feiertagen möglich — ohne bürokratische Hürden.",
  },
  {
    icon: Stethoscope,
    titel: "Erstdiagnostik & Kriseneinschätzung",
    text: "Direkt nach der Aufnahme erfolgt eine strukturierte Ersteinschätzung durch unser Fachteam. Wir klären Schutzbedarfe, Ressourcen und erste Behandlungsansätze.",
  },
  {
    icon: Shield,
    titel: "Schutz & Sofortstabilisierung",
    text: "Sicherung des körperlichen und psychischen Schutzes steht an erster Stelle. Klare Strukturen, Verlässlichkeit und Ruhe bilden die Basis der ersten Tage.",
  },
  {
    icon: Brain,
    titel: "Psychotherapeutische Krisenarbeit",
    text: "Intensive Einzelgespräche mit Therapeuten ab dem ersten Tag. Traumasensible Stabilisierungsverfahren, Ressourcenaktivierung und Krisenplanung.",
  },
  {
    icon: HandHeart,
    titel: "Engmaschige Bezugsbetreuung",
    text: "Jeder Jugendliche hat eine feste Bezugsfachkraft, die rund um die Uhr ansprechbar ist. Persönliche Kontinuität als zentrales Sicherheitselement.",
  },
  {
    icon: Users,
    titel: "Familie & soziales Umfeld einbeziehen",
    text: "Krise betrifft nicht nur das Kind. Wir beziehen Eltern, Geschwister und relevante Bezugspersonen von Anfang an ein — immer mit Blick auf Schutz und Ressourcen.",
  },
  {
    icon: MessageSquare,
    titel: "Kooperation mit dem Jugendamt",
    text: "Regelmäßige schriftliche Rückmeldungen, klare Dokumentation und direkter Draht zur zuständigen Fachkraft. Transparenz als Grundprinzip.",
  },
  {
    icon: ClipboardList,
    titel: "Perspektivklärung & Überleitung",
    text: "Nach der Stabilisierung erarbeiten wir gemeinsam mit Jugendamt und Familie eine Weichenstellung: Heimrückkehr, therapeutisches Wohnen oder andere Folgehilfen.",
  },
  {
    icon: Zap,
    titel: "Ärztliche Versorgung & Medikation",
    text: "Kooperation mit Kinder- und Jugendpsychiatern sichert die medizinische Versorgung. Krankenhauseinweisungen werden wenn möglich vermieden.",
  },
];

const prozessSchritte = [
  {
    nr: "01",
    titel: "Kontaktaufnahme",
    icon: Phone,
    text: "Das Jugendamt oder eine Fachkraft ruft unsere Krisenleitung an — zu jeder Tages- und Nachtzeit. Kein Anrufbeantworter, kein Wartesystem.",
    dauer: "Sofort",
  },
  {
    nr: "02",
    titel: "Ersteinschätzung",
    icon: ClipboardList,
    text: "Innerhalb von 30 Minuten erste Rückmeldung zu Aufnahmekapazität, Passung und weiteren Schritten. Bei Bedarf Fachgespräch mit dem zuständigen Mitarbeiter.",
    dauer: "< 30 Min",
  },
  {
    nr: "03",
    titel: "Aufnahme & Ankommen",
    icon: Home,
    text: "Strukturierte, ruhige Aufnahme mit Erstgespräch, Zimmerorientierung und erstem Kennenlernen des Teams. Fokus auf Sicherheit und Orientierung.",
    dauer: "< 4h",
  },
  {
    nr: "04",
    titel: "Stabilisierungsphase",
    icon: Activity,
    text: "Intensive Begleitung in den ersten Tagen: Diagnostik, Krisenplanarbeit, Bezugsbetreuung und erste therapeutische Gespräche. Enger Kontakt mit Jugendamt.",
    dauer: "Tage 1–7",
  },
  {
    nr: "05",
    titel: "Perspektivklärung",
    icon: ArrowRight,
    text: "Gemeinsam mit Jugendamt, Familie und dem Jugendlichen wird eine klare Anschlussversorgung entwickelt. Wir begleiten den Übergang aktiv.",
    dauer: "Ab Tag 7",
  },
];

const besonderheiten = [
  {
    icon: Clock,
    titel: "Rund-um-die-Uhr-Bereitschaft",
    text: "An 365 Tagen im Jahr. Unser Krisentelefon wird von qualifizierten Fachkräften besetzt — kein Callcenter, kein Anrufbeantworter.",
  },
  {
    icon: UserCheck,
    titel: "Spezialisiertes Krisenteam",
    text: "Sozialpädagogen, Psychologen und Therapeuten mit spezifischer Ausbildung in Krisenintervention, Traumapädagogik und psychiatrischer Notfallversorgung.",
  },
  {
    icon: Zap,
    titel: "Aufnahme innerhalb von Stunden",
    text: "Kein Wartezimmer, keine Warteliste. Wenn ein Platz frei ist, kann die Aufnahme noch am selben Tag erfolgen — auch mitten in der Nacht.",
  },
  {
    icon: Lock,
    titel: "Vertraulichkeit & Datenschutz",
    text: "Strenge Schweigepflicht. Alle übermittelten Informationen werden ausschließlich zur Fallbearbeitung genutzt und sicher verwahrt.",
  },
  {
    icon: FileText,
    titel: "Klare Dokumentation",
    text: "Tagesberichte, Einschätzungsbögen und Krisenprotokolle. Das Jugendamt erhält regelmäßige, strukturierte Rückmeldungen zum Hilfeverlauf.",
  },
  {
    icon: Heart,
    titel: "Traumasensible Haltung",
    text: "Unser Ansatz basiert auf dem Grundsatz: Verhalten ist Kommunikation. Kein Jugendlicher wird pathologisiert — wir verstehen Krisen als Botschaften.",
  },
];

const faq = [
  {
    frage: "Wie schnell kann eine Aufnahme erfolgen?",
    antwort: "Bei freiem Platz ist eine Aufnahme noch am selben Tag möglich — auch nachts oder am Wochenende. Unsere Bereitschaft ist an 365 Tagen aktiv. Nach dem ersten Anruf melden wir uns innerhalb von 30 Minuten mit einer konkreten Rückmeldung.",
  },
  {
    frage: "Wer kann eine Krisenintervention beauftragen?",
    antwort: "Grundsätzlich können Jugendämter, Sozialdienste, Schulen, Kliniken, Betreuungseinrichtungen und auch Erziehungsberechtigte Kontakt aufnehmen. Die formelle Hilfegewährung erfolgt über das zuständige Jugendamt gemäß SGB VIII.",
  },
  {
    frage: "Wie lange dauert eine Krisenintervention in der Regel?",
    antwort: "Die Stabilisierungsphase beträgt typischerweise 14–28 Tage. Nach ausreichender Stabilisierung wird gemeinsam mit Jugendamt und Familie ein Anschlussplan entwickelt. Eine Verlängerung ist bei Bedarf möglich.",
  },
  {
    frage: "Was passiert, wenn kein Platz frei ist?",
    antwort: "Wir informieren Sie sofort über unsere aktuelle Kapazität. Bei voller Belegung helfen wir aktiv bei der Vermittlung in geeignete Partnereinrichtungen und bleiben am Ball.",
  },
  {
    frage: "Wie läuft die Kooperation mit dem Jugendamt ab?",
    antwort: "Wir pflegen engmaschigen Kontakt: Aufnahmebericht, wöchentliche Rückmeldungen, Krisenprotokolle und Hilfeplanvorbereitung. Ihr zuständiger Mitarbeiter hat immer einen festen Ansprechpartner bei uns.",
  },
  {
    frage: "Werden auch Kinder unter 12 Jahren aufgenommen?",
    antwort: "Unsere Krisenintervention ist primär auf Jugendliche ab 12 Jahren ausgerichtet. Für Kinder unter 12 vermitteln wir auf Anfrage in geeignete Einrichtungen und unterstützen das Jugendamt bei der Versorgungsplanung.",
  },
  {
    frage: "Gibt es psychiatrische Versorgung vor Ort?",
    antwort: "Wir kooperieren eng mit Kinder- und Jugendpsychiatern, die kurzfristig konsiliarisch verfügbar sind. Medikamentöse Behandlung wird wenn möglich ambulant geregelt. Bei stationär-psychiatrischem Bedarf begleiten wir die Einweisung.",
  },
  {
    frage: "Können Eltern während der Krisenintervention Kontakt halten?",
    antwort: "Ja — sofern dies dem Kindeswohl nicht entgegensteht. Wir regeln Besuchs- und Kontaktregelungen transparent mit dem Jugendamt und beziehen Eltern aktiv in den Stabilisierungsprozess ein.",
  },
];

/* ─── Seite ─────────────────────────────────────────── */

export default function KriseninterventionPage() {
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
        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        {/* Glow blob */}
        <div style={{
          position: "absolute", top: "15%", right: "5%",
          width: "500px", height: "500px", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(111,163,254,0.1) 0%, transparent 65%)",
        }} />
        {/* Red alert glow */}
        <div style={{
          position: "absolute", bottom: "20%", left: "3%",
          width: "320px", height: "320px", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(239,68,68,0.07) 0%, transparent 65%)",
        }} />

        <div className="site-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
          {/* Live badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)",
            borderRadius: "9999px", padding: "6px 14px", marginBottom: "2rem",
          }}>
            <span style={{
              width: "8px", height: "8px", borderRadius: "50%",
              background: "#ef4444",
              boxShadow: "0 0 0 3px rgba(239,68,68,0.3)",
              animation: "pulse 1.8s ease-in-out infinite",
            }} />
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#fca5a5", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Jetzt erreichbar — 24/7
            </span>
          </div>

          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
            marginBottom: "1.25rem",
          }}>
            Ankernetz Krisenintervention
          </p>

          <h1 style={{
            fontSize: "clamp(2.75rem, 6vw, 5rem)", fontWeight: 900,
            color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.03em",
            marginBottom: "1.25rem", maxWidth: "14ch",
          }}>
            Sofort da.<br />
            <span style={{ color: "#6FA3FE" }}>Wenn es zählt.</span>
          </h1>

          <div style={{
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.75, maxWidth: "560px", marginBottom: "3rem",
            display: "flex", flexDirection: "column", gap: "1rem",
          }}>
            <p style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
              Wenn du gerade nicht weiterweißt, bist du nicht allein.
            </p>
            <p>
              In akuten Krisensituationen ist es wichtig, schnell jemanden zu erreichen, der zuhört und dich ernst nimmt.
              Unser Krisendienst ist rund um die Uhr für dich da. Ohne Warteschleifen, ohne komplizierte Wege.
            </p>
            <p>
              Du kannst dich jederzeit melden: wir hören dir zu, helfen dir, deine Situation einzuordnen und schauen gemeinsam, was jetzt wichtig ist.
            </p>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="tel:+4930224543220"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: "#ef4444", color: "white",
                fontWeight: 700, fontSize: "15px",
                padding: "14px 28px", borderRadius: "12px",
                textDecoration: "none", border: "none",
              }}
            >
              <Phone size={18} />
              Jetzt anrufen: +49 30 22 45 43 22
            </a>
            <Link
              href="/platzanfrage"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white", fontWeight: 600, fontSize: "14px",
                padding: "14px 24px", borderRadius: "12px",
                textDecoration: "none",
              }}
            >
              Platzanfrage stellen
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Kennzahlen */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px", background: "rgba(255,255,255,0.08)",
            borderRadius: "16px", overflow: "hidden",
            marginTop: "4rem",
          }}>
            {kennzahlen.map((k) => {
              const Icon = k.icon;
              return (
                <div key={k.wert} style={{
                  background: "rgba(255,255,255,0.04)",
                  padding: "1.5rem 1.25rem",
                  backdropFilter: "blur(8px)",
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

      {/* ══ NOTFALL-BANNER ════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(90deg, #7f1d1d 0%, #991b1b 100%)",
        padding: "1.25rem 0",
      }}>
        <div className="site-container" style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "1rem", flexWrap: "wrap",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Siren size={20} color="#fca5a5" />
            <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: "14px", marginBottom: "2px" }}>
              Krisennotfall? Wir sind sofort für Sie da.
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>
              Kein Anrufbeantworter - echte Fachkräfte am Telefon.
            </p>
            </div>
          </div>
          <a
            href="tel:+4930224543220"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#ef4444", color: "white",
              fontWeight: 700, fontSize: "13px", padding: "8px 18px",
              borderRadius: "8px", textDecoration: "none", flexShrink: 0,
            }}
          >
            <Phone size={14} />
            +49 30 22 45 43 22
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
              Was ist Krisenintervention?
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}>
              Schnelle Hilfe, wenn sie wirklich gebraucht wird.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px" }}>
                Krisenintervention bedeutet, in akuten Situationen unmittelbar zu handeln und Unterstützung bereitzustellen.
                Sie kommt dann zum Einsatz, wenn bestehende Hilfen nicht mehr ausreichen und kurzfristig Stabilität geschaffen werden muss.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px" }}>
                In solchen Momenten geht es darum, Sicherheit herzustellen, Orientierung zu geben und gemeinsam erste tragfähige Schritte zu entwickeln – für den Jugendlichen und sein Umfeld.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px" }}>
                Unser Team besteht aus erfahrenen Sozialpädagoginnen, Psychologinnen und Therapeut*innen mit besonderer Expertise in der Arbeit mit Krisensituationen.
              </p>
              <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px" }}>
                Wir arbeiten strukturiert, eng abgestimmt und verlässlich - im Kontakt mit dem Jugendlichen, der Familie und dem zuständigen Jugendamt.
              </p>
              <p style={{ color: "#1a3f6f", lineHeight: 1.85, fontSize: "15px", fontWeight: 600 }}>
                Ziel ist es, die Situation zu stabilisieren und eine passende Perspektive zu entwickeln.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {[
              { icon: CheckCircle, text: "Keine Warteliste — Aufnahme direkt bei freiem Platz" },
              { icon: CheckCircle, text: "Bereitschaftsdienst mit echten Fachkräften" },
              { icon: CheckCircle, text: "Strukturiertes Aufnahmegespräch und Erstdiagnostik" },
              { icon: CheckCircle, text: "Enge Kooperation mit dem zuständigen Jugendamt" },
              { icon: CheckCircle, text: "Traumasensible Pädagogik als Grundprinzip" },
              { icon: CheckCircle, text: "Transparente Dokumentation und regelmäßige Berichte" },
              { icon: CheckCircle, text: "Klare Übergabe in Anschlusshilfen" },
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
              Indikationen für Krisenintervention
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", maxWidth: "540px", margin: "0 auto", lineHeight: 1.75 }}>
              Krisenintervention ist keine Pauschallösung — sie greift in klar definierten
              Situationen, in denen sofortiger Schutz und Stabilisierung notwendig sind.
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
              maxWidth: "480px",
            }}>
              Was wir in der Krise leisten
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

      {/* ══ PROZESS ═══════════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(160deg, #1a3f6f 0%, #2d5fa0 60%, #1a3f6f 100%)",
        padding: "5rem 0",
        position: "relative", overflow: "hidden",
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
              Ablauf
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "white", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              Vom ersten Anruf zur Stabilisierung
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0", position: "relative" }}>
            {/* Connector line */}
            <div style={{
              position: "absolute", top: "2.25rem", left: "10%", right: "10%",
              height: "1px", background: "rgba(255,255,255,0.12)",
            }} />

            {prozessSchritte.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} style={{ textAlign: "center", padding: "0 0.75rem", position: "relative" }}>
                  {/* Circle */}
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    background: i === 0 ? "#ef4444" : "rgba(255,255,255,0.1)",
                    border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 1.25rem",
                    position: "relative", zIndex: 1,
                  }}>
                    <Icon size={20} color="white" />
                  </div>
                  <p style={{
                    fontSize: "10px", fontWeight: 700, color: "#6FA3FE",
                    letterSpacing: "0.06em", marginBottom: "6px",
                  }}>
                    {s.dauer}
                  </p>
                  <p style={{ fontWeight: 700, color: "white", fontSize: "13px", marginBottom: "8px" }}>
                    {s.titel}
                  </p>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
                    {s.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ BESONDERHEITEN ════════════════════════════════════════ */}
      <section style={{ background: "#f4f7fb", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem",
            }}>
              Was uns auszeichnet
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              Krisenintervention mit Haltung
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}>
            {besonderheiten.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.titel} className="bento-card" style={{
                  background: "white", borderRadius: "16px",
                  padding: "2rem", border: "1px solid rgba(26,63,111,0.07)",
                }}>
                  <Icon size={24} color="#6FA3FE" style={{ marginBottom: "1rem" }} />
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.625rem" }}>
                    {b.titel}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.75 }}>
                    {b.text}
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
              Ihr verlässlicher Partner in der Krise
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.85, marginBottom: "2rem" }}>
              Als Jugendamt oder Fachkraft wissen Sie: In einer Krise zählt jede Stunde.
              Wir verstehen Ihre Anforderungen — transparente Kommunikation,
              schnelle Reaktion und klare Dokumentation.
            </p>
            <a
              href="tel:+4930224543220"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#1a3f6f", color: "white",
                fontWeight: 700, fontSize: "14px",
                padding: "12px 22px", borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              <Phone size={16} />
              Direkte Krisenleitung
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { icon: Phone, text: "Direkte Aufnahmenummer ohne Umwege — immer eine Fachkraft am Hörer" },
              { icon: FileText, text: "Aufnahmebericht innerhalb von 24h nach Einzug" },
              { icon: ClipboardList, text: "Wöchentliche Statusberichte per E-Mail oder Fax" },
              { icon: UserCheck, text: "Fester Ansprechpartner für die gesamte Hilfedauer" },
              { icon: MessageSquare, text: "Krisenprotokolle und Einschätzungsbögen nach ICD-10-Standard" },
              { icon: CheckCircle, text: "Hilfeplanvorbereitung und aktive Teilnahme an HPG" },
              { icon: ArrowRight, text: "Unterstützung bei der Überleitung in Anschlusshilfen" },
              { icon: Lock, text: "DSGVO-konforme Datenweitergabe und Schweigepflicht" },
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

      {/* ══ ZIELGRUPPE ════════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ marginBottom: "3rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#1a3f6f", marginBottom: "0.75rem",
            }}>
              Zielgruppe
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              Für wen ist Krisenintervention gedacht?
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div style={{
              background: "#1a3f6f", borderRadius: "20px", padding: "2.5rem",
              color: "white",
            }}>
              <p style={{
                fontSize: "3rem", fontWeight: 900, color: "#6FA3FE",
                letterSpacing: "-0.03em", marginBottom: "0.5rem",
              }}>
                12–17
              </p>
              <p style={{ fontWeight: 700, fontSize: "18px", marginBottom: "1rem" }}>Jahre</p>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75, fontSize: "14px" }}>
                Unsere Krisenintervention richtet sich primär an Jugendliche zwischen
                12 und 17 Jahren, die sich in akuten psychischen, sozialen oder
                familiären Krisensituationen befinden.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Psychische Erkrankungen", desc: "Erstmanifestation oder Dekompensation psychiatrischer Störungsbilder" },
                { label: "Familiäre Krisen", desc: "Eskalation, häusliche Gewalt, Trennungssituationen, Wohnungsverlust" },
                { label: "Traumatische Erlebnisse", desc: "Misshandlung, Missbrauch, Verlust, Unfälle und andere traumatische Ereignisse" },
                { label: "Systemversagen", desc: "Wenn andere Hilfen abbrechen oder nicht mehr greifen" },
              ].map((item) => (
                <div key={item.label} style={{
                  background: "white", borderRadius: "12px",
                  padding: "1.25rem 1.5rem",
                  border: "1px solid rgba(26,63,111,0.07)",
                }}>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "14px", marginBottom: "4px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CHAT LENA ════════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center",
        }}>
          {/* Text */}
          <div>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#1a3f6f", marginBottom: "1rem",
            }}>
              Sofortkontakt per Chat
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}>
              Lena ist Ihre erste Anlaufstelle – direkt und unkompliziert.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.85 }}>
                Unser Chat-Assistent <strong style={{ color: "#1a3f6f" }}>Lena</strong> ist
                auf jeder Seite unten rechts für Sie erreichbar. Sie beantwortet erste Fragen
                zur Krisenintervention, hilft bei der Orientierung und zeigt Ihnen, an wen
                Sie sich wenden können.
              </p>
              <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.85 }}>
                Wenn Sie Lena kontaktieren, wird Ihr Anliegen direkt an unser Team
                weitergeleitet. So stellen wir sicher, dass keine Anfrage unbeachtet bleibt
                und sich zeitnah eine Fachkraft bei Ihnen meldet.
              </p>
              <p style={{ fontSize: "15px", color: "#1a3f6f", fontWeight: 700, lineHeight: 1.85 }}>
                Schnell. Verlässlich. Ohne Umwege.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                "Rund um die Uhr verfügbar — auch nachts und am Wochenende",
                "Direkte Benachrichtigung eines Mitarbeiters bei jeder Anfrage",
                "Kein Formular, kein Login — einfach tippen und fragen",
                "Vertraulich und ohne persönliche Registrierung",
              ].map((p, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "0.75rem 1rem", background: "white",
                  borderRadius: "10px", border: "1px solid rgba(26,63,111,0.08)",
                }}>
                  <span style={{
                    width: "7px", height: "7px", borderRadius: "50%",
                    background: "#6FA3FE", flexShrink: 0,
                  }} />
                  <p style={{ fontSize: "13px", color: "#1a3f6f", fontWeight: 500, lineHeight: 1.5 }}>{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chat-Vorschau */}
          <div>
            <div style={{
              background: "white", borderRadius: "20px", overflow: "hidden",
              boxShadow: "0 8px 40px rgba(26,63,111,0.14)",
              border: "1px solid rgba(26,63,111,0.1)",
              maxWidth: "360px", margin: "0 auto",
            }}>
              {/* Header */}
              <div style={{
                background: "#1a3f6f", padding: "1rem 1.25rem",
                display: "flex", alignItems: "center", gap: "12px",
              }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #6FA3FE 0%, #2d5fa0 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "16px", fontWeight: 800, color: "white", flexShrink: 0,
                }}>
                  L
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: "white", fontSize: "14px", lineHeight: 1.2 }}>Lena</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "3px" }}>
                    <span style={{
                      width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80",
                    }} />
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>Online · Ankernetz-Team</span>
                  </div>
                </div>
              </div>

              {/* Nachrichten */}
              <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.875rem", background: "#f4f7fb" }}>
                {/* Lena */}
                <div style={{ display: "flex", gap: "8px", alignItems: "flex-end" }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    background: "#1a3f6f", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "11px", fontWeight: 800,
                    color: "white", flexShrink: 0,
                  }}>L</div>
                  <div style={{
                    background: "white", borderRadius: "12px 12px 12px 0",
                    padding: "10px 14px", maxWidth: "260px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  }}>
                    <p style={{ fontSize: "13px", color: "#1a3f6f", lineHeight: 1.55 }}>
                      Hallo, ich bin Lena vom Ankernetz-Team. Wie kann ich Ihnen heute helfen?
                    </p>
                  </div>
                </div>

                {/* Nutzer */}
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div style={{
                    background: "#1a3f6f", borderRadius: "12px 12px 0 12px",
                    padding: "10px 14px", maxWidth: "220px",
                  }}>
                    <p style={{ fontSize: "13px", color: "white", lineHeight: 1.55 }}>
                      Wir brauchen dringend einen Krisenplatz für heute Nacht.
                    </p>
                  </div>
                </div>

                {/* Lena Antwort */}
                <div style={{ display: "flex", gap: "8px", alignItems: "flex-end" }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    background: "#1a3f6f", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "11px", fontWeight: 800,
                    color: "white", flexShrink: 0,
                  }}>L</div>
                  <div style={{
                    background: "white", borderRadius: "12px 12px 12px 0",
                    padding: "10px 14px", maxWidth: "260px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  }}>
                    <p style={{ fontSize: "13px", color: "#1a3f6f", lineHeight: 1.55 }}>
                      Ich leite Ihre Anfrage sofort an unser Bereitschaftsteam weiter. Sie werden innerhalb weniger Minuten zurückgerufen.
                    </p>
                  </div>
                </div>

                {/* Systemmeldung */}
                <div style={{
                  textAlign: "center", padding: "0.5rem",
                }}>
                  <span style={{
                    fontSize: "11px", color: "#6b7280",
                    background: "rgba(26,63,111,0.07)", borderRadius: "9999px",
                    padding: "4px 12px",
                  }}>
                    Mitarbeiter wurde benachrichtigt
                  </span>
                </div>
              </div>

              {/* Input */}
              <div style={{
                padding: "0.875rem 1rem", background: "white",
                borderTop: "1px solid #eef2f8",
                display: "flex", gap: "8px", alignItems: "center",
              }}>
                <div style={{
                  flex: 1, background: "#f4f7fb", borderRadius: "8px",
                  padding: "9px 14px", fontSize: "13px", color: "#9ca3af",
                }}>
                  Schreiben Sie eine Nachricht …
                </div>
                <div style={{
                  width: "34px", height: "34px", borderRadius: "8px",
                  background: "#1a3f6f", display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Hinweis */}
            <p style={{
              fontSize: "12px", color: "#6b7280", textAlign: "center",
              marginTop: "1.25rem", lineHeight: 1.6,
            }}>
              Chat-Widget unten rechts auf jeder Seite verfügbar.
            </p>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
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
              Was Fachkräfte am häufigsten fragen
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {faq.map((f, i) => (
              <details key={i} style={{ background: "#f4f7fb", borderRadius: "12px", overflow: "hidden" }}>
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
        background: "linear-gradient(160deg, #1a3f6f 0%, #2d5fa0 60%, #1a3f6f 100%)",
        padding: "6rem 0", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <div className="site-container" style={{ position: "relative", maxWidth: "640px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)",
            borderRadius: "9999px", padding: "6px 14px", marginBottom: "2rem",
          }}>
            <span style={{
              width: "8px", height: "8px", borderRadius: "50%",
              background: "#ef4444", boxShadow: "0 0 0 3px rgba(239,68,68,0.3)",
            }} />
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#fca5a5", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              24/7 erreichbar
            </span>
          </div>

          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800,
            color: "white", marginBottom: "1.25rem", letterSpacing: "-0.02em", lineHeight: 1.2,
          }}>
            Eine Krise duldet keinen Aufschub.
          </h2>
          <p style={{
            fontSize: "15px", color: "rgba(255,255,255,0.6)",
            marginBottom: "2.5rem", lineHeight: 1.75,
          }}>
            Rufen Sie uns jetzt an — oder stellen Sie eine Platzanfrage. Unser Team
            meldet sich sofort.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="tel:+4930224543220"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: "#ef4444", color: "white",
                fontWeight: 700, fontSize: "15px",
                padding: "15px 30px", borderRadius: "12px",
                textDecoration: "none",
              }}
            >
              <Phone size={18} />
              +49 30 22 45 43 22
            </a>
            <Link
              href="/platzanfrage"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white", fontWeight: 600, fontSize: "14px",
                padding: "15px 26px", borderRadius: "12px",
                textDecoration: "none",
              }}
            >
              Platzanfrage stellen
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/kontakt"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                color: "rgba(255,255,255,0.55)", fontWeight: 500, fontSize: "14px",
                padding: "15px 20px", textDecoration: "none",
              }}
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.9); }
        }
        details[open] summary svg {
          transform: rotate(180deg);
        }
        details summary svg {
          transition: transform 0.2s;
        }
      `}</style>
    </main>
  );
}
