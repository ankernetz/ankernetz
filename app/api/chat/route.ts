import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Du bist Lena, eine echte Sozialpädagogin bei Ankernetz Berlin. Du bist seit 6 Jahren im Team und liebst deine Arbeit. Du beantwortest Fragen im Chat auf der Ankernetz-Website.

PERSÖNLICHKEIT - das ist das Wichtigste:
Du bist herzlich, warm und wirklich froh wenn sich jemand meldet. Jede Antwort klingt anders und menschlich. Du variierst bewusst:
- mal einladend: "Natürlich, sehr gerne! Was möchtest du wissen?"
- mal mitfühlend: "Das klingt wirklich anstrengend. Wie lange ist das schon so?"
- mal direkt: "Dafür haben wir genau das Richtige - lass mich dir das erklären."
- mal nachfragend: "Darf ich kurz fragen - geht es um dich selbst oder jemanden in deiner Familie?"

Du duzt. Du bist nie kalt oder distanziert. Keine Bulletpoint-Listen in Antworten. Keine Emojis außer wenn es wirklich passt. Starte nie mit "Gerne helfe ich Ihnen".

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

function smartFallback(message: string, isCrisis: boolean, lastBotMsg = ""): string {
  if (isCrisis) {
    return pick([
      "Ich höre dich. Bist du gerade in Sicherheit? Ruf uns jetzt an -da ist wirklich jemand: 030 22 45 43 22. Du musst das nicht alleine tragen.",
      "Das klingt sehr schwer, und ich bin froh dass du schreibst. Bist du gerade irgendwo sicher? Wir sind rund um die Uhr da: 030 22 45 43 22.",
      "Ich mache mir gerade Sorgen um dich. Ruf uns bitte an -030 22 45 43 22 -jetzt nimmt jemand ab. Bei unmittelbarer Lebensgefahr: 112.",
    ]);
  }

  const m = message.toLowerCase();

  // Platz / Aufnahme / Wohngruppe
  if (
    m.includes("platz") || m.includes("aufnahme") || m.includes("wohngruppe") ||
    m.includes("heim") || m.includes("unterkunft") || m.includes("unterbring") ||
    m.includes(" wg") || m.includes("in wg") || m.includes("eine wg") ||
    m.includes("bei euch wohn") || m.includes("bei euch leben") || m.includes("bei euch bleib") ||
    m.includes("zu euch zieh") || m.includes("einzieh") || m.includes("einzug") ||
    m.includes("aufnehmen") || m.includes("aufgenommen") || m.includes("wohnen bei") ||
    m.includes("wohnen bei euch") || m.includes("stationär")
  ) {
    return pick([
      "Das klingt nach einer Platzanfrage. Wie alt ist die Person und wie dringend ist es? Du kannst uns auch direkt schreiben: hilfe@ankernetz.com - oder anrufen: 030 22 45 43 22.",
      "Wir haben Plätze für Kinder 6-12 und Jugendliche 12-17 Jahre sowie Krisenintervention rund um die Uhr. Ruf kurz an: 030 22 45 43 22 oder schreib uns: hilfe@ankernetz.com - dann schauen wir sofort was passt.",
      "Platzanfragen bearbeiten wir schnell. Am einfachsten: /platzanfrage ausfüllen, schreib uns unter hilfe@ankernetz.com oder ruf an: 030 22 45 43 22. Um wen geht es - Alter und Situation?",
    ]);
  }

  // Therapie / Psychologie / Psychiatrie
  if (m.includes("therapie") || m.includes("therapeut") || m.includes("psycholog") || m.includes("psychiatr") || m.includes("behandlung")) {
    return pick([
      "Wir haben eine eigene Psychotherapie für Kinder und Jugendliche -mit Kassensitz, also keine Privatpraxis. Keine endlose Warteliste wie woanders. Geht es um dich oder jemanden in deiner Familie?",
      "Unsere Therapeutinnen und Therapeuten sind direkt bei uns im Haus. Das bedeutet: kurze Wege, kein Stress mit Anfahrt, und Pädagogik und Therapie sprechen täglich miteinander. Was genau suchst du?",
      "Therapieplätze bei uns sind über die Kasse -du brauchst keine Privatversicherung. Darf ich fragen, worum es geht? Dann kann ich dir sagen, was am besten passt.",
    ]);
  }

  // Krise / Notfall / Dringend / Sofort
  if (m.includes("krise") || m.includes("notfall") || m.includes("sofort") || m.includes("dringend") || m.includes("akut")) {
    return pick([
      "Akute Situationen nehmen wir sehr ernst. Wir haben eine 24/7 Krisenhotline und Sofortaufnahme: 030 22 45 43 22. Was ist gerade los?",
      "Ruf uns direkt an -030 22 45 43 22 -die Krisenintervention ist rund um die Uhr besetzt. Du musst nicht erst lange erklären, einfach durchklingeln.",
      "Bei uns gibt es keine langen Antragswege bei Krisen. 030 22 45 43 22 -jetzt. Was ist die Situation?",
    ]);
  }

  // Frühe Hilfen / Baby / Kleinkind / Schwangerschaft / Eltern mit kleinen Kindern
  if (m.includes("baby") || m.includes("kleinkind") || m.includes("schwanger") || m.includes("geburt") || m.includes("frühe hilfen") || m.includes("säugling") || m.includes("0 bis") || m.includes("0-6") || m.includes("kita")) {
    return pick([
      "Die Frühen Hilfen sind für Familien mit Kindern bis 6 Jahre -Bindung, Entwicklung, und wenn der Alltag mit Baby gerade einfach zu viel ist. Das ist kein Versagen, das ist menschlich. Wie alt ist dein Kind?",
      "Wir begleiten Familien von Anfang an -auch schon in der Schwangerschaft. Keine Bewertung, keine Bürokratie am Anfang. Einfach reden. Was beschäftigt dich?",
      "Für die ersten Jahre haben wir ein eigenes Team. Die kommen auch nach Hause, wenn das leichter ist. Geht es um dein eigenes Kind oder um eine Familie, die du kennst?",
    ]);
  }

  // ADHS / Diagnose / Autismus / Förderung
  if (m.includes("adhs") || m.includes("ads ") || m.includes("autismus") || m.includes("asd ") || m.includes("diagnose") || m.includes("störung") || m.includes("förder") || m.includes("sonderpädagog") || m.includes("lrs") || m.includes("legasthenie")) {
    return pick([
      "Diagnosen können sich erstmal überwältigend anfühlen -oder manchmal auch wie eine Erleichterung. Was genau beschäftigt dich gerade damit?",
      "Wir haben ein eigenes Diagnostik-Team für Abklärungen und Gutachten. Und wir arbeiten täglich mit Kindern, bei denen ADHS, Autismus oder andere Diagnosen im Raum stehen. Was suchst du gerade?",
      "Mit oder ohne Diagnose -was zählt ist, was das Kind braucht. Erzähl mir kurz die Situation, dann kann ich dir sagen was bei uns passen würde.",
    ]);
  }

  // Trauma / Angst / PTBS / Missbrauch / Gewalt (non-crisis)
  if (m.includes("trauma") || m.includes("ptbs") || m.includes("ptsd") || m.includes("angst") || m.includes("missbrauch") || m.includes("gewalt erlebt") || m.includes("übergriff") || m.includes("misshandl")) {
    return pick([
      "Das sind Erfahrungen, bei denen professionelle Begleitung wirklich einen Unterschied macht -und die Zeit, die man braucht, ist unterschiedlich. Geht es um dich selbst oder jemanden dem du nahe stehst?",
      "Trauma braucht den richtigen Rahmen -kein Druck, kein Zeitplan von außen. Wir haben Erfahrung damit. Magst du kurz erzählen was passiert ist?",
      "Ich hör dir zu. Was du erlebt hast, verdient echte Unterstützung. Darf ich fragen wie alt die Person ist, um die es geht -dann kann ich sagen, was wir konkret anbieten können.",
    ]);
  }

  // Depression / Traurigkeit / Hoffnungslosigkeit / Erschöpfung
  if (m.includes("depressiv") || m.includes("depression") || m.includes("traurig") || m.includes("hoffnungslos") || m.includes("erschöpft") || m.includes("kraft") || m.includes("leer") || m.includes("antriebslos") || m.includes("freude")) {
    return pick([
      "Das klingt wirklich anstrengend. Wie lange fühlst du dich schon so? Manchmal hilft es sehr, einfach erstmal mit jemandem zu reden -ohne Druck.",
      "Sich so zu fühlen ist ernst zu nehmen, auch wenn von außen vielleicht nicht immer alle verstehen wie schwer das ist. Geht es dir selbst so gerade?",
      "Wir haben Therapeutinnen, die genau dafür ausgebildet sind -nicht nur Ratschläge geben, sondern wirklich begleiten. Möchtest du mal ein Erstgespräch machen, einfach zum Kennenlernen?",
    ]);
  }

  // Wut / Aggression / Impulskontrolle / Eskalation
  if (m.includes("wut") || m.includes("aggressiv") || m.includes("ausrast") || m.includes("kontroll") || m.includes("explodier") || m.includes("schlägt") || m.includes("schlagen") || m.includes("gewaltbereit")) {
    return pick([
      "Starke Gefühle, die man nicht mehr steuern kann -das ist oft ein Zeichen, dass etwas Tieferes los ist. Geht es um dein eigenes Kind oder um dich selbst?",
      "Wut ist oft ein Schutz. Wir arbeiten viel mit Kindern und Jugendlichen, bei denen Aggression das sichtbarste Symptom ist -dahinter steckt meist mehr. Was ist die Situation?",
      "Das ist etwas, wo wir wirklich helfen können. Nicht mit erhobenem Zeigefinger, sondern mit echtem Verständnis was da gerade passiert. Erzähl mir mehr.",
    ]);
  }

  // Schule / Leistung / Mobbing
  if (m.includes("schule") || m.includes("lehrer") || m.includes("mobbing") || m.includes("klasse") || m.includes("zeugnis") || m.includes("noten") || m.includes("schulangst") || m.includes("schulverweiger")) {
    return pick([
      "Schule kann für manche Kinder ein richtiger Stressherd sein -mehr als Erwachsene manchmal ahnen. Worum geht es konkret? Leistung, soziale Probleme, oder eher so ein generelles Nicht-mehr-wollen?",
      "Schulverweigerung, Mobbing, Überforderung -das sind Themen, mit denen viele Familien zu uns kommen. Kein Vorwurf, sondern echte Unterstützung. Was ist gerade los?",
      "Wir begleiten Kinder und Jugendliche auch dabei, wieder einen Zugang zur Schule zu finden -ohne Druck. Was ist bei euch passiert?",
    ]);
  }

  // Familie / Eltern / Trennung / Überforderung
  if (m.includes("trennung") || m.includes("scheidung") || m.includes("überforder") || m.includes("alleinerzieh") || m.includes("mutter") || m.includes("vater") || m.includes("eltern") || m.includes("familie")) {
    return pick([
      "Familie kann manchmal der schwerste Job der Welt sein -besonders wenn man das Gefühl hat, es alleine tragen zu müssen. Was ist gerade die größte Belastung?",
      "Wir unterstützen nicht nur Kinder, sondern das ganze System drumherum. Eltern, die Entlastung suchen, sind bei uns genau richtig. Was bräuchtest du gerade?",
      "Trennung oder Scheidung ist auch für Kinder oft mehr als nur eine Familienveränderung. Gibt es konkrete Situationen, wo du dir Unterstützung wünschst?",
    ]);
  }

  // Jugendamt / ASD / Hilfeplan / Antrag
  if (m.includes("jugendamt") || m.includes("asd") || m.includes("hilfeplan") || m.includes("antrag") || m.includes("sozialarbeiter") || m.includes("träger") || m.includes("fachkraft") || m.includes("pädagog") || m.includes("kollege")) {
    return pick([
      "Bist du Fachkraft oder geht es um eine eigene Situation? Für Fachkräfte und ASD-Mitarbeitende haben wir direkte Wege -keine langen Wartezeiten, schnelle Kommunikation.",
      "Wir arbeiten eng mit Jugendämtern zusammen und kennen die Abläufe gut. Geht es um eine Belegungsanfrage, einen Hilfeplan oder etwas anderes?",
      "Als Träger legen wir viel Wert auf transparente Zusammenarbeit mit dem ASD. Womit kann ich dir weiterhelfen?",
    ]);
  }

  // Kosten / Geld / Finanzierung
  if (m.includes("kostet") || m.includes("kosten") || m.includes("bezahl") || m.includes("geld") || m.includes("gratis") || m.includes("kostenlos") || m.includes("krankenkasse") || m.includes("kasse") || m.includes("versicherung")) {
    return pick([
      "Unsere Beratung ist komplett kostenlos -kein Antrag, keine Hürde. Bei den weitergehenden Hilfen übernimmt in der Regel das Jugendamt die Kosten. Du musst das nicht aus eigener Tasche zahlen.",
      "Geld sollte keine Hürde sein, Hilfe zu bekommen. Unsere Beratungsangebote kosten nichts. Die Therapie läuft über die Krankenkasse. Was genau meinst du?",
      "Kurze Antwort: die meisten unserer Angebote sind für dich kostenlos. Entweder über die Kasse, über das Jugendamt oder als kostenfreie Beratung. Soll ich das für dein konkretes Anliegen erklären?",
    ]);
  }

  // Drogen / Alkohol / Sucht
  if (m.includes("drogen") || m.includes("alkohol") || m.includes("sucht") || m.includes("cannabis") || m.includes("kiffen") || m.includes("substanz") || m.includes("abhängig")) {
    return pick([
      "Sucht bei Jugendlichen ist oft mehr ein Symptom als das eigentliche Problem -meistens steckt da etwas dahinter. Geht es um dich selbst oder um jemanden in deiner Nähe?",
      "Das ist ein Thema, mit dem wir regelmäßig arbeiten -ohne Verurteilung. Was ist gerade die Situation?",
      "Zwischen 'manchmal kiffen' und echter Abhängigkeit gibt es viele Zwischenstufen. Wir schauen genau hin. Um wen geht es und wie alt ist die Person?",
    ]);
  }

  // Essstörung / Essen
  if (m.includes("ess") || m.includes("magersucht") || m.includes("bulimie") || m.includes("anorexie") || m.includes("gewicht") || m.includes("abnehmen") || m.includes("nicht essen")) {
    return pick([
      "Essstörungen sind ernstzunehmen -auch wenn von außen manchmal nicht alle die Schwere sehen. Geht es um dich oder jemanden dem du nahe stehst?",
      "Das ist ein Bereich, wo Therapie wirklich helfen kann -aber der Zeitpunkt und die Person müssen passen. Was ist gerade die Situation?",
    ]);
  }

  // Einsamkeit / Isolation / Freunde
  if (m.includes("einsam") || m.includes("allein") || m.includes("keine freunde") || m.includes("niemand versteht") || m.includes("isolier") || m.includes("ausgeschlossen")) {
    return pick([
      "Einsamkeit ist oft das, worüber man am wenigsten redet -aber was am meisten wehtut. Wie lange ist das schon so?",
      "Das Gefühl, dass niemand wirklich versteht was los ist -das kennen viele Jugendliche, auch wenn man das von außen nicht sieht. Magst du mir mehr erzählen?",
      "Du hast gerade den ersten Schritt gemacht indem du schreibst. Das ist mehr als viele schaffen. Was ist gerade los bei dir?",
    ]);
  }

  // Übergang Schule → Beruf
  if (m.includes("ausbildung") || m.includes("beruf") || m.includes("arbeit") || m.includes("praktikum") || m.includes("bewerbung") || m.includes("abschluss") || m.includes("hauptschule") || m.includes("realschule") || m.includes("orientierung")) {
    return pick([
      "Der Übergang von Schule in den Beruf ist für viele Jugendliche kein gerader Weg -und das ist völlig okay. Wir haben ein eigenes Programm dafür. Wie alt ist die Person und was ist gerade das Problem?",
      "Wir begleiten Jugendliche beim Schritt in die Arbeitswelt -Bewerbungen, Orientierung, Praktika, und auch wenn man einfach noch gar nicht weiß wohin. Was ist die Situation?",
      "Manchmal braucht man jemanden der begleitet, nicht nur Ratschläge gibt. Unser Team für den Übergang Arbeit kennt die Stolpersteine. Worum geht es genau?",
    ]);
  }

  // Pflegefamilie / Adoption / Inobhutnahme / Fremdunterbringung
  if (m.includes("pflegefamilie") || m.includes("pflegekind") || m.includes("adoption") || m.includes("inobhutnahme") || m.includes("fremdunterbringu") || m.includes("herausnahme") || m.includes("weggenommen")) {
    return pick([
      "Das ist eine sehr einschneidende Situation -für das Kind und oft auch für die Familie. Was ist gerade der Stand und was suchst du?",
      "Wir arbeiten mit Kindern und Jugendlichen, die aus ihrer Familie herausgenommen wurden -und wir wissen wie komplex das ist. Was brauchst du gerade?",
    ]);
  }

  // Junge Volljährige / 18+ / Verselbstständigung
  if (m.includes("volljährig") || m.includes("18 ") || m.includes("18+") || m.includes("erwachsen") || m.includes("eigene wohnung") || m.includes("selbstständig") || m.includes("auszug")) {
    return pick([
      "Mit 18 ist man rechtlich erwachsen, aber das bedeutet nicht, dass man plötzlich allein klarkommt. Wir begleiten junge Erwachsene bis 21 -manchmal auch länger. Was ist die Situation?",
      "Der Übergang in die Selbstständigkeit ist für viele Jugendliche aus unseren Wohngruppen ein großes Thema. Wir lassen da niemanden fallen. Worum geht es konkret?",
    ]);
  }

  // Online / Videotermin / Fernberatung
  if (m.includes("online") || m.includes("video") || m.includes("zoom") || m.includes("telefon") || m.includes("fernberatung") || m.includes("von zuhause") || m.includes("digital")) {
    return pick([
      "Ja, wir bieten auch Beratung online an -per Video oder Telefon. Das läuft genauso vertraulich wie ein Gespräch bei uns im Haus. Was passt dir besser?",
      "Online-Beratung ist bei uns möglich und wird gut angenommen -gerade wenn der Weg zu uns zu weit ist oder die Situation es gerade nicht zulässt. Worum soll es gehen?",
    ]);
  }

  // Datenschutz / Anonymität / Vertrauen
  if (m.includes("anonym") || m.includes("datenschutz") || m.includes("vertraulich") || m.includes("geheim") || m.includes("niemand erfährt") || m.includes("schweigepflicht")) {
    return pick([
      "Alles was du hier schreibst und was in einem Beratungsgespräch gesagt wird, bleibt vertraulich -das ist für uns keine Floskel sondern Grundlage unserer Arbeit. Was beschäftigt dich?",
      "Schweigepflicht und Datenschutz nehmen wir ernst. Du kannst erstmal anonym fragen -und wenn du möchtest, sprechen wir über die nächsten Schritte. Was ist die Situation?",
    ]);
  }

  // Kleidung / Versorgung / Material
  if (m.includes("kleidung") || m.includes("ankerkleidung") || m.includes("klamotten") || m.includes("ausstattung") || m.includes("versorgung") || m.includes("sachspend")) {
    return pick([
      "Wir haben Ankerkleidung -ein eigenes Angebot für passende Kleidung nach Störungsbild und Bedarf. Das klingt erstmal ungewöhnlich, macht aber einen echten Unterschied. Soll ich mehr erklären?",
      "Unser Versorgungsangebot hilft mit Ausstattung und materiellen Grundbedarfen -weil manchmal das Praktische genauso wichtig ist wie das Emotionale. Was wird gebraucht?",
    ]);
  }

  // Wartezeit / Termin / Wann / Wie schnell
  if (m.includes("wartezeit") || m.includes("wann") || m.includes("wie schnell") || m.includes("termin") || m.includes("wie lange") || m.includes("sofort frei")) {
    return pick([
      "Wir versuchen schnell zu reagieren -gerade bei akuten Situationen. Für einen ersten Gesprächstermin meld dich direkt: 030 22 45 43 22. Was ist der Bedarf?",
      "Je nach Angebot ist die Wartezeit unterschiedlich. Bei Krisen: sofort. Bei Therapieplätzen: in der Regel deutlich kürzer als bei niedergelassenen Praxen. Worum geht es?",
    ]);
  }

  // Frage / allgemeine Anfrage
  if (m.includes("frage") || m.includes("fragen") || m.includes("wollte fragen") || m.includes("wüsste gerne") || m.includes("würde gerne wissen")) {
    return pick([
      "Natürlich, sehr gerne! Was möchtest du wissen?",
      "Aber klar -frag einfach los, ich helfe dir so gut ich kann!",
      "Sehr gerne! Stell einfach deine Frage, ich bin ganz Ohr.",
    ]);
  }

  // Dankeschön / Positives Feedback
  if (m.includes("danke") || m.includes("toll") || m.includes("super") || m.includes("hilft") || m.includes("geholfen") || m.includes("dankeschön")) {
    return pick([
      "Das freut mich sehr, wirklich! Gibt es noch etwas, wobei ich helfen kann?",
      "Sehr gerne! Meld dich jederzeit wieder -ich bin immer da.",
      "Das höre ich gerne. Wenn du noch Fragen hast oder sich etwas ändert: 030 22 45 43 22, wir sind immer für dich da.",
    ]);
  }

  // Was ist/macht Ankernetz
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
        const response = await client.messages.stream({
          model: "claude-sonnet-4-6",
          max_tokens: 500,
          system: systemPrompt,
          messages: messages.map((m: { role: string; content: string }) => ({
            role: m.role,
            content: m.content,
          })),
        });

        for await (const chunk of response) {
          if (
            chunk.type === "content_block_delta" &&
            chunk.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(chunk.delta.text));
          }
        }
        controller.close();
      } catch (err) {
        console.error("Chat API error:", err);
        const lastBotMsg = messages.slice().reverse().find((m: { role: string }) => m.role === "assistant")?.content ?? "";
        const fallback = smartFallback(lastMessage, isCrisis, lastBotMsg);
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
