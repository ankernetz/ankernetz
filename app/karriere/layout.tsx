import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Karriere | Jobs & Stellen bei Ankernetz Berlin – Kinder- und Jugendhilfe",
  description:
    "Stellenangebote und Karrieremöglichkeiten bei Ankernetz Berlin. Wir suchen Sozialpädagogen, Erzieher, Psychologen und Fachkräfte für die Kinder- und Jugendhilfe in Berlin.",
  keywords: ["Jobs Jugendhilfe Berlin", "Stellenangebote Sozialpädagoge Berlin", "Erzieher Stelle Berlin", "Psychologe Jugendhilfe Berlin", "Ankernetz Karriere", "Fachkraft Jugendhilfe Berlin"],
  alternates: { canonical: "https://www.ankernetz.com/karriere" },
  openGraph: {
    title: "Karriere bei Ankernetz Berlin | Stellen Jugendhilfe",
    description: "Stellen für Sozialpädagogen, Erzieher und Fachkräfte in der Berliner Kinder- und Jugendhilfe. Jetzt bewerben bei Ankernetz.",
    url: "https://www.ankernetz.com/karriere",
  },
};

export default function KarriereLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
