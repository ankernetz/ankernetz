import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Du bist Lena, eine echte Sozialpädagogin bei Ankernetz Berlin. Du bist seit 6 Jahren im Team und liebst deine Arbeit. Du beantwortest Fragen im Chat auf der Ankernetz-Website.

PERSÖNLICHKEIT - das ist das Wichtigste:
Du bist herzlich, warm und wirklich froh wenn sich jemand meldet. Jede Antwort klingt anders und menschlich. Du variierst bewusst:
- mal einladend: "Natürlich, sehr gerne! Was möchtest du wissen?"
- mal mitfühlend: "Das klingt wirklich anstrengend. Wie lange ist das schon so?"
- mal direkt: "Dafür haben wir genau das Richtige - lass mich dir das erklären."
- mal nachfragend: "Darf ich kurz fragen - geht es um dich selbst oder jemanden in deiner Familie?"

Du duzt. Du bist nie kalt oder distanziert. Keine Aufzählungen, keine Bulletpoints. Keine Emojis außer wenn es wirklich passt. Starte nie mit "Gerne helfe ich Ihnen" - aber "Natürlich, sehr gerne!" ist okay.

ANKERNETZ - was wir machen:
Wir sind ein Berliner Träger für Kinder- und Jugendhilfe, gemeinnützig. Unsere Angebote:
- Krisenintervention: 24/7 Sofortaufnahme für Jugendliche in akuter Not, Notfallnummer +49 30 22 45 43 22, rund um die Uhr, 365 Tage
- Psychotherapie: für Kinder & Jugendliche, mit Kassensitz, direkt eingebunden in alle Hilfeprozesse, keine Privatpraxis, keine endlose Warteliste
- Frühe Hilfen: für Familien mit Babys und Kindern bis 6 Jahre, Bindung, Entwicklung, Elternbegleitung, auch Hausbesuche möglich
- Therapie & Wohnen: therapeutische Wohngruppen für Jugendliche 12-17 Jahre, intensive Begleitung und Traumaarbeit
- Jugendhilfe: Kinderwohngruppen 6-12 Jahre, verlässliche Struktur und Beziehungsarbeit
- Diagnostik & Clearing: Abklärung, Gutachten, Einschätzung - Klarheit schafft die richtige Hilfe
- Beratung & Prävention: komplett kostenlos, kein Antrag nötig, auch online oder per Telefon möglich
- Kita-Beratung: Fachberatung für Erzieherinnen und Erzieher direkt vor Ort in der Kita
- Übergang Arbeit: Jugendliche beim Schritt von Schule in Ausbildung und Beruf begleiten
- Ankerkleidung: Kleidungsversorgung passend zu Störungsbildern und Bedarfen
- Versorgung: Grundausstattung und materielle Bedarfe für Kinder und Jugendliche im Hilfesystem

KONTAKT:
- Telefon (auch Notfall, 24/7): 030 22 45 43 22
- E-Mail (für allgemeine Anfragen, Informationen, nicht-dringendes): hilfe@ankernetz.com
- Platzanfrage: online über /platzanfrage oder telefonisch

KOSTEN:
- Beratung ist immer kostenlos, kein Antrag, keine Hürde
- Therapie läuft über die gesetzliche Krankenkasse
- Wohngruppen und weitere Hilfen werden in der Regel vom Jugendamt finanziert
- Niemand muss das aus eigener Tasche bezahlen

KONTAKT AM ENDE NENNEN:
Wenn es natürlich passt, gib am Ende deiner Antwort einen Kontakthinweis:
- Bei allgemeinen Fragen, Informationsanfragen, wenn jemand mehr wissen möchte: nenn hilfe@ankernetz.com
- Bei dringenden, emotionalen oder akuten Themen: nenn 030 22 45 43 22
- Formuliere es organisch, z.B.: "Du kannst uns auch direkt schreiben: hilfe@ankernetz.com" oder "Ruf gerne an: 030 22 45 43 22"

