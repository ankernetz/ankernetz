"use client";

import Link from "next/link";
import {
  AlertTriangle, Home, Brain, Baby, Search, Shirt,
  MessageCircle, Rocket, Building2, Heart, ArrowRight,
  Shield, Network,
} from "lucide-react";
import { AnimatedGridPattern } from "./components/AnimatedGridPattern";
import { BlurFade } from "./components/BlurFade";
import { useLang } from "./contexts/LanguageContext";
import { tr } from "./i18n/translations";

const slugsMeta = [
  { slug: "krisenintervention",   icon: AlertTriangle, accent: "#ef4444", soft: "#FFF1F1" },
  { slug: "psychotherapie",       icon: Brain,         accent: "#3B82F6", soft: "#EFF6FF" },
  { slug: "fruehe-hilfen",        icon: Baby,          accent: "#F59E0B", soft: "#FFFBEB" },
  { slug: "therapie-wohnen",      icon: Home,          accent: "#06B6D4", soft: "#ECFEFF" },
  { slug: "jugendhilfe",          icon: Heart,         accent: "#10B981", soft: "#ECFDF5" },
  { slug: "diagnostik-clearing",  icon: Search,        accent: "#6366F1", soft: "#EEF2FF" },
  { slug: "beratung-praevention", icon: MessageCircle, accent: "#F97316", soft: "#FFF7ED" },
  { slug: "kita-beratung",        icon: Building2,     accent: "#EC4899", soft: "#FDF2F8" },
  { slug: "uebergang-arbeit",     icon: Rocket,        accent: "#84CC16", soft: "#F7FEE7" },
  { slug: "ankerkleidung",        icon: Shirt,         accent: "#8B5CF6", soft: "#F5F3FF" },
  { slug: "versorgung",           icon: Heart,         accent: "#F59E0B", soft: "#FFFBEB" },
];

