const SECTIONS: { label: string; cols: number; items: { name: string; detail: string; desc: string; url: string }[] }[] = [
  {
    label: "Krisentelefone - kostenlos & 24/7",
    cols: 4,
    items: [
      { name: "Telefonseelsorge", detail: "0800 111 0 111", desc: "Kostenlos, anonym, rund um die Uhr.", url: "https://www.telefonseelsorge.de" },
      { name: "Telefonseelsorge (2. Leitung)", detail: "0800 111 0 222", desc: "Zweite kostenlose Krisenleitung, 24/7.", url: "https://www.telefonseelsorge.de" },
      { name: "Nummer gegen Kummer", detail: "116 111", desc: "Kinder- und Jugendtelefon, Mo–Sa 14–20 Uhr.", url: "https://www.nummergegenkummer.de" },
      { name: "Elterntelefon", detail: "0800 111 0 550", desc: "Für Eltern, kostenlos, Mo–Fr 9–17 Uhr.", url: "https://www.nummergegenkummer.de/elterntelefon" },
      { name: "Kinderschutz-Hotline", detail: "0800 192 10 80", desc: "Deutsche Kinderschutzzentren, kostenlos.", url: "https://www.kinderschutzzentren.org" },
      { name: "Jugendnotmail", detail: "jugendnotmail.de", desc: "Online-Beratung für Jugendliche in Not.", url: "https://www.jugendnotmail.de" },
      { name: "BKE Online-Beratung", detail: "bke-beratung.de", desc: "Erziehungsberatung online, kostenlos.", url: "https://www.bke-beratung.de" },
      { name: "Weißer Ring", detail: "weisser-ring.de", desc: "Hilfe für Kriminalitätsopfer und Angehörige.", url: "https://www.weisser-ring.de" },
    ],
  },
  {
    label: "Berlin - Krisendienste & Notfallnummern",
    cols: 4,
    items: [
      { name: "Berliner Krisendienst Region West", detail: "030 390 63-10", desc: "Charlottenburg-Wilmersdorf, Spandau. 24/7.", url: "https://www.berliner-krisendienst.de" },
      { name: "Berliner Krisendienst Region Mitte", detail: "030 390 63-20", desc: "Mitte, Tiergarten, Wedding. 24/7.", url: "https://www.berliner-krisendienst.de" },
      { name: "Berliner Krisendienst Region Nord", detail: "030 390 63-40", desc: "Pankow, Reinickendorf, Weißensee. 24/7.", url: "https://www.berliner-krisendienst.de" },
      { name: "Berliner Krisendienst Region Ost", detail: "030 390 63-60", desc: "Lichtenberg, Marzahn-Hellersdorf, Treptow-Köpenick. 24/7.", url: "https://www.berliner-krisendienst.de" },
      { name: "Berliner Krisendienst Region Süd", detail: "030 390 63-80", desc: "Neukölln, Steglitz-Zehlendorf, Tempelhof-Schöneberg. 24/7.", url: "https://www.berliner-krisendienst.de" },
      { name: "Notfallseelsorge Berlin", detail: "030 44 35 09 21", desc: "Seelsorge in Notfällen, 24/7 erreichbar.", url: "https://www.notfallseelsorge-berlin.de" },
      { name: "Kinderschutzzentrum Berlin", detail: "030 61 62 63 0", desc: "Beratung, Krisenintervention, Kinderschutz Berlin.", url: "https://www.kinderschutzzentrum-berlin.de" },
      { name: "Berliner Stadtmission", detail: "030 690 33-0", desc: "Soziale Notfallhilfe und Krisenbegleitung.", url: "https://www.berliner-stadtmission.de" },
    ],
  },
  {
    label: "Berlin - Senat, Behörden & Ämter",
    cols: 4,
    items: [
      { name: "Senatsverwaltung Jugend & Bildung", detail: "berlin.de/sen/jugend", desc: "Übergeordnete Jugendhilfebehörde des Landes Berlin.", url: "https://www.berlin.de/sen/jugend/" },
      { name: "Frühe Hilfen Berlin", detail: "fruehehilfen.berlin.de", desc: "Netzwerk Frühe Hilfen des Landes Berlin.", url: "https://www.fruehehilfen.berlin.de" },
      { name: "Ombudsstelle Kinder- und Jugendhilfe", detail: "ombudschaft-jugendhilfe.de", desc: "Unabhängige Beschwerdestelle für Kinder & Familien.", url: "https://www.ombudschaft-jugendhilfe.de" },
      { name: "LIGA der Spitzenverbände Berlin", detail: "liga-berlin.de", desc: "Dachverband freier Wohlfahrtspflege Berlin.", url: "https://www.liga-berlin.de" },
      { name: "Paritätischer Berlin", detail: "paritaet-berlin.de", desc: "Fachberatung und Vernetzung für Jugendhilfeträger.", url: "https://www.paritaet-berlin.de" },
      { name: "Gesundheit Berlin-Brandenburg", detail: "gesundheitberlin.de", desc: "Fachstellen für Gesundheitsförderung.", url: "https://www.gesundheitberlin.de" },
      { name: "Schulpsychologischer Dienst Berlin", detail: "berlin.de/schulpsychologie", desc: "Psychologische Beratung für Schüler und Eltern.", url: "https://www.berlin.de/sen/bildung/unterstuetzung/schulpsychologie/" },
      { name: "Fachstelle Suchtprävention Berlin", detail: "fachstelle-suchtpraevention.de", desc: "Prävention und Beratung bei Suchtgefährdung.", url: "https://www.berlin.fachstelle-suchtpraevention.de" },
    ],
  },
  {
    label: "Berlin - Alle 12 Bezirks-Jugendämter",
    cols: 4,
    items: [
      { name: "Jugendamt Mitte", detail: "berlin.de/ba-mitte", desc: "Jugendhilfe im Bezirk Mitte.", url: "https://www.berlin.de/ba-mitte/politik-und-verwaltung/aemter/jugendamt/" },
      { name: "Jugendamt Friedrichshain-Kreuzberg", detail: "berlin.de/ba-fk", desc: "Jugendhilfe in Friedrichshain und Kreuzberg.", url: "https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/jugendamt/" },
      { name: "Jugendamt Pankow", detail: "berlin.de/ba-pankow", desc: "Jugendhilfe im Bezirk Pankow.", url: "https://www.berlin.de/ba-pankow/politik-und-verwaltung/aemter/jugendamt/" },
      { name: "Jugendamt Charlottenburg-Wilmersdorf", detail: "berlin.de/ba-cw", desc: "Jugendhilfe in Charlottenburg und Wilmersdorf.", url: "https://www.berlin.de/ba-charlottenburg-wilmersdorf/politik-und-verwaltung/aemter/jugendamt/" },
      { name: "Jugendamt Spandau", detail: "berlin.de/ba-spandau", desc: "Jugendhilfe im Bezirk Spandau.", url: "https://www.berlin.de/ba-spandau/politik-und-verwaltung/aemter/jugendamt/" },
      { name: "Jugendamt Steglitz-Zehlendorf", detail: "berlin.de/ba-sz", desc: "Jugendhilfe in Steglitz und Zehlendorf.", url: "https://www.berlin.de/ba-steglitz-zehlendorf/politik-und-verwaltung/aemter/jugendamt/" },
      { name: "Jugendamt Tempelhof-Schöneberg", detail: "berlin.de/ba-ts", desc: "Jugendhilfe in Tempelhof und Schöneberg.", url: "https://www.berlin.de/ba-tempelhof-schoeneberg/politik-und-verwaltung/aemter/jugendamt/" },
      { name: "Jugendamt Neukölln", detail: "berlin.de/ba-neukoelln", desc: "Jugendhilfe im Bezirk Neukölln.", url: "https://www.berlin.de/ba-neukoelln/politik-und-verwaltung/aemter/jugendamt/" },
      { name: "Jugendamt Treptow-Köpenick", detail: "berlin.de/ba-tk", desc: "Jugendhilfe in Treptow und Köpenick.", url: "https://www.berlin.de/ba-treptow-koepenick/politik-und-verwaltung/aemter/jugendamt/" },
      { name: "Jugendamt Marzahn-Hellersdorf", detail: "berlin.de/ba-mh", desc: "Jugendhilfe in Marzahn und Hellersdorf.", url: "https://www.berlin.de/ba-marzahn-hellersdorf/politik-und-verwaltung/aemter/jugendamt/" },
      { name: "Jugendamt Lichtenberg", detail: "berlin.de/ba-lichtenberg", desc: "Jugendhilfe im Bezirk Lichtenberg.", url: "https://www.berlin.de/ba-lichtenberg/politik-und-verwaltung/aemter/jugendamt/" },
      { name: "Jugendamt Reinickendorf", detail: "berlin.de/ba-reinickendorf", desc: "Jugendhilfe im Bezirk Reinickendorf.", url: "https://www.berlin.de/ba-reinickendorf/politik-und-verwaltung/aemter/jugendamt/" },
    ],
  },
  {
    label: "Berlin - Freie Träger & Wohlfahrtsverbände",
    cols: 4,
    items: [
      { name: "Caritas Berlin", detail: "caritas-berlin.de", desc: "Soziale Beratung, Familienberatung, Jugendhilfe.", url: "https://www.caritas-berlin.de" },
      { name: "Diakonie Berlin-Brandenburg", detail: "diakonie-portal.de", desc: "Evangelische Wohlfahrtspflege, Familienberatung.", url: "https://www.diakonie-portal.de" },
      { name: "AWO Berlin", detail: "awo-berlin.de", desc: "Arbeiterwohlfahrt Berlin, Jugend- und Familienhilfe.", url: "https://www.awo-berlin.de" },
      { name: "DRK Berlin", detail: "drk-berlin.de", desc: "Deutsches Rotes Kreuz Berlin, Soziale Dienste.", url: "https://www.drk-berlin.de" },
      { name: "SOS Kinderdorf Berlin", detail: "sos-kinderdorf.de", desc: "Stationäre Kinder- und Jugendhilfe SOS.", url: "https://www.sos-kinderdorf.de/unsere-angebote/sos-kinderdorf-berlin" },
      { name: "Evangelisches Jugend- und Fürsorgewerk (EJF)", detail: "ejf.de", desc: "Jugendhilfe, Wohngruppen, therapeutische Angebote.", url: "https://www.ejf.de" },
      { name: "Pestalozzi-Fröbel-Haus", detail: "pfh-berlin.de", desc: "Kinder- und Jugendhilfe, Frühe Bildung Berlin.", url: "https://www.pfh-berlin.de" },
      { name: "Stiftung SPI", detail: "stiftung-spi.de", desc: "Soziale Projekte und Jugendsozialarbeit Berlin.", url: "https://www.stiftung-spi.de" },
      { name: "Gangway e.V.", detail: "gangway.de", desc: "Mobile Jugendarbeit und Streetwork Berlin.", url: "https://www.gangway.de" },
      { name: "Outreach gGmbH", detail: "outreach-berlin.de", desc: "Mobile Jugendarbeit, Jugendsozialarbeit.", url: "https://www.outreach-berlin.de" },
      { name: "Kinderschutzbund Berlin", detail: "kinderschutzbund-berlin.de", desc: "Kinderschutz, Beratung, Elternkurse Berlin.", url: "https://www.kinderschutzbund-berlin.de" },
      { name: "Hoffbauer gGmbH", detail: "hoffbauer.de", desc: "Evangelische Kinder- und Jugendhilfe Berlin-Brandenburg.", url: "https://www.hoffbauer.de" },
    ],
  },
  {
    label: "Berlin - Kliniken & Psychiatrie für Kinder & Jugendliche",
    cols: 4,
    items: [
      { name: "Charité KJP - Campus Virchow", detail: "charite.de/kjp", desc: "Universitätsklinik KJP, Campus Virchow-Klinikum.", url: "https://psychiatrie.charite.de/kinder_und_jugendpsychiatrie/" },
      { name: "Charité KJP - Campus Benjamin Franklin", detail: "charite.de/kjp-cbf", desc: "KJP Steglitz, stationär und ambulant.", url: "https://psychiatrie.charite.de/kinder_und_jugendpsychiatrie/" },
      { name: "Vivantes - KJP Humboldt-Klinikum", detail: "vivantes.de", desc: "Kinder- und Jugendpsychiatrie Reinickendorf.", url: "https://www.vivantes.de/kinder-jugendpsychiatrie" },
      { name: "Vivantes - KJP Klinikum Neukölln", detail: "vivantes.de/neukoelln", desc: "Kinder- und Jugendpsychiatrie Neukölln.", url: "https://www.vivantes.de/kinder-jugendpsychiatrie" },
      { name: "DRK Kliniken Berlin - KJP Westend", detail: "drk-kliniken-berlin.de", desc: "Kinder- und Jugendpsychiatrie Charlottenburg.", url: "https://www.drk-kliniken-berlin.de" },
      { name: "Ev. KH Königin Elisabeth Herzberge", detail: "ekh-berlin.de", desc: "KJP im Nordosten Berlins, Lichtenberg.", url: "https://www.ekh-berlin.de" },
      { name: "KJPD Berlin - Übersicht alle Bezirke", detail: "berlin.de/kjpd", desc: "Kinder- und Jugendpsychiatrische Dienste aller Bezirke.", url: "https://www.berlin.de/sen/jugend/gesundheit-und-psychiatrie/kinder-und-jugendpsychiatrische-dienste/" },
      { name: "Helios Klinikum Berlin-Buch - KJP", detail: "helios-gesundheit.de/buch", desc: "Kinder- und Jugendpsychiatrie im Norden Berlins.", url: "https://www.helios-gesundheit.de/kliniken/berlin-buch/" },
    ],
  },
  {
    label: "Brandenburg - Behörden, Jugendämter & Träger",
    cols: 4,
    items: [
      { name: "MBJS Brandenburg", detail: "mbjs.brandenburg.de", desc: "Ministerium für Bildung, Jugend und Sport Brandenburg.", url: "https://www.mbjs.brandenburg.de" },
      { name: "Landesjugendamt Brandenburg", detail: "landesjugendamt.de", desc: "Überregionale Jugendamtsaufgaben im Land Brandenburg.", url: "https://www.landesjugendamt.de" },
      { name: "Jugendamt Potsdam", detail: "potsdam.de/jugendamt", desc: "Jugendhilfe in der Landeshauptstadt.", url: "https://www.potsdam.de/jugendamt" },
      { name: "Jugendamt Cottbus", detail: "cottbus.de/jugendamt", desc: "Jugendhilfe im Bezirk Cottbus.", url: "https://www.cottbus.de/verwaltung/aemter/jugendamt/" },
      { name: "Jugendamt Brandenburg a.d. Havel", detail: "stadt-brandenburg.de", desc: "Jugendhilfe in Brandenburg an der Havel.", url: "https://www.stadt-brandenburg.de/familie-soziales/jugendamt/" },
      { name: "Jugendamt Frankfurt (Oder)", detail: "frankfurt-oder.de", desc: "Jugendhilfe im Kreis Frankfurt (Oder).", url: "https://www.frankfurt-oder.de" },
      { name: "Kinderschutzbund Brandenburg", detail: "kinderschutzbund-bb.de", desc: "Landesverband Kinderschutz Brandenburg.", url: "https://www.kinderschutzbund-bb.de" },
      { name: "AWO Brandenburg", detail: "awo-brb.de", desc: "Arbeiterwohlfahrt, Kinder- und Jugendhilfe Brandenburg.", url: "https://www.awo-brb.de" },
      { name: "Caritas Brandenburg", detail: "caritas-berlin.de", desc: "Caritasverband für das Bistum Berlin in Brandenburg.", url: "https://www.caritas-berlin.de" },
      { name: "Diakonie Brandenburg", detail: "diakonie-portal.de", desc: "Evangelische Wohlfahrtspflege in Brandenburg.", url: "https://www.diakonie-portal.de" },
      { name: "Frühe Hilfen Brandenburg", detail: "fruehehilfen-bb.de", desc: "Netzwerk Frühe Hilfen des Landes Brandenburg.", url: "https://www.fruehehilfen.de" },
      { name: "DRK Landesverband Brandenburg", detail: "drk-lv-bb.de", desc: "Rotes Kreuz Brandenburg, Familien- und Sozialdienste.", url: "https://www.drk-lv-bb.de" },
    ],
  },
  {
    label: "Bundesebene - Ministerien, Institute & Verbände",
    cols: 4,
    items: [
      { name: "BMFSFJ", detail: "bmfsfj.de", desc: "Bundesministerium für Familie, Senioren, Frauen und Jugend.", url: "https://www.bmfsfj.de" },
      { name: "BZgA", detail: "bzga.de", desc: "Bundeszentrale für gesundheitliche Aufklärung.", url: "https://www.bzga.de" },
      { name: "Deutsches Jugendinstitut (DJI)", detail: "dji.de", desc: "Forschung zu Kinder-, Jugend- und Familienpolitik.", url: "https://www.dji.de" },
      { name: "UNICEF Deutschland", detail: "unicef.de", desc: "Kinderrechte und Schutzprogramme.", url: "https://www.unicef.de" },
      { name: "Kinderschutzbund Deutschland", detail: "kinderschutzbund.de", desc: "Bundesverband Kinderschutz.", url: "https://www.kinderschutzbund.de" },
      { name: "AGJ - Kinder- und Jugendhilfe", detail: "agj.de", desc: "Fachverband für Jugendhilfe auf Bundesebene.", url: "https://www.agj.de" },
      { name: "BAG Jugendsozialarbeit", detail: "bagjaw.de", desc: "Bundesarbeitsgemeinschaft Jugendsozialarbeit.", url: "https://www.bagjaw.de" },
      { name: "Deutsches Kinderhilfswerk (DKHW)", detail: "dkhw.de", desc: "Anwaltschaft und Lobbying für Kinderrechte.", url: "https://www.dkhw.de" },
      { name: "Bundesjugendkuratorium", detail: "bundesjugendkuratorium.de", desc: "Beratungsgremium der Bundesregierung.", url: "https://www.bundesjugendkuratorium.de" },
      { name: "National Coalition Kinderrechte", detail: "national-coalition.de", desc: "Netzwerk für die UN-Kinderrechtskonvention.", url: "https://www.national-coalition.de" },
      { name: "DAJEB", detail: "dajeb.de", desc: "Dt. Arbeitsgemeinschaft Jugend- und Eheberatung.", url: "https://www.dajeb.de" },
      { name: "BAG Kinderschutzzentren", detail: "kinderschutzzentren.org", desc: "Bundesverband der Kinderschutzzentren.", url: "https://www.kinderschutzzentren.org" },
    ],
  },
  {
    label: "Weitere Bundesländer - Jugend- & Familienministerien",
    cols: 4,
    items: [
      { name: "Baden-Württemberg", detail: "sozialministerium.de", desc: "Ministerium für Soziales, Gesundheit und Integration.", url: "https://www.sozialministerium.de" },
      { name: "Bayern", detail: "stmas.bayern.de", desc: "Staatsministerium für Familie, Arbeit und Soziales.", url: "https://www.stmas.bayern.de" },
      { name: "Bremen", detail: "soziales.bremen.de", desc: "Senatorin für Soziales, Jugend, Integration und Sport.", url: "https://www.soziales.bremen.de" },
      { name: "Hamburg", detail: "hamburg.de/jugend", desc: "Behörde für Arbeit, Soziales, Familie und Integration.", url: "https://www.hamburg.de/jugend/" },
      { name: "Hessen", detail: "soziales.hessen.de", desc: "Hessisches Ministerium für Soziales und Integration.", url: "https://www.soziales.hessen.de" },
      { name: "Mecklenburg-Vorpommern", detail: "regierung-mv.de", desc: "Ministerium für Soziales und Gesundheit.", url: "https://www.regierung-mv.de/Landesregierung/sm/" },
      { name: "Niedersachsen", detail: "ms.niedersachsen.de", desc: "Ministerium für Soziales, Arbeit, Gesundheit.", url: "https://www.ms.niedersachsen.de" },
      { name: "Nordrhein-Westfalen", detail: "mkjfgfi.nrw.de", desc: "Ministerium für Kinder, Jugend, Familie, Gleichstellung.", url: "https://www.mkjfgfi.nrw.de" },
      { name: "Rheinland-Pfalz", detail: "mffki.rlp.de", desc: "Ministerium für Familie, Frauen, Kultur.", url: "https://www.mffki.rlp.de" },
      { name: "Saarland", detail: "saarland.de/soziales", desc: "Ministerium für Soziales, Gesundheit, Familie.", url: "https://www.saarland.de/msagd/" },
      { name: "Sachsen", detail: "sms.sachsen.de", desc: "Staatsministerium für Soziales.", url: "https://www.sms.sachsen.de" },
      { name: "Sachsen-Anhalt", detail: "ms.sachsen-anhalt.de", desc: "Ministerium für Arbeit, Soziales und Integration.", url: "https://ms.sachsen-anhalt.de" },
      { name: "Schleswig-Holstein", detail: "schleswig-holstein.de", desc: "Ministerium für Soziales, Jugend, Familie.", url: "https://www.schleswig-holstein.de/DE/Landesregierung/VIII/viii_node.html" },
      { name: "Thüringen", detail: "thueringen.de/jugend", desc: "Ministerium für Migration, Justiz und Verbraucherschutz.", url: "https://www.thueringen.de/th6/tmmjv/" },
    ],
  },
  {
    label: "Europäische Ebene - EU & internationale Organisationen",
    cols: 3,
    items: [
      { name: "Europäisches Jugendportal", detail: "youth.europa.eu", desc: "EU-Informationsportal für Jugendliche, Erasmus+, Rechte.", url: "https://youth.europa.eu/home_de" },
      { name: "Europäische Kommission - Jugend", detail: "ec.europa.eu/youth", desc: "EU-Jugendpolitik, Förderungen, Solidaritätskorps.", url: "https://commission.europa.eu/education/education-and-training-policies/youth_de" },
      { name: "Europarat - Jugend", detail: "coe.int/youth", desc: "Jugendpolitik und Menschenrechte im Europarat.", url: "https://www.coe.int/de/web/youth" },
      { name: "UNICEF - Kinderrechte Europa", detail: "unicef.org/eca", desc: "Kinderrechtskonvention, Schutzstandards Europa.", url: "https://www.unicef.org/eca" },
      { name: "WHO Europa - Kinder & Jugendgesundheit", detail: "euro.who.int", desc: "Gesundheitsstandards und Prävention für Kinder.", url: "https://www.euro.who.int/de/health-topics/Life-stages/child-and-adolescent-health" },
      { name: "IPPF Europa", detail: "ippfen.org", desc: "Internationale Familienplanung und Sexualaufklärung.", url: "https://www.ippfen.org" },
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
          Anlaufstellen auf kommunaler, Landes-, Bundes- und europäischer Ebene -
          von Berliner Krisendiensten über alle 12 Bezirksjugendämter bis hin zu EU-Institutionen.
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
                gridTemplateColumns: `repeat(${section.cols}, 1fr)`,
                gap: "0.5rem",
              }}>
                {section.items.map((item) => (
                  <a
                    key={item.url + item.name}
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
                      padding: "0.875rem 1rem",
                      height: "100%",
                      transition: "border-color 0.15s, box-shadow 0.15s",
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1614", margin: "0 0 0.2rem", lineHeight: 1.3 }}>
                          {item.name}
                        </p>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, marginTop: "2px", opacity: 0.3 }}>
                          <path d="M3.5 1.5H10.5V8.5M10.5 1.5L1.5 10.5" stroke="#1A1614" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#8B3A22", margin: "0 0 0.2rem" }}>
                        {item.detail}
                      </p>
                      <p style={{ fontSize: "0.6875rem", color: "#7A6E6A", margin: 0, lineHeight: 1.45 }}>
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
        @media (max-width: 640px) {
          .ext-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
