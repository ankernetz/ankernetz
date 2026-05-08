import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankerkleidung | Spezialisierte Kleidung nach Störungsbild für Kinder & Jugendliche",
  description:
    "Ankerkleidung bietet spezialisierte Kleidung für Kinder und Jugendliche mit ADHS, Autismus, Trauma, Angststörungen und Bindungsstörungen. Sensorisch abgestimmt, nach Störungsbild ausgewählt. Teil des Ankernetz-Hilfesystems.",
  keywords: [
    "Ankerkleidung",
    "Kleidung nach Störungsbild",
    "sensorische Kleidung Kinder",
    "Kleidung ADHS Kinder",
    "Kleidung Autismus Kinder",
    "Kleidung Trauma Kinder",
    "Kleidung Angststörungen Kinder",
    "Kleidung Bindungsstörungen",
    "sensorische Kleidung Autismus Spektrum",
    "taktile Kleidung Kinder",
    "Kleidung Jugendhilfe",
    "Calm Hoodie",
    "Gewichtsweste Kinder",
    "Kleidung PTBS Kinder",
    "Kleidung für Kinder mit besonderem Förderbedarf",
    "Erstausstattung Jugendhilfe",
    "Kleidung Wohngruppe Kinder",
    "sensorische Integration Kleidung",
  ],
  alternates: { canonical: "https://www.ankernetz.com/ankerkleidung" },
  openGraph: {
    title: "Ankerkleidung – Spezialisierte Kleidung nach Störungsbild",
    description:
      "Kleidung für Kinder und Jugendliche mit ADHS, Autismus, Trauma, Angststörungen und Bindungsstörungen. Sensorisch abgestimmt, nach Störungsbild. Teil des Ankernetz-Hilfesystems.",
    url: "https://www.ankernetz.com/ankerkleidung",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Store",
      "@id": "https://www.ankernetz.com/ankerkleidung#store",
      name: "Ankerkleidung",
      url: "https://www.ankernetz.com/ankerkleidung",
      description:
        "Ankerkleidung ist ein spezialisierter Shop für Kleidung nach Störungsbild. Für Kinder und Jugendliche mit ADHS, Autismus-Spektrum, Trauma & PTBS, Angststörungen und Bindungsstörungen.",
      parentOrganization: { "@id": "https://www.ankernetz.com/#organization" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Kleidung nach Störungsbild",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Kleidung für ADHS & Hyperaktivität", description: "Bewegungsfreundliche, robuste Kleidung mit Elementen zur motorischen Entladung für Kinder mit ADHS" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Kleidung für Autismus-Spektrum", description: "Sensorisch angepasste Kleidung ohne störende Nähte, mit weichen Materialien für Kinder mit Autismus" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Kleidung für Trauma & PTBS", description: "Beruhigende, körpernahe Kleidung mit Druckelementen für traumatisierte Kinder und Jugendliche" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Calm Hoodie", description: "Spezieller Beruhigungs-Hoodie für Kinder mit Angststörungen und Bindungsstörungen" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Kleidung für Angststörungen", description: "Kleidung die Sicherheit und Geborgenheit vermittelt für Kinder mit Angststörungen" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Erstausstattungspakete Jugendhilfe", description: "Komplette Erstausstattung für Kinder in Wohngruppen und Pflegefamilien" } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Was ist Ankerkleidung?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ankerkleidung ist ein spezialisiertes Kleidungsangebot von Ankernetz für Kinder und Jugendliche mit besonderen Bedürfnissen. Die Kleidung wird nach Störungsbild ausgewählt – also gezielt für ADHS, Autismus, Trauma, Angststörungen oder Bindungsstörungen. Jedes Kleidungsstück ist sensorisch abgestimmt und unterstützt das Kind in seinem spezifischen Alltag.",
          },
        },
        {
          "@type": "Question",
          name: "Für welche Störungsbilder gibt es Ankerkleidung?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ankerkleidung bietet spezialisierte Kollektionen für: ADHS & Hyperaktivität, Autismus-Spektrum, Trauma & PTBS, Angststörungen, Bindungsstörungen sowie Erstausstattungspakete für Kinder in Wohngruppen und Pflegefamilien.",
          },
        },
        {
          "@type": "Question",
          name: "Wer bezahlt die Ankerkleidung für ein Kind in der Jugendhilfe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Die Kosten können über das Jugendamt (Taschengeld/Bekleidungsgeld nach SGB VIII), die Krankenkasse (bei medizinischer Indikation) oder direkt von Eltern getragen werden. Für Kinder in Wohngruppen übernimmt in der Regel der Jugendhilfeträger die Ausstattung.",
          },
        },
      ],
    },
  ],
};

export default function AnkerkleidungLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
