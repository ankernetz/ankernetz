import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import CookieBanner from "./components/CookieBanner";
import { LanguageProvider } from "./contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://www.ankernetz.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ankernetz Berlin | Jugendhilfe · Krisenintervention · Therapeutisches Wohnen",
    template: "%s | Ankernetz Berlin",
  },
  description:
    "Ankernetz bietet spezialisierte Hilfen für Kinder und Jugendliche mit Standort in Berlin: 24/7 Krisenintervention, Psychotherapie mit Kassensitz, Frühe Hilfen, therapeutische Wohngruppen, Diagnostik & Beratung. Aufnahmen aus ganz Deutschland, Österreich und der Schweiz möglich.",
  keywords: [
    "Ankernetz",
    "Ankernetz Berlin",
    "ankernetz.com",
    "Ankerkleidung",
    "Kleidung nach Störungsbild",
    "sensorische Kleidung Kinder",
    "Kleidung ADHS Autismus Trauma",
    "Jugendhilfe Berlin",
    "Krisenintervention Berlin 24/7",
    "Therapeutisches Wohnen Jugendliche Berlin",
    "Kinderpsychotherapie Berlin Kassensitz",
    "Frühe Hilfen Berlin",
    "Kinder- und Jugendhilfe Berlin",
    "Jugendamt Berlin Hilfen",
    "Wohngruppe Jugendliche Berlin",
    "Diagnostik Kinder Berlin",
    "Erziehungsberatung Berlin",
    "stationäre Jugendhilfe",
    "freier Träger Jugendhilfe bundesweit",
    "Jugendhilfe Träger Deutschland",
    "Fachplatz Jugendhilfe deutschlandweit",
    "Wohngruppe Aufnahme aus Österreich",
    "Jugendhilfe Aufnahme Schweiz",
    "überregionale Jugendhilfe Vermittlung",
    "kein Platz frei Wohngruppe Kanton",
    "kein freier Platz Jugendhilfeeinrichtung Bundesland",
    "sozialpädagogische Einrichtung Aufnahme aus dem Ausland",
    "Notfallplatz Jugendlicher Ausland",
  ],
  authors: [{ name: "Ankernetz", url: BASE_URL }],
  creator: "Ankernetz",
  publisher: "Ankernetz",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: {
    canonical: BASE_URL,
    languages: { "de-DE": BASE_URL, "en": `${BASE_URL}?lang=en` },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE_URL,
    siteName: "Ankernetz",
    title: "Ankernetz Berlin | Jugendhilfe · Krisenintervention · Therapeutisches Wohnen",
    description:
      "Spezialisierte Hilfen für Kinder und Jugendliche in Berlin. 24/7 Krisenintervention, Psychotherapie, Frühe Hilfen, therapeutische Wohngruppen, Diagnostik & Beratung.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ankernetz - Hilfen für Kinder und Jugendliche in Berlin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankernetz Berlin | Kinder- und Jugendhilfe",
    description: "24/7 Krisenintervention, Psychotherapie, Frühe Hilfen und mehr für Kinder und Jugendliche in Berlin.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "WKVeYSRzufixO36O97rk8m9cbUZFQ4-dCibeQKqSEKw",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Ankernetz",
      alternateName: "Ankernetz Kinder- und Jugendhilfe Berlin",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.svg`,
        width: 512,
        height: 512,
      },
      image: `${BASE_URL}/logo.svg`,
      description:
        "Ankernetz ist ein Netzwerk spezialisierter Hilfen für Kinder und Jugendliche mit Standort in Berlin - von der Krisenintervention über Psychotherapie und therapeutisches Wohnen bis zu Frühen Hilfen, Diagnostik und Beratung. Aufnahmen aus Deutschland, Österreich und der Schweiz möglich.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Friedrich-Franz-Str. 13",
        addressLocality: "Berlin",
        postalCode: "12103",
        addressCountry: "DE",
      },
      telephone: "+49-30-22454322",
      areaServed: [
        { "@type": "Country", name: "Deutschland" },
        { "@type": "Country", name: "Österreich" },
        { "@type": "Country", name: "Schweiz" },
      ],
      knowsAbout: [
        "Jugendhilfe", "Krisenintervention", "Kinder- und Jugendpsychotherapie",
        "Frühe Hilfen", "Therapeutisches Wohnen", "Diagnostik", "Erziehungsberatung",
      ],
      sameAs: [
        "https://www.ankernetz.com",
        "https://github.com/ankernetz/ankernetz",
      ],
      foundingLocation: { "@type": "Place", name: "Berlin, Deutschland" },
      legalName: "Ankernetz",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Hilfsangebote Ankernetz",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Krisenintervention 24/7", url: `${BASE_URL}/krisenintervention` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kinder- und Jugendpsychotherapie", url: `${BASE_URL}/psychotherapie` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Frühe Hilfen", url: `${BASE_URL}/fruehe-hilfen` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Therapie & Wohnen", url: `${BASE_URL}/therapie-wohnen` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jugendhilfe", url: `${BASE_URL}/jugendhilfe` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diagnostik & Clearing", url: `${BASE_URL}/diagnostik-clearing` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beratung & Prävention", url: `${BASE_URL}/beratung-praevention` } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Ankernetz",
      description: "Spezialisierte Hilfen für Kinder und Jugendliche in Berlin",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "de-DE",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${GeistSans.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <Navigation />
          {children}
          <Footer />
          <ChatWidget />
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
