import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Übergang Arbeit Berlin | Berufliche Integration Jugendliche",
  description:
    "Unterstützung beim Übergang in Ausbildung und Arbeit für Jugendliche in Berlin. Ankernetz begleitet junge Menschen mit sozialpädagogischer Unterstützung in Ausbildung, Schule und Beruf.",
  keywords: ["Übergang Ausbildung Jugendliche Berlin", "berufliche Integration Jugendliche Berlin", "Übergangsmanagement Schule Beruf Berlin", "Jugendhilfe Ausbildung Berlin", "Ausbildungsbegleitung Berlin"],
  alternates: { canonical: "https://www.ankernetz.com/uebergang-arbeit" },
  openGraph: {
    title: "Übergang Arbeit Berlin | Berufliche Integration - Ankernetz",
    description: "Sozialpädagogische Begleitung beim Übergang in Ausbildung und Beruf für Jugendliche in Berlin.",
    url: "https://www.ankernetz.com/uebergang-arbeit",
  },
};

export default function UebergangArbeitLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
