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

/* ── Palette ── editorial, warm, Gucci-inspiriert ───────────── */
const TERRA    = "#8B3A22";   // Terrakotta
const FOREST   = "#1D3D2A";   // Waldgrün
const WINE     = "#4A1A28";   // Weinrot
const CHARCOAL = "#1A1614";   // warmes fast-Schwarz
const IVORY    = "#F5EFE8";   // warmes Elfenbein
const GOLD     = "#C8922A";   // warmes Gold
const CREAM    = "#FAF6F1";   // sehr helles Creme
const WHITE    = "#FFFFFF";
const RUST_MID = "#6B2C18";   // mittlerer Rost

/* ── Services ─────────────────────────────────────────────────── */
const slugsMeta = [
  { slug: "krisenintervention",   icon: AlertTriangle, color: TERRA,   bg: "#F9EDE9" },
  { slug: "psychotherapie",       icon: Brain,         color: FOREST,  bg: "#E8F0EC" },
  { slug: "fruehe-hilfen",        icon: Baby,          color: GOLD,    bg: "#F7F0E4" },
  { slug: "therapie-wohnen",      icon: Home,          color: FOREST,  bg: "#E8F0EC" },
  { slug: "jugendhilfe",          icon: Heart,         color: WINE,    bg: "#F2E6EA" },
  { slug: "diagnostik-clearing",  icon: Search,        color: TERRA,   bg: "#F9EDE9" },
  { slug: "beratung-praevention", icon: MessageCircle, color: GOLD,    bg: "#F7F0E4" },
  { slug: "kita-beratung",        icon: Building2,     color: FOREST,  bg: "#E8F0EC" },
  { slug: "uebergang-arbeit",     icon: Rocket,        color: FOREST,  bg: "#E8F0EC" },
  { slug: "ankerkleidung",        icon: Shirt,         color: WINE,    bg: "#F2E6EA" },
  { slug: "versorgung",           icon: Heart,         color: GOLD,    bg: "#F7F0E4" },
];

