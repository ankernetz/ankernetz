import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Krisenintervention Berlin | 24/7 Sofortaufnahme für Jugendliche",
  description:
    "Ankernetz bietet 24/7 Krisenintervention für Kinder und Jugendliche in Berlin. Sofortaufnahme rund um die Uhr, 365 Tage im Jahr. Direkte Zusammenarbeit mit Jugendämtern.",
  keywords: ["Krisenintervention Berlin", "24/7 Krisenintervention Jugendliche", "Sofortaufnahme Kinder Berlin", "Jugendliche in Not Berlin", "Krisendienst Berlin"],
  alternates: { canonical: "https://www.ankernetz.com/krisenintervention" },
  openGraph: {
    title: "Krisenintervention Berlin | 24/7 Sofortaufnahme - Ankernetz",
    description: "Sofortaufnahme für Kinder und Jugendliche in akuter Not. 24 Stunden, 7 Tage, 365 Tage im Jahr. Ankernetz Berlin.",
    url: "https://www.ankernetz.com/krisenintervention",
  },
};

export default function KriseninterventionLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
