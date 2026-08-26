import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Platzanfrage Berlin | Jugendamt & Fachkräfte",
  description:
    "Platzanfrage für Jugendämter und Fachkräfte: Ankernetz prüft Ihren Bedarf und meldet sich innerhalb von 24 Stunden. Für Krisenaufnahmen ist Ankernetz Berlin rund um die Uhr erreichbar.",
  keywords: ["Platzanfrage Jugendhilfe Berlin", "Platz Jugendliche Berlin", "Anfrage Wohngruppe Berlin", "Krisenaufnahme anfragen Berlin", "Jugendamt Anfrage Berlin", "Platzanfrage Jugendhilfe deutschlandweit", "Wohngruppe Aufnahme Österreich Schweiz", "freier Träger Fachplatz anfragen"],
  alternates: { canonical: "https://www.ankernetz.com/platzanfrage" },
  openGraph: {
    title: "Platzanfrage | Jugendamt & Fachkräfte - Ankernetz Berlin",
    description: "Platzanfrage für Jugendhilfeleistungen stellen. Rückmeldung innerhalb von 24 Stunden, Krisenaufnahmen 24/7.",
    url: "https://www.ankernetz.com/platzanfrage",
  },
};

export default function PlatzanfrageLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
