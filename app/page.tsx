import Link from "next/link";
import {
  AlertTriangle, Home, Brain, Baby, Search, Shirt,
  MessageCircle, Rocket, Building2, Heart, ArrowRight,
  Shield, Network, Star
} from "lucide-react";
import { AnimatedGridPattern } from "./components/AnimatedGridPattern";
import { ShineText } from "./components/ShineText";
import { ShineBorder } from "./components/ShineBorder";
import { BlurFade } from "./components/BlurFade";
import { Meteors } from "./components/Meteors";

const angebote = [
  {
    slug: "krisenintervention",
    titel: "Krisenintervention",
    claim: "Sofort da. Wenn es zählt.",
    kurz: "24/7 Sofortaufnahme für Jugendliche in akuter Not — rund um die Uhr, an 365 Tagen.",
    icon: AlertTriangle,
    glow: "glow-red",
    bg: "linear-gradient(145deg, #4a0d14 0%, #6b1520 50%, #3d0a10 100%)",
    badge: "24/7",
    badgeClass: "bg-red-400/30 text-red-200 border border-red-300/40",
    iconClass: "text-red-300",
    stripe: "#ef4444",
  },
  {
    slug: "psychotherapie",
    titel: "Kinder- & Jugend­psychotherapie",
    claim: "Professionelle Therapie. Mit Kassensitz.",
    kurz: "Eingebunden in alle Hilfeprozesse — direkt dort, wo Kinder und Jugendliche leben.",
    icon: Brain,
    glow: "glow-violet",
    bg: "linear-gradient(145deg, #2d1560 0%, #3d1f80 100%)",
    badge: "Kassensitz",
    badgeClass: "bg-purple-400/30 text-purple-200 border border-purple-300/40",
    iconClass: "text-purple-300",
    stripe: "#8b5cf6",
  },
  {
    slug: "fruehe-hilfen",
    titel: "Frühe Hilfen",
    claim: "Schutz von Anfang an.",
    kurz: "Bindung, Sicherheit und Entwicklung für die Kleinsten.",
    icon: Baby,
    glow: "glow-green",
    bg: "linear-gradient(145deg, #0d4a28 0%, #155c35 100%)",
    badge: "0–6 Jahre",
    badgeClass: "bg-emerald-400/30 text-emerald-200 border border-emerald-300/40",
    iconClass: "text-emerald-300",
    stripe: "#10b981",
  },
  {
    slug: "therapie-wohnen",
    titel: "Therapie & Wohnen",
    claim: "Raum zum Ankommen.",
    kurz: "Therapeutische Wohngruppen mit intensiver Begleitung und Traumaarbeit.",
    icon: Home,
    glow: "glow-blue",
    bg: "linear-gradient(145deg, #0d2d5c 0%, #153f80 100%)",
    badge: "12–17 Jahre",
    badgeClass: "bg-blue-400/30 text-blue-200 border border-blue-300/40",
    iconClass: "text-blue-300",
    stripe: "#4A7FA5",
  },
  {
    slug: "jugendhilfe",
    titel: "Jugendhilfe",
    claim: "Sicherheit im Alltag.",
    kurz: "Kinderwohngruppen mit verlässlicher Struktur und Beziehungsarbeit.",
    icon: Heart,
    glow: "glow-amber",
    bg: "linear-gradient(145deg, #4a2808 0%, #6b3a0f 100%)",
    badge: "6–12 Jahre",
    badgeClass: "bg-amber-400/30 text-amber-200 border border-amber-300/40",
    iconClass: "text-amber-300",
    stripe: "#f59e0b",
  },
  {
    slug: "diagnostik-clearing",
    titel: "Diagnostik & Clearing",
    claim: "Klarheit schafft die richtige Hilfe.",
    icon: Search,
    glow: "glow-cyan",
    bg: "linear-gradient(145deg, #073550 0%, #0d4a6e 100%)",
    badge: "Gutachten",
    badgeClass: "bg-cyan-400/30 text-cyan-200 border border-cyan-300/40",
    iconClass: "text-cyan-300",
    stripe: "#06b6d4",
  },
  {
    slug: "beratung-praevention",
    titel: "Beratung & Prävention",
    claim: "Früh helfen. Gemeinsam stärken.",
    icon: MessageCircle,
    glow: "glow-lime",
    bg: "linear-gradient(145deg, #1a3d10 0%, #275c18 100%)",
    badge: "Online & vor Ort",
    badgeClass: "bg-lime-400/30 text-lime-200 border border-lime-300/40",
    iconClass: "text-lime-300",
    stripe: "#a3e635",
  },
  {
    slug: "kita-beratung",
    titel: "Beratung in Kitas",
    claim: "Früh erkennen.",
    icon: Building2,
    glow: "glow-orange",
    bg: "linear-gradient(145deg, #4a2008 0%, #6b300f 100%)",
    badge: "Fachkräfte",
    badgeClass: "bg-orange-400/30 text-orange-200 border border-orange-300/40",
    iconClass: "text-orange-300",
    stripe: "#fb923c",
  },
  {
    slug: "uebergang-arbeit",
    titel: "Übergang Arbeit",
    claim: "Der nächste Schritt.",
    icon: Rocket,
    glow: "glow-pink",
    bg: "linear-gradient(145deg, #3d1568 0%, #561e90 100%)",
    badge: "Übergang",
    badgeClass: "bg-fuchsia-400/30 text-fuchsia-200 border border-fuchsia-300/40",
    iconClass: "text-fuchsia-300",
    stripe: "#e879f9",
  },
  {
    slug: "ankerkleidung",
    titel: "Ankerkleidung",
    claim: "Stabilität. Selbstwert. Alltag.",
    kurz: "Spezialisierte Kleidung nach Störungsbild — Teil des Hilfesystems.",
    icon: Shirt,
    glow: "glow-slate",
    bg: "linear-gradient(145deg, #1e2d45 0%, #283d5e 100%)",
    badge: "Shop",
    badgeClass: "bg-slate-400/30 text-slate-200 border border-slate-300/40",
    iconClass: "text-slate-300",
    stripe: "#94a3b8",
  },
  {
    slug: "versorgung",
    titel: "Versorgung",
    claim: "Würde im Alltag.",
    kurz: "Bedarfsorientierte Ausstattung für Kinder und Jugendliche im Hilfesystem.",
    icon: Star,
    glow: "glow-amber",
    bg: "linear-gradient(145deg, #3d3008 0%, #574510 100%)",
    badge: "Ausstattung",
    badgeClass: "bg-amber-400/30 text-amber-200 border border-amber-300/40",
    iconClass: "text-amber-300",
    stripe: "#f59e0b",
  },
];

