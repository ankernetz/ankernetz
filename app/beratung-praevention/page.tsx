import Link from "next/link";
import {
  Phone, Heart, Shield, Brain, Star, Clock,
  CheckCircle, ArrowRight, Users, FileText,
  MessageSquare, BookOpen, Lightbulb, HandHeart,
  ChevronDown, Lock, Zap, Home,
  Target, Layers, ClipboardList, UserCheck,
  Globe, Video, Smile, GraduationCap,
  TreePine, Sun, Coffee, Compass,
} from "lucide-react";

/* ─── Daten ──────────────────────────────────────────────────── */

const kennzahlen = [
  { wert: "0€", label: "Viele Angebote kostenlos oder kostengünstig", icon: Heart },
  { wert: "sofort", label: "Kein langer Antrag — erster Kontakt reicht", icon: Zap },
  { wert: "online", label: "Beratung auch per Telefon, Video und Chat", icon: Globe },
  { wert: "vernetzt", label: "Direkter Zugang zu allen Ankernetz-Angeboten", icon: Layers },
];

const zielgruppen = [
  {
    icon: Home,
    titel: "Familien in Belastungssituationen",
    text: "Erziehungsprobleme, Trennungen, finanzielle Not, Überforderung — wenn der Alltag sich anfühlt, als ob man ihn alleine nicht schafft. Wir hören zu und helfen, Wege zu finden.",
    akzent: "#1a3f6f",
  },
  {
    icon: Users,
    titel: "Jugendliche mit Beratungsbedarf",
    text: "Schulstress, Probleme mit Eltern oder Freunden, Identitätsfragen, psychische Belastung — Jugendliche brauchen manchmal jemanden außerhalb des Systems.",
    akzent: "#6FA3FE",
  },
  {
    icon: GraduationCap,
    titel: "Fachkräfte aus Schulen & Kitas",
    text: "Wenn ein Kind im Unterricht auffällt, eine Familie sich verändert oder das Team nicht mehr weiterkommt. Wir beraten praxisnah und ohne Umwege.",
    akzent: "#8b5cf6",
  },
  {
    icon: Shield,
    titel: "Jugendämter & ASD-Fachkräfte",
    text: "Fallberatung, kollegiale Beratung, Einschätzung zur Hilfeform — als Ergänzung zum eigenen Fachurteil oder als zweite Meinung.",
    akzent: "#059669",
  },
  {
    icon: Heart,
    titel: "Kinder in Belastungssituationen",
    text: "Kinder, die Trennungen, Streit, Veränderungen oder schwierige Erlebnisse verarbeiten müssen. Spielerisch, altersgerecht, ohne Stigma.",
    akzent: "#e11d48",
  },
  {
    icon: BookOpen,
    titel: "Einrichtungen & Organisationen",
    text: "Wir beraten Träger, Wohngruppen, Kitas und soziale Einrichtungen bei Konzeptentwicklung, Qualitätssicherung und Kinderschutz.",
    akzent: "#0891b2",
  },
];

const angebote = [
  {
    icon: Users,
    titel: "Familienberatung",
    text: "Beratung für Familien in schwierigen Phasen: Erziehungsfragen, Kommunikationsprobleme, Trennungssituationen, Überforderung. Lösungsorientiert, auf Augenhöhe.",
    format: "Vor Ort & Online",
  },
  {
    icon: Brain,
    titel: "Psychologische Einzelberatung",
    text: "Für Kinder, Jugendliche und Erwachsene mit persönlichem Beratungsbedarf. Keine Therapie — aber professionelle Begleitung in schwierigen Lebensphasen.",
    format: "Vor Ort & Online",
  },
  {
    icon: Phone,
    titel: "Sorgentelefon",
    text: "Direkter telefonischer Erstkontakt — anonym, kostenlos, ohne Voranmeldung. Für akute Belastungen, erste Orientierung oder das Gespräch, das sonst nirgendwo stattfindet.",
    format: "Telefonisch",
  },
  {
    icon: Video,
    titel: "Online-Beratung & Chat",
    text: "Beratung per Video oder Text — diskret, ortsunabhängig, flexibel. Besonders für Jugendliche, die lieber schreiben als sprechen.",
    format: "Digital",
  },
  {
    icon: GraduationCap,
    titel: "Fachberatung für Institutionen",
    text: "Schulen, Kitas, Jugendhilfeeinrichtungen und Behörden: Wir beraten bei konkreten Fällen, Kinderschutzfragen und institutionellen Herausforderungen.",
    format: "Vor Ort & Online",
  },
  {
    icon: Globe,
    titel: "Präventionsprogramme für Schulen",
    text: "Strukturierte Programme zu Themen wie Resilienz, Stress, Mobbing, Medienkonsum und emotionale Gesundheit — für Klassen, Jahrgänge oder ganze Schulen.",
    format: "Vor Ort",
  },
  {
    icon: MessageSquare,
    titel: "Gruppenangebote & Workshops",
    text: "Thematische Gruppen für Kinder, Jugendliche und Eltern. Peer-Learning, Erfahrungsaustausch und gemeinsames Stärken — in kleinen, sicheren Gruppen.",
    format: "Vor Ort",
  },
  {
    icon: Shield,
    titel: "Krisenberatung",
    text: "Für akute Belastungssituationen unterhalb der Schwelle zur Krisenintervention. Rasche Verfügbarkeit, klare Orientierung, direkte Weiterleitung wenn nötig.",
    format: "Vor Ort & Telefon",
  },
  {
    icon: Lightbulb,
    titel: "Elterntraining & Erziehungsbegleitung",
    text: "Praktische Programme zur Stärkung elterlicher Kompetenzen: Triple P, FAST, eigene Formate. Präventiv und begleitend — nicht erst wenn alles eskaliert ist.",
    format: "Vor Ort",
  },
];

