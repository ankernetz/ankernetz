import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankerkleidung | Bald verfügbar",
  description:
    "Ankerkleidung - spezialisierte Kleidung für Kinder und Jugendliche mit besonderen Bedürfnissen. Bald verfügbar. Teil des Ankernetz-Hilfesystems.",
  alternates: { canonical: "https://www.ankernetz.com/ankerkleidung" },
  openGraph: {
    title: "Ankerkleidung - Bald verfügbar",
    description:
      "Etwas Großes entsteht. Ankerkleidung - spezialisierte Kleidung für Kinder und Jugendliche mit besonderen Bedürfnissen.",
    url: "https://www.ankernetz.com/ankerkleidung",
    type: "website",
  },
};

export default function AnkerkleidungLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
