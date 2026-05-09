export interface Region {
  slug: string;
  name: string;
  typ: "bezirk" | "stadt" | "landkreis";
  bundesland: "berlin" | "brandenburg";
  jugendamt: string;
  beschreibung: string;
  keywords: string[];
}

export const regionen: Region[] = [
  // ── Berlin Bezirke ──────────────────────────────────────────────────────────

  {
    slug: "berlin-mitte",
    name: "Berlin-Mitte",
    typ: "bezirk",
    bundesland: "berlin",
    jugendamt: "Jugendamt Berlin-Mitte, Abteilung Jugend und Gesundheit",
    beschreibung:
      "Berlin-Mitte ist der bevölkerungsreichste und diverseste Berliner Bezirk mit einem hohen Anteil an Familien in schwierigen Lebenslagen. Das Jugendamt Mitte betreut eines der größten Einzugsgebiete aller Berliner Bezirksjugendämter.",
    keywords: [
      "Jugendhilfe Berlin Mitte",
      "Krisenintervention Berlin Mitte",
      "Ankernetz Berlin Mitte",
      "stationäre Jugendhilfe Mitte Berlin",
    ],
  },
  {
    slug: "berlin-kreuzberg",
    name: "Friedrichshain-Kreuzberg",
    typ: "bezirk",
    bundesland: "berlin",
    jugendamt: "Jugendamt Friedrichshain-Kreuzberg",
    beschreibung:
      "Friedrichshain-Kreuzberg verbindet zwei historisch sehr unterschiedliche Kieze und verzeichnet eine stark wachsende Bevölkerung. Der Bezirk ist bekannt für eine aktive Zivilgesellschaft und ein breites Netz sozialer Träger.",
    keywords: [
      "Jugendhilfe Kreuzberg",
      "Krisenintervention Friedrichshain",
      "Ankernetz Kreuzberg Berlin",
      "Jugendhilfe Friedrichshain-Kreuzberg",
    ],
  },
  {
    slug: "berlin-pankow",
    name: "Berlin-Pankow",
    typ: "bezirk",
    bundesland: "berlin",
    jugendamt: "Jugendamt Pankow",
    beschreibung:
      "Pankow ist der flächenmäßig größte Berliner Bezirk und umfasst Stadtteile mit sehr unterschiedlichen sozialen Strukturen — von Prenzlauer Berg bis Blankenburg. Das Jugendamt Pankow ist einer der größten Sozialen Dienste Berlins.",
    keywords: [
      "Jugendhilfe Pankow",
      "Krisenintervention Pankow Berlin",
      "Ankernetz Pankow",
      "stationäre Jugendhilfe Prenzlauer Berg",
    ],
  },
  {
    slug: "berlin-charlottenburg",
    name: "Charlottenburg-Wilmersdorf",
    typ: "bezirk",
    bundesland: "berlin",
    jugendamt: "Jugendamt Charlottenburg-Wilmersdorf",
    beschreibung:
      "Charlottenburg-Wilmersdorf ist ein west-berliner Bezirk mit einer heterogenen Bevölkerungsstruktur — von wohlhabenden Wohnvierteln bis zu Quartieren mit hohem Unterstützungsbedarf. Das Jugendamt begleitet Familien in beiden Stadtteilen.",
    keywords: [
      "Jugendhilfe Charlottenburg",
      "Krisenintervention Wilmersdorf",
      "Ankernetz Charlottenburg-Wilmersdorf",
      "stationäre Jugendhilfe West-Berlin",
    ],
  },
  {
    slug: "berlin-spandau",
    name: "Berlin-Spandau",
    typ: "bezirk",
    bundesland: "berlin",
    jugendamt: "Jugendamt Spandau",
    beschreibung:
      "Spandau ist ein eigenständig geprägter Bezirk am westlichen Rand Berlins mit einer industriellen Geschichte. Familien in Spandau profitieren von einem gut vernetzten Jugendhilfesystem, das auch Träger wie Ankernetz einschließt.",
    keywords: [
      "Jugendhilfe Spandau",
      "Krisenintervention Spandau Berlin",
      "Ankernetz Spandau",
      "Kinder- und Jugendhilfe Spandau",
    ],
  },
  {
    slug: "berlin-steglitz",
    name: "Steglitz-Zehlendorf",
    typ: "bezirk",
    bundesland: "berlin",
    jugendamt: "Jugendamt Steglitz-Zehlendorf",
    beschreibung:
      "Steglitz-Zehlendorf gilt als einer der wohlhabenderen Berliner Bezirke, was den Hilfebedarf von Familien in schwierigen Lagen aber nicht mindert. Das Jugendamt arbeitet eng mit freien Trägern zusammen, um passgenaue Hilfen zu ermöglichen.",
    keywords: [
      "Jugendhilfe Steglitz",
      "Krisenintervention Zehlendorf",
      "Ankernetz Steglitz-Zehlendorf",
      "Jugendhilfe Südwest Berlin",
    ],
  },
  {
    slug: "berlin-tempelhof",
    name: "Tempelhof-Schöneberg",
    typ: "bezirk",
    bundesland: "berlin",
    jugendamt: "Jugendamt Tempelhof-Schöneberg",
    beschreibung:
      "Tempelhof-Schöneberg vereint traditionelle Berliner Kieze mit modernem Stadtleben. Das Jugendamt ist aktiv in der Bezirkspolitik verankert und kooperiert mit einer Vielzahl freier Träger der Jugendhilfe.",
    keywords: [
      "Jugendhilfe Tempelhof",
      "Krisenintervention Schöneberg",
      "Ankernetz Tempelhof-Schöneberg",
      "stationäre Jugendhilfe Tempelhof",
    ],
  },
  {
    slug: "berlin-neukoelln",
    name: "Berlin-Neukölln",
    typ: "bezirk",
    bundesland: "berlin",
    jugendamt: "Jugendamt Neukölln",
    beschreibung:
      "Neukölln ist einer der am dichtesten besiedelten Berliner Bezirke mit einem überdurchschnittlich hohen Anteil an Familien mit Migrationshintergrund und komplexem Hilfebedarf. Das Jugendamt Neukölln ist auf schnelle Reaktionen angewiesen.",
    keywords: [
      "Jugendhilfe Neukölln",
      "Krisenintervention Neukölln Berlin",
      "Ankernetz Neukölln",
      "stationäre Jugendhilfe Neukölln",
    ],
  },
  {
    slug: "berlin-treptow",
    name: "Treptow-Köpenick",
    typ: "bezirk",
    bundesland: "berlin",
    jugendamt: "Jugendamt Treptow-Köpenick",
    beschreibung:
      "Treptow-Köpenick ist Berlins flächenmäßig zweitgrößter Bezirk mit einem hohen Waldanteil und ländlich geprägten Randgebieten. Die räumliche Weitläufigkeit macht schnell erreichbare Jugendhilfeangebote besonders wichtig.",
    keywords: [
      "Jugendhilfe Treptow-Köpenick",
      "Krisenintervention Köpenick",
      "Ankernetz Treptow-Köpenick",
      "Jugendhilfe Südost Berlin",
    ],
  },
  {
    slug: "berlin-marzahn",
    name: "Marzahn-Hellersdorf",
    typ: "bezirk",
    bundesland: "berlin",
    jugendamt: "Jugendamt Marzahn-Hellersdorf",
    beschreibung:
      "Marzahn-Hellersdorf ist geprägt durch Plattenbausiedlungen aus der DDR-Zeit und eine der höchsten Kinderarmutsquoten Berlins. Das Jugendamt kooperiert intensiv mit freien Trägern, um den vielfältigen Hilfebedarfen gerecht zu werden.",
    keywords: [
      "Jugendhilfe Marzahn",
      "Krisenintervention Hellersdorf",
      "Ankernetz Marzahn-Hellersdorf",
      "stationäre Jugendhilfe Ost-Berlin",
    ],
  },
  {
    slug: "berlin-lichtenberg",
    name: "Berlin-Lichtenberg",
    typ: "bezirk",
    bundesland: "berlin",
    jugendamt: "Jugendamt Lichtenberg",
    beschreibung:
      "Lichtenberg ist ein dynamisch wachsender Ost-Berliner Bezirk mit stark verdichteten Wohnlagen. Das Jugendamt Lichtenberg hat in den letzten Jahren sein Netz an freien Trägern deutlich ausgebaut.",
    keywords: [
      "Jugendhilfe Lichtenberg Berlin",
      "Krisenintervention Lichtenberg",
      "Ankernetz Lichtenberg",
      "Jugendhilfe Ost-Berlin",
    ],
  },
  {
    slug: "berlin-reinickendorf",
    name: "Berlin-Reinickendorf",
    typ: "bezirk",
    bundesland: "berlin",
    jugendamt: "Jugendamt Reinickendorf",
    beschreibung:
      "Reinickendorf ist der nördlichste Berliner Bezirk mit einer starken Wohnfunktion und einem gut ausgebauten Sozialhilfesystem. Das Jugendamt arbeitet mit zahlreichen freien Trägern zusammen, um Familien in Notlagen schnell zu erreichen.",
    keywords: [
      "Jugendhilfe Reinickendorf Berlin",
      "Krisenintervention Reinickendorf",
      "Ankernetz Reinickendorf",
      "stationäre Jugendhilfe Nord-Berlin",
    ],
  },

  // ── Brandenburg Städte und Landkreise ───────────────────────────────────────

  {
    slug: "potsdam",
    name: "Potsdam",
    typ: "stadt",
    bundesland: "brandenburg",
    jugendamt: "Jugendamt der Landeshauptstadt Potsdam",
    beschreibung:
      "Potsdam ist als Landeshauptstadt Brandenburgs das administrative und kulturelle Zentrum des Landes. Das Jugendamt Potsdam koordiniert die Kinder- und Jugendhilfe für eine wachsende Stadt mit zunehmend vielfältigem Hilfebedarf.",
    keywords: [
      "Jugendhilfe Potsdam",
      "Krisenintervention Potsdam Brandenburg",
      "Ankernetz Potsdam",
      "stationäre Jugendhilfe Potsdam",
    ],
  },
  {
    slug: "potsdam-mittelmark",
    name: "Potsdam-Mittelmark",
    typ: "landkreis",
    bundesland: "brandenburg",
    jugendamt: "Jugendamt Potsdam-Mittelmark, Bad Belzig",
    beschreibung:
      "Potsdam-Mittelmark ist einer der flächenmäßig größten Landkreise Brandenburgs und grenzt direkt an Berlin und die Landeshauptstadt Potsdam. Die ländliche Struktur des Landkreises erfordert gut vernetzte und mobile Jugendhilfeangebote.",
    keywords: [
      "Jugendhilfe Potsdam-Mittelmark",
      "Krisenintervention Potsdam-Mittelmark",
      "Ankernetz Potsdam-Mittelmark",
      "Kinder- und Jugendhilfe Bad Belzig",
    ],
  },
  {
    slug: "brandenburg-havel",
    name: "Brandenburg an der Havel",
    typ: "stadt",
    bundesland: "brandenburg",
    jugendamt: "Jugendamt der Stadt Brandenburg an der Havel",
    beschreibung:
      "Brandenburg an der Havel ist eine kreisfreie Stadt im Westen Brandenburgs mit einer langen Geschichte als Industriestandort. Die Stadt verfügt über eigene Jugendhilfestrukturen, die durch spezialisierte freie Träger ergänzt werden.",
    keywords: [
      "Jugendhilfe Brandenburg an der Havel",
      "Krisenintervention Brandenburg Havel",
      "Ankernetz Brandenburg Havel",
      "stationäre Jugendhilfe Brandenburg Stadt",
    ],
  },
  {
    slug: "cottbus",
    name: "Cottbus",
    typ: "stadt",
    bundesland: "brandenburg",
    jugendamt: "Jugendamt der Stadt Cottbus / Chóśebuz",
    beschreibung:
      "Cottbus ist die zweitgrößte Stadt Brandenburgs und ein regionaler Versorgungsschwerpunkt für die Lausitz. Das Jugendamt Cottbus koordiniert die Hilfen für eine Stadt im strukturellen Wandel mit hohem Unterstützungsbedarf für Familien.",
    keywords: [
      "Jugendhilfe Cottbus",
      "Krisenintervention Cottbus Brandenburg",
      "Ankernetz Cottbus",
      "stationäre Jugendhilfe Lausitz",
    ],
  },
  {
    slug: "frankfurt-oder",
    name: "Frankfurt (Oder)",
    typ: "stadt",
    bundesland: "brandenburg",
    jugendamt: "Jugendamt der Stadt Frankfurt (Oder)",
    beschreibung:
      "Frankfurt (Oder) ist eine Grenzstadt an der Oder mit enger Verflechtung zur polnischen Nachbarstadt Słubice. Das Jugendamt betreut Familien in einer Stadt mit besonderem interkulturellem Profil und spezifischen sozialen Herausforderungen.",
    keywords: [
      "Jugendhilfe Frankfurt Oder",
      "Krisenintervention Frankfurt Oder Brandenburg",
      "Ankernetz Frankfurt Oder",
      "Kinder- und Jugendhilfe Ostbrandenburg",
    ],
  },
  {
    slug: "eberswalde",
    name: "Barnim (Eberswalde)",
    typ: "landkreis",
    bundesland: "brandenburg",
    jugendamt: "Jugendamt Barnim, Eberswalde",
    beschreibung:
      "Der Landkreis Barnim mit Verwaltungssitz Eberswalde grenzt direkt an Berlin im Nordosten und ist durch wachsende suburbane Gebiete sowie ländliche Strukturen geprägt. Das Jugendamt Barnim kooperiert intensiv mit Berliner Trägern.",
    keywords: [
      "Jugendhilfe Barnim Eberswalde",
      "Krisenintervention Barnim Brandenburg",
      "Ankernetz Barnim",
      "stationäre Jugendhilfe Nordostbrandenburg",
    ],
  },
  {
    slug: "dahme-spreewald",
    name: "Dahme-Spreewald",
    typ: "landkreis",
    bundesland: "brandenburg",
    jugendamt: "Jugendamt Dahme-Spreewald, Lübben",
    beschreibung:
      "Dahme-Spreewald liegt im Süden Brandenburgs und grenzt im Norden direkt an Berlin. Der Landkreis vereint enge Berliner Suburbanisierung im Norden mit ländlicher Spreewald-Idylle im Süden — mit entsprechend unterschiedlichem Hilfebedarf.",
    keywords: [
      "Jugendhilfe Dahme-Spreewald",
      "Krisenintervention Lübben Brandenburg",
      "Ankernetz Dahme-Spreewald",
      "Kinder- und Jugendhilfe Spreewald",
    ],
  },
  {
    slug: "teltow-flaeming",
    name: "Teltow-Fläming",
    typ: "landkreis",
    bundesland: "brandenburg",
    jugendamt: "Jugendamt Teltow-Fläming, Luckenwalde",
    beschreibung:
      "Teltow-Fläming grenzt im Norden an Berlin und Potsdam und ist ein bevorzugter Wohnlandkreis für Berufstätige aus der Hauptstadtregion. Das Jugendamt Luckenwalde betreut Familien in einer stark wachsenden Region mit hohem Familienzuzug.",
    keywords: [
      "Jugendhilfe Teltow-Fläming",
      "Krisenintervention Luckenwalde Brandenburg",
      "Ankernetz Teltow-Fläming",
      "stationäre Jugendhilfe Südbrandenburg",
    ],
  },
  {
    slug: "havelland",
    name: "Havelland",
    typ: "landkreis",
    bundesland: "brandenburg",
    jugendamt: "Jugendamt Havelland, Rathenow",
    beschreibung:
      "Havelland liegt westlich von Berlin und Potsdam und umfasst die Havelniederungen mit Städten wie Rathenow und Falkensee. Der Landkreis hat eine direkte Nähe zu Berlin, die ihn zu einem wichtigen Einzugsgebiet für Berliner Jugendhilfeträger macht.",
    keywords: [
      "Jugendhilfe Havelland",
      "Krisenintervention Havelland Brandenburg",
      "Ankernetz Havelland",
      "Kinder- und Jugendhilfe Rathenow",
    ],
  },
  {
    slug: "oberhavel",
    name: "Oberhavel",
    typ: "landkreis",
    bundesland: "brandenburg",
    jugendamt: "Jugendamt Oberhavel, Oranienburg",
    beschreibung:
      "Oberhavel liegt nördlich von Berlin und Oranienburg ist ein zentraler Verwaltungsstandort des Landkreises. Die Nähe zu Berlin und das starke Bevölkerungswachstum der letzten Jahre stellen das Jugendamt vor wachsende Anforderungen.",
    keywords: [
      "Jugendhilfe Oberhavel",
      "Krisenintervention Oranienburg Brandenburg",
      "Ankernetz Oberhavel",
      "stationäre Jugendhilfe Nordbrandenburg",
    ],
  },
  {
    slug: "maerkisch-oderland",
    name: "Märkisch-Oderland",
    typ: "landkreis",
    bundesland: "brandenburg",
    jugendamt: "Jugendamt Märkisch-Oderland, Seelow",
    beschreibung:
      "Märkisch-Oderland erstreckt sich östlich von Berlin bis zur Oder und umfasst Städte wie Strausberg und Seelow. Die Grenzlage und die suburbanen Strukturen im Westen des Landkreises prägen das Profil der Jugendhilfeangebote.",
    keywords: [
      "Jugendhilfe Märkisch-Oderland",
      "Krisenintervention Seelow Brandenburg",
      "Ankernetz Märkisch-Oderland",
      "Kinder- und Jugendhilfe Strausberg",
    ],
  },
  {
    slug: "oder-spree",
    name: "Oder-Spree",
    typ: "landkreis",
    bundesland: "brandenburg",
    jugendamt: "Jugendamt Oder-Spree, Beeskow",
    beschreibung:
      "Oder-Spree ist ein großer Landkreis im Südosten Brandenburgs mit Sitz in Beeskow. Die weiten Waldgebiete und der vergleichsweise geringe Bevölkerungsdruck machen mobile und flexible Jugendhilfeangebote besonders wertvoll.",
    keywords: [
      "Jugendhilfe Oder-Spree",
      "Krisenintervention Beeskow Brandenburg",
      "Ankernetz Oder-Spree",
      "stationäre Jugendhilfe Ostbrandenburg",
    ],
  },
  {
    slug: "prignitz",
    name: "Prignitz",
    typ: "landkreis",
    bundesland: "brandenburg",
    jugendamt: "Jugendamt Prignitz, Perleberg",
    beschreibung:
      "Die Prignitz ist ein ländlicher Landkreis im Nordwesten Brandenburgs mit einem starken Bevölkerungsrückgang in den letzten Jahrzehnten. Das Jugendamt Perleberg arbeitet in einem ländlichen Kontext, in dem jede Hilfe gut koordiniert sein muss.",
    keywords: [
      "Jugendhilfe Prignitz",
      "Krisenintervention Perleberg Brandenburg",
      "Ankernetz Prignitz",
      "Kinder- und Jugendhilfe Nordwestbrandenburg",
    ],
  },
  {
    slug: "ostprignitz-ruppin",
    name: "Ostprignitz-Ruppin",
    typ: "landkreis",
    bundesland: "brandenburg",
    jugendamt: "Jugendamt Ostprignitz-Ruppin, Neuruppin",
    beschreibung:
      "Ostprignitz-Ruppin liegt im Nordwesten Brandenburgs und ist durch die Fontane-Stadt Neuruppin bekannt. Der dünn besiedelte Landkreis stellt besondere Anforderungen an Jugendhilfeträger, die auch entlegene Familien zuverlässig erreichen müssen.",
    keywords: [
      "Jugendhilfe Ostprignitz-Ruppin",
      "Krisenintervention Neuruppin Brandenburg",
      "Ankernetz Ostprignitz-Ruppin",
      "stationäre Jugendhilfe Ruppin",
    ],
  },
  {
    slug: "uckermark",
    name: "Uckermark",
    typ: "landkreis",
    bundesland: "brandenburg",
    jugendamt: "Jugendamt Uckermark, Prenzlau",
    beschreibung:
      "Die Uckermark ist flächenmäßig einer der größten Landkreise Deutschlands und liegt im Nordosten Brandenburgs. Die Kombination aus weiten Entfernungen und sozialen Herausforderungen in der Region macht verlässliche Jugendhilfe besonders bedeutsam.",
    keywords: [
      "Jugendhilfe Uckermark",
      "Krisenintervention Prenzlau Brandenburg",
      "Ankernetz Uckermark",
      "Kinder- und Jugendhilfe Nordostbrandenburg",
    ],
  },
];

export function getRegionBySlug(slug: string): Region | undefined {
  return regionen.find((r) => r.slug === slug);
}