const staerkenIcons = [Shield, Network, Brain];
const staerkenColors = ["#3B82F6", "#10B981", "#8B5CF6"];

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
        {/* Colorful orbs */}
        <div className="absolute pointer-events-none" style={{ top: "-60px", left: "5%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%)" }} />
        <div className="absolute pointer-events-none" style={{ bottom: "-40px", right: "5%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.16) 0%, transparent 65%)" }} />
        <div className="absolute pointer-events-none" style={{ top: "30%", right: "15%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 65%)" }} />
        <div className="absolute pointer-events-none" style={{ top: "20%", left: "25%", width: "250px", height: "250px", borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 65%)" }} />

        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.04}
          duration={3}
          strokeColor="rgba(59,130,246,0.12)"
          className="z-0"
        />

        <div className="relative z-10 w-full" style={{ maxWidth: "820px", margin: "0 auto", padding: "0 1.5rem" }}>

          {/* Badge */}
          <div className="fade-in-up" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)",
            borderRadius: "100px", padding: "0.375rem 0.875rem", marginBottom: "2.5rem",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444", flexShrink: 0, animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: "0.8125rem", fontWeight: 500, color: "#b91c1c", letterSpacing: "0.01em" }}>{T.hero.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="fade-in-up delay-1" style={{
            fontSize: "clamp(3.5rem,10vw,7rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            color: "#1a3f6f",
            marginBottom: "2rem",
          }}>
            {T.hero.h1line1}
            <br />
            <span style={{
              backgroundImage: "linear-gradient(135deg, #3B82F6 0%, #10B981 50%, #F59E0B 100%)",
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
            color: "#4B5563",
            fontWeight: 400,
            lineHeight: 1.75,
            marginBottom: "3rem",
            maxWidth: "560px",
            marginLeft: "auto",
            marginRight: "auto",
          }}>
            {T.hero.sub1}
          </p>

          {/* CTAs */}
          <div className="fade-in-up delay-3" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "5rem" }}>
            <a href="#angebote" className="btn btn-primary btn-lg group">
              {T.hero.cta1}
              <ArrowRight size={15} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link href="/platzanfrage" className="btn btn-outline btn-lg">
              {T.hero.cta2}
            </Link>
          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #fafbff)" }} />
        <div className="scroll-pulse absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-8" style={{ background: "rgba(15,23,42,0.15)" }} />
        </div>
      </section>

      {/* ═══ MANIFESTO STRIP ═══ */}
      <section style={{
        background: "linear-gradient(90deg, #3B82F6 0%, #6366F1 40%, #8B5CF6 70%, #EC4899 100%)",
        padding: "1.5rem",
      }}>
        <p style={{
          fontSize: "clamp(0.875rem,1.5vw,1.0625rem)",
          fontWeight: 700,
          color: "rgba(255,255,255,0.95)",
          letterSpacing: "0.12em",
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
            <div style={{ maxWidth: "700px" }}>
              <h2 style={{
                fontSize: "clamp(2.5rem,5vw,3.75rem)",
                fontWeight: 900,
                color: "#1a3f6f",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                marginBottom: "2.5rem",
              }}>
                {T.einleitung.h2}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ fontSize: "1.0625rem", color: "#4B5563", lineHeight: 1.9 }}>{T.einleitung.p1}</p>
                <p style={{ fontSize: "1.0625rem", color: "#4B5563", lineHeight: 1.9 }}>{T.einleitung.p2}</p>
                <p style={{ fontSize: "1.0625rem", color: "#4B5563", lineHeight: 1.9 }}>{T.einleitung.p3}</p>
                <p style={{ fontSize: "1.0625rem", color: "#4B5563", lineHeight: 1.9 }}>{T.einleitung.p4}</p>
                <p style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#1a3f6f", lineHeight: 1.9 }}>{T.einleitung.p5}</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ═══ ANGEBOTE ═══ */}
      <section id="angebote" style={{ background: "#F0F4F8", padding: "5rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <BlurFade>
            <div style={{ marginBottom: "3rem" }}>
              <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3B82F6", marginBottom: "1rem" }}>
                {T.angeboteSection.label}
              </p>
              <h2 style={{ fontSize: "clamp(1.875rem,4vw,3rem)", fontWeight: 900, color: "#1a3f6f", letterSpacing: "-0.035em", lineHeight: 1.1 }}>
                {T.angeboteSection.h2}
              </h2>
            </div>
          </BlurFade>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            {/* Row 1: Krisenintervention wide + Psychotherapie */}
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1rem" }}>
              <BlurFade className="md:col-span-2">
                <Link href="/krisenintervention" className="bento-card"
                  style={{ display: "flex", flexDirection: "column", background: `linear-gradient(160deg, ${angebote[0].soft} 0%, #ffffff 50%)`, border: `1.5px solid ${angebote[0].accent}20`, borderRadius: "1.25rem", minHeight: "400px", padding: "2.5rem", textDecoration: "none", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: angebote[0].accent }} />
                  <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
                    <span style={{ fontSize: "0.625rem", fontWeight: 700, color: angebote[0].accent, background: `${angebote[0].accent}15`, border: `1px solid ${angebote[0].accent}30`, padding: "0.2rem 0.65rem", borderRadius: "100px", letterSpacing: "0.06em" }}>{angebote[0].badge}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <AlertTriangle size={30} strokeWidth={1.5} style={{ color: angebote[0].accent, marginBottom: "1.5rem" }} />
                    <h3 style={{ color: "#1a3f6f", fontWeight: 900, fontSize: "2rem", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "0.75rem" }}>{angebote[0].titel}</h3>
                    <p style={{ color: angebote[0].accent, fontSize: "0.9375rem", fontWeight: 600, marginBottom: "1.25rem" }}>{angebote[0].claim}</p>
                    <p style={{ color: "#4B5563", fontSize: "0.875rem", lineHeight: 1.9, maxWidth: "44ch" }}>{angebote[0].kurz}</p>
                  </div>
                  <div style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", color: angebote[0].accent, fontSize: "0.875rem", fontWeight: 700 }}>
                    {T.angeboteSection.mehrErfahren} <ArrowRight size={14} strokeWidth={2} />
                  </div>
                </Link>
              </BlurFade>

              <BlurFade delay={0.08}>
                <Link href="/psychotherapie" className="bento-card"
                  style={{ display: "flex", flexDirection: "column", background: `linear-gradient(160deg, ${angebote[1].soft} 0%, #ffffff 50%)`, border: `1.5px solid ${angebote[1].accent}20`, borderRadius: "1.25rem", minHeight: "400px", padding: "2.5rem", textDecoration: "none", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: angebote[1].accent }} />
                  <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
                    <span style={{ fontSize: "0.625rem", fontWeight: 700, color: angebote[1].accent, background: `${angebote[1].accent}15`, border: `1px solid ${angebote[1].accent}30`, padding: "0.2rem 0.65rem", borderRadius: "100px", letterSpacing: "0.06em" }}>{angebote[1].badge}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <Brain size={28} strokeWidth={1.5} style={{ color: angebote[1].accent, marginBottom: "1.5rem" }} />
                    <h3 style={{ color: "#1a3f6f", fontWeight: 900, fontSize: "1.375rem", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "0.625rem" }}>{angebote[1].titel}</h3>
                    <p style={{ color: angebote[1].accent, fontSize: "0.875rem", fontWeight: 600, marginBottom: "1.125rem" }}>{angebote[1].claim}</p>
                    <p style={{ color: "#4B5563", fontSize: "0.875rem", lineHeight: 1.9 }}>{angebote[1].kurz}</p>
                  </div>
                  <div style={{ marginTop: "1.75rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", color: angebote[1].accent, fontSize: "0.875rem", fontWeight: 700 }}>
                    {T.angeboteSection.mehrErfahren} <ArrowRight size={13} strokeWidth={2} />
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
                      style={{ display: "flex", flexDirection: "column", background: `linear-gradient(160deg, ${a.soft} 0%, #ffffff 50%)`, border: `1.5px solid ${a.accent}20`, borderRadius: "1.25rem", minHeight: "320px", padding: "2.5rem", textDecoration: "none", position: "relative", overflow: "hidden" }}>
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: a.accent }} />
                      <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
                        <span style={{ fontSize: "0.625rem", fontWeight: 700, color: a.accent, background: `${a.accent}15`, border: `1px solid ${a.accent}30`, padding: "0.2rem 0.625rem", borderRadius: "100px" }}>{a.badge}</span>
                      </div>
                      <div style={{ flex: 1 }}>
                        <Icon size={26} strokeWidth={1.5} style={{ color: a.accent, marginBottom: "1.25rem" }} />
                        <h3 style={{ color: "#1a3f6f", fontWeight: 900, fontSize: "1.25rem", letterSpacing: "-0.022em", lineHeight: 1.2, marginBottom: "0.5rem" }}>{a.titel}</h3>
                        <p style={{ color: a.accent, fontSize: "0.875rem", fontWeight: 600, marginBottom: "1rem" }}>{a.claim}</p>
                        <p style={{ color: "#4B5563", fontSize: "0.875rem", lineHeight: 1.9 }}>{a.kurz}</p>
                      </div>
                      <div style={{ marginTop: "1.5rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", color: a.accent, fontSize: "0.875rem", fontWeight: 700 }}>
                        {T.angeboteSection.mehrErfahren} <ArrowRight size={13} strokeWidth={2} />
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
                      style={{ display: "flex", flexDirection: "column", background: `linear-gradient(160deg, ${a.soft} 0%, #ffffff 60%)`, border: `1.5px solid ${a.accent}20`, borderRadius: "1.25rem", minHeight: "200px", padding: "2rem", textDecoration: "none", position: "relative", overflow: "hidden" }}>
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: a.accent }} />
                      <Icon size={22} strokeWidth={1.5} style={{ color: a.accent, marginBottom: "1rem" }} />
                      <h3 style={{ color: "#1a3f6f", fontWeight: 900, fontSize: "1rem", letterSpacing: "-0.018em", lineHeight: 1.25, marginBottom: "0.375rem" }}>{a.titel}</h3>
                      <p style={{ color: a.accent, fontSize: "0.8125rem", fontWeight: 600, marginBottom: "auto", paddingBottom: "1rem" }}>{a.claim}</p>
                      <span style={{ display: "inline-block", fontSize: "0.5625rem", fontWeight: 700, color: a.accent, background: `${a.accent}15`, border: `1px solid ${a.accent}30`, padding: "0.175rem 0.5rem", borderRadius: "100px", letterSpacing: "0.06em" }}>{a.badge}</span>
                    </Link>
                  </BlurFade>
                );
              })}
            </div>

            {/* Row 4: Ankerkleidung wide + Versorgung */}
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1rem" }}>
              <BlurFade className="md:col-span-2" delay={0.07}>
                <Link href="/ankerkleidung" className="bento-card"
                  style={{ display: "flex", flexDirection: "column", background: `linear-gradient(160deg, ${angebote[9].soft} 0%, #ffffff 50%)`, border: `1.5px solid ${angebote[9].accent}20`, borderRadius: "1.25rem", minHeight: "220px", padding: "2.5rem", textDecoration: "none", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: angebote[9].accent }} />
                  <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
                    <span style={{ fontSize: "0.625rem", fontWeight: 700, color: angebote[9].accent, background: `${angebote[9].accent}15`, border: `1px solid ${angebote[9].accent}30`, padding: "0.2rem 0.625rem", borderRadius: "100px" }}>{angebote[9].badge}</span>
                  </div>
                  <Shirt size={26} strokeWidth={1.5} style={{ color: angebote[9].accent, marginBottom: "1.25rem" }} />
                  <h3 style={{ color: "#1a3f6f", fontWeight: 900, fontSize: "1.625rem", letterSpacing: "-0.028em", lineHeight: 1.15, marginBottom: "0.5rem" }}>{angebote[9].titel}</h3>
                  <p style={{ color: angebote[9].accent, fontSize: "0.9375rem", fontWeight: 600, marginBottom: "1rem" }}>{angebote[9].claim}</p>
                  <p style={{ color: "#4B5563", fontSize: "0.875rem", lineHeight: 1.9, maxWidth: "46ch", marginBottom: "1.5rem" }}>{angebote[9].kurz}</p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: angebote[9].accent, fontSize: "0.875rem", fontWeight: 700 }}>
                    {T.angeboteSection.kollektionEntdecken} <ArrowRight size={14} strokeWidth={2} />
                  </div>
                </Link>
              </BlurFade>

              <BlurFade delay={0.12}>
                <Link href="/versorgung" className="bento-card"
                  style={{ display: "flex", flexDirection: "column", background: `linear-gradient(160deg, ${angebote[10].soft} 0%, #ffffff 50%)`, border: `1.5px solid ${angebote[10].accent}20`, borderRadius: "1.25rem", minHeight: "220px", padding: "2.5rem", textDecoration: "none", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: angebote[10].accent }} />
                  <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
                    <span style={{ fontSize: "0.625rem", fontWeight: 700, color: angebote[10].accent, background: `${angebote[10].accent}15`, border: `1px solid ${angebote[10].accent}30`, padding: "0.2rem 0.625rem", borderRadius: "100px" }}>{angebote[10].badge}</span>
                  </div>
                  <Heart size={24} strokeWidth={1.5} style={{ color: angebote[10].accent, marginBottom: "1.25rem" }} />
                  <h3 style={{ color: "#1a3f6f", fontWeight: 900, fontSize: "1.375rem", letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: "0.5rem" }}>{angebote[10].titel}</h3>
                  <p style={{ color: angebote[10].accent, fontSize: "0.875rem", fontWeight: 600, marginBottom: "1rem" }}>{angebote[10].claim}</p>
                  <p style={{ color: "#4B5563", fontSize: "0.875rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>{angebote[10].kurz}</p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: angebote[10].accent, fontSize: "0.875rem", fontWeight: 700 }}>
                    {T.angeboteSection.mehrErfahren} <ArrowRight size={13} strokeWidth={2} />
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
              { zahl: "< 24h", label: T.fachkraefte.stats[0], color: "#3B82F6" },
              { zahl: "24/7",  label: T.fachkraefte.stats[1], color: "#ef4444" },
              { zahl: "11",    label: T.fachkraefte.stats[2], color: "#F59E0B" },
              { zahl: "100%",  label: T.fachkraefte.stats[3], color: "#10B981" },
            ] as const).map((stat) => (
              <BlurFade key={stat.zahl}>
                <div style={{ textAlign: "center" }}>
                  <p style={{
                    fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 900, color: "#1a3f6f",
                    letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "0.875rem",
                    display: "inline-block",
                    borderBottom: `4px solid ${stat.color}`,
                    paddingBottom: "0.375rem",
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
              <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B82F6", marginBottom: "1rem" }}>
                {T.staerken.label}
              </p>
              <h2 style={{ fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 900, color: "#1a3f6f", letterSpacing: "-0.035em", lineHeight: 1.1 }}>
                {T.staerken.h2}
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.5rem" }}>
            {T.staerken.items.map((s, i) => {
              const Icon = staerkenIcons[i];
              const color = staerkenColors[i];
              const soft = ["#EFF6FF", "#ECFDF5", "#F5F3FF"][i];
              return (
                <BlurFade key={s.titel} delay={i * 0.1}>
                  <div style={{ background: "#ffffff", borderRadius: "1.125rem", border: `1.5px solid ${color}20`, padding: "2.5rem", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: color }} />
                    <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", background: soft, border: `1px solid ${color}25`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                      <Icon size={20} strokeWidth={1.5} style={{ color }} />
                    </div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 900, color: "#1a3f6f", letterSpacing: "-0.02em", marginBottom: "0.875rem" }}>{s.titel}</h3>
                    <p style={{ fontSize: "0.9375rem", color: "#6E6E73", lineHeight: 1.9 }}>{s.text}</p>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ FÜR FACHKRÄFTE ═══ */}
      <section style={{
        background: "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3B82F6 100%)",
        padding: "7rem 1.5rem",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <BlurFade>
                <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "1.5rem" }}>
                  {T.fachkraefte.label}
                </p>
                <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.035em", lineHeight: 1.1, marginBottom: "2rem" }}>
                  {T.fachkraefte.h2[0]}<br />{T.fachkraefte.h2[1]}<br />{T.fachkraefte.h2[2]}
                </h2>
                <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.9, marginBottom: "3rem", maxWidth: "480px" }}>
                  {T.fachkraefte.p}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  <Link href="/platzanfrage" style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    background: "#ffffff", color: "#1e40af",
                    padding: "0.75rem 1.5rem", borderRadius: "9999px",
                    fontSize: "0.9375rem", fontWeight: 700, textDecoration: "none",
                  }}>
                    {T.fachkraefte.cta1} <ArrowRight size={14} strokeWidth={2} />
                  </Link>
                  <Link href="/kontakt" style={{
                    display: "inline-flex", alignItems: "center",
                    background: "transparent", color: "#ffffff",
                    padding: "0.75rem 1.5rem", borderRadius: "9999px",
                    fontSize: "0.9375rem", fontWeight: 500, textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.4)",
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
                    { zahl: "< 24h", color: "#93C5FD", label: T.fachkraefte.stats[0] },
                    { zahl: "24/7",  color: "#FCA5A5", label: T.fachkraefte.stats[1] },
                    { zahl: "11",    color: "#FDE68A", label: T.fachkraefte.stats[2] },
                    { zahl: "100%",  color: "#6EE7B7", label: T.fachkraefte.stats[3] },
                  ] as const).map((stat) => (
                    <div key={stat.zahl} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "0.875rem", padding: "1.75rem", backdropFilter: "blur(8px)" }}>
                      <p style={{ fontSize: "2.25rem", fontWeight: 900, color: stat.color, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "0.5rem" }}>{stat.zahl}</p>
                      <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{stat.label}</p>
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
