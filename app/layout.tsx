import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

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
    <html lang="de" className={inter.variable}>
      <body>
        <Navigation />
        {children}
        <footer className="bg-[#1A1A2E] text-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <p className="text-2xl font-semibold tracking-tight mb-3">Ankernetz</p>
              <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs">
                Ein Netzwerk aus spezialisierten Hilfen für Kinder und Jugendliche.
                Professionell. Menschlich. Verlässlich.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6E6E73] mb-4">Angebote</p>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li><a href="/krisenintervention" className="hover:text-white transition-colors">Krisenintervention</a></li>
                <li><a href="/therapie-wohnen" className="hover:text-white transition-colors">Therapie &amp; Wohnen</a></li>
                <li><a href="/jugendhilfe" className="hover:text-white transition-colors">Jugendhilfe</a></li>
                <li><a href="/diagnostik-clearing" className="hover:text-white transition-colors">Diagnostik &amp; Clearing</a></li>
                <li><a href="/psychotherapie" className="hover:text-white transition-colors">Psychotherapie</a></li>
                <li><a href="/fruehe-hilfen" className="hover:text-white transition-colors">Frühe Hilfen</a></li>
                <li><a href="/versorgung" className="hover:text-white transition-colors">Versorgung</a></li>
                <li><a href="/beratung-praevention" className="hover:text-white transition-colors">Beratung &amp; Prävention</a></li>
                <li><a href="/uebergang-arbeit" className="hover:text-white transition-colors">Übergang Arbeit</a></li>
                <li><a href="/ankerkleidung" className="hover:text-white transition-colors">Ankerkleidung</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6E6E73] mb-4">Organisation</p>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li><a href="/ueber-uns" className="hover:text-white transition-colors">Über uns</a></li>
                <li><a href="/kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="/platzanfrage" className="hover:text-white transition-colors">Platzanfrage</a></li>
                <li><a href="/karriere" className="hover:text-white transition-colors">Karriere</a></li>
                <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-xs text-[#6E6E73]">
            © {new Date().getFullYear()} Ankernetz. Alle Rechte vorbehalten.
          </div>
        </footer>
      </body>
    </html>
  );
}
