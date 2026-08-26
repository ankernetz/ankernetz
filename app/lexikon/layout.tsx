import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Wortlexikon Kinder- und Jugendhilfe",
  description:
    "Alphabetisches Nachschlagewerk der wichtigsten Fachbegriffe aus SGB VIII, Diagnostik und Jugendhilfe-Praxis - von ADHS bis Wohngruppe, verständlich erklärt.",
  keywords: [
    "Jugendhilfe Lexikon",
    "SGB VIII Begriffe Lexikon",
    "Wörterbuch Jugendhilfe",
    "Fachbegriffe Kinder- und Jugendhilfe",
    "Jugendhilfe Glossar Begriffe",
  ],
  alternates: { canonical: "https://www.ankernetz.com/lexikon" },
  openGraph: {
    title: "Wortlexikon Kinder- und Jugendhilfe - Ankernetz",
    description: "Alphabetisches Nachschlagewerk der wichtigsten Fachbegriffe aus SGB VIII, Diagnostik und Jugendhilfe-Praxis.",
    url: "https://www.ankernetz.com/lexikon",
  },
};

export default function LexikonLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
