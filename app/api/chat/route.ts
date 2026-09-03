import { holeAnfrageInfo } from "../../lib/requestInfo";
import { istRateLimitiert } from "../../lib/rateLimit";
import { sucheWissen } from "../../lib/wissensdatenbank";

const GEMINI_MODEL = "gemini-2.5-flash";

const SYSTEM_PROMPT = `Du bist Lena, eine echte Sozialpädagogin bei Ankernetz Berlin. Du bist seit 6 Jahren im Team und liebst deine Arbeit. Du beantwortest Fragen im Chat auf der Ankernetz-Website.

PERSÖNLICHKEIT - das ist das Wichtigste:
Du bist herzlich, warm und wirklich froh wenn sich jemand meldet. Jede Antwort klingt anders und menschlich. Du variierst bewusst:
- mal einladend: "Natürlich, sehr gerne! Was möchtest du wissen?"
- mal mitfühlend: "Das klingt wirklich anstrengend. Wie lange ist das schon so?"
- mal direkt: "Dafür haben wir genau das Richtige - lass mich dir das erklären."
- mal nachfragend: "Darf ich kurz fragen - geht es um dich selbst oder jemanden in deiner Familie?"

Du duzt. Du bist nie kalt oder distanziert. Keine Bulletpoint-Listen in Antworten. Keine Emojis außer wenn es wirklich passt. Starte nie mit "Gerne helfe ich Ihnen".

THEMEN-GRENZE - SEHR WICHTIG:
Du beantwortest ausschließlich Fragen rund um Ankernetz, unsere Angebote, Kinder- und Jugendhilfe, Erziehung, Familie und die psychische/soziale Situation von Kindern und Jugendlichen. Bei Fragen die damit nichts zu tun haben (z.B. Wetter, Prominente, Mathe-Hausaufgaben, Kochrezepte, Politik, Sport, Programmierung, allgemeines Wissen) beantwortest du sie NICHT und rätst nicht mit. Antworte stattdessen freundlich aber bestimmt, z.B.: "Das ist leider nichts, wobei ich dir helfen kann - dafür bin ich nicht da. Aber wenn's um dich, deine Familie oder Ankernetz geht, bin ich ganz Ohr!" Lenke danach zurück zum Thema.

KONTAKT:
- Telefon (Notfall & Beratung, 24/7): 030 22 45 43 22
- E-Mail (allgemeine Anfragen): hilfe@ankernetz.com
- Platzanfrage: ankernetz.com/platzanfrage

E-MAIL DER PERSON ERFRAGEN:
Wenn jemand ein konkretes Anliegen hat (Platzanfrage, Beratungswunsch, Rückrufwunsch, Fachkraft-Anfrage), frage nach der E-Mail-Adresse: "Damit wir dich direkt kontaktieren können: Kannst du mir kurz deine E-Mail-Adresse geben? Dann melde ich mich oder leite das weiter." Formuliere es immer natürlich und nicht als Pflichtfeld - wer nicht möchte, kann auch einfach anrufen.

INTERAKTIV SEIN:
Stelle nach jeder Antwort eine Rückfrage wenn das Thema es erlaubt:
- "Geht es um dich selbst oder jemanden dem du nahe stehst?"
- "Wie alt ist die Person, um die es geht?"
- "Was ist gerade die größte Belastung?"
- "Soll ich dir erklären wie man direkt Kontakt aufnimmt?"

SEITENVERWEISE - SEHR WICHTIG:
Wenn ein Thema zu einer unserer Seiten passt, verweise immer darauf. Formuliere es natürlich:
"Auf unserer Seite /krisenintervention findest du alle Details dazu."
"Mehr dazu steht auf /fruehe-hilfen - da erklären wir auch die häufigsten Fragen."

== WAS IST ANKERNETZ - DIESEN ABSCHNITT AUSWENDIG KENNEN ==

Ankernetz ist ein gemeinnuetziger Traumaeger der Kinder- und Jugendhilfe in Berlin. Wir wurden 2015 gegruendet - von Fachkraeften, die erlebt haben wie zerissen Hilfesysteme oft sind. Unser Ziel: Hilfen so gestalten, dass sie ineinandergreifen, Uebergaben ohne Informationsverlust funktionieren und kein Kind durchs Netz faellt.

WIR BEGLEITEN: Kinder und Jugendliche von 0 bis 25 Jahren sowie Muetter und Vaeter mit ihren Kindern.
STANDORT: Berlin
GEGRÜNDET: 2015
ANGEBOTE: 11 spezialisierte Bereiche - von Krisenintervention bis Uebergang in den Beruf
ERREICHBARKEIT: 24/7, auch mitten in der Nacht, an 365 Tagen im Jahr
RÜCKMELDUNG: Innerhalb von 30 Minuten bei Krisenaufnahmen
RECHTSBASIS: SGB VIII (Sozialgesetzbuch Kinder- und Jugendhilfe)
MISSION: "Kein Kind faellt durch das Netz."
ANSATZ: Traumasensibel, systemisch, vernetzt - keine Silos. Diagnostik, Therapie und Paedagogik sprechen taeglich miteinander.

WENN JEMAND FRAGT "was macht ankernetz" ODER "wer seid ihr" ODER "was bietet ihr an":
Antworte kurz und klar, z.B.:
"Ankernetz ist ein gemeinnuetziger Berliner Traeger - aber mehr als nur Kinder- und Jugendhilfe. Wir haben 11 Angebote: Krisenintervention rund um die Uhr, Psychotherapie mit Kassensitz, therapeutische Wohngruppen, Fruehe Hilfen ab Geburt, Diagnostik, kostenlose Beratung, Kita-Fachberatung, Begleitung von Schule in den Beruf, materielle Versorgung - und Ankerkleidung, also spezialisierte Kleidung nach Stoerungsbild. Alles vernetzt, alles unter einem Dach. Auf /ueber-uns und /ankerkleidung gibt es mehr. Was interessiert dich konkret?"

== VOLLSTÄNDIGES SEITENWISSEN ==

SEITE /krisenintervention:
24/7 Sofortaufnahme fuer Jugendliche in akuter Not. Aufnahme noch am selben Tag moeglich, auch nachts und am Wochenende. Reaktionszeit 30 Minuten nach erstem Anruf. Team aus Sozialpaedagoginnen, Psychologinnen und Therapeutinnen. Stabilisierungsphase 14-28 Tage, dann gemeinsamer Anschlussplan. Kooperation mit Kinder- und Jugendpsychiatern. Bei voller Belegung aktive Vermittlung. Zielgruppe: Jugendliche ab 12 Jahren (unter 12 auf Anfrage). Beauftragen koennen: Jugendaemter, Sozialdienste, Schulen, Kliniken, Erziehungsberechtigte. Finanzierung: Jugendamt §34 SGB VIII. Link: /krisenintervention

SEITE /psychotherapie:
Kinder- und Jugendlichenpsychotherapie mit Kassensitz (gesetzliche KV). Approbierte Therapeuten direkt im Ankernetz-System eingebunden. Kurze Wartezeiten. Therapie vernetzt mit Alltag in Wohngruppe. Auch fuer ambulante Kinder ohne Heimunterbringung. Zielgruppe: ab ca. 5 Jahren. Kurzzeittherapie 12-24 Std., Langzeit bis 80 Std. Methoden: spieltherapeutisch, Verhaltensanalysen, Skill-Training. Eltern werden einbezogen. Finanzierung: gesetzliche Krankenversicherung oder §34 SGB VIII. Link: /psychotherapie

SEITE /fruehe-hilfen:
Schutz und Begleitung fuer Kleinkinder 0-6 Jahre, in Ausnahmefaellen auch Neugeborene. Bindungsbasierte Paedagogik, Elternarbeit, Hausbesuche. Monatliche Entwicklungsberichte. Speziell geschulte Schutzpflegestellen (keine normalen Pflegefamilien). Ziel ist Rueckfuehrung zur Familie wenn moeglich. Kita-Beratung: Fallberatung, §8a SGB VIII, Fortbildungen. Methoden: Ainsworth Bindungsdiagnostik, EPB nach Brisch, PCIT. Dauer: wenige Wochen bis 18 Monate. Finanzierung: Jugendamt. Link: /fruehe-hilfen

SEITE /therapie-wohnen:
Therapeutische Wohngruppen fuer Jugendliche 12-17 Jahre. Intensive Begleitung und Traumaarbeit. Therapie direkt vor Ort, kein externer Weg. Paedagogik und Therapie eng vernetzt. Finanzierung: Jugendamt §34 SGB VIII. Link: /therapie-wohnen

SEITE /jugendhilfe:
Kinderwohngruppen fuer Kinder 6-12 Jahre in Berlin. Verlaessliche Struktur und Beziehungsarbeit. Fachlich qualifiziertes Team. Finanzierung: Jugendamt §34 SGB VIII. Link: /jugendhilfe

SEITE /diagnostik-clearing:
Psychologische Diagnostik, Clearing-Verfahren, Gutachten und Einschaetzungen. Fuer Hilfeplangespräche, Abklaerung von ADHS, Autismus, Trauma, Entwicklungsverzoegerungen. Klarheit darueber, welche Hilfe am besten passt. Link: /diagnostik-clearing

SEITE /beratung-praevention:
Kostenlose Beratung fuer Familien und Einzelpersonen - kein Antrag, keine Huerde. Online, per Telefon oder persoenlich. Bei dringenden Anliegen Reaktion in 24 Stunden, Erstgespraech meist innerhalb einer Woche. Einmalig oder mehrfach moeglich. Unterschied zur Therapie: Beratung ist kurz und loesungsorientiert, ohne Diagnose. Link: /beratung-praevention

SEITE /kita-beratung:
Fachberatung fuer Erzieherinnen und Kita-Teams. Fallberatung bei auffaelligem Verhalten, Beratung bei Verdacht auf Kindeswohlgefaehrdung §8a SGB VIII, kollegiale Fallbesprechungen, Fortbildungen Inhouse. Niedrigschwellig, kein formeller Hilfeauftrag noetig. Link: /kita-beratung

SEITE /uebergang-arbeit:
Begleitung von Jugendlichen und jungen Erwachsenen beim Uebergang Schule zu Ausbildung und Beruf. Orientierung, Bewerbungstraining, Praktikumssuche, Unterstuetzung bei eigener Wohnung und Finanzen. Auch nach Ende der Jugendhilfeleistung - niemand wird fallen gelassen. Link: /uebergang-arbeit

SEITE /ankerkleidung:
Spezialisierte Kleidungsversorgung passend zum Stoerungsbild und Bedarf. Teil des Hilfesystems. Link: /ankerkleidung

SEITE /versorgung:
Materielle Grundversorgung: Ausstattung, Alltagsgegenstaende, spezifische Bedarfe fuer Kinder und Jugendliche im Hilfesystem. Link: /versorgung

SEITE /karriere:
Jobs und Stellen bei Ankernetz fuer Sozialpaedagoginnen, Therapeuten, Erzieherinnen. Arbeitgeber mit Sinn und Haltung. Link: /karriere

SEITE /ueber-uns:
Ueber das Ankernetz-Netzwerk: Geschichte, Team, Haltung, wie die 11 Angebote zusammenwirken. Link: /ueber-uns

SEITE /kontakt:
Alle Kontaktmoeglichkeiten. Telefon 030 22 45 43 22 (24/7), E-Mail hilfe@ankernetz.com. Aufnahmeablauf: Erstkontakt telefonisch, Einschaetzung, Rueckmeldung in 30 Min., Aufnahme innerhalb 24 Std. Link: /kontakt

SEITE /platzanfrage:
Online-Formular fuer Platzanfragen - fuer Jugendaemter, Erziehungsberechtigte, Fachkraefte. Schnellster Weg neben Telefon. Link: /platzanfrage

SEITE /aktuelles:
Neuigkeiten und Artikel von Ankernetz. Link: /aktuelles

== KOSTEN IMMER KLARSTELLEN ==
- Beratung: kostenlos, kein Antrag (/beratung-praevention)
- Psychotherapie: gesetzliche Krankenkasse, Kassensitz vorhanden (/psychotherapie)
- Wohngruppen/Krisenintervention/Fruehe Hilfen: Jugendamt uebernimmt
- Niemand muss das aus eigener Tasche bezahlen

== KONTAKT ORGANISCH EINBAUEN ==
- Allgemeine Fragen: "Du kannst uns auch direkt schreiben: hilfe@ankernetz.com"
- Dringende/emotionale Themen: "Ruf gerne direkt an: 030 22 45 43 22"
- Platzbedarf: "Am schnellsten geht es ueber /platzanfrage oder telefonisch"

== SEITEN-KONTEXT ==
Wenn [SEITE:...] in der Nachricht steht, nutze das. Sprich spezifisch zu dieser Seite.

== KRISENPROTOKOLL ==
Bei Suizid, Selbstverletzung, "nicht mehr leben", akuter Gefahr:
1. Menschlich bleiben - kein Panik-Modus
2. "Bist du gerade in Sicherheit?"
3. "Ruf uns jetzt an: 030 22 45 43 22 - da ist jemand"
4. Bei unmittelbarer Lebensgefahr: "Oder ruf 112 an"

== REGELN ==
- Maximal 3-4 Saetze pro Antwort. Kurz ist besser als lang.
- Wenn du nicht weisst was gefragt wird: nachfragen, nicht raten
- Du bist Lena - kein Bot. Wenn jemand fragt: "Ich bin vom Ankernetz-Team"
- Keine Diagnosen - du orientierst, vermittelst, hoerst zu
- Immer auf Deutsch, ausser jemand schreibt explizit auf Englisch`

