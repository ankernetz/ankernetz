import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Frühe Hilfen Berlin | Unterstützung für Kleinkinder 0–6 Jahre – Ankernetz",
  description:
    "Frühe Hilfen für Kleinkinder von 0 bis 6 Jahren in Berlin. Bindung, Sicherheit und Entwicklung für die Kleinsten. Ankernetz bietet Unterstützung für Familien in schwierigen Situationen.",
  keywords: ["Frühe Hilfen Berlin", "Hilfen Kleinkinder Berlin", "Eltern-Kind-Hilfe Berlin", "Frühförderung Berlin", "Hilfen 0-6 Jahre Berlin", "Baby Jugendhilfe Berlin"],
  alternates: { canonical: "https://www.ankernetz.com/fruehe-hilfen" },
  openGraph: {
    title: "Frühe Hilfen Berlin | Kleinkinder 0–6 Jahre – Ankernetz",
    description: "Bindung, Sicherheit und Entwicklung für die Kleinsten. Frühe Hilfen in Berlin von Ankernetz.",
    url: "https://www.ankernetz.com/fruehe-hilfen",
  },
};

export default function FrueheHilfenLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
