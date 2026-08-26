import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Kita-Beratung Berlin | Fachberatung für Kindertagesstätten",
  description:
    "Professionelle Fachberatung für Kindertagesstätten und Kitas in Berlin. Ankernetz unterstützt Erzieherinnen und Erzieher bei herausfordernden Situationen, Inklusion und Entwicklungsförderung.",
  keywords: ["Kita-Beratung Berlin", "Fachberatung Kita Berlin", "Beratung Erzieher Berlin", "Kita Fachkraft Beratung Berlin", "Inklusion Kita Berlin"],
  alternates: { canonical: "https://www.ankernetz.com/kita-beratung" },
  openGraph: {
    title: "Kita-Beratung Berlin | Fachberatung für Kitas - Ankernetz",
    description: "Fachberatung für Kindertagesstätten und Erzieherinnen in Berlin. Professionelle Unterstützung bei schwierigen Situationen.",
    url: "https://www.ankernetz.com/kita-beratung",
  },
};

export default function KitaBeratungLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