const praevention = [
  {
    icon: TreePine,
    titel: "Resilienzförderung",
    text: "Stärkung der Widerstandskraft bei Kindern und Jugendlichen. Programme zur emotionalen Regulation, Selbstwirksamkeit und Bewältigungsstrategien.",
    schule: true,
  },
  {
    icon: Shield,
    titel: "Kinderschutzprogramme",
    text: "Prävention sexueller Übergriffe, Körperbewusstsein und Grenzen. Altersgerechte Aufklärung für Kinder, Eltern und pädagogisches Personal.",
    schule: true,
  },
  {
    icon: Users,
    titel: "Anti-Mobbing-Konzepte",
    text: "Prävention und Intervention bei Mobbing in Schulklassen und Einrichtungen. Gruppenarbeit, Mediation, Teamentwicklung.",
    schule: true,
  },
  {
    icon: Globe,
    titel: "Medienkompetenz",
    text: "Umgang mit Social Media, Cybermobbing, Suchtgefährdung durch digitale Medien — für Schulen, Eltern und Jugendliche.",
    schule: true,
  },
  {
    icon: Brain,
    titel: "Psychische Gesundheit in der Schule",
    text: "Entstigmatisierung psychischer Erkrankungen, Früherkennung und Erstanlaufstellen. Programme für Lehrkräfte, Schüler und Eltern.",
    schule: true,
  },
  {
    icon: Home,
    titel: "Elternkurse",
    text: "Erziehungskompetenzen, Bindungsförderung, Umgang mit Krisen — präventive Elternkurse, die wirken bevor Hilfe nötig wird.",
    schule: false,
  },
];

const prozessSchritte = [
  {
    nr: "01",
    titel: "Kontakt aufnehmen",
    icon: Phone,
    text: "Per Telefon, E-Mail, Chat oder direkt vor Ort. Kein langer Antrag, kein Gutachten nötig. Der erste Schritt dauert eine Minute.",
    dauer: "Sofort",
  },
  {
    nr: "02",
    titel: "Erstgespräch",
    icon: MessageSquare,
    text: "Kurzgespräch zur Klärung des Anliegens: Was beschäftigt Sie? Was brauchen Sie? Welches Angebot passt am besten?",
    dauer: "Innerhalb 48h",
  },
  {
    nr: "03",
    titel: "Beratung",
    icon: Lightbulb,
    text: "Einmalig oder mehrfach, kurz oder länger — wir passen uns dem Bedarf an. Kein festes Therapieprogramm, sondern echte Begleitung.",
    dauer: "Flexibel",
  },
  {
    nr: "04",
    titel: "Weitervermittlung",
    icon: ArrowRight,
    text: "Wenn mehr gebraucht wird als Beratung, vermitteln wir direkt in passende Angebote — im Ankernetz-Verbund oder extern.",
    dauer: "Bei Bedarf",
  },
];

