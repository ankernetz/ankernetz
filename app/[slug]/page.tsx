import { notFound } from "next/navigation";
import Link from "next/link";

const angeboteDaten: Record<string, {
  titel: string;
  untertitel: string;
  claim: string;
  einleitung: string;
  zielgruppe: string;
  zielgruppeDetail: string;
  leistungen: string[];
  besonderheiten: string[];
  prozess: { schritt: string; beschreibung: string }[];
  fuerFachkraefte: string[];
  farbe: string;
}> = {
  krisenintervention: {
    titel: "Krisenintervention",
    untertitel: "Ankernetz Krisenintervention",
    claim: "Sofort da. Wenn es zählt.",
    einleitung: "In akuten Krisensituationen brauchen Jugendliche sofortige, professionelle Unterstützung. Unser Kriseninterventionsteam ist rund um die Uhr erreichbar und kann kurzfristig reagieren — ohne bürokratische Verzögerungen.",
    zielgruppe: "12–17 Jahre",
    zielgruppeDetail: "Jugendliche in akuten psychischen Krisen, bei Eigen- oder Fremdgefährdung, nach traumatischen Ereignissen oder bei akutem Schutzbedarfs.",
    leistungen: [
      "24/7 Krisenaufnahme ohne lange Wartezeiten",
      "Sofortstabilisierung und Sicherung",
      "Psychotherapeutische Diagnostik im Krisenkontext",
      "Kurzfristige Perspektivklärung mit Jugendamt",
      "Einbindung des sozialen Umfelds",
      "Überleitung in weiterführende Hilfen",
      "Engmaschige Begleitung durch Fachkräfte",
      "Ärztliche Versorgung und Medikation bei Bedarf",
    ],
    besonderheiten: [
      "Rund-um-die-Uhr-Bereitschaft an 365 Tagen",
      "Aufnahme innerhalb von Stunden möglich",
      "Spezialisiertes Team mit Krisenkompetenzen",
      "Direkter Draht zum zuständigen Jugendamt",
      "Klare Kommunikation und schnelle Rückmeldungen",
    ],
    prozess: [
      { schritt: "Kontakt", beschreibung: "Jugendamt oder Fachkraft nimmt telefonisch Kontakt auf — rund um die Uhr." },
      { schritt: "Einschätzung", beschreibung: "Innerhalb von 30 Minuten erste Rückmeldung zur Aufnahmekapazität und Passung." },
      { schritt: "Aufnahme", beschreibung: "Strukturierte Aufnahme, Erstgespräch und Sicherung des Jugendlichen." },
      { schritt: "Stabilisierung", beschreibung: "Intensive Begleitung in den ersten Tagen — Stabilisierung im Vordergrund." },
      { schritt: "Perspektive", beschreibung: "Gemeinsam mit Jugendamt und Familie wird eine klare Weiterversorgung geplant." },
    ],
    fuerFachkraefte: [
      "Direkter Aufnahmeprozess ohne lange Wartelisten",
      "Regelmäßige schriftliche Rückmeldungen an das Jugendamt",
      "Klare Dokumentation und Einschätzungsberichte",
      "Flexibilität bei besonderen Fallkonstellationen",
      "Feste Ansprechpartner während des gesamten Prozesses",
    ],
    farbe: "#0f172a",
  },

  "therapie-wohnen": {
    titel: "Therapie & Wohnen",
    untertitel: "Ankernetz Therapie & Wohnen",
    claim: "Raum zum Ankommen. Begleitung zum Wachsen.",
    einleitung: "Unsere therapeutischen Wohngruppen bieten Jugendlichen einen stabilen Rahmen, in dem therapeutische Arbeit und gelebter Alltag Hand in Hand gehen. Hier entsteht Veränderung — nicht im Behandlungszimmer, sondern im echten Leben.",
    zielgruppe: "12–17 Jahre",
    zielgruppeDetail: "Jugendliche mit komplexen Trauma-Folgestörungen, Verhaltensauffälligkeiten, psychischen Erkrankungen oder schwerwiegenden familiären Belastungen.",
    leistungen: [
      "Therapeutisch geleitete Wohngruppe mit Strukturrahmen",
      "Intensive Einzelbegleitung durch Bezugsbetreuer",
      "Wöchentliche Einzel- und Gruppentherapie",
      "Traumasensible Alltagsgestaltung",
      "Schulbegleitung und Bildungsförderung",
      "Familienarbeit und Elterngespräche",
      "Freizeitpädagogik und Erlebnisangebote",
      "Vorbereitung auf Verselbständigung",
    ],
    besonderheiten: [
      "Enger therapeutischer Rahmen im Alltag",
      "Kleines Team mit hoher Fachlichkeit",
      "Traumasensible Pädagogik als Grundprinzip",
      "Regelmäßiger Austausch mit Jugendamt und Familie",
      "Klare Ziele und messbare Fortschritte",
    ],
    prozess: [
      { schritt: "Anfrage", beschreibung: "Platzanfrage durch das Jugendamt mit Übergabe relevanter Unterlagen." },
      { schritt: "Prüfung", beschreibung: "Wir prüfen die Passung und melden uns innerhalb von 48 Stunden zurück." },
      { schritt: "Kennenlernen", beschreibung: "Schnupperwohnen und gemeinsames Erstgespräch mit dem Jugendlichen." },
      { schritt: "Einzug", beschreibung: "Strukturierter Einzug mit individuellem Eingewöhnungsplan." },
      { schritt: "Hilfeplanung", beschreibung: "Gemeinsame Zielformulierung im Hilfeplan mit allen Beteiligten." },
    ],
    fuerFachkraefte: [
      "Regelmäßige Entwicklungsberichte und Hilfeplanvorbereitung",
      "Schnelle Erreichbarkeit der Gruppenleitung",
      "Transparente Dokumentation des Hilfeverlaufs",
      "Flexibilität bei Kriseninterventionen",
      "Enge Kooperation mit Schulen und Therapeuten",
    ],
    farbe: "#1e3a5f",
  },

  jugendhilfe: {
    titel: "Jugendhilfe",
    untertitel: "Ankernetz Jugendhilfe",
    claim: "Sicherheit im Alltag. Zukunft im Blick.",
    einleitung: "Kinder brauchen Sicherheit, Verlässlichkeit und Beziehungen, die tragen. Unsere Kinderwohngruppen bieten genau das: einen stabilen Ort, an dem Kinder wachsen, lernen und sich entwickeln können.",
    zielgruppe: "6–12 Jahre",
    zielgruppeDetail: "Kinder mit Vernachlässigungs- und Misshandlungserfahrungen, Bindungsstörungen oder aus hochbelasteten Familiensystemen.",
    leistungen: [
      "Stabile Wohngruppe mit verlässlichem Alltagsrahmen",
      "Bezugsbetreuung mit Beziehungskontinuität",
      "Schulbegleitung und Hausaufgabenunterstützung",
      "Entwicklungspsychologische Förderung",
      "Bindungsorientierte Pädagogik",
      "Freizeitgestaltung und soziale Integration",
      "Elternarbeit und Familienkontakte",
      "Therapeutische Anbindung bei Bedarf",
    ],
    besonderheiten: [
      "Kleine Gruppen für intensive Betreuung",
      "Geschultes Team in Bindungspädagogik",
      "Enge Vernetzung mit Schulen im Umfeld",
      "Regelmäßige Entwicklungsgespräche",
      "Klar strukturierter, vorhersehbarer Alltag",
    ],
    prozess: [
      { schritt: "Anfrage", beschreibung: "Platzanfrage durch das Jugendamt." },
      { schritt: "Einschätzung", beschreibung: "Wir prüfen die Passung und geben schnell Rückmeldung." },
      { schritt: "Vorbereitung", beschreibung: "Gemeinsame Vorbereitung des Einzugs mit Kind und Familie." },
      { schritt: "Einzug", beschreibung: "Behutsamer, gut begleiteter Einzug." },
      { schritt: "Entwicklung", beschreibung: "Regelmäßige Standortgespräche und Hilfeplanarbeit." },
    ],
    fuerFachkraefte: [
      "Enge Kooperation mit dem zuständigen ASD",
      "Regelmäßige schriftliche Berichte",
      "Klare Kommunikation bei Vorkommnissen",
      "Hilfeplanvorbereitung und Dokumentation",
      "Flexible Reaktion auf Veränderungen im Hilfebedarf",
    ],
    farbe: "#243b55",
  },

  "diagnostik-clearing": {
    titel: "Diagnostik & Clearing",
    untertitel: "Ankernetz Diagnostik & Clearing",
    claim: "Klarheit schafft die richtige Hilfe.",
    einleitung: "Bevor die richtige Hilfe greifen kann, braucht es ein klares Bild. Unser Diagnostik- und Clearingteam liefert fundierte, handlungsorientierte Einschätzungen — für Jugendämter, Fachkräfte und Familien.",
    zielgruppe: "Alle Altersgruppen",
    zielgruppeDetail: "Kinder und Jugendliche, bei denen Unklarheit über Art und Intensität des Hilfebedarfs besteht, oder die eine Überprüfung ihrer Entwicklung und Belastung benötigen.",
    leistungen: [
      "Psychologische Diagnostik (IQ, Persönlichkeit, Verhalten)",
      "Verhaltens- und Belastungseinschätzung",
      "Traumadiagnostik und -anamnese",
      "Clearingprozesse für das Jugendamt",
      "Schriftliche Gutachten und Einschätzungsberichte",
      "Hilfeplanvorbereitung und Empfehlungen",
      "Eltern- und Familiengespräche",
      "Fachberatung für Institutionen",
    ],
    besonderheiten: [
      "Zertifizierte psychologische Diagnostikverfahren",
      "Handlungsorientierte, klare Berichte",
      "Enge Verzahnung mit allen Ankernetz-Angeboten",
      "Kurze Wartezeiten durch eigene Kapazitäten",
      "Vertraulichkeit und Datenschutz",
    ],
    prozess: [
      { schritt: "Auftrag", beschreibung: "Klärung des Auftrags und der Fragestellung mit dem Jugendamt." },
      { schritt: "Diagnostik", beschreibung: "Durchführung der vereinbarten diagnostischen Verfahren." },
      { schritt: "Auswertung", beschreibung: "Systematische Auswertung und Interpretation der Ergebnisse." },
      { schritt: "Bericht", beschreibung: "Schriftlicher Bericht mit konkreten Empfehlungen." },
      { schritt: "Rückmeldung", beschreibung: "Gemeinsames Gespräch mit allen Beteiligten." },
    ],
    fuerFachkraefte: [
      "Klare, verständliche Berichte für den Hilfeplan",
      "Schnelle Durchführung bei dringenden Fällen",
      "Direkte Empfehlungen für die Hilfeform",
      "Enge Abstimmung mit dem Jugendamt",
      "Neutrale, fachlich fundierte Einschätzungen",
    ],
    farbe: "#1e3650",
  },

  psychotherapie: {
    titel: "Kinder- und Jugendpsychotherapie",
    untertitel: "Ankernetz Psychotherapie",
    claim: "Professionelle Therapie. Im Herzen des Systems.",
    einleitung: "Psychotherapie ist eine zentrale Säule wirksamer Jugendhilfe. Unser Therapieangebot mit Kassensitz ist eng in alle Ankernetz-Strukturen eingebunden — und damit direkt dort, wo Kinder und Jugendliche leben und betreut werden.",
    zielgruppe: "Kinder & Jugendliche",
    zielgruppeDetail: "Kinder und Jugendliche mit psychischen Störungen, Trauma-Folgestörungen, Angststörungen, ADHS, Depressionen oder Verhaltensauffälligkeiten.",
    leistungen: [
      "Ambulante Kinder- und Jugendpsychotherapie (Kassensitz)",
      "Verhaltenstherapie und traumafokussierte Verfahren",
      "EMDR und andere traumaspezifische Methoden",
      "Diagnostische Abklärung und Behandlungsplanung",
      "Eltern- und Familientherapie",
      "Koordination mit Wohngruppen und Jugendamt",
      "Kriseninterventionsgespräche",
      "Gutachten und Stellungnahmen",
    ],
    besonderheiten: [
      "Kassensitz — keine Privatkosten für Familien",
      "Direkte Einbindung in das Ankernetz-System",
      "Kurze Wege zu Wohngruppen und Betreuern",
      "Spezialisierung auf komplexe Traumatisierungen",
      "Interdisziplinäre Fallbesprechungen",
    ],
    prozess: [
      { schritt: "Anmeldung", beschreibung: "Anmeldung über das Jugendamt, die Schule oder direkt durch die Familie." },
      { schritt: "Erstgespräch", beschreibung: "Probatorische Sitzungen zur gegenseitigen Einschätzung." },
      { schritt: "Diagnose", beschreibung: "Systematische Diagnostik und Behandlungsplanung." },
      { schritt: "Therapie", beschreibung: "Regelmäßige Therapiesitzungen — abgestimmt auf den individuellen Bedarf." },
      { schritt: "Vernetzung", beschreibung: "Enge Abstimmung mit allen Beteiligten im Hilfeprozess." },
    ],
    fuerFachkraefte: [
      "Kassenleistung — keine Kostenübernahme notwendig",
      "Enge Kooperation mit dem Jugendamt",
      "Regelmäßige Rückmeldungen an Bezugsbetreuer",
      "Schnelle Aufnahme bei dringendem Bedarf",
      "Gemeinsame Fallbesprechungen möglich",
    ],
    farbe: "#1a2f4a",
  },

  "fruehe-hilfen": {
    titel: "Frühe Hilfen",
    untertitel: "Ankernetz Frühe Hilfen",
    claim: "Schutz von Anfang an.",
    einleitung: "Die frühen Jahre sind entscheidend. Unser Frühes-Hilfen-Angebot schützt und begleitet Kleinkinder in besonders vulnerablen Situationen — mit einem Team, das Bindung, Sicherheit und Entwicklung in den Mittelpunkt stellt.",
    zielgruppe: "0–6 Jahre",
    zielgruppeDetail: "Kleinkinder in Gefährdungssituationen, bei Vernachlässigung, mit Entwicklungsverzögerungen oder aus hochbelasteten Familiensystemen.",
    leistungen: [
      "Aufnahme von Kleinkindern in Schutzpflegestellen",
      "Intensive Kleinstkinderbetreuung rund um die Uhr",
      "Entwicklungspsychologische Förderung",
      "Bindungsaufbau und Bindungsdiagnostik",
      "Ärztliche und heilpädagogische Begleitung",
      "Elternarbeit und Rückführungsplanung",
      "Enge Kooperation mit dem Jugendamt",
      "Fachberatung für Kitas und Kindertageseinrichtungen",
    ],
    besonderheiten: [
      "Spezialisiertes Team in Bindungspädagogik",
      "Entwicklungspsychologische Fachkompetenz",
      "Höchste Sorgfalt bei sensiblen Aufnahmen",
      "24/7 Verfügbarkeit für Notaufnahmen",
      "Feinfühliger, bindungsorientierter Ansatz",
    ],
    prozess: [
      { schritt: "Meldung", beschreibung: "Meldung durch Jugendamt oder Familiengericht bei akuter Gefährdung." },
      { schritt: "Aufnahme", beschreibung: "Sofortige oder geplante Aufnahme — abgestimmt auf die Situation." },
      { schritt: "Eingewöhnung", beschreibung: "Behutsame Eingewöhnung mit Fokus auf Sicherheit und Bindung." },
      { schritt: "Förderung", beschreibung: "Entwicklungspsychologische Einschätzung und individuelle Förderplanung." },
      { schritt: "Perspektive", beschreibung: "Regelmäßige Standortgespräche und Planung der weiteren Hilfe." },
    ],
    fuerFachkraefte: [
      "Sofortaufnahme bei akuter Kindeswohlgefährdung",
      "Detaillierte Entwicklungsberichte",
      "Enge Abstimmung mit dem Familiengericht",
      "Unterstützung bei Rückführungsentscheidungen",
      "Transparente Kommunikation in allen Phasen",
    ],
    farbe: "#2d4a6e",
  },

  versorgung: {
    titel: "Versorgung",
    untertitel: "Ankernetz Versorgung",
    claim: "Mehr als das Nötigste. Würde im Alltag.",
    einleitung: "Kinder und Jugendliche mit besonderen Bedarfen brauchen mehr als Standardversorgung. Ankernetz Versorgung stellt sicher, dass jedes Kind die Ausstattung bekommt, die es braucht — angepasst an sein Störungsbild und seinen Alltag.",
    zielgruppe: "Kinder & Jugendliche",
    zielgruppeDetail: "Kinder und Jugendliche in stationären Hilfen, mit spezifischen Störungsbildern oder besonderen Alltagsanforderungen.",
    leistungen: [
      "Bedarfsorientierte Kleidungsversorgung",
      "Spezialisierte Ausstattung bei Trauma und Vernachlässigung",
      "Schul- und Freizeitausstattung",
      "Persönliche Bedarfsermittlung",
      "Koordination mit Betreuungsteams",
      "Nachhaltige und würdevolle Versorgung",
      "Dokumentation für Jugendamt und Kostenträger",
    ],
    besonderheiten: [
      "Keine Standard-Versorgung — individuelle Bedarfsermittlung",
      "Sensibel für Störungsbilder und Besonderheiten",
      "Eingebettet in den Hilfeprozess",
      "Enge Abstimmung mit Betreuern",
      "Würde und Selbstwert im Vordergrund",
    ],
    prozess: [
      { schritt: "Bedarfsermittlung", beschreibung: "Gemeinsam mit dem Betreuungsteam wird der individuelle Bedarf erfasst." },
      { schritt: "Planung", beschreibung: "Auswahl geeigneter Kleidung und Ausstattung — abgestimmt auf das Kind." },
      { schritt: "Bereitstellung", beschreibung: "Direkte Lieferung oder Abholung — unkompliziert und schnell." },
      { schritt: "Anpassung", beschreibung: "Regelmäßige Überprüfung und Anpassung des Bedarfs." },
    ],
    fuerFachkraefte: [
      "Klare Dokumentation für Kostenträger",
      "Koordination mit dem Betreuungsteam",
      "Schnelle Reaktion bei akutem Bedarf",
      "Professionelle Beratung bei Fragen",
    ],
    farbe: "#2c3e50",
  },

  "beratung-praevention": {
    titel: "Beratung & Prävention",
    untertitel: "Anker & Perspektive",
    claim: "Früh helfen. Gemeinsam stärken.",
    einleitung: "Hilfe muss nicht immer stationär sein. Unsere Beratungsangebote sind niedrigschwellig, zugänglich und wirksam — als erster Schritt ins System oder als begleitende Unterstützung.",
    zielgruppe: "Familien & Fachkräfte",
    zielgruppeDetail: "Familien in belasteten Situationen, Jugendliche mit Beratungsbedarf, Fachkräfte aus Schulen, Kitas und sozialen Einrichtungen.",
    leistungen: [
      "Familienberatung und Elterngespräche",
      "Psychologische Einzelberatung",
      "Online-Beratung und Chat-Angebote",
      "Sorgentelefon",
      "Fachberatung für Institutionen",
      "Präventionsprogramme für Schulen",
      "Gruppenangebote und Workshops",
      "Krisenberatung und -intervention",
    ],
    besonderheiten: [
      "Niedrigschwellig und ohne lange Wartezeiten",
      "Online und vor Ort möglich",
      "Kostenlos oder kostengünstig",
      "Vertraulich und ohne bürokratische Hürden",
      "Vernetzt mit dem gesamten Ankernetz-System",
    ],
    prozess: [
      { schritt: "Kontakt", beschreibung: "Per Telefon, E-Mail oder Online-Formular — einfach und unkompliziert." },
      { schritt: "Erstgespräch", beschreibung: "Kurzgespräch zur Klärung des Anliegens und der Möglichkeiten." },
      { schritt: "Beratung", beschreibung: "Regelmäßige Beratungsgespräche — angepasst an den Bedarf." },
      { schritt: "Weitervermittlung", beschreibung: "Bei Bedarf Vermittlung in weiterführende Angebote im Ankernetz." },
    ],
    fuerFachkraefte: [
      "Fachberatung für Schulen, Kitas und soziale Einrichtungen",
      "Fallbezogene Beratung ohne formellen Auftrag",
      "Schnelle, unbürokratische Unterstützung",
      "Präventionsprojekte auf Anfrage",
    ],
    farbe: "#1f3d5c",
  },

  "uebergang-arbeit": {
    titel: "Übergang Arbeit",
    untertitel: "Ankernetz Übergang Arbeit",
    claim: "Der nächste Schritt. Mit Begleitung.",
    einleitung: "Der Übergang von der Jugendhilfe in ein eigenständiges Leben ist eine der größten Herausforderungen. Wir begleiten Jugendliche und junge Erwachsene dabei — konkret, individuell und mit langem Atem.",
    zielgruppe: "Jugendliche & junge Erwachsene",
    zielgruppeDetail: "Jugendliche und junge Erwachsene am Ende stationärer Hilfen oder im Übergang Schule–Beruf.",
    leistungen: [
      "Berufsorientierung und Stärkenanalyse",
      "Bewerbungstraining und CV-Erstellung",
      "Praktikumsvermittlung und -begleitung",
      "Begleitung bei Behördengängen",
      "Wohnungsvermittlung und Unterstützung",
      "Schuldnerberatung und Finanzkompetenz",
      "Netzwerkaufbau mit Arbeitgebern",
      "Nachbetreuung nach dem Hilfesystem",
    ],
    besonderheiten: [
      "Individuelle Begleitung ohne Schablone",
      "Echte Netzwerke zu lokalen Arbeitgebern",
      "Auch nach dem 18. Lebensjahr verfügbar",
      "Enge Kooperation mit Agentur für Arbeit",
      "Ganzheitlicher Blick auf Biografie und Ressourcen",
    ],
    prozess: [
      { schritt: "Standortbestimmung", beschreibung: "Wo stehe ich? Was kann ich? Was will ich? — Ehrliche Bestandsaufnahme." },
      { schritt: "Ziele", beschreibung: "Realistische, erreichbare Ziele gemeinsam entwickeln." },
      { schritt: "Vorbereitung", beschreibung: "Bewerbungen, Praktika, Berufsschule — alles strukturiert vorbereiten." },
      { schritt: "Übergang", beschreibung: "Aktive Begleitung in den ersten Wochen am Ausbildungs- oder Arbeitsplatz." },
      { schritt: "Nachsorge", beschreibung: "Weiterhin erreichbar — auch wenn der offizielle Hilfeprozess endet." },
    ],
    fuerFachkraefte: [
      "Frühzeitige Planung des Übergangs gemeinsam mit dem Jugendamt",
      "Enge Abstimmung mit der Agentur für Arbeit",
      "Dokumentation für Kostenträger",
      "Flexible Unterstützung je nach Bedarf",
    ],
    farbe: "#163452",
  },

  "kita-beratung": {
    titel: "Beratung in Kitas",
    untertitel: "Ankernetz Kita-Beratung",
    claim: "Früh erkennen. Gezielt begleiten.",
    einleitung: "Kitas sind oft der erste Ort, an dem Auffälligkeiten sichtbar werden. Unser therapeutisch fundiertes Beratungsangebot stärkt Kita-Fachkräfte im Umgang mit herausfordernden Situationen — und schützt Kinder frühzeitig.",
    zielgruppe: "Kitas & Fachkräfte",
    zielgruppeDetail: "Erzieherinnen und Erzieher, Kita-Leitungen, Fachkräfte in Kindertageseinrichtungen sowie Träger von Kindertageseinrichtungen.",
    leistungen: [
      "Fallbezogene Beratung für Kita-Fachkräfte",
      "Einschätzung von Verhaltensauffälligkeiten",
      "Früherkennung von Kindeswohlgefährdung",
      "Kollegiale Beratung und Supervision",
      "Fortbildungen für Kita-Teams",
      "Elterngespräche gemeinsam mit der Kita",
      "Vermittlung weiterführender Hilfen",
      "Netzwerkarbeit mit Jugendamt und Fachdiensten",
    ],
    besonderheiten: [
      "Direkt vor Ort in der Kita möglich",
      "Therapeutisch fundiert und praxisnah",
      "Ohne bürokratische Hürden",
      "Vertraulich und auf Augenhöhe",
      "Vernetzt mit dem gesamten Ankernetz-System",
    ],
    prozess: [
      { schritt: "Anfrage", beschreibung: "Kita nimmt Kontakt auf — telefonisch oder per E-Mail." },
      { schritt: "Erstgespräch", beschreibung: "Kurzgespräch zur Klärung des Anliegens." },
      { schritt: "Beratung", beschreibung: "Fallbesprechung oder Supervision vor Ort oder online." },
      { schritt: "Maßnahmen", beschreibung: "Gemeinsame Planung konkreter Schritte und Maßnahmen." },
      { schritt: "Vernetzung", beschreibung: "Einbindung weiterer Fachstellen wenn nötig." },
    ],
    fuerFachkraefte: [
      "Unbürokratischer Zugang ohne formellen Auftrag",
      "Unterstützung bei Meldungen ans Jugendamt",
      "Regelmäßige Fortbildungsangebote",
      "Klare Handlungsempfehlungen",
    ],
    farbe: "#1e3d5a",
  },
};

