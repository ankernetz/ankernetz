export default function KontaktPage() {
  return (
    <main>
      {/* HERO */}
      <section
        className="relative min-h-[40vh] flex items-end pb-16 px-6 pt-32"
        style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 100%)" }}
      >
        <div className="max-w-4xl mx-auto w-full">
          <p className="text-[#4A7FA5] text-sm font-semibold uppercase tracking-widest mb-4">Ankernetz</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Kontakt
          </h1>
          <p className="text-white/50 text-lg mt-4">Wir melden uns schnell. Versprochen.</p>
        </div>
      </section>

      {/* KONTAKT GRID */}
      <section className="py-20 px-6 bg-[#F5F5F7]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              titel: "Telefon",
              wert: "+49 (0) ___ ___",
              sub: "Montag – Freitag, 8–18 Uhr",
              note: "Krisennotfall: 24/7 erreichbar",
            },
            {
              titel: "E-Mail",
              wert: "info@ankernetz.com",
              sub: "Antwort innerhalb von 24 Stunden",
              note: null,
            },
            {
              titel: "Adresse",
              wert: "Ankernetz",
              sub: "Musterstraße 1, 00000 Stadt",
              note: "Termine nach Vereinbarung",
            },
          ].map((k) => (
            <div key={k.titel} className="bg-white rounded-3xl p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4A7FA5] mb-4">{k.titel}</p>
              <p className="text-xl font-bold text-[#1A1A2E] mb-2">{k.wert}</p>
              <p className="text-[#6E6E73] text-sm">{k.sub}</p>
              {k.note && <p className="text-[#4A7FA5] text-xs mt-2 font-medium">{k.note}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* KONTAKTFORMULAR */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4A7FA5] mb-4 text-center">Direkte Nachricht</p>
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>
            Schreiben Sie uns.
          </h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#1D1D1F] mb-2">Vorname *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#4A7FA5] text-[#1D1D1F] bg-[#F5F5F7]"
                  placeholder="Max"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1D1D1F] mb-2">Nachname *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#4A7FA5] text-[#1D1D1F] bg-[#F5F5F7]"
                  placeholder="Mustermann"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1D1D1F] mb-2">Organisation / Jugendamt</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#4A7FA5] text-[#1D1D1F] bg-[#F5F5F7]"
                placeholder="Jugendamt Stadt XY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1D1D1F] mb-2">E-Mail *</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#4A7FA5] text-[#1D1D1F] bg-[#F5F5F7]"
                placeholder="max@jugendamt.de"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1D1D1F] mb-2">Telefon</label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#4A7FA5] text-[#1D1D1F] bg-[#F5F5F7]"
                placeholder="+49 ..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1D1D1F] mb-2">Ihr Anliegen *</label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#4A7FA5] text-[#1D1D1F] bg-[#F5F5F7]"
              >
                <option value="">Bitte wählen...</option>
                <option>Platzanfrage</option>
                <option>Allgemeine Informationen</option>
                <option>Krisenintervention</option>
                <option>Diagnostik & Clearing</option>
                <option>Psychotherapie</option>
                <option>Ankerkleidung</option>
                <option>Beratung</option>
                <option>Kooperation / Partnerschaft</option>
                <option>Sonstiges</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1D1D1F] mb-2">Nachricht *</label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#4A7FA5] text-[#1D1D1F] bg-[#F5F5F7] resize-none"
                placeholder="Bitte beschreiben Sie kurz Ihr Anliegen..."
              />
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" required className="mt-1 flex-shrink-0" id="dsgvo" />
              <label htmlFor="dsgvo" className="text-sm text-[#6E6E73]">
                Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                <a href="/datenschutz" className="text-[#4A7FA5] hover:underline">Datenschutzerklärung</a>{" "}
                zu. *
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-[#1A1A2E] text-white font-semibold rounded-full hover:bg-[#2a2a3e] transition-colors"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </section>

      {/* FÜR FACHKRÄFTE */}
      <section
        className="py-16 px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #1e3a5f 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4A7FA5] mb-4">Jugendämter & Fachkräfte</p>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            Bei dringendem Platzbedarf oder Kriseninterventionen: Rufen Sie uns direkt an.
            Wir reagieren schnell.
          </p>
          <a
            href="tel:+49000000"
            className="inline-block px-8 py-3.5 bg-white text-[#1A1A2E] font-semibold rounded-full text-sm hover:bg-white/90 transition-colors"
          >
            Jetzt anrufen
          </a>
        </div>
      </section>
    </main>
  );
}
