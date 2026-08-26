"use client";

import Link from "next/link";
import {
  AlertTriangle, Home, Brain, Baby, Search, Shirt,
  MessageCircle, Rocket, Building2, Heart, ArrowRight,
  Shield, Network, Star, Compass
} from "lucide-react";
import { AnimatedGridPattern } from "./components/AnimatedGridPattern";
import { BlurFade } from "./components/BlurFade";
import { useLang } from "./contexts/LanguageContext";
import { tr } from "./i18n/translations";

const slugsMeta = [
  { slug: "krisenintervention",   icon: AlertTriangle, iconColor: "#FEC274", stripe: "#c47a20" },
  { slug: "psychotherapie",       icon: Brain,         iconColor: "#6FA3FE", stripe: "#4d85e8" },
  { slug: "fruehe-hilfen",        icon: Baby,          iconColor: "#FEC274", stripe: "#c47a20" },
  { slug: "therapie-wohnen",      icon: Home,          iconColor: "#6FA3FE", stripe: "#4d85e8" },
  { slug: "jugendhilfe",          icon: Heart,         iconColor: "#FEC274", stripe: "#c47a20" },
  { slug: "diagnostik-clearing",  icon: Search,        iconColor: "#6FA3FE", stripe: "#4d85e8" },
  { slug: "beratung-praevention", icon: MessageCircle, iconColor: "#6FA3FE", stripe: "#4d85e8" },
  { slug: "kita-beratung",        icon: Building2,     iconColor: "#FEC274", stripe: "#c47a20" },
  { slug: "uebergang-arbeit",     icon: Rocket,        iconColor: "#6FA3FE", stripe: "#4d85e8" },
  { slug: "ankerkleidung",        icon: Shirt,         iconColor: "#6FA3FE", stripe: "#4d85e8" },
  { slug: "versorgung",           icon: Star,          iconColor: "#FEC274", stripe: "#c47a20" },
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

  return (
    <main className="overflow-x-hidden">

      {/* ═══ HERO ═══ */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
        style={{ background: "linear-gradient(155deg, #eef4ff 0%, #fafbff 45%, #fff8ee 100%)" }}
      >
        <div className="absolute top-0 left-[10%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(111,163,254,0.14) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(254,194,116,0.12) 0%, transparent 65%)" }} />
        <div className="absolute top-1/3 right-[20%] w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(3,41,92,0.05) 0%, transparent 65%)" }} />

        <AnimatedGridPattern
          numSquares={35}
          maxOpacity={0.04}
          duration={3}
          strokeColor="rgba(111,163,254,0.15)"
          className="z-0"
        />

        <div className="relative z-10 w-full" style={{ maxWidth: "780px", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>

          {/* Badge */}
          <div className="fade-in-up" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "100px", padding: "0.375rem 0.875rem", marginBottom: "2.5rem" }}>
            <span style={{ width: "0.4rem", height: "0.4rem", borderRadius: "50%", background: "#ef4444", flexShrink: 0, animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: "0.8125rem", fontWeight: 500, color: "#b91c1c", letterSpacing: "0.01em" }}>
              {T.hero.badge}
            </span>
          </div>

          <h1 className="fade-in-up delay-1 leading-none"
            style={{ fontSize: "clamp(3.25rem,9vw,6rem)", fontWeight: 900, letterSpacing: "-0.035em", color: "#1a3f6f", marginBottom: "1.5rem" }}>
            Anker<span style={{
              backgroundImage: "linear-gradient(135deg, #6FA3FE 0%, #FEC274 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>netz</span>
          </h1>

          <div className="fade-in-up delay-2" style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "clamp(1.0625rem,2.2vw,1.25rem)", color: "#1a3f6f", fontWeight: 400, lineHeight: 1.7, marginBottom: "0.25rem" }}>
              {T.hero.sub1}
            </p>
            <p style={{ fontSize: "clamp(1.0625rem,2.2vw,1.25rem)", color: "rgba(3,41,92,0.45)", fontWeight: 400, lineHeight: 1.7 }}>
              {T.hero.sub2}
            </p>
          </div>

          <div className="fade-in-up delay-3" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "6rem" }}>
            <a href="#angebote" className="btn btn-primary btn-lg group">
              {T.hero.cta1}
              <ArrowRight size={15} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link href="/platzanfrage" className="btn btn-outline btn-lg">
              {T.hero.cta2}
            </Link>
          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #fff8ee)" }} />
        <div className="scroll-pulse absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-8" style={{ background: "rgba(15,23,42,0.15)" }} />
        </div>
      </section>

      {/* ═══ EINLEITUNG ═══ */}
      <section className="relative overflow-hidden bg-[#F5F5F7]" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)" }} />
        <div className="site-container">
          <BlurFade>
            <div style={{ maxWidth: "720px", margin: "0 auto" }}>
              <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-black text-[#1a3f6f] leading-[1.1]"
                style={{ letterSpacing: "-0.03em", marginBottom: "2.5rem" }}>
                {T.einleitung.h2}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
                <p className="text-[1.0625rem] text-[#6E6E73] font-normal leading-[1.8]">{T.einleitung.p1}</p>
                <p className="text-[1.0625rem] text-[#6E6E73] font-normal leading-[1.8]">{T.einleitung.p2}</p>
                <p className="text-[1.0625rem] text-[#6E6E73] font-normal leading-[1.8]">{T.einleitung.p3}</p>
                <p className="text-[1.0625rem] text-[#6E6E73] font-normal leading-[1.8]">{T.einleitung.p4}</p>
                <p className="text-[1.0625rem] text-[#374151] font-semibold leading-[1.8]">{T.einleitung.p5}</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ═══ KOMPASS BANNER ═══ */}
      <section style={{ background: "#0b1220", padding: "3.5rem 1.5rem" }}>
        <div className="site-container" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "2rem", flexWrap: "wrap",
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", maxWidth: "640px" }}>
            <div style={{
              width: "48px", height: "48px", borderRadius: "12px", flexShrink: 0,
              background: "rgba(143,184,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Compass size={24} color="#8fb8ff" />
            </div>
            <div>
              <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8fb8ff", marginBottom: "0.5rem" }}>
                {lang === "de" ? "Neu bei Ankernetz" : "New at Ankernetz"}
              </p>
              <h2 style={{ fontSize: "clamp(1.25rem,2.5vw,1.625rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.35, marginBottom: "0.5rem" }}>
                {lang === "de"
                  ? "Der Ankernetz-Kompass: welche Hilfe passt zu Ihrer Situation?"
                  : "The Ankernetz Compass: which help fits your situation?"}
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.65, margin: 0 }}>
                {lang === "de"
                  ? "Einer der ersten interaktiven Orientierungs-Fragebögen seiner Art in der deutschsprachigen Jugendhilfe - kostenlos, anonym, in 3 Minuten."
                  : "One of the first interactive orientation questionnaires of its kind in German-speaking youth welfare - free, anonymous, 3 minutes."}
              </p>
            </div>
          </div>
          <Link href="/kompass" style={{
            display: "inline-flex", alignItems: "center", gap: "8px", flexShrink: 0,
            background: "#6FA3FE", color: "white", fontWeight: 700, fontSize: "15px",
            padding: "14px 28px", borderRadius: "12px", textDecoration: "none",
          }}>
            {lang === "de" ? "Jetzt Ankernetz-Kompass starten" : "Start the Ankernetz Compass"} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ═══ BENTO GRID - ANGEBOTE ═══ */}
      <section id="angebote" style={{ background: "#d8e4f0", paddingTop: "4.5rem", paddingBottom: "5rem" }}>
        <div className="site-container">
          <BlurFade>
            <div className="text-center" style={{ marginBottom: "2.5rem" }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#1a3f6f" }}>
                {T.angeboteSection.label}
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-black" style={{ letterSpacing: "-0.028em", color: "#1a3f6f" }}>
                {T.angeboteSection.h2}
              </h2>
            </div>
          </BlurFade>
        </div>
        <div className="site-container" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          {/* Reihe 1: Krisenintervention (Large) + Psychotherapie */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.5rem" }}>
            <BlurFade className="md:col-span-2">
              <Link href="/krisenintervention" className="bento-card group relative flex flex-col overflow-hidden"
                style={{ background: `radial-gradient(ellipse 65% 50% at 95% 5%, ${angebote[0].stripe}22 0%, transparent 55%), #f0f4f8`, border: "1px solid rgba(26,63,111,0.1)", borderRadius: "1.5rem", minHeight: "460px", padding: "2.5rem 3rem" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: angebote[0].stripe }} />
                <div style={{ position: "absolute", top: "1.5rem", right: "1.75rem" }}>
                  <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: angebote[0].stripe, background: `${angebote[0].stripe}18`, border: `1px solid ${angebote[0].stripe}35`, padding: "0.2rem 0.65rem", borderRadius: "100px" }}>{angebote[0].badge}</span>
                </div>
                <div style={{ position: "relative", zIndex: 10 }}>
                  <AlertTriangle size={30} strokeWidth={1.5} style={{ color: angebote[0].iconColor, marginBottom: "1rem" }} />
                  <h3 style={{ color: "#1a3f6f", fontWeight: 900, fontSize: "1.875rem", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "0.625rem" }}>{angebote[0].titel}</h3>
                  <p style={{ color: "rgba(26,63,111,0.55)", fontSize: "0.9375rem", fontStyle: "italic", marginBottom: "1.25rem" }}>{angebote[0].claim}</p>
                  <p style={{ color: "#4a5568", fontSize: "0.875rem", lineHeight: "2.1", marginBottom: "2rem", maxWidth: "38ch" }}>{angebote[0].kurz}</p>
                  <span className="group-hover:gap-3 transition-all" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#1a3f6f", fontSize: "0.875rem", fontWeight: 600 }}>
                    {T.angeboteSection.mehrErfahren} <ArrowRight size={14} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </BlurFade>

            <BlurFade delay={0.1}>
              <Link href="/psychotherapie" className="bento-card group relative flex flex-col overflow-hidden"
                style={{ background: `radial-gradient(ellipse 65% 50% at 95% 5%, ${angebote[1].stripe}22 0%, transparent 55%), #f0f4f8`, border: "1px solid rgba(26,63,111,0.1)", borderRadius: "1.5rem", minHeight: "460px", padding: "2.5rem 3rem" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: angebote[1].stripe }} />
                <div style={{ position: "absolute", top: "1.5rem", right: "1.75rem" }}>
                  <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: angebote[1].stripe, background: `${angebote[1].stripe}18`, border: `1px solid ${angebote[1].stripe}35`, padding: "0.2rem 0.65rem", borderRadius: "100px" }}>{angebote[1].badge}</span>
                </div>
                <div style={{ position: "relative", zIndex: 10 }}>
                  <Brain size={26} strokeWidth={1.5} style={{ color: angebote[1].iconColor, marginBottom: "1rem" }} />
                  <h3 style={{ color: "#1a3f6f", fontWeight: 900, fontSize: "1.375rem", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "0.5rem" }}>{angebote[1].titel}</h3>
                  <p style={{ color: "rgba(26,63,111,0.55)", fontSize: "0.875rem", fontStyle: "italic", marginBottom: "1.125rem" }}>{angebote[1].claim}</p>
                  <p style={{ color: "#4a5568", fontSize: "0.875rem", lineHeight: "2.1", marginBottom: "1.75rem" }}>{angebote[1].kurz}</p>
                  <span className="group-hover:gap-3 transition-all" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#1a3f6f", fontSize: "0.875rem", fontWeight: 600 }}>
                    {T.angeboteSection.mehrErfahren} <ArrowRight size={13} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </BlurFade>
          </div>

          {/* Reihe 2: 3 Medium */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.5rem" }}>
            {[angebote[2], angebote[3], angebote[4]].map((a, i) => {
              const Icon = a.icon;
              return (
                <BlurFade key={a.slug} delay={i * 0.08}>
                  <Link href={`/${a.slug}`} className="bento-card group relative flex flex-col overflow-hidden"
                    style={{ background: `radial-gradient(ellipse 65% 50% at 95% 5%, ${a.stripe}22 0%, transparent 55%), #f0f4f8`, border: "1px solid rgba(26,63,111,0.1)", borderRadius: "1.5rem", minHeight: "380px", padding: "2.5rem 3rem" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: a.stripe }} />
                    <div style={{ position: "absolute", top: "1.5rem", right: "1.75rem" }}>
                      <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: a.stripe, background: `${a.stripe}18`, border: `1px solid ${a.stripe}35`, padding: "0.2rem 0.65rem", borderRadius: "100px" }}>{a.badge}</span>
                    </div>
                    <div style={{ position: "relative", zIndex: 10 }}>
                      <Icon size={24} strokeWidth={1.5} style={{ color: a.iconColor, marginBottom: "1rem" }} />
                      <h3 style={{ color: "#1a3f6f", fontWeight: 900, fontSize: "1.25rem", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "0.5rem" }}>{a.titel}</h3>
                      <p style={{ color: "rgba(26,63,111,0.55)", fontSize: "0.875rem", fontStyle: "italic", marginBottom: "1.125rem" }}>{a.claim}</p>
                      <p style={{ color: "#4a5568", fontSize: "0.875rem", lineHeight: "2.1", marginBottom: "1.75rem" }}>{a.kurz}</p>
                      <span className="group-hover:gap-3 transition-all" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#1a3f6f", fontSize: "0.875rem", fontWeight: 600 }}>
                        {T.angeboteSection.mehrErfahren} <ArrowRight size={13} strokeWidth={1.5} />
                      </span>
                    </div>
                  </Link>
                </BlurFade>
              );
            })}
          </div>

          {/* Reihe 3: 4 Compact */}
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "1.5rem" }}>
            {[angebote[5], angebote[6], angebote[7], angebote[8]].map((a, i) => {
              const Icon = a.icon;
              return (
                <BlurFade key={a.slug} delay={i * 0.06}>
                  <Link href={`/${a.slug}`} className="bento-card group relative flex flex-col overflow-hidden"
                    style={{ background: `radial-gradient(ellipse 70% 55% at 90% 5%, ${a.stripe}22 0%, transparent 55%), #f0f4f8`, border: "1px solid rgba(26,63,111,0.1)", borderRadius: "1.5rem", minHeight: "260px", padding: "2rem 2.25rem" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: a.stripe }} />
                    <div style={{ position: "relative", zIndex: 10 }}>
                      <Icon size={22} strokeWidth={1.5} style={{ color: a.iconColor, marginBottom: "0.875rem" }} />
                      <h3 style={{ color: "#1a3f6f", fontWeight: 900, fontSize: "1.0625rem", letterSpacing: "-0.018em", lineHeight: 1.2, marginBottom: "0.375rem" }}>{a.titel}</h3>
                      <p style={{ color: "rgba(26,63,111,0.55)", fontSize: "0.8125rem", fontStyle: "italic", marginBottom: "1.25rem" }}>{a.claim}</p>
                      <span style={{ display: "inline-block", fontSize: "0.6875rem", fontWeight: 600, color: a.stripe, background: `${a.stripe}15`, border: `1px solid ${a.stripe}30`, padding: "0.2rem 0.6rem", borderRadius: "100px" }}>{a.badge}</span>
                    </div>
                  </Link>
                </BlurFade>
              );
            })}
          </div>

          {/* Reihe 4: Ankerkleidung (Large) + Versorgung */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.5rem" }}>
            <BlurFade delay={0.08} className="md:col-span-2">
              <Link href="/ankerkleidung" className="bento-card group relative flex flex-col overflow-hidden"
                style={{ background: `radial-gradient(ellipse 65% 50% at 95% 5%, ${angebote[9].stripe}22 0%, transparent 55%), #f0f4f8`, border: "1px solid rgba(26,63,111,0.1)", borderRadius: "1.5rem", minHeight: "260px", padding: "2.5rem 3rem" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: angebote[9].stripe }} />
                <div style={{ position: "absolute", top: "1.5rem", right: "1.75rem" }}>
                  <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: angebote[9].stripe, background: `${angebote[9].stripe}18`, border: `1px solid ${angebote[9].stripe}35`, padding: "0.2rem 0.65rem", borderRadius: "100px" }}>{angebote[9].badge}</span>
                </div>
                <div style={{ position: "relative", zIndex: 10 }}>
                  <Shirt size={26} strokeWidth={1.5} style={{ color: angebote[9].iconColor, marginBottom: "1rem" }} />
                  <h3 style={{ color: "#1a3f6f", fontWeight: 900, fontSize: "1.625rem", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "0.5rem" }}>{angebote[9].titel}</h3>
                  <p style={{ color: "rgba(26,63,111,0.55)", fontSize: "0.9375rem", fontStyle: "italic", marginBottom: "1.125rem" }}>{angebote[9].claim}</p>
                  <p style={{ color: "#4a5568", fontSize: "0.875rem", lineHeight: "2.1", marginBottom: "1.75rem", maxWidth: "40ch" }}>{angebote[9].kurz}</p>
                  <span className="group-hover:gap-3 transition-all" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#1a3f6f", fontSize: "0.875rem", fontWeight: 600 }}>
                    {T.angeboteSection.kollektionEntdecken} <ArrowRight size={14} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </BlurFade>

            <BlurFade delay={0.15}>
              <Link href="/versorgung" className="bento-card group relative flex flex-col overflow-hidden"
                style={{ background: `radial-gradient(ellipse 65% 50% at 95% 5%, ${angebote[10].stripe}22 0%, transparent 55%), #f0f4f8`, border: "1px solid rgba(26,63,111,0.1)", borderRadius: "1.5rem", minHeight: "260px", padding: "2.5rem 3rem" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: angebote[10].stripe }} />
                <div style={{ position: "absolute", top: "1.5rem", right: "1.75rem" }}>
                  <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: angebote[10].stripe, background: `${angebote[10].stripe}18`, border: `1px solid ${angebote[10].stripe}35`, padding: "0.2rem 0.65rem", borderRadius: "100px" }}>{angebote[10].badge}</span>
                </div>
                <div style={{ position: "relative", zIndex: 10 }}>
                  <Star size={24} strokeWidth={1.5} style={{ color: angebote[10].iconColor, marginBottom: "1rem" }} />
                  <h3 style={{ color: "#1a3f6f", fontWeight: 900, fontSize: "1.375rem", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "0.5rem" }}>{angebote[10].titel}</h3>
                  <p style={{ color: "rgba(26,63,111,0.55)", fontSize: "0.875rem", fontStyle: "italic", marginBottom: "1.125rem" }}>{angebote[10].claim}</p>
                  <p style={{ color: "#4a5568", fontSize: "0.875rem", lineHeight: "2.1", marginBottom: "1.75rem" }}>{angebote[10].kurz}</p>
                  <span className="group-hover:gap-3 transition-all" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#1a3f6f", fontSize: "0.875rem", fontWeight: 600 }}>
                    {T.angeboteSection.mehrErfahren} <ArrowRight size={13} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </BlurFade>
          </div>

        </div>
      </section>

      {/* ═══ STARKEN ═══ */}
      <section className="relative overflow-hidden bg-white" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
        <div className="site-container">
          <BlurFade>
            <div style={{ marginBottom: "4.5rem" }}>
              <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.25rem" }}>{T.staerken.label}</p>
              <h2 style={{ fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 900, color: "#1a3f6f", letterSpacing: "-0.028em", lineHeight: 1.15 }}>
                {T.staerken.h2}
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "2rem" }}>
            {T.staerken.items.map((s, i) => {
              const Icon = staerkenIcons[i];
              const color = staerkenColors[i];
              return (
                <BlurFade key={s.titel} delay={i * 0.1}>
                  <div className="bento-card group relative overflow-hidden" style={{ background: "#ffffff", borderRadius: "1.125rem", border: "1px solid rgba(0,0,0,0.07)", padding: "3rem", boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 8px 28px rgba(0,0,0,0.05)", transition: "box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: color }} />
                    <div style={{ width: "3.25rem", height: "3.25rem", borderRadius: "0.875rem", background: `${color}12`, border: `1px solid ${color}22`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2.25rem" }}>
                      <Icon size={22} strokeWidth={1.5} style={{ color }} />
                    </div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 900, color: "#1a3f6f", letterSpacing: "-0.02em", marginBottom: "1rem" }}>{s.titel}</h3>
                    <p style={{ fontSize: "0.9375rem", color: "#6E6E73", lineHeight: "2", fontWeight: 400 }}>{s.text}</p>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ FUR FACHKRAFTE ═══ */}
      <section className="relative overflow-hidden"
        style={{ background: "#d8e4f0", paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <BlurFade>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-6" style={{ color: "#1a3f6f" }}>{T.fachkraefte.label}</p>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-black mb-10 leading-[1.15]" style={{ letterSpacing: "-0.03em", color: "#1a3f6f" }}>
                  {T.fachkraefte.h2[0]}<br />{T.fachkraefte.h2[1]}<br />{T.fachkraefte.h2[2]}
                </h2>
                <p className="text-[1.0625rem] font-normal leading-[2] mb-14 max-w-lg" style={{ color: "rgba(26,63,111,0.65)" }}>
                  {T.fachkraefte.p}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/platzanfrage" className="btn btn-primary btn-lg group">
                    {T.fachkraefte.cta1}
                    <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link href="/kontakt" className="btn btn-outline btn-lg">
                    {T.fachkraefte.cta2}
                  </Link>
                </div>
              </BlurFade>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <BlurFade delay={0.12}>
                <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                  {[
                    { zahl: "< 24h", color: "#6FA3FE" },
                    { zahl: "24/7",  color: "#ef4444" },
                    { zahl: "11",    color: "#FEC274" },
                    { zahl: "100%",  color: "#6FA3FE" },
                  ].map((stat, i) => (
                    <div key={stat.zahl} className="bento-card" style={{ background: "#f0f4f8", border: "1px solid rgba(26,63,111,0.1)", borderRadius: "0.875rem", padding: "2rem 1.75rem", position: "relative", overflow: "hidden" }}>
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: stat.color }} />
                      <p style={{ fontSize: "2.25rem", fontWeight: 900, color: "#1a3f6f", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "0.625rem" }}>{stat.zahl}</p>
                      <p style={{ fontSize: "0.8125rem", color: "rgba(26,63,111,0.55)", lineHeight: 1.5, fontWeight: 400 }}>{T.fachkraefte.stats[i]}</p>
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
