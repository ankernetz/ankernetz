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
      <nav style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo — unberührt */}
        <Link href="/" className="flex items-center gap-2 text-[#1D1D1F] flex-shrink-0">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
            <path d="M14 7v14M7 14h14M10 10.5l8 7M18 10.5l-8 7"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-[15px] font-semibold tracking-tight">Ankernetz</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center" style={{ gap: "2rem" }}>
          {/* Angebote dropdown trigger */}
          <div onMouseEnter={openMega} onMouseLeave={closeMega}>
            <button
              className="transition-colors flex items-center"
              style={{ fontSize: "13px", fontWeight: 400, color: "#1D1D1F", gap: "0.25rem" }}
            >
              Angebote
              <svg width="9" height="5" viewBox="0 0 9 5" fill="currentColor"
                style={{ marginTop: "1px", opacity: 0.5, transition: "transform 0.2s", transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
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
              className="transition-colors hover:text-black"
              style={{ fontSize: "13px", fontWeight: 400, color: "#1D1D1F", textDecoration: "none" }}>
              {item.label}
            </Link>
          ))}

          {/* CTAs */}
          <a
            href="tel:+4930224543220"
            className="flex items-center transition-all"
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "#ffffff",
              background: "#d93025",
              border: "1px solid #d93025",
              borderRadius: "9999px",
              padding: "0.375rem 0.875rem",
              textDecoration: "none",
              gap: "0.375rem",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "white", flexShrink: 0, animation: "pulse 2s infinite" }} />
            Notfall 24/7
          </a>
          <Link
            href="/platzanfrage"
            className="transition-all nav-cta-primary"
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "#ffffff",
              background: "#0071e3",
              border: "1px solid #3d6b8c",
              borderRadius: "9999px",
              padding: "0.375rem 1rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
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
            top: "56px",
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
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 2.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "3rem" }}>
              {megaMenu.map((gruppe) => (
                <div key={gruppe.kategorie}>
                  {/* Kategorie-Header */}
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "#1D1D1F", marginBottom: "1.25rem" }}>
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
                            padding: "0.5rem 0.625rem",
                            fontSize: "13px",
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
