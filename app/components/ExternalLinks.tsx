import Link from "next/link";

const SECTIONS = [
  {
    label: "Krisentelefone — kostenlos & 24/7",
    items: [
      { name: "Telefonseelsorge", detail: "0800 111 0 111", desc: "Kostenlos, anonym, rund um die Uhr.", url: "https://www.telefonseelsorge.de" },
      { name: "Telefonseelsorge (2. Leitung)", detail: "0800 111 0 222", desc: "Zweite kostenlose Krisenleitung, 24/7.", url: "https://www.telefonseelsorge.de" },
      { name: "Nummer gegen Kummer", detail: "116 111", desc: "Kinder- und Jugendtelefon, Mo–Sa 14–20 Uhr.", url: "https://www.nummergegenkummer.de" },
      { name: "Elterntelefon", detail: "0800 111 0 550", desc: "Für Eltern, kostenlos, Mo–Fr 9–17 Uhr.", url: "https://www.nummergegenkummer.de/elterntelefon" },
      { name: "Kinderschutz-Hotline", detail: "0800 192 10 80", desc: "Deutsche Kinderschutzzentren, kostenlos.", url: "https://www.kinderschutzzentren.org" },
      { name: "Notfallseelsorge Berlin", detail: "030 44 35 09 21", desc: "Krisenbegleitung in Berlin, 24/7.", url: "https://www.notfallseelsorge-berlin.de" },
      { name: "Jugendnotmail", detail: "jugendnotmail.de", desc: "Online-Beratung für Jugendliche in Not.", url: "https://www.jugendnotmail.de" },
      { name: "BKE Online-Beratung", detail: "bke-beratung.de", desc: "Erziehungsberatung online, kostenlos.", url: "https://www.bke-beratung.de" },
    ],
  },
  {
    label: "Bundesebene — Ministerien & Bundesbehörden",
    items: [
      { name: "BMFSFJ", detail: "Bundesministerium für Familie, Senioren, Frauen und Jugend", desc: "Nationale Jugend- und Familienpolitik, Förderungen, SGB VIII.", url: "https://www.bmfsfj.de" },
      { name: "BZgA", detail: "Bundeszentrale für gesundheitliche Aufklärung", desc: "Prävention, Gesundheitsförderung für Kinder und Jugendliche.", url: "https://www.bzga.de" },
      { name: "Deutsches Jugendinstitut (DJI)", detail: "dji.de", desc: "Forschung zu Kinder-, Jugend- und Familienpolitik.", url: "https://www.dji.de" },
      { name: "UNICEF Deutschland", detail: "unicef.de", desc: "Kinderrechte, Schutzprogramme, internationale Standards.", url: "https://www.unicef.de" },
      { name: "Kinderschutzbund", detail: "kinderschutzbund.de", desc: "Bundesverband Kinderschutz, lokale Beratungsstellen.", url: "https://www.kinderschutzbund.de" },
      { name: "AGJ — Arbeitsgemeinschaft Kinder- und Jugendhilfe", detail: "agj.de", desc: "Fachverband für Jugendhilfe auf Bundesebene.", url: "https://www.agj.de" },
      { name: "Destatis — Kinder- und Jugendhilfe", detail: "destatis.de", desc: "Statistiken zur Jugendhilfe in Deutschland.", url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Soziales/Kinder-Jugendhilfe/_inhalt.html" },
      { name: "Bundesjugendkuratorium", detail: "bundesjugendkuratorium.de", desc: "Beratungsgremium der Bundesregierung für Jugendhilfe.", url: "https://www.bundesjugendkuratorium.de" },
    ],
  },
  {
    label: "Berlin & Brandenburg — Behörden & Jugendämter",
    items: [
      { name: "Senatsverwaltung für Jugend und Bildung", detail: "berlin.de/sen/jugend", desc: "Übergeordnete Jugendhilfebehörde des Landes Berlin.", url: "https://www.berlin.de/sen/jugend/" },
      { name: "Jugendamt Berlin — Alle Bezirke", detail: "berlin.de/jugendamt", desc: "Zugang zu allen 12 Berliner Bezirksjugendämtern.", url: "https://www.berlin.de/jugendamt/" },
      { name: "Frühe Hilfen Berlin", detail: "fruehehilfen.berlin.de", desc: "Netzwerk Frühe Hilfen des Landes Berlin.", url: "https://www.fruehehilfen.berlin.de" },
      { name: "Kinderschutzzentrum Berlin", detail: "kinderschutzzentrum-berlin.de", desc: "Beratung, Krisenintervention, Kinderschutz.", url: "https://www.kinderschutzzentrum-berlin.de" },
      { name: "MBJS Brandenburg", detail: "Ministerium für Bildung, Jugend und Sport", desc: "Jugendhilfe und Bildung im Land Brandenburg.", url: "https://www.mbjs.brandenburg.de" },
      { name: "Jugendamt Potsdam", detail: "potsdam.de/jugendamt", desc: "Jugendhilfe in der Landeshauptstadt Brandenburg.", url: "https://www.potsdam.de/jugendamt" },
      { name: "LIGA der Spitzenverbände Berlin", detail: "liga-berlin.de", desc: "Dachverband freier Wohlfahrtspflege Berlin.", url: "https://www.liga-berlin.de" },
      { name: "Paritätischer Wohlfahrtsverband Berlin", detail: "paritaet-berlin.de", desc: "Fachberatung und Vernetzung für Jugendhilfeträger.", url: "https://www.paritaet-berlin.de" },
    ],
  },
  {
    label: "Weitere Bundesländer — Ministerien für Jugend & Familie",
    items: [
      { name: "Baden-Württemberg", detail: "sozialministerium.de", desc: "Ministerium für Soziales, Gesundheit und Integration.", url: "https://www.sozialministerium.de" },
      { name: "Bayern", detail: "stmas.bayern.de", desc: "Staatsministerium für Familie, Arbeit und Soziales.", url: "https://www.stmas.bayern.de" },
      { name: "Bremen", detail: "soziales.bremen.de", desc: "Senatorin für Soziales, Jugend, Integration und Sport.", url: "https://www.soziales.bremen.de" },
      { name: "Hamburg", detail: "hamburg.de/jugend", desc: "Behörde für Arbeit, Soziales, Familie und Integration.", url: "https://www.hamburg.de/jugend/" },
      { name: "Hessen", detail: "soziales.hessen.de", desc: "Hessisches Ministerium für Soziales und Integration.", url: "https://www.soziales.hessen.de" },
      { name: "Mecklenburg-Vorpommern", detail: "regierung-mv.de", desc: "Ministerium für Soziales und Gesundheit.", url: "https://www.regierung-mv.de/Landesregierung/sm/" },
      { name: "Niedersachsen", detail: "ms.niedersachsen.de", desc: "Ministerium für Soziales, Arbeit, Gesundheit und Gleichstellung.", url: "https://www.ms.niedersachsen.de" },
      { name: "Nordrhein-Westfalen", detail: "mkjfgfi.nrw.de", desc: "Ministerium für Kinder, Jugend, Familie, Gleichstellung.", url: "https://www.mkjfgfi.nrw.de" },
      { name: "Rheinland-Pfalz", detail: "mffki.rlp.de", desc: "Ministerium für Familie, Frauen, Kultur und Integration.", url: "https://www.mffki.rlp.de" },
      { name: "Saarland", detail: "saarland.de/soziales", desc: "Ministerium für Soziales, Gesundheit, Frauen und Familie.", url: "https://www.saarland.de/msagd/" },
      { name: "Sachsen", detail: "sms.sachsen.de", desc: "Staatsministerium für Soziales und gesellschaftlichen Zusammenhalt.", url: "https://www.sms.sachsen.de" },
      { name: "Sachsen-Anhalt", detail: "ms.sachsen-anhalt.de", desc: "Ministerium für Arbeit, Soziales und Integration.", url: "https://ms.sachsen-anhalt.de" },
      { name: "Schleswig-Holstein", detail: "schleswig-holstein.de", desc: "Ministerium für Soziales, Jugend, Familie, Senioren.", url: "https://www.schleswig-holstein.de/DE/Landesregierung/VIII/viii_node.html" },
      { name: "Thüringen", detail: "thueringen.de/jugend", desc: "Thüringer Ministerium für Migration, Justiz und Verbraucherschutz.", url: "https://www.thueringen.de/th6/tmmjv/" },
    ],
  },
  {
    label: "Europäische Ebene — EU & internationale Organisationen",
    items: [
      { name: "Europäisches Jugendportal", detail: "youth.europa.eu", desc: "EU-Informationsportal für Jugendliche — Förderungen, Rechte, Chancen.", url: "https://youth.europa.eu/home_de" },
      { name: "Europäische Kommission — Jugend", detail: "ec.europa.eu/youth", desc: "EU-Jugendpolitik, Erasmus+, Europäisches Solidaritätskorps.", url: "https://commission.europa.eu/education/education-and-training-policies/youth_de" },
      { name: "Europarat — Jugend", detail: "coe.int/youth", desc: "Jugendpolitik und Menschenrechte im Europarat.", url: "https://www.coe.int/de/web/youth" },
      { name: "UNICEF — Kinderrechte Europa", detail: "unicef.org/eca", desc: "Kinderrechtskonvention, Schutzstandards Europa.", url: "https://www.unicef.org/eca" },
      { name: "WHO Europa — Kinder & Jugendgesundheit", detail: "euro.who.int", desc: "Gesundheitsstandards und Prävention für Kinder.", url: "https://www.euro.who.int/de/health-topics/Life-stages/child-and-adolescent-health" },
      { name: "EJPD — Europäisches Jugendportal Deutschland", detail: "europa.eu/youth/de", desc: "EU-Förderprogramme und Beratung für deutsche Jugendliche.", url: "https://europa.eu/youth/de_de" },
    ],
  },
];

export default function ExternalLinks() {
  return (
    <section style={{ padding: "3rem 1.5rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <p style={{
          fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.2em",
          textTransform: "uppercase", color: "#8B3A22", marginBottom: "0.25rem",
        }}>
          Weiterführende Hilfsangebote & Behörden
        </p>
        <p style={{
          fontSize: "1rem", color: "#5A4E48", lineHeight: 1.75,
          marginBottom: "2.5rem", marginTop: "0.5rem", maxWidth: "680px",
        }}>
          Weitere Anlaufstellen auf kommunaler, Landes-, Bundes- und europäischer Ebene —
          von Krisentelefonen bis hin zu Ministerien und EU-Institutionen.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {SECTIONS.map((section) => (
            <div key={section.label}>
              <p style={{
                fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "#1A1614", marginBottom: "0.875rem",
                paddingBottom: "0.625rem", borderBottom: "1px solid rgba(0,0,0,0.08)",
                marginTop: 0,
              }}>
                {section.label}
              </p>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "0.625rem",
              }}>
                {section.items.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                    className="ext-link-tile"
                  >
                    <div style={{
                      background: "#ffffff",
                      border: "1px solid rgba(0,0,0,0.07)",
                      borderRadius: "10px",
                      padding: "1rem 1.125rem",
                      transition: "border-color 0.15s, box-shadow 0.15s",
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1A1614", margin: "0 0 0.2rem", lineHeight: 1.3 }}>
                          {item.name}
                        </p>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, marginTop: "3px", opacity: 0.3 }}>
                          <path d="M3.5 1.5H10.5V8.5M10.5 1.5L1.5 10.5" stroke="#1A1614" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8B3A22", margin: "0 0 0.2rem" }}>
                        {item.detail}
                      </p>
                      <p style={{ fontSize: "0.75rem", color: "#7A6E6A", margin: 0, lineHeight: 1.5 }}>
                        {item.desc}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ext-link-tile div:hover {
          border-color: rgba(139,58,34,0.3);
          box-shadow: 0 4px 14px rgba(0,0,0,0.07);
        }
      `}</style>
    </section>
  );
}
