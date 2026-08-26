import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Wegweiser: Welche Hilfe passt zu Ihrer Situation?",
  description:
    "Kurzer, anonymer Fragebogen zur ersten Orientierung: Beratung, Krisenintervention, Frühe Hilfen, Psychotherapie, Diagnostik oder therapeutisches Wohnen - welches Angebot passt zu Ihrer Situation?",
  keywords: [
    "welche Jugendhilfe passt",
    "Hilfe finden Kind Jugendlicher",
    "Selbsttest Jugendhilfe",
    "welches Angebot Jugendhilfe",
    "Orientierung Jugendhilfe Berlin",
    "brauche ich Beratung oder Therapie",
  ],
  alternates: { canonical: "https://www.ankernetz.com/wegweiser" },
  openGraph: {
    title: "Wegweiser: Welche Hilfe passt? - Ankernetz",
    description: "Kurzer, anonymer Fragebogen zur ersten Orientierung, welches Ankernetz-Angebot zu Ihrer Situation passt.",
    url: "https://www.ankernetz.com/wegweiser",
  },
};

export default function WegweiserLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
