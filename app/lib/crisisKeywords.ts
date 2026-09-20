/**
 * Einzige Quelle fuer die Krisen-Erkennung, gemeinsam genutzt vom Client
 * (ChatWidget - fuer die "Akute Gefahr"-Banner-Anzeige) und vom Server
 * (api/chat/route.ts - fuer das Krisenprotokoll und Telegram-Alarme).
 * Vorher gab es zwei fast identische, aber schon leicht auseinandergelaufene
 * Listen an zwei Stellen - das Risiko, dass sie sich widersprechen, faellt
 * damit weg.
 */
export const CRISIS_KEYWORDS = [
  // Suizidabsicht - direkt
  "suizid", "selbstmord", "umbringen", "will sterben", "will tot",
  "möchte sterben", "wünsche mir zu sterben", "nicht mehr leben",
  "aufhören zu leben", "leben beenden", "alles beenden", "alles zu beenden",
  "nicht mehr da sein", "schluss machen", "nicht mehr existieren",
  "bald nicht mehr hier", "bald tot", "lebe nicht mehr lange",
  "letzter tag", "letzte nachricht", "zum letzten mal",
  "abschiedsbrief", "abschied nehmen", "niemand vermisst mich",

  // Suizidmethoden
  "erhängen", "aufhängen", "strick", "strang",
  "vor den zug", "vor einen zug", "gleise",
  "von der brücke", "vom dach springen", "aus dem fenster springen",
  "tabletten schlucken", "überdosis", "vergiften", "ertrinken",
  "erschießen", "ersticken",

  // Selbstverletzung
  "ritzen", "schneiden", "selbstverletzung", "selbst verletzen",
  "mich verletzen", "mich schneiden", "mich ritzen",
  "haue mich", "schlage mich", "brenne mich", "kratze mich blutig",

  // Hoffnungslosigkeit / Warnsignale
  "kann nicht mehr", "halte es nicht mehr aus", "halte das nicht mehr aus",
  "schaffe es nicht mehr", "will nicht mehr", "will nicht mehr kämpfen",
  "hat keinen sinn mehr", "alles sinnlos", "wozu noch leben", "wozu das alles",
  "niemand braucht mich", "bin eine last", "bin zur last",
  "ohne mich wäre es besser", "alle besser ohne mich",
  "niemand würde mich vermissen", "keiner vermisst mich",
  "bin nutzlos", "bin wertlos", "hasse mein leben", "hasse mich",

  // Akute Gefährdung durch andere
  "werde misshandelt", "werde geschlagen", "werde missbraucht",
  "sexueller missbrauch", "vergewaltigt", "jemand bedroht mich",
  "ich werde bedroht", "angst vor zuhause", "angst nach hause",

  // Notruf
  "notruf", "notfall", "hilfe sofort", "akute gefahr",

  // Englisch
  "suicide", "kill myself", "want to die", "end my life", "end it all",
  "no reason to live", "no way out", "dont want to live", "don't want to live",
  "self-harm", "cutting myself", "hurt myself", "overdose",
  "hang myself", "jump off", "in front of a train",
  "nobody needs me", "burden to everyone", "worthless", "hopeless",
  "abuse", "being abused", "emergency help",
];

export function detectCrisis(message: string): boolean {
  const lower = message.toLowerCase();
  return CRISIS_KEYWORDS.some((kw) => lower.includes(kw));
}