// Krisenworte für sofortige Erkennung
const CRISIS_KEYWORDS = [
  // Suizidabsicht -direkt
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
  "haue mich", "schlage mich selbst", "brenne mich", "kratze mich blutig",

  // Hoffnungslosigkeit / Warnsignale
  "kann nicht mehr", "halte es nicht mehr aus", "halte das nicht mehr aus",
  "schaffe es nicht mehr", "will nicht mehr", "will nicht mehr kämpfen",
  "hat keinen sinn mehr", "alles sinnlos", "wozu noch leben", "wozu das alles",
  "niemand braucht mich", "bin eine last", "bin zur last",
  "ohne mich wäre es besser", "alle besser ohne mich",
  "niemand würde mich vermissen", "keiner vermisst mich",
  "bin nutzlos", "bin wertlos", "hasse mein leben", "hasse mich selbst",

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
  "nobody needs me", "burden to everyone", "worthless",
  "abuse", "being abused", "emergency help",
];

function detectCrisis(message: string): boolean {
  const lower = message.toLowerCase();
  return CRISIS_KEYWORDS.some(kw => lower.includes(kw));
}

async function sendTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("[Telegram] Token oder Chat-ID fehlt in den Umgebungsvariablen");
    return;
  }
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    });
    if (!res.ok) {
      const err = await res.text();
      console.error("[Telegram] Fehler:", err);
    }
  } catch (e) {
    console.error("[Telegram] Netzwerkfehler:", e);
  }
}

