import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Aktuelles & Ratgeber zur Jugendhilfe",
  description:
    "Ratgeber und Fachbeiträge zu Jugendhilfe, Krisenintervention, sensorischer Kleidung und Unterstützungsangeboten für Kinder und Jugendliche in Berlin und Brandenburg.",
  keywords: [
    "Jugendhilfe Ratgeber Berlin",
    "Krisenintervention Kinder Berlin",
    "sensorische Kleidung ADHS Autismus",
    "Ankerkleidung Ratgeber",
    "Ankernetz Berlin Brandenburg",
  ],
  alternates: { canonical: "https://www.ankernetz.com/aktuelles" },
  openGraph: {
    title: "Aktuelles & Ratgeber | Ankernetz Berlin Brandenburg",
    description:
      "Fachbeiträge zu Jugendhilfe, Krisenintervention und Ankerkleidung - von Ankernetz Berlin Brandenburg.",
    url: "https://www.ankernetz.com/aktuelles",
  },
};

export default function AktuellesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
