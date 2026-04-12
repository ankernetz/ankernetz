import Link from "next/link";

const kategorien = [
  {
    slug: "adhs",
    titel: "ADHS & Hyperaktivität",
    beschreibung: "Kleidung für Kinder mit ADHS: reizarm, funktional, komfortabel. Keine ablenkenden Details, bequeme Schnitte, einfaches An- und Ausziehen.",
    produkte: [
      { name: "Basishose Komfort", material: "100% Bio-Baumwolle", farben: ["Anthrazit", "Navy", "Grau"], preis: "29,90 €", beschreibung: "Weicher Bund ohne Knöpfe, elastischer Schnitt, keine störenden Nähte innen." },
      { name: "Alltags-Shirt Reizarm", material: "Jersey Bio-Baumwolle", farben: ["Weiß", "Hellgrau", "Blau"], preis: "19,90 €", beschreibung: "Ohne Aufdruck, nahtlos verarbeitet, angenehm auf der Haut." },
      { name: "Übergangsjacke Soft", material: "Fleece/Softshell", farben: ["Navy", "Grau"], preis: "49,90 €", beschreibung: "Leicht, warm, einfach zu öffnen — kein Zipper-Stress." },
      { name: "Socken Komfort-Set", material: "Bambus/Baumwolle", farben: ["Grau", "Weiß", "Schwarz"], preis: "14,90 €", beschreibung: "Ohne störende Zehennaht, rutschfest, langlebig." },
    ],
  },
  {
    slug: "trauma",
    titel: "Trauma & PTBS",
    beschreibung: "Kleidung als Schutzraum: weich, hüllend, sicher. Für Kinder und Jugendliche, die körperliche Nähe und Weichheit als Stabilisierung erleben.",
    produkte: [
      { name: "Comfort-Hoodie", material: "Fleece innen, Baumwolle außen", farben: ["Grau", "Dunkelblau", "Beige"], preis: "54,90 €", beschreibung: "Besonders weich gefüttert, großer Kapuzen-Schutzraum, beruhigend beim Tragen." },
      { name: "Wohlfühl-Jogger", material: "French Terry Bio", farben: ["Dunkelgrau", "Navy", "Schwarz"], preis: "39,90 €", beschreibung: "Hochgezogener Bund, kuschelig weich, gibt Halt ohne zu drücken." },
      { name: "Weighted Weste", material: "Spezialmaterial mit Gewichtseinlage", farben: ["Grau", "Dunkelblau"], preis: "89,90 €", beschreibung: "Leichte Gewichtsweste — strukturgebend, beruhigend, dezentes Design." },
      { name: "Decken-Shirt Oversize", material: "100% Baumwolle schwer", farben: ["Beige", "Weiß", "Hellgrau"], preis: "34,90 €", beschreibung: "Schweres, weiches Shirt mit Hülleffekt. Gibt Geborgenheit." },
    ],
  },
  {
    slug: "autismus",
    titel: "Autismus-Spektrum",
    beschreibung: "Sensorisch verträgliche Kleidung: keine Etiketten, keine störenden Nähte, eindeutige Passformen. Entwickelt für besondere sensorische Bedürfnisse.",
    produkte: [
      { name: "Sensory-Shirt Nahtlos", material: "Bio-Baumwolle nahtlos gestrickt", farben: ["Weiß", "Grau", "Hellblau"], preis: "34,90 €", beschreibung: "Komplett nahtlos, keine Etiketten, angenehm auf empfindlicher Haut." },
      { name: "Hose Easy-Fit", material: "Baumwoll-Stretch", farben: ["Schwarz", "Navy", "Grau"], preis: "39,90 €", beschreibung: "Gleicher Schnitt in allen Größen — Verlässlichkeit durch Konsistenz." },
      { name: "Kompressionsshirt", material: "Elastan-Mix", farben: ["Grau", "Dunkelblau"], preis: "44,90 €", beschreibung: "Leichter Kompressionsdruck — strukturgebend und beruhigend." },
      { name: "Schuhe Klettverschluss", material: "Leder/Textil", farben: ["Schwarz", "Grau"], preis: "59,90 €", beschreibung: "Einfach anzuziehen, ohne Schnürsenkel, stabiler Halt." },
    ],
  },
  {
    slug: "vernachlaessigung",
    titel: "Vernachlässigung & Verwahrlosung",
    beschreibung: "Würdige Grundausstattung: vollständig, sauber, passend. Für Kinder, die eine vollständige Erstausstattung benötigen — ohne Stigma, mit Qualität.",
    produkte: [
      { name: "Starter-Set Kind", material: "Verschiedene", farben: ["Neutral"], preis: "129,90 €", beschreibung: "Vollständige Erstausstattung: 3 Shirts, 2 Hosen, Unterwäsche-Set, Socken-Set, Jacke." },
      { name: "Starter-Set Jugendliche", material: "Verschiedene", farben: ["Neutral"], preis: "159,90 €", beschreibung: "Vollständige Erstausstattung für Jugendliche — altersgerecht und würdevoll." },
      { name: "Schul-Paket", material: "Verschiedene", farben: ["Neutral"], preis: "89,90 €", beschreibung: "Alles für den Schulstart: Rucksack, Federmäppchen, Schulkleidung-Set." },
      { name: "Hygiene-Starter", material: "—", farben: ["—"], preis: "24,90 €", beschreibung: "Grundlegende Hygieneartikel als Ergänzung zur Ausstattung." },
    ],
  },
  {
    slug: "angststoerungen",
    titel: "Angststörungen",
    beschreibung: "Kleidung, die Sicherheit gibt: dezent, unauffällig, nicht beengend. Für Kinder und Jugendliche, die Aufmerksamkeit vermeiden und sich sicher fühlen wollen.",
    produkte: [
      { name: "Unauffällig-Set Basic", material: "Bio-Baumwolle", farben: ["Grau", "Navy", "Schwarz"], preis: "49,90 €", beschreibung: "Dezentes 2-teiliges Set ohne Logos oder Aufdruck. Macht unsichtbar im positiven Sinne." },
      { name: "Kapuzenpulli Rückzug", material: "Baumwolle French Terry", farben: ["Dunkelgrau", "Schwarz", "Navy"], preis: "44,90 €", beschreibung: "Große Kapuze als Rückzugsraum, weich und warm." },
      { name: "Leggings Allrounder", material: "Baumwolle-Stretch", farben: ["Schwarz", "Dunkelgrau", "Navy"], preis: "24,90 €", beschreibung: "Bequem, dehnbar, unauffällig — passt zu allem." },
      { name: "Layering-Shirt", material: "Jersey Bio", farben: ["Weiß", "Grau", "Beige"], preis: "19,90 €", beschreibung: "Zum Layern unter anderen Kleidungsstücken — gibt zusätzliche Sicherheit." },
    ],
  },
  {
    slug: "bindungsstoerungen",
    titel: "Bindungsstörungen",
    beschreibung: "Kleidung als Beziehungsanker: erkennbar, persönlich, verbindend. Für Kinder, die durch persönliche Gegenstände Stabilität erleben.",
    produkte: [
      { name: "Personalisiertes Shirt", material: "Bio-Baumwolle", farben: ["Hellblau", "Rosa", "Grün", "Gelb"], preis: "29,90 €", beschreibung: "Mit individuellem Namen oder Motiv — schafft Identität und Zugehörigkeit." },
      { name: "Lieblings-Hoodie", material: "Fleece", farben: ["Frei wählbar"], preis: "54,90 €", beschreibung: "In der Lieblingsfarbe des Kindes — eine persönliche Wahl stärkt das Selbstgefühl." },
      { name: "Matching-Set Betreuer", material: "Bio-Baumwolle", farben: ["Gemeinsam wählbar"], preis: "39,90 €", beschreibung: "Passendes Set für Kind und Bezugsbetreuer — visueller Beziehungsanker." },
      { name: "Übergangs-Objekt Schal", material: "Merino-Mix weich", farben: ["Warm, weich"], preis: "24,90 €", beschreibung: "Weicher Schal als Übergangsobjekt — gibt Geborgenheit auch ohne Bezugsperson." },
    ],
  },
];

