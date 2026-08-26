import { Compass, ShieldCheck, Clock, EyeOff, ListChecks, Target, PhoneCall, AlertTriangle, Scale, Globe2, Eye, Users, MessageSquare } from "lucide-react";
import Kompass from "../components/Kompass";
import { SeoFaqSchema } from "../components/SeoFaqSchema";

const FAEHIGKEITEN = [
  {
    icon: AlertTriangle,
    titel: "Erkennt akute Gefahr sofort",
    text: "Die erste Frage prüft, ob eine akute Gefahr besteht. Falls ja, führt der Ankernetz-Kompass sofort zur Notfallnummer statt zu weiteren Fragen.",
  },
  {
    icon: Scale,
    titel: "Unterscheidet Beratung von Psychotherapie",
    text: "Über eine gezielte Frage zur Alltagsbeeinträchtigung erkennt er, ob ein klärendes Gespräch reicht oder eine intensivere Behandlung sinnvoller ist.",
  },
  {
    icon: Target,
    titel: "Ordnet allen 9 relevanten Angeboten zu",
    text: "Krisenintervention, Beratung, Frühe Hilfen, Psychotherapie, Diagnostik, therapeutisches Wohnen, Jugendhilfe, Kita-Fachberatung und Übergang Arbeit.",
  },
  {
    icon: Eye,
    titel: "Zeigt, worauf jede Empfehlung beruht",
    text: "Keine Black Box - zu jeder Empfehlung steht sichtbar, welche Ihrer Angaben dazu geführt haben.",
  },
  {
    icon: Globe2,
    titel: "Funktioniert für DE, AT und CH",
    text: "Berücksichtigt auch Anfragen aus Österreich und der Schweiz und weist auf die Besonderheiten bei einer Aufnahme aus dem Ausland hin.",
  },
  {
    icon: Users,
    titel: "Auch stellvertretend nutzbar",
    text: "Eltern, Angehörige und Fachkräfte können ihn für ein Kind, eine Schülerin oder eine begleitete Familie ausfüllen.",
  },
  {
    icon: MessageSquare,
    titel: "Direkt aus dem Chat mit Lena erreichbar",
    text: "Der Kompass lässt sich auch mitten aus einem Gespräch mit Lena heraus starten, ohne die Seite zu verlassen.",
  },
  {
    icon: EyeOff,
    titel: "Bleibt anonym, solange Sie das möchten",
    text: "Keine Anmeldung, keine Diagnose. Erst bei einer anschließenden Kontaktaufnahme werden Angaben Teil eines echten Gesprächs.",
  },
];

const SCHRITTE = [
  {
    icon: ListChecks,
    titel: "Fragen beantworten",
    text: "Neun kurze Fragen zu Alter, Situation und Alltagsbelastung. Mehrfachauswahl möglich, jederzeit zurück oder neu starten.",
  },
  {
    icon: Target,
    titel: "Empfehlung erhalten",
    text: "Eine Einschätzung, welche unserer Angebote am ehesten passen könnten - mit einer kurzen Begründung, worauf sie beruht.",
  },
  {
    icon: PhoneCall,
    titel: "Direkt Kontakt aufnehmen",
    text: "Ein Klick genügt, um direkt zur Platzanfrage oder zum passenden Angebot zu wechseln - oder Sie rufen einfach an.",
  },
];

const FAQ = [
  {
    q: "Ist der Ankernetz-Kompass eine Diagnose?",
    a: "Nein. Der Ankernetz-Kompass stellt keine Diagnose und ersetzt kein fachliches Erstgespräch. Er gibt eine erste, unverbindliche Orientierung, welches unserer Angebote zur beschriebenen Situation passen könnte.",
  },
  {
    q: "Werden meine Antworten gespeichert?",
    a: "Die Antworten werden vertraulich an unser Team übermittelt, damit wir bei einer anschließenden Kontaktaufnahme direkt informiert sind und nicht bei null anfangen. Ohne Kontaktaufnahme bleiben Sie für uns anonym - wir erfahren nicht, wer den Ankernetz-Kompass ausgefüllt hat.",
  },
  {
    q: "Kann ich den Ankernetz-Kompass für jemand anderen ausfüllen?",
    a: "Ja. Eltern, Angehörige und Fachkräfte füllen ihn häufig stellvertretend aus - etwa für ein Kind, eine Schülerin oder eine Familie, die sie begleiten.",
  },
  {
    q: "Was passiert nach dem Ausfüllen?",
    a: "Sie sehen sofort eine Einschätzung mit direkten Links zu den passenden Angeboten. Ob und wann Sie danach Kontakt aufnehmen, entscheiden Sie - es entsteht keine Verpflichtung.",
  },
  {
    q: "Kostet der Ankernetz-Kompass etwas?",
    a: "Nein, er ist komplett kostenlos, genau wie die Erstberatung bei Ankernetz.",
  },
];

