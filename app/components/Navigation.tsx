"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLang } from "../contexts/LanguageContext";
import { tr } from "../i18n/translations";

export default function Navigation() {
  const { lang, toggle } = useLang();
  const n = tr[lang].nav;

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

  const megaMenu = [
    {
      kategorie: n.mega.kriseSchutz,
      items: [
        { label: n.mega.items.krisenintervention.label, href: "/krisenintervention", sub: n.mega.items.krisenintervention.sub },
        { label: n.mega.items.frueheHilfen.label,       href: "/fruehe-hilfen",      sub: n.mega.items.frueheHilfen.sub },
      ],
    },
    {
      kategorie: n.mega.wohnenTherapie,
      items: [
        { label: n.mega.items.therapieWohnen.label, href: "/therapie-wohnen",  sub: n.mega.items.therapieWohnen.sub },
        { label: n.mega.items.jugendhilfe.label,    href: "/jugendhilfe",      sub: n.mega.items.jugendhilfe.sub },
        { label: n.mega.items.psychotherapie.label, href: "/psychotherapie",   sub: n.mega.items.psychotherapie.sub },
      ],
    },
    {
      kategorie: n.mega.diagnostikBeratung,
      items: [
        { label: n.mega.items.diagnostik.label,   href: "/diagnostik-clearing",  sub: n.mega.items.diagnostik.sub },
        { label: n.mega.items.beratung.label,     href: "/beratung-praevention", sub: n.mega.items.beratung.sub },
        { label: n.mega.items.kitaBeratung.label, href: "/kita-beratung",        sub: n.mega.items.kitaBeratung.sub },
      ],
    },
    {
      kategorie: n.mega.versorgungPerspektive,
      items: [
        { label: n.mega.items.uebergangArbeit.label, href: "/uebergang-arbeit", sub: n.mega.items.uebergangArbeit.sub },
        { label: n.mega.items.versorgung.label,      href: "/versorgung",       sub: n.mega.items.versorgung.sub },
        { label: n.mega.items.ankerkleidung.label,   href: "/ankerkleidung",    sub: n.mega.items.ankerkleidung.sub },
      ],
    },
  ];

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
        <div className="hidden lg:flex items-center" style={{ gap: "2rem" }}>
          {/* Angebote dropdown trigger */}
          <div onMouseEnter={openMega} onMouseLeave={closeMega}>
            <button
              className="transition-colors flex items-center"
              style={{ fontSize: "13px", fontWeight: 400, color: "#1D1D1F", gap: "0.25rem" }}
            >
              {n.angebote}
              <svg width="9" height="5" viewBox="0 0 9 5" fill="currentColor"
                style={{ marginTop: "1px", opacity: 0.5, transition: "transform 0.2s", transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                <path d="M0 0l4.5 5L9 0z" />
              </svg>
            </button>
          </div>

          {[
            { label: n.ankerkleidung, href: "/ankerkleidung" },
            { label: n.ueberUns,      href: "/ueber-uns" },
            { label: n.karriere,      href: "/karriere"  },
            { label: n.kontakt,       href: "/kontakt"   },
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
              fontSize: "13px", fontWeight: 500, color: "#ffffff",
              background: "#d93025", border: "1px solid #d93025",
              borderRadius: "9999px", padding: "0.375rem 0.875rem",
              textDecoration: "none", gap: "0.375rem", whiteSpace: "nowrap",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "white", flexShrink: 0, animation: "pulse 2s infinite" }} />
            {n.notfall}
          </a>
          <Link
            href="/platzanfrage"
            className="transition-all nav-cta-primary"
            style={{
              fontSize: "13px", fontWeight: 500, color: "#ffffff",
              background: "#0071e3", border: "1px solid #3d6b8c",
              borderRadius: "9999px", padding: "0.375rem 1rem",
              textDecoration: "none", whiteSpace: "nowrap",
            }}
          >
            {n.platzanfrage}
          </Link>

          {/* Language toggle */}
          <button
            onClick={toggle}
            title={lang === "de" ? "Switch to English" : "Zu Deutsch wechseln"}
            style={{
              display: "flex", alignItems: "center", gap: "0.3rem",
              fontSize: "12px", fontWeight: 600, color: "#1D1D1F",
              background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.10)",
              borderRadius: "9999px", padding: "0.3rem 0.65rem",
              cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap",
              transition: "background 0.2s",
            }}
          >
            <span style={{ fontSize: "15px", lineHeight: 1 }}>
              {lang === "de" ? "🇬🇧" : "🇩🇪"}
            </span>
            <span>{lang === "de" ? "EN" : "DE"}</span>
          </button>
        </div>

        {/* Mobile right: language toggle + burger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            title={lang === "de" ? "Switch to English" : "Zu Deutsch wechseln"}
            style={{
              display: "flex", alignItems: "center", gap: "0.25rem",
              fontSize: "11px", fontWeight: 600, color: "#1D1D1F",
              background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.10)",
              borderRadius: "9999px", padding: "0.25rem 0.55rem",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: "13px", lineHeight: 1 }}>
              {lang === "de" ? "🇬🇧" : "🇩🇪"}
            </span>
            <span>{lang === "de" ? "EN" : "DE"}</span>
          </button>

          <button
            className="text-[#1D1D1F] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            {menuOpen
              ? <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 15L15 5M5 5l10 10" /></svg>
              : <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h14M3 10h14M3 14h14" /></svg>
            }
          </button>
        </div>
      </nav>

      {/* ── SEITEN-OVERLAY ── */}
      {megaOpen && (
        <div
          className="hidden lg:block fixed inset-0 z-40 pointer-events-none"
          style={{ top: "56px", background: "rgba(255,255,255,0.55)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
        />
      )}

      {/* ── MEGA-MENU ── */}
      {megaOpen && (
        <div
          onMouseEnter={openMega}
          onMouseLeave={closeMega}
          className="hidden lg:block absolute top-full left-0 right-0 z-50"
          style={{ background: "#ffffff", borderBottom: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 2.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "3rem" }}>
              {megaMenu.map((gruppe) => (
                <div key={gruppe.kategorie}>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "#1D1D1F", marginBottom: "1.25rem" }}>
                    {gruppe.kategorie}
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}>
                    {gruppe.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMegaOpen(false)}
                          style={{ display: "block", padding: "0.5rem 0.625rem", fontSize: "13px", fontWeight: 400, color: "#1D1D1F", textDecoration: "none", transition: "color 0.15s ease" }}
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
              {n.notfall}
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
                { label: n.ueberUns, href: "/ueber-uns" },
                { label: n.karriere, href: "/karriere"  },
                { label: n.kontakt,  href: "/kontakt"   },
              ].map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                  className="block py-3 text-[15px] font-medium text-[#1D1D1F]">
                  {item.label}
                </Link>
              ))}
            </div>

            <Link href="/platzanfrage" onClick={() => setMenuOpen(false)}
              className="btn btn-primary w-full justify-center">
              {n.platzanfrage}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
