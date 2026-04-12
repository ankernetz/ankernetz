export default function PlatzanfragePage() {
  return (
    <main>
      {/* HERO */}
      <section
        className="relative min-h-[40vh] flex items-end pb-16 px-6 pt-32"
        style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 100%)" }}
      >
        <div className="max-w-4xl mx-auto w-full">
          <p className="text-[#1a3f6f] text-sm font-semibold uppercase tracking-widest mb-4">Für Jugendämter & Fachkräfte</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Platzanfrage
          </h1>
          <p className="text-white/50 text-lg mt-4">
            Wir prüfen Ihren Bedarf und melden uns innerhalb von 24 Stunden.
          </p>
        </div>
      </section>

      {/* HINWEIS */}
      <section className="py-10 px-6 bg-[#F5F5F7]">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { zahl: "< 24h", text: "Rückmeldung auf Ihre Anfrage" },
            { zahl: "24/7", text: "Erreichbar bei Krisenaufnahmen" },
            { zahl: "100%", text: "Vertrauliche Behandlung Ihrer Daten" },
          ].map((item) => (
            <div key={item.zahl} className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-[#1A1A2E] mb-2">{item.zahl}</p>
              <p className="text-sm text-[#6E6E73]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORMULAR */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>
            Anfrage stellen
          </h2>
          <form className="space-y-6">

            {/* Einreichende Person */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1a3f6f] mb-5">Ihre Daten</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F] mb-2">Vorname *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#1a3f6f] bg-[#F5F5F7]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F] mb-2">Nachname *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#1a3f6f] bg-[#F5F5F7]" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1D1D1F] mb-2">Jugendamt / Institution *</label>
              <input type="text" required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#1a3f6f] bg-[#F5F5F7]" placeholder="z.B. Jugendamt Berlin Mitte" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1D1D1F] mb-2">E-Mail *</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#1a3f6f] bg-[#F5F5F7]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1D1D1F] mb-2">Telefon *</label>
                <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#1a3f6f] bg-[#F5F5F7]" />
              </div>
            </div>

            {/* Angebotsbereich */}
            <div className="pt-4 border-t border-black/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1a3f6f] mb-5">Gewünschtes Angebot</p>
              <div>
                <label className="block text-sm font-medium text-[#1D1D1F] mb-2">Bereich *</label>
                <select required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#1a3f6f] bg-[#F5F5F7]">
                  <option value="">Bitte wählen...</option>
                  <option>Krisenintervention (24/7)</option>
                  <option>Therapie & Wohnen</option>
                  <option>Jugendhilfe (Kinder)</option>
                  <option>Frühe Hilfen (Kleinkinder)</option>
                  <option>Diagnostik & Clearing</option>
                  <option>Kinder- und Jugendpsychotherapie</option>
                  <option>Beratung & Prävention</option>
                  <option>Übergang Arbeit</option>
                  <option>Versorgung / Ankerkleidung</option>
                  <option>Noch unklar — Beratungsbedarf</option>
                </select>
              </div>
            </div>

            {/* Kind / Jugendlicher */}
            <div className="pt-4 border-t border-black/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1a3f6f] mb-5">Angaben zum Kind / Jugendlichen</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F] mb-2">Alter *</label>
                  <input type="number" min="0" max="25" required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#1a3f6f] bg-[#F5F5F7]" placeholder="z.B. 14" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F] mb-2">Geschlecht</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#1a3f6f] bg-[#F5F5F7]">
                    <option value="">Bitte wählen</option>
                    <option>Männlich</option>
                    <option>Weiblich</option>
                    <option>Divers</option>
                    <option>Keine Angabe</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1D1D1F] mb-2">Dringlichkeit *</label>
              <select required className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#1a3f6f] bg-[#F5F5F7]">
                <option value="">Bitte wählen</option>
                <option>Sofort (Krisenaufnahme)</option>
                <option>Innerhalb von 1 Woche</option>
                <option>Innerhalb von 1 Monat</option>
                <option>Planbar (über 1 Monat)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1D1D1F] mb-2">Kurzbeschreibung der Situation *</label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#1a3f6f] bg-[#F5F5F7] resize-none"
                placeholder="Bitte beschreiben Sie kurz die aktuelle Situation und den Hilfebedarf..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1D1D1F] mb-2">Bisherige Hilfen (optional)</label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-[#1a3f6f] bg-[#F5F5F7] resize-none"
                placeholder="Welche Hilfen wurden bisher gewährt?"
              />
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" required className="mt-1 flex-shrink-0" id="dsgvo" />
              <label htmlFor="dsgvo" className="text-sm text-[#6E6E73]">
                Ich stimme der Verarbeitung der übermittelten Daten gemäß der{" "}
                <a href="/datenschutz" className="text-[#1a3f6f] hover:underline">Datenschutzerklärung</a>{" "}
                zu. Die Daten werden ausschließlich zur Bearbeitung dieser Anfrage genutzt. *
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#1A1A2E] text-white font-semibold rounded-full hover:bg-[#2a2a3e] transition-colors text-base"
            >
              Platzanfrage absenden
            </button>

            <p className="text-xs text-[#6E6E73] text-center">
              Bei dringenden Krisenaufnahmen rufen Sie uns bitte direkt an: <strong>+49 (0) ___ ___</strong>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
