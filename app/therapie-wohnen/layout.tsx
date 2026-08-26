import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Therapeutische Wohngruppe Berlin | Jugendliche 12-17 Jahre",
  description:
    "Therapeutische Wohngruppen für Jugendliche von 12 bis 17 Jahren in Berlin. Intensive Begleitung, Traumaarbeit und therapeutisches Wohnen. Ankernetz Berlin.",
  keywords: ["Therapeutische Wohngruppe Berlin", "Therapie und Wohnen Jugendliche Berlin", "Therapeutisches Wohnen Berlin", "stationäre Jugendhilfe Therapie Berlin", "Traumaarbeit Jugendliche Berlin"],
  alternates: { canonical: "https://www.ankernetz.com/therapie-wohnen" },
  openGraph: {
    title: "Therapeutische Wohngruppe Berlin | 12-17 Jahre - Ankernetz",
    description: "Therapeutische Wohngruppen mit intensiver Begleitung und Traumaarbeit für Jugendliche in Berlin.",
    url: "https://www.ankernetz.com/therapie-wohnen",
  },
};

export default function TherapieWohnenLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
