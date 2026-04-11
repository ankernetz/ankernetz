"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const angebote = [
  { label: "Krisenintervention", href: "/krisenintervention" },
  { label: "Therapie & Wohnen", href: "/therapie-wohnen" },
  { label: "Jugendhilfe", href: "/jugendhilfe" },
  { label: "Diagnostik & Clearing", href: "/diagnostik-clearing" },
  { label: "Psychotherapie", href: "/psychotherapie" },
  { label: "Frühe Hilfen", href: "/fruehe-hilfen" },
  { label: "Versorgung", href: "/versorgung" },
  { label: "Beratung & Prävention", href: "/beratung-praevention" },
  { label: "Übergang Arbeit", href: "/uebergang-arbeit" },
  { label: "Ankerkleidung", href: "/ankerkleidung" },
  { label: "Beratung in Kitas", href: "/kita-beratung" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [angeboteOpen, setAngeboteOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-[52px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`text-base font-semibold tracking-tight transition-colors ${
            scrolled || menuOpen ? "text-[#1A1A2E]" : "text-white"
          }`}
        >
          Ankernetz
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          <div className="relative">
            <button
              onMouseEnter={() => setAngeboteOpen(true)}
              onMouseLeave={() => setAngeboteOpen(false)}
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                scrolled ? "text-[#1D1D1F] hover:text-[#4A7FA5]" : "text-white/90 hover:text-white"
              }`}
            >
              Angebote
              <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
                <path d="M0 0l5 6 5-6z" />
              </svg>
            </button>
            {angeboteOpen && (
              <div
                onMouseEnter={() => setAngeboteOpen(true)}
                onMouseLeave={() => setAngeboteOpen(false)}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-xl border border-black/5 py-2 min-w-[220px]"
              >
                {angebote.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="block px-5 py-2.5 text-sm text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { label: "Über uns", href: "/ueber-uns" },
            { label: "Kontakt", href: "/kontakt" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-[#1D1D1F] hover:text-[#4A7FA5]" : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/platzanfrage"
            className="text-sm font-medium bg-[#4A7FA5] text-white px-4 py-1.5 rounded-full hover:bg-[#3a6f95] transition-colors"
          >
            Platzanfrage
          </Link>
        </div>

        {/* Mobile Burger */}
        <button
          className={`md:hidden transition-colors ${
            scrolled || menuOpen ? "text-[#1A1A2E]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          {menuOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/5 px-6 py-6 space-y-1 max-h-[85vh] overflow-y-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6E6E73] mb-3">Angebote</p>
          {angebote.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm text-[#1D1D1F] hover:text-[#4A7FA5] transition-colors border-b border-black/5"
            >
              {a.label}
            </Link>
          ))}
          <div className="pt-4 space-y-2">
            <Link href="/ueber-uns" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-[#1D1D1F]">Über uns</Link>
            <Link href="/kontakt" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-[#1D1D1F]">Kontakt</Link>
            <Link
              href="/platzanfrage"
              onClick={() => setMenuOpen(false)}
              className="block mt-4 text-center text-sm font-medium bg-[#4A7FA5] text-white px-4 py-2.5 rounded-full hover:bg-[#3a6f95] transition-colors"
            >
              Platzanfrage stellen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
