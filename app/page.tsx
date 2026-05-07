"use client";

import Link from "next/link";
import {
  AlertTriangle, Home, Brain, Baby, Search, Shirt,
  MessageCircle, Rocket, Building2, Heart, ArrowRight,
  Phone,
} from "lucide-react";
import { BlurFade } from "./components/BlurFade";
import { useLang } from "./contexts/LanguageContext";
import { tr } from "./i18n/translations";

/* ── Palette ───────────────────────────────────────────────────── */
const BLUE    = "#1E4A6E";   /* warm navy — Verlässlichkeit        */
const AMBER   = "#E8A020";   /* gold/amber — Wärme & Hoffnung      */
const AMBER_S = "#FEF3DC";   /* amber soft                         */
const TEAL    = "#0D7A8C";   /* teal — Leben & Perspektive         */
const TEAL_S  = "#E6F5F7";   /* teal soft                          */
const CREAM   = "#F8F4EE";   /* warm cream                         */
const WHITE   = "#FFFFFF";
const DARK    = "#1A1A2A";   /* near-black                         */

/* ── Services ─────────────────────────────────────────────────── */
const slugsMeta = [
  { slug: "krisenintervention",   icon: AlertTriangle, color: "#D93025", bg: "#FEF2F2" },
  { slug: "psychotherapie",       icon: Brain,         color: TEAL,      bg: TEAL_S   },
  { slug: "fruehe-hilfen",        icon: Baby,          color: AMBER,     bg: AMBER_S  },
  { slug: "therapie-wohnen",      icon: Home,          color: BLUE,      bg: "#EEF4FB"},
  { slug: "jugendhilfe",          icon: Heart,         color: "#C84B9E", bg: "#FDF2FA"},
  { slug: "diagnostik-clearing",  icon: Search,        color: TEAL,      bg: TEAL_S   },
  { slug: "beratung-praevention", icon: MessageCircle, color: AMBER,     bg: AMBER_S  },
  { slug: "kita-beratung",        icon: Building2,     color: BLUE,      bg: "#EEF4FB"},
  { slug: "uebergang-arbeit",     icon: Rocket,        color: "#2E7D32", bg: "#EBF5EC"},
  { slug: "ankerkleidung",        icon: Shirt,         color: "#6D28D9", bg: "#F3EFFD"},
  { slug: "versorgung",           icon: Heart,         color: AMBER,     bg: AMBER_S  },
];

/* ── Kategorien für übersichtliche Service-Darstellung ────────── */
const kategorien = [
  { label: { de: "Krise & Schutz",           en: "Crisis & Protection"    }, indices: [0, 2],    accent: "#D93025" },
  { label: { de: "Wohnen & Therapie",        en: "Housing & Therapy"      }, indices: [1, 3, 4], accent: TEAL      },
  { label: { de: "Diagnostik & Beratung",    en: "Diagnostics & Advice"   }, indices: [5, 6, 7], accent: BLUE      },
  { label: { de: "Versorgung & Perspektive", en: "Care & Perspective"     }, indices: [8, 9, 10],accent: "#2E7D32" },
];

