import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
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
    <html lang="de" className={inter.variable}>
      <body>
        <Navigation />
        {children}

        {/* ===== FOOTER ===== */}
        <footer className="bg-[#0f172a] text-white">

          {/* Notfall-Banner */}
          <div className="bg-red-700 py-4 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <p className="text-sm font-semibold">Krisenintervention — 24 Stunden, 7 Tage die Woche erreichbar</p>
              </div>
              <a href="tel:+49000000" className="text-sm font-bold bg-white text-red-700 px-5 py-1.5 rounded-full hover:bg-red-50 transition-colors whitespace-nowrap">
                +49 (0) ___ ___ — Jetzt anrufen
              </a>
            </div>
          </div>

          {/* Haupt-Footer */}
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Spalte 1: Mission */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-5">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="1.5" />
                  <path d="M14 7v14M7 14h14M10 10.5l8 7M18 10.5l-8 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-xl font-bold tracking-tight">Ankernetz</span>
              </div>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
                Ein Netzwerk aus spezialisierten Hilfen für Kinder und Jugendliche.
                Vernetzt. Spezialisiert. Menschlich.
                Von der Krisenintervention bis zum Übergang ins Arbeitsleben.
              </p>
              <div className="flex gap-3">
                {/* Social Icons */}
                {["linkedin", "instagram", "facebook"].map((s) => (
                  <a key={s} href="#"
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <span className="text-xs text-white/60 font-medium">{s[0].toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Spalte 2: Angebote */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#4A7FA5] mb-5">Angebote</p>
              <ul className="space-y-2.5">
                {[
                  { label: "Krisenintervention", href: "/krisenintervention" },
                  { label: "Therapie & Wohnen", href: "/therapie-wohnen" },
                  { label: "Jugendhilfe", href: "/jugendhilfe" },
                  { label: "Psychotherapie", href: "/psychotherapie" },
                  { label: "Frühe Hilfen", href: "/fruehe-hilfen" },
                  { label: "Diagnostik & Clearing", href: "/diagnostik-clearing" },
                  { label: "Beratung & Prävention", href: "/beratung-praevention" },
                  { label: "Beratung in Kitas", href: "/kita-beratung" },
                  { label: "Übergang Arbeit", href: "/uebergang-arbeit" },
                  { label: "Ankerkleidung", href: "/ankerkleidung" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-[#94a3b8] hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Spalte 3: Kontakt */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#4A7FA5] mb-5">Kontakt</p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-[#64748b] uppercase tracking-wider mb-1">Allgemein</p>
                  <p className="text-sm text-[#94a3b8]">+49 (0) ___ ___</p>
                  <p className="text-sm text-[#94a3b8]">info@ankernetz.com</p>
                </div>
                <div>
                  <p className="text-xs text-red-400 uppercase tracking-wider mb-1 font-semibold">Notfall 24/7</p>
                  <p className="text-sm text-white font-semibold">+49 (0) ___ ___</p>
                </div>
                <div>
                  <p className="text-xs text-[#64748b] uppercase tracking-wider mb-1">Adresse</p>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    Musterstraße 1<br />
                    00000 Stadt
                  </p>
                </div>
                <Link href="/platzanfrage"
                  className="inline-block mt-2 text-sm font-semibold bg-[#4A7FA5] text-white px-5 py-2.5 rounded-full hover:bg-[#3a6f95] transition-colors">
                  Platzanfrage →
                </Link>
              </div>
            </div>

            {/* Spalte 4: Newsletter + Links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#4A7FA5] mb-5">Newsletter</p>
              <p className="text-sm text-[#94a3b8] mb-4 leading-relaxed">
                Aktuelle Informationen zu unseren Angeboten und Neuerungen.
              </p>
              <form className="space-y-3 mb-8">
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#4A7FA5]"
                />
                <button type="submit"
                  className="w-full py-2.5 bg-[#4A7FA5] text-white text-sm font-semibold rounded-xl hover:bg-[#3a6f95] transition-colors">
                  Anmelden
                </button>
              </form>

              <p className="text-xs font-bold uppercase tracking-widest text-[#4A7FA5] mb-4">Organisation</p>
              <ul className="space-y-2">
                {[
                  { label: "Über uns", href: "/ueber-uns" },
                  { label: "Karriere", href: "/karriere" },
                  { label: "Impressum", href: "/impressum" },
                  { label: "Datenschutz", href: "/datenschutz" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-[#94a3b8] hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bodenzeile */}
          <div className="border-t border-white/5 px-6 py-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#475569]">
              <p>© {new Date().getFullYear()} Ankernetz. Alle Rechte vorbehalten.</p>
              <div className="flex gap-6">
                <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
                <Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