/* ── Kategorien ────────────────────────────────────────────────── */
const kategorien = [
  {
    label: { de: "Krise & Schutz",           en: "Crisis & Protection"    },
    indices: [0, 2],
    panelBg: TERRA,
    panelGrad: `linear-gradient(160deg, ${TERRA} 0%, ${RUST_MID} 100%)`,
  },
  {
    label: { de: "Wohnen & Therapie",        en: "Housing & Therapy"      },
    indices: [1, 3, 4],
    panelBg: FOREST,
    panelGrad: `linear-gradient(160deg, #243E2F 0%, ${FOREST} 100%)`,
  },
  {
    label: { de: "Diagnostik & Beratung",    en: "Diagnostics & Advice"   },
    indices: [5, 6, 7],
    panelBg: WINE,
    panelGrad: `linear-gradient(160deg, #3A1220 0%, ${WINE} 100%)`,
  },
  {
    label: { de: "Versorgung & Perspektive", en: "Care & Perspective"     },
    indices: [8, 9, 10],
    panelBg: CHARCOAL,
    panelGrad: `linear-gradient(160deg, #0E0C0A 0%, #2A2220 100%)`,
  },
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

        {/* Fallback-Gradient – Terrakotta-Verlauf */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          background: `linear-gradient(150deg, #1A0804 0%, ${TERRA} 45%, ${RUST_MID} 75%, #2A0E06 100%)`,
        }} />

        {/* Subtile Textur-Schicht */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1, opacity: 0.08,
          backgroundImage: "radial-gradient(circle at 25% 35%, rgba(255,255,255,0.15) 0%, transparent 55%), radial-gradient(circle at 75% 65%, rgba(255,200,120,0.2) 0%, transparent 50%)",
        }} />

        {/* Video */}
        <video autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, zIndex: 2, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dunkel-Overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 3,
          background: "linear-gradient(to bottom, rgba(15,5,2,0.35) 0%, rgba(15,5,2,0.4) 55%, rgba(15,5,2,0.80) 100%)",
        }} />

        {/* Content */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 4,
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: "0 2rem 6rem", maxWidth: "1280px", margin: "0 auto", left: 0, right: 0,
        }}>
          {/* Badge */}
          <div className="fade-in-up" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(139,58,34,0.85)", borderRadius: "4px",
            padding: "0.4rem 0.875rem", marginBottom: "2rem", width: "fit-content",
            border: "1px solid rgba(200,146,42,0.4)",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: GOLD, animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{T.hero.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="fade-in-up delay-1" style={{
            fontSize: "clamp(2.75rem,7vw,5.5rem)", fontWeight: 700,
            color: WHITE, lineHeight: 1.1, letterSpacing: "-0.025em",
            marginBottom: "1.5rem", maxWidth: "680px",
          }}>
            {T.hero.h1line1}
            <br />
            <span style={{ color: GOLD }}>{T.hero.h1line2}</span>
          </h1>

          {/* Sub */}
          <p className="fade-in-up delay-2" style={{
            fontSize: "clamp(0.9375rem,1.5vw,1.0625rem)", color: "rgba(245,239,232,0.7)",
            fontWeight: 300, lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "480px",
          }}>
            {T.hero.sub1}
          </p>

          {/* CTAs */}
          <div className="fade-in-up delay-3" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <a href="tel:+4930224543220" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: TERRA, color: WHITE,
              padding: "0.75rem 1.5rem", borderRadius: "3px",
              fontSize: "0.875rem", fontWeight: 600, textDecoration: "none",
              border: "1px solid rgba(200,146,42,0.3)", letterSpacing: "0.04em",
            }}>
              <Phone size={15} strokeWidth={2} />
              {T.nav.notfall}
            </a>
            <a href="#angebote" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(245,239,232,0.10)", color: "rgba(245,239,232,0.9)",
              padding: "0.75rem 1.5rem", borderRadius: "3px",
              fontSize: "0.875rem", fontWeight: 400, textDecoration: "none",
              backdropFilter: "blur(8px)", border: "1px solid rgba(245,239,232,0.22)",
              letterSpacing: "0.04em",
            }}>
              {T.hero.cta1} <ArrowRight size={14} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Scroll fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, transparent, rgba(15,5,2,0.4))", zIndex: 3 }} />
      </section>

      {/* ════════════════════════════════════════════════════════
          2 · MISSION — 2-Spalter auf Elfenbein
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: IVORY, padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <BlurFade>
              <span style={{
                display: "inline-block", fontSize: "0.625rem", fontWeight: 600,
                letterSpacing: "0.2em", textTransform: "uppercase", color: TERRA, marginBottom: "1.25rem",
              }}>
                {lang === "de" ? "Unser Auftrag" : "Our Mission"}
              </span>
              <h2 style={{
                fontSize: "clamp(2rem,4vw,3.25rem)", fontWeight: 700, color: CHARCOAL,
                letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "1.75rem",
              }}>
                {T.einleitung.h2}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                <p style={{ fontSize: "1rem", color: "#4A3E38", lineHeight: 1.9 }}>{T.einleitung.p1}</p>
                <p style={{ fontSize: "1rem", color: "#4A3E38", lineHeight: 1.9 }}>{T.einleitung.p2}</p>
                <p style={{ fontSize: "1rem", fontWeight: 600, color: FOREST, lineHeight: 1.9 }}>{T.einleitung.p5}</p>
              </div>
              <Link href="/ueber-uns" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                color: CHARCOAL, fontWeight: 600, fontSize: "0.875rem",
                textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase",
                borderBottom: `1px solid ${CHARCOAL}`,
              }}>
                {lang === "de" ? "Mehr über uns" : "More about us"} <ArrowRight size={13} strokeWidth={2} />
              </Link>
            </BlurFade>

            {/* Werte-Karten — warm gestapelt */}
            <BlurFade delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {[
                  { icon: "⚓", titel: T.staerken.items[0].titel, text: T.staerken.items[0].text, bg: WHITE,         border: "rgba(139,58,34,0.12)" },
                  { icon: "🔗", titel: T.staerken.items[1].titel, text: T.staerken.items[1].text, bg: "#F2EBE4",     border: "rgba(139,58,34,0.08)" },
                  { icon: "✦",  titel: T.staerken.items[2].titel, text: T.staerken.items[2].text, bg: WHITE,         border: "rgba(139,58,34,0.12)" },
                ].map((v, i) => (
                  <div key={v.titel} style={{
                    background: v.bg, padding: "2rem 2.25rem",
                    display: "flex", gap: "1.25rem", alignItems: "flex-start",
                    borderTop: i === 0 ? `1px solid ${v.border}` : "none",
                    borderBottom: `1px solid ${v.border}`,
                    borderLeft: `3px solid ${i === 0 ? TERRA : i === 1 ? FOREST : GOLD}`,
                  }}>
                    <span style={{ fontSize: "1.25rem", lineHeight: 1, flexShrink: 0, marginTop: "0.1rem" }}>{v.icon}</span>
                    <div>
                      <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: CHARCOAL, marginBottom: "0.35rem" }}>{v.titel}</p>
                      <p style={{ fontSize: "0.8125rem", color: "#6A5A52", lineHeight: 1.8 }}>{v.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          3 · STATS — Waldgrün mit Gold-Akzenten
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: `linear-gradient(120deg, #182E20 0%, ${FOREST} 60%, #243824 100%)`, padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "2rem" }}>
            {([
              { n: "< 24h", l: T.fachkraefte.stats[0], c: GOLD           },
              { n: "24/7",  l: T.fachkraefte.stats[1], c: "#F5C5B0"      },
              { n: "11",    l: T.fachkraefte.stats[2], c: "rgba(245,239,232,0.85)" },
              { n: "100%",  l: T.fachkraefte.stats[3], c: WHITE           },
            ] as const).map(s => (
              <BlurFade key={s.n}>
                <div style={{ textAlign: "center" }}>
                  <p style={{
                    fontSize: "clamp(2.25rem,4.5vw,3.5rem)", fontWeight: 700,
                    color: s.c, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "0.625rem",
                  }}>{s.n}</p>
                  <p style={{ fontSize: "0.75rem", color: "rgba(245,239,232,0.45)", lineHeight: 1.5, fontWeight: 300, letterSpacing: "0.04em" }}>{s.l}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          4 · ANGEBOTE — Gucci-Editorial-Grid (4 farbige Panels)
      ════════════════════════════════════════════════════════ */}
      <section id="angebote" style={{ background: CREAM, padding: "0" }}>

        {/* Label + Heading */}
        <div style={{ padding: "6rem 1.5rem 4rem", maxWidth: "1280px", margin: "0 auto" }}>
          <BlurFade>
            <span style={{
              fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: TERRA, display: "block", marginBottom: "0.875rem",
            }}>
              {T.angeboteSection.label}
            </span>
            <h2 style={{
              fontSize: "clamp(1.875rem,3.5vw,2.75rem)", fontWeight: 700, color: CHARCOAL,
              letterSpacing: "-0.025em", lineHeight: 1.2, maxWidth: "600px",
            }}>
              {T.angeboteSection.h2}
            </h2>
          </BlurFade>
        </div>

        {/* 4-Spalten Editorial Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="grid-editorial">
          {kategorien.map((kat, ki) => (
            <BlurFade key={ki} delay={ki * 0.07}>
              <div style={{ background: kat.panelGrad, minHeight: "520px", display: "flex", flexDirection: "column", padding: "2.5rem 2rem 3rem" }}>

                {/* Kategorie-Label */}
                <div style={{ marginBottom: "2.5rem" }}>
                  <span style={{
                    fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.2em",
                    textTransform: "uppercase", color: "rgba(245,239,232,0.45)",
                    display: "block", marginBottom: "0.5rem",
                  }}>0{ki + 1}</span>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 600, color: IVORY, letterSpacing: "-0.01em" }}>
                    {kat.label[lang]}
                  </h3>
                  <div style={{ width: "24px", height: "1px", background: GOLD, marginTop: "1rem", opacity: 0.6 }} />
                </div>

                {/* Service-Einträge */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0", flex: 1 }}>
                  {kat.indices.map((idx, j) => {
                    const s = services[idx];
                    const Icon = s.icon;
                    return (
                      <Link key={s.slug} href={`/${s.slug}`}
                        style={{ textDecoration: "none", borderTop: "1px solid rgba(245,239,232,0.08)", padding: "1.25rem 0", display: "block", transition: "background 0.2s" }}
                        className="editorial-item">
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
                          <div style={{
                            width: "2rem", height: "2rem", borderRadius: "6px",
                            background: "rgba(245,239,232,0.10)", display: "flex",
                            alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.1rem",
                          }}>
                            <Icon size={13} strokeWidth={1.75} style={{ color: "rgba(245,239,232,0.7)" }} />
                          </div>
                          <div style={{ flex: 1 }}>
                            <p style={{ fontSize: "0.875rem", fontWeight: 600, color: IVORY, lineHeight: 1.3, marginBottom: "0.25rem" }}>{s.titel}</p>
                            <p style={{ fontSize: "0.6875rem", color: "rgba(245,239,232,0.45)", lineHeight: 1.5 }}>{s.badge}</p>
                          </div>
                          <ArrowRight size={12} strokeWidth={1.5} style={{ color: "rgba(245,239,232,0.25)", flexShrink: 0, marginTop: "0.3rem" }} />
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Mehr erfahren */}
                <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(245,239,232,0.1)" }}>
                  <span style={{
                    fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.15em",
                    textTransform: "uppercase", color: GOLD, opacity: 0.8,
                  }}>
                    {T.angeboteSection.mehrErfahren} →
                  </span>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          5 · ZITAT — Weinrot / dunkel mit Goldtext
      ════════════════════════════════════════════════════════ */}
      <section style={{
        background: `linear-gradient(135deg, #1A0C10 0%, ${WINE} 50%, #200A14 100%)`,
        padding: "7rem 2rem",
      }}>
        <BlurFade>
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ width: "1px", height: "48px", background: GOLD, margin: "0 auto 3rem", opacity: 0.4 }} />
            <p style={{
              fontSize: "clamp(1.375rem,3vw,2.375rem)", fontWeight: 300, color: IVORY,
              lineHeight: 1.6, letterSpacing: "-0.01em", fontStyle: "italic",
            }}>
              {lang === "de"
                ? <>&#8222;Kein Kind fällt durch unser Netz. Wir sind da &#8212; in der Nacht, in der Krise, im Alltag.&#8220;</>
                : <>&ldquo;No child falls through our net. We are there &#8212; at night, in crisis, in daily life.&rdquo;</>}
            </p>
            <div style={{ width: "1px", height: "48px", background: GOLD, margin: "3rem auto 0", opacity: 0.4 }} />
          </div>
        </BlurFade>
      </section>

      {/* ════════════════════════════════════════════════════════
          6 · FÜR FACHKRÄFTE — warmes fast-Schwarz
      ════════════════════════════════════════════════════════ */}
      <section style={{ background: `linear-gradient(160deg, #0A0806 0%, ${CHARCOAL} 50%, #120E0C 100%)`, padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <BlurFade>
              <span style={{
                fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.2em",
                textTransform: "uppercase", color: GOLD, display: "block", marginBottom: "1.25rem",
              }}>
                {T.fachkraefte.label}
              </span>
              <h2 style={{
                fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 700, color: IVORY,
                letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: "1.75rem",
              }}>
                {T.fachkraefte.h2[0]}<br />
                <span style={{ color: GOLD }}>{T.fachkraefte.h2[1]}</span><br />
                {T.fachkraefte.h2[2]}
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(245,239,232,0.5)", lineHeight: 1.9, marginBottom: "2.5rem", maxWidth: "440px" }}>
                {T.fachkraefte.p}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <Link href="/platzanfrage" style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: TERRA, color: WHITE,
                  padding: "0.75rem 1.75rem", borderRadius: "3px",
                  fontSize: "0.875rem", fontWeight: 600, textDecoration: "none",
                  letterSpacing: "0.04em",
                }}>
                  {T.fachkraefte.cta1} <ArrowRight size={14} strokeWidth={2} />
                </Link>
                <Link href="/kontakt" style={{
                  display: "inline-flex", alignItems: "center",
                  background: "transparent", color: "rgba(245,239,232,0.6)",
                  padding: "0.75rem 1.75rem", borderRadius: "3px",
                  fontSize: "0.875rem", fontWeight: 400, textDecoration: "none",
                  border: "1px solid rgba(245,239,232,0.15)", letterSpacing: "0.04em",
                }}>
                  {T.fachkraefte.cta2}
                </Link>
              </div>
            </BlurFade>

            {/* Stats-Grid */}
            <BlurFade delay={0.1}>
              <div className="grid grid-cols-2" style={{ gap: "1px", background: "rgba(245,239,232,0.08)", borderRadius: "4px", overflow: "hidden" }}>
                {([
                  { n: "< 24h", l: T.fachkraefte.stats[0], accent: GOLD           },
                  { n: "24/7",  l: T.fachkraefte.stats[1], accent: "#E8B4A0"      },
                  { n: "11",    l: T.fachkraefte.stats[2], accent: "rgba(245,239,232,0.85)" },
                  { n: "100%",  l: T.fachkraefte.stats[3], accent: GOLD            },
                ] as const).map(s => (
                  <div key={s.n} style={{ background: "rgba(15,10,8,0.9)", padding: "2.5rem 2rem" }}>
                    <p style={{ fontSize: "2.5rem", fontWeight: 700, color: s.accent, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "0.625rem" }}>{s.n}</p>
                    <p style={{ fontSize: "0.75rem", color: "rgba(245,239,232,0.35)", lineHeight: 1.5, fontWeight: 300, letterSpacing: "0.04em" }}>{s.l}</p>
                  </div>
                ))}
              </div>

              {/* Notfall-Box */}
              <div style={{
                marginTop: "1px", background: TERRA,
                borderRadius: "0 0 4px 4px", padding: "1.5rem 2rem",
                display: "flex", alignItems: "center", gap: "1.25rem",
              }}>
                <div style={{
                  width: "40px", height: "40px",
                  background: "rgba(255,255,255,0.15)", borderRadius: "3px",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Phone size={18} strokeWidth={2} style={{ color: WHITE }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.55)", marginBottom: "0.25rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase" }}>{T.nav.notfall}</p>
                  <a href="tel:+4930224543220" style={{ fontSize: "1.125rem", fontWeight: 700, color: WHITE, textDecoration: "none", letterSpacing: "0.02em" }}>
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