export async function generateStaticParams() {
  return Object.keys(angeboteDaten).map((slug) => ({ slug }));
}

export default async function AngebotPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = angeboteDaten[slug];
  if (!data) notFound();

  return (
    <main>
      {/* HERO */}
      <section
        className="relative min-h-[60vh] flex items-end pb-20 px-6 pt-32"
        style={{
          background: `linear-gradient(160deg, ${data.farbe} 0%, #1e3a5f 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <p className="text-[#4A7FA5] text-sm font-semibold uppercase tracking-widest mb-4">
            {data.untertitel}
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            {data.titel}
          </h1>
          <p className="text-white/60 text-xl md:text-2xl font-light italic">
            {data.claim}
          </p>
        </div>
      </section>

      {/* EINLEITUNG */}
      <section className="py-20 px-6 bg-[#F5F5F7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-[#1D1D1F] leading-relaxed">
            {data.einleitung}
          </p>
        </div>
      </section>

      {/* ZIELGRUPPE + LEISTUNGEN */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4A7FA5] mb-6">Zielgruppe</p>
            <p className="text-2xl font-bold text-[#1A1A2E] mb-4">{data.zielgruppe}</p>
            <p className="text-[#6E6E73] leading-relaxed">{data.zielgruppeDetail}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4A7FA5] mb-6">Leistungen</p>
            <ul className="space-y-3">
              {data.leistungen.map((l) => (
                <li key={l} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A7FA5] flex-shrink-0" />
                  <span className="text-[#1D1D1F]">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BESONDERHEITEN */}
      <section className="py-20 px-6 bg-[#F5F5F7]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4A7FA5] mb-10 text-center">Was uns auszeichnet</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {data.besonderheiten.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="w-8 h-1 bg-[#4A7FA5] mx-auto mb-4 rounded-full" />
                <p className="text-sm text-[#1D1D1F] font-medium leading-snug">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROZESS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4A7FA5] mb-10 text-center">Ablauf</p>
          <div className="space-y-0">
            {data.prozess.map((p, i) => (
              <div key={i} className="flex gap-6 pb-10 relative">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1A1A2E] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < data.prozess.length - 1 && (
                    <div className="w-px flex-1 bg-[#E5E5EA] mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <p className="font-bold text-[#1A1A2E] mb-1">{p.schritt}</p>
                  <p className="text-[#6E6E73]">{p.beschreibung}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FÜR FACHKRÄFTE */}
      <section
        className="py-20 px-6"
        style={{ background: `linear-gradient(135deg, ${data.farbe} 0%, #1e3a5f 100%)` }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4A7FA5] mb-8">Für Jugendämter & Fachkräfte</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.fuerFachkraefte.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A7FA5] flex-shrink-0" />
                <span className="text-white/80">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#F5F5F7] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">Interesse oder Fragen?</h2>
          <p className="text-[#6E6E73] mb-8">
            Sprechen Sie uns direkt an. Wir melden uns schnell und unkompliziert.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/platzanfrage"
              className="px-8 py-3.5 bg-[#1A1A2E] text-white font-semibold rounded-full text-sm hover:bg-[#2a2a3e] transition-colors"
            >
              Platzanfrage stellen
            </Link>
            <Link
              href="/kontakt"
              className="px-8 py-3.5 border border-[#1A1A2E]/20 text-[#1A1A2E] font-medium rounded-full text-sm hover:bg-[#1A1A2E]/5 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
