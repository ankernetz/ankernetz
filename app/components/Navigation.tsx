"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const megaMenu = [
  {
    kategorie: "Krise & Schutz",
    farbe: "#ef4444",
    items: [
      { label: "Krisenintervention", href: "/krisenintervention", sub: "24/7 Sofortaufnahme" },
      { label: "Frühe Hilfen", href: "/fruehe-hilfen", sub: "Kleinkinder 0–6 Jahre" },
    ],
  },
  {
    kategorie: "Wohnen & Therapie",
    farbe: "#4A7FA5",
    items: [
      { label: "Therapie & Wohnen", href: "/therapie-wohnen", sub: "Therapeutische Wohngruppen" },
      { label: "Jugendhilfe", href: "/jugendhilfe", sub: "Kinderwohngruppen 6–12 J." },
      { label: "Psychotherapie", href: "/psychotherapie", sub: "Mit Kassensitz" },
    ],
  },
  {
    kategorie: "Diagnostik & Beratung",
    farbe: "#8b5cf6",
    items: [
      { label: "Diagnostik & Clearing", href: "/diagnostik-clearing", sub: "Einschätzung & Gutachten" },
      { label: "Beratung & Prävention", href: "/beratung-praevention", sub: "Niedrigschwellig & online" },
      { label: "Beratung in Kitas", href: "/kita-beratung", sub: "Fachberatung vor Ort" },
    ],
  },
  {
    kategorie: "Versorgung & Perspektive",
    farbe: "#10b981",
    items: [
      { label: "Übergang Arbeit", href: "/uebergang-arbeit", sub: "Schule → Beruf" },
      { label: "Versorgung", href: "/versorgung", sub: "Ausstattung & Bedarfe" },
      { label: "Ankerkleidung", href: "/ankerkleidung", sub: "Shop nach Störungsbild" },
    ],
  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [megaTimer, setMegaTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMega = () => {
    if (megaTimer) clearTimeout(megaTimer);
    setMegaOpen(true);
  };

  const closeMega = () => {
    const t = setTimeout(() => setMegaOpen(false), 150);
    setMegaTimer(t);
  };

  const isLight = !scrolled && !menuOpen;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? "bg-white/96 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-6 h-[56px] flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className={`flex items-center gap-2.5 transition-colors ${isLight ? "text-white" : "text-[#1A1A2E]"}`}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
            <path d="M14 7v14M7 14h14M10 10.5l8 7M18 10.5l-8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-base font-bold tracking-tight">Ankernetz</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">

          {/* Angebote Mega-Menü */}
          <div onMouseEnter={openMega} onMouseLeave={closeMega}>
            <button className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${isLight ? "text-white/90 hover:text-white" : "text-[#1D1D1F] hover:text-[#4A7FA5]"}`}>
              Angebote
              <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}>
                <path d="M0 0l5 6 5-6z" />
              </svg>
            </button>
          </div>

          {[
            { label: "Über uns", href: "/ueber-uns" },
            { label: "Karriere", href: "/karriere" },
            { label: "Kontakt", href: "/kontakt" },
          ].map((item) => (
            <Link key={item.href} href={item.href}
              className={`text-sm font-medium transition-colors ${isLight ? "text-white/90 hover:text-white" : "text-[#1D1D1F] hover:text-[#4A7FA5]"}`}>
              {item.label}
            </Link>
          ))}

          {/* Notfall-CTA */}
          <a href="tel:+49000000"
            className="text-sm font-semibold bg-red-600 text-white px-4 py-1.5 rounded-full hover:bg-red-700 transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Notfall 24/7
          </a>

          {/* Platzanfrage CTA */}
          <Link href="/platzanfrage"
            className="text-sm font-semibold bg-[#1A1A2E] text-white px-5 py-1.5 rounded-full hover:bg-[#2a2a3e] transition-colors border border-white/10">
            Platzanfrage
          </Link>
        </div>

        {/* MOBILE BURGER */}
        <button
          className={`lg:hidden transition-colors ${isLight ? "text-white" : "text-[#1A1A2E]"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          {menuOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </nav>

      {/* MEGA-MENÜ DROPDOWN */}
      {megaOpen && (
        <div
          onMouseEnter={openMega}
          onMouseLeave={closeMega}
          className="hidden lg:block absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-black/5"
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-4 gap-8">
              {megaMenu.map((gruppe) => (
                <div key={gruppe.kategorie}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full" style={{ background: gruppe.farbe }} />
                    <p className="text-xs font-bold uppercase tracking-widest text-[#6E6E73]">
                      {gruppe.kategorie}
                    </p>
                  </div>
                  <div className="space-y-1">
                    {gruppe.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMegaOpen(false)}
                        className="block px-3 py-2.5 rounded-xl hover:bg-[#F5F5F7] transition-colors group"
                      >
                        <p className="text-sm font-semibold text-[#1A1A2E] group-hover:text-[#4A7FA5] transition-colors">
                          {item.label}
                        </p>
                        <p className="text-xs text-[#6E6E73] mt-0.5">{item.sub}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Bottom strip */}
            <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
              <p className="text-sm text-[#6E6E73]">Unsicher welches Angebot passt?</p>
              <Link
                href="/kontakt"
                onClick={() => setMegaOpen(false)}
                className="text-sm font-semibold text-[#4A7FA5] hover:underline flex items-center gap-1"
              >
                Wir beraten Sie gerne
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h8M7 3l4 4-4 4" /></svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-black/5 max-h-[85vh] overflow-y-auto">
          <div className="px-6 py-4">
            {/* Notfall oben */}
            <a href="tel:+49000000"
              className="flex items-center gap-2 w-full mb-4 py-3 px-4 bg-red-600 text-white rounded-xl font-semibold text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Notfall 24/7 — Jetzt anrufen
            </a>

            {megaMenu.map((gruppe) => (
              <div key={gruppe.kategorie} className="mb-5">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 px-1" style={{ color: gruppe.farbe }}>
                  {gruppe.kategorie}
                </p>
                {gruppe.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex justify-between items-center py-2.5 px-1 border-b border-black/5 text-sm text-[#1D1D1F] hover:text-[#4A7FA5] transition-colors"
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="text-xs text-[#6E6E73]">{item.sub}</span>
                  </Link>
                ))}
              </div>
            ))}

            <div className="pt-4 space-y-2">
              {[
                { label: "Über uns", href: "/ueber-uns" },
                { label: "Karriere", href: "/karriere" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                  className="block py-2 text-sm text-[#1D1D1F] font-medium">
                  {item.label}
                </Link>
              ))}
              <Link href="/platzanfrage" onClick={() => setMenuOpen(false)}
                className="block mt-4 text-center text-sm font-bold bg-[#1A1A2E] text-white px-4 py-3 rounded-full">
                Platzanfrage stellen
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
