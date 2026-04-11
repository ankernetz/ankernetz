import Link from "next/link";

const angebote = [
  {
    slug: "krisenintervention",
    titel: "Krisenintervention",
    claim: "Sofort da. Wenn es zählt.",
    beschreibung: "24/7 Krisenaufnahme, Stabilisierung und Perspektivklärung für Jugendliche in akuten Krisensituationen.",
    zielgruppe: "12–17 Jahre",
    farbe: "#0f172a",
    gross: true,
  },
  {
    slug: "therapie-wohnen",
    titel: "Therapie & Wohnen",
    claim: "Raum zum Ankommen. Begleitung zum Wachsen.",
    beschreibung: "Therapeutische Wohngruppen mit intensiver Begleitung, therapeutischem Rahmen und Traumaarbeit.",
    zielgruppe: "12–17 Jahre",
    farbe: "#1e3a5f",
    gross: false,
  },
  {
    slug: "psychotherapie",
    titel: "Kinder- und Jugendpsychotherapie",
    claim: "Professionelle Therapie. Im Herzen des Systems.",
    beschreibung: "Psychotherapie mit Kassensitz, diagnostische Behandlung und enge Vernetzung mit Wohngruppen, Jugendamt und Familien.",
    zielgruppe: "Kinder & Jugendliche",
    farbe: "#1a2f4a",
    gross: false,
  },
  {
    slug: "fruehe-hilfen",
    titel: "Frühe Hilfen",
    claim: "Schutz von Anfang an.",
    beschreibung: "Aufnahme und intensive Betreuung von Kleinkindern — mit Fokus auf Bindung, Sicherheit und entwicklungspsychologische Förderung.",
    zielgruppe: "0–6 Jahre",
    farbe: "#2d4a6e",
    gross: false,
  },
  {
    slug: "jugendhilfe",
    titel: "Jugendhilfe",
    claim: "Sicherheit im Alltag. Zukunft im Blick.",
    beschreibung: "Kinderwohngruppen mit sicherer Alltagsstruktur, Beziehungsarbeit und Entwicklungsförderung.",
    zielgruppe: "6–12 Jahre",
    farbe: "#243b55",
    gross: false,
  },
  {
    slug: "diagnostik-clearing",
    titel: "Diagnostik & Clearing",
    claim: "Klarheit schafft die richtige Hilfe.",
    beschreibung: "Psychologische Diagnostik, IQ-Testung, Verhaltenseinschätzung und Vorbereitung der Hilfeplanung für Jugendämter.",
    zielgruppe: "Alle Altersgruppen",
    farbe: "#1e3650",
    gross: false,
  },
  {
    slug: "versorgung",
    titel: "Versorgung",
    claim: "Mehr als das Nötigste. Würde im Alltag.",
    beschreibung: "Bereitstellung von Kleidung und Ausstattung für Kinder und Jugendliche mit spezifischen Störungsbildern — als Teil des Hilfesystems.",
    zielgruppe: "Kinder & Jugendliche",
    farbe: "#2c3e50",
    gross: false,
  },
  {
    slug: "beratung-praevention",
    titel: "Beratung & Prävention",
    claim: "Früh helfen. Gemeinsam stärken.",
    beschreibung: "Niedrigschwelliger Einstieg: Familienberatung, Online-Beratung, Sorgentelefon und Präventionsangebote für Schulen und Institutionen.",
    zielgruppe: "Familien & Fachkräfte",
    farbe: "#1f3d5c",
    gross: false,
  },
  {
    slug: "uebergang-arbeit",
    titel: "Übergang Arbeit",
    claim: "Der nächste Schritt. Mit Begleitung.",
    beschreibung: "Berufsorientierung, Bewerbungstraining, Praktika und Begleitung des Übergangs von Schule in den Beruf.",
    zielgruppe: "Jugendliche & junge Erwachsene",
    farbe: "#163452",
    gross: false,
  },
  {
    slug: "ankerkleidung",
    titel: "Ankerkleidung",
    claim: "Stabilität. Selbstwert. Alltag.",
    beschreibung: "Spezialisierte Kleidungsversorgung für Kinder und Jugendliche mit besonderen Bedarfen — als integrierter Teil des Hilfeprozesses.",
    zielgruppe: "Kinder & Jugendliche",
    farbe: "#1a2e45",
    gross: false,
  },
  {
    slug: "kita-beratung",
    titel: "Beratung in Kitas",
    claim: "Früh erkennen. Gezielt begleiten.",
    beschreibung: "Therapeutisch fundierte Beratung für Kitas — zur Unterstützung von Fachkräften im Umgang mit auffälligen Kindern und herausfordernden Situationen.",
    zielgruppe: "Kitas & Fachkräfte",
    farbe: "#1e3d5a",
    gross: false,
  },
];

