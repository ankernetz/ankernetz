import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns | Ankernetz Berlin – Kinder- und Jugendhilfe",
  description:
    "Ankernetz ist ein Netzwerk spezialisierter Hilfen für Kinder und Jugendliche in Berlin. Erfahren Sie mehr über unser Team, unsere Werte und unsere 11 Angebote.",
  keywords: ["Ankernetz Berlin", "Kinder- und Jugendhilfe Berlin", "Jugendhilfe Träger Berlin", "soziale Einrichtung Berlin Kinder"],
  alternates: { canonical: "https://www.ankernetz.com/ueber-uns" },
  openGraph: {
    title: "Über uns – Ankernetz Berlin",
    description: "Netzwerk spezialisierter Hilfen für Kinder und Jugendliche in Berlin. 11 Angebote, ein Ziel.",
    url: "https://www.ankernetz.com/ueber-uns",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
