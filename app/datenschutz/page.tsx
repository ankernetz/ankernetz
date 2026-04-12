export default function DatenschutzPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 bg-[#F5F5F7]">
      <div className="max-w-3xl mx-auto">

        <p className="text-xs font-bold uppercase tracking-widest text-[#4A7FA5] mb-4">Rechtliches</p>
        <h1 className="text-4xl font-black text-[#1A1A2E] mb-12" style={{ letterSpacing: "-0.02em" }}>
          Datenschutzerklärung
        </h1>

        <div className="bg-white rounded-3xl p-10 space-y-10 shadow-sm text-sm text-[#6E6E73] leading-relaxed">

          {/* 1 */}
          <div>
            <h2 className="text-base font-black text-[#1A1A2E] mb-3">1. Datenschutz auf einen Blick</h2>
            <p className="font-semibold text-[#1D1D1F] mb-2">Allgemeine Hinweise</p>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
              Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten,
              mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div className="pt-6 border-t border-black/5">
            <p className="font-semibold text-[#1D1D1F] mb-2">Datenerfassung auf dieser Website</p>
            <p className="mb-3">
              <strong className="text-[#1D1D1F]">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
              können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p className="mb-3">
              <strong className="text-[#1D1D1F]">Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen — z.B. durch das
              Ausfüllen eines Kontakt- oder Platzanfrageformulars. Andere Daten werden automatisch oder
              nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst (z.B. Browserdaten).
            </p>
            <p>
              <strong className="text-[#1D1D1F]">Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
              Andere Daten können zur Analyse Ihres Nutzerverhaltens oder zur Bearbeitung von Anfragen
              verwendet werden.
            </p>
          </div>

          {/* 2 */}
          <div className="pt-6 border-t border-black/5">
            <h2 className="text-base font-black text-[#1A1A2E] mb-3">2. Verantwortliche Stelle</h2>
            <p className="mb-2">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <div className="bg-[#F5F5F7] rounded-2xl p-5 text-[#1D1D1F]">
              <p className="font-semibold">Hwerk GmbH</p>
              <p>Friedrich-Franz-Straße 13</p>
              <p>20459 Hamburg</p>
              <p className="mt-2">Telefon: +49 (0) 40 87 65 43 21</p>
              <p>E-Mail: info@ankernetz.com</p>
            </div>
          </div>

          {/* 3 */}
          <div className="pt-6 border-t border-black/5">
            <h2 className="text-base font-black text-[#1A1A2E] mb-3">3. Ihre Rechte</h2>
            <p className="mb-3">Sie haben jederzeit das Recht:</p>
            <ul className="space-y-2">
              {[
                "Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)",
                "Die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)",
                "Die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)",
                "Die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)",
                "Der Verarbeitung zu widersprechen (Art. 21 DSGVO)",
                "Ihre Daten in einem übertragbaren Format zu erhalten (Art. 20 DSGVO)",
              ].map((r) => (
                <li key={r} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A7FA5] flex-shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
              Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
            </p>
          </div>

          {/* 4 */}
          <div className="pt-6 border-t border-black/5">
            <h2 className="text-base font-black text-[#1A1A2E] mb-3">4. Datenerfassung auf dieser Website</h2>
            <p className="font-semibold text-[#1D1D1F] mb-2">Server-Log-Dateien</p>
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
              Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des
              zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
            <p className="font-semibold text-[#1D1D1F] mb-2">Kontaktformular</p>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der
              Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
              nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
            </p>
            <p className="font-semibold text-[#1D1D1F] mb-2">Platzanfrage</p>
            <p>
              Die im Rahmen einer Platzanfrage übermittelten Daten werden ausschließlich zur Prüfung
              und Bearbeitung Ihrer Anfrage genutzt. Eine Weitergabe an Dritte erfolgt nicht,
              sofern dies nicht zur Leistungserbringung erforderlich ist.
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </div>

          {/* 5 */}
          <div className="pt-6 border-t border-black/5">
            <h2 className="text-base font-black text-[#1A1A2E] mb-3">5. Hosting</h2>
            <p>
              Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 900, San Francisco,
              CA 94104, USA gehostet. Vercel ist ein Auftragsverarbeiter gemäß Art. 28 DSGVO.
              Es besteht ein Auftragsverarbeitungsvertrag. Weitere Informationen finden Sie unter:{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
                className="text-[#4A7FA5] hover:underline">vercel.com/legal/privacy-policy</a>
            </p>
          </div>

          {/* 6 */}
          <div className="pt-6 border-t border-black/5">
            <h2 className="text-base font-black text-[#1A1A2E] mb-3">6. Cookies</h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies oder Analyse-Tools.
              Es werden ausschließlich technisch notwendige Cookies eingesetzt, die für den
              Betrieb der Website erforderlich sind. Diese Cookies erfordern keine Einwilligung
              gemäß Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          {/* 7 */}
          <div className="pt-6 border-t border-black/5">
            <h2 className="text-base font-black text-[#1A1A2E] mb-3">7. Kontakt Datenschutz</h2>
            <p>
              Bei Fragen zum Datenschutz wenden Sie sich bitte an:<br />
              <strong className="text-[#1D1D1F]">Hwerk GmbH</strong><br />
              Friedrich-Franz-Straße 13, 20459 Hamburg<br />
              E-Mail: <a href="mailto:datenschutz@ankernetz.com" className="text-[#4A7FA5] hover:underline">
                datenschutz@ankernetz.com
              </a>
            </p>
          </div>

        </div>

        <p className="text-xs text-[#9CA3AF] text-center mt-8">
          Stand: April 2026 — Diese Datenschutzerklärung wurde für ankernetz.com erstellt.
        </p>
      </div>
    </main>
  );
}
