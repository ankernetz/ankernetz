import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Glossar & Häufige Fragen zur Jugendhilfe | Ankernetz Berlin",
  description:
    "SGB VIII, Jugendamt, Inobhutnahme, Hilfeplan und mehr - alle wichtigen Begriffe und Fragen zur Kinder- und Jugendhilfe in Berlin und Brandenburg verständlich erklärt.",
  keywords: [
    "Jugendhilfe Glossar",
    "SGB VIII erklärt",
    "was bedeutet Inobhutnahme",
    "Jugendhilfe Begriffe",
    "Hilfeplan Jugendamt",
    "Jugendhilfe FAQ Berlin",
    "Unterschied Jugendhilfe Sozialhilfe",
  ],
  alternates: { canonical: "https://www.ankernetz.com/glossar" },
  openGraph: {
    title: "Glossar & Häufige Fragen zur Jugendhilfe - Ankernetz",
    description: "SGB VIII, Jugendamt, Hilfeplan und mehr - verständlich erklärt für Eltern und Fachkräfte in Berlin und Brandenburg.",
    url: "https://www.ankernetz.com/glossar",
  },
};

export default function GlossarLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
