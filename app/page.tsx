"use client";

import Link from "next/link";
import { ArrowRight, Shield, Network, Brain } from "lucide-react";
import { BlurFade } from "./components/BlurFade";
import { useLang } from "./contexts/LanguageContext";
import { tr } from "./i18n/translations";

/* ── palette ─────────────────────────────────────────────────── */
const CREAM    = "#F5F0E8";
const OFFWHITE = "#FDFCF9";
const DARK     = "#1C1914";
const CAMEL    = "#8B7355";
const NAVY     = "#1a3f6f";

/* ── service meta (slugs only – rest from translations) ───────── */
const slugsMeta = [
  { slug: "krisenintervention",   badge: "24/7",           accent: "#ef4444" },
  { slug: "psychotherapie",       badge: "Kassensitz",     accent: "#3B82F6" },
  { slug: "fruehe-hilfen",        badge: "0–6 Jahre",      accent: "#F59E0B" },
  { slug: "therapie-wohnen",      badge: "12–17 Jahre",    accent: "#06B6D4" },
  { slug: "jugendhilfe",          badge: "6–12 Jahre",     accent: "#10B981" },
  { slug: "diagnostik-clearing",  badge: "Gutachten",      accent: "#6366F1" },
  { slug: "beratung-praevention", badge: "Online & vor Ort", accent: "#F97316" },
  { slug: "kita-beratung",        badge: "Fachkräfte",     accent: "#EC4899" },
  { slug: "uebergang-arbeit",     badge: "Übergang",       accent: "#84CC16" },
  { slug: "ankerkleidung",        badge: "Shop",           accent: "#8B5CF6" },
  { slug: "versorgung",           badge: "Ausstattung",    accent: "#F59E0B" },
];

/* ── ticker text ─────────────────────────────────────────────── */
const tickerDE = "Krisenintervention · Psychotherapie · Frühe Hilfen · Therapie & Wohnen · Jugendhilfe · Diagnostik · Beratung & Prävention · Kita-Beratung · Übergang Arbeit · Ankerkleidung · Versorgung · ";
const tickerEN = "Crisis Intervention · Psychotherapy · Early Help · Therapy & Housing · Youth Welfare · Diagnostics · Counselling & Prevention · Daycare Counselling · Transition to Work · Anchor Clothing · Care & Supplies · ";