const staerken = [
  {
    titel: "Vernetzt",
    text: "Alle Angebote greifen ineinander. Kein Kind fällt zwischen die Stühle.",
  },
  {
    titel: "Spezialisiert",
    text: "Jedes Angebot ist auf eine spezifische Situation und Zielgruppe zugeschnitten.",
  },
  {
    titel: "Verlässlich",
    text: "Feste Ansprechpartner, klare Prozesse, transparente Kommunikation mit Jugendämtern.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          background: "linear-gradient(160deg, #0f172a 0%, #1A1A2E 40%, #1e3a5f 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="fade-in-up text-[#4A7FA5] text-sm font-semibold uppercase tracking-widest mb-6">
            Kinder- und Jugendhilfe
          </p>
          <h1
            className="fade-in-up delay-1 text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Ankernetz
          </h1>
          <p className="fade-in-up delay-2 text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Stabilität. Orientierung. Perspektive.
          </p>
          <div className="fade-in-up delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#angebote"
              className="px-8 py-3.5 bg-white text-[#1A1A2E] font-semibold rounded-full text-sm hover:bg-white/90 transition-colors"
            >
              Angebote entdecken
            </a>
            <Link
              href="/kontakt"
              className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-full text-sm hover:bg-white/10 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-white/60 animate-pulse" />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 px-6 bg-[#F5F5F7] text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4A7FA5] mb-5">
            Ein Netz. Zehn Antworten.
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#1A1A2E] mb-6 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Für jede Situation die richtige Hilfe.
          </h2>
          <p className="text-lg text-[#6E6E73] leading-relaxed">
            Ankernetz ist ein Netzwerk aus spezialisierten Hilfsangeboten für Kinder und Jugendliche —
            von der akuten Krisenintervention über Psychotherapie und frühe Hilfen
            bis zum Übergang in den Beruf. Alle Angebote sind aufeinander abgestimmt
            und unter einem gemeinsamen starken Dach vereint.
          </p>
        </div>
      </section>

      {/* ANGEBOTE GRID */}
      <section id="angebote" className="py-8 px-6 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Krisenintervention groß */}
          <Link
            href="/krisenintervention"
            className="group relative rounded-3xl overflow-hidden md:col-span-2 min-h-[360px] flex flex-col justify-end p-8 hover:scale-[1.01] transition-transform duration-300"
            style={{ background: "linear-gradient(145deg, #0f172a 0%, #1e3a5f 100%)" }}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="relative z-10">
              <span className="inline-block bg-red-500/20 text-red-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                24/7 Krisenaufnahme
              </span>
              <h3 className="text-white text-3xl font-bold mb-2 tracking-tight">Krisenintervention</h3>
              <p className="text-white/60 text-base italic mb-3">Sofort da. Wenn es zählt.</p>
              <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-lg">
                Rund um die Uhr verfügbar — für Jugendliche in akuten Krisensituationen.
                Sofortaufnahme, Stabilisierung und schnelle Perspektivklärung.
              </p>
              <span className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                Mehr erfahren
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Psychotherapie groß */}
          <Link
            href="/psychotherapie"
            className="group relative rounded-3xl overflow-hidden min-h-[360px] flex flex-col justify-end p-8 hover:scale-[1.02] transition-transform duration-300"
            style={{ background: "linear-gradient(145deg, #1a2f4a 0%, #243b55 100%)" }}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="relative z-10">
              <span className="inline-block bg-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Zentrale Säule
              </span>
              <h3 className="text-white text-2xl font-bold mb-2 tracking-tight">Kinder- und Jugend&shy;psychotherapie</h3>
              <p className="text-white/60 text-sm italic mb-3">Professionelle Therapie. Im Herzen des Systems.</p>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Mit Kassensitz, eingebunden in alle Hilfeprozesse.
              </p>
              <span className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                Mehr erfahren
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Restliche Angebote */}
          {angebote.slice(2).filter(a => a.slug !== "krisenintervention" && a.slug !== "psychotherapie").map((a) => (
            <Link
              key={a.slug}
              href={`/${a.slug}`}
              className="group relative rounded-3xl overflow-hidden min-h-[280px] flex flex-col justify-end p-8 hover:scale-[1.02] transition-transform duration-300"
              style={{ background: `linear-gradient(145deg, ${a.farbe} 0%, ${a.farbe}cc 100%)` }}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="relative z-10">
                <span className="text-white/50 text-xs font-medium uppercase tracking-widest">
                  {a.zielgruppe}
                </span>
                <h3 className="text-white text-xl font-bold mt-2 mb-2 tracking-tight">{a.titel}</h3>
                <p className="text-white/60 text-sm italic mb-3">{a.claim}</p>
                <p className="text-white/70 text-sm leading-relaxed mb-4">{a.beschreibung}</p>
                <span className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                  Mehr erfahren
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ANKERKLEIDUNG TEASER */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[400px]"
            style={{ background: "linear-gradient(135deg, #1a2e45 0%, #2c3e50 100%)" }}>
            {/* Text */}
            <div className="p-12 flex flex-col justify-center">
              <p className="text-[#4A7FA5] text-xs font-bold uppercase tracking-widest mb-4">
                Neu — Ankernetz Versorgung
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight" style={{ letterSpacing: "-0.02em" }}>
                Wir machen mehr als Beratung.
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Ankerkleidung ist ein integrierter Teil unseres Hilfesystems:
                spezialisierte Kleidung für Kinder und Jugendliche mit unterschiedlichen
                Störungsbildern — entwickelt mit Fachkräften, nicht im Katalog ausgewählt.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["ADHS", "Trauma & PTBS", "Autismus", "Bindungsstörungen", "Angststörungen", "Vernachlässigung"].map((tag) => (
                  <span key={tag} className="text-xs font-medium text-white/60 border border-white/20 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/ankerkleidung"
                className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-[#1a2e45] px-6 py-3 rounded-full hover:bg-white/90 transition-colors w-fit">
                Kollektion entdecken
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h8M7 3l4 4-4 4" /></svg>
              </Link>
            </div>
            {/* Visual */}
            <div className="hidden lg:flex items-center justify-center p-12">
              <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
                {["ADHS", "Trauma", "Autismus", "Bindung", "Angst", "Vernach."].map((tag, i) => (
                  <div key={tag}
                    className="aspect-square rounded-2xl flex items-end p-3"
                    style={{ background: `rgba(74,127,165,${0.1 + i * 0.06})`, border: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-white/50 text-[10px] font-medium leading-tight">{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STÄRKEN */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#4A7FA5] mb-4">
              Was uns auszeichnet
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#1A1A2E] tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Stärke durch Verbindung.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {staerken.map((s) => (
              <div key={s.titel} className="text-center">
                <div className="w-12 h-1 bg-[#4A7FA5] mx-auto mb-6 rounded-full" />
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">{s.titel}</h3>
                <p className="text-[#6E6E73] leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FÜR FACHKRÄFTE */}
      <section
        className="py-28 px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #1e3a5f 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4A7FA5] mb-5">
            Für Jugendämter & Fachkräfte
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Klare Prozesse.<br />Schnelle Reaktion.<br />Verlässliche Partner.
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Ankernetz arbeitet eng mit Jugendämtern und Fachkräften zusammen.
            Schnelle Rückmeldungen, transparente Einschätzungen und passgenaue
            Hilfeformen — direkt und unkompliziert.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/platzanfrage"
              className="px-8 py-3.5 bg-white text-[#1A1A2E] font-semibold rounded-full text-sm hover:bg-white/90 transition-colors"
            >
              Platzanfrage stellen
            </Link>
            <Link
              href="/kontakt"
              className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-full text-sm hover:bg-white/10 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