const faq = [
  {
    frage: "Kostet die Beratung etwas?",
    antwort: "Viele unserer Angebote sind kostenlos oder kostengünstig — insbesondere das Sorgentelefon, Erstgespräche und Krisenberatung. Bei umfangreicheren Angeboten klären wir die Finanzierung gemeinsam: SGB VIII, Krankenkasse, Jugendamt oder Selbstzahlung.",
  },
  {
    frage: "Brauche ich einen Antrag oder eine Überweisung?",
    antwort: "Nein. Unser Beratungsangebot ist bewusst niedrigschwellig. Sie können direkt Kontakt aufnehmen — ohne Antrag, ohne Überweisung, ohne Wartezeit. Der erste Schritt ist ein einfacher Anruf oder eine E-Mail.",
  },
  {
    frage: "Ist die Beratung vertraulich?",
    antwort: "Ja. Alle Gespräche unterliegen der Schweigepflicht. Informationen werden nur mit Ihrer ausdrücklichen Zustimmung weitergegeben — außer bei akuter Kindeswohlgefährdung. Das erklären wir Ihnen offen im Erstgespräch.",
  },
  {
    frage: "Kann ich anonym bleiben?",
    antwort: "Bei Telefonberatung und Chat ist Anonymität möglich. Für eine längerfristige Begleitung brauchen wir grundlegende Kontaktdaten — aber auch hier gilt: keine Weitergabe ohne Einwilligung.",
  },
  {
    frage: "Für wen ist Beratung — nur für Familien in der Krise?",
    antwort: "Nein. Beratung ist für alle, die eine schwierige Phase durchmachen, eine Entscheidung treffen müssen oder einfach jemanden brauchen, der zuhört. Es muss keine Krise sein. Prävention bedeutet: früher helfen, bevor es zur Krise wird.",
  },
  {
    frage: "Bieten Sie auch Fachberatung für Kita-Teams an?",
    antwort: "Ja. Wir beraten Kita-Teams bei auffälligen Kindern, Verdacht auf Kindeswohlgefährdung, Elternkonflikten und Teamdynamiken. Auch Fortbildungen und Supervisionen sind möglich — unbürokratisch und praxisnah.",
  },
  {
    frage: "Wie laufen Schulpräventionsprogramme ab?",
    antwort: "Wir kommen in die Schule — in Klassen, Jahrgangsstufen oder ganze Teams. Programme dauern je nach Format 1 bis mehrere Tage. Die Themen reichen von Resilienz über Kinderschutz bis Mobbing-Prävention. Anfragen über unsere Kontaktseite oder telefonisch.",
  },
  {
    frage: "Was passiert, wenn mehr Hilfe nötig ist als Beratung?",
    antwort: "Wir erkennen frühzeitig, wann eine intensivere Unterstützung sinnvoll ist, und sprechen das offen an. Dann begleiten wir Sie Schritt für Schritt zur passenden Hilfeform — ob Psychotherapie, Jugendhilfe oder Krisenintervention — innerhalb des Ankernetz-Verbunds oder extern.",
  },
];

/* ─── Seite ──────────────────────────────────────────────────── */

