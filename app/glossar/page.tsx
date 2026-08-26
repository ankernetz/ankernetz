import Link from "next/link";
import { BookOpen } from "lucide-react";

import { SeoFaqSchema } from "../components/SeoFaqSchema";
import { SeoBreadcrumb } from "../components/SeoBreadcrumb";

interface FaqItem { q: string; a: string; }
interface FaqCategory { titel: string; intro: string; items: FaqItem[]; }

const kategorien: FaqCategory[] = [
  {
    titel: "Rechtliche Grundlagen: SGB VIII & Jugendamt",
    intro: "Die wichtigsten Begriffe rund um das Kinder- und Jugendhilfegesetz - verständlich erklärt.",
    items: [
      {
        q: "Was ist das SGB VIII?",
        a: "Das SGB VIII ist das Achte Buch Sozialgesetzbuch - das Kinder- und Jugendhilfegesetz. Es regelt, welche Unterstützung Kinder, Jugendliche und Familien in Deutschland gesetzlich beanspruchen können, von Erziehungsberatung über Frühe Hilfen bis zur stationären Unterbringung. Jugendhilfe ist damit ein Rechtsanspruch, keine freiwillige Leistung.",
      },
      {
        q: "Was ist das Jugendamt?",
        a: "Das Jugendamt ist die kommunale Behörde, die für die Umsetzung der Kinder- und Jugendhilfe zuständig ist. In Berlin hat jeder der zwölf Bezirke ein eigenes Jugendamt, in Brandenburg jeder Landkreis und jede kreisfreie Stadt. Das Jugendamt prüft Hilfebedarfe, bewilligt Leistungen und arbeitet dafür mit freien Trägern wie Ankernetz zusammen.",
      },
      {
        q: "Was ist der ASD (Allgemeiner Sozialer Dienst)?",
        a: "Der ASD ist die erste Anlaufstelle innerhalb des Jugendamts für Familien. Dort arbeiten die Sozialarbeiterinnen und Sozialarbeiter, die Erstgespräche führen, den Hilfebedarf einschätzen und die Hilfeplanung koordinieren. Wenn Sie sich beim Jugendamt melden, landen Sie in der Regel zuerst beim ASD Ihres Wohnbezirks.",
      },
      {
        q: "Was ist ein Hilfeplan und ein Hilfeplangespräch?",
        a: "Der Hilfeplan (§ 36 SGB VIII) ist die schriftliche Vereinbarung, die festlegt, welche Unterstützung eine Familie oder ein Kind erhält und mit welchem Ziel. Er entsteht im Hilfeplangespräch, an dem Jugendamt, Familie, Kind bzw. Jugendlicher und gegebenenfalls der Träger der Hilfe gemeinsam teilnehmen. Der Hilfeplan wird regelmäßig überprüft und angepasst.",
      },
      {
        q: "Was bedeutet Inobhutnahme nach § 42 SGB VIII?",
        a: "Inobhutnahme bedeutet, dass das Jugendamt ein Kind oder einen Jugendlichen vorübergehend und ohne vorherige gerichtliche Entscheidung in Schutz nimmt, weil eine dringende Gefahr vorliegt - etwa bei akuter Gewalt, Vernachlässigung oder wenn ein Jugendlicher selbst darum bittet. Sie ist immer eine Notfallmaßnahme und zeitlich begrenzt, bis über die weitere Hilfe entschieden ist.",
      },
      {
        q: "Was bedeutet Kindeswohlgefährdung?",
        a: "Kindeswohlgefährdung liegt vor, wenn die körperliche, geistige oder seelische Entwicklung eines Kindes durch Vernachlässigung, Misshandlung oder andere Umstände erheblich gefährdet ist und die Eltern nicht bereit oder in der Lage sind, die Gefahr abzuwenden. Der Begriff ist zentral für § 8a SGB VIII und entscheidet, wann Jugendämter eingreifen müssen.",
      },
      {
        q: "Was ist § 8a SGB VIII - der Schutzauftrag bei Kindeswohlgefährdung?",
        a: "§ 8a SGB VIII verpflichtet Jugendämter und Fachkräfte, bei Anhaltspunkten für eine Kindeswohlgefährdung systematisch das Risiko einzuschätzen und geeignete Schritte einzuleiten - von einem Beratungsangebot bis zur Inobhutnahme. Auch Kitas, Schulen und andere Einrichtungen sind über diese Vorschrift eingebunden, wenn sie Auffälligkeiten bemerken.",
      },
      {
        q: "Was ist eine Vormundschaft oder Ergänzungspflegschaft?",
        a: "Eine Vormundschaft überträgt die elterliche Sorge vollständig auf eine andere Person oder das Jugendamt, meist wenn die Eltern die Sorge nicht ausüben können. Eine Ergänzungspflegschaft betrifft nur einen Teilbereich der elterlichen Sorge, zum Beispiel gesundheitliche oder schulische Entscheidungen, während die Eltern in anderen Bereichen weiter sorgeberechtigt bleiben.",
      },
      {
        q: "Wer trägt die Kosten der Kinder- und Jugendhilfe?",
        a: "Die Leistungen der Jugendhilfe werden vom zuständigen Jugendamt finanziert. Für Familien entstehen bei ambulanten Hilfen und Beratung in der Regel keine Kosten. Bei stationären Hilfen gibt es einen gesetzlich geregelten, einkommensabhängigen Kostenbeitrag der Eltern - dieser ist in der Praxis oft gering oder wird ganz erlassen.",
      },
      {
        q: "Was ist ein freier Träger der Jugendhilfe?",
        a: "Ein freier Träger ist eine anerkannte, meist gemeinnützige Organisation, die im Auftrag und mit Finanzierung des Jugendamts konkrete Hilfen durchführt - vom Beratungsgespräch bis zur Wohngruppe. Jugendämter steuern und finanzieren, freie Träger wie Ankernetz setzen die Hilfe im Alltag um. Bekannte freie Träger sind zum Beispiel Diakonie, Caritas oder AWO, daneben gibt es spezialisierte kleinere Träger.",
      },
    ],
  },
  {
    titel: "Abgrenzungen: Was unterscheidet sich wovon?",
    intro: "Viele Begriffe klingen ähnlich, meinen aber etwas anderes. Die wichtigsten Unterschiede im Überblick.",
    items: [
      {
        q: "Was ist der Unterschied zwischen Jugendhilfe und Sozialhilfe?",
        a: "Jugendhilfe (SGB VIII) richtet sich speziell an Kinder, Jugendliche und ihre Familien und zielt auf Erziehung, Entwicklung und Schutz. Sozialhilfe (SGB XII) sichert dagegen allgemein den Lebensunterhalt und die Teilhabe von Menschen, die nicht ausreichend für sich selbst sorgen können - unabhängig vom Alter. Beide Systeme können nebeneinander bestehen, verfolgen aber unterschiedliche Ziele.",
      },
      {
        q: "Was ist der Unterschied zwischen Jugendhilfe und Eingliederungshilfe?",
        a: "Eingliederungshilfe (heute vor allem im SGB IX geregelt) richtet sich an Menschen mit Behinderung und zielt auf Teilhabe. Jugendhilfe (SGB VIII) betrifft Erziehung und Entwicklung von Kindern und Jugendlichen allgemein. Bei einem Kind mit Behinderung und zusätzlichem erzieherischem Bedarf können beide Systeme zusammenwirken - die genaue Zuständigkeit wird im Einzelfall geklärt.",
      },
      {
        q: "Was ist der Unterschied zwischen Jugendhilfe und einer familiengerichtlichen Entscheidung?",
        a: "Das Jugendamt berät, unterstützt und bewilligt Hilfen - es hat aber keine Entscheidungsgewalt über das Sorgerecht. Wenn Eltern nicht mitwirken, aber ein Kind akut gefährdet ist, kann das Jugendamt das Familiengericht einschalten. Das Gericht kann dann Maßnahmen anordnen, etwa einen teilweisen Entzug der elterlichen Sorge. Jugendhilfe und Familiengericht arbeiten also zusammen, sind aber unterschiedliche Institutionen.",
      },
      {
        q: "Was ist der Unterschied zwischen Beratung und Therapie?",
        a: "Beratung ist kurz, lösungsorientiert und stellt keine Diagnose - sie hilft in konkreten Lebenssituationen, oft in ein bis wenigen Gesprächen. Psychotherapie ist ein längerer, strukturierter Behandlungsprozess bei einer diagnostizierten psychischen Erkrankung, durchgeführt von approbierten Therapeutinnen und Therapeuten. Beratung braucht keinen Antrag, Psychotherapie läuft über die Krankenkasse.",
      },
      {
        q: "Was ist der Unterschied zwischen Krisenintervention und Kinder- und Jugendpsychiatrie?",
        a: "Die Kinder- und Jugendpsychiatrie (KJP) behandelt psychiatrische Erkrankungen mit medizinischen Mitteln, etwa bei akuter Suizidalität mit konkretem Plan oder psychotischen Zuständen. Krisenintervention schafft einen sozialen Schutzraum mit pädagogischer Begleitung, wenn die Situation sozialpädagogisch beherrschbar ist. Beide Systeme ergänzen sich und können nacheinander oder parallel notwendig sein.",
      },
      {
        q: "Was ist der Unterschied zwischen ambulanter und stationärer Hilfe?",
        a: "Ambulante Hilfen (§ 27 SGB VIII) finden im gewohnten Lebensumfeld der Familie statt - die Familie bleibt zusammen und erhält Unterstützung zuhause. Stationäre Hilfen bedeuten, dass ein Kind oder Jugendlicher zeitweise außerhalb der Familie lebt, etwa in einer Wohngruppe oder Pflegefamilie. Stationäre Hilfe wird erst in Betracht gezogen, wenn ambulante Unterstützung nicht ausreicht.",
      },
      {
        q: "Was ist der Unterschied zwischen Pflegefamilie, Wohngruppe und therapeutischem Wohnen?",
        a: "Eine Pflegefamilie nimmt ein Kind in einem privaten Familienrahmen auf. Eine Wohngruppe ist eine Einrichtung mit mehreren Kindern oder Jugendlichen und einem professionellen Team, primär sozialpädagogisch ausgerichtet. Therapeutisches Wohnen ist eine Sonderform der Wohngruppe, bei der psychologische bzw. psychotherapeutische Arbeit fest in den Alltag integriert ist - für Jugendliche mit besonders komplexem Bedarf.",
      },
      {
        q: "Was ist der Unterschied zwischen sozialpädagogischer Familienhilfe (SPFH) und Erziehungsbeistandschaft?",
        a: "SPFH unterstützt die ganze Familie als System - eine Fachkraft kommt regelmäßig nach Hause und arbeitet mit allen Familienmitgliedern an Erziehungs- und Alltagsfragen. Erziehungsbeistandschaft richtet sich gezielt an ein einzelnes Kind oder einen Jugendlichen und begleitet diesen individuell, oft ergänzend zur Arbeit mit der Familie.",
      },
    ],
  },
  {
    titel: "Hilfeformen im Detail",
    intro: "Welche konkreten Unterstützungsangebote das SGB VIII vorsieht - und wofür sie gedacht sind.",
    items: [
      {
        q: "Was ist sozialpädagogische Familienhilfe (SPFH, § 31 SGB VIII)?",
        a: "SPFH ist eine ambulante Hilfe, bei der eine Fachkraft die Familie über einen längeren Zeitraum regelmäßig zuhause begleitet - bei Erziehungsfragen, Alltagsstruktur, Behördenkontakten oder Konflikten. Ziel ist, die Familie zu stärken, damit sie ihre Aufgaben wieder eigenständig bewältigen kann.",
      },
      {
        q: "Was ist Erziehungsbeistandschaft (§ 30 SGB VIII)?",
        a: "Ein Erziehungsbeistand begleitet ein einzelnes Kind oder einen Jugendlichen individuell - bei der Verselbstständigung, in Konflikten mit den Eltern oder in der Schule. Die Hilfe ist auf die Persönlichkeitsentwicklung des jungen Menschen selbst ausgerichtet, nicht primär auf die Familie als Ganzes.",
      },
      {
        q: "Was ist eine Tagesgruppe (§ 32 SGB VIII)?",
        a: "In einer Tagesgruppe verbringen Kinder den Nachmittag - manchmal auch den ganzen Tag - in einer betreuten Gruppe außerhalb der Familie, wohnen aber weiterhin zuhause. Das Angebot kombiniert soziales Lernen in der Gruppe mit Unterstützung der Hausaufgaben und der familiären Situation, ohne dass eine vollstationäre Unterbringung nötig ist.",
      },
      {
        q: "Was ist Vollzeitpflege (§ 33 SGB VIII)?",
        a: "Vollzeitpflege bedeutet, dass ein Kind dauerhaft oder für einen längeren Zeitraum in einer Pflegefamilie lebt, weil es in der eigenen Familie nicht oder noch nicht ausreichend versorgt und gefördert werden kann. Ziel kann sowohl eine spätere Rückkehr zur Herkunftsfamilie sein als auch ein dauerhaftes Aufwachsen in der Pflegefamilie.",
      },
      {
        q: "Was ist Heimerziehung nach § 34 SGB VIII?",
        a: "Heimerziehung bezeichnet die Unterbringung eines Kindes oder Jugendlichen in einer Wohngruppe oder Einrichtung, wenn ein Verbleib im Elternhaus nicht möglich oder nicht im Sinne des Kindeswohls ist. Der Alltag findet in der Einrichtung statt, Schule oder Ausbildung werden von dort aus besucht, der Kontakt zur Familie bleibt in der Regel bestehen und wird pädagogisch begleitet.",
      },
      {
        q: "Was ist intensive sozialpädagogische Einzelbetreuung (§ 35 SGB VIII)?",
        a: "Das ist die intensivste Form stationärer Jugendhilfe: Ein Jugendlicher wird von einer Fachkraft in einer 1:1-Betreuung begleitet, oft außerhalb einer größeren Gruppe. Diese Hilfe ist für junge Menschen gedacht, die in einer regulären Gruppe nicht stabilisiert werden können und besonders individuelle, engmaschige Unterstützung brauchen.",
      },
      {
        q: "Was sind Frühe Hilfen?",
        a: "Frühe Hilfen richten sich an Familien mit sehr jungen Kindern, meist von 0 bis 6 Jahren, und setzen präventiv oder akut-schützend an - von Hausbesuchen und Elternbegleitung bis zu speziell geschulten Schutzpflegestellen bei akuter Kindeswohlgefährdung. Ziel ist, in der sensibelsten Entwicklungsphase früh anzusetzen, bevor sich Probleme verfestigen.",
      },
      {
        q: "Was ist Kita-Fachberatung?",
        a: "Kita-Fachberatung unterstützt Erzieherinnen und Erzieher sowie Kita-Teams bei herausfordernden Situationen im pädagogischen Alltag - etwa bei auffälligem Verhalten von Kindern, Verdacht auf Kindeswohlgefährdung nach § 8a SGB VIII oder bei der fachlichen Weiterentwicklung des Teams. Sie ist niedrigschwellig und erfordert keinen formellen Hilfeauftrag für ein einzelnes Kind.",
      },
    ],
  },
  {
    titel: "Ablauf, Kosten & Rechte für Eltern",
    intro: "Praktische Fragen, die Eltern und Erziehungsberechtigte am meisten beschäftigen.",
    items: [
      {
        q: "Wie beantrage ich Jugendhilfe?",
        a: "Der erste Schritt ist die Kontaktaufnahme mit dem Allgemeinen Sozialen Dienst (ASD) des für Ihren Wohnort zuständigen Jugendamts. Nach einem Erstgespräch wird bei Bedarf eine Hilfeplanung nach § 36 SGB VIII eingeleitet, in die Familie, Kind und Fachkräfte gemeinsam einbezogen werden. Sie können sich auch direkt an einen freien Träger wie Ankernetz wenden, der Sie beim weiteren Vorgehen unterstützt.",
      },
      {
        q: "Muss ich als Elternteil etwas bezahlen?",
        a: "Bei ambulanten Hilfen und Beratung entstehen für Familien in der Regel keine Kosten. Bei stationären Hilfen gibt es einen gesetzlich geregelten Kostenbeitrag, der sich am Einkommen orientiert - in der Praxis ist dieser oft gering oder wird bei geringem Einkommen vollständig erlassen. Die genaue Höhe klärt das Jugendamt im Einzelfall.",
      },
      {
        q: "Kann ich eine vom Jugendamt vorgeschlagene Hilfe ablehnen?",
        a: "Ja, außer bei einer gerichtlich angeordneten Maßnahme ist Jugendhilfe grundsätzlich eine freiwillige, mitwirkungsbasierte Leistung. Eltern können einer vorgeschlagenen Hilfeform widersprechen und Alternativen einbringen. Bei akuter Kindeswohlgefährdung kann das Jugendamt allerdings das Familiengericht einschalten, wenn Eltern notwendige Hilfe verweigern.",
      },
      {
        q: "Habe ich als Elternteil ein Mitspracherecht?",
        a: "Ja, das Recht auf Mitwirkung ist gesetzlich verankert. Eltern werden in die Hilfeplangespräche einbezogen, ihre Sicht wird dokumentiert, und auch Kinder und Jugendliche ab einem gewissen Alter werden altersgerecht beteiligt. Jugendhilfe soll mit den Beteiligten gestaltet werden, nicht über ihre Köpfe hinweg.",
      },
      {
        q: "Was kann ich tun, wenn ich mit einer Entscheidung des Jugendamts nicht einverstanden bin?",
        a: "Gegen ablehnende oder belastende Bescheide des Jugendamts kann in der Regel Widerspruch eingelegt werden, die genaue Frist steht im Bescheid. Es lohnt sich, das Gespräch zunächst direkt mit dem zuständigen ASD zu suchen - viele Konflikte klären sich dort. Bei grundsätzlichen Fragen kann auch eine unabhängige Beratungsstelle unterstützen.",
      },
      {
        q: "Wie lange dauert es, bis eine Hilfe bewilligt wird?",
        a: "Das hängt stark vom Einzelfall ab. Bei akuten Krisen erfolgt die Reaktion sofort, teils noch am selben Tag. Bei regulären ambulanten Hilfen liegt zwischen Erstkontakt und Bewilligung häufig eine Zeitspanne von einigen Tagen bis wenigen Wochen, abhängig von Auslastung und Dringlichkeit beim jeweiligen Jugendamt.",
      },
      {
        q: "Was passiert bei einem Umzug in einen anderen Bezirk oder Landkreis?",
        a: "Bei einem Umzug über eine Bezirks- oder Landkreisgrenze wechselt die örtliche Zuständigkeit zum Jugendamt des neuen Wohnorts. Das abgebende und das aufnehmende Jugendamt stimmen sich ab, damit eine laufende Hilfe möglichst nahtlos weitergeführt werden kann.",
      },
      {
        q: "Kann ich mich auch ohne das Jugendamt direkt an einen Träger wie Ankernetz wenden?",
        a: "Ja. Für eine kostenlose Erstberatung brauchen Sie keinen Kontakt zum Jugendamt - Sie können sich direkt bei Ankernetz melden. Wird darüber hinaus eine förmliche, vom Jugendamt finanzierte Hilfe benötigt, unterstützt Ankernetz Sie auch bei diesem Schritt und der Antragstellung.",
      },
    ],
  },
  {
    titel: "Psychische Gesundheit & Diagnostik",
    intro: "Begriffe aus Diagnostik, Psychotherapie und Traumaarbeit, die im Zusammenhang mit Jugendhilfe häufig auftauchen.",
    items: [
      {
        q: "Was ist ein Trauma bzw. eine Traumafolgestörung?",
        a: "Ein Trauma entsteht durch ein Erlebnis, das die eigenen Bewältigungsmöglichkeiten überfordert - etwa Gewalt, Vernachlässigung oder plötzlicher Verlust. Wenn belastende Symptome danach über längere Zeit bestehen bleiben, spricht man von einer Traumafolgestörung. Diese kann sich in Ängsten, Rückzug, Schlafproblemen oder starken emotionalen Reaktionen zeigen.",
      },
      {
        q: "Was ist PTBS (posttraumatische Belastungsstörung)?",
        a: "PTBS ist eine spezifische psychische Erkrankung, die nach einem oder mehreren traumatischen Erlebnissen auftreten kann. Typische Symptome sind Wiedererleben des Ereignisses (Flashbacks, Albträume), Vermeidungsverhalten und starke innere Anspannung. PTBS wird diagnostisch abgeklärt und kann psychotherapeutisch behandelt werden.",
      },
      {
        q: "Was ist ADHS?",
        a: "ADHS - Aufmerksamkeitsdefizit-Hyperaktivitätsstörung - ist eine neurobiologische Entwicklungsstörung, die Konzentration, Impulskontrolle und Aktivitätsniveau beeinflusst. Sie wird durch eine fachärztliche oder psychologische Diagnostik festgestellt und kann je nach Ausprägung pädagogisch, therapeutisch oder auch medikamentös begleitet werden.",
      },
      {
        q: "Was ist eine Autismus-Spektrum-Störung?",
        a: "Autismus-Spektrum-Störung (ASS) beschreibt eine neurologische Entwicklungsbesonderheit, die sich unter anderem in sozialer Kommunikation, Interessensfokussierung und sensorischer Verarbeitung zeigt - in sehr unterschiedlicher Ausprägung von Person zu Person. Eine gesicherte Diagnose erfolgt durch spezialisierte Diagnostik, häufig im Kindes- oder Jugendalter.",
      },
      {
        q: "Was ist eine Bindungsstörung?",
        a: "Eine Bindungsstörung entsteht meist, wenn ein Kind in den ersten Lebensjahren keine verlässliche, feinfühlige Bezugsperson hatte - etwa durch häufige Beziehungsabbrüche oder Vernachlässigung. Sie zeigt sich in auffälligem Bindungs- und Beziehungsverhalten und wird mit bindungsorientierten Methoden wie EPB nach Brisch oder PCIT bearbeitet.",
      },
      {
        q: "Was bedeutet Diagnostik und Clearing?",
        a: "Diagnostik und Clearing bezeichnet ein strukturiertes Verfahren, um die Situation eines Kindes oder Jugendlichen fachlich einzuschätzen - etwa bei Verdacht auf ADHS, Autismus, Trauma oder Entwicklungsverzögerung. Ziel ist Klarheit darüber, welche Hilfeform tatsächlich passt, bevor eine Entscheidung über die weitere Unterstützung getroffen wird.",
      },
      {
        q: "Was bedeutet Kassensitz bei Psychotherapie?",
        a: "Ein Kassensitz ist die Zulassung, mit den gesetzlichen Krankenkassen direkt abzurechnen. Therapeutinnen und Therapeuten mit Kassensitz behandeln, ohne dass Familien in Vorleistung gehen oder eine Kostenerstattung beantragen müssen. Ohne Kassensitz wäre Therapie entweder privat zu zahlen oder nur über ein aufwendiges Erstattungsverfahren möglich.",
      },
      {
        q: "Was ist der Unterschied zwischen Psychologe, Psychotherapeut und Psychiater?",
        a: "Ein Psychologe hat Psychologie studiert, darf aber ohne Zusatzausbildung keine Psychotherapie durchführen. Ein Psychotherapeut hat eine anerkannte therapeutische Zusatzausbildung und darf psychische Erkrankungen behandeln. Ein Psychiater ist Facharzt für Psychiatrie, hat Medizin studiert und darf zusätzlich Medikamente verordnen. Alle drei arbeiten oft eng zusammen.",
      },
    ],
  },
  {
    titel: "Ankernetz konkret",
    intro: "Fragen speziell zu Ankernetz als Träger, unseren Angeboten und dem ersten Kontakt.",
    items: [
      {
        q: "Wer ist Ankernetz?",
        a: "Ankernetz ist ein gemeinnütziger, anerkannter freier Träger der Kinder- und Jugendhilfe mit Sitz in Berlin, gegründet 2015. Wir vereinen elf spezialisierte Angebote unter einem Dach - von 24/7-Krisenintervention über Psychotherapie mit Kassensitz bis zu Frühen Hilfen - mit dem Ziel, dass kein Kind durchs Netz fällt.",
      },
      {
        q: "In welchen Regionen ist Ankernetz tätig?",
        a: "Ankernetz arbeitet in Berlin und im angrenzenden Brandenburg und kooperiert mit den Jugendämtern aller Berliner Bezirke sowie zahlreicher Brandenburger Landkreise und kreisfreier Städte.",
      },
      {
        q: "Wie schnell reagiert Ankernetz in einer Krise?",
        a: "Die Krisenintervention von Ankernetz ist rund um die Uhr erreichbar - 365 Tage im Jahr, auch nachts und an Feiertagen. Nach dem ersten Kontakt erfolgt die Aufnahme in der Regel innerhalb weniger Stunden.",
      },
      {
        q: "Was ist Ankerkleidung?",
        a: "Ankerkleidung ist die spezialisierte Kleidungskollektion von Ankernetz für Kinder und Jugendliche im Hilfesystem - unter anderem für Kinder mit ADHS oder im Autismus-Spektrum. Sie verzichtet auf typische sensorische Reizquellen wie kratzige Nähte oder eingenähte Etiketten und wird gezielt für den Alltag im Hilfesystem entwickelt.",
      },
      {
        q: "Wie stelle ich eine Platzanfrage bei Ankernetz?",
        a: "Platzanfragen können über das Online-Formular auf ankernetz.com/platzanfrage, telefonisch oder per E-Mail gestellt werden - sowohl durch Jugendämter und Fachkräfte als auch durch Erziehungsberechtigte direkt. Je genauer die Angaben zur Situation, desto schneller kann eingeschätzt werden, welches Angebot passt.",
      },
      {
        q: "Ist die Erstberatung bei Ankernetz wirklich kostenlos?",
        a: "Ja. Die allgemeine Erstberatung ist kostenlos und erfordert keinen Antrag, keine Überweisung und keine Diagnose. Erst wenn daraus eine weitergehende, formale Jugendhilfemaßnahme entsteht, wird die Finanzierung mit dem zuständigen Jugendamt geklärt.",
      },
      {
        q: "Kann ich anonym Kontakt zu Ankernetz aufnehmen?",
        a: "Bei telefonischer Beratung und im Chat ist ein anonymer Erstkontakt möglich - Sie müssen Ihren Namen nicht nennen, wenn Sie das nicht möchten. Für eine längerfristige Begleitung werden grundlegende Kontaktdaten benötigt, die ohne Ihre Einwilligung nicht an Dritte weitergegeben werden.",
      },
      {
        q: "Ist Ankernetz ein staatlicher oder ein privater Anbieter?",
        a: "Ankernetz ist ein gemeinnütziger, freier Träger - also weder eine Behörde noch ein gewinnorientiertes privates Unternehmen. Wir arbeiten im Auftrag und mit Finanzierung der Jugendämter, sind aber organisatorisch eigenständig, ähnlich wie große Wohlfahrtsverbände, nur spezialisierter und kleiner.",
      },
    ],
  },
];

