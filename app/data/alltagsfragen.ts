import type { FaqCategory } from "./glossar";

/**
 * Konkrete Alltagsfragen, die vor allem Kinder und Jugendliche selbst stellen -
 * Taschengeld, Zimmer, Ausgang, Haustiere usw. Anders als das SGB-VIII-Glossar
 * geht es hier nicht um Recht, sondern um "wie ist das bei euch wirklich".
 * Wo es keine pauschale, öffentlich festgelegte Regel gibt, sagt die Antwort das
 * ehrlich statt eine Regel zu erfinden - das ist hier bewusst so gewollt.
 */
export const alltagsfragenKategorien: FaqCategory[] = [
  {
    titel: "Alltag & Regeln in der Wohngruppe",
    intro: "Ehrliche Antworten auf die Fragen, die Kinder und Jugendliche vor einem Einzug wirklich beschäftigen.",
    items: [
      {
        q: "Wie sind die Ausgangszeiten bei euch?",
        a: "Eine einzelne feste Ausgangszeit für alle gibt es bei uns nicht - das hängt von deiner Wohngruppe und deinem Alter ab und wird individuell besprochen. Als Anhaltspunkt: In der Kinderwohngruppe (6-12 Jahre) beginnt die Abendroutine um 19:30 Uhr, im therapeutischen Wohnen (12-17 Jahre) startet ab 21:00 Uhr der Nacht- und Sicherheitsrahmen. Die genauen Regeln bespricht ihr gemeinsam mit dem Team vor Ort.",
      },
      {
        q: "Kann ich meine Familie besuchen oder sehen?",
        a: "Ja, Kontakt zur Familie ist grundsätzlich vorgesehen und wird aktiv unterstützt, nicht verhindert. In den Kinderwohngruppen werden Besuchskontakte mit dem Jugendamt abgestimmt und oft begleitet. Im therapeutischen Wohnen gibt es regelmäßige Familiengespräche und begleitete Besuche. Konkrete Tage und Uhrzeiten legt ihr gemeinsam mit dem Team fest, je nach Situation.",
      },
      {
        q: "Bekomme ich ein eigenes Zimmer?",
        a: "Ja - bei Ankernetz hat jedes Kind sein eigenes Zimmer. Bei der Aufnahme wird es sogar gemeinsam gestaltet, zum Beispiel sucht ihr zusammen eine Wandfarbe aus. Das ist uns wichtig: ein Rückzugsort, der wirklich zu dir gehört.",
      },
      {
        q: "Kann ich mein Haustier mitbringen?",
        a: "Das muss individuell für deine Wohngruppe geprüft werden, dafür gibt es keine pauschale Regel. Sprich das am besten direkt im Aufnahmegespräch an, dann können wir das gemeinsam klären.",
      },
      {
        q: "Habt ihr Tiere oder einen Garten?",
        a: "Ja! Wir halten selbst Hühner und haben einen großen Garten zum Spielen, inklusive Hochbeete, die gemeinsam bepflanzt werden. Das ist fester Teil des Alltags bei uns.",
      },
      {
        q: "Gibt es WLAN und wie ist das mit dem Handy?",
        a: "WLAN ist bei uns vorhanden. Feste, allgemeine Regeln zu Bildschirmzeit oder Handynutzung nach der Nachtruhe gibt es nicht pauschal - das wird je nach Alter und Wohngruppe individuell besprochen.",
      },
      {
        q: "Darf ich bei Freunden übernachten?",
        a: "Das wird individuell mit deiner Wohngruppe und den zuständigen Beteiligten geklärt, eine allgemeine feste Regel dafür gibt es nicht. Wir fördern Freundschaften und soziale Kontakte aber ausdrücklich, das ist uns wichtig.",
      },
      {
        q: "Wie lange kann ich bei euch bleiben?",
        a: "Das ist ganz individuell und wird über den Hilfeplan festgelegt, der regelmäßig - meist alle sechs Monate - gemeinsam überprüft wird. Auch nach dem 18. Geburtstag musst du nicht von heute auf morgen gehen: Unterstützung ist über § 41 SGB VIII in der Regel bis 21 möglich, in Ausnahmefällen auch länger.",
      },
      {
        q: "Wie viel Taschengeld bekomme ich?",
        a: "Den genauen Betrag kann ich dir leider nicht zuverlässig nennen - er wird individuell im Hilfeplan festgelegt und orientiert sich an den gesetzlichen Vorgaben. Damit du keine falsche Zahl bekommst, kläre das am besten direkt mit dem Team vor Ort oder im Aufnahmegespräch.",
      },
    ],
  },
];
