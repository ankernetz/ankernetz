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
    <main style={{ overflowX: "hidden" }}>

      {/* ═══ HERO ═══ */}
      <section
        style={{
          position: "relative",
          minHeight: "62vh",
          display: "flex",
          alignItems: "flex-end",
          paddingBottom: "5rem",
          paddingTop: "8rem",
          background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
        }}
      >
        {/* Dot-Grid */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
        {/* Colour blob */}
        <div style={{
          position: "absolute", top: "10%", right: "8%",
          width: "420px", height: "420px", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(111,163,254,0.12) 0%, transparent 65%)",
        }} />

        <div className="site-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
          {/* Label */}
          <p style={{
            fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.5)",
            marginBottom: "1rem",
          }}>
            {data.untertitel}
          </p>
          <h1 style={{
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800,
            color: "#ffffff", lineHeight: 1.1, letterSpacing: "-0.02em",
            marginBottom: "1rem", maxWidth: "18ch",
          }}>
            {data.titel}
          </h1>
          <p style={{
            fontSize: "clamp(1.05rem, 2vw, 1.35rem)", fontWeight: 300,
            color: "rgba(255,255,255,0.65)", fontStyle: "italic",
          }}>
            {data.claim}
          </p>
        </div>
      </section>

      {/* ═══ EINLEITUNG ═══ */}
      <section style={{ background: "#d8e4f0", padding: "4rem 0" }}>
        <div className="site-container" style={{ maxWidth: "760px" }}>
          <p style={{
            fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
            color: "#1a3f6f", lineHeight: 1.85, fontWeight: 400,
          }}>
            {data.einleitung}
          </p>
        </div>
      </section>

      {/* ═══ ZIELGRUPPE + LEISTUNGEN ═══ */}
      <section style={{ background: "#ffffff", padding: "5rem 0" }}>
        <div className="site-container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "4rem" }}>

          {/* Zielgruppe */}
          <div>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.25rem" }}>
              Zielgruppe
            </p>
            <p style={{ fontSize: "2rem", fontWeight: 700, color: "#1a3f6f", marginBottom: "0.875rem", lineHeight: 1.15 }}>
              {data.zielgruppe}
            </p>
            <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.75 }}>
              {data.zielgruppeDetail}
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.25rem" }}>
              Leistungen
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {data.leistungen.map((l) => (
                <li key={l} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{
                    marginTop: "0.45rem", width: "6px", height: "6px",
                    borderRadius: "50%", background: "#1a3f6f", flexShrink: 0,
                  }} />
                  <span style={{ fontSize: "0.9375rem", color: "#1a3f6f", lineHeight: 1.6 }}>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ BESONDERHEITEN ═══ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <p style={{
            fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#1a3f6f",
            marginBottom: "2.5rem", textAlign: "center",
          }}>
            Was uns auszeichnet
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
            {data.besonderheiten.map((b, i) => (
              <div key={i} className="bento-card" style={{
                background: "#f0f4f8",
                borderRadius: "0.875rem",
                padding: "1.625rem",
                border: "1px solid rgba(26,63,111,0.08)",
              }}>
                <div style={{ width: "2rem", height: "3px", background: i % 2 === 0 ? "#6FA3FE" : "#FEC274", borderRadius: "9999px", marginBottom: "1rem" }} />
                <p style={{ fontSize: "0.875rem", color: "#1a3f6f", fontWeight: 500, lineHeight: 1.55 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROZESS ═══ */}
      <section style={{ background: "#ffffff", padding: "5rem 0" }}>
        <div className="site-container" style={{ maxWidth: "760px" }}>
          <p style={{
            fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#1a3f6f",
            marginBottom: "2.5rem", textAlign: "center",
          }}>
            Ablauf
          </p>
          <div>
            {data.prozess.map((p, i) => (
              <div key={i} style={{ display: "flex", gap: "1.5rem", paddingBottom: i < data.prozess.length - 1 ? "2rem" : 0, position: "relative" }}>
                {/* Line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{
                    width: "2.25rem", height: "2.25rem", borderRadius: "50%",
                    background: "#1a3f6f", color: "white",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.8rem", fontWeight: 700, flexShrink: 0,
                  }}>
                    {i + 1}
                  </div>
                  {i < data.prozess.length - 1 && (
                    <div style={{ width: "1px", flex: 1, background: "rgba(26,63,111,0.15)", marginTop: "0.5rem" }} />
                  )}
                </div>
                <div style={{ paddingBottom: "0.5rem" }}>
                  <p style={{ fontWeight: 700, color: "#1a3f6f", marginBottom: "0.25rem", fontSize: "0.9375rem" }}>{p.schritt}</p>
                  <p style={{ color: "rgba(26,63,111,0.65)", fontSize: "0.9rem", lineHeight: 1.65 }}>{p.beschreibung}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FÜR FACHKRÄFTE ═══ */}
      <section style={{ background: "#d8e4f0", padding: "5rem 0" }}>
        <div className="site-container">
          <p style={{
            fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#1a3f6f", marginBottom: "2rem",
          }}>
            Für Jugendämter &amp; Fachkräfte
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {data.fuerFachkraefte.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <span style={{
                  marginTop: "0.45rem", width: "6px", height: "6px",
                  borderRadius: "50%", background: "#6FA3FE", flexShrink: 0,
                }} />
                <span style={{ fontSize: "0.9375rem", color: "#1a3f6f", lineHeight: 1.65 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ background: "#1a3f6f", padding: "5rem 0", textAlign: "center" }}>
        <div className="site-container" style={{ maxWidth: "620px" }}>
          <h2 style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700,
            color: "#ffffff", marginBottom: "1rem", letterSpacing: "-0.01em",
          }}>
            Interesse oder Fragen?
          </h2>
          <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", marginBottom: "2.25rem", lineHeight: 1.7 }}>
            Sprechen Sie uns direkt an. Wir melden uns schnell und unkompliziert.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/platzanfrage" className="btn btn-primary">
              Platzanfrage stellen
            </Link>
            <Link href="/kontakt" style={{
              fontSize: "0.875rem", fontWeight: 500,
              color: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "9999px",
              padding: "0.5rem 1.25rem",
              textDecoration: "none",
            }}>
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