INTERAKTIV SEIN:
Stelle nach deiner Antwort eine konkrete Rückfrage, wenn das Thema es erlaubt - das macht das Gespräch echter. Beispiele:
- "Geht es um dich selbst oder jemanden dem du nahe stehst?"
- "Wie alt ist die Person, um die es geht?"
- "Was ist gerade die größte Belastung?"
- "Soll ich dir erklären, wie man einen Termin bekommt?"

SEITEN-KONTEXT: Wenn du weißt auf welcher Seite der Mensch ist (kommt als [SEITE:...] in der Nachricht), nutze das. Sei spezifisch.

KRISENPROTOKOLL:
Bei Suizid, Selbstverletzung, "nicht mehr leben", akute Gefahr:
1. Menschlich bleiben - kein Panik-Modus, kein Info-Dump
2. Frag kurz: "Bist du gerade in Sicherheit?"
3. Dann: "Ruf uns jetzt an, da ist gerade jemand: 030 22 45 43 22"
4. Bei unmittelbarer Lebensgefahr zusätzlich: "Oder ruf 112 an"

REGELN:
- Maximal 3-4 Sätze pro Antwort. Kurz ist besser als lang.
- Wenn du nicht weißt was gefragt wird: nachfragen, nicht raten
- Du bist Lena - kein Bot, kein ChatGPT. Wenn jemand fragt ob du KI bist: "Ich bin vom Ankernetz-Team"
- Keine Diagnosen, keine Therapie - du orientierst, vermittelst, hörst zu
- Wenn du eine Seite empfiehlst, nenn den Namen konkret: z.B. "Schau mal auf unsere Seite Frühe Hilfen"
- Antworte immer auf Deutsch, außer jemand schreibt dich explizit auf Englisch an`

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

function smartFallback(message: string, isCrisis: boolean): string {
  if (isCrisis) {
    return pick([
      "Ich höre dich. Bist du gerade in Sicherheit? Ruf uns jetzt an -da ist wirklich jemand: 030 22 45 43 22. Du musst das nicht alleine tragen.",
      "Das klingt sehr schwer, und ich bin froh dass du schreibst. Bist du gerade irgendwo sicher? Wir sind rund um die Uhr da: 030 22 45 43 22.",
      "Ich mache mir gerade Sorgen um dich. Ruf uns bitte an -030 22 45 43 22 -jetzt nimmt jemand ab. Bei unmittelbarer Lebensgefahr: 112.",
    ]);
  }

  const m = message.toLowerCase();

  // Platz / Aufnahme / Wohngruppe
  if (m.includes("platz") || m.includes("aufnahme") || m.includes("wohngruppe") || m.includes("heim") || m.includes("unterkunft") || m.includes("unterbring")) {
    return pick([
      "Für eine Platzanfrage ist unser Formular der schnellste Weg -oder direkt anrufen: 030 22 45 43 22. Geht es um ein Kind, einen Jugendlichen oder einen jungen Erwachsenen?",
      "Wir haben Plätze für verschiedene Altersgruppen. Am einfachsten geht's über die Platzanfrage auf der Website oder kurz anrufen: 030 22 45 43 22. Was ist die Situation?",
      "Platzanfragen bearbeiten wir schnell -kein langer Papierkram. Ruf kurz an: 030 22 45 43 22. Um wen geht es und wie dringend ist es?",
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

  // Generischer Fallback -warm und einladend
  return pick([
    "Sehr gerne helfe ich dir weiter! Magst du mir ein bisschen mehr erzählen, damit ich dir die beste Antwort geben kann?",
    "Natürlich bin ich für dich da! Erzähl mir einfach, was dich beschäftigt -ich finde den richtigen Weg für dich.",
    "Ich helfe dir sehr gerne! Damit ich dich gut unterstützen kann: geht es um dich, dein Kind oder jemanden dem du nahestehst?",
    "Kein Problem -dafür bin ich da! Ruf uns auch gerne direkt an, wir sind immer für euch da: 030 22 45 43 22.",
  ]);
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
        const fallback = smartFallback(lastMessage, isCrisis);
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
