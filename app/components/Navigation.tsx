"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const megaMenu = [
  {
    kategorie: "Krise & Schutz",
    farbe: "#ef4444",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    items: [
      { label: "Krisenintervention", href: "/krisenintervention", sub: "24/7 Sofortaufnahme" },
      { label: "Frühe Hilfen", href: "/fruehe-hilfen", sub: "Kleinkinder 0–6 Jahre" },
    ],
  },
  {
    kategorie: "Wohnen & Therapie",
    farbe: "#4A7FA5",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    items: [
      { label: "Therapie & Wohnen", href: "/therapie-wohnen", sub: "Therapeutische Wohngruppen" },
      { label: "Jugendhilfe", href: "/jugendhilfe", sub: "Kinderwohngruppen 6–12 J." },
      { label: "Psychotherapie", href: "/psychotherapie", sub: "Mit Kassensitz" },
    ],
  },
  {
    kategorie: "Diagnostik & Beratung",
    farbe: "#8b5cf6",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
      </svg>
    ),
    items: [
      { label: "Diagnostik & Clearing", href: "/diagnostik-clearing", sub: "Einschätzung & Gutachten" },
      { label: "Beratung & Prävention", href: "/beratung-praevention", sub: "Niedrigschwellig & online" },
      { label: "Beratung in Kitas", href: "/kita-beratung", sub: "Fachberatung vor Ort" },
    ],
  },
  {
    kategorie: "Versorgung & Perspektive",
    farbe: "#10b981",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
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
    const t = setTimeout(() => setMegaOpen(false), 180);
    setMegaTimer(t);
  };

  const isLight = !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.08)] border-b border-white/60"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 h-[58px] flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className={`flex items-center gap-2.5 transition-colors duration-300 ${isLight ? "text-white" : "text-[#1A1A2E]"}`}>
          <svg width="30" height="30" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
            <path d="M14 7v14M7 14h14M10 10.5l8 7M18 10.5l-8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-[15px] font-bold tracking-tight">Ankernetz</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-7">
          <div onMouseEnter={openMega} onMouseLeave={closeMega}>
            <button className={`text-[13px] font-medium transition-colors flex items-center gap-1.5 ${isLight ? "text-white/90 hover:text-white" : "text-[#1D1D1F] hover:text-[#4A7FA5]"}`}>
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
              className={`text-[13px] font-medium transition-colors ${isLight ? "text-white/90 hover:text-white" : "text-[#1D1D1F] hover:text-[#4A7FA5]"}`}>
              {item.label}
            </Link>
          ))}

          <a href="tel:+49000000"
            className="text-[13px] font-semibold bg-red-600 text-white px-4 py-1.5 rounded-full hover:bg-red-700 transition-colors flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" />
            Notfall 24/7
          </a>

          <Link href="/platzanfrage"
            className={`text-[13px] font-semibold px-5 py-1.5 rounded-full transition-colors ${
              isLight
                ? "bg-white text-[#1A1A2E] hover:bg-white/90"
                : "bg-[#1A1A2E] text-white hover:bg-[#2a2a3e]"
            }`}>
            Platzanfrage
          </Link>
        </div>

        {/* MOBILE BURGER */}
        <button className={`lg:hidden ${isLight ? "text-white" : "text-[#1A1A2E]"}`}
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü">
          {menuOpen
            ? <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
            : <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          }
        </button>
      </nav>

      {/* MEGA-MENÜ */}
      {megaOpen && (
        <div
          onMouseEnter={openMega}
          onMouseLeave={closeMega}
          className="hidden lg:block absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border-t border-black/5"
        >
          <div className="max-w-[1280px] mx-auto px-6 py-8">
            <div className="grid grid-cols-4 gap-6">
              {megaMenu.map((gruppe) => (
                <div key={gruppe.kategorie}>
                  {/* Kategorie-Header mit Icon */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-black/5">
                    <span style={{ color: gruppe.farbe }}>{gruppe.icon}</span>
                    <p className="text-xs font-black uppercase tracking-widest" style={{ color: gruppe.farbe }}>
                      {gruppe.kategorie}
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    {gruppe.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMegaOpen(false)}
                        className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-[#F5F5F7] transition-colors group"
                      >
                        <div>
                          <p className="text-[13px] font-semibold text-[#1A1A2E] group-hover:text-[#4A7FA5] transition-colors leading-tight">
                            {item.label}
                          </p>
                          <p className="text-[11px] text-[#9CA3AF] mt-0.5">{item.sub}</p>
                        </div>
                        <svg width="12" height="12" fill="none" stroke="#9CA3AF" strokeWidth="2"
                          className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                          <path d="M2 6h8M6 2l4 4-4 4" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom strip */}
            <div className="mt-6 pt-5 border-t border-black/5 flex items-center justify-between">
              <p className="text-[13px] text-[#6E6E73]">
                Nicht sicher, welches Angebot passt?
              </p>
              <Link href="/kontakt" onClick={() => setMegaOpen(false)}
                className="text-[13px] font-semibold text-[#4A7FA5] hover:underline flex items-center gap-1.5">
                Kontaktieren Sie uns direkt
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h8M7 3l4 4-4 4" /></svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-black/5 max-h-[85vh] overflow-y-auto">
          <div className="px-6 py-4">
            <a href="tel:+49000000"
              className="flex items-center gap-2 w-full mb-5 py-3 px-4 bg-red-600 text-white rounded-xl font-semibold text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Notfall 24/7 — Jetzt anrufen
            </a>
            {megaMenu.map((gruppe) => (
              <div key={gruppe.kategorie} className="mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <span style={{ color: gruppe.farbe }}>{gruppe.icon}</span>
                  <p className="text-[11px] font-black uppercase tracking-widest" style={{ color: gruppe.farbe }}>
                    {gruppe.kategorie}
                  </p>
                </div>
                {gruppe.items.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                    className="flex justify-between items-center py-2.5 px-1 border-b border-black/5 text-[13px] text-[#1D1D1F] hover:text-[#4A7FA5] transition-colors">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-[11px] text-[#9CA3AF]">{item.sub}</span>
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-4 space-y-2 border-t border-black/5">
              {[
                { label: "Über uns", href: "/ueber-uns" },
                { label: "Karriere", href: "/karriere" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                  className="block py-2 text-[13px] text-[#1D1D1F] font-medium">{item.label}</Link>
              ))}
              <Link href="/platzanfrage" onClick={() => setMenuOpen(false)}
                className="block mt-4 text-center text-[13px] font-bold bg-[#1A1A2E] text-white px-4 py-3 rounded-full">
                Platzanfrage stellen
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