export default function HomePage() {
  const { lang } = useLang();
  const T = tr[lang];

  const services = slugsMeta.map((m, i) => ({
    ...m,
    titel: T.angeboteTitel[i],
    claim: T.angebote[i].claim,
    badge: T.angebote[i].badge,
    kurz:  T.angebote[i].kurz,
  }));

  return (
    <main>

      {/* ════════════════════════════════════════════════════════
          1 · VIDEO HERO
      ════════════════════════════════════════════════════════ */}
      <section style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>

        {/* Fallback */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, background: `linear-gradient(160deg, #0a1f30 0%, ${BLUE} 50%, #041018 100%)` }} />

        {/* Video */}
        <video autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, zIndex: 1, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(to bottom, rgba(10,25,40,0.4) 0%, rgba(10,25,40,0.45) 55%, rgba(10,25,40,0.82) 100%)" }} />

        {/* Content */}
        <div style={{ position: "absolute", inset: 0, zIndex: 3, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 2rem 6rem", maxWidth: "1280px", margin: "0 auto", left: 0, right: 0 }}>

          {/* Notfall-Badge */}
          <div className="fade-in-up" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(217,48,37,0.9)", borderRadius: "6px", padding: "0.4rem 0.875rem", marginBottom: "2rem", width: "fit-content" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "white", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "white", letterSpacing: "0.05em" }}>{T.hero.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="fade-in-up delay-1" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 700, color: "white", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.5rem", maxWidth: "700px" }}>
            {T.hero.h1line1}
            <br />
            <span style={{ color: AMBER }}>{T.hero.h1line2}</span>
          </h1>

          {/* Sub */}
          <p className="fade-in-up delay-2" style={{ fontSize: "clamp(1rem,1.6vw,1.125rem)", color: "rgba(255,255,255,0.75)", fontWeight: 300, lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "520px" }}>
            {T.hero.sub1}
          </p>

          {/* CTAs */}
          <div className="fade-in-up delay-3" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <a href="tel:+4930224543220" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#D93025", color: "white", padding: "0.8rem 1.5rem", borderRadius: "8px", fontSize: "0.9375rem", fontWeight: 600, textDecoration: "none" }}>
              <Phone size={16} strokeWidth={2} />
              {T.nav.notfall}
            </a>
            <a href="#angebote" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.12)", color: "white", padding: "0.8rem 1.5rem", borderRadius: "8px", fontSize: "0.9375rem", fontWeight: 500, textDecoration: "none", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
              {T.hero.cta1} <ArrowRight size={15} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Scroll fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "160px", background: "linear-gradient(to bottom, transparent, rgba(10,25,40,0.5))", zIndex: 2 }} />
      </section>

      {/* ════════════════════════════════════════════════════════
          2 · WIR SIND DA — Mission
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: WHITE, padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <BlurFade>
              <span style={{ display: "inline-block", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TEAL, marginBottom: "1.25rem" }}>
                {lang === "de" ? "Unser Auftrag" : "Our Mission"}
              </span>
              <h2 style={{ fontSize: "clamp(2rem,4vw,3.25rem)", fontWeight: 700, color: DARK, letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: "1.75rem" }}>
                {T.einleitung.h2}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                <p style={{ fontSize: "1.0625rem", color: "#4A4A5A", lineHeight: 1.85 }}>{T.einleitung.p1}</p>
                <p style={{ fontSize: "1.0625rem", color: "#4A4A5A", lineHeight: 1.85 }}>{T.einleitung.p2}</p>
                <p style={{ fontSize: "1.0625rem", fontWeight: 600, color: BLUE, lineHeight: 1.85 }}>{T.einleitung.p5}</p>
              </div>
              <Link href="/ueber-uns" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: BLUE, fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none" }}>
                {lang === "de" ? "Mehr über uns" : "More about us"} <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </BlurFade>

            {/* 3 Werte */}
            <BlurFade delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(0,0,0,0.06)", borderRadius: "16px", overflow: "hidden" }}>
                {[
                  { icon: "⚓", titel: T.staerken.items[0].titel, text: T.staerken.items[0].text, bg: WHITE },
                  { icon: "🔗", titel: T.staerken.items[1].titel, text: T.staerken.items[1].text, bg: CREAM },
                  { icon: "✦",  titel: T.staerken.items[2].titel, text: T.staerken.items[2].text, bg: WHITE },
                ].map((v) => (
                  <div key={v.titel} style={{ background: v.bg, padding: "2rem 2.25rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.375rem", lineHeight: 1, flexShrink: 0, marginTop: "0.1rem" }}>{v.icon}</span>
                    <div>
                      <p style={{ fontSize: "1rem", fontWeight: 700, color: DARK, marginBottom: "0.35rem" }}>{v.titel}</p>
                      <p style={{ fontSize: "0.875rem", color: "#6A6A7A", lineHeight: 1.75 }}>{v.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          3 · STATS BANNER
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: BLUE, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "2rem" }}>
            {([
              { n: "< 24h", l: T.fachkraefte.stats[0], c: AMBER  },
              { n: "24/7",  l: T.fachkraefte.stats[1], c: "#FCA5A5" },
              { n: "11",    l: T.fachkraefte.stats[2], c: "#6EE7B7" },
              { n: "100%",  l: T.fachkraefte.stats[3], c: WHITE     },
            ] as const).map(s => (
              <BlurFade key={s.n}>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "clamp(2.25rem,4vw,3.25rem)", fontWeight: 700, color: s.c, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "0.625rem" }}>{s.n}</p>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.5, fontWeight: 300 }}>{s.l}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          4 · ANGEBOTE — nach Kategorien
      ════════════════════════════════════════════════════════ */}
      <section id="angebote" style={{ background: CREAM, padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <BlurFade>
            <span style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: TEAL, display: "block", marginBottom: "0.875rem" }}>
              {T.angeboteSection.label}
            </span>
            <h2 style={{ fontSize: "clamp(1.875rem,3.5vw,2.75rem)", fontWeight: 700, color: DARK, letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: "3.5rem", maxWidth: "600px" }}>
              {T.angeboteSection.h2}
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1.5rem" }}>
            {kategorien.map((kat, ki) => (
              <BlurFade key={ki} delay={ki * 0.08}>
                <div style={{ background: WHITE, borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                  {/* Kategorie-Header */}
                  <div style={{ padding: "1.5rem 1.75rem", borderBottom: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: kat.accent, letterSpacing: "0.01em" }}>
                      {kat.label[lang]}
                    </h3>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: kat.accent }} />
                  </div>

                  {/* Service-Einträge */}
                  {kat.indices.map((idx) => {
                    const s = services[idx];
                    const Icon = s.icon;
                    return (
                      <Link key={s.slug} href={`/${s.slug}`}
                        style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem 1.75rem", textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.04)", transition: "background 0.18s" }}
                        className="group hover:bg-[#F8F8FB]">
                        <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "10px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Icon size={16} strokeWidth={1.75} style={{ color: s.color }} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: DARK, lineHeight: 1.3, marginBottom: "0.2rem" }}>{s.titel}</p>
                          <p style={{ fontSize: "0.8125rem", color: "#7A7A8A", lineHeight: 1.4, fontStyle: "italic" }}>{s.claim}</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", flexShrink: 0 }}>
                          <span style={{ fontSize: "0.5625rem", fontWeight: 600, color: s.color, background: s.bg, border: `1px solid ${s.color}28`, padding: "0.175rem 0.55rem", borderRadius: "100px", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
                            {s.badge}
                          </span>
                          <ArrowRight size={14} strokeWidth={1.5} style={{ color: "#C0C0CC", flexShrink: 0 }} />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          5 · ZITAT — Haltgebend
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: AMBER, padding: "6rem 2rem" }}>
        <BlurFade>
          <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "clamp(1.5rem,3.5vw,2.75rem)", fontWeight: 600, color: DARK, lineHeight: 1.5, letterSpacing: "-0.015em" }}>
              {lang === "de"
                ? <>&#8222;Kein Kind fällt durch unser Netz. Wir sind da &#8212; in der Nacht, in der Krise, im Alltag.&#8220;</>
                : <>&ldquo;No child falls through our net. We are there &#8212; at night, in crisis, in daily life.&rdquo;</>}
            </p>
            <div style={{ width: "40px", height: "3px", background: DARK, margin: "2.5rem auto 0", borderRadius: "2px", opacity: 0.25 }} />
          </div>
        </BlurFade>
      </section>

      {/* ════════════════════════════════════════════════════════
          6 · FÜR FACHKRÄFTE
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK, padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <BlurFade>
              <span style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: AMBER, display: "block", marginBottom: "1.25rem" }}>
                {T.fachkraefte.label}
              </span>
              <h2 style={{ fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 700, color: "white", letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: "1.75rem" }}>
                {T.fachkraefte.h2[0]}<br />
                {T.fachkraefte.h2[1]}<br />
                {T.fachkraefte.h2[2]}
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, marginBottom: "2.5rem", maxWidth: "460px" }}>
                {T.fachkraefte.p}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <Link href="/platzanfrage" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: AMBER, color: DARK, padding: "0.8rem 1.75rem", borderRadius: "8px", fontSize: "0.9375rem", fontWeight: 700, textDecoration: "none" }}>
                  {T.fachkraefte.cta1} <ArrowRight size={14} strokeWidth={2} />
                </Link>
                <Link href="/kontakt" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "rgba(255,255,255,0.7)", padding: "0.8rem 1.75rem", borderRadius: "8px", fontSize: "0.9375rem", fontWeight: 500, textDecoration: "none", border: "1px solid rgba(255,255,255,0.18)" }}>
                  {T.fachkraefte.cta2}
                </Link>
              </div>
            </BlurFade>

            {/* Stats-Grid */}
            <BlurFade delay={0.1}>
              <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                {([
                  { n: "< 24h", l: T.fachkraefte.stats[0], accent: AMBER   },
                  { n: "24/7",  l: T.fachkraefte.stats[1], accent: "#FCA5A5"},
                  { n: "11",    l: T.fachkraefte.stats[2], accent: "#6EE7B7"},
                  { n: "100%",  l: T.fachkraefte.stats[3], accent: AMBER    },
                ] as const).map(s => (
                  <div key={s.n} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "2rem 1.75rem" }}>
                    <p style={{ fontSize: "2.5rem", fontWeight: 700, color: s.accent, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "0.5rem" }}>{s.n}</p>
                    <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.5, fontWeight: 300 }}>{s.l}</p>
                  </div>
                ))}
              </div>

              {/* Notfall-Box */}
              <div style={{ marginTop: "1rem", background: "rgba(217,48,37,0.15)", border: "1px solid rgba(217,48,37,0.3)", borderRadius: "12px", padding: "1.5rem 1.75rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "40px", height: "40px", background: "#D93025", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={18} strokeWidth={2} style={{ color: "white" }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginBottom: "0.2rem", fontWeight: 300 }}>{T.nav.notfall}</p>
                  <a href="tel:+4930224543220" style={{ fontSize: "1.125rem", fontWeight: 700, color: "white", textDecoration: "none", letterSpacing: "0.02em" }}>
                    030 224 543 220
                  </a>
                </div>
              </div>
            </BlurFade>

          </div>
        </div>
      </section>

    </main>
  );
}
