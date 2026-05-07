"use client";

import Link from "next/link";
import {
  AlertTriangle, Home, Brain, Baby, Search, Shirt,
  MessageCircle, Rocket, Building2, Heart, ArrowRight,
  Shield, Network,
} from "lucide-react";
import { BlurFade } from "./components/BlurFade";
import { useLang } from "./contexts/LanguageContext";
import { tr } from "./i18n/translations";

const slugsMeta = [
  { slug: "krisenintervention",   icon: AlertTriangle, accent: "#ef4444" },
  { slug: "psychotherapie",       icon: Brain,         accent: "#6FA3FE" },
  { slug: "fruehe-hilfen",        icon: Baby,          accent: "#FEC274" },
  { slug: "therapie-wohnen",      icon: Home,          accent: "#6FA3FE" },
  { slug: "jugendhilfe",          icon: Heart,         accent: "#FEC274" },
  { slug: "diagnostik-clearing",  icon: Search,        accent: "#6FA3FE" },
  { slug: "beratung-praevention", icon: MessageCircle, accent: "#FEC274" },
  { slug: "kita-beratung",        icon: Building2,     accent: "#6FA3FE" },
  { slug: "uebergang-arbeit",     icon: Rocket,        accent: "#FEC274" },
  { slug: "ankerkleidung",        icon: Shirt,         accent: "#a78bfa" },
  { slug: "versorgung",           icon: Heart,         accent: "#FEC274" },
];

const staerkenIcons = [Shield, Network, Brain];
const staerkenColors = ["#6FA3FE", "#FEC274", "#6FA3FE"];