export default function BeratungPraeventionPage() {
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
          width: "320px", height: "320px", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(254,194,116,0.06) 0%, transparent 65%)",
        }} />

        <div className="site-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
            marginBottom: "1.25rem",
          }}>
            Anker & Perspektive
          </p>

          <h1 style={{
            fontSize: "clamp(2.75rem, 6vw, 5rem)", fontWeight: 900,
            color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.03em",
            marginBottom: "1.25rem", maxWidth: "16ch",
          }}>
            Früh helfen.<br />
            <span style={{ color: "#6FA3FE" }}>Gemeinsam stärken.</span>
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.75, maxWidth: "560px", marginBottom: "3rem",
          }}>
            Hilfe muss nicht immer stationär sein. Unsere Beratungsangebote sind
            niedrigschwellig, zugänglich und wirksam — als erster Schritt, als
            Begleitung oder als Prävention, bevor etwas eskaliert.
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
              Jetzt beraten lassen
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
                  <p style={{ fontSize: "1.75rem", fontWeight: 900, color: "white", lineHeight: 1 }}>{k.wert}</p>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "6px", lineHeight: 1.5 }}>{k.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ NIEDRIGSCHWELLIG-BANNER ════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(90deg, #059669 0%, #047857 100%)",
        padding: "1.25rem 0",
      }}>
        <div className="site-container" style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "1rem", flexWrap: "wrap",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <CheckCircle size={20} color="white" />
            <p style={{ color: "white", fontWeight: 700, fontSize: "14px" }}>
              Kein Antrag. Keine Überweisung. Kein langes Warten.
            </p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>
              Einfach anrufen — und der erste Schritt ist getan.
            </p>
          </div>
          <a href="tel:+4930224543220" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)",
            color: "white", fontWeight: 700, fontSize: "13px",
            padding: "8px 18px", borderRadius: "8px", textDecoration: "none", flexShrink: 0,
          }}>
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
              Beratung & Prävention
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}>
              Der erste Schritt muss kein großer sein.
            </h2>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px", marginBottom: "1.25rem" }}>
              Nicht jede Schwierigkeit braucht sofort eine stationäre Maßnahme.
              Manchmal reicht ein Gespräch, eine Orientierung oder eine
              fachkundige Einschätzung — und vieles löst sich, was sich sonst
              zu einer Krise entwickelt hätte.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px", marginBottom: "1.25rem" }}>
              Prävention bedeutet nicht, auf Probleme zu warten. Es bedeutet,
              früh genug hinzuschauen — und dann auch wirklich zu helfen.
              Unsere Beratungsangebote sind der Beweis, dass wirksame Unterstützung
              nicht kompliziert sein muss.
            </p>
            <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "15px" }}>
              Für Familien, Kinder, Jugendliche, Fachkräfte und Einrichtungen —
              online, per Telefon oder vor Ort. Einfach. Schnell. Ohne Hürden.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {[
              { icon: CheckCircle, text: "Kein Antrag, keine Überweisung, keine Diagnose nötig" },
              { icon: CheckCircle, text: "Viele Angebote kostenlos oder kostengünstig" },
              { icon: CheckCircle, text: "Online, telefonisch und vor Ort verfügbar" },
              { icon: CheckCircle, text: "Für Einzelpersonen, Familien und Institutionen" },
              { icon: CheckCircle, text: "Vertraulich und ohne bürokratische Hürden" },
              { icon: CheckCircle, text: "Direkte Weitervermittlung in intensivere Hilfen möglich" },
              { icon: CheckCircle, text: "Vernetzt mit dem gesamten Ankernetz-Verbund" },
              { icon: CheckCircle, text: "Auch für Fachkräfte und Einrichtungen ohne formellen Auftrag" },
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

      {/* ══ ZIELGRUPPEN ═══════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#1a3f6f", marginBottom: "0.75rem",
            }}>
              Für wen?
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}>
              Beratung für alle, die sie brauchen
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
              Unser Angebot richtet sich an jeden — ohne Schwelle, ohne
              Schubladendenken und ohne Voraussetzungen.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem",
          }}>
            {zielgruppen.map((z) => {
              const Icon = z.icon;
              return (
                <div key={z.titel} className="bento-card" style={{
                  background: "white", borderRadius: "16px",
                  padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)",
                }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    background: z.akzent + "15",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1rem",
                  }}>
                    <Icon size={22} color={z.akzent} />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.5rem" }}>{z.titel}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.7 }}>{z.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ ANGEBOTE ══════════════════════════════════════════════ */}
      <section style={{ background: "white", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem",
            }}>
              Unser Angebot
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.2, letterSpacing: "-0.02em",
              maxWidth: "520px",
            }}>
              Beratung in jeder Form — für jeden Bedarf
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem",
          }}>
            {angebote.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.titel} className="bento-card" style={{
                  background: "#f4f7fb", borderRadius: "16px",
                  padding: "1.75rem", border: "1px solid rgba(26,63,111,0.07)",
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute", top: "1.25rem", right: "1.25rem",
                    background: "#eef4ff", borderRadius: "9999px",
                    padding: "2px 10px", fontSize: "10px", fontWeight: 700,
                    color: "#1a3f6f", letterSpacing: "0.04em",
                  }}>
                    {a.format}
                  </div>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "10px",
                    background: "#1a3f6f",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}>
                    <Icon size={20} color="white" />
                  </div>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "15px", marginBottom: "0.625rem" }}>{a.titel}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.75 }}>{a.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ PRÄVENTION ════════════════════════════════════════════ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }}>
            <div>
              <p style={{
                fontSize: "10px", fontWeight: 800, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "#1a3f6f", marginBottom: "1rem",
              }}>
                Prävention
              </p>
              <h2 style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800,
                color: "#1a3f6f", lineHeight: 1.25, letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}>
                Stärken bevor etwas bricht
              </h2>
              <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Prävention wirkt — das zeigt die Forschung eindeutig. Jeder Euro,
                der in präventive Maßnahmen investiert wird, spart mehrfach in
                späteren Kriseninterventionen.
              </p>
              <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.85 }}>
                Unsere Präventionsprogramme gehen in Schulen, Kitas und
                Einrichtungen — und wirken dort, wo Kinder und Jugendliche
                täglich sind.
              </p>
            </div>

            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem",
            }}>
              {praevention.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.titel} className="bento-card" style={{
                    background: "white", borderRadius: "14px",
                    padding: "1.5rem", border: "1px solid rgba(26,63,111,0.07)",
                    position: "relative",
                  }}>
                    {p.schule && (
                      <div style={{
                        position: "absolute", top: "1rem", right: "1rem",
                        background: "#eef4ff", borderRadius: "9999px",
                        padding: "2px 8px", fontSize: "10px", fontWeight: 700,
                        color: "#1a3f6f",
                      }}>
                        Schule
                      </div>
                    )}
                    <Icon size={20} color="#6FA3FE" style={{ marginBottom: "0.75rem" }} />
                    <p style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "13px", marginBottom: "4px" }}>{p.titel}</p>
                    <p style={{ fontSize: "12px", color: "#374151", lineHeight: 1.65 }}>{p.text}</p>
                  </div>
                );
              })}
            </div>
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
              So einfach geht's
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800,
              color: "white", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              Von der ersten Frage zur echten Hilfe
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px",
            background: "rgba(255,255,255,0.08)", borderRadius: "16px", overflow: "hidden",
          }}>
            {prozessSchritte.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.04)",
                  padding: "2rem 1.5rem",
                  position: "relative",
                }}>
                  {i < prozessSchritte.length - 1 && (
                    <div style={{
                      position: "absolute", top: "2.75rem", right: "-12px",
                      width: "24px", height: "1px",
                      background: "rgba(255,255,255,0.2)", zIndex: 1,
                    }} />
                  )}
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    background: i === 0 ? "#6FA3FE" : "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}>
                    <Icon size={20} color="white" />
                  </div>
                  <span style={{
                    fontSize: "10px", fontWeight: 700, color: "#6FA3FE",
                    background: "rgba(111,163,254,0.15)", padding: "3px 8px",
                    borderRadius: "9999px", letterSpacing: "0.04em",
                    display: "inline-block", marginBottom: "0.625rem",
                  }}>{s.dauer}</span>
                  <p style={{ fontWeight: 700, color: "white", fontSize: "14px", marginBottom: "0.625rem" }}>{s.titel}</p>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{s.text}</p>
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
              Für Fachkräfte & Institutionen
            </p>
            <h2 style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800,
              color: "#1a3f6f", lineHeight: 1.25, letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}>
              Ihr Anker, wenn Sie nicht mehr weiterwissen
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.85, marginBottom: "2rem" }}>
              Fachkräfte brauchen manchmal genau das, was sie anderen geben:
              jemanden, der zuhört, einschätzt und Wege aufzeigt — ohne
              bürokratischen Aufwand.
            </p>
            <a href="tel:+4930224543220" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#1a3f6f", color: "white",
              fontWeight: 700, fontSize: "14px",
              padding: "12px 22px", borderRadius: "10px",
              textDecoration: "none",
            }}>
              <Phone size={16} />
              Jetzt anfragen
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { icon: MessageSquare, text: "Fallberatung ohne formellen Auftrag — einfach anrufen" },
              { icon: GraduationCap, text: "Fachberatung für Schulen und Kitas bei auffälligen Kindern" },
              { icon: Shield, text: "Beratung bei Verdacht auf Kindeswohlgefährdung" },
              { icon: Users, text: "Kollegiale Beratung und Supervision auf Anfrage" },
              { icon: BookOpen, text: "Fortbildungen und Workshops für Teams" },
              { icon: Globe, text: "Präventionsprogramme und Projekttage vor Ort" },
              { icon: ClipboardList, text: "Konzeptentwicklung und Qualitätssicherung für Einrichtungen" },
              { icon: Lock, text: "Vertraulich — keine Weitergabe ohne Einwilligung" },
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
              Was Ratsuchende und Fachkräfte fragen
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
          <HandHeart size={36} color="#6FA3FE" style={{ marginBottom: "1.5rem" }} />
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800,
            color: "white", marginBottom: "1.25rem", letterSpacing: "-0.02em", lineHeight: 1.2,
          }}>
            Manchmal reicht ein Gespräch.
          </h2>
          <p style={{
            fontSize: "15px", color: "rgba(255,255,255,0.6)",
            marginBottom: "2.5rem", lineHeight: 1.75,
          }}>
            Rufen Sie uns an, schreiben Sie uns oder kommen Sie einfach vorbei.
            Wir sind da — ohne Schwelle, ohne Umweg.
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
              Jetzt anrufen
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