export default function AnkerkleidungPage() {
  return (
    <main>
      {/* HERO */}
      <section
        className="relative min-h-[60vh] flex items-end pb-20 px-6 pt-32"
        style={{ background: "linear-gradient(160deg, #1a2e45 0%, #2c3e50 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <p className="text-[#1a3f6f] text-sm font-semibold uppercase tracking-widest mb-4">
            Ankernetz Versorgung
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Ankerkleidung
          </h1>
          <p className="text-white/60 text-xl md:text-2xl font-light italic mb-6">
            Stabilität. Selbstwert. Alltag.
          </p>
          <p className="text-white/50 text-base max-w-2xl leading-relaxed">
            Spezialisierte Kleidung für Kinder und Jugendliche mit unterschiedlichen Störungsbildern —
            kein Standard-Shop, sondern ein Teil des Hilfesystems.
          </p>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section className="py-20 px-6 bg-[#F5F5F7]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1a3f6f] mb-6">Unsere Philosophie</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Kleidung ist mehr als Stoff.
          </h2>
          <p className="text-lg text-[#6E6E73] leading-relaxed mb-6">
            Für Kinder mit Trauma, ADHS, Autismus oder Bindungsstörungen ist Kleidung kein Nebenschauplatz.
            Sie kann beruhigen oder überreizen, Geborgenheit geben oder Stress erzeugen.
          </p>
          <p className="text-lg text-[#6E6E73] leading-relaxed">
            Ankerkleidung wurde entwickelt, um das zu berücksichtigen.
            Jede Kategorie ist auf ein spezifisches Störungsbild abgestimmt —
            in enger Zusammenarbeit mit Fachkräften aus der Jugendhilfe und Psychotherapie.
          </p>
        </div>
      </section>

      {/* KATEGORIE-ÜBERSICHT */}
      <section className="py-8 px-6 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1a3f6f] mb-10 text-center">
            Nach Störungsbild wählen
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {kategorien.map((k) => (
              <a
                key={k.slug}
                href={`#${k.slug}`}
                className="bg-white rounded-2xl p-5 text-center hover:shadow-md transition-shadow group"
              >
                <div className="w-8 h-1 bg-[#1a3f6f] mx-auto mb-3 rounded-full group-hover:w-12 transition-all" />
                <p className="text-sm font-semibold text-[#1A1A2E] leading-snug">{k.titel}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* KATEGORIEN MIT PRODUKTEN */}
      {kategorien.map((kategorie, ki) => (
        <section
          key={kategorie.slug}
          id={kategorie.slug}
          className={`py-20 px-6 ${ki % 2 === 0 ? "bg-white" : "bg-[#F5F5F7]"}`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Kategorie Header */}
            <div className="mb-12 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1a3f6f] mb-3">
                Störungsbild
              </p>
              <h2
                className="text-2xl md:text-4xl font-bold text-[#1A1A2E] mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                {kategorie.titel}
              </h2>
              <p className="text-[#6E6E73] leading-relaxed">{kategorie.beschreibung}</p>
            </div>

            {/* Produkt-Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kategorie.produkte.map((produkt) => (
                <div
                  key={produkt.name}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-black/5 flex flex-col"
                >
                  {/* Produkt-Bild Placeholder */}
                  <div
                    className="h-48 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #1e3a5f 100%)" }}
                  >
                    <div className="text-center">
                      <p className="text-white/30 text-xs uppercase tracking-widest">Ankerkleidung</p>
                      <p className="text-white/60 text-sm font-medium mt-1">{produkt.name}</p>
                    </div>
                  </div>

                  {/* Produkt-Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex-1">
                      <h3 className="font-bold text-[#1A1A2E] mb-2">{produkt.name}</h3>
                      <p className="text-[#6E6E73] text-sm leading-relaxed mb-4">
                        {produkt.beschreibung}
                      </p>
                      <p className="text-xs text-[#6E6E73] mb-1">
                        <span className="font-medium">Material:</span> {produkt.material}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {produkt.farben.map((f) => (
                          <span
                            key={f}
                            className="text-xs bg-[#F5F5F7] text-[#6E6E73] px-2 py-1 rounded-full"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 pt-5 border-t border-black/5 flex items-center justify-between">
                      <span className="font-bold text-[#1A1A2E] text-lg">{produkt.preis}</span>
                      <Link
                        href="/kontakt"
                        className="text-sm font-semibold bg-[#1A1A2E] text-white px-4 py-2 rounded-full hover:bg-[#2a2a3e] transition-colors"
                      >
                        Anfragen
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* BESTELLUNG / HINWEIS */}
      <section
        className="py-20 px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg, #1a2e45 0%, #2c3e50 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1a3f6f] mb-5">
            Bestellung & Kostenübernahme
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Kein Standard-Shop. Ein Hilfssystem.
          </h2>
          <p className="text-white/60 text-lg mb-4 leading-relaxed">
            Ankerkleidung ist kein öffentlicher Online-Shop. Bestellungen erfolgen über Einrichtungen,
            Betreuungsteams und Jugendämter — mit Bedarfsnachweis und Kostenträgerabrechnung.
          </p>
          <p className="text-white/40 text-sm mb-10">
            Private Einzelbestellungen sind auf Anfrage möglich. Sprechen Sie uns an.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="px-8 py-3.5 bg-white text-[#1A1A2E] font-semibold rounded-full text-sm hover:bg-white/90 transition-colors"
            >
              Bestellung anfragen
            </Link>
            <Link
              href="/platzanfrage"
              className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-full text-sm hover:bg-white/10 transition-colors"
            >
              Einrichtungsanfrage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
