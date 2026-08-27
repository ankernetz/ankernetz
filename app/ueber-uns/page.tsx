"use client";

import Link from "next/link";
import { useT } from "../i18n/useT";

const TRANS = {
  de: {
    eyebrow: "Ankernetz - Wer wir sind",
    h1a: "Wir sind das Netz,",
    h1b: "das hält.",
    intro: [
      "Ankernetz ist ein Zusammenschluss spezialisierter Angebote der Kinder- und Jugendhilfe in Berlin. Wir verbinden Krisenintervention, therapeutische Begleitung, Wohnen, Diagnostik und soziale Teilhabe - abgestimmt auf die individuellen Bedürfnisse junger Menschen und Familien.",
      "Unser Angebot richtet sich an Kinder und Jugendliche von 0 bis 18 Jahren sowie an Mütter und Väter mit ihren Kindern im Rahmen von Mutter-Kind-Angeboten.",
      "Ziel ist es, Stabilität zu schaffen, Entwicklung zu ermöglichen und verlässliche Perspektiven zu eröffnen.",
    ],
    stats: [
      { zahl: "2015", label: "Gründungsjahr" },
      { zahl: "11",   label: "Angebotsbereiche" },
      { zahl: "24/7", label: "Krisenbereitschaft" },
      { zahl: "Berlin", label: "Unser Standort" },
    ],
    geschichteEyebrow: "Unsere Geschichte",
    geschichteH2: "Entstanden aus der Überzeugung, dass es verlässlicher gehen muss.",
    geschichteTexte: [
      "Ankernetz wurde 2015 gegründet - von Fachkräften, die selbst viele Jahre in der Kinder- und Jugendhilfe gearbeitet haben.",
      "Sie haben erlebt, wie herausfordernd es sein kann, passgenaue Hilfe zu organisieren: Übergänge, fehlende Abstimmung und unterbrochene Beziehungen.",
      "Daraus entstand eine klare Idee: Hilfen so zu gestalten, dass sie aufeinander aufbauen, ineinandergreifen und für junge Menschen nachvollziehbar bleiben.",
      "Heute verbindet Ankernetz verschiedene spezialisierte Angebote - von der Krisenaufnahme über Wohnen bis hin zu therapeutischer Begleitung.",
      "Wege sind kurz, Teams arbeiten eng zusammen und es gibt feste Ansprechpartner.",
      "So entsteht Kontinuität - und ein Rahmen, in dem Kinder und Jugendliche Stabilität und Perspektive entwickeln können.",
    ],
    zeitleiste: [
      { jahr: "2015", ereignis: "Gründung", detail: "Ankernetz startet mit Krisenintervention und erster Wohngruppe." },
      { jahr: "2017", ereignis: "Diagnostik & Clearing", detail: "Aufbau des Diagnostikzentrums - erste umfassende Einschätzungsstelle in Berlin." },
      { jahr: "2018", ereignis: "Psychotherapie", detail: "Eröffnung der Psychotherapiepraxis mit Kassenzulassung für Kinder und Jugendliche." },
      { jahr: "2020", ereignis: "Frühe Hilfen", detail: "Erweiterung auf das Kleinkindbereich - 0 bis 6 Jahre." },
      { jahr: "2022", ereignis: "Ankerkleidung", detail: "Start des spezialisierten Kleidungsangebots nach Störungsbild." },
      { jahr: "2024", ereignis: "11 Angebote", detail: "Das Netzwerk ist vollständig - alle Bereiche von 0 bis 25 Jahren abgedeckt." },
    ],
    missionEyebrow: "Mission",
    missionH3: "Kein Kind fällt durch das Netz.",
    missionTexte: [
      "Wir schaffen Zugänge zu passgenauer Unterstützung - unabhängig von Herkunft, Diagnose oder individuellem Bedarf.",
      "Unser Anspruch ist es, Hilfe so zu organisieren, dass sie rechtzeitig ankommt, ineinandergreift und langfristig trägt.",
    ],
    visionEyebrow: "Vision",
    visionH3: "Ein Netz, das trägt.",
    visionText: "Wir arbeiten daran, eine Kinder- und Jugendhilfe zu gestalten, in der Hilfen ineinandergreifen, Zusammenarbeit selbstverständlich ist und junge Menschen im Mittelpunkt stehen - nicht Strukturen oder Zuständigkeiten.",
    saulen: [
      { titel: "Spezialisierung", text: "Jedes Angebot ist auf spezifische Störungsbilder, Altersgruppen und Bedarfe ausgerichtet. Kein Einheitsangebot, sondern präzise Hilfe." },
      { titel: "Vernetzung",      text: "Alle 11 Bereiche sind intern verzahnt. Übergaben erfolgen ohne Informationsverlust, mit persönlicher Übergabe und Kontinuität." },
      { titel: "Menschlichkeit",  text: "Fachlichkeit ohne Wärme ist wertlos. Jede Begegnung bei Ankernetz ist geprägt von echter Haltung, nicht von Protokoll." },
    ],
    zahlenEyebrow: "Ankernetz in Zahlen",
    zahlen: [
      { zahl: "11",      einheit: "Angebotsbereiche",  text: "Vollständige Abdeckung aller Hilfebedarfe" },
      { zahl: "24/7",   einheit: "Krisenbereitschaft", text: "An 365 Tagen im Jahr erreichbar" },
      { zahl: "0-25",   einheit: "Lebensjahre",        text: "Von Frühe Hilfen bis Übergang Arbeit" },
      { zahl: "100 %",  einheit: "Fachkräfte",         text: "Qualifiziertes Personal in allen Bereichen" },
      { zahl: "< 30",   einheit: "Min. Rückmeldung",   text: "Erste Antwort bei Krisenaufnahmen" },
      { zahl: "SGB VIII", einheit: "Rechtsbasis",      text: "Alle Angebote gesetzlich anerkannt" },
      { zahl: "Berlin", einheit: "Standort",           text: "Zentral im Berliner Hilfesystem verankert" },
      { zahl: "1",      einheit: "Dach",               text: "Ein Träger, ein Verständnis, ein Ziel" },
    ],
    werteEyebrow: "Was uns leitet",
    werteH2: "Unsere Werte",
    werte: [
      { titel: "Menschlichkeit",  text: "Jedes Kind verdient echte Begegnung, Würde und Respekt. Das ist unser Fundament - nicht Protokoll, sondern Haltung." },
      { titel: "Fachlichkeit",    text: "Wir handeln evidenzbasiert, reflektiert und mit hohem professionellen Anspruch. Gute Absicht reicht nicht - es braucht Kompetenz." },
      { titel: "Verlässlichkeit", text: "Jugendämter, Familien und Kinder können sich auf uns verlassen - in der Krise um 3 Uhr nachts genauso wie im Alltag." },
      { titel: "Vernetzung",      text: "Kein Angebot steht allein. Alle Bereiche greifen ineinander. Wir denken Hilfeketten - nicht Einzelmaßnahmen." },
      { titel: "Transparenz",     text: "Offene Kommunikation mit allen Beteiligten. Eltern, Jugendämter und Kinder wissen immer, was passiert und warum." },
      { titel: "Entwicklung",     text: "Wir stehen nie still. Wir lernen aus jedem Fall, jedem Rückmeldung und jeder Forschung - und passen uns an." },
    ],
    ansatzEyebrow: "Wie wir arbeiten",
    ansatzH2: "Anders gedacht. Anders gemacht.",
    ansatzTexte: [
      "Die meisten Träger der Jugendhilfe arbeiten in Silos. Ein Heim hier, eine Therapiepraxis dort, eine Beratungsstelle irgendwo anders - und dazwischen: das Kind, das niemand kennt.",
      "Bei Ankernetz kennen sich die Teams. Übergaben werden persönlich begleitet. Diagnostik informiert die Pädagogik, die Pädagogik informiert die Therapie. Und das Jugendamt hat immer einen verlässlichen Ansprechpartner - über alle Bereiche hinweg.",
      "Unser Ansatz basiert auf traumasensibler Pädagogik, systemischer Begleitung und klarer fachlicher Steuerung. Wir messen uns nicht an Auslastung, sondern an Entwicklung.",
    ],
    ansatzSchritte: [
      { nr: "01", titel: "Systemische Vernetzung",          text: "Alle 11 Angebote sind organisatorisch und fachlich vernetzt. Keine Informationsverluste bei Übergaben." },
      { nr: "02", titel: "Traumasensible Grundhaltung",      text: "Alle Teams sind in traumasensibler Pädagogik ausgebildet. Das ist kein Zusatz - es ist die Basis." },
      { nr: "03", titel: "Störungsbildspezifisch",           text: "Jedes Angebot ist auf konkrete Diagnose- und Bedarfsprofile ausgerichtet. Kein One-size-fits-all." },
      { nr: "04", titel: "Transparente Kommunikation",       text: "Regelmäßige schriftliche Rückmeldungen, offene Falldiskussionen, klare Eskalationswege." },
      { nr: "05", titel: "Qualitätsgesicherte Fachlichkeit", text: "Supervision, Fortbildung und interne Qualitätsprüfungen als Daueraufgabe - nicht als Ausnahme." },
      { nr: "06", titel: "Zielorientierte Arbeit",           text: "Hilfeplanung bedeutet bei uns: messbare Ziele, regelmäßige Überprüfung, ehrliche Rückmeldung." },
    ],
    netzwerkEyebrow: "Alle Angebote",
    netzwerkH2: "Das Ankernetz",
    netzwerkP: "11 Angebotsbereiche. Ein Träger. Ein gemeinsames Ziel: das Beste für das Kind.",
    angebote: [
      { titel: "Krisenintervention",   sub: "24/7 Sofortaufnahme",                 href: "/krisenintervention" },
      { titel: "Psychotherapie",        sub: "Kinder & Jugendliche, Kassensitz",    href: "/psychotherapie" },
      { titel: "Frühe Hilfen",          sub: "0-6 Jahre, Bindung & Entwicklung",   href: "/fruehe-hilfen" },
      { titel: "Therapie & Wohnen",     sub: "Therapeutische Wohngruppen 12-17",   href: "/therapie-wohnen" },
      { titel: "Jugendhilfe",           sub: "Kinderwohngruppen 6-12 Jahre",       href: "/jugendhilfe" },
      { titel: "Diagnostik & Clearing", sub: "Einschätzung & Gutachten",           href: "/diagnostik-clearing" },
      { titel: "Beratung & Prävention", sub: "Niedrigschwellig & online",          href: "/beratung-praevention" },
      { titel: "Beratung in Kitas",     sub: "Fachberatung vor Ort",              href: "/kita-beratung" },
      { titel: "Übergang Arbeit",       sub: "Schule - Beruf",                    href: "/uebergang-arbeit" },
      { titel: "Ankerkleidung",         sub: "Kleidung nach Störungsbild",        href: "/ankerkleidung" },
      { titel: "Versorgung",            sub: "Ausstattung & Bedarfe",             href: "/versorgung" },
    ],
    teamEyebrow: "Wer wir sind",
    teamH2: "Das Team",
    teamRollen: [
      { rolle: "Geschäftsführung",          initialen: "GF", farbe: "#1a3f6f", text: "Verantwortlich für Strategie, Qualitätsentwicklung und die übergreifende Steuerung des Ankernetzes. Direkter Ansprechpartner für Kooperationspartner und Behörden." },
      { rolle: "Fachliche Leitung",          initialen: "FL", farbe: "#6FA3FE", text: "Steuerung der pädagogischen und therapeutischen Qualität aller Angebote. Zuständig für Fallsteuerung, Supervision und interdisziplinäre Koordination." },
      { rolle: "Psychologischer Dienst",     initialen: "PD", farbe: "#FEC274", text: "Diagnostik, Einschätzungen und Psychotherapie für alle Altersgruppen. Fachliche Beratung der pädagogischen Teams in komplexen Fallkonstellationen." },
      { rolle: "Pädagogische Teams",         initialen: "PT", farbe: "#22c55e", text: "Qualifizierte Fachkräfte der Sozialpädagogik, Sozialarbeit und Erziehungswissenschaft in allen Wohngruppen, Krisendiensten und Beratungsangeboten." },
      { rolle: "Verwaltung & Koordination",  initialen: "VK", farbe: "#a78bfa", text: "Belegungs- und Hilfeplankoordination, Finanzmanagement und Kommunikation mit Jugendämtern - Rückgrat der täglichen Betriebsführung." },
      { rolle: "Qualitätsmanagement",        initialen: "QM", farbe: "#6FA3FE", text: "Interne Qualitätssicherung, Dokumentation und Beschwerdemanagement. Verantwortlich für Standards, Evaluationen und Weiterentwicklung der Konzepte." },
    ],
    teamCTAH: "Sie möchten Teil des Ankernetz-Teams werden?",
    teamCTAP: "Wir suchen laufend qualifizierte Fachkräfte für alle Bereiche.",
    teamCTABtn: "Zur Karriereseite →",
    qualEyebrow: "Standards & Regulierung",
    qualH2: "Professionell. Reguliert. Verlässlich.",
    qualP: "Alle Ankernetz-Angebote werden nach den gesetzlichen Anforderungen des SGB VIII betrieben und sind durch die zuständigen Berliner Behörden genehmigt und beaufsichtigt. Regelmäßige interne Qualitätssicherung und externe Prüfungen sichern unsere Standards.",
    qualItems: [
      { titel: "Betriebserlaubnis nach § 45 SGB VIII",      detail: "Für alle stationären und teilstationären Einrichtungen" },
      { titel: "Regelmäßige interne Supervision",            detail: "Wöchentlich für alle pädagogischen Teams" },
      { titel: "Fortlaufende Mitarbeiterfortbildungen",       detail: "Mindestens 40 Stunden pro Jahr und Fachkraft" },
      { titel: "Externe Qualitätsprüfungen",                 detail: "Jährliche Überprüfung durch Landesjugendamt Berlin" },
      { titel: "Beschwerdemanagement nach Standard",          detail: "Transparentes Verfahren für Kinder, Eltern und Fachkräfte" },
      { titel: "Datenschutz nach DSGVO",                     detail: "Vollständige Umsetzung inkl. Datenschutzbeauftragter" },
      { titel: "Traumasensible Qualifikation aller Teams",    detail: "Zertifizierte Grundausbildung als Aufnahmevoraussetzung" },
      { titel: "Dokumentation nach Hilfeplan-Standard",       detail: "Einheitliche, nachvollziehbare Berichtsformate" },
    ],
    standortEyebrow: "Unser Standort",
    standortH2: "Verwurzelt in Berlin.",
    standortTexte: [
      "Ankernetz ist in Berlin beheimatet und im Berliner Hilfesystem fest verankert. Wir kennen die Struktur der Berliner Jugendämter, die Anforderungen des Landesjugendamts und die spezifischen Bedarfe in den verschiedenen Bezirken.",
      "Unsere Einrichtungen sind im gesamten Stadtgebiet erreichbar. Für Kinder aus anderen Bundesländern bieten wir ebenfalls Aufnahmen an - in Absprache mit dem zuständigen Jugendamt und Kostenträger.",
    ],
    standortCTA: "+49 30 22 45 43 22 - Jetzt anrufen",
    standortTabelle: [
      { label: "Adresse",       wert: "Berlin, Deutschland" },
      { label: "Direktnummer",  wert: "+49 (0) 30 22 45 43 22" },
      { label: "E-Mail",        wert: "hilfe@ankernetz.com" },
      { label: "Krisentelefon", wert: "24/7 erreichbar" },
      { label: "Einzugsgebiet", wert: "Alle Berliner Bezirke + bundesweit" },
      { label: "Kostenträger",  wert: "Alle Berliner Jugendämter" },
    ],
    ctaEyebrow: "Jetzt Kontakt aufnehmen",
    ctaH2: "Lernen Sie Ankernetz kennen.",
    ctaP: "Ob Platzanfrage, Kooperation oder einfach ein erstes Gespräch - wir sind erreichbar und freuen uns auf den Austausch.",
    ctaBtn1: "Kontakt aufnehmen",
    ctaBtn2: "Platzanfrage stellen",
  },
  en: {
    eyebrow: "Ankernetz - Who we are",
    h1a: "We are the net",
    h1b: "that holds.",
    intro: [
      "Ankernetz is a network of specialised youth welfare services in Berlin. We bring together crisis intervention, therapeutic support, residential care, diagnostics and social participation - tailored to the individual needs of young people and families.",
      "Our services are for children and young people aged 0 to 18, as well as mothers and fathers with their children within our mother-and-child programmes.",
      "Our goal is to create stability, enable development and open up reliable perspectives.",
    ],
    stats: [
      { zahl: "2015",   label: "Founded" },
      { zahl: "11",     label: "Service areas" },
      { zahl: "24/7",   label: "Crisis readiness" },
      { zahl: "Berlin", label: "Our location" },
    ],
    geschichteEyebrow: "Our history",
    geschichteH2: "Built on the conviction that support must be more reliable.",
    geschichteTexte: [
      "Ankernetz was founded in 2015 - by professionals who had themselves worked in youth welfare for many years.",
      "They experienced first-hand how challenging it can be to organise tailored support: transitions, lack of coordination and broken relationships.",
      "From this emerged a clear idea: to design services that build on one another, interconnect and remain transparent for young people.",
      "Today Ankernetz connects a range of specialised services - from crisis admissions to residential care to therapeutic support.",
      "Pathways are short, teams work closely together and there are dedicated contact persons.",
      "This creates continuity - and a framework in which children and young people can develop stability and a sense of direction.",
    ],
    zeitleiste: [
      { jahr: "2015", ereignis: "Founded",                  detail: "Ankernetz launches with crisis intervention and first residential group." },
      { jahr: "2017", ereignis: "Diagnostics & Clearing",   detail: "Establishment of the diagnostics centre - the first comprehensive assessment unit in Berlin." },
      { jahr: "2018", ereignis: "Psychotherapy",            detail: "Opening of the psychotherapy practice with insurance approval for children and young people." },
      { jahr: "2020", ereignis: "Early Help",               detail: "Expansion into the toddler range - 0 to 6 years." },
      { jahr: "2022", ereignis: "Ankernetz Clothing",          detail: "Launch of the specialised clothing service by clinical profile." },
      { jahr: "2024", ereignis: "11 services",              detail: "The network is complete - all areas from 0 to 25 years covered." },
    ],
    missionEyebrow: "Mission",
    missionH3: "No child falls through the net.",
    missionTexte: [
      "We create access to tailored support - regardless of background, diagnosis or individual need.",
      "Our aim is to organise help so that it arrives in time, interconnects and sustains in the long term.",
    ],
    visionEyebrow: "Vision",
    visionH3: "A net that holds.",
    visionText: "We are working to shape a youth welfare system in which services interconnect, collaboration is a matter of course and young people are at the centre - not structures or responsibilities.",
    saulen: [
      { titel: "Specialisation", text: "Each service is tailored to specific clinical profiles, age groups and needs. Not a one-size-fits-all offer, but precise support." },
      { titel: "Connectivity",   text: "All 11 areas are internally interlinked. Handovers happen without information loss, with personal transfer and continuity." },
      { titel: "Humanity",       text: "Expertise without warmth is worthless. Every encounter at Ankernetz is marked by genuine attitude, not protocol." },
    ],
    zahlenEyebrow: "Ankernetz in numbers",
    zahlen: [
      { zahl: "11",       einheit: "Service areas",    text: "Full coverage of all support needs" },
      { zahl: "24/7",     einheit: "Crisis readiness", text: "Available 365 days a year" },
      { zahl: "0-25",     einheit: "Age range",        text: "From Early Help to transition to work" },
      { zahl: "100 %",    einheit: "Professionals",    text: "Qualified staff in all areas" },
      { zahl: "< 30",     einheit: "Min. response",    text: "First reply for crisis admissions" },
      { zahl: "SGB VIII", einheit: "Legal basis",      text: "All services legally recognised" },
      { zahl: "Berlin",   einheit: "Location",         text: "Firmly anchored in Berlin's support system" },
      { zahl: "1",        einheit: "Umbrella",         text: "One provider, one ethos, one goal" },
    ],
    werteEyebrow: "What guides us",
    werteH2: "Our values",
    werte: [
      { titel: "Humanity",      text: "Every child deserves genuine encounter, dignity and respect. That is our foundation - not protocol, but attitude." },
      { titel: "Expertise",     text: "We act in an evidence-based, reflective way and with high professional standards. Good intentions are not enough - competence is required." },
      { titel: "Reliability",   text: "Youth welfare offices, families and children can count on us - in a crisis at 3am just as much as in everyday life." },
      { titel: "Connectivity",  text: "No service stands alone. All areas interconnect. We think in terms of support chains - not individual measures." },
      { titel: "Transparency",  text: "Open communication with all parties. Parents, youth welfare offices and children always know what is happening and why." },
      { titel: "Development",   text: "We never stand still. We learn from every case, every piece of feedback and every piece of research - and we adapt." },
    ],
    ansatzEyebrow: "How we work",
    ansatzH2: "Thought differently. Done differently.",
    ansatzTexte: [
      "Most youth welfare providers work in silos. A care home here, a therapy practice there, a counselling centre somewhere else - and in between: the child that nobody knows.",
      "At Ankernetz, the teams know each other. Handovers are personally supported. Diagnostics informs the pedagogy, the pedagogy informs the therapy. And the youth welfare office always has a reliable contact person - across all areas.",
      "Our approach is based on trauma-sensitive pedagogy, systemic support and clear professional management. We measure ourselves not by occupancy, but by development.",
    ],
    ansatzSchritte: [
      { nr: "01", titel: "Systemic connectivity",       text: "All 11 services are organisationally and professionally interconnected. No information loss during handovers." },
      { nr: "02", titel: "Trauma-sensitive approach",   text: "All teams are trained in trauma-sensitive pedagogy. This is not an add-on - it is the foundation." },
      { nr: "03", titel: "Profile-specific",            text: "Each service is aligned with concrete diagnostic and needs profiles. No one-size-fits-all." },
      { nr: "04", titel: "Transparent communication",   text: "Regular written updates, open case discussions, clear escalation pathways." },
      { nr: "05", titel: "Quality-assured expertise",   text: "Supervision, training and internal quality reviews as an ongoing task - not an exception." },
      { nr: "06", titel: "Goal-oriented work",          text: "For us, care planning means: measurable goals, regular review, honest feedback." },
    ],
    netzwerkEyebrow: "All services",
    netzwerkH2: "The Ankernetz",
    netzwerkP: "11 service areas. One provider. One shared goal: the best for the child.",
    angebote: [
      { titel: "Crisis Intervention",        sub: "24/7 emergency admission",              href: "/krisenintervention" },
      { titel: "Psychotherapy",               sub: "Children & young people, insured",     href: "/psychotherapie" },
      { titel: "Early Help",                  sub: "0-6 years, bonding & development",    href: "/fruehe-hilfen" },
      { titel: "Therapy & Housing",           sub: "Therapeutic residential groups 12-17", href: "/therapie-wohnen" },
      { titel: "Youth Welfare",               sub: "Children's groups 6-12 yrs.",         href: "/jugendhilfe" },
      { titel: "Diagnostics & Clearing",      sub: "Assessment & reports",                href: "/diagnostik-clearing" },
      { titel: "Counselling & Prevention",    sub: "Low-threshold & online",              href: "/beratung-praevention" },
      { titel: "Daycare Counselling",         sub: "Expert advice on-site",               href: "/kita-beratung" },
      { titel: "Transition to Work",          sub: "School - Career",                     href: "/uebergang-arbeit" },
      { titel: "Ankernetz Clothing",             sub: "Clothing by clinical profile",        href: "/ankerkleidung" },
      { titel: "Care & Supplies",             sub: "Equipment & needs",                   href: "/versorgung" },
    ],
    teamEyebrow: "Who we are",
    teamH2: "The team",
    teamRollen: [
      { rolle: "Management",                  initialen: "GF", farbe: "#1a3f6f", text: "Responsible for strategy, quality development and the overall management of the network. Direct contact for partners and authorities." },
      { rolle: "Clinical leadership",          initialen: "FL", farbe: "#6FA3FE", text: "Overseeing the pedagogical and therapeutic quality of all services. Responsible for case management, supervision and interdisciplinary coordination." },
      { rolle: "Psychology service",           initialen: "PD", farbe: "#FEC274", text: "Diagnostics, assessments and psychotherapy for all age groups. Professional advice for pedagogical teams in complex cases." },
      { rolle: "Pedagogical teams",            initialen: "PT", farbe: "#22c55e", text: "Qualified professionals in social education, social work and educational science across all residential groups, crisis services and counselling programmes." },
      { rolle: "Administration & coordination", initialen: "VK", farbe: "#a78bfa", text: "Occupancy and care plan coordination, financial management and communication with youth welfare offices - the backbone of daily operations." },
      { rolle: "Quality management",           initialen: "QM", farbe: "#6FA3FE", text: "Internal quality assurance, documentation and complaints management. Responsible for standards, evaluations and the development of concepts." },
    ],
    teamCTAH: "Would you like to join the Ankernetz team?",
    teamCTAP: "We are continuously looking for qualified professionals across all areas.",
    teamCTABtn: "View career opportunities →",
    qualEyebrow: "Standards & Regulation",
    qualH2: "Professional. Regulated. Reliable.",
    qualP: "All Ankernetz services operate in accordance with the legal requirements of SGB VIII and are approved and supervised by the responsible Berlin authorities. Regular internal quality assurance and external reviews maintain our standards.",
    qualItems: [
      { titel: "Operating licence under § 45 SGB VIII",    detail: "For all inpatient and part-inpatient facilities" },
      { titel: "Regular internal supervision",              detail: "Weekly for all pedagogical teams" },
      { titel: "Ongoing staff training",                    detail: "At least 40 hours per year per professional" },
      { titel: "External quality reviews",                  detail: "Annual review by the Berlin State Youth Authority" },
      { titel: "Complaints management to standard",         detail: "Transparent procedure for children, parents and professionals" },
      { titel: "Data protection under GDPR",                detail: "Full implementation including a data protection officer" },
      { titel: "Trauma-sensitive qualification for all teams", detail: "Certified basic training as a condition of employment" },
      { titel: "Documentation to care plan standard",       detail: "Uniform, traceable reporting formats" },
    ],
    standortEyebrow: "Our location",
    standortH2: "Rooted in Berlin.",
    standortTexte: [
      "Ankernetz is based in Berlin and firmly anchored in the Berlin support system. We know the structure of Berlin's youth welfare offices, the requirements of the State Youth Authority and the specific needs in the various districts.",
      "Our facilities are accessible throughout the city. We also accept children from other federal states - in coordination with the relevant youth welfare office and funding body.",
    ],
    standortCTA: "+49 30 22 45 43 22 - Call now",
    standortTabelle: [
      { label: "Address",        wert: "Berlin, Germany" },
      { label: "Direct number",  wert: "+49 (0) 30 22 45 43 22" },
      { label: "E-mail",         wert: "hilfe@ankernetz.com" },
      { label: "Crisis line",    wert: "24/7 available" },
      { label: "Service area",   wert: "All Berlin districts + nationwide" },
      { label: "Funding bodies", wert: "All Berlin youth welfare offices" },
    ],
    ctaEyebrow: "Get in touch",
    ctaH2: "Get to know Ankernetz.",
    ctaP: "Whether a placement request, a partnership or simply an initial conversation - we are available and look forward to connecting.",
    ctaBtn1: "Get in touch",
    ctaBtn2: "Request a place",
  },
};

