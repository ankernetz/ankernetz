import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Diagnostik & Clearing Berlin | Jugendhilfe Abklärung",
  description:
    "Professionelle Diagnostik und Clearing-Verfahren für Kinder und Jugendliche in Berlin. Ankernetz klärt Hilfebedarfe, erstellt Entwicklungsberichte und empfiehlt passende Hilfsangebote.",
  keywords: ["Diagnostik Jugendhilfe Berlin", "Clearing Kinder Jugendliche Berlin", "Hilfebedarf Abklärung Berlin", "Jugendhilfe Diagnostik Berlin", "Clearing-Stelle Berlin"],
  alternates: { canonical: "https://www.ankernetz.com/diagnostik-clearing" },
  openGraph: {
    title: "Diagnostik & Clearing Berlin | Ankernetz",
    description: "Professionelle Abklärung von Hilfebedarfen für Kinder und Jugendliche. Individuelle Diagnostik und Empfehlungen in Berlin.",
    url: "https://www.ankernetz.com/diagnostik-clearing",
  },
};

export default function DiagnostikClearingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
