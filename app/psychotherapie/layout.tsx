import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Kinderpsychotherapie Berlin mit Kassensitz – Ankernetz",
  description:
    "Kinder- und Jugendpsychotherapie in Berlin mit Kassensitz. Direkt eingebunden in alle Hilfeprozesse, dort wo Kinder und Jugendliche leben. Ankernetz Berlin.",
  keywords: ["Kinderpsychotherapie Berlin", "Jugendpsychotherapie Berlin Kassensitz", "Psychotherapeut Kind Berlin Kassenplatz", "KJP Berlin", "Psychotherapie Kinder Berlin gesetzliche Krankenkasse"],
  alternates: { canonical: "https://www.ankernetz.com/psychotherapie" },
  openGraph: {
    title: "Kinderpsychotherapie Berlin mit Kassensitz – Ankernetz",
    description: "Kinder- und Jugendpsychotherapie mit Kassensitz, direkt eingebunden in Jugendhilfe-Prozesse. Berlin.",
    url: "https://www.ankernetz.com/psychotherapie",
  },
};

export default function PsychotherapieLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