const staerken = [
  {
    icon: Shield,
    color: "#4A7FA5",
    titel: "Verlässlich",
    text: "Feste Ansprechpartner, klare Prozesse, transparente Kommunikation — immer.",
  },
  {
    icon: Network,
    color: "#8b5cf6",
    titel: "Vernetzt",
    text: "Alle 11 Angebote greifen ineinander. Kein Kind fällt zwischen die Stühle.",
  },
  {
    icon: Brain,
    color: "#10b981",
    titel: "Spezialisiert",
    text: "Jedes Angebot ist auf eine spezifische Situation und Zielgruppe ausgelegt.",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">

      {/* ═══ HERO ═══ */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
        style={{ background: "linear-gradient(160deg, #070b14 0%, #0f172a 40%, #0d1f35 100%)" }}
      >
        {/* Animated Grid Pattern — MagicUI */}
        <AnimatedGridPattern
          numSquares={35}
          maxOpacity={0.08}
          duration={3}
          strokeColor="rgba(255,255,255,0.08)"
          className="z-0"
        />

        {/* Meteors — MagicUI */}
        <Meteors count={16} />

        {/* Glow blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(74,127,165,0.12) 0%, transparent 60%)" }} />
        <div className="absolute top-1/4 right-[15%] w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 left-[10%] w-[320px] h-[320px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />

        <div className="relative z-10 w-full" style={{ maxWidth: "760px", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
          <div className="fade-in-up inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-1.5 mb-10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
            <ShineText shimmerWidth={120} className="text-xs font-normal tracking-wide text-white/60">
              Krisenintervention 24/7 verfügbar
            </ShineText>
          </div>

          <h1 className="fade-in-up delay-1 text-[clamp(3.5rem,10vw,6.5rem)] font-black text-white leading-none mb-6"
            style={{ letterSpacing: "-0.035em" }}>
            Anker
            <span
              className="animate-gradient"
              style={{
                backgroundImage: "linear-gradient(90deg, #4A7FA5, #8b5cf6, #4A7FA5)",
                backgroundSize: "300% 300%",
              }}
            >netz</span>
          </h1>

          <div className="fade-in-up delay-2 text-center mb-12">
            <p className="text-[clamp(1.05rem,2.2vw,1.25rem)] text-white/70 font-light leading-relaxed mb-1">
              Stabilität in Krisen.
            </p>
            <p className="text-[clamp(1.05rem,2.2vw,1.25rem)] text-white/45 font-light leading-relaxed">
              Perspektiven für junge Menschen.
            </p>
          </div>

          <div className="fade-in-up delay-3 flex flex-col sm:flex-row items-center justify-center gap-3 mb-24">
            <a href="#angebote" className="btn btn-primary btn-lg group">
              Angebote entdecken
              <ArrowRight size={15} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link href="/platzanfrage" className="btn btn-outline-light btn-lg">
              Platzanfrage stellen
            </Link>
          </div>

        </div>

        {/* Bottom fade — weicher Übergang */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(7,11,20,0.6))" }} />

        {/* Scroll indicator */}
        <div className="scroll-pulse absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-8 bg-white/25" />
        </div>
      </section>

      {/* ═══ EINLEITUNG ═══ — HELL */}
      <section className="relative overflow-hidden bg-[#F5F5F7]" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)" }} />

        <div className="site-container">
          <BlurFade>
            <div className="text-center" style={{ maxWidth: "640px", margin: "0 auto" }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A7FA5] mb-5">
                Ein Netz. Elf Antworten.
              </p>
              <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-black text-[#1A1A2E] mb-8 leading-[1.1]"
                style={{ letterSpacing: "-0.03em" }}>
                Für jede Situation —<br />die richtige Hilfe.
              </h2>
              <p className="text-[1.0625rem] text-[#6E6E73] font-normal leading-[1.9]">
                Ankernetz ist ein Netzwerk aus spezialisierten Hilfsangeboten für Kinder und Jugendliche —
                von der akuten Krisenintervention über Psychotherapie und frühe Hilfen bis zum Übergang in den Beruf.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ═══ BENTO GRID — ANGEBOTE ═══ — DUNKEL */}
      <section id="angebote" className="bg-[#0f172a]" style={{ paddingTop: "4.5rem", paddingBottom: "5rem" }}>
        <div className="site-container">

          {/* Abschnitts-Header */}
          <BlurFade>
            <div className="text-center" style={{ marginBottom: "2.5rem" }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A7FA5] mb-4">
                Unsere Angebote
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-black text-white" style={{ letterSpacing: "-0.028em" }}>
                Spezialisiert. Vernetzt. Menschlich.
              </h2>
            </div>
          </BlurFade>

        </div>
        <div className="site-container" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

          {/* ── Reihe 1: Krisenintervention (Large) + Psychotherapie (Medium) ── */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "2rem" }}>

            {/* Krisenintervention — Large, col-span-2 */}
            <BlurFade className="md:col-span-2">
              <Link href="/krisenintervention"
                className={`bento-card spotlight-card ${angebote[0].glow} category-glow group relative rounded-3xl overflow-hidden flex flex-col`}
                style={{ background: angebote[0].bg, minHeight: "480px", padding: "2.5rem 3rem" }}>
                {/* Accent stripe */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: angebote[0].stripe }} />
                {/* Decorative SVG */}
                <div className="absolute top-0 right-0 w-72 h-72 opacity-[0.04] pointer-events-none"
                  style={{ transform: "translate(30%, -20%)" }}>
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    <polygon points="50,8 95,85 5,85" stroke="white" strokeWidth="3" fill="none" />
                    <polygon points="50,22 82,78 18,78" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" />
                    <circle cx="50" cy="60" r="4" fill="white" opacity="0.8" />
                    <line x1="50" y1="35" x2="50" y2="55" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <ShineBorder shineColor={["#ef4444", "#f97316", "#dc2626"]} duration={6} borderWidth={1} />
                {/* Badge */}
                <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
                  <span className={`text-xs font-medium ${angebote[0].badgeClass} px-3 py-1 rounded-full`}>{angebote[0].badge}</span>
                </div>
                {/* Content — top down */}
                <div className="relative z-10">
                  <AlertTriangle size={32} strokeWidth={1.5} className={`${angebote[0].iconClass} mb-3`} />
                  <h3 className="text-white font-black mb-3 leading-tight" style={{ fontSize: "1.875rem", letterSpacing: "-0.025em" }}>
                    {angebote[0].titel}
                  </h3>
                  <p className="text-white/55 text-sm italic mb-4">{angebote[0].claim}</p>
                  <p className="text-white/60 text-sm font-normal mb-8 max-w-md" style={{ lineHeight: "2.2" }}>{angebote[0].kurz}</p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                    Mehr erfahren <ArrowRight size={14} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </BlurFade>

            {/* Psychotherapie — Medium */}
            <BlurFade delay={0.1}>
              <Link href="/psychotherapie"
                className={`bento-card spotlight-card ${angebote[1].glow} category-glow group relative rounded-3xl overflow-hidden flex flex-col`}
                style={{ background: angebote[1].bg, minHeight: "480px", padding: "2.5rem 3rem" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: angebote[1].stripe }} />
                {/* Decorative: sine wave */}
                <div className="absolute bottom-0 left-0 right-0 opacity-[0.04] pointer-events-none px-6" style={{ paddingBottom: "2rem" }}>
                  <svg viewBox="0 0 300 80" fill="none" className="w-full">
                    <path d="M0 40 Q37.5 10 75 40 Q112.5 70 150 40 Q187.5 10 225 40 Q262.5 70 300 40"
                      stroke="white" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
                  <span className={`text-xs font-medium ${angebote[1].badgeClass} px-3 py-1 rounded-full`}>{angebote[1].badge}</span>
                </div>
                <div className="relative z-10">
                  <Brain size={26} strokeWidth={1.5} className={`${angebote[1].iconClass} mb-3`} />
                  <h3 className="text-white font-black mb-2 leading-tight" style={{ fontSize: "1.375rem" }}>{angebote[1].titel}</h3>
                  <p className="text-white/50 text-sm italic mb-3">{angebote[1].claim}</p>
                  <p className="text-white/60 text-sm font-normal mb-6" style={{ lineHeight: "2.2" }}>{angebote[1].kurz}</p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                    Mehr erfahren <ArrowRight size={14} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </BlurFade>
          </div>

          {/* ── Reihe 2: 3 Medium ── */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "2rem" }}>
            {[angebote[2], angebote[3], angebote[4]].map((a, i) => {
              const Icon = a.icon;
              return (
                <BlurFade key={a.slug} delay={i * 0.08}>
                  <Link href={`/${a.slug}`}
                    className={`bento-card ${a.glow} category-glow group relative rounded-3xl overflow-hidden flex flex-col`}
                    style={{ background: a.bg, minHeight: "420px", padding: "2.5rem 3rem" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: a.stripe }} />
                    <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
                      <span className={`text-xs font-medium ${a.badgeClass} px-3 py-1 rounded-full`}>{a.badge}</span>
                    </div>
                    <div className="relative z-10">
                      <Icon size={26} strokeWidth={1.5} className={`${a.iconClass} mb-3`} />
                      <h3 className="text-white font-black mb-2 leading-tight" style={{ fontSize: "1.375rem" }}>{a.titel}</h3>
                      <p className="text-white/55 text-sm italic mb-4">{a.claim}</p>
                      <p className="text-white/60 text-sm font-normal mb-6" style={{ lineHeight: "2.2" }}>{a.kurz}</p>
                      <span className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                        Mehr erfahren <ArrowRight size={13} strokeWidth={1.5} />
                      </span>
                    </div>
                  </Link>
                </BlurFade>
              );
            })}
          </div>

          {/* ── Reihe 3: 4 Compact ── */}
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "2rem" }}>
            {[angebote[5], angebote[6], angebote[7], angebote[8]].map((a, i) => {
              const Icon = a.icon;
              return (
                <BlurFade key={a.slug} delay={i * 0.06}>
                  <Link href={`/${a.slug}`}
                    className={`bento-card ${a.glow} category-glow group relative rounded-3xl overflow-hidden flex flex-col`}
                    style={{ background: a.bg, minHeight: "280px", padding: "2.5rem 3rem" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: a.stripe }} />
                    <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
                      <span className={`text-[10px] font-medium ${a.badgeClass} px-2 py-0.5 rounded-full`}>{a.badge}</span>
                    </div>
                    <div className="relative z-10">
                      <Icon size={22} strokeWidth={1.5} className={`${a.iconClass} mb-3`} />
                      <h3 className="text-white font-black mb-2 leading-tight" style={{ fontSize: "1.125rem" }}>{a.titel}</h3>
                      <p className="text-white/55 text-xs italic mb-5">{a.claim}</p>
                      <span className="inline-flex items-center gap-2 text-white text-xs font-semibold group-hover:gap-3 transition-all">
                        Mehr <ArrowRight size={12} strokeWidth={1.5} />
                      </span>
                    </div>
                  </Link>
                </BlurFade>
              );
            })}
          </div>

          {/* ── Reihe 4: Ankerkleidung (Large) + Versorgung (Medium) ── */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "2rem" }}>

            {/* Ankerkleidung — Large, col-span-2 */}
            <BlurFade delay={0.08} className="md:col-span-2">
              <Link href="/ankerkleidung"
                className={`bento-card ${angebote[9].glow} category-glow group relative rounded-3xl overflow-hidden flex flex-col`}
                style={{ background: angebote[9].bg, minHeight: "280px", padding: "2.5rem 3rem" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: angebote[9].stripe }} />
                {/* Decorative T-Shirt */}
                <div className="absolute inset-0 opacity-[0.03] flex items-center justify-end pr-8 pointer-events-none select-none">
                  <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
                    <path d="M60 40 L20 70 L40 80 L40 160 L180 160 L180 80 L200 70 L160 40 L140 55 Q110 68 80 55 Z" fill="white" />
                    <path d="M80 55 Q110 75 140 55" stroke="white" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                {/* Floating tags */}
                <div className="absolute top-8 right-8 hidden md:flex flex-col gap-2 pointer-events-none">
                  {["ADHS", "Trauma", "Autismus", "Bindung", "Angst"].map((t) => (
                    <span key={t} className="text-[11px] text-white/40 border border-white/15 px-2.5 py-1 rounded-full text-center">{t}</span>
                  ))}
                </div>
                <div style={{ position: "absolute", top: "1.5rem", right: "10rem" }}>
                  <span className={`text-xs font-medium ${angebote[9].badgeClass} px-3 py-1 rounded-full`}>{angebote[9].badge}</span>
                </div>
                <div className="relative z-10">
                  <Shirt size={26} strokeWidth={1.5} className={`${angebote[9].iconClass} mb-3`} />
                  <h3 className="text-white font-black mb-2 leading-tight" style={{ fontSize: "1.875rem", letterSpacing: "-0.025em" }}>{angebote[9].titel}</h3>
                  <p className="text-white/45 text-sm italic mb-3">{angebote[9].claim}</p>
                  <p className="text-white/50 text-sm font-normal mb-5 max-w-sm" style={{ lineHeight: "2.2" }}>{angebote[9].kurz}</p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                    Kollektion entdecken <ArrowRight size={14} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </BlurFade>

            {/* Versorgung — Medium */}
            <BlurFade delay={0.15}>
              <Link href="/versorgung"
                className={`bento-card ${angebote[10].glow} category-glow group relative rounded-3xl overflow-hidden flex flex-col`}
                style={{ background: angebote[10].bg, minHeight: "280px", padding: "2.5rem 3rem" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: angebote[10].stripe }} />
                <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
                  <span className={`text-xs font-medium ${angebote[10].badgeClass} px-2.5 py-1 rounded-full`}>{angebote[10].badge}</span>
                </div>
                <div className="relative z-10">
                  <Star size={26} strokeWidth={1.5} className={`${angebote[10].iconClass} mb-3`} />
                  <h3 className="text-white font-black mb-2 leading-tight" style={{ fontSize: "1.375rem", letterSpacing: "-0.02em" }}>{angebote[10].titel}</h3>
                  <p className="text-white/50 text-sm italic mb-3">{angebote[10].claim}</p>
                  <p className="text-white/60 text-sm font-normal mb-5" style={{ lineHeight: "2.2" }}>{angebote[10].kurz}</p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                    Mehr erfahren <ArrowRight size={13} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </BlurFade>
          </div>

        </div>
      </section>

      {/* ═══ STÄRKEN ═══ — HELL */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(74,127,165,0.06) 0%, transparent 70%)" }} />

        <div className="site-container">
          <BlurFade>
            <div className="text-center mb-20">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A7FA5] mb-4">Was uns auszeichnet</p>
              <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-black text-[#1A1A2E]" style={{ letterSpacing: "-0.028em" }}>
                Stärke durch Verbindung.
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {staerken.map((s, i) => {
              const Icon = s.icon;
              return (
                <BlurFade key={s.titel} delay={i * 0.1}>
                  <div className="p-12 rounded-3xl bg-[#F5F5F7] hover:bg-[#EBEBED] transition-colors h-full">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
                      style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}>
                      <Icon size={24} strokeWidth={1.5} style={{ color: s.color }} />
                    </div>
                    <h3 className="text-xl font-black text-[#1A1A2E] mb-5" style={{ letterSpacing: "-0.02em" }}>{s.titel}</h3>
                    <p className="text-[#6E6E73] font-normal leading-[2] text-[0.9375rem]">{s.text}</p>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ FÜR FACHKRÄFTE ═══ */}
      <section className="py-40 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #070b14 0%, #0d1f35 100%)" }}>

        {/* Glow blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(74,127,165,0.1) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%)" }} />

        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Text — 6 Spalten */}
            <div className="lg:col-span-6">
              <BlurFade>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A7FA5] mb-6">Für Jugendämter & Fachkräfte</p>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-black mb-10 leading-[1.15]" style={{ letterSpacing: "-0.03em" }}>
                  Klare Prozesse.<br />Schnelle Reaktion.<br />Verlässliche Partner.
                </h2>
                <p className="text-white/55 text-[1.0625rem] font-normal leading-[2] mb-14 max-w-lg">
                  Ankernetz arbeitet eng mit Jugendämtern und Fachkräften zusammen.
                  Schnelle Rückmeldungen, transparente Einschätzungen und passgenaue
                  Hilfeformen — direkt und unkompliziert.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/platzanfrage" className="btn btn-primary btn-lg group">
                    Platzanfrage stellen
                    <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link href="/kontakt" className="btn btn-outline-light btn-lg">
                    Kontakt aufnehmen
                  </Link>
                </div>
              </BlurFade>
            </div>

            {/* Stat-Grid — 5 Spalten, offset 1 */}
            <div className="lg:col-span-5 lg:col-start-8">
              <BlurFade delay={0.12}>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { zahl: "< 24h", label: "Rückmeldung auf Anfragen", color: "#4A7FA5" },
                    { zahl: "24/7",  label: "Krisenbereitschaft",       color: "#ef4444" },
                    { zahl: "11",    label: "Spezialisierte Angebote",  color: "#8b5cf6" },
                    { zahl: "100%",  label: "Fachlich qualifiziert",    color: "#10b981" },
                  ].map((stat) => (
                    <div key={stat.zahl}
                      className="rounded-2xl p-8 text-center"
                      style={{ background: `${stat.color}12`, border: `1px solid ${stat.color}30` }}>
                      <p className="text-[2.5rem] font-black text-white mb-4" style={{ letterSpacing: "-0.03em" }}>{stat.zahl}</p>
                      <p className="text-white/55 text-xs font-normal leading-relaxed">{stat.label}</p>
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