const alleItems: FaqItem[] = kategorien.flatMap((k) => k.items);

export default function GlossarPage() {
  return (
    <main style={{ overflowX: "hidden", background: "#f4f7fb" }}>
      <section style={{ background: "#0b1220", padding: "6rem 1.5rem 4rem" }}>
        <div className="site-container" style={{ maxWidth: "820px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "999px", padding: "6px 14px", marginBottom: "1.5rem",
          }}>
            <BookOpen size={14} color="#8fb8ff" />
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8fb8ff", letterSpacing: "0.03em" }}>Glossar &amp; FAQ</span>
          </div>
          <h1 style={{
            fontSize: "clamp(2rem,4.5vw,3.25rem)", fontWeight: 700, color: "#ffffff",
            letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "1.25rem",
          }}>
            Glossar & häufige Fragen zur Jugendhilfe
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, maxWidth: "680px" }}>
            Was bedeutet SGB VIII? Was unterscheidet Jugendhilfe von Sozialhilfe? Was ist eine Inobhutnahme?
            Hier erklären wir die wichtigsten Begriffe und Fragen rund um Kinder- und Jugendhilfe in Berlin
            und Brandenburg - verständlich, ohne Behördendeutsch, und immer mit Bezug zur Praxis.
          </p>
        </div>
      </section>

      <nav aria-label="Kategorien" style={{ background: "#ffffff", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "1.5rem" }}>
        <div className="site-container" style={{ maxWidth: "820px", display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
          {kategorien.map((k, i) => (
            <a key={i} href={`#kategorie-${i}`} style={{
              fontSize: "0.8125rem", fontWeight: 600, color: "#1a3f6f",
              background: "#eef3fb", padding: "0.5rem 0.875rem", borderRadius: "8px",
              textDecoration: "none",
            }}>
              {k.titel}
            </a>
          ))}
        </div>
      </nav>

      {kategorien.map((kategorie, ki) => (
        <section key={ki} id={`kategorie-${ki}`} style={{
          background: ki % 2 === 0 ? "#F5F0EA" : "#ffffff",
          padding: "4.5rem 1.5rem", borderTop: "1px solid rgba(0,0,0,0.06)",
        }}>
          <div className="site-container" style={{ maxWidth: "860px" }}>
            <h2 style={{
              fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, color: "#1A1614",
              letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "0.75rem",
            }}>
              {kategorie.titel}
            </h2>
            <p style={{ fontSize: "1rem", color: "#5A4E48", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "680px" }}>
              {kategorie.intro}
            </p>
            <div>
              {kategorie.items.map((item, ii) => (
                <details key={ii} className="seo-faq-item" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", padding: "0" }}>
                  <summary style={{
                    fontSize: "0.9375rem", fontWeight: 600, color: "#1A1614",
                    cursor: "pointer", listStyle: "none", display: "flex",
                    justifyContent: "space-between", alignItems: "center",
                    gap: "1rem", padding: "1.375rem 0",
                  }}>
                    <span>{item.q}</span>
                    <span className="faq-icon" style={{ fontSize: "1.375rem", flexShrink: 0, color: "#8B3A22", fontWeight: 300, lineHeight: 1, transition: "transform 0.2s" }}>+</span>
                  </summary>
                  <p style={{ fontSize: "0.9375rem", color: "#5A4E48", lineHeight: 1.85, paddingBottom: "1.5rem", paddingRight: "2.5rem" }}>
                    {item.a}
                  </p>
                </details>
              ))}
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />
            </div>
          </div>
        </section>
      ))}

      <section style={{ background: "#0b1220", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div className="site-container" style={{ maxWidth: "620px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
            Ihre Frage war nicht dabei?
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Melden Sie sich direkt - kostenlos, unverbindlich und ohne Antrag.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+493022454322" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#6FA3FE", color: "white", fontWeight: 700, fontSize: "15px",
              padding: "15px 30px", borderRadius: "12px", textDecoration: "none",
            }}>
              Jetzt anrufen
            </a>
            <Link href="/kontakt" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)",
              color: "white", fontWeight: 600, fontSize: "14px",
              padding: "15px 26px", borderRadius: "12px", textDecoration: "none",
            }}>
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .seo-faq-item[open] .faq-icon { transform: rotate(45deg); }
        .seo-faq-item summary::-webkit-details-marker { display: none; }
      `}</style>

      <SeoFaqSchema items={alleItems} />
      <SeoBreadcrumb crumbs={[{ name: "Glossar & FAQ", slug: "glossar" }]} />
    </main>
  );
}
