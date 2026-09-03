export interface LexEntry { term: string; def: string; href?: string; }
export interface LexLetter { letter: string; entries: LexEntry[]; }

export const lexikonBuchstaben: LexLetter[] = [
  {
    letter: "A",
    entries: [
      { term: "ADHS", def: "Aufmerksamkeitsdefizit-Hyperaktivitätsstörung. Eine neurobiologische Entwicklungsstörung, die Konzentration, Impulskontrolle und Aktivitätsniveau beeinflusst. Wird fachärztlich oder psychologisch diagnostiziert und kann pädagogisch, therapeutisch oder medikamentös begleitet werden." },
      { term: "Angststörung", def: "Eine psychische Erkrankung, bei der Angst unverhältnismäßig stark, häufig oder ohne erkennbaren Auslöser auftritt und den Alltag spürbar einschränkt. Bei Kindern und Jugendlichen häufig behandelbar mit Verhaltenstherapie oder spieltherapeutischen Methoden." },
      { term: "Ambulante Hilfe", def: "Unterstützung, die im gewohnten Lebensumfeld der Familie stattfindet, etwa durch sozialpädagogische Familienhilfe oder Erziehungsbeistandschaft. Die Familie bleibt zusammen, erhält aber professionelle Begleitung zuhause." },
      { term: "Ankerkleidung", def: "Die spezialisierte Kleidungskollektion von Ankernetz für Kinder und Jugendliche im Hilfesystem, entwickelt nach Störungsbild - unter anderem für ADHS und Autismus-Spektrum, ohne kratzige Nähte oder eingenähte Etiketten.", href: "/ankerkleidung" },
      { term: "ASD", def: "Allgemeiner Sozialer Dienst. Die erste Anlaufstelle innerhalb des Jugendamts, an die sich Familien bei Bedarf wenden. Der ASD führt Erstgespräche, schätzt den Hilfebedarf ein und koordiniert die Hilfeplanung." },
      { term: "Autismus-Spektrum-Störung (ASS)", def: "Eine neurologische Entwicklungsbesonderheit, die sich unter anderem in sozialer Kommunikation, Interessensfokussierung und sensorischer Verarbeitung zeigt - in sehr unterschiedlicher Ausprägung von Person zu Person." },
    ],
  },
  {
    letter: "B",
    entries: [
      { term: "Beistandschaft", def: "Eine gesetzliche Unterstützung für Elternteile bei der Durchsetzung von Unterhalts- oder Vaterschaftsfragen, eingerichtet durch das Jugendamt auf Antrag. Nicht zu verwechseln mit Vormundschaft, die die elterliche Sorge vollständig betrifft." },
      { term: "BGB (Bürgerliches Gesetzbuch)", def: "Regelt unter anderem Sorgerecht, Umgangsrecht und Vormundschaft - die zivilrechtliche Grundlage neben dem SGB VIII, wenn es um die rechtliche Beziehung zwischen Eltern und Kindern geht." },
      { term: "Betriebserlaubnis", def: "Die behördliche Genehmigung, die eine Einrichtung der Kinder- und Jugendhilfe benötigt, um Kinder und Jugendliche stationär betreuen zu dürfen. Sie wird nach Prüfung von Konzept, Personal und Räumlichkeiten erteilt und regelmäßig überprüft." },
      { term: "Bezugsbetreuung", def: "Ein pädagogisches Prinzip, bei dem einer Fachkraft die besondere Verantwortung für ein einzelnes Kind oder einen Jugendlichen zugeordnet wird - für verlässliche Beziehung und klare Ansprechbarkeit im Alltag einer Wohngruppe." },
      { term: "Bindungsstörung", def: "Entsteht meist, wenn ein Kind in den ersten Lebensjahren keine verlässliche, feinfühlige Bezugsperson hatte. Zeigt sich in auffälligem Bindungs- und Beziehungsverhalten und wird mit bindungsorientierten Methoden wie EPB nach Brisch oder PCIT bearbeitet." },
      { term: "Bundeskinderschutzgesetz (BKiSchG)", def: "Ein deutsches Bundesgesetz von 2012, das Kinderschutz als durchgängige Aufgabe von Jugendhilfe, Gesundheitswesen und Justiz verankert - unter anderem mit verbindlichen Vorgaben für Frühe Hilfen und die Zusammenarbeit verschiedener Institutionen." },
    ],
  },
  {
    letter: "C",
    entries: [
      { term: "Case Management", def: "Die systematische Steuerung und Koordination aller an einer Hilfe beteiligten Personen und Institutionen - Jugendamt, Familie, Träger, Schule, Therapie - mit dem Ziel, dass Hilfen ineinandergreifen statt sich zu überschneiden oder zu widersprechen." },
      { term: "Clearing", def: "Ein strukturiertes Verfahren zur fachlichen Einschätzung der Situation eines Kindes oder Jugendlichen, meist verbunden mit Diagnostik. Klärt, welche Hilfeform tatsächlich passt, bevor eine Entscheidung getroffen wird.", href: "/diagnostik-clearing" },
    ],
  },
  {
    letter: "D",
    entries: [
      { term: "Deeskalation", def: "Methoden, mit denen Fachkräfte eine sich zuspitzende Krisensituation beruhigen, bevor sie eskaliert - durch Sprache, Körperhaltung, Distanz und Ruhe statt Konfrontation. Fester Bestandteil der Ausbildung in Krisenintervention und Wohngruppen." },
      { term: "Deprivation", def: "Der Mangel an notwendigen Reizen, Zuwendung oder Fürsorge in der kindlichen Entwicklung, etwa durch Vernachlässigung. Kann zu Entwicklungsverzögerungen und Bindungsstörungen führen." },
      { term: "Diagnostik", def: "Die fachliche Abklärung einer Fragestellung mit standardisierten Verfahren - etwa bei Verdacht auf ADHS, Autismus, Trauma oder Entwicklungsverzögerung. Ergebnis ist ein Gutachten mit Testbefunden und Empfehlungen.", href: "/diagnostik-clearing" },
      { term: "Dissoziation", def: "Ein psychischer Schutzmechanismus, bei dem Wahrnehmung, Gedächtnis oder Identitätserleben zeitweise abgespalten werden - häufig als Reaktion auf traumatische Erfahrungen." },
      { term: "DSGVO (Datenschutz-Grundverordnung)", def: "Das EU-weite Gesetz zum Schutz personenbezogener Daten. Für die Jugendhilfe besonders relevant, da hochsensible Daten über Kinder und Familien verarbeitet werden - Weitergabe an Dritte ist nur mit Einwilligung oder gesetzlicher Grundlage zulässig." },
    ],
  },
  {
    letter: "E",
    entries: [
      { term: "Empowerment", def: "Ein fachlicher Ansatz, der Menschen dabei unterstützt, eigene Stärken und Handlungsfähigkeit (wieder-)zuentdecken, statt sie nur zu versorgen. In der Jugendhilfe zentral für die Arbeit mit Jugendlichen auf dem Weg zur Selbstständigkeit." },
      { term: "Eingliederungshilfe", def: "Unterstützung für Menschen mit Behinderung zur Teilhabe am gesellschaftlichen Leben, heute vor allem im SGB IX geregelt. Von der Jugendhilfe (SGB VIII) rechtlich getrennt, kann aber bei Kindern mit Behinderung parallel greifen." },
      { term: "Erziehungsbeistandschaft", def: "Eine ambulante Hilfe nach § 30 SGB VIII, bei der ein Erziehungsbeistand ein einzelnes Kind oder einen Jugendlichen individuell begleitet - etwa bei der Verselbstständigung oder in Konflikten mit den Eltern." },
      { term: "Ergotherapie", def: "Eine Therapieform, die Alltagsfähigkeiten, Feinmotorik und sensorische Verarbeitung fördert - häufig ergänzend eingesetzt bei ADHS, Autismus-Spektrum-Störung oder Entwicklungsverzögerungen." },
      { term: "Erziehungsberatung", def: "Kostenlose, niedrigschwellige Beratung für Eltern und Familien bei Erziehungsfragen, geregelt nach § 28 SGB VIII. Kein Antrag, keine Diagnose nötig.", href: "/beratung-praevention" },
    ],
  },
  {
    letter: "F",
    entries: [
      { term: "Fachaufsicht", def: "Die behördliche Kontrolle darüber, ob eine Einrichtung der Jugendhilfe fachlich angemessen arbeitet - unabhängig von der wirtschaftlichen Trägerschaft. Wird meist vom Landesjugendamt wahrgenommen." },
      { term: "Flatlock-Naht", def: "Eine flach vernähte Naht ohne erhabene Kante, die auf der Haut nicht als Reiz wahrgenommen wird. Zentrales Verarbeitungsmerkmal von Ankerkleidung für Kinder mit sensorischer Überempfindlichkeit.", href: "/ankerkleidung" },
      { term: "Fallmanagement", def: "Die laufende, fallbezogene Steuerung einer Hilfe durch die zuständige Fachkraft im Jugendamt - von der Erstprüfung bis zur Beendigung der Maßnahme." },
      { term: "Freier Träger", def: "Eine anerkannte, meist gemeinnützige Organisation, die im Auftrag und mit Finanzierung des Jugendamts konkrete Hilfen durchführt. Jugendämter steuern und finanzieren, freie Träger wie Ankernetz setzen die Hilfe im Alltag um." },
      { term: "Frühe Hilfen", def: "Präventive und akut-schützende Angebote für Familien mit sehr jungen Kindern, meist 0 bis 6 Jahre - von Hausbesuchen bis zu speziell geschulten Schutzpflegestellen bei akuter Kindeswohlgefährdung.", href: "/fruehe-hilfen" },
    ],
  },
  {
    letter: "G",
    entries: [
      { term: "Genogramm", def: "Eine grafische Darstellung der Familienstruktur über mehrere Generationen, genutzt in Diagnostik und Beratung, um Beziehungsmuster, Belastungen und Ressourcen einer Familie sichtbar zu machen." },
      { term: "gGmbH (gemeinnützige GmbH)", def: "Eine Rechtsform für Organisationen, die gemeinnützige Zwecke verfolgen und Gewinne nicht an Gesellschafter ausschütten, sondern in den Organisationszweck reinvestieren. Ankernetz ist als gGmbH organisiert." },
      { term: "Gefährdungseinschätzung", def: "Die strukturierte Prüfung, ob und wie stark ein Kind gefährdet ist, verpflichtend nach § 8a SGB VIII bei entsprechenden Anhaltspunkten. Grundlage für die Entscheidung über weitere Schritte." },
      { term: "Gemeinnützigkeit", def: "Ein steuerlicher und rechtlicher Status für Organisationen, die im Interesse der Allgemeinheit tätig sind, keine Gewinne an Eigentümer ausschütten und diese stattdessen in den Organisationszweck reinvestieren." },
    ],
  },
  {
    letter: "H",
    entries: [
      { term: "Heilpädagogik", def: "Eine pädagogische Fachrichtung, die Kinder und Jugendliche mit Entwicklungsbesonderheiten oder Behinderung gezielt fördert - eng verwandt mit, aber nicht identisch mit klassischer Sozialpädagogik." },
      { term: "Heimerziehung", def: "Die Unterbringung eines Kindes oder Jugendlichen in einer Wohngruppe oder Einrichtung nach § 34 SGB VIII, wenn ein Verbleib im Elternhaus nicht möglich oder nicht im Sinne des Kindeswohls ist." },
      { term: "Hilfe zur Erziehung", def: "Der Oberbegriff für die im SGB VIII vorgesehenen Unterstützungsleistungen für Familien - von ambulanter Familienhilfe bis zur stationären Unterbringung, je nach Bedarf." },
      { term: "Hilfeplan", def: "Die schriftliche Vereinbarung nach § 36 SGB VIII, die festlegt, welche Unterstützung eine Familie oder ein Kind erhält und mit welchem Ziel. Wird regelmäßig überprüft und angepasst." },
      { term: "Hilfeplangespräch", def: "Das Gespräch, in dem der Hilfeplan entsteht - unter Beteiligung von Jugendamt, Familie, Kind bzw. Jugendlichem und gegebenenfalls dem Träger der Hilfe." },
    ],
  },
  {
    letter: "I",
    entries: [
      { term: "Inklusion", def: "Das gesellschaftliche Ziel, dass alle Menschen unabhängig von Behinderung, Herkunft oder Besonderheit gleichberechtigt teilhaben können - ein Leitprinzip moderner Pädagogik, das über bloße Integration hinausgeht." },
      { term: "Inobhutnahme", def: "Der vorübergehende, sofortige Schutz eines Kindes oder Jugendlichen durch das Jugendamt nach § 42 SGB VIII, ohne vorherige gerichtliche Entscheidung - bei dringender Gefahr. Immer zeitlich begrenzt." },
      { term: "Intensive sozialpädagogische Einzelbetreuung", def: "Die intensivste Form stationärer Jugendhilfe nach § 35 SGB VIII: 1:1-Betreuung durch eine Fachkraft, für Jugendliche, die in einer regulären Gruppe nicht stabilisiert werden können." },
    ],
  },
  {
    letter: "J",
    entries: [
      { term: "Jugendamt", def: "Die kommunale Behörde, die für die Umsetzung der Kinder- und Jugendhilfe zuständig ist. Prüft Hilfebedarfe, bewilligt Leistungen und arbeitet mit freien Trägern zusammen." },
      { term: "Jugendhilfe", def: "Der Sammelbegriff für alle staatlich geregelten Unterstützungsleistungen für Kinder, Jugendliche und Familien nach dem SGB VIII - ein gesetzlicher Anspruch, kein Almosen.", href: "/jugendhilfe" },
      { term: "Jugendhilfeausschuss", def: "Ein Gremium aus Politik, Verwaltung und freien Trägern, das über grundsätzliche Fragen der Jugendhilfeplanung auf kommunaler Ebene mitentscheidet." },
      { term: "Jugendschutzgesetz (JuSchG)", def: "Ein eigenständiges Gesetz, das den Schutz von Kindern und Jugendlichen in der Öffentlichkeit regelt - etwa Ausgehzeiten, Alkohol- und Mediennutzung. Nicht zu verwechseln mit der Kinder- und Jugendhilfe nach SGB VIII, die Unterstützungsleistungen regelt." },
      { term: "Jugendwohlfahrt", def: "Der österreichische Begriff für die Kinder- und Jugendhilfe. Anders als in Deutschland ist sie in Österreich Landessache - jedes Bundesland hat ein eigenes Jugendwohlfahrtsgesetz." },
    ],
  },
  {
    letter: "K",
    entries: [
      { term: "Kanton", def: "Die staatliche Verwaltungseinheit der Schweiz, vergleichbar mit einem deutschen Bundesland. Kindesschutz und Jugendhilfe sind in der Schweiz kantonal geregelt - es gibt keine bundesweit einheitliche Zuständigkeit." },
      { term: "Kassensitz", def: "Die Zulassung eines Therapeuten, direkt mit den gesetzlichen Krankenkassen abzurechnen. Ohne Kassensitz muss Therapie privat bezahlt oder über ein Erstattungsverfahren beantragt werden.", href: "/psychotherapie" },
      { term: "KESB", def: "Kindes- und Erwachsenenschutzbehörde. Die Schweizer Fachbehörde, die über Kindesschutzmaßnahmen entscheidet - kantonal organisiert, es gibt keine bundesweit einheitliche Schweizer Jugendhilfebehörde." },
      { term: "Kindeswohl", def: "Der zentrale Maßstab des deutschen Kinder- und Jugendhilferechts: die körperliche, geistige und seelische Entwicklung eines Kindes soll bestmöglich geschützt und gefördert werden." },
      { term: "Kindeswohlgefährdung", def: "Eine erhebliche Gefährdung der Entwicklung eines Kindes durch Vernachlässigung, Misshandlung oder andere Umstände, wenn die Eltern nicht bereit oder in der Lage sind, die Gefahr abzuwenden. Zentral für § 8a SGB VIII." },
      { term: "Kompressionskleidung", def: "Kleidung mit leichtem, gleichmäßigem Druck auf den Körper (propriozeptive Stimulation) - hilft manchen Kindern mit ADHS oder im Autismus-Spektrum, die eigene Körperwahrnehmung zu stabilisieren und Unruhe zu reduzieren.", href: "/ankerkleidung" },
      { term: "Kita-Fachberatung", def: "Fachliche Unterstützung für Erzieherinnen und Erzieher bei herausfordernden Situationen im Alltag - Fallberatung, Supervision, Fortbildung, Einschätzung bei Verdacht auf Kindeswohlgefährdung.", href: "/kita-beratung" },
      { term: "Krisenintervention", def: "Sozialpädagogische Notfallhilfe für Kinder und Jugendliche in akuter, nicht mehr selbst beherrschbarer Krisensituation. Zeitlich begrenzt, Ziel ist zunächst Stabilisierung.", href: "/krisenintervention" },
    ],
  },
  {
    letter: "L",
    entries: [
      { term: "Landesjugendamt", def: "Die überörtliche Behörde eines Bundeslandes, die unter anderem Betriebserlaubnisse für Einrichtungen erteilt und die fachliche Qualität der Jugendhilfe im Land beaufsichtigt." },
    ],
  },
  {
    letter: "M",
    entries: [
      { term: "Mitwirkungsrecht", def: "Das gesetzlich verankerte Recht von Eltern und - altersgerecht - auch von Kindern und Jugendlichen, an Entscheidungen über die eigene Hilfe beteiligt zu werden, statt nur informiert zu werden." },
      { term: "Mündigkeit", def: "Umgangssprachlich oft für Volljährigkeit (18 Jahre) verwendet. Beendet nicht automatisch den Anspruch auf Jugendhilfe - Unterstützung ist auch für junge Volljährige bis 21 oder in Einzelfällen 27 Jahren möglich." },
    ],
  },
  {
    letter: "N",
    entries: [
      { term: "Niedrigschwellig", def: "Beschreibt Angebote, die ohne Antrag, Überweisung oder große formale Hürden in Anspruch genommen werden können - etwa die kostenlose Erstberatung." },
    ],
  },
  {
    letter: "P",
    entries: [
      { term: "Partizipation", def: "Die aktive Beteiligung von Kindern und Jugendlichen an Entscheidungen, die sie selbst betreffen - ein zentrales Qualitätsmerkmal moderner Jugendhilfe." },
      { term: "Pflegefamilie", def: "Eine Familie, die ein Kind im Rahmen der Vollzeitpflege (§ 33 SGB VIII) dauerhaft oder für längere Zeit privat aufnimmt, wenn die Herkunftsfamilie das Kind nicht ausreichend versorgen kann." },
      { term: "Propriozeption", def: "Die Wahrnehmung des eigenen Körpers im Raum - Lage, Bewegung, Druck. Bei manchen Kindern mit ADHS oder Autismus-Spektrum-Störung wirkt gezielter, gleichmäßiger Druck (z.B. durch Kompressionskleidung) beruhigend und stabilisierend." },
      { term: "Psychoedukation", def: "Die verständliche Vermittlung von Wissen über eine Diagnose oder Belastung an Kind, Jugendlichen oder Familie - etwa was Trauma ist und wie es das eigene Verhalten beeinflusst. Fester Bestandteil von Traumaarbeit und Therapie." },
      { term: "Psychotherapie", def: "Ein längerer, strukturierter Behandlungsprozess bei einer diagnostizierten psychischen Erkrankung, durchgeführt von approbierten Therapeutinnen und Therapeuten - bei Kassensitz ohne Privatkosten für Familien.", href: "/psychotherapie" },
      { term: "PTBS", def: "Posttraumatische Belastungsstörung. Eine spezifische psychische Erkrankung nach traumatischen Erlebnissen, mit Symptomen wie Wiedererleben, Vermeidungsverhalten und innerer Anspannung." },
    ],
  },
  {
    letter: "R",
    entries: [
      { term: "Regulationsstörung", def: "Eine Schwierigkeit, eigene Emotionen, Aufmerksamkeit oder Körperzustände (Schlaf, Essen, Erregung) angemessen zu steuern - häufig bei sehr jungen Kindern beobachtet und ein zentrales Thema der Frühen Hilfen." },
      { term: "Reizüberempfindlichkeit", def: "Eine erhöhte Empfindlichkeit gegenüber sensorischen Reizen wie Geräuschen, Licht oder Berührung - häufig bei ADHS und Autismus-Spektrum-Störung. Grundlage für die Entwicklung von Ankerkleidung." },
      { term: "Resilienz", def: "Die psychische Widerstandsfähigkeit, mit belastenden Lebensumständen umzugehen, ohne dauerhaften Schaden zu nehmen. Ein zentrales Förderziel in Beratung, Prävention und pädagogischer Arbeit." },
      { term: "Ressourcenorientierung", def: "Ein fachlicher Ansatz, der bewusst nicht nur Probleme und Defizite in den Blick nimmt, sondern gezielt die Stärken und Fähigkeiten eines Kindes oder einer Familie als Ausgangspunkt für Veränderung nutzt." },
      { term: "Rückführung", def: "Die Rückkehr eines Kindes aus einer stationären Unterbringung in die Herkunftsfamilie, wenn die Gründe für die Fremdunterbringung nicht mehr bestehen. Zentrales Ziel vieler Hilfeformen, wo es dem Kindeswohl entspricht." },
    ],
  },
  {
    letter: "S",
    entries: [
      { term: "Schutzauftrag", def: "Die gesetzliche Pflicht aus § 8a SGB VIII für Jugendämter und Fachkräfte, bei Anhaltspunkten für eine Kindeswohlgefährdung systematisch das Risiko einzuschätzen und geeignete Schritte einzuleiten." },
      { term: "Schutzkonzept", def: "Das schriftlich festgelegte Regelwerk einer Einrichtung zur Prävention von Gewalt und Grenzverletzungen - Verhaltenskodex, Beschwerdewege, Präventionsmaßnahmen für alle Mitarbeitenden." },
      { term: "Schutzpflegestelle", def: "Eine speziell geschulte Übergangslösung für sehr junge Kinder bei akuter Kindeswohlgefährdung - keine normale Pflegefamilie, sondern fachlich intensiv begleitet, mit dem Ziel der Rückführung sobald möglich." },
      { term: "Selbstzahler", def: "Eine Person oder Familie, die eine Leistung ohne Kostenübernahme durch Jugendamt oder Krankenkasse selbst finanziert - relevant vor allem bei Anfragen aus dem Ausland, wo keine automatische Finanzierung greift." },
      { term: "Sensorische Integration", def: "Die Fähigkeit des Nervensystems, Reize aus der Umwelt aufzunehmen, zu verarbeiten und angemessen darauf zu reagieren. Bei ADHS und Autismus-Spektrum-Störung oft verändert - Grundlage für sensorische Kleidung und Ergotherapie." },
      { term: "SGB VIII", def: "Das Achte Buch Sozialgesetzbuch - das Kinder- und Jugendhilfegesetz. Regelt alle staatlich geregelten Unterstützungsleistungen für Kinder, Jugendliche und Familien in Deutschland, von Beratung bis stationärer Unterbringung." },
      { term: "SGB IX", def: "Das Neunte Buch Sozialgesetzbuch - regelt Rehabilitation und Teilhabe von Menschen mit Behinderung (Eingliederungshilfe). Kann bei Kindern mit Behinderung und zusätzlichem erzieherischem Bedarf parallel zum SGB VIII greifen." },
      { term: "SGB XII", def: "Das Zwölfte Buch Sozialgesetzbuch - regelt die Sozialhilfe, also die Sicherung des Lebensunterhalts für Menschen, die nicht ausreichend für sich selbst sorgen können. Rechtlich getrennt von der Jugendhilfe nach SGB VIII." },
      { term: "Skill-Training", def: "Strukturiertes Einüben konkreter Fähigkeiten zur Emotionsregulation, Konfliktlösung oder Stressbewältigung - fester Bestandteil von Verhaltenstherapie und pädagogischer Arbeit mit Jugendlichen." },
      { term: "Sorgerecht", def: "Das elterliche Recht und die Pflicht, für ein minderjähriges Kind zu sorgen - umfasst Personensorge und Vermögenssorge. Kann bei Kindeswohlgefährdung durch das Familiengericht eingeschränkt werden." },
      { term: "Sozialpädagogik", def: "Eine Fachrichtung der Sozialen Arbeit, die sich mit Erziehung, Bildung und Unterstützung von Kindern, Jugendlichen und Familien befasst - die fachliche Grundausbildung der meisten Fachkräfte in der Jugendhilfe." },
      { term: "Sozialpädagogische Familienhilfe (SPFH)", def: "Eine ambulante Hilfe nach § 31 SGB VIII, bei der eine Fachkraft die gesamte Familie über einen längeren Zeitraum regelmäßig zuhause begleitet." },
      { term: "Spieltherapie", def: "Eine therapeutische Methode für jüngere Kinder, die über Spiel, Symbolspiel oder Sandspiel emotionale Themen ausdrücken können, ohne alles in Worte fassen zu müssen. Zentrale Methode der Kinderpsychotherapie.", href: "/psychotherapie" },
      { term: "Stationäre Hilfe", def: "Unterstützung, bei der ein Kind oder Jugendlicher zeitweise außerhalb der Familie lebt - in einer Wohngruppe, Pflegefamilie oder Einrichtung. Kommt erst in Betracht, wenn ambulante Hilfe nicht ausreicht." },
      { term: "Suizidalität", def: "Gedanken, Impulse oder Handlungen, die auf die Beendigung des eigenen Lebens gerichtet sind. Erfordert immer sofortiges, ernsthaftes Handeln - bei Ankernetz über das feste Krisenprotokoll und die 24/7-Krisenintervention.", href: "/krisenintervention" },
      { term: "Systemische Arbeit", def: "Ein fachlicher Ansatz, der ein Kind nicht isoliert betrachtet, sondern immer im Zusammenhang mit Familie, Schule und sozialem Umfeld - Veränderung wird im gesamten System gesucht, nicht nur beim Kind allein." },
    ],
  },
  {
    letter: "T",
    entries: [
      { term: "Tagesgruppe", def: "Ein Angebot nach § 32 SGB VIII, bei dem Kinder den Nachmittag in einer betreuten Gruppe außerhalb der Familie verbringen, aber weiterhin zuhause wohnen." },
      { term: "Trauma", def: "Ein Erlebnis, das die eigenen Bewältigungsmöglichkeiten überfordert - etwa Gewalt, Vernachlässigung oder plötzlicher Verlust. Grundlage für mögliche Traumafolgestörungen." },
      { term: "Traumafolgestörung", def: "Anhaltende belastende Symptome nach einem oder mehreren traumatischen Erlebnissen - etwa Ängste, Rückzug, Schlafprobleme oder starke emotionale Reaktionen." },
      { term: "Traumapädagogik", def: "Ein pädagogischer Ansatz, der Verhalten von Kindern und Jugendlichen im Licht früherer traumatischer Erfahrungen versteht - mit Fokus auf Sicherheit, Selbstwirksamkeit und Beziehungsaufbau statt reiner Verhaltenskorrektur." },
    ],
  },
  {
    letter: "U",
    entries: [
      { term: "UN-Kinderrechtskonvention", def: "Ein internationales Übereinkommen von 1989, das grundlegende Rechte von Kindern festschreibt - unter anderem Schutz, Förderung und Beteiligung. Prägt als Wertegrundlage auch das deutsche Kinder- und Jugendhilferecht." },
      { term: "Übergang Schule-Beruf", def: "Die Begleitung von Jugendlichen und jungen Erwachsenen beim Schritt von der Schule in Ausbildung und Beruf - Berufsorientierung, Bewerbungstraining, Praktikumsvermittlung und Begleitung auch über die Volljährigkeit hinaus.", href: "/uebergang-arbeit" },
      { term: "Umgangsrecht", def: "Das Recht eines Kindes auf Kontakt zu beiden Elternteilen sowie das Recht der Eltern auf Umgang mit dem Kind - besteht grundsätzlich auch während einer stationären Unterbringung, sofern es dem Kindeswohl dient." },
    ],
  },
  {
    letter: "V",
    entries: [
      { term: "Verhaltenstherapie", def: "Eine wissenschaftlich fundierte Therapiemethode, die belastende Verhaltens- und Denkmuster gezielt verändert - eine der am häufigsten eingesetzten Methoden in der Kinder- und Jugendlichenpsychotherapie.", href: "/psychotherapie" },
      { term: "Verselbstständigung", def: "Der Prozess, in dem ein Jugendlicher aus stationärer Jugendhilfe schrittweise auf ein eigenständiges Leben vorbereitet wird - eigene Wohnung, Ausbildung, Finanzen, oft mit Begleitung bis über das 18. Lebensjahr hinaus." },
      { term: "Vollzeitpflege", def: "Die dauerhafte oder längerfristige Unterbringung eines Kindes in einer Pflegefamilie nach § 33 SGB VIII, wenn die eigene Familie es nicht ausreichend versorgen kann." },
      { term: "Vormundschaft", def: "Die vollständige Übertragung der elterlichen Sorge auf eine andere Person oder das Jugendamt, meist wenn die Eltern die Sorge nicht ausüben können oder dürfen." },
    ],
  },
  {
    letter: "W",
    entries: [
      { term: "Widerspruch", def: "Der rechtliche Einspruch gegen einen ablehnenden oder belastenden Bescheid des Jugendamts, innerhalb der im Bescheid genannten Frist einzulegen." },
      { term: "Wohngruppe", def: "Eine Einrichtung, in der mehrere Kinder oder Jugendliche mit einem professionellen Team zusammenleben - primär sozialpädagogisch ausgerichtet, bei therapeutischem Wohnen zusätzlich mit integrierter Therapie.", href: "/therapie-wohnen" },
    ],
  },
];
