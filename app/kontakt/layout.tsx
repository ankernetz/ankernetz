import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Kontakt | Kinder- und Jugendhilfe",
  description:
    "Kontaktieren Sie Ankernetz Berlin. Für Jugendämter, Fachkräfte und Familien. Bei Krisenaufnahmen sind wir 24/7 erreichbar unter +49 (0) 30 22 45 43 22.",
  keywords: ["Kontakt Ankernetz Berlin", "Ankernetz Telefon", "Jugendhilfe Berlin Kontakt", "Ankernetz Adresse", "Krisenaufnahme Kontakt Berlin"],
  alternates: { canonical: "https://www.ankernetz.com/kontakt" },
  openGraph: {
    title: "Kontakt | Ankernetz Berlin",
    description: "Ankernetz Berlin kontaktieren. 24/7 erreichbar für Krisenaufnahmen. Jugendämter und Fachkräfte willkommen.",
    url: "https://www.ankernetz.com/kontakt",
  },
};

export default function KontaktLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