export default function HomePage() {
  const { lang } = useLang();
  const T = tr[lang];

  const angebote = slugsMeta.map((m, i) => ({
    ...m,
    titel: T.angeboteTitel[i],
    claim: T.angebote[i].claim,
    kurz:  T.angebote[i].kurz,
    badge: T.angebote[i].badge,
  }));

  const DARK = "#06101f";
  const CARD = "#0d1b2a";
  const CARD_BORDER = "rgba(255,255,255,0.07)";

  return (
    <main className="overflow-x-hidden">

      {/* ═══ HERO ═══ */}
      <section style={{
        background: DARK,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "7rem 1.5rem 5rem",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 75% 55% at 50% 0%, rgba(0,113,227,0.13) 0%, transparent 58%)",
        }} />
        <div style={{
          position: "absolute", bottom: 0, right: 0, width: "500px", height: "400px",
          background: "radial-gradient(ellipse at 80% 80%, rgba(254,194,116,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: "920px", width: "100%", textAlign: "center" }}>

          {/* Badge */}
          <div className="fade-in-up" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.22)",
            borderRadius: "100px", padding: "0.375rem 0.875rem", marginBottom: "3rem",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444", flexShrink: 0, animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: "0.8125rem", fontWeight: 500, color: "#fca5a5", letterSpacing: "0.01em" }}>
              {T.hero.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-in-up delay-1" style={{
            fontSize: "clamp(3.5rem,10vw,7.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            color: "#ffffff",
            marginBottom: "2rem",
          }}>
            {T.hero.h1line1}
            <br />
            <span style={{
              backgroundImage: "linear-gradient(135deg, #6FA3FE 0%, #FEC274 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              {T.hero.h1line2}
            </span>
          </h1>

          {/* Sub */}
          <p className="fade-in-up delay-2" style={{
            fontSize: "clamp(1rem,2vw,1.1875rem)",
            color: "rgba(255,255,255,0.45)",
            fontWeight: 400,
            lineHeight: 1.75,
            marginBottom: "3.5rem",
            maxWidth: "520px",
            marginLeft: "auto",
            marginRight: "auto",
          }}>
            {T.hero.sub1}
          </p>

          {/* CTAs */}
          <div className="fade-in-up delay-3" style={{
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "center", gap: "0.75rem",
          }}>
            <a href="#angebote" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "#0071e3", color: "#ffffff",
              padding: "0.75rem 1.5rem", borderRadius: "9999px",
              fontSize: "0.9375rem", fontWeight: 600,
              textDecoration: "none", border: "1px solid #0071e3",
            }}>
              {T.hero.cta1} <ArrowRight size={15} strokeWidth={1.5} />
            </a>
            <Link href="/platzanfrage" style={{
              display: "inline-flex", alignItems: "center",
              background: "transparent", color: "rgba(255,255,255,0.85)",
              padding: "0.75rem 1.5rem", borderRadius: "9999px",
              fontSize: "0.9375rem", fontWeight: 500,
              textDecoration: "none", border: "1px solid rgba(255,255,255,0.18)",
            }}>
              {T.hero.cta2}
            </Link>
          </div>

        </div>

        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "5rem",
          background: `linear-gradient(to bottom, transparent, ${DARK})`,
          pointerEvents: "none",
        }} />
      </section>

      {/* ═══ MANIFESTO STRIP ═══ */}
      <section style={{
        background: DARK,
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "1.75rem 1.5rem",
      }}>
        <p style={{
          fontSize: "clamp(0.75rem,1.3vw,0.9375rem)",
          fontWeight: 400,
          color: "rgba(255,255,255,0.28)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          textAlign: "center",
        }}>
          {T.manifesto}
        </p>
      </section>

      {/* ═══ EINLEITUNG ═══ */}
      <section style={{ background: "#ffffff", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <BlurFade>
            <div style={{ maxWidth: "680px" }}>
              <h2 style={{
                fontSize: "clamp(2.5rem,5vw,3.75rem)",
                fontWeight: 900,
                color: "#0a0a0a",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                marginBottom: "2.5rem",
              }}>
                {T.einleitung.h2}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.9 }}>{T.einleitung.p1}</p>
                <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.9 }}>{T.einleitung.p2}</p>
                <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.9 }}>{T.einleitung.p3}</p>
                <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.9 }}>{T.einleitung.p4}</p>
                <p style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0a0a0a", lineHeight: 1.9 }}>{T.einleitung.p5}</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ═══ ANGEBOTE ═══ */}
      <section id="angebote" style={{ background: DARK, padding: "5rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <BlurFade>
            <div style={{ marginBottom: "3rem" }}>
              <p style={{
                fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "1rem",
              }}>
                {T.angeboteSection.label}
              </p>
              <h2 style={{
                fontSize: "clamp(1.875rem,4vw,3rem)",
                fontWeight: 900, color: "#ffffff",
                letterSpacing: "-0.035em", lineHeight: 1.1,
              }}>
                {T.angeboteSection.h2}
              </h2>
            </div>
          </BlurFade>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            {/* Row 1: Krisenintervention wide + Psychotherapie */}
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1rem" }}>
              <BlurFade className="md:col-span-2">
                <Link href="/krisenintervention" className="bento-card"
                  style={{ display: "flex", flexDirection: "column", background: CARD, border: `1px solid ${CARD_BORDER}`, borderRadius: "1.25rem", minHeight: "400px", padding: "2.5rem", textDecoration: "none", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "#ef4444" }} />
                  <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
                    <span style={{ fontSize: "0.625rem", fontWeight: 700, color: "#ef4444", background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)", padding: "0.2rem 0.625rem", borderRadius: "100px", letterSpacing: "0.06em" }}>{angebote[0].badge}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <AlertTriangle size={28} strokeWidth={1.5} style={{ color: "#ef4444", marginBottom: "1.5rem" }} />
                    <h3 style={{ color: "#ffffff", fontWeight: 900, fontSize: "2rem", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "0.75rem" }}>{angebote[0].titel}</h3>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9375rem", fontStyle: "italic", marginBottom: "1.25rem" }}>{angebote[0].claim}</p>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.9, maxWidth: "44ch" }}>{angebote[0].kurz}</p>
                  </div>
                  <div style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#6FA3FE", fontSize: "0.875rem", fontWeight: 600 }}>
                    {T.angeboteSection.mehrErfahren} <ArrowRight size={14} strokeWidth={1.5} />
                  </div>
                </Link>
              </BlurFade>

              <BlurFade delay={0.08}>
                <Link href="/psychotherapie" className="bento-card"
                  style={{ display: "flex", flexDirection: "column", background: CARD, border: `1px solid ${CARD_BORDER}`, borderRadius: "1.25rem", minHeight: "400px", padding: "2.5rem", textDecoration: "none", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "#6FA3FE" }} />
                  <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
                    <span style={{ fontSize: "0.625rem", fontWeight: 700, color: "#6FA3FE", background: "rgba(111,163,254,0.12)", border: "1px solid rgba(111,163,254,0.25)", padding: "0.2rem 0.625rem", borderRadius: "100px", letterSpacing: "0.06em" }}>{angebote[1].badge}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <Brain size={26} strokeWidth={1.5} style={{ color: "#6FA3FE", marginBottom: "1.5rem" }} />
                    <h3 style={{ color: "#ffffff", fontWeight: 900, fontSize: "1.375rem", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "0.625rem" }}>{angebote[1].titel}</h3>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", fontStyle: "italic", marginBottom: "1.125rem" }}>{angebote[1].claim}</p>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.9 }}>{angebote[1].kurz}</p>
                  </div>
                  <div style={{ marginTop: "1.75rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#6FA3FE", fontSize: "0.875rem", fontWeight: 600 }}>
                    {T.angeboteSection.mehrErfahren} <ArrowRight size={13} strokeWidth={1.5} />
                  </div>
                </Link>
              </BlurFade>
            </div>

            {/* Row 2: 3 medium */}
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1rem" }}>
              {[angebote[2], angebote[3], angebote[4]].map((a, i) => {
                const Icon = a.icon;
                return (
                  <BlurFade key={a.slug} delay={i * 0.07}>
                    <Link href={`/${a.slug}`} className="bento-card"
                      style={{ display: "flex", flexDirection: "column", background: CARD, border: `1px solid ${CARD_BORDER}`, borderRadius: "1.25rem", minHeight: "320px", padding: "2.5rem", textDecoration: "none", position: "relative", overflow: "hidden" }}>
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: a.accent }} />
                      <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
                        <span style={{ fontSize: "0.625rem", fontWeight: 700, color: a.accent, background: `${a.accent}18`, border: `1px solid ${a.accent}35`, padding: "0.2rem 0.625rem", borderRadius: "100px" }}>{a.badge}</span>
                      </div>
                      <div style={{ flex: 1 }}>
                        <Icon size={24} strokeWidth={1.5} style={{ color: a.accent, marginBottom: "1.25rem" }} />
                        <h3 style={{ color: "#ffffff", fontWeight: 900, fontSize: "1.25rem", letterSpacing: "-0.022em", lineHeight: 1.2, marginBottom: "0.5rem" }}>{a.titel}</h3>
                        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", fontStyle: "italic", marginBottom: "1rem" }}>{a.claim}</p>
                        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.9 }}>{a.kurz}</p>
                      </div>
                      <div style={{ marginTop: "1.5rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#6FA3FE", fontSize: "0.875rem", fontWeight: 600 }}>
                        {T.angeboteSection.mehrErfahren} <ArrowRight size={13} strokeWidth={1.5} />
                      </div>
                    </Link>
                  </BlurFade>
                );
              })}
            </div>

            {/* Row 3: 4 compact */}
            <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "1rem" }}>
              {[angebote[5], angebote[6], angebote[7], angebote[8]].map((a, i) => {
                const Icon = a.icon;
                return (
                  <BlurFade key={a.slug} delay={i * 0.05}>
                    <Link href={`/${a.slug}`} className="bento-card"
                      style={{ display: "flex", flexDirection: "column", background: CARD, border: `1px solid ${CARD_BORDER}`, borderRadius: "1.25rem", minHeight: "200px", padding: "2rem", textDecoration: "none", position: "relative", overflow: "hidden" }}>
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: a.accent }} />
                      <Icon size={20} strokeWidth={1.5} style={{ color: a.accent, marginBottom: "1rem" }} />
                      <h3 style={{ color: "#ffffff", fontWeight: 900, fontSize: "1rem", letterSpacing: "-0.018em", lineHeight: 1.25, marginBottom: "0.375rem" }}>{a.titel}</h3>
                      <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.8125rem", fontStyle: "italic", marginBottom: "auto", paddingBottom: "1rem" }}>{a.claim}</p>
                      <span style={{ display: "inline-block", fontSize: "0.5625rem", fontWeight: 700, color: a.accent, background: `${a.accent}18`, border: `1px solid ${a.accent}35`, padding: "0.175rem 0.5rem", borderRadius: "100px", letterSpacing: "0.06em" }}>{a.badge}</span>
                    </Link>
                  </BlurFade>
                );
              })}
            </div>

            {/* Row 4: Ankerkleidung wide + Versorgung */}
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1rem" }}>
              <BlurFade className="md:col-span-2" delay={0.07}>
                <Link href="/ankerkleidung" className="bento-card"
                  style={{ display: "flex", flexDirection: "column", background: CARD, border: `1px solid ${CARD_BORDER}`, borderRadius: "1.25rem", minHeight: "220px", padding: "2.5rem", textDecoration: "none", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "#a78bfa" }} />
                  <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
                    <span style={{ fontSize: "0.625rem", fontWeight: 700, color: "#a78bfa", background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.28)", padding: "0.2rem 0.625rem", borderRadius: "100px" }}>{angebote[9].badge}</span>
                  </div>
                  <Shirt size={26} strokeWidth={1.5} style={{ color: "#a78bfa", marginBottom: "1.25rem" }} />
                  <h3 style={{ color: "#ffffff", fontWeight: 900, fontSize: "1.625rem", letterSpacing: "-0.028em", lineHeight: 1.15, marginBottom: "0.5rem" }}>{angebote[9].titel}</h3>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9375rem", fontStyle: "italic", marginBottom: "1rem" }}>{angebote[9].claim}</p>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.9, maxWidth: "46ch", marginBottom: "1.5rem" }}>{angebote[9].kurz}</p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#a78bfa", fontSize: "0.875rem", fontWeight: 600 }}>
                    {T.angeboteSection.kollektionEntdecken} <ArrowRight size={14} strokeWidth={1.5} />
                  </div>
                </Link>
              </BlurFade>

              <BlurFade delay={0.12}>
                <Link href="/versorgung" className="bento-card"
                  style={{ display: "flex", flexDirection: "column", background: CARD, border: `1px solid ${CARD_BORDER}`, borderRadius: "1.25rem", minHeight: "220px", padding: "2.5rem", textDecoration: "none", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "#FEC274" }} />
                  <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
                    <span style={{ fontSize: "0.625rem", fontWeight: 700, color: "#FEC274", background: "rgba(254,194,116,0.12)", border: "1px solid rgba(254,194,116,0.28)", padding: "0.2rem 0.625rem", borderRadius: "100px" }}>{angebote[10].badge}</span>
                  </div>
                  <Heart size={24} strokeWidth={1.5} style={{ color: "#FEC274", marginBottom: "1.25rem" }} />
                  <h3 style={{ color: "#ffffff", fontWeight: 900, fontSize: "1.375rem", letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: "0.5rem" }}>{angebote[10].titel}</h3>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", fontStyle: "italic", marginBottom: "1rem" }}>{angebote[10].claim}</p>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>{angebote[10].kurz}</p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#6FA3FE", fontSize: "0.875rem", fontWeight: 600 }}>
                    {T.angeboteSection.mehrErfahren} <ArrowRight size={13} strokeWidth={1.5} />
                  </div>
                </Link>
              </BlurFade>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ IMPACT STATS ═══ */}
      <section style={{ background: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "5rem 1.5rem" }}>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "2.5rem" }}>
            {([
              { zahl: "< 24h", label: T.fachkraefte.stats[0], color: "#6FA3FE" },
              { zahl: "24/7",  label: T.fachkraefte.stats[1], color: "#ef4444" },
              { zahl: "11",    label: T.fachkraefte.stats[2], color: "#FEC274" },
              { zahl: "100%",  label: T.fachkraefte.stats[3], color: "#6FA3FE" },
            ] as const).map((stat) => (
              <BlurFade key={stat.zahl}>
                <div style={{ textAlign: "center" }}>
                  <p style={{
                    fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 900, color: "#0a0a0a",
                    letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "0.875rem",
                    borderBottom: `3px solid ${stat.color}`, display: "inline-block", paddingBottom: "0.375rem",
                  }}>
                    {stat.zahl}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#6E6E73", lineHeight: 1.5, marginTop: "0.25rem" }}>{stat.label}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STÄRKEN ═══ */}
      <section style={{ background: "#F5F5F7", padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <BlurFade>
            <div style={{ marginBottom: "4rem" }}>
              <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>
                {T.staerken.label}
              </p>
              <h2 style={{ fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 900, color: "#0a0a0a", letterSpacing: "-0.035em", lineHeight: 1.1 }}>
                {T.staerken.h2}
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.5rem" }}>
            {T.staerken.items.map((s, i) => {
              const Icon = staerkenIcons[i];
              const color = staerkenColors[i];
              return (
                <BlurFade key={s.titel} delay={i * 0.1}>
                  <div style={{ background: "#ffffff", borderRadius: "1.125rem", border: "1px solid rgba(0,0,0,0.06)", padding: "2.5rem", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: color }} />
                    <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", background: `${color}12`, border: `1px solid ${color}20`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                      <Icon size={20} strokeWidth={1.5} style={{ color }} />
                    </div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 900, color: "#0a0a0a", letterSpacing: "-0.02em", marginBottom: "0.875rem" }}>{s.titel}</h3>
                    <p style={{ fontSize: "0.9375rem", color: "#6E6E73", lineHeight: 1.9 }}>{s.text}</p>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ FÜR FACHKRÄFTE ═══ */}
      <section style={{ background: DARK, padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <BlurFade>
                <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "1.5rem" }}>
                  {T.fachkraefte.label}
                </p>
                <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.035em", lineHeight: 1.1, marginBottom: "2rem" }}>
                  {T.fachkraefte.h2[0]}<br />{T.fachkraefte.h2[1]}<br />{T.fachkraefte.h2[2]}
                </h2>
                <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.9, marginBottom: "3rem", maxWidth: "480px" }}>
                  {T.fachkraefte.p}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  <Link href="/platzanfrage" style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    background: "#0071e3", color: "#ffffff",
                    padding: "0.75rem 1.5rem", borderRadius: "9999px",
                    fontSize: "0.9375rem", fontWeight: 600, textDecoration: "none",
                    border: "1px solid #0071e3",
                  }}>
                    {T.fachkraefte.cta1} <ArrowRight size={14} strokeWidth={1.5} />
                  </Link>
                  <Link href="/kontakt" style={{
                    display: "inline-flex", alignItems: "center",
                    background: "transparent", color: "rgba(255,255,255,0.85)",
                    padding: "0.75rem 1.5rem", borderRadius: "9999px",
                    fontSize: "0.9375rem", fontWeight: 500, textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}>
                    {T.fachkraefte.cta2}
                  </Link>
                </div>
              </BlurFade>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <BlurFade delay={0.12}>
                <div className="grid grid-cols-2" style={{ gap: "0.875rem" }}>
                  {([
                    { zahl: "< 24h", color: "#6FA3FE", label: T.fachkraefte.stats[0] },
                    { zahl: "24/7",  color: "#ef4444", label: T.fachkraefte.stats[1] },
                    { zahl: "11",    color: "#FEC274", label: T.fachkraefte.stats[2] },
                    { zahl: "100%",  color: "#6FA3FE", label: T.fachkraefte.stats[3] },
                  ] as const).map((stat) => (
                    <div key={stat.zahl} style={{ background: CARD, border: `1px solid ${CARD_BORDER}`, borderRadius: "0.875rem", padding: "1.75rem", position: "relative", overflow: "hidden" }}>
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: stat.color }} />
                      <p style={{ fontSize: "2.25rem", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "0.5rem" }}>{stat.zahl}</p>
                      <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.5 }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
