import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Versorgung Berlin | Sachleistungen & Grundversorgung – Ankernetz",
  description:
    "Grundversorgung und Sachleistungen für Kinder und Jugendliche in Einrichtungen von Ankernetz Berlin. Kleidung, Ernährung und Alltagsgüter für junge Menschen in stationärer Jugendhilfe.",
  keywords: ["Versorgung Jugendhilfe Berlin", "Sachleistungen Kinder Berlin", "Grundversorgung Jugendliche Berlin", "Ausstattung stationäre Jugendhilfe Berlin"],
  alternates: { canonical: "https://www.ankernetz.com/versorgung" },
  openGraph: {
    title: "Versorgung Berlin | Grundversorgung & Sachleistungen – Ankernetz",
    description: "Grundversorgung mit Kleidung, Ernährung und Alltagsgütern für Kinder und Jugendliche in Berliner Jugendhilfeeinrichtungen.",
    url: "https://www.ankernetz.com/versorgung",
  },
};

export default function VersorgungLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