export default function HomePage() {
  const { lang } = useLang();
  const T = tr[lang];

  const services = slugsMeta.map((m, i) => ({
    ...m,
    num:   String(i + 1).padStart(2, "0"),
    titel: T.angeboteTitel[i],
    claim: T.angebote[i].claim,
  }));

  const ticker = (lang === "de" ? tickerDE : tickerEN).repeat(2);

  return (
    <main>

      {/* ══════════════════════════════════════════════════════════
          1 · VIDEO HERO — fullscreen cinematic
      ══════════════════════════════════════════════════════════ */}
      <section style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>

        {/* Fallback */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, background: `linear-gradient(175deg, #04111f 0%, ${NAVY} 55%, #051018 100%)` }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(ellipse 80% 50% at 50% 80%, rgba(30,100,180,0.2) 0%, transparent 65%)", animation: "pulse 7s ease-in-out infinite" }} />

        {/* Video */}
        <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, zIndex: 1, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.68) 85%, rgba(0,0,0,0.82) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "radial-gradient(ellipse 88% 100% at 50% 50%, transparent 42%, rgba(0,0,0,0.32) 100%)" }} />

        {/* Brand */}
        <div style={{ position: "absolute", inset: 0, zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 2rem" }}>

          <div className="fade-in-up" style={{ marginBottom: "2.25rem" }}>
            <svg width="50" height="50" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="0.75" opacity="0.7" />
              <path d="M14 7v14M7 14h14M10 10.5l8 7M18 10.5l-8 7" stroke="white" strokeWidth="0.75" strokeLinecap="round" opacity="0.7" />
            </svg>
          </div>

          <h1 className="fade-in-up delay-1" style={{ fontSize: "clamp(2.75rem,8vw,7.5rem)", fontWeight: 200, letterSpacing: "0.4em", textIndent: "0.4em", color: "white", textTransform: "uppercase", lineHeight: 1, marginBottom: "1.5rem" }}>
            Ankernetz
          </h1>

          <div className="fade-in-up delay-2" style={{ width: "32px", height: "1px", background: "rgba(255,255,255,0.38)", marginBottom: "1.5rem" }} />

          <p className="fade-in-up delay-2" style={{ fontSize: "clamp(0.5625rem,1vw,0.6875rem)", fontWeight: 300, letterSpacing: "0.35em", textIndent: "0.35em", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", marginBottom: "4rem" }}>
            {lang === "de" ? "Kinder- & Jugendhilfe" : "Child & Youth Welfare"}
          </p>

          <a className="fade-in-up delay-3" href="#angebote" style={{ fontSize: "0.625rem", fontWeight: 400, letterSpacing: "0.26em", textIndent: "0.26em", color: "rgba(255,255,255,0.65)", textDecoration: "none", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.28)", paddingBottom: "0.3rem" }}>
            {lang === "de" ? "Entdecken" : "Discover"}
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "0.5rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>Scroll</span>
          <div className="scroll-pulse" style={{ width: "1px", height: "38px", background: "rgba(255,255,255,0.22)" }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2 · BRAND STATEMENT
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: CREAM, minHeight: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "8rem 2rem" }}>
        <BlurFade>
          <p style={{ fontSize: "0.625rem", fontWeight: 500, letterSpacing: "0.3em", textIndent: "0.3em", color: CAMEL, textTransform: "uppercase", textAlign: "center", marginBottom: "3rem" }}>
            {lang === "de" ? "Seit Tag Eins" : "Since Day One"}
          </p>
          <h2 style={{ fontSize: "clamp(2.5rem,6vw,5.5rem)", fontWeight: 200, letterSpacing: "-0.025em", color: DARK, lineHeight: 1.15, textAlign: "center", maxWidth: "900px", marginBottom: "4rem" }}>
            {T.einleitung.h2}
          </h2>
          <p style={{ fontSize: "clamp(1rem,1.6vw,1.125rem)", fontWeight: 300, color: "#5C564E", lineHeight: 1.95, textAlign: "center", maxWidth: "600px", margin: "0 auto 5rem" }}>
            {T.einleitung.p2}
          </p>
        </BlurFade>

        {/* 3 mini stats */}
        <BlurFade delay={0.15}>
          <div style={{ display: "flex", gap: "5rem", flexWrap: "wrap", justifyContent: "center" }}>
            {([
              { n: "< 24h", l: T.fachkraefte.stats[0] },
              { n: "24 / 7", l: T.fachkraefte.stats[1] },
              { n: "11",     l: T.fachkraefte.stats[2] },
            ] as const).map(s => (
              <div key={s.n} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 200, color: DARK, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "0.5rem" }}>{s.n}</p>
                <p style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", color: CAMEL, textTransform: "uppercase" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3 · TICKER
      ══════════════════════════════════════════════════════════ */}
      <div style={{ background: DARK, height: "52px", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div className="animate-marquee" style={{ display: "flex", gap: 0, whiteSpace: "nowrap", flexShrink: 0 }}>
          <span style={{ fontSize: "0.6875rem", fontWeight: 400, letterSpacing: "0.16em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", paddingRight: "0" }}>
            {ticker}
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          4 · SERVICES LIST
      ══════════════════════════════════════════════════════════ */}
      <section id="angebote" style={{ background: OFFWHITE, padding: "7rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>

          {/* Header */}
          <BlurFade>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "5rem", borderBottom: `1px solid rgba(0,0,0,0.1)`, paddingBottom: "2rem" }}>
              <div>
                <p style={{ fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.3em", color: CAMEL, textTransform: "uppercase", marginBottom: "0.875rem" }}>{T.angeboteSection.label}</p>
                <h2 style={{ fontSize: "clamp(1.75rem,3.5vw,3rem)", fontWeight: 200, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{T.angeboteSection.h2}</h2>
              </div>
              <span style={{ fontSize: "0.5625rem", letterSpacing: "0.2em", color: "rgba(0,0,0,0.3)", textTransform: "uppercase" }}>01 — 11</span>
            </div>
          </BlurFade>

          {/* 2-col numbered list */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ columnGap: "4rem" }}>
            {services.map((s, i) => (
              <BlurFade key={s.slug} delay={i * 0.04}>
                <Link
                  href={`/${s.slug}`}
                  className="service-item"
                  style={{ display: "flex", alignItems: "center", padding: "2rem 0 2rem 1rem", textDecoration: "none", position: "relative", gap: "2rem" }}
                >
                  <div className="service-item-bar" />

                  {/* Number */}
                  <span style={{ fontSize: "0.6875rem", fontWeight: 400, letterSpacing: "0.12em", color: "rgba(0,0,0,0.25)", minWidth: "2rem", flexShrink: 0 }}>
                    {s.num}
                  </span>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontSize: "clamp(1.125rem,1.8vw,1.5rem)", fontWeight: 300, color: DARK, letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: "0.375rem" }}>
                      {s.titel}
                    </h3>
                    <p style={{ fontSize: "0.8125rem", color: CAMEL, fontStyle: "italic", fontWeight: 300 }}>{s.claim}</p>
                  </div>

                  {/* Badge + arrow */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", flexShrink: 0 }}>
                    <span style={{ fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.1em", color: s.accent, background: `${s.accent}14`, border: `1px solid ${s.accent}28`, padding: "0.2rem 0.6rem", borderRadius: "100px" }}>
                      {s.badge}
                    </span>
                    <ArrowRight size={15} strokeWidth={1.5} style={{ color: NAVY }} className="service-item-arrow" />
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5 · DARK QUOTE
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: DARK, minHeight: "55vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "8rem 2rem" }}>
        <BlurFade>
          <div style={{ maxWidth: "860px", textAlign: "center" }}>
            <p style={{ fontSize: "clamp(1.75rem,4vw,3.5rem)", fontWeight: 200, fontStyle: "italic", color: "rgba(255,255,255,0.88)", lineHeight: 1.45, letterSpacing: "-0.01em", marginBottom: "3rem" }}>
              {lang === "de"
                ? "„Kein Kind fällt durch unser Netz. Wir sind da — in der Nacht, in der Krise, im Alltag.“"
                : "No child falls through our net. We are there — at night, in crisis, in everyday life."}
            </p>
            <div style={{ width: "32px", height: "1px", background: `rgba(255,255,255,0.2)`, margin: "0 auto 2rem" }} />
            <p style={{ fontSize: "0.625rem", letterSpacing: "0.3em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase" }}>
              {T.manifesto}
            </p>
          </div>
        </BlurFade>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6 · STRENGTHS
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: CREAM, padding: "8rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <BlurFade>
            <p style={{ fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.3em", color: CAMEL, textTransform: "uppercase", marginBottom: "1rem" }}>{T.staerken.label}</p>
            <h2 style={{ fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 200, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "5rem" }}>{T.staerken.h2}</h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "0", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
            {T.staerken.items.map((s, i) => {
              const Icon = [Shield, Network, Brain][i];
              const color = ["#3B82F6", "#10B981", "#8B5CF6"][i];
              return (
                <BlurFade key={s.titel} delay={i * 0.1}>
                  <div style={{ padding: "3.5rem 2.5rem 3.5rem 0", borderRight: i < 2 ? "1px solid rgba(0,0,0,0.08)" : "none", paddingLeft: i > 0 ? "2.5rem" : 0 }}>
                    <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: `${color}14`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                      <Icon size={16} strokeWidth={1.5} style={{ color }} />
                    </div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 300, color: DARK, letterSpacing: "-0.01em", marginBottom: "1rem" }}>{s.titel}</h3>
                    <p style={{ fontSize: "0.9375rem", fontWeight: 300, color: "#5C564E", lineHeight: 1.85 }}>{s.text}</p>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7 · PROFESSIONALS
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: NAVY, padding: "8rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">

            <BlurFade>
              <p style={{ fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.3em", color: "rgba(255,255,255,0.38)", textTransform: "uppercase", marginBottom: "2rem" }}>{T.fachkraefte.label}</p>
              <h2 style={{ fontSize: "clamp(2.25rem,4vw,3.5rem)", fontWeight: 200, color: "white", letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: "2.5rem" }}>
                {T.fachkraefte.h2[0]}<br />
                {T.fachkraefte.h2[1]}<br />
                {T.fachkraefte.h2[2]}
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.9, maxWidth: "460px", marginBottom: "3.5rem" }}>
                {T.fachkraefte.p}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <Link href="/platzanfrage" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "white", color: NAVY, padding: "0.75rem 1.75rem", borderRadius: "0", fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.08em", textDecoration: "none", textTransform: "uppercase" }}>
                  {T.fachkraefte.cta1} <ArrowRight size={13} strokeWidth={1.5} />
                </Link>
                <Link href="/kontakt" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "rgba(255,255,255,0.7)", padding: "0.75rem 1.75rem", borderRadius: "0", fontSize: "0.8125rem", fontWeight: 400, letterSpacing: "0.08em", textDecoration: "none", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.2)" }}>
                  {T.fachkraefte.cta2}
                </Link>
              </div>
            </BlurFade>

            <BlurFade delay={0.12}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.08)" }}>
                {([
                  { n: "< 24h", l: T.fachkraefte.stats[0], c: "#93C5FD" },
                  { n: "24/7",  l: T.fachkraefte.stats[1], c: "#FCA5A5" },
                  { n: "11",    l: T.fachkraefte.stats[2], c: "#FDE68A" },
                  { n: "100%",  l: T.fachkraefte.stats[3], c: "#6EE7B7" },
                ] as const).map(s => (
                  <div key={s.n} style={{ background: NAVY, padding: "2.5rem 2rem" }}>
                    <p style={{ fontSize: "2.75rem", fontWeight: 200, color: s.c, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "0.625rem" }}>{s.n}</p>
                    <p style={{ fontSize: "0.75rem", fontWeight: 300, color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em", lineHeight: 1.5 }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </BlurFade>

          </div>
        </div>
      </section>

    </main>
  );
}
