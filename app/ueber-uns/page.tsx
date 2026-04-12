import Link from "next/link";

const werte = [
  { titel: "Menschlichkeit", text: "Jedes Kind verdient Würde, Respekt und echte Beziehungen — das ist unser Fundament." },
  { titel: "Fachlichkeit", text: "Wir handeln evidenzbasiert, reflektiert und mit hohem professionellen Anspruch." },
  { titel: "Verlässlichkeit", text: "Jugendämter, Familien und Kinder können sich auf uns verlassen — immer." },
  { titel: "Vernetzung", text: "Kein Angebot steht allein. Alle Bereiche des Ankernetzes greifen ineinander." },
  { titel: "Transparenz", text: "Offene Kommunikation mit allen Beteiligten — keine versteckten Prozesse." },
  { titel: "Entwicklung", text: "Wir lernen ständig dazu und entwickeln unsere Angebote konsequent weiter." },
];

const team = [
  { rolle: "Geschäftsführung", name: "—", text: "Verantwortlich für Strategie, Qualität und Weiterentwicklung des Ankernetzes." },
  { rolle: "Fachliche Leitung", name: "—", text: "Steuerung der pädagogischen und therapeutischen Qualität aller Angebote." },
  { rolle: "Psychologischer Dienst", name: "—", text: "Diagnostik, Psychotherapie und fachliche Beratung für alle Bereiche." },
  { rolle: "Pädagogische Teams", name: "—", text: "Erfahrene Fachkräfte in allen Wohngruppen und Angeboten." },
];

export default function UeberUnsPage() {
  return (
    <main>
      {/* HERO */}
      <section
        className="relative min-h-[60vh] flex items-end pb-20 px-6 pt-32"
        style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <p className="text-[#1a3f6f] text-sm font-semibold uppercase tracking-widest mb-4">Ankernetz</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Über uns
          </h1>
          <p className="text-white/60 text-xl font-light max-w-2xl leading-relaxed">
            Ankernetz ist aus der Überzeugung entstanden, dass Jugendhilfe mehr sein kann —
            vernetzter, spezialisierter, menschlicher.
          </p>
        </div>
      </section>

      {/* VISION */}
      <section className="py-28 px-6 bg-[#F5F5F7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1a3f6f] mb-6">Unsere Vision</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E] mb-8 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Ein Netz, das trägt.
          </h2>
          <div className="space-y-5 text-lg text-[#6E6E73] leading-relaxed">
            <p>
              Ankernetz wurde gegründet, weil wir erlebt haben, wie Kinder und Jugendliche
              zwischen den Systemen verloren gehen. Zu viele Übergaben, zu wenig Kontinuität,
              zu wenig Vernetzung der einzelnen Hilfeformen.
            </p>
            <p>
              Unsere Antwort: ein Netzwerk aus spezialisierten Angeboten, das alle relevanten
              Bereiche abdeckt — von der Krisenintervention bis zum Übergang ins Arbeitsleben.
              Unter einem Dach. Mit einem gemeinsamen Verständnis. Für dasselbe Ziel.
            </p>
            <p>
              Ankernetz ist kein klassischer Träger. Wir denken Jugendhilfe neu —
              mit dem Anspruch einer Premium-Dienstleistung, dem Herzen einer sozialen Institution
              und der Vernetzung eines echten Systems.
            </p>
          </div>
        </div>
      </section>

      {/* ZAHLEN */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { zahl: "11", einheit: "Angebotsbereiche", text: "Unter einem Dach vernetzt" },
            { zahl: "24/7", einheit: "Krisenbereitschaft", text: "An 365 Tagen im Jahr" },
            { zahl: "0–25", einheit: "Jahre", text: "Gesamte Spanne von Kindheit bis Erwachsensein" },
            { zahl: "100%", einheit: "Fachlichkeit", text: "Qualifizierte Teams in allen Bereichen" },
          ].map((z) => (
            <div key={z.zahl} className="text-center p-6">
              <p className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-1" style={{ letterSpacing: "-0.02em" }}>{z.zahl}</p>
              <p className="text-[#1a3f6f] font-semibold text-sm mb-2">{z.einheit}</p>
              <p className="text-[#6E6E73] text-sm">{z.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WERTE */}
      <section className="py-28 px-6 bg-[#F5F5F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1a3f6f] mb-4">Was uns leitet</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E]" style={{ letterSpacing: "-0.02em" }}>Unsere Werte</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {werte.map((w) => (
              <div key={w.titel} className="bg-white rounded-3xl p-8 shadow-sm">
                <div className="w-8 h-1 bg-[#1a3f6f] mb-6 rounded-full" />
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">{w.titel}</h3>
                <p className="text-[#6E6E73] leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1a3f6f] mb-4">Wer wir sind</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E]" style={{ letterSpacing: "-0.02em" }}>Das Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((t) => (
              <div key={t.rolle} className="flex gap-6 items-start p-8 rounded-3xl bg-[#F5F5F7]">
                <div className="w-16 h-16 rounded-full bg-[#1A1A2E] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">A</span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#1a3f6f] mb-1">{t.rolle}</p>
                  <p className="font-bold text-[#1A1A2E] mb-2">{t.name}</p>
                  <p className="text-[#6E6E73] text-sm leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITÄT */}
      <section
        className="py-20 px-6 text-white"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #1e3a5f 100%)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1a3f6f] mb-5">Qualität & Standards</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ letterSpacing: "-0.02em" }}>
              Professionell.<br />Reguliert.<br />Verlässlich.
            </h2>
            <p className="text-white/60 leading-relaxed">
              Alle Ankernetz-Angebote werden nach den gesetzlichen Anforderungen des SGB VIII
              betrieben und sind durch die zuständigen Behörden genehmigt und beaufsichtigt.
              Regelmäßige interne Qualitätssicherung und externe Prüfungen sichern unsere Standards.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "Betriebserlaubnis nach § 45 SGB VIII",
              "Regelmäßige interne Supervision",
              "Fortlaufende Mitarbeiterfortbildungen",
              "Externe Qualitätsprüfungen",
              "Beschwerdemanagement nach Standard",
              "Datenschutz nach DSGVO",
            ].map((p) => (
              <div key={p} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1a3f6f] flex-shrink-0" />
                <span className="text-white/70 text-sm">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#F5F5F7] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">Lernen Sie uns kennen.</h2>
          <p className="text-[#6E6E73] mb-8">Wir freuen uns über Anfragen, Kooperationen und Gespräche.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kontakt" className="px-8 py-3.5 bg-[#1A1A2E] text-white font-semibold rounded-full text-sm hover:bg-[#2a2a3e] transition-colors">
              Kontakt aufnehmen
            </Link>
            <Link href="/platzanfrage" className="px-8 py-3.5 border border-[#1A1A2E]/20 text-[#1A1A2E] font-medium rounded-full text-sm hover:bg-[#1A1A2E]/5 transition-colors">
              Platzanfrage stellen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
