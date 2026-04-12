"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const megaMenu = [
  {
    kategorie: "Krise & Schutz",
    items: [
      { label: "Krisenintervention",  href: "/krisenintervention",   sub: "24/7 Sofortaufnahme" },
      { label: "Frühe Hilfen",        href: "/fruehe-hilfen",        sub: "Kleinkinder 0–6 Jahre" },
    ],
  },
  {
    kategorie: "Wohnen & Therapie",
    items: [
      { label: "Therapie & Wohnen",   href: "/therapie-wohnen",      sub: "Therapeutische Wohngruppen" },
      { label: "Jugendhilfe",         href: "/jugendhilfe",          sub: "Kinderwohngruppen 6–12 J." },
      { label: "Psychotherapie",      href: "/psychotherapie",       sub: "Mit Kassensitz" },
    ],
  },
  {
    kategorie: "Diagnostik & Beratung",
    items: [
      { label: "Diagnostik & Clearing", href: "/diagnostik-clearing",  sub: "Einschätzung & Gutachten" },
      { label: "Beratung & Prävention", href: "/beratung-praevention", sub: "Niedrigschwellig & online" },
      { label: "Beratung in Kitas",     href: "/kita-beratung",        sub: "Fachberatung vor Ort" },
    ],
  },
  {
    kategorie: "Versorgung & Perspektive",
    items: [
      { label: "Übergang Arbeit",  href: "/uebergang-arbeit", sub: "Schule → Beruf" },
      { label: "Versorgung",       href: "/versorgung",       sub: "Ausstattung & Bedarfe" },
      { label: "Ankerkleidung",    href: "/ankerkleidung",    sub: "Shop nach Störungsbild" },
    ],
  },
];

export default function Navigation() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [megaOpen, setMegaOpen]   = useState(false);
  const [megaTimer, setMegaTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMega  = () => { if (megaTimer) clearTimeout(megaTimer); setMegaOpen(true); };
  const closeMega = () => { const t = setTimeout(() => setMegaOpen(false), 200); setMegaTimer(t); };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        borderBottom: scrolled || megaOpen || menuOpen
          ? "1px solid rgba(0,0,0,0.08)"
          : "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* ── NAVBAR ── */}
      <nav className="site-container h-[52px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-[#1D1D1F] flex-shrink-0">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
            <path d="M14 7v14M7 14h14M10 10.5l8 7M18 10.5l-8 7"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-[15px] font-semibold tracking-tight">Ankernetz</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Angebote dropdown trigger */}
          <div onMouseEnter={openMega} onMouseLeave={closeMega}>
            <button
              className="text-[13px] text-[#1D1D1F] hover:text-black transition-colors flex items-center gap-1"
              style={{ fontWeight: 400 }}
            >
              Angebote
              <svg width="9" height="5" viewBox="0 0 9 5" fill="currentColor"
                className={`mt-px opacity-60 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}>
                <path d="M0 0l4.5 5L9 0z" />
              </svg>
            </button>
          </div>

          {[
            { label: "Über uns", href: "/ueber-uns" },
            { label: "Karriere", href: "/karriere"  },
            { label: "Kontakt",  href: "/kontakt"   },
          ].map((item) => (
            <Link key={item.href} href={item.href}
              className="text-[13px] text-[#1D1D1F] hover:text-black transition-colors"
              style={{ fontWeight: 400 }}>
              {item.label}
            </Link>
          ))}

          {/* CTAs */}
          <a href="tel:+4930224543220" className="btn btn-danger btn-sm flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" />
            Notfall 24/7
          </a>
          <Link href="/platzanfrage" className="btn btn-primary btn-sm">
            Platzanfrage
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden text-[#1D1D1F] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          {menuOpen
            ? <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 15L15 5M5 5l10 10" /></svg>
            : <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h14M3 10h14M3 14h14" /></svg>
          }
        </button>
      </nav>

      {/* ── SEITEN-OVERLAY (milchig) ── */}
      {megaOpen && (
        <div
          className="hidden lg:block fixed inset-0 z-40 pointer-events-none"
          style={{
            top: "52px",
            background: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        />
      )}

      {/* ── MEGA-MENÜ (weiß, Apple-Stil) ── */}
      {megaOpen && (
        <div
          onMouseEnter={openMega}
          onMouseLeave={closeMega}
          className="hidden lg:block absolute top-full left-0 right-0 z-50"
          style={{
            background: "#ffffff",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
          }}
        >
          <div className="site-container py-10">
            <div className="grid grid-cols-4 gap-12">
              {megaMenu.map((gruppe) => (
                <div key={gruppe.kategorie}>
                  {/* Kategorie-Header */}
                  <p style={{ fontSize: "11px", fontWeight: 600, color: "#6E6E73", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "1.25rem" }}>
                    {gruppe.kategorie}
                  </p>

                  {/* Items */}
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}>
                    {gruppe.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMegaOpen(false)}
                          style={{
                            display: "block",
                            padding: "0.45rem 0",
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "#1D1D1F",
                            textDecoration: "none",
                            transition: "color 0.15s ease",
                          }}
                          className="mega-item"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom strip */}
            <div className="mt-8 pt-6 flex items-center justify-between"
              style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
              <p className="text-[13px] text-[#6E6E73]">
                Nicht sicher, welches Angebot passt?
              </p>
              <Link
                href="/kontakt"
                onClick={() => setMegaOpen(false)}
                className="text-[13px] font-medium text-[#4A7FA5] hover:text-[#2d6a8f] transition-colors flex items-center gap-1"
              >
                Kontaktieren Sie uns direkt
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" className="mt-px">
                  <path d="M2 6.5h8M7 3l3.5 3.5L7 10" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#F0F0F0] max-h-[85vh] overflow-y-auto">
          <div className="px-6 py-5">
            <a href="tel:+4930224543220" className="btn btn-danger w-full mb-6 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Notfall 24/7 — Jetzt anrufen
            </a>

            {megaMenu.map((gruppe) => (
              <div key={gruppe.kategorie} className="mb-6">
                <p className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.12em] mb-3">
                  {gruppe.kategorie}
                </p>
                {gruppe.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex justify-between items-center py-3 border-b border-[#F5F5F7]"
                  >
                    <span className="text-[15px] font-semibold text-[#1D1D1F]">{item.label}</span>
                    <span className="text-[12px] text-[#9CA3AF]">{item.sub}</span>
                  </Link>
                ))}
              </div>
            ))}

            <div className="pt-4 border-t border-[#F0F0F0] space-y-1 mb-4">
              {[
                { label: "Über uns", href: "/ueber-uns" },
                { label: "Karriere", href: "/karriere"  },
                { label: "Kontakt",  href: "/kontakt"   },
              ].map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                  className="block py-3 text-[15px] font-medium text-[#1D1D1F]">
                  {item.label}
                </Link>
              ))}
            </div>

            <Link href="/platzanfrage" onClick={() => setMenuOpen(false)}
              className="btn btn-primary w-full justify-center">
              Platzanfrage stellen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