function berlinTime(): string {
  return new Date().toLocaleTimeString("de-DE", {
    timeZone: "Europe/Berlin",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ── Intelligenter Fallback wenn API nicht verfügbar ──────────────────────────
function pick(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Wörter, die eine unmittelbar folgende Kategorie-Zuordnung entkräften -
// "ich hab KEINE Wut" darf nicht als Wut-Kategorie erkannt werden.
const NEGATIONEN = ["keine", "kein", "keinen", "keiner", "keinem", "nicht", "ohne", "niemals", "nie"];

interface Kategorie {
  id: string;
  // Wie eindeutig das Keyword-Set für dieses Thema ist - generische Wörter
  // (familie, frage) wiegen weniger als eindeutige Fachbegriffe (adhs, pflegefamilie),
  // damit bei Überschneidungen die spezifischere Kategorie gewinnt.
  spezifitaet: number;
  keywords: string[];
  antworten: string[];
}

const KATEGORIEN: Kategorie[] = [
  {
    id: "platz", spezifitaet: 2,
    keywords: ["platz", "aufnahme", "wohngruppe", "heim", "unterkunft", "unterbring", " wg", "in wg", "eine wg", "bei euch wohn", "bei euch leben", "bei euch bleib", "zu euch zieh", "einzieh", "einzug", "aufnehmen", "aufgenommen", "wohnen bei", "wohnen bei euch", "stationär"],
    antworten: [
      "Das klingt nach einer Platzanfrage. Wie alt ist die Person und wie dringend ist es? Du kannst uns auch direkt schreiben: hilfe@ankernetz.com - oder anrufen: 030 22 45 43 22.",
      "Wir haben Plätze für Kinder 6-12 und Jugendliche 12-17 Jahre sowie Krisenintervention rund um die Uhr. Ruf kurz an: 030 22 45 43 22 oder schreib uns: hilfe@ankernetz.com - dann schauen wir sofort was passt.",
      "Platzanfragen bearbeiten wir schnell. Am einfachsten: /platzanfrage ausfüllen, schreib uns unter hilfe@ankernetz.com oder ruf an: 030 22 45 43 22. Um wen geht es - Alter und Situation?",
    ],
  },
  {
    id: "therapie", spezifitaet: 2,
    keywords: ["therapie", "therapeut", "psycholog", "psychiatr", "behandlung"],
    antworten: [
      "Wir haben eine eigene Psychotherapie für Kinder und Jugendliche -mit Kassensitz, also keine Privatpraxis. Keine endlose Warteliste wie woanders. Geht es um dich oder jemanden in deiner Familie?",
      "Unsere Therapeutinnen und Therapeuten sind direkt bei uns im Haus. Das bedeutet: kurze Wege, kein Stress mit Anfahrt, und Pädagogik und Therapie sprechen täglich miteinander. Was genau suchst du?",
      "Therapieplätze bei uns sind über die Kasse -du brauchst keine Privatversicherung. Darf ich fragen, worum es geht? Dann kann ich dir sagen, was am besten passt.",
    ],
  },
  {
    id: "krise-mild", spezifitaet: 1,
    keywords: ["krise", "notfall", "sofort", "dringend", "akut"],
    antworten: [
      "Akute Situationen nehmen wir sehr ernst. Wir haben eine 24/7 Krisenhotline und Sofortaufnahme: 030 22 45 43 22. Was ist gerade los?",
      "Ruf uns direkt an -030 22 45 43 22 -die Krisenintervention ist rund um die Uhr besetzt. Du musst nicht erst lange erklären, einfach durchklingeln.",
      "Bei uns gibt es keine langen Antragswege bei Krisen. 030 22 45 43 22 -jetzt. Was ist die Situation?",
    ],
  },
  {
    id: "fruehe-hilfen", spezifitaet: 3,
    keywords: ["baby", "kleinkind", "schwanger", "geburt", "frühe hilfen", "säugling", "0 bis", "0-6", "kita"],
    antworten: [
      "Die Frühen Hilfen sind für Familien mit Kindern bis 6 Jahre -Bindung, Entwicklung, und wenn der Alltag mit Baby gerade einfach zu viel ist. Das ist kein Versagen, das ist menschlich. Wie alt ist dein Kind?",
      "Wir begleiten Familien von Anfang an -auch schon in der Schwangerschaft. Keine Bewertung, keine Bürokratie am Anfang. Einfach reden. Was beschäftigt dich?",
      "Für die ersten Jahre haben wir ein eigenes Team. Die kommen auch nach Hause, wenn das leichter ist. Geht es um dein eigenes Kind oder um eine Familie, die du kennst?",
    ],
  },
  {
    id: "adhs", spezifitaet: 3,
    keywords: ["adhs", "ads ", "autismus", "asd ", "diagnose", "störung", "förder", "sonderpädagog", "lrs", "legasthenie"],
    antworten: [
      "Diagnosen können sich erstmal überwältigend anfühlen -oder manchmal auch wie eine Erleichterung. Was genau beschäftigt dich gerade damit?",
      "Wir haben ein eigenes Diagnostik-Team für Abklärungen und Gutachten. Und wir arbeiten täglich mit Kindern, bei denen ADHS, Autismus oder andere Diagnosen im Raum stehen. Was suchst du gerade?",
      "Mit oder ohne Diagnose -was zählt ist, was das Kind braucht. Erzähl mir kurz die Situation, dann kann ich dir sagen was bei uns passen würde.",
    ],
  },
  {
    id: "trauma", spezifitaet: 3,
    keywords: ["trauma", "ptbs", "ptsd", "angst", "missbrauch", "gewalt erlebt", "übergriff", "misshandl"],
    antworten: [
      "Das sind Erfahrungen, bei denen professionelle Begleitung wirklich einen Unterschied macht -und die Zeit, die man braucht, ist unterschiedlich. Geht es um dich selbst oder jemanden dem du nahe stehst?",
      "Trauma braucht den richtigen Rahmen -kein Druck, kein Zeitplan von außen. Wir haben Erfahrung damit. Magst du kurz erzählen was passiert ist?",
      "Ich hör dir zu. Was du erlebt hast, verdient echte Unterstützung. Darf ich fragen wie alt die Person ist, um die es geht -dann kann ich sagen, was wir konkret anbieten können.",
    ],
  },
  {
    id: "depression", spezifitaet: 2,
    keywords: ["depressiv", "depression", "traurig", "hoffnungslos", "erschöpft", "kraft", "leer", "antriebslos", "freude"],
    antworten: [
      "Das klingt wirklich anstrengend. Wie lange fühlst du dich schon so? Manchmal hilft es sehr, einfach erstmal mit jemandem zu reden -ohne Druck.",
      "Sich so zu fühlen ist ernst zu nehmen, auch wenn von außen vielleicht nicht immer alle verstehen wie schwer das ist. Geht es dir selbst so gerade?",
      "Wir haben Therapeutinnen, die genau dafür ausgebildet sind -nicht nur Ratschläge geben, sondern wirklich begleiten. Möchtest du mal ein Erstgespräch machen, einfach zum Kennenlernen?",
    ],
  },
  {
    id: "wut", spezifitaet: 2,
    keywords: ["wut", "aggressiv", "ausrast", "kontroll", "explodier", "schlägt", "schlagen", "gewaltbereit"],
    antworten: [
      "Starke Gefühle, die man nicht mehr steuern kann -das ist oft ein Zeichen, dass etwas Tieferes los ist. Geht es um dein eigenes Kind oder um dich selbst?",
      "Wut ist oft ein Schutz. Wir arbeiten viel mit Kindern und Jugendlichen, bei denen Aggression das sichtbarste Symptom ist -dahinter steckt meist mehr. Was ist die Situation?",
      "Das ist etwas, wo wir wirklich helfen können. Nicht mit erhobenem Zeigefinger, sondern mit echtem Verständnis was da gerade passiert. Erzähl mir mehr.",
    ],
  },
  {
    id: "schule", spezifitaet: 2,
    keywords: ["schule", "lehrer", "mobbing", "klasse", "zeugnis", "noten", "schulangst", "schulverweiger"],
    antworten: [
      "Schule kann für manche Kinder ein richtiger Stressherd sein -mehr als Erwachsene manchmal ahnen. Worum geht es konkret? Leistung, soziale Probleme, oder eher so ein generelles Nicht-mehr-wollen?",
      "Schulverweigerung, Mobbing, Überforderung -das sind Themen, mit denen viele Familien zu uns kommen. Kein Vorwurf, sondern echte Unterstützung. Was ist gerade los?",
      "Wir begleiten Kinder und Jugendliche auch dabei, wieder einen Zugang zur Schule zu finden -ohne Druck. Was ist bei euch passiert?",
    ],
  },
  {
    id: "familie", spezifitaet: 1,
    keywords: ["trennung", "scheidung", "überforder", "alleinerzieh", "mutter", "vater", "eltern", "familie"],
    antworten: [
      "Familie kann manchmal der schwerste Job der Welt sein -besonders wenn man das Gefühl hat, es alleine tragen zu müssen. Was ist gerade die größte Belastung?",
      "Wir unterstützen nicht nur Kinder, sondern das ganze System drumherum. Eltern, die Entlastung suchen, sind bei uns genau richtig. Was bräuchtest du gerade?",
      "Trennung oder Scheidung ist auch für Kinder oft mehr als nur eine Familienveränderung. Gibt es konkrete Situationen, wo du dir Unterstützung wünschst?",
    ],
  },
  {
    id: "jugendamt", spezifitaet: 2,
    keywords: ["jugendamt", "asd", "hilfeplan", "antrag", "sozialarbeiter", "träger", "fachkraft", "pädagog", "kollege"],
    antworten: [
      "Bist du Fachkraft oder geht es um eine eigene Situation? Für Fachkräfte und ASD-Mitarbeitende haben wir direkte Wege -keine langen Wartezeiten, schnelle Kommunikation.",
      "Wir arbeiten eng mit Jugendämtern zusammen und kennen die Abläufe gut. Geht es um eine Belegungsanfrage, einen Hilfeplan oder etwas anderes?",
      "Als Träger legen wir viel Wert auf transparente Zusammenarbeit mit dem ASD. Womit kann ich dir weiterhelfen?",
    ],
  },
  {
    id: "kosten", spezifitaet: 2,
    keywords: ["kostet", "kosten", "bezahl", "geld", "gratis", "kostenlos", "krankenkasse", "kasse", "versicherung"],
    antworten: [
      "Unsere Beratung ist komplett kostenlos -kein Antrag, keine Hürde. Bei den weitergehenden Hilfen übernimmt in der Regel das Jugendamt die Kosten. Du musst das nicht aus eigener Tasche zahlen.",
      "Geld sollte keine Hürde sein, Hilfe zu bekommen. Unsere Beratungsangebote kosten nichts. Die Therapie läuft über die Krankenkasse. Was genau meinst du?",
      "Kurze Antwort: die meisten unserer Angebote sind für dich kostenlos. Entweder über die Kasse, über das Jugendamt oder als kostenfreie Beratung. Soll ich das für dein konkretes Anliegen erklären?",
    ],
  },
  {
    id: "drogen", spezifitaet: 3,
    keywords: ["drogen", "alkohol", "sucht", "cannabis", "kiffen", "substanz", "abhängig"],
    antworten: [
      "Sucht bei Jugendlichen ist oft mehr ein Symptom als das eigentliche Problem -meistens steckt da etwas dahinter. Geht es um dich selbst oder um jemanden in deiner Nähe?",
      "Das ist ein Thema, mit dem wir regelmäßig arbeiten -ohne Verurteilung. Was ist gerade die Situation?",
      "Zwischen 'manchmal kiffen' und echter Abhängigkeit gibt es viele Zwischenstufen. Wir schauen genau hin. Um wen geht es und wie alt ist die Person?",
    ],
  },
  {
    id: "ess", spezifitaet: 3,
    keywords: ["ess", "magersucht", "bulimie", "anorexie", "gewicht", "abnehmen", "nicht essen"],
    antworten: [
      "Essstörungen sind ernstzunehmen -auch wenn von außen manchmal nicht alle die Schwere sehen. Geht es um dich oder jemanden dem du nahe stehst?",
      "Das ist ein Bereich, wo Therapie wirklich helfen kann -aber der Zeitpunkt und die Person müssen passen. Was ist gerade die Situation?",
    ],
  },
  {
    id: "einsamkeit", spezifitaet: 2,
    keywords: ["einsam", "allein", "keine freunde", "niemand versteht", "isolier", "ausgeschlossen"],
    antworten: [
      "Einsamkeit ist oft das, worüber man am wenigsten redet -aber was am meisten wehtut. Wie lange ist das schon so?",
      "Das Gefühl, dass niemand wirklich versteht was los ist -das kennen viele Jugendliche, auch wenn man das von außen nicht sieht. Magst du mir mehr erzählen?",
      "Du hast gerade den ersten Schritt gemacht indem du schreibst. Das ist mehr als viele schaffen. Was ist gerade los bei dir?",
    ],
  },
  {
    id: "uebergang-beruf", spezifitaet: 2,
    keywords: ["ausbildung", "beruf", "arbeit", "praktikum", "bewerbung", "abschluss", "hauptschule", "realschule", "orientierung"],
    antworten: [
      "Der Übergang von Schule in den Beruf ist für viele Jugendliche kein gerader Weg -und das ist völlig okay. Wir haben ein eigenes Programm dafür. Wie alt ist die Person und was ist gerade das Problem?",
      "Wir begleiten Jugendliche beim Schritt in die Arbeitswelt -Bewerbungen, Orientierung, Praktika, und auch wenn man einfach noch gar nicht weiß wohin. Was ist die Situation?",
      "Manchmal braucht man jemanden der begleitet, nicht nur Ratschläge gibt. Unser Team für den Übergang Arbeit kennt die Stolpersteine. Worum geht es genau?",
    ],
  },
  {
    id: "pflegefamilie", spezifitaet: 3,
    keywords: ["pflegefamilie", "pflegekind", "adoption", "inobhutnahme", "fremdunterbringu", "herausnahme", "weggenommen"],
    antworten: [
      "Das ist eine sehr einschneidende Situation -für das Kind und oft auch für die Familie. Was ist gerade der Stand und was suchst du?",
      "Wir arbeiten mit Kindern und Jugendlichen, die aus ihrer Familie herausgenommen wurden -und wir wissen wie komplex das ist. Was brauchst du gerade?",
    ],
  },
  {
    id: "volljaehrig", spezifitaet: 2,
    keywords: ["volljährig", "18 ", "18+", "erwachsen", "eigene wohnung", "selbstständig", "auszug"],
    antworten: [
      "Mit 18 ist man rechtlich erwachsen, aber das bedeutet nicht, dass man plötzlich allein klarkommt. Wir begleiten junge Erwachsene bis 21 -manchmal auch länger. Was ist die Situation?",
      "Der Übergang in die Selbstständigkeit ist für viele Jugendliche aus unseren Wohngruppen ein großes Thema. Wir lassen da niemanden fallen. Worum geht es konkret?",
    ],
  },
  {
    id: "online", spezifitaet: 1,
    keywords: ["online", "video", "zoom", "telefon", "fernberatung", "von zuhause", "digital"],
    antworten: [
      "Ja, wir bieten auch Beratung online an -per Video oder Telefon. Das läuft genauso vertraulich wie ein Gespräch bei uns im Haus. Was passt dir besser?",
      "Online-Beratung ist bei uns möglich und wird gut angenommen -gerade wenn der Weg zu uns zu weit ist oder die Situation es gerade nicht zulässt. Worum soll es gehen?",
    ],
  },
  {
    id: "datenschutz", spezifitaet: 2,
    keywords: ["anonym", "datenschutz", "vertraulich", "geheim", "niemand erfährt", "schweigepflicht"],
    antworten: [
      "Alles was du hier schreibst und was in einem Beratungsgespräch gesagt wird, bleibt vertraulich -das ist für uns keine Floskel sondern Grundlage unserer Arbeit. Was beschäftigt dich?",
      "Schweigepflicht und Datenschutz nehmen wir ernst. Du kannst erstmal anonym fragen -und wenn du möchtest, sprechen wir über die nächsten Schritte. Was ist die Situation?",
    ],
  },
  {
    id: "kleidung", spezifitaet: 2,
    keywords: ["kleidung", "ankerkleidung", "klamotten", "ausstattung", "versorgung", "sachspend"],
    antworten: [
      "Wir haben Ankerkleidung -ein eigenes Angebot für passende Kleidung nach Störungsbild und Bedarf. Das klingt erstmal ungewöhnlich, macht aber einen echten Unterschied. Soll ich mehr erklären?",
      "Unser Versorgungsangebot hilft mit Ausstattung und materiellen Grundbedarfen -weil manchmal das Praktische genauso wichtig ist wie das Emotionale. Was wird gebraucht?",
    ],
  },
  {
    id: "wartezeit", spezifitaet: 1,
    keywords: ["wartezeit", "wann", "wie schnell", "termin", "wie lange", "sofort frei"],
    antworten: [
      "Wir versuchen schnell zu reagieren -gerade bei akuten Situationen. Für einen ersten Gesprächstermin meld dich direkt: 030 22 45 43 22. Was ist der Bedarf?",
      "Je nach Angebot ist die Wartezeit unterschiedlich. Bei Krisen: sofort. Bei Therapieplätzen: in der Regel deutlich kürzer als bei niedergelassenen Praxen. Worum geht es?",
    ],
  },
  {
    id: "frage", spezifitaet: 1,
    keywords: ["frage", "fragen", "wollte fragen", "wüsste gerne", "würde gerne wissen"],
    antworten: [
      "Natürlich, sehr gerne! Was möchtest du wissen?",
      "Aber klar -frag einfach los, ich helfe dir so gut ich kann!",
      "Sehr gerne! Stell einfach deine Frage, ich bin ganz Ohr.",
    ],
  },
  {
    id: "dankeschoen", spezifitaet: 1,
    keywords: ["danke", "toll", "super", "hilft", "geholfen", "dankeschön"],
    antworten: [
      "Das freut mich sehr, wirklich! Gibt es noch etwas, wobei ich helfen kann?",
      "Sehr gerne! Meld dich jederzeit wieder -ich bin immer da.",
      "Das höre ich gerne. Wenn du noch Fragen hast oder sich etwas ändert: 030 22 45 43 22, wir sind immer für dich da.",
    ],
  },
];

function istNegiert(m: string, wort: string): boolean {
  const idx = m.indexOf(wort);
  if (idx === -1) return false;
  const davor = m.slice(Math.max(0, idx - 25), idx);
  return NEGATIONEN.some((n) => davor.includes(n));
}

function bewerteKategorie(m: string, kat: Kategorie): number {
  let treffer = 0;
  for (const wort of kat.keywords) {
    if (m.includes(wort) && !istNegiert(m, wort)) treffer++;
  }
  return treffer * kat.spezifitaet;
}

function findeKategorie(m: string): Kategorie | null {
  let beste: Kategorie | null = null;
  let besterScore = 0;
  for (const kat of KATEGORIEN) {
    const score = bewerteKategorie(m, kat);
    if (score > besterScore) {
      besterScore = score;
      beste = kat;
    }
  }
  return beste;
}

function smartFallback(message: string, isCrisis: boolean, verlauf: string[] = []): string {
  if (isCrisis) {
    return pick([
      "Ich höre dich. Bist du gerade in Sicherheit? Ruf uns jetzt an -da ist wirklich jemand: 030 22 45 43 22. Du musst das nicht alleine tragen.",
      "Das klingt sehr schwer, und ich bin froh dass du schreibst. Bist du gerade irgendwo sicher? Wir sind rund um die Uhr da: 030 22 45 43 22.",
      "Ich mache mir gerade Sorgen um dich. Ruf uns bitte an -030 22 45 43 22 -jetzt nimmt jemand ab. Bei unmittelbarer Lebensgefahr: 112.",
    ]);
  }

  const m = message.toLowerCase();

  // Was ist/macht Ankernetz - Phrasenlogik, passt nicht ins Keyword-Schema
  if (
    m.includes("was macht ankernetz") || m.includes("was ist ankernetz") ||
    m.includes("was bietet ankernetz") || m.includes("was bietet ihr") ||
    m.includes("was macht ihr") || m.includes("wer seid ihr") ||
    m.includes("was sind das fuer") || m.includes("was fuer eine") ||
    m.includes("stellt euch vor") || m.includes("erzaehl") ||
    (m.includes("ankernetz") && (m.includes("was") || m.includes("wer") || m.includes("wie"))) ||
    m.includes("eigentlich") && (m.includes("macht") || m.includes("seid") || m.includes("bietet"))
  ) {
    return pick([
      "Ankernetz ist ein Berliner Träger für Kinder- und Jugendhilfe - aber ehrlich gesagt sind wir viel mehr als das. Wir haben 11 Bereiche: Krisenintervention rund um die Uhr, Psychotherapie für Kinder und Jugendliche mit Kassensitz, therapeutische Wohngruppen, Frühe Hilfen ab Geburt, Diagnostik, kostenlose Beratung, Kita-Beratung, Begleitung in den Beruf - und sogar Ankerkleidung, also spezialisierte Kleidung nach Störungsbild. Alles unter einem Dach, alles vernetzt. Auf /ueber-uns steht die ganze Geschichte. Was interessiert dich konkret?",
      "Ankernetz ist schwer in einem Satz zu fassen. Wir begleiten Kinder und Jugendliche von 0 bis 25 Jahren - in Krisen, im Alltag, in der Therapie, beim Wohnen und beim Einstieg ins Berufsleben. Wir haben eigene Psychotherapeuten mit Kassensitz, Wohngruppen für 6- bis 17-Jährige, kostenlose Beratung für Familien, Frühe Hilfen für Säuglinge - und ein eigenes Kleidungsangebot namens Ankerkleidung, das auf Störungsbilder ausgerichtet ist. Gegründet 2015, gemeinnützig, in Berlin. Was genau möchtest du wissen?",
      "Wir sind ein gemeinnütziger Träger in Berlin - gegründet 2015. Unsere 11 Angebote: Krisenintervention 24/7, Psychotherapie mit Kassensitz, Wohngruppen für Kinder ab 6 und Jugendliche bis 17, Frühe Hilfen für Babys und Kleinkinder, Diagnostik und Gutachten, kostenlose Familienberatung, Kita-Fachberatung, Begleitung von Schule in den Beruf, materielle Versorgung und Ankerkleidung - also Kleidung passend zum Störungsbild. Alles greift ineinander. Auf /ueber-uns und /ankerkleidung findest du mehr. Was beschäftigt dich?",
    ]);
  }

  // Greeting
  if (m.includes("hallo") || m.includes("hi") || m.includes("hey") || m.includes("guten morgen") || m.includes("guten tag") || m.includes("guten abend") || m.match(/^(hi|hey|hallo|moin)[\s!.?]*$/)) {
    return pick([
      "Hallo! Schön, dass du da bist. Wie kann ich dir helfen?",
      "Hey, willkommen! Was beschäftigt dich -ich helfe dir gerne weiter.",
      "Hallo und herzlich willkommen! Was kann ich heute für dich tun?",
    ]);
  }

  // Wer bist du / Was kannst du
  if (m.includes("wer bist du") || m.includes("was bist du") || m.includes("bist du ein bot") || m.includes("bist du ki") || m.includes("bist du echt") || m.includes("was kannst du")) {
    return pick([
      "Ich bin Lena vom Ankernetz-Team -ich beantworte Fragen, gebe erste Orientierung und helfe dir den richtigen Weg zu finden. Was kann ich für dich tun?",
      "Ich bin Lena, deine erste Ansprechpartnerin beim Ankernetz Berlin. Was liegt dir auf dem Herzen? Ich helfe dir gerne!",
    ]);
  }

  // Gewichtete Kategorie-Suche mit Negations-Filter
  let kategorie = findeKategorie(m);

  // Session-Memory: Passt die aktuelle Nachricht zu keiner Kategorie (z.B. eine
  // kurze Folgenachricht wie "in Berlin"), in den letzten Nutzer-Nachrichten
  // dieser Unterhaltung nachschauen, welches Thema zuletzt erkannt wurde.
  if (!kategorie) {
    for (const vorherige of verlauf.slice().reverse()) {
      kategorie = findeKategorie(vorherige.toLowerCase());
      if (kategorie) break;
    }
  }

  if (kategorie) return pick(kategorie.antworten);

  // Lokale Wissensdatenbank (Glossar + Wortlexikon) durchsuchen, bevor wir
  // auf die rein generische Antwort ausweichen - kein API-Aufruf nötig.
  const { treffer, eindeutig } = sucheWissen(message);
  if (treffer.length > 0) {
    if (eindeutig) {
      const beste = treffer[0];
      const linkHinweis = beste.link ? ` Mehr dazu: ankernetz.com${beste.link}` : "";
      return `${beste.antwort}${linkHinweis}`;
    }
    const optionen = treffer
      .map((t, i) => `${String.fromCharCode(65 + i)}) ${t.frage.replace(/\?$/, "")}`)
      .join("\n");
    return `Dazu habe ich mehrere passende Themen gefunden - meinst du eher:\n${optionen}\n\nSchreib mir einfach den Buchstaben oder erzähl etwas genauer, worum es geht.`;
  }

  // Generischer Fallback - kontextbewusst und nie zweimal gleich
  const genericOptions = [
    "Magst du mir kurz sagen, um wen es geht und wie alt die Person ist? Dann kann ich dir direkt sagen, welches Angebot am besten passt. Du kannst uns auch schreiben: hilfe@ankernetz.com",
    "Das klingt nach etwas, wobei wir helfen können. Schreib uns dein Anliegen auch direkt an hilfe@ankernetz.com - dann melden wir uns bei dir. Oder wie alt ist die Person, um die es geht?",
    "Ich bin ganz Ohr. Geht es um eine akute Situation oder eher um längerfristige Unterstützung? Du kannst auch direkt anrufen: 030 22 45 43 22 oder schreiben: hilfe@ankernetz.com",
    "Damit wir dir am besten helfen können: Was ist gerade die Situation und wie alt ist die Person? Du kannst uns dein Anliegen auch per Mail schicken: hilfe@ankernetz.com",
    "Ruf uns gerne direkt an: 030 22 45 43 22 - oder schreib an hilfe@ankernetz.com und wir melden uns bei dir. Was ist die Situation?",
  ];
  return genericOptions[Math.floor(Math.random() * genericOptions.length)];
}

export async function POST(req: Request) {
  const info = holeAnfrageInfo(req);
  if (istRateLimitiert(info.ip, "chat", 40, 10 * 60 * 1000)) {
    return new Response("Zu viele Anfragen - bitte kurz warten oder direkt anrufen: 030 22 45 43 22", { status: 429 });
  }

  const { messages, sessionId, userMessageCount, location } = await req.json();

  const lastMessage = messages[messages.length - 1]?.content ?? "";
  const isCrisis = detectCrisis(lastMessage);
  const session = sessionId ?? "????";
  const uhrzeit = berlinTime();
  const nr = userMessageCount ?? "?";

  const preview = lastMessage.slice(0, 300);

  let telegramText: string;
  const locationLine = location?.lat && location?.lon
    ? `\n\n📍 <a href="https://maps.google.com/?q=${location.lat},${location.lon}">Standort öffnen</a>`
    : "\n\n📍 Standort nicht verfügbar";

  if (isCrisis) {
    telegramText =
      `🚨 <b>KRISE · #${session}</b>\n` +
      `🕐 ${uhrzeit} Uhr · Nachricht ${nr}\n\n` +
      `"${preview}"` +
      locationLine +
      `\n\n⚠️ <b>Bitte sofort reagieren.</b>`;
  } else if (nr === 1) {
    telegramText =
      `💬 <b>Neuer Chat · #${session}</b>\n` +
      `🕐 ${uhrzeit} Uhr\n\n` +
      `"${preview}"` +
      locationLine;
  } else {
    telegramText =
      `📩 <b>#${session}</b> · Nachricht ${nr}\n` +
      `🕐 ${uhrzeit} Uhr\n\n` +
      `"${preview}"` +
      locationLine;
  }

  await sendTelegram(telegramText);

  const systemPrompt = isCrisis
    ? SYSTEM_PROMPT + "\n\nACHTUNG: Die aktuelle Nachricht enthält Krisenhinweise. Reagiere sofort menschlich und warm, frage nach der Sicherheit und nenne dann die Notfallnummer."
    : SYSTEM_PROMPT;

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) throw new Error("GEMINI_API_KEY fehlt");

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:streamGenerateContent?alt=sse&key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              system_instruction: { parts: [{ text: systemPrompt }] },
              contents: messages.map((m: { role: string; content: string }) => ({
                role: m.role === "assistant" ? "model" : "user",
                parts: [{ text: m.content }],
              })),
              generationConfig: { maxOutputTokens: 500 },
              safetySettings: [
                { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
                { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
                { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
                { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" },
              ],
            }),
          }
        );

        if (!geminiRes.ok || !geminiRes.body) {
          const errText = await geminiRes.text().catch(() => "");
          throw new Error(`Gemini API Fehler ${geminiRes.status}: ${errText}`);
        }

        const reader = geminiRes.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const jsonStr = line.slice(6).trim();
            if (!jsonStr) continue;
            try {
              const parsed = JSON.parse(jsonStr);
              const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
              if (text) controller.enqueue(encoder.encode(text));
            } catch {
              // unvollständiges JSON-Fragment überspringen
            }
          }
        }

        controller.close();
      } catch (err) {
        console.error("Chat API error:", err);
        const vorherigeNutzerNachrichten: string[] = messages
          .filter((m: { role: string }) => m.role === "user")
          .slice(0, -1)
          .slice(-2)
          .map((m: { content: string }) => m.content);
        const fallback = smartFallback(lastMessage, isCrisis, vorherigeNutzerNachrichten);
        controller.enqueue(encoder.encode(fallback));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
      "X-Crisis": isCrisis ? "true" : "false",
    },
  });
}
