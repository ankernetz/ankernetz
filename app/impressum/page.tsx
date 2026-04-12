export default function ImpressumPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 bg-[#F5F5F7]">
      <div className="max-w-3xl mx-auto">

        <p className="text-xs font-bold uppercase tracking-widest text-[#4A7FA5] mb-4">Rechtliches</p>
        <h1 className="text-4xl font-black text-[#1A1A2E] mb-12" style={{ letterSpacing: "-0.02em" }}>
          Impressum
        </h1>

        <div className="bg-white rounded-3xl p-10 space-y-10 shadow-sm">

          {/* Angaben gem. § 5 TMG */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#6E6E73] mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-[#1D1D1F] font-semibold text-lg mb-1">Hwerk GmbH</p>
            <p className="text-[#6E6E73]">Friedrich-Franz-Straße 13</p>
            <p className="text-[#6E6E73]">12103 Berlin</p>
            <p className="text-[#6E6E73]">Deutschland</p>
          </div>

          {/* Vertretung */}
          <div className="pt-8 border-t border-black/5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#6E6E73] mb-4">
              Vertreten durch
            </h2>
            <p className="text-[#1D1D1F]">Geschäftsführer: <span className="font-semibold">Marcus Weber</span></p>
          </div>

          {/* Kontakt */}
          <div className="pt-8 border-t border-black/5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#6E6E73] mb-4">Kontakt</h2>
            <div className="space-y-1 text-[#6E6E73]">
              <p>Telefon: <span className="text-[#1D1D1F]">+49 (0) 30 22 45 43 22</span></p>
              <p>E-Mail: <span className="text-[#1D1D1F]">hilfe@ankernetz.com</span></p>
            </div>
          </div>

          {/* Handelsregister */}
          <div className="pt-8 border-t border-black/5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#6E6E73] mb-4">Handelsregister</h2>
            <div className="space-y-1 text-[#6E6E73]">
              <p>Registergericht: <span className="text-[#1D1D1F]">Amtsgericht Berlin</span></p>
              <p>Registernummer: <span className="text-[#1D1D1F]">HRB 167432</span></p>
            </div>
          </div>

          {/* USt-IdNr */}
          <div className="pt-8 border-t border-black/5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#6E6E73] mb-4">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p className="text-[#6E6E73]">
              Gemäß § 27a Umsatzsteuergesetz:<br />
              <span className="text-[#1D1D1F] font-medium">DE 312 456 789</span>
            </p>
          </div>

          {/* Aufsichtsbehörde */}
          <div className="pt-8 border-t border-black/5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#6E6E73] mb-4">
              Zuständige Aufsichtsbehörde
            </h2>
            <p className="text-[#6E6E73]">
              Betriebserlaubnis gemäß § 45 SGB VIII erteilt durch:<br />
              <span className="text-[#1D1D1F]">Landesjugendamt Berlin, Senatsverwaltung für Bildung, Jugend und Familie</span>
            </p>
          </div>

          {/* Haftungsausschluss */}
          <div className="pt-8 border-t border-black/5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#6E6E73] mb-4">
              Haftungsausschluss
            </h2>
            <div className="space-y-4 text-sm text-[#6E6E73] leading-relaxed">
              <div>
                <p className="font-semibold text-[#1D1D1F] mb-1">Haftung für Inhalte</p>
                <p>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                  Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                  nach den allgemeinen Gesetzen verantwortlich.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#1D1D1F] mb-1">Haftung für Links</p>
                <p>
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                  der Seiten verantwortlich.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#1D1D1F] mb-1">Urheberrecht</p>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>

          {/* Streitschlichtung */}
          <div className="pt-8 border-t border-black/5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#6E6E73] mb-4">
              Streitschlichtung
            </h2>
            <p className="text-sm text-[#6E6E73] leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"
                className="text-[#4A7FA5] hover:underline">
                https://ec.europa.eu/consumers/odr/
              </a>
              <br /><br />
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

        </div>

        <p className="text-xs text-[#9CA3AF] text-center mt-8">
          Stand: April 2026
        </p>
      </div>
    </main>
  );
}
