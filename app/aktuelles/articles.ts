export interface ArticleSection {
  type: "h2" | "h3" | "p" | "ul" | "highlight";
  content: string | string[];
}

export interface RelatedPage {
  label: string;
  href: string;
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  keywords: string[];
  sections: ArticleSection[];
  relatedPages: RelatedPage[];
}

export const articles: Article[] = [
  {
    slug: "kleidung-kinder-adhs-was-wirklich-hilft",
    title: "Kleidung für Kinder mit ADHS: Was wirklich hilft",
    date: "2026-05-09",
    readTime: "8 Min. Lesezeit",
    excerpt:
      "Kinder mit ADHS erleben Kleidung oft als Reizquelle statt als Selbstverständlichkeit. Etiketten, enge Bündchen und raue Stoffe können Konzentration und Verhalten erheblich beeinflussen. Dieser Artikel erklärt, was sensorische Kleidung leistet und worauf Eltern beim Kauf achten sollten.",
    keywords: [
      "Kleidung ADHS Kinder",
      "ADHS Kleidung",
      "sensorische Kleidung ADHS",
      "ADHS Kleidung Berlin Brandenburg",
      "Kleidung Hyperaktivität Kinder",
    ],
    sections: [
      {
        type: "h2",
        content: "Was ist ADHS und wie beeinflusst es das Kleidungserleben?",
      },
      {
        type: "p",
        content:
          "ADHS — Aufmerksamkeitsdefizit-Hyperaktivitätsstörung — ist eine neurobiologische Entwicklungsstörung, die sich auf Konzentration, Impulskontrolle und Aktivitätsniveau auswirkt. Was viele nicht wissen: Das Gehirn von Kindern mit ADHS verarbeitet sensorische Reize anders. Was für andere Kinder ein harmloser Stofffaden oder eine leicht einschnürende Manschette ist, kann für ein Kind mit ADHS eine konstante Ablenkungsquelle darstellen — und damit das ohnehin anstrengende Aufrechterhalten von Konzentration zusätzlich erschweren.",
      },
      {
        type: "p",
        content:
          "Studien zur sensorischen Verarbeitung bei ADHS zeigen, dass eine erhöhte taktile Sensitivität häufig mit den Kernsymptomen der Störung korreliert. Kleidung ist dabei ein Faktor, der im Alltag — in der Schule, beim Mittagessen, im Unterricht — permanent präsent ist. Die gute Nachricht: Mit der richtigen Kleidungsauswahl lässt sich dieser Stressfaktor deutlich reduzieren.",
      },
      {
        type: "h2",
        content: "Typische Probleme: Was Kinder mit ADHS an Kleidung stört",
      },
      {
        type: "ul",
        content: [
          "Etiketten im Nacken oder an den Seiten, die jucken oder kratzen",
          "Enge Bündchen an Hosen oder Ärmeln, die als Druck wahrgenommen werden",
          "Raue Nähte, insbesondere an Zehen oder Achseln",
          "Schwere oder steife Stoffe, die Bewegungsfreiheit einschränken",
          "Knöpfe, Reißverschlüsse und andere Verschlüsse, die Feinmotorik erfordern",
          "Polyester und synthetische Materialien, die statisch aufladen",
          "Zu enge Schnitte, die das Körpergefühl einengen",
          "Ungewohnte Neukäufe — Kinder mit ADHS bevorzugen oft vertraute Kleidung",
        ],
      },
      {
        type: "h2",
        content: "Was bedeutet sensorische Kleidung?",
      },
      {
        type: "p",
        content:
          "Der Begriff sensorische Kleidung bezeichnet Kleidungsstücke, die gezielt auf die Bedürfnisse von Menschen mit sensorischen Verarbeitungsbesonderheiten ausgelegt sind. Das bedeutet nicht, dass die Kleidung medizinisch zertifiziert sein muss — aber sie wird mit einem anderen Bewusstsein für Material, Schnitt und Verarbeitung entwickelt.",
      },
      {
        type: "highlight",
        content:
          "Sensorische Kleidung für Kinder mit ADHS hat ein Ziel: Sie soll vom Körper wahrgenommen, aber nicht als störend empfunden werden. Das klingt einfach — ist in der Herstellung aber eine handwerkliche Herausforderung.",
      },
      {
        type: "h2",
        content: "Konkrete Merkmale guter ADHS-Kleidung",
      },
      {
        type: "h3",
        content: "1. Maximale Bewegungsfreiheit",
      },
      {
        type: "p",
        content:
          "Kinder mit ADHS sind in Bewegung — das ist keine Unart, das ist Neurobiologie. Kleidung muss diese Bewegung mitmachen. Elastische Schnitte, dehnbare Stoffe (z.B. Bio-Baumwolle mit Elasthan-Anteil) und weite Passformen geben dem Körper den Raum, den er braucht. Enge Jeans oder starre Hosen können das Wohlbefinden erheblich beeinträchtigen.",
      },
      {
        type: "h3",
        content: "2. Druckelemente gezielt einsetzen",
      },
      {
        type: "p",
        content:
          "Interessanterweise reagieren viele Kinder mit ADHS positiv auf leichten, gleichmäßigen Druck auf den Körper — ähnlich wie bei einer Umarmung. Dieses Prinzip nennt sich propriozeptive Stimulation. Kompressionsshirts oder eng anliegende Unterhemden können dazu beitragen, die Körperwahrnehmung zu verbessern und Unruhe zu reduzieren. Wichtig: Der Druck muss gleichmäßig und angenehm sein — nie einschnürend.",
      },
      {
        type: "h3",
        content: "3. Robuste Nähte ohne Kratzen",
      },
      {
        type: "p",
        content:
          "Die Verarbeitung ist entscheidend. Innennähte sollten flach und weich sein, idealerweise als Flatlock-Naht gefertigt, die keine erhabenen Kanten hinterlässt. Zehennähte in Socken sind ein klassischer Auslöser — achten Sie auf nahtlose oder seitlich verlegte Nähte. Etiketten sollten grundsätzlich nicht eingenäht, sondern aufgedruckt oder bereits ab Werk entfernt sein.",
      },
      {
        type: "h2",
        content: "Wie Ankerkleidung das Problem löst",
      },
      {
        type: "p",
        content:
          "Ankerkleidung ist die spezialisierte Kleidungskollektion von Ankernetz, entwickelt für Kinder und Jugendliche im Hilfesystem. Die ADHS-Kollektion greift alle genannten Punkte systematisch auf: reizarme Verarbeitung, weiche Bio-Baumwolle, elastische Schnitte, aufgedruckte statt eingenähte Etiketten und robuste Materialien, die echten Kinderalltag standhalten.",
      },
      {
        type: "p",
        content:
          "Was Ankerkleidung von normaler Kinderkleidung unterscheidet: Jedes Stück wird im Kontext des Störungsbildes entwickelt. Die ADHS-Linie ist nicht für den Massenmarkt konzipiert, sondern für die spezifische Realität von Kindern, die Unterstützung brauchen — und Kleidung, die nicht zur Belastung wird.",
      },
      {
        type: "h2",
        content: "Tipps für den Alltag: Kleidung stressfreier machen",
      },
      {
        type: "ul",
        content: [
          "Etiketten immer herausschneiden oder von vornherein auf Aufdrucke achten",
          "Kinder beim Kauf mitnehmen und selbst testen lassen — jedes Kind ist anders",
          "Bekannte, vertraute Kleidungsstücke in mehrfacher Ausführung kaufen",
          "Legen Sie morgens die Kleidung bereit — reduziert Entscheidungsstress",
          "Auf Gummibänder ohne Plastik-Beschichtung achten (weniger Wärme und Kratzen)",
          "Socken immer ohne Zehennaht wählen oder mit der Naht nach außen tragen",
          "Synthetische Materialien bei taktil empfindlichen Kindern möglichst meiden",
        ],
      },
      {
        type: "h2",
        content: "Schule und Kleidung: Ein unterschätztes Thema",
      },
      {
        type: "p",
        content:
          "In der Schule verbringen Kinder sechs bis acht Stunden täglich — in ihrer Kleidung. Eine Hose, die drückt, oder ein T-Shirt, das kratzt, ist in dieser Zeit ein permanenter Stressfaktor, der kognitive Ressourcen bindet. Fachkräfte und Lehrerinnen in der Jugendhilfe berichten immer wieder, dass einfache Änderungen in der Kleidungsauswahl Auswirkungen auf das Verhalten im Unterricht hatten. Das ist kein Zufall — es ist Sensorik.",
      },
      {
        type: "h2",
        content: "Fazit: Kleidung ist kein Luxusproblem",
      },
      {
        type: "p",
        content:
          "Bei Kindern mit ADHS ist Kleidung kein oberflächliches Thema. Sie ist Teil der Umweltgestaltung, die entweder zur Regulation beiträgt — oder sie erschwert. Die richtige Kleidung schafft keine Therapie, aber sie nimmt eine unnötige Belastungsquelle aus dem Alltag heraus. Das gibt Kindern Raum, sich auf das zu konzentrieren, was wirklich zählt.",
      },
    ],
    relatedPages: [
      { label: "Ankerkleidung ADHS-Kollektion", href: "/ankerkleidung" },
      { label: "Diagnostik & Clearing", href: "/diagnostik-clearing" },
      { label: "Beratung & Prävention", href: "/beratung-praevention" },
    ],
  },

  {
    slug: "was-ist-krisenintervention-leitfaden-eltern",
    title: "Was ist Krisenintervention? Ein Leitfaden für Eltern und Fachkräfte",
    date: "2026-05-09",
    readTime: "10 Min. Lesezeit",
    excerpt:
      "Wenn ein Kind oder Jugendlicher in eine akute Notlage gerät, müssen Entscheidungen schnell und richtig getroffen werden. Dieser Leitfaden erklärt, was Krisenintervention bedeutet, wer sie beantragen kann und was danach passiert — verständlich für Eltern und Fachkräfte.",
    keywords: [
      "Krisenintervention Kinder Berlin",
      "Krisenintervention Jugendliche",
      "Krisenintervention 24/7 Berlin Brandenburg",
      "Jugendliche in Not Berlin",
    ],
    sections: [
      {
        type: "h2",
        content: "Was ist Krisenintervention bei Kindern und Jugendlichen?",
      },
      {
        type: "p",
        content:
          "Krisenintervention ist eine Form der sozialpädagogischen und psychologischen Notfallhilfe für Kinder und Jugendliche, die sich in einer akuten, nicht mehr selbst beherrschbaren Krisensituation befinden. Sie unterscheidet sich von regulärer Jugendhilfe durch ihren unmittelbaren Charakter: Es geht nicht um langfristige Planung, sondern um Sicherheit hier und jetzt.",
      },
      {
        type: "p",
        content:
          "Krisenintervention wird in der Regel für einen begrenzten Zeitraum von wenigen Tagen bis einigen Wochen gewährt. Ziel ist zunächst die Stabilisierung — danach wird gemeinsam mit dem Jugendamt, der Familie und dem Jugendlichen ein Hilfeplan für die Zeit danach entwickelt.",
      },
      {
        type: "h2",
        content: "Wann ist Krisenintervention notwendig?",
      },
      {
        type: "p",
        content:
          "Eine Krisenintervention wird notwendig, wenn ein Kind oder Jugendlicher sich in einer Situation befindet, die eine sofortige Herausnahme aus dem bisherigen Umfeld erfordert oder die akute Gefahr für Leib und Seele darstellt.",
      },
      {
        type: "ul",
        content: [
          "Akute Suizidalität oder Selbstverletzung ohne ambulante Absicherung",
          "Häusliche Gewalt — körperlich, psychisch oder sexuell",
          "Plötzliche Obdachlosigkeit (z.B. nach Konflikt mit Erziehungsberechtigten)",
          "Akute psychische Dekompensation ohne Klinikindikation",
          "Vernachlässigung oder Verwahrlosung mit unmittelbarer Gefährdung",
          "Wegfall der Betreuungsperson durch Inhaftierung, Klinikaufnahme oder Tod",
          "Eskalation in der Herkunftsfamilie mit konkreter Kindeswohlgefährdung",
        ],
      },
      {
        type: "h2",
        content: "Wie läuft eine Krisenintervention ab?",
      },
      {
        type: "p",
        content:
          "Der Ablauf einer Krisenintervention lässt sich grob in vier Phasen unterteilen — von der ersten Kontaktaufnahme bis zur Anschlussplanung:",
      },
      {
        type: "h3",
        content: "Phase 1: Erster Kontakt und Einschätzung",
      },
      {
        type: "p",
        content:
          "Sobald eine Krise gemeldet wird, nimmt der Bereitschaftsdienst des Kriseninterventionsträgers Kontakt auf. Bei Ankernetz erfolgt dieser erste Kontakt rund um die Uhr — auch nachts, an Wochenenden und Feiertagen. In diesem ersten Gespräch wird die Situation eingeschätzt: Liegt tatsächlich eine Krisenindikation vor? Ist eine sofortige Aufnahme notwendig, oder reicht zunächst telefonische Krisenbegleitung?",
      },
      {
        type: "h3",
        content: "Phase 2: Aufnahme und Sicherung",
      },
      {
        type: "p",
        content:
          "Bei bestätigter Krisenindikation erfolgt die Aufnahme in eine Kriseninterventionsstelle. Bei Ankernetz geschieht das in der Regel innerhalb von 2 bis 4 Stunden nach dem ersten Kontakt. Der Jugendliche bekommt ein sicheres Zimmer, Mahlzeiten und einen ersten Ansprechpartner. Ziel dieser Phase ist zunächst nur eines: Sicherheit herstellen.",
      },
      {
        type: "h3",
        content: "Phase 3: Stabilisierung",
      },
      {
        type: "p",
        content:
          "In den folgenden Tagen arbeiten Sozialpädagoginnen und Sozialpädagogen intensiv mit dem Jugendlichen. Es werden Gespräche geführt, die Lebenssituation wird beleuchtet, und erste Hypothesen zur Weiterversorgung entstehen. Parallel dazu wird das zuständige Jugendamt kontaktiert und über die Situation informiert.",
      },
      {
        type: "h3",
        content: "Phase 4: Hilfeplangespräch und Übergang",
      },
      {
        type: "p",
        content:
          "Am Ende der Krisenintervention steht ein Hilfeplangespräch. Alle Beteiligten — Jugendamt, Eltern (sofern es dem Wohl des Kindes dient), der Jugendliche selbst und der Kriseninterventionsträger — entwickeln gemeinsam eine Perspektive. Das kann die Rückkehr nach Hause sein (mit ambulanter Unterstützung), die Aufnahme in eine therapeutische Wohngruppe oder eine andere Hilfeform nach SGB VIII.",
      },
      {
        type: "h2",
        content: "Wer kann Krisenintervention beantragen?",
      },
      {
        type: "ul",
        content: [
          "Jugendämter in Berlin und Brandenburg (§ 42 SGB VIII — Inobhutnahme)",
          "Sorgeberechtigte, wenn sie selbst Hilfe anfordern",
          "Kliniken bei Entlassung ohne gesicherte Anschlussversorgung",
          "Polizei bei Ingewahrsamnahmen oder Kindeswohlgefährdungen",
          "Schulen über Schulsozialdienst bei akuten Krisensituationen",
          "In Ausnahmefällen auch Jugendliche selbst (Selbstmelder)",
        ],
      },
      {
        type: "h2",
        content: "Krisenintervention vs. Psychiatrie: Was ist der Unterschied?",
      },
      {
        type: "p",
        content:
          "Ein häufiges Missverständnis: Krisenintervention und Kinder- und Jugendpsychiatrie (KJP) sind zwei unterschiedliche Hilfesysteme, die sich gegenseitig ergänzen — aber nicht ersetzen.",
      },
      {
        type: "highlight",
        content:
          "Die Psychiatrie behandelt psychiatrische Erkrankungen mit medizinischen Mitteln. Krisenintervention schafft sozialen Schutzraum und pädagogische Begleitung. Beides kann gleichzeitig notwendig sein — oder sequenziell: zuerst Psychiatrie, dann Krisenintervention oder umgekehrt.",
      },
      {
        type: "p",
        content:
          "Eine KJP-Aufnahme ist indiziert, wenn medizinische oder psychiatrische Behandlung notwendig ist — zum Beispiel bei akuter Suizidalität mit konkretem Plan, bei psychotischen Zuständen oder wenn eine medikamentöse Einstellung erforderlich ist. Krisenintervention kann hingegen angeboten werden, wenn die Situation pädagogisch-sozialpädagogisch beherrschbar ist.",
      },
      {
        type: "h2",
        content: "Was passiert nach der Krisenintervention?",
      },
      {
        type: "p",
        content:
          "Das Ziel der Krisenintervention ist nicht, dauerhafter Ersatz für andere Hilfen zu sein — sondern Brücke. Nach der Stabilisierung gibt es verschiedene Wege:",
      },
      {
        type: "ul",
        content: [
          "Rückkehr nach Hause mit ambulanter sozialpädagogischer Begleitung (§ 27 SGB VIII)",
          "Aufnahme in eine therapeutische Wohngruppe (§ 34 SGB VIII)",
          "Aufnahme in eine intensive Einzelbetreuung (§ 35 SGB VIII)",
          "Beginn einer ambulanten Psychotherapie mit Kassensitz",
          "Diagnostik und Clearing zur Einschätzung des weiteren Hilfebedarfs",
        ],
      },
      {
        type: "h2",
        content: "Ankernetz: 24/7 Krisenintervention in Berlin und Brandenburg",
      },
      {
        type: "p",
        content:
          "Ankernetz bietet Krisenintervention für Kinder und Jugendliche von 12 bis 17 Jahren rund um die Uhr an. Unser Bereitschaftsdienst ist an 365 Tagen im Jahr erreichbar — auch über die Feiertage. Wir arbeiten eng mit den Berliner Jugendämtern in allen Bezirken sowie mit Jugendämtern in Brandenburg zusammen.",
      },
      {
        type: "p",
        content:
          "Was Ankernetz von anderen Trägern unterscheidet: Die Krisenintervention ist eingebettet in ein vollständiges Hilfenetz. Nach der Krise müssen Jugendliche nicht in ein anderes System wechseln — wir begleiten sie in die nächste Hilfeform. Therapeutische Wohngruppen, Psychotherapie mit Kassensitz, Diagnostik und Beratung sind alle unter einem Dach verfügbar.",
      },
    ],
    relatedPages: [
      { label: "Krisenintervention", href: "/krisenintervention" },
      { label: "Therapie & Wohnen", href: "/therapie-wohnen" },
      { label: "Jugendhilfe", href: "/jugendhilfe" },
      { label: "Platzanfrage stellen", href: "/platzanfrage" },
    ],
  },

  {
    slug: "sensorische-kleidung-autismus-so-funktioniert-es",
    title: "Sensorische Kleidung bei Autismus: So funktioniert es",
    date: "2026-05-09",
    readTime: "8 Min. Lesezeit",
    excerpt:
      "Für Kinder im Autismus-Spektrum kann Kleidung eine täglich wiederkehrende Stressquelle sein. Nähte, Stoffe und Schnitte, die anderen kaum auffallen, können für autistische Kinder überwältigend wirken. Dieser Artikel erklärt, was sensorische Verarbeitung bedeutet und wie die richtige Kleidung helfen kann.",
    keywords: [
      "sensorische Kleidung Autismus",
      "Kleidung Autismus Kinder",
      "taktile Kleidung Autismus-Spektrum",
      "Kleidung Autismus Spektrum Störung",
      "sensorische Verarbeitung Kleidung",
    ],
    sections: [
      {
        type: "h2",
        content: "Was ist sensorische Verarbeitung?",
      },
      {
        type: "p",
        content:
          "Sensorische Verarbeitung beschreibt, wie das Nervensystem Reize aus der Umwelt aufnimmt, filtert und bewertet. Bei neurotypischen Menschen geschieht dieser Prozess weitgehend automatisch und unbewusst — das Gehirn entscheidet, welche Signale relevant sind und welche ignoriert werden können. Bei Menschen im Autismus-Spektrum ist dieser Filter anders eingestellt.",
      },
      {
        type: "p",
        content:
          "Das bedeutet nicht, dass autistische Menschen mehr oder weniger empfinden — aber die Art, wie Reize verarbeitet und gewichtet werden, unterscheidet sich. Manche Reize, die für andere kaum wahrnehmbar sind, werden als intensiv oder überwältigend erlebt. Andere Reize, die eigentlich wichtig wären, werden kaum registriert. Diese sensorische Besonderheit ist ein zentraler Aspekt der Autismus-Spektrum-Störung (ASS).",
      },
      {
        type: "h2",
        content: "Warum ist Kleidung für autistische Kinder ein Problem?",
      },
      {
        type: "p",
        content:
          "Kleidung ist ein dauerhafter sensorischer Reiz. Sie liegt auf der Haut, sie bewegt sich beim Gehen, sie hat Nähte, Etiketten, Bündchen und Verschlüsse. Für viele autistische Kinder ist das Anziehen eine echte Herausforderung — nicht aus Sturheit oder Verweigerung, sondern weil der sensorische Input der Kleidung für sie schlicht unangenehm oder sogar schmerzhaft ist.",
      },
      {
        type: "highlight",
        content:
          "Schätzungsweise 90 Prozent aller Menschen im Autismus-Spektrum zeigen sensorische Besonderheiten. Kleidungsbezogene sensorische Probleme gehören zu den häufigsten Alltagsthemen, die Familien in der Autismus-Beratung beschäftigen.",
      },
      {
        type: "h2",
        content: "Typische Auslöser: Was autistischen Kindern an Kleidung schwerfällt",
      },
      {
        type: "ul",
        content: [
          "Nähte — insbesondere Zehennähte in Socken und Schulternähte in Shirts",
          "Etiketten aus Papier oder Stoff, die am Nacken oder an den Seiten kratzen",
          "Stoffe, die sich kratzig, rau oder unangenehm anfühlen (z.B. Wolle, raue Baumwolle)",
          "Enge oder einschneidende Bündchen an Hosen, Ärmeln oder Halskragen",
          "Neue Kleidung, die anders riecht oder sich anders anfühlt als bekannte Stücke",
          "Knöpfe, die Druck auf den Bauch ausüben",
          "Reißverschlüsse, die unbehaglich am Hals enden",
          "Kleidung, die sich beim Tragen verschiebt und Körpergefühl verändert",
        ],
      },
      {
        type: "h2",
        content: "Was bedeutet sensorische Kleidung für Autismus-Kinder?",
      },
      {
        type: "p",
        content:
          "Sensorische Kleidung für autistische Kinder ist nicht eine bestimmte Marke oder ein zertifiziertes Produkt — es ist ein Designprinzip. Es geht darum, alle bekannten sensorischen Auslöser zu eliminieren und gleichzeitig Materialien zu verwenden, die angenehme oder neutral empfundene Reize geben.",
      },
      {
        type: "h3",
        content: "Keine störenden Nähte",
      },
      {
        type: "p",
        content:
          "Die wichtigste Eigenschaft sensorischer Kleidung: keine erhabenen Innennähte. Flatlock-Nähte oder nahtlos gestrickte Kleidung eliminieren den häufigsten Auslöser vollständig. Besonders kritisch sind Zehennähte in Socken — hier haben sich seitenverlegte oder vollständig nahtlose Optionen bewährt.",
      },
      {
        type: "h3",
        content: "Weiche Materialien",
      },
      {
        type: "p",
        content:
          "Bio-Baumwolle, Bambusfasern oder Modal sind Materialien, die von den meisten Menschen im Autismus-Spektrum als angenehm empfunden werden. Sie sind weich, atmen gut und verursachen keine statische Aufladung. Synthetische Fasern, Polyester und Mischgewebe mit hohem Kunststoffanteil sind dagegen häufig problematisch.",
      },
      {
        type: "h3",
        content: "Propriozeptive Eingaben: Leichter Druck als Stabilisierung",
      },
      {
        type: "p",
        content:
          "Viele autistische Kinder reagieren positiv auf gleichmäßigen, leichten Druck auf den Körper — ein Phänomen, das Temple Grandin mit ihrer bekannten Druckmaschine beschrieben hat. Kompressionsshirts und eng anliegende Basisschichten können diesen Effekt erzeugen und helfen, die Körperwahrnehmung zu stabilisieren und Überreizung zu reduzieren.",
      },
      {
        type: "h2",
        content: "Ankerkleidung: Die Autismus-Kollektion",
      },
      {
        type: "p",
        content:
          "Die Autismus-Kollektion von Ankerkleidung wurde speziell für die sensorischen Bedürfnisse von Kindern und Jugendlichen im Spektrum entwickelt. Sensory-Shirts werden nahtlos gestrickt, Hosen haben elastische Bündchen ohne Gummidruck-Abdrücke, und alle Etiketten sind aufgedruckt statt eingenäht. Das Kompressionsshirt aus der Kollektion kombiniert leichten Druck mit einem weichen Außenstoff — dezent und alltagstauglich.",
      },
      {
        type: "h2",
        content: "Tipps für Eltern und Fachkräfte",
      },
      {
        type: "ul",
        content: [
          "Kaufen Sie bewusst: Prüfen Sie jedes Stück auf Nähte, Etiketten und Material — bevor Sie kaufen",
          "Tragen Sie neue Kleidung zunächst probeweise an — lassen Sie das Kind entscheiden",
          "Waschen Sie neue Kleidung mehrfach, bevor das Kind sie trägt (weicht Appretur aus dem Stoff)",
          "Bewährte Stücke mehrfach kaufen — Konsistenz ist für autistische Kinder wertvoll",
          "Kommunizieren Sie mit Schulen: manche Schuluniformen sind sensorisch schwierig",
          "Nutzen Sie Fachberatung — Autismus-Ambulanzen und Sozialpädagogen kennen lokale Angebote",
        ],
      },
      {
        type: "h2",
        content: "Kleidung als Teil der Alltagsstruktur",
      },
      {
        type: "p",
        content:
          "Für viele autistische Kinder ist das Anziehen am Morgen eine stressige Transition. Die richtige Kleidung reduziert diesen Stress erheblich — und damit auch die Energie, die in einen guten Start in den Tag investiert werden muss. Das ist kein Luxus. Es ist eine praktische, wirksame Maßnahme zur Alltagsentlastung.",
      },
    ],
    relatedPages: [
      { label: "Ankerkleidung Autismus-Kollektion", href: "/ankerkleidung" },
      { label: "Diagnostik & Clearing", href: "/diagnostik-clearing" },
      { label: "Psychotherapie", href: "/psychotherapie" },
    ],
  },

  {
    slug: "jugendhilfe-berlin-brandenburg-ueberblick",
    title: "Jugendhilfe in Berlin und Brandenburg: Der vollständige Überblick 2026",
    date: "2026-05-09",
    readTime: "12 Min. Lesezeit",
    excerpt:
      "Jugendhilfe ist ein Recht, kein Gnadenakt. Dieser Überblick erklärt, welche Hilfeformen es gibt, wie man sie beantragt, was sie kosten und wie das System in Berlin und Brandenburg konkret funktioniert — für Eltern, Jugendliche und Fachkräfte.",
    keywords: [
      "Jugendhilfe Berlin Brandenburg",
      "stationäre Jugendhilfe Berlin",
      "Jugendhilfe beantragen Berlin",
      "Hilfen zur Erziehung Brandenburg",
      "SGB VIII Berlin Brandenburg",
    ],
    sections: [
      {
        type: "h2",
        content: "Was ist Jugendhilfe?",
      },
      {
        type: "p",
        content:
          "Jugendhilfe ist ein Oberbegriff für alle staatlich finanzierten Unterstützungsleistungen für Kinder, Jugendliche und ihre Familien, die durch das Kinder- und Jugendhilfegesetz (SGB VIII — Achtes Sozialgesetzbuch) geregelt sind. Jugendhilfe ist ein gesetzlicher Anspruch — kein Almosen und keine Strafe. Wer die Voraussetzungen erfüllt, hat Anspruch auf Unterstützung.",
      },
      {
        type: "p",
        content:
          "In Deutschland liegt die Verantwortung für die Jugendhilfe bei den kommunalen Jugendämtern. In Berlin sind das die Jugendämter der zwölf Bezirke — von Mitte bis Reinickendorf. In Brandenburg sind die Landkreise und kreisfreien Städte zuständig: Potsdam-Mittelmark, Dahme-Spreewald, Havelland und alle weiteren Landkreise haben eigene Jugendämter.",
      },
      {
        type: "h2",
        content: "Welche Hilfeformen gibt es?",
      },
      {
        type: "p",
        content:
          "Das SGB VIII kennt verschiedene Hilfeformen, die je nach Bedarf und Situation eingesetzt werden. Die wichtigsten sind:",
      },
      {
        type: "h3",
        content: "§ 27 SGB VIII — Ambulante Hilfen zur Erziehung",
      },
      {
        type: "p",
        content:
          "Ambulante Hilfen finden im Lebensumfeld der Familie statt. Sie umfassen sozialpädagogische Familienhilfe (SPFH), Erziehungsbeistandschaft, soziale Gruppenarbeit und andere niedrigschwellige Angebote. Die Familie bleibt zusammen, erhält aber professionelle Unterstützung. Das ist die häufigste und in der Regel erste Hilfeform.",
      },
      {
        type: "h3",
        content: "§ 34 SGB VIII — Stationäre Heimerziehung",
      },
      {
        type: "p",
        content:
          "Wenn ein Kind oder Jugendlicher nicht mehr im Elternhaus leben kann oder soll, kommt die stationäre Unterbringung in Betracht. Das Kind lebt in einer Wohngruppe oder Einrichtung und besucht von dort aus Schule, Ausbildung oder Therapie. Der Kontakt zur Familie bleibt in der Regel bestehen und wird sozialpädagogisch begleitet.",
      },
      {
        type: "h3",
        content: "§ 35 SGB VIII — Intensive sozialpädagogische Einzelbetreuung",
      },
      {
        type: "p",
        content:
          "Die intensivste Form der stationären Hilfe ist die Einzelbetreuung — ein Jugendlicher wird von einer Fachkraft in einer 1:1-Betreuung begleitet. Diese Hilfeform ist für Jugendliche gedacht, die in Gruppen nicht stabilisiert werden können oder besonders intensive Unterstützung benötigen. Sie ist die kostenintensivste Form und wird nur in klar indizierten Fällen bewilligt.",
      },
      {
        type: "h2",
        content: "Wie beantrage ich Jugendhilfe in Berlin oder Brandenburg?",
      },
      {
        type: "p",
        content:
          "Der erste Schritt ist immer der Kontakt zum zuständigen Jugendamt. Zuständig ist das Jugendamt des Wohnbezirks bzw. des Landkreises, in dem das Kind seinen gewöhnlichen Aufenthalt hat.",
      },
      {
        type: "ul",
        content: [
          "Eltern oder Sorgeberechtigte wenden sich an den Allgemeinen Sozialen Dienst (ASD) des Jugendamts",
          "Ein Erstgespräch findet statt — meist innerhalb weniger Tage",
          "Bei Zustimmung erfolgt eine Hilfeplanung nach § 36 SGB VIII",
          "Im Hilfeplangespräch werden alle Beteiligten einbezogen: Familie, Kind und Fachkräfte",
          "Das Jugendamt entscheidet über Art und Umfang der Hilfe",
          "Bei Einigung wird ein Hilfeplan erstellt und die Hilfe beginnt",
        ],
      },
      {
        type: "h2",
        content: "Unterschiede zwischen Berlin und Brandenburg",
      },
      {
        type: "p",
        content:
          "Berlin ist ein Stadtstaat mit zwölf Bezirken und zwölf Bezirksjugendämtern. Jeder Berliner Bezirk — Mitte, Pankow, Friedrichshain-Kreuzberg, Charlottenburg-Wilmersdorf, Spandau, Steglitz-Zehlendorf, Tempelhof-Schöneberg, Neukölln, Treptow-Köpenick, Marzahn-Hellersdorf, Lichtenberg und Reinickendorf — hat ein eigenes Jugendamt mit eigenen Zuständigkeiten und eigener Verwaltungsstruktur.",
      },
      {
        type: "p",
        content:
          "Brandenburg hingegen ist ein Flächenland mit 14 Landkreisen und vier kreisfreien Städten. Die Landkreise Potsdam-Mittelmark, Dahme-Spreewald, Teltow-Fläming, Havelland, Oberhavel, Märkisch-Oderland, Oder-Spree, Barnim (Verwaltungssitz Eberswalde), Prignitz, Ostprignitz-Ruppin und Uckermark haben jeweils eigene Jugendämter. Die kreisfreien Städte Potsdam, Cottbus, Frankfurt (Oder) und Brandenburg an der Havel sind ebenfalls eigenständige Jugendamtsbezirke.",
      },
      {
        type: "highlight",
        content:
          "Wichtig für die Praxis: Bei einem Umzug über eine Bezirks- oder Landkreisgrenze wechselt die Zuständigkeit. Das zuständige Jugendamt am neuen Wohnort übernimmt dann die Hilfeplanung — in Absprache mit dem abgebenden Amt.",
      },
      {
        type: "h2",
        content: "Welche Träger gibt es?",
      },
      {
        type: "p",
        content:
          "Jugendhilfe wird nicht ausschließlich vom Jugendamt selbst erbracht — in der Praxis führen freie Träger der Jugendhilfe (anerkannte gemeinnützige Organisationen) den größten Teil der Leistungen durch. Die Jugendämter finanzieren und steuern, die freien Träger setzen um. Bekannte freie Träger in Berlin und Brandenburg sind große Verbände wie Diakonie, Caritas, AWO oder Volkssolidarität — aber auch spezialisierte kleinere Träger wie Ankernetz.",
      },
      {
        type: "h2",
        content: "Ankernetz als spezialisierter Träger in Berlin und Brandenburg",
      },
      {
        type: "p",
        content:
          "Ankernetz ist ein anerkannter freier Träger der Kinder- und Jugendhilfe mit Sitz in Berlin und Einzugsgebiet in Berlin und Brandenburg. Wir sind auf komplexe Hilfebedarfe spezialisiert: Krisenintervention, therapeutische Wohngruppen, Diagnostik und Clearing, Psychotherapie mit Kassensitz und Frühe Hilfen. Alle Leistungen werden über das zuständige Jugendamt finanziert — für Familien entstehen keine Kosten.",
      },
      {
        type: "h2",
        content: "Was kostet Jugendhilfe?",
      },
      {
        type: "p",
        content:
          "Für Familien und Jugendliche entstehen bei der Jugendhilfe grundsätzlich keine direkten Kosten. Die Leistungen werden vollständig durch das Jugendamt finanziert. Bei stationären Hilfen gibt es eine gesetzlich geregelte Kostenbeteiligung der Eltern, die sich am Einkommen orientiert — diese ist jedoch in der Praxis oft gering oder wird vollständig erlassen.",
      },
      {
        type: "h2",
        content: "Häufige Missverständnisse zur Jugendhilfe",
      },
      {
        type: "ul",
        content: [
          "\"Jugendhilfe bedeutet, dass das Kind weggegeben wird.\" — Falsch: Die meisten Hilfen sind ambulant und finden zuhause statt.",
          "\"Das Jugendamt ist der Feind.\" — Falsch: Das Jugendamt ist gesetzlich verpflichtet, Familien zu unterstützen, nicht zu bestrafen.",
          "\"Nur bei Verwahrlosung gibt es Jugendhilfe.\" — Falsch: Auch bei Erziehungsschwierigkeiten, psychischen Erkrankungen eines Elternteils oder Armut kann Jugendhilfe beantragt werden.",
          "\"Kinder werden nie wieder zurückgegeben.\" — Falsch: Stationäre Hilfe ist immer zeitlich begrenzt und auf Rückkehr oder Selbstständigkeit ausgerichtet.",
          "\"Ich darf als Elternteil nicht mitbestimmen.\" — Falsch: Eltern haben gesetzlich garantierte Mitwirkungsrechte im Hilfeplangespräch.",
        ],
      },
      {
        type: "h2",
        content: "Weiterführende Unterstützung durch Ankernetz",
      },
      {
        type: "p",
        content:
          "Ankernetz begleitet Familien und Jugendliche in Berlin und Brandenburg durch alle Phasen der Jugendhilfe. Ob es um eine erste Einschätzung geht, eine akute Krisenintervention, eine langfristige stationäre Unterbringung oder den Übergang in ein selbstständiges Leben — wir sind als vollständiges Netz an Ihrer Seite.",
      },
    ],
    relatedPages: [
      { label: "Jugendhilfe", href: "/jugendhilfe" },
      { label: "Krisenintervention", href: "/krisenintervention" },
      { label: "Diagnostik & Clearing", href: "/diagnostik-clearing" },
      { label: "Platzanfrage stellen", href: "/platzanfrage" },
    ],
  },

  {
    slug: "therapeutisches-wohnen-jugendliche-was-es-bedeutet",
    title: "Therapeutisches Wohnen für Jugendliche: Was es bedeutet und wie es hilft",
    date: "2026-05-09",
    readTime: "8 Min. Lesezeit",
    excerpt:
      "Eine therapeutische Wohngruppe ist mehr als ein Heim. Sie ist ein strukturierter Lebensraum, in dem Jugendliche mit schwerwiegenden psychischen Belastungen stabilisiert, begleitet und in Richtung Selbstständigkeit geführt werden. Dieser Artikel erklärt, wie das konkret aussieht.",
    keywords: [
      "therapeutische Wohngruppe Berlin Brandenburg",
      "Therapie Wohnen Jugendliche",
      "therapeutisches Wohnen PTBS Trauma",
      "Wohngruppe Therapie Berlin",
    ],
    sections: [
      {
        type: "h2",
        content: "Was ist therapeutisches Wohnen?",
      },
      {
        type: "p",
        content:
          "Therapeutisches Wohnen bezeichnet eine besondere Form der stationären Jugendhilfe nach § 34 SGB VIII, bei der die pädagogische Begleitung durch eine systematisch integrierte therapeutische Arbeit ergänzt wird. Im Unterschied zu regulären Wohngruppen, die primär sozialpädagogisch ausgerichtet sind, verfügt eine therapeutische Wohngruppe über ein Team, das psychologisches und psychotherapeutisches Know-how direkt in den Alltag integriert.",
      },
      {
        type: "h2",
        content: "Unterschied zur normalen Wohngruppe",
      },
      {
        type: "p",
        content:
          "Eine reguläre Wohngruppe bietet Schutz, Struktur, Beziehungsangebote und pädagogische Begleitung — das ist wertvoll und für viele Jugendliche ausreichend. Aber für Jugendliche mit schweren Traumafolgestörungen, psychischen Erkrankungen oder komplexen Diagnosen reicht das oft nicht aus. Sie brauchen Fachkräfte, die nicht nur pädagogisch reagieren, sondern auch therapeutisch denken und handeln.",
      },
      {
        type: "highlight",
        content:
          "Der Unterschied liegt im konzeptionellen Unterbau: In einer therapeutischen Wohngruppe ist Therapie nicht zusätzlich — sie ist eingewoben in Alltagssituationen, Mahlzeiten, Konflikte und Freizeitgestaltung.",
      },
      {
        type: "h2",
        content: "Wer profitiert von therapeutischem Wohnen?",
      },
      {
        type: "p",
        content:
          "Therapeutisches Wohnen ist indiziert für Jugendliche, bei denen reguläre Jugendhilfe oder ambulante Therapie nicht ausreicht. Typische Zielgruppen sind:",
      },
      {
        type: "ul",
        content: [
          "Jugendliche mit Traumafolgestörungen (PTBS, komplexe Traumatisierung)",
          "Jugendliche nach psychiatrischen Krisen oder Klinikaufenthalten",
          "Jugendliche mit Persönlichkeitsstörungen im Entwicklungsalter",
          "Jugendliche mit Sucht- und psychischen Erkrankungen (Doppeldiagnosen)",
          "Jugendliche nach lang anhaltender Vernachlässigung oder Misshandlung",
          "Jugendliche, die in regulären Wohngruppen nicht stabilisiert werden konnten",
        ],
      },
      {
        type: "h2",
        content: "Ablauf und Alltag in einer therapeutischen Wohngruppe",
      },
      {
        type: "p",
        content:
          "Der Alltag in einer therapeutischen Wohngruppe ist bewusst strukturiert — nicht als Kontrollinstrument, sondern als therapeutisches Mittel. Struktur gibt Sicherheit, und Sicherheit ist die Voraussetzung für jede tiefere Arbeit. Ein typischer Tag umfasst gemeinsame Mahlzeiten, Schule oder Ausbildung, freie Zeit, Einzelgespräche mit Bezugsbetreuern und Gruppenangebote.",
      },
      {
        type: "h2",
        content: "Traumaarbeit: Was konkret passiert",
      },
      {
        type: "p",
        content:
          "Traumaarbeit in der therapeutischen Wohngruppe beginnt nicht mit Traumakonfrontation. Sie beginnt mit Sicherheit. Erst wenn ein Jugendlicher sich sicher fühlt — in der Einrichtung, in Beziehungen, im eigenen Körper — kann tiefere Arbeit beginnen. Das kann Monate dauern. Dieser Prozess ist individuell und wird nicht erzwungen.",
      },
      {
        type: "p",
        content:
          "Methoden der Traumaarbeit in der therapeutischen Wohngruppe umfassen traumasensitive Gesprächsführung im Alltag, Psychoedukation (Jugendliche lernen, was Trauma ist und wie es ihr Verhalten beeinflusst), körperbezogene Ansätze sowie strukturierte Einzelarbeit mit Psychologen oder Psychotherapeuten.",
      },
      {
        type: "h2",
        content: "Wie Therapie integriert wird",
      },
      {
        type: "p",
        content:
          "Bei Ankernetz ist Psychotherapie in die therapeutische Wohngruppe eingebettet: Wir verfügen über einen eigenen kassenärztlichen Sitz. Jugendliche müssen nicht zu externen Praxen pendeln und auf Wartelisten warten — die Therapie findet dort statt, wo der Jugendliche lebt. Das ist ein entscheidender Unterschied: Therapeutische Kontinuität ist gewährleistet.",
      },
      {
        type: "h2",
        content: "Elternarbeit: Die Familie ist nicht außen vor",
      },
      {
        type: "p",
        content:
          "Therapeutisches Wohnen bedeutet nicht, dass die Familie aus dem Leben des Jugendlichen verschwindet. Im Gegenteil: Elternarbeit ist integraler Bestandteil des Konzepts. Eltern werden in die Hilfeplanung einbezogen, zu Familiengesprächen eingeladen und bei Besuchen begleitet. Das Ziel ist, die Beziehung zwischen Kind und Familie zu klären — nicht zu ersetzen.",
      },
      {
        type: "h2",
        content: "Übergang nach dem Aufenthalt",
      },
      {
        type: "p",
        content:
          "Therapeutisches Wohnen ist keine Dauerlösung. Es ist eine Phase — oft eine der wichtigsten im Leben eines Jugendlichen. Am Ende steht der Übergang: in eine ambulant betreute Wohnform, zurück in die Familie, in eine eigene Wohnung oder in eine Ausbildung. Dieser Übergang wird bei Ankernetz frühzeitig geplant und aktiv begleitet. Unser Angebot \"Übergang Arbeit\" setzt genau hier an.",
      },
      {
        type: "h2",
        content: "Ankernetz: Therapeutische Wohngruppen in Berlin und Brandenburg",
      },
      {
        type: "p",
        content:
          "Ankernetz betreibt therapeutische Wohngruppen für Jugendliche von 12 bis 17 Jahren in Berlin und im angrenzenden Brandenburg. Unser Konzept verbindet sozialpädagogische Begleitung, integrierte Psychotherapie mit Kassensitz, Traumaarbeit und einen klaren Fokus auf Selbstwirksamkeit und Zukunft. Platzanfragen können direkt über das Jugendamt oder unsere Website gestellt werden.",
      },
    ],
    relatedPages: [
      { label: "Therapie & Wohnen", href: "/therapie-wohnen" },
      { label: "Psychotherapie", href: "/psychotherapie" },
      { label: "Krisenintervention", href: "/krisenintervention" },
      { label: "Platzanfrage stellen", href: "/platzanfrage" },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
