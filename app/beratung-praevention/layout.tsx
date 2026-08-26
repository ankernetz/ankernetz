import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Beratung & Prävention Berlin | Kinder- und Jugendhilfe",
  description:
    "Präventive Beratung für Kinder, Jugendliche und Familien in Berlin. Ankernetz bietet niedrigschwellige Beratungsangebote und Präventionsprogramme in Zusammenarbeit mit Jugendämtern.",
  keywords: ["Beratung Kinder Jugendliche Berlin", "Prävention Jugendhilfe Berlin", "Familienberatung Berlin", "Jugendberatung Berlin", "Präventionsprogramm Berlin"],
  alternates: { canonical: "https://www.ankernetz.com/beratung-praevention" },
  openGraph: {
    title: "Beratung & Prävention Berlin | Ankernetz",
    description: "Niedrigschwellige Beratung und Präventionsprogramme für Kinder, Jugendliche und Familien in Berlin.",
    url: "https://www.ankernetz.com/beratung-praevention",
  },
};

export default function BeratungPraeventionLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
