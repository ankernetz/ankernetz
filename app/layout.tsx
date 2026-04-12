import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ankernetz — Stabilität in Krisen. Perspektiven für junge Menschen.",
  description:
    "Ankernetz ist ein Netzwerk aus spezialisierten Hilfen für Kinder und Jugendliche — Krisenintervention, Therapie, Wohnen, Diagnostik, Beratung und Übergang in Arbeit.",
  keywords: [
    "Jugendhilfe", "Krisenintervention", "Therapeutisches Wohnen",
    "Diagnostik", "Jugendamt", "Kinder", "Jugendliche",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${GeistSans.variable} ${inter.variable}`}>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
