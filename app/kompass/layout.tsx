import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ankernetz-Kompass für die Kinder- und Jugendhilfe",
  description:
    "Der Ankernetz-Kompass: kurzer, anonymer Fragebogen zur ersten Orientierung in der Kinder- und Jugendhilfe - Beratung, Krisenintervention, Frühe Hilfen, Psychotherapie, Diagnostik oder therapeutisches Wohnen - welches Angebot passt zu Ihrer Situation?",
  keywords: [
    "welche Jugendhilfe passt",
    "Hilfe finden Kind Jugendlicher",
    "Selbsttest Jugendhilfe",
    "welches Angebot Jugendhilfe",
    "Orientierung Jugendhilfe Berlin",
    "brauche ich Beratung oder Therapie",
    "Ankernetz Kompass",
    "Jugendhilfe Kompass",
  ],
  alternates: { canonical: "https://www.ankernetz.com/kompass" },
  openGraph: {
    title: "Ankernetz-Kompass für die Kinder- und Jugendhilfe",
    description: "Kurzer, anonymer Fragebogen zur ersten Orientierung, welches Ankernetz-Angebot zu Ihrer Situation passt.",
    url: "https://www.ankernetz.com/kompass",
  },
};

export default function KompassLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
