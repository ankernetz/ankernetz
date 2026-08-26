import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Jugendhilfe Berlin | Stationäre Hilfen für Kinder",
  description:
    "Stationäre und teilstationäre Jugendhilfeleistungen für Kinder und Jugendliche in Berlin. Ankernetz bietet intensive sozialpädagogische Begleitung, Wohngruppen und Erziehungshilfen nach SGB VIII.",
  keywords: ["Jugendhilfe Berlin", "stationäre Jugendhilfe Berlin", "Wohngruppe Kinder Berlin", "Erziehungshilfe Berlin", "SGB VIII Berlin", "Heimerziehung Berlin"],
  alternates: { canonical: "https://www.ankernetz.com/jugendhilfe" },
  openGraph: {
    title: "Jugendhilfe Berlin | Stationäre Hilfen - Ankernetz",
    description: "Stationäre Jugendhilfe mit intensiver sozialpädagogischer Begleitung für Kinder und Jugendliche in Berlin.",
    url: "https://www.ankernetz.com/jugendhilfe",
  },
};

export default function JugendhilfeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