const werteAkzente = ["#6FA3FE", "#FEC274", "#22c55e", "#6FA3FE", "#FEC274", "#22c55e"];
const saulenFarben = ["#6FA3FE", "#FEC274", "#22c55e"];
const angeboteAkzente = ["#ef4444","#6FA3FE","#22c55e","#6FA3FE","#FEC274","#a78bfa","#6FA3FE","#FEC274","#22c55e","#6FA3FE","#FEC274"];

export default function UeberUnsPage() {
  const t = useT(TRANS);

  return (
    <main style={{ overflowX: "hidden", background: "#ffffff" }}>

      {/* HERO */}
      <section style={{
        position: "relative", minHeight: "100vh",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: "25%", right: "10%", width: "500px", height: "500px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(111,163,254,0.12) 0%, transparent 65%)" }} />

        <div className="site-container" style={{ position: "relative", zIndex: 2, paddingBottom: "5rem", paddingTop: "10rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.5rem" }}>
            {t.eyebrow}
          </p>
          <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1.5rem", maxWidth: "18ch" }}>
            {t.h1a}<br />
            <span style={{ color: "#6FA3FE" }}>{t.h1b}</span>
          </h1>
          <div style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.85,
            maxWidth: "52ch", marginBottom: "3.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {t.intro.map((p, i) => (
              <p key={i} style={i === 2 ? { color: "rgba(255,255,255,0.75)", fontWeight: 500 } : undefined}>{p}</p>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
            {t.stats.map(z => (
              <div key={z.label}>
                <p style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)", fontWeight: 800,
                  color: "white", lineHeight: 1, letterSpacing: "-0.02em" }}>{z.zahl}</p>
                <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "0.375rem" }}>{z.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GESCHICHTE */}
      <section style={{ background: "#ffffff", padding: "6rem 0" }}>
        <div className="site-container stack-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>{t.geschichteEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.75rem" }}>
              {t.geschichteH2}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
              {t.geschichteTexte.map((p, i) => (
                <p key={i} style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85 }}>{p}</p>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {t.zeitleiste.map((e, i) => (
              <div key={e.jahr} style={{ display: "flex", gap: "1.5rem", paddingBottom: "1.75rem", position: "relative" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%",
                    background: i === 5 ? "#1a3f6f" : "#f0f4f8",
                    border: `2px solid ${i === 5 ? "#1a3f6f" : "#dde4ee"}`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%",
                      background: i === 5 ? "#6FA3FE" : "#1a3f6f" }} />
                  </div>
                  {i < 5 && <div style={{ width: "2px", flex: 1, background: "#dde4ee", marginTop: "4px" }} />}
                </div>
                <div style={{ paddingTop: "0.375rem", paddingBottom: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.25rem" }}>
                    <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "#6FA3FE" }}>{e.jahr}</span>
                    <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1a3f6f" }}>{e.ereignis}</span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(26,63,111,0.55)", lineHeight: 1.6 }}>{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section style={{ background: "#d8e4f0", padding: "6rem 0" }}>
        <div className="site-container">
          <div className="stack-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
            <div style={{ background: "#1a3f6f", padding: "3rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, opacity: 0.04,
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "28px 28px" }} />
              <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.5rem", position: "relative", zIndex: 1 }}>{t.missionEyebrow}</p>
              <h3 style={{ fontSize: "1.625rem", fontWeight: 800, color: "white",
                letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "1.25rem", position: "relative", zIndex: 1 }}>
                {t.missionH3}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", position: "relative", zIndex: 1 }}>
                {t.missionTexte.map((p, i) => (
                  <p key={i} style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>{p}</p>
                ))}
              </div>
            </div>
            <div style={{ background: "white", padding: "3rem" }}>
              <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.5rem" }}>{t.visionEyebrow}</p>
              <h3 style={{ fontSize: "1.625rem", fontWeight: 800, color: "#1a3f6f",
                letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "1.25rem" }}>
                {t.visionH3}
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.6)", lineHeight: 1.85 }}>{t.visionText}</p>
            </div>
          </div>

          <div className="stack-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginTop: "1.5rem" }}>
            {t.saulen.map((s, i) => (
              <div key={s.titel} style={{ background: "white", padding: "2rem" }}>
                <div style={{ width: "32px", height: "3px", background: saulenFarben[i],
                  marginBottom: "1.25rem", borderRadius: "9999px" }} />
                <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#1a3f6f", marginBottom: "0.75rem" }}>{s.titel}</h4>
                <p style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.6)", lineHeight: 1.75 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZAHLEN */}
      <section style={{ background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 100%)", padding: "5rem 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px" }} />
        <div className="site-container" style={{ position: "relative" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#6FA3FE", marginBottom: "3rem", textAlign: "center" }}>
            {t.zahlenEyebrow}
          </p>
          <div className="stack-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {t.zahlen.map(z => (
              <div key={z.zahl + z.einheit} style={{ textAlign: "center", padding: "1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <p style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", fontWeight: 800,
                  color: "white", letterSpacing: "-0.025em", lineHeight: 1, marginBottom: "0.5rem" }}>{z.zahl}</p>
                <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#6FA3FE",
                  letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{z.einheit}</p>
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>{z.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WERTE */}
      <section style={{ background: "#ffffff", padding: "6rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>{t.werteEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em" }}>{t.werteH2}</h2>
          </div>
          <div className="stack-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {t.werte.map((w, i) => (
              <div key={w.titel} className="bento-card"
                style={{ background: "#f0f4f8", padding: "2rem" }}>
                <div style={{ width: "28px", height: "3px", background: werteAkzente[i],
                  marginBottom: "1.25rem", borderRadius: "9999px" }} />
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#1a3f6f", marginBottom: "0.75rem" }}>{w.titel}</h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.6)", lineHeight: 1.75 }}>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANSATZ */}
      <section style={{ background: "#d8e4f0", padding: "6rem 0" }}>
        <div className="site-container">
          <div className="stack-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>{t.ansatzEyebrow}</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
                letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.75rem" }}>
                {t.ansatzH2}
              </h2>
              {t.ansatzTexte.map((p, i) => (
                <p key={i} style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85, marginBottom: "1.25rem" }}>{p}</p>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {t.ansatzSchritte.map(a => (
                <div key={a.nr} style={{ background: "white", padding: "1.25rem 1.5rem",
                  display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "#6FA3FE",
                    letterSpacing: "0.08em", flexShrink: 0, paddingTop: "2px" }}>{a.nr}</span>
                  <div>
                    <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1a3f6f", marginBottom: "0.25rem" }}>{a.titel}</p>
                    <p style={{ fontSize: "0.8125rem", color: "rgba(26,63,111,0.55)", lineHeight: 1.6 }}>{a.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NETZWERK */}
      <section style={{ background: "#ffffff", padding: "6rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>{t.netzwerkEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em", marginBottom: "0.75rem" }}>{t.netzwerkH2}</h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.5)", maxWidth: "48ch", margin: "0 auto" }}>{t.netzwerkP}</p>
          </div>
          <div className="stack-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px",
            background: "#dde4ee", border: "1px solid #dde4ee" }}>
            {t.angebote.map((a, i) => (
              <Link key={a.href} href={a.href}
                style={{ background: "white", padding: "1.75rem 2rem", textDecoration: "none",
                  display: "block", transition: "background 0.15s ease" }}
                className="angebot-link">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.375rem" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%",
                    background: angeboteAkzente[i], flexShrink: 0 }} />
                  <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1a3f6f" }}>{a.titel}</span>
                </div>
                <p style={{ fontSize: "0.8rem", color: "rgba(26,63,111,0.45)", paddingLeft: "1.5rem" }}>{a.sub}</p>
              </Link>
            ))}
          </div>
          <style>{`.angebot-link:hover { background: #f0f4f8 !important; }`}</style>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ background: "#d8e4f0", padding: "6rem 0" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.75rem" }}>{t.teamEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em" }}>{t.teamH2}</h2>
          </div>
          <div className="stack-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>
            {t.teamRollen.map(r => (
              <div key={r.rolle} style={{ background: "white", padding: "1.75rem",
                display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%",
                  background: r.farbe, display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "white", letterSpacing: "0.04em" }}>{r.initialen}</span>
                </div>
                <div>
                  <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em",
                    textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.35rem" }}>{r.rolle}</p>
                  <p style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.7 }}>{r.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem", background: "#1a3f6f", padding: "2rem",
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "white", marginBottom: "0.375rem" }}>{t.teamCTAH}</p>
              <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>{t.teamCTAP}</p>
            </div>
            <Link href="/karriere" style={{ background: "#6FA3FE", color: "#0b1828",
              padding: "0.75rem 1.5rem", fontWeight: 700, fontSize: "0.8125rem",
              letterSpacing: "0.04em", textTransform: "uppercase", textDecoration: "none",
              whiteSpace: "nowrap", flexShrink: 0 }}>
              {t.teamCTABtn}
            </Link>
          </div>
        </div>
      </section>

      {/* QUALITÄT */}
      <section style={{ background: "#ffffff", padding: "6rem 0" }}>
        <div className="site-container stack-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>{t.qualEyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
              letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.5rem" }}>
              {t.qualH2}
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85 }}>{t.qualP}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {t.qualItems.map((q, i) => (
              <div key={q.titel} style={{ display: "flex", gap: "1rem", padding: "1rem 0",
                borderBottom: i < 7 ? "1px solid #eef2f7" : "none", alignItems: "flex-start" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6FA3FE",
                  flexShrink: 0, marginTop: "0.4rem" }} />
                <div>
                  <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1a3f6f", marginBottom: "0.15rem" }}>{q.titel}</p>
                  <p style={{ fontSize: "0.78rem", color: "rgba(26,63,111,0.45)" }}>{q.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STANDORT */}
      <section style={{ background: "#d8e4f0", padding: "6rem 0" }}>
        <div className="site-container">
          <div className="stack-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>{t.standortEyebrow}</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 800, color: "#1a3f6f",
                letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                {t.standortH2}
              </h2>
              {t.standortTexte.map((p, i) => (
                <p key={i} style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.85, marginBottom: "1.25rem" }}>{p}</p>
              ))}
              <a href="tel:+493022454322" style={{ display: "inline-flex", alignItems: "center", gap: "0.625rem",
                background: "#1a3f6f", color: "white", padding: "0.875rem 1.5rem",
                fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", letterSpacing: "0.04em" }}>
                {t.standortCTA}
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px",
              background: "#dde4ee", border: "1px solid #dde4ee" }}>
              {t.standortTabelle.map(r => (
                <div key={r.label} style={{ background: "white", padding: "1rem 1.5rem",
                  display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8rem", color: "rgba(26,63,111,0.45)", fontWeight: 600, letterSpacing: "0.04em" }}>{r.label}</span>
                  <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1a3f6f" }}>{r.wert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 100%)", padding: "6rem 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px" }} />
        <div className="site-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.5rem" }}>{t.ctaEyebrow}</p>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 800, color: "white",
            letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            {t.ctaH2}
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8,
            maxWidth: "44ch", margin: "0 auto 3rem" }}>
            {t.ctaP}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/kontakt" style={{ background: "white", color: "#1a3f6f",
              padding: "0.875rem 2rem", fontWeight: 700, fontSize: "0.875rem",
              letterSpacing: "0.04em", textTransform: "uppercase", textDecoration: "none" }}>
              {t.ctaBtn1}
            </Link>
            <Link href="/platzanfrage" style={{ border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.7)", padding: "0.875rem 2rem",
              fontWeight: 500, fontSize: "0.875rem", textDecoration: "none" }}>
              {t.ctaBtn2}
            </Link>
            <a href="tel:+493022454322" style={{ border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.7)", padding: "0.875rem 2rem",
              fontWeight: 500, fontSize: "0.875rem", textDecoration: "none" }}>
              +49 30 22 45 43 22
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