export default function KompassPage() {
  return (
    <main style={{ overflowX: "hidden", background: "#f4f7fb", paddingTop: "5rem" }}>
      <section style={{ background: "#0b1220", padding: "5rem 1.5rem 3rem" }}>
        <div className="site-container" style={{ maxWidth: "680px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "999px", padding: "6px 14px", marginBottom: "1.5rem",
          }}>
            <Compass size={14} color="#8fb8ff" />
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8fb8ff", letterSpacing: "0.03em" }}>Ankernetz-Kompass</span>
          </div>
          <h1 style={{
            fontSize: "clamp(1.875rem,4vw,2.75rem)", fontWeight: 700, color: "#ffffff",
            letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: "1.25rem",
          }}>
            Ankernetz-Kompass: Welche Hilfe passt zu Ihrer Situation in der Kinder- und Jugendhilfe?
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "1.75rem" }}>
            Die meisten Menschen, die sich bei uns melden, wissen zu Beginn nicht genau, welche Unterstützung sie eigentlich brauchen -
            und das ist völlig normal. Der Ankernetz-Kompass hilft dabei, aus einem diffusen Gefühl von Überforderung eine erste,
            konkrete Richtung zu machen. Keine Diagnose, kein Behördendeutsch, einfach neun ehrliche Fragen.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {[
              { icon: ShieldCheck, label: "Kostenlos" },
              { icon: EyeOff, label: "Anonym" },
              { icon: Clock, label: "3 Minuten" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "999px", padding: "6px 12px",
              }}>
                <Icon size={13} color="rgba(255,255,255,0.6)" />
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.75)" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#F5F0EA", padding: "4rem 1.5rem", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="site-container" style={{ maxWidth: "960px" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8B3A22", marginBottom: "0.75rem", textAlign: "center" }}>
            Was der Ankernetz-Kompass kann
          </p>
          <h2 style={{ fontSize: "clamp(1.375rem,2.75vw,1.875rem)", fontWeight: 700, color: "#1A1614", textAlign: "center", marginBottom: "2.5rem", letterSpacing: "-0.02em" }}>
            Mehr als ein einfacher Fragebogen
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {FAEHIGKEITEN.map((f) => (
              <div key={f.titel} style={{
                background: "#ffffff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "14px", padding: "1.5rem",
              }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "9px", marginBottom: "0.875rem",
                  background: "#fbf1ec", display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <f.icon size={18} color="#8B3A22" />
                </div>
                <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1614", marginBottom: "0.375rem", lineHeight: 1.35 }}>{f.titel}</p>
                <p style={{ fontSize: "0.8125rem", color: "#5A4E48", lineHeight: 1.65, margin: 0 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "3.5rem 1.5rem", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="site-container" style={{ maxWidth: "820px" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8B3A22", marginBottom: "1.5rem", textAlign: "center" }}>
            So funktioniert's
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.75rem" }}>
            {SCHRITTE.map((s, i) => (
              <div key={s.titel} style={{ textAlign: "left" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px", marginBottom: "1rem",
                  background: "#fbf1ec", display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative",
                }}>
                  <s.icon size={20} color="#8B3A22" />
                  <span style={{
                    position: "absolute", top: "-8px", right: "-8px", width: "20px", height: "20px",
                    borderRadius: "50%", background: "#8B3A22", color: "white", fontSize: "0.625rem",
                    fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {i + 1}
                  </span>
                </div>
                <p style={{ fontSize: "1rem", fontWeight: 700, color: "#1A1614", marginBottom: "0.375rem" }}>{s.titel}</p>
                <p style={{ fontSize: "0.875rem", color: "#5A4E48", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Kompass />

      <section style={{ background: "#F5F0EA", padding: "4.5rem 1.5rem", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="site-container" style={{ maxWidth: "780px" }}>
          <p style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8B3A22", marginBottom: "1.5rem" }}>
            Häufige Fragen zum Ankernetz-Kompass
          </p>
          <div>
            {FAQ.map((item, i) => (
              <details key={i} className="seo-faq-item" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", padding: "0" }}>
                <summary style={{
                  fontSize: "0.9375rem", fontWeight: 600, color: "#1A1614",
                  cursor: "pointer", listStyle: "none", display: "flex",
                  justifyContent: "space-between", alignItems: "center",
                  gap: "1rem", padding: "1.375rem 0",
                }}>
                  <span>{item.q}</span>
                  <span className="faq-icon" style={{ fontSize: "1.375rem", flexShrink: 0, color: "#8B3A22", fontWeight: 300, lineHeight: 1, transition: "transform 0.2s" }}>+</span>
                </summary>
                <p style={{ fontSize: "0.9375rem", color: "#5A4E48", lineHeight: 1.85, paddingBottom: "1.5rem", paddingRight: "2.5rem" }}>
                  {item.a}
                </p>
              </details>
            ))}
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />
          </div>
        </div>
      </section>

      <style>{`
        .seo-faq-item[open] .faq-icon { transform: rotate(45deg); }
        .seo-faq-item summary::-webkit-details-marker { display: none; }
      `}</style>

      <SeoFaqSchema items={FAQ.map((f) => ({ q: f.q, a: f.a }))} />
    </main>
  );
}
