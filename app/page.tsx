import Link from "next/link";
import {
  AlertTriangle, Home, Brain, Baby, Search, Shirt,
  MessageCircle, Briefcase, School, Heart, ArrowRight,
  Shield, Network, Star
} from "lucide-react";
import ScrollReveal from "./components/ScrollReveal";
import { AnimatedGridPattern } from "./components/AnimatedGridPattern";
import { ShineText } from "./components/ShineText";
import { ShineBorder } from "./components/ShineBorder";

const angebote = [
  {
    slug: "krisenintervention",
    titel: "Krisenintervention",
    claim: "Sofort da. Wenn es zählt.",
    kurz: "24/7 Sofortaufnahme für Jugendliche in akuter Not — rund um die Uhr, an 365 Tagen.",
    icon: AlertTriangle,
    glow: "glow-red",
    bg: "linear-gradient(145deg, #150608 0%, #2d0a0f 50%, #1a0305 100%)",
    badge: "24/7",
    badgeClass: "bg-red-500/20 text-red-300 border border-red-400/30",
    iconClass: "text-red-400",
  },
  {
    slug: "psychotherapie",
    titel: "Kinder- & Jugend­psychotherapie",
    claim: "Professionelle Therapie. Mit Kassensitz.",
    kurz: "Eingebunden in alle Hilfeprozesse — direkt dort, wo Kinder und Jugendliche leben.",
    icon: Brain,
    glow: "glow-violet",
    bg: "linear-gradient(145deg, #120d1f 0%, #1e1035 100%)",
    badge: "Kassensitz",
    badgeClass: "bg-purple-500/20 text-purple-300 border border-purple-400/30",
    iconClass: "text-purple-400",
  },
  {
    slug: "fruehe-hilfen",
    titel: "Frühe Hilfen",
    claim: "Schutz von Anfang an.",
    kurz: "Bindung, Sicherheit und Entwicklung für die Kleinsten.",
    icon: Baby,
    glow: "glow-green",
    bg: "linear-gradient(145deg, #031a10 0%, #052e1a 100%)",
    badge: "0–6 Jahre",
    badgeClass: "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30",
    iconClass: "text-emerald-400",
  },
  {
    slug: "therapie-wohnen",
    titel: "Therapie & Wohnen",
    claim: "Raum zum Ankommen.",
    kurz: "Therapeutische Wohngruppen mit intensiver Begleitung und Traumaarbeit.",
    icon: Home,
    glow: "glow-blue",
    bg: "linear-gradient(145deg, #070f1a 0%, #0d1f35 100%)",
    badge: "12–17 Jahre",
    badgeClass: "bg-blue-500/20 text-blue-300 border border-blue-400/30",
    iconClass: "text-blue-400",
  },
  {
    slug: "jugendhilfe",
    titel: "Jugendhilfe",
    claim: "Sicherheit im Alltag.",
    kurz: "Kinderwohngruppen mit verlässlicher Struktur und Beziehungsarbeit.",
    icon: Heart,
    glow: "glow-amber",
    bg: "linear-gradient(145deg, #1a0e02 0%, #2d1a05 100%)",
    badge: "6–12 Jahre",
    badgeClass: "bg-amber-500/20 text-amber-300 border border-amber-400/30",
    iconClass: "text-amber-400",
  },
  {
    slug: "diagnostik-clearing",
    titel: "Diagnostik & Clearing",
    claim: "Klarheit schafft die richtige Hilfe.",
    kurz: "Psychologische Diagnostik und handlungsorientierte Berichte für Jugendämter.",
    icon: Search,
    glow: "glow-cyan",
    bg: "linear-gradient(145deg, #021420 0%, #052535 100%)",
    badge: "Gutachten",
    badgeClass: "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30",
    iconClass: "text-cyan-400",
  },
  {
    slug: "beratung-praevention",
    titel: "Beratung & Prävention",
    claim: "Früh helfen. Gemeinsam stärken.",
    kurz: "Niedrigschwellig, online und vor Ort — als erster Schritt ins System.",
    icon: MessageCircle,
    glow: "glow-lime",
    bg: "linear-gradient(145deg, #081208 0%, #0f2010 100%)",
    badge: "Online & vor Ort",
    badgeClass: "bg-lime-500/20 text-lime-300 border border-lime-400/30",
    iconClass: "text-lime-400",
  },
  {
    slug: "kita-beratung",
    titel: "Beratung in Kitas",
    claim: "Früh erkennen.",
    kurz: "Therapeutisch fundierte Beratung für Kita-Fachkräfte.",
    icon: School,
    glow: "glow-orange",
    bg: "linear-gradient(145deg, #180a02 0%, #2a1205 100%)",
    badge: "Fachkräfte",
    badgeClass: "bg-orange-500/20 text-orange-300 border border-orange-400/30",
    iconClass: "text-orange-400",
  },
  {
    slug: "uebergang-arbeit",
    titel: "Übergang Arbeit",
    claim: "Der nächste Schritt.",
    kurz: "Berufsorientierung und Begleitung vom Hilfesystem in ein eigenständiges Leben.",
    icon: Briefcase,
    glow: "glow-pink",
    bg: "linear-gradient(145deg, #18082a 0%, #2a1048 100%)",
    badge: "Übergang",
    badgeClass: "bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-400/30",
    iconClass: "text-fuchsia-400",
  },
  {
    slug: "ankerkleidung",
    titel: "Ankerkleidung",
    claim: "Stabilität. Selbstwert. Alltag.",
    kurz: "Spezialisierte Kleidung nach Störungsbild — Teil des Hilfesystems.",
    icon: Shirt,
    glow: "glow-slate",
    bg: "linear-gradient(145deg, #0c1018 0%, #141c28 100%)",
    badge: "Shop",
    badgeClass: "bg-slate-500/20 text-slate-300 border border-slate-400/30",
    iconClass: "text-slate-400",
  },
  {
    slug: "versorgung",
    titel: "Versorgung",
    claim: "Würde im Alltag.",
    kurz: "Bedarfsorientierte Ausstattung für Kinder und Jugendliche im Hilfesystem.",
    icon: Star,
    glow: "glow-amber",
    bg: "linear-gradient(145deg, #161208 0%, #221c0e 100%)",
    badge: "Ausstattung",
    badgeClass: "bg-amber-500/20 text-amber-300 border border-amber-400/30",
    iconClass: "text-amber-400",
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

          <p className="fade-in-up delay-2 text-[clamp(1rem,2.2vw,1.25rem)] text-white/55 font-light max-w-lg mx-auto mb-2 leading-relaxed">
            Stabilität in Krisen.
          </p>
          <p className="fade-in-up delay-2 text-[clamp(1rem,2.2vw,1.25rem)] text-white/30 font-light max-w-lg mx-auto mb-16 leading-relaxed">
            Perspektiven für junge Menschen.
          </p>

          <div className="fade-in-up delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#angebote"
              className="group flex items-center gap-2 px-8 py-3.5 bg-white text-[#0f172a] font-bold rounded-full text-sm hover:bg-white/95 transition-all shadow-lg shadow-black/20">
              Angebote entdecken
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link href="/platzanfrage"
              className="flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white/80 font-normal rounded-full text-sm hover:bg-white/8 hover:text-white transition-all backdrop-blur-sm">
              Platzanfrage stellen
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-pulse absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-10 bg-white/30" />
        </div>
      </section>

      {/* ═══ EINLEITUNG ═══ */}
      <section className="py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0d1f35 0%, #0f172a 40%, #111827 100%)" }}>
        {/* Continuity glow from hero */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(74,127,165,0.1) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)" }} />

        <div className="site-container">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A7FA5] mb-5">
              Ein Netz. Elf Antworten.
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-black text-white mb-6 leading-[1.1]"
              style={{ letterSpacing: "-0.03em" }}>
              Für jede Situation<br />die richtige Hilfe.
            </h2>
            <p className="text-base text-white/45 font-normal leading-[1.9] max-w-xl mx-auto">
              Ankernetz ist ein Netzwerk aus spezialisierten Hilfsangeboten für Kinder und Jugendliche —
              von der akuten Krisenintervention über Psychotherapie und frühe Hilfen bis zum Übergang in den Beruf.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ BENTO GRID — ANGEBOTE ═══ */}
      <section id="angebote" className="pb-32"
        style={{ background: "linear-gradient(180deg, #111827 0%, #0f172a 100%)" }}>
        <div className="site-container space-y-4">

          {/* Reihe 1: Krisenintervention groß + Psychotherapie */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ScrollReveal className="md:col-span-2">
              <Link href="/krisenintervention"
                className={`bento-card spotlight-card ${angebote[0].glow} category-glow group relative rounded-3xl overflow-hidden min-h-[420px] flex flex-col justify-end p-8 block`}
                style={{ background: angebote[0].bg }}>
                {/* Decorative: large faded icon + ring */}
                <div className="absolute top-0 right-0 w-72 h-72 opacity-[0.04] pointer-events-none"
                  style={{ transform: "translate(30%, -20%)" }}>
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    <polygon points="50,8 95,85 5,85" stroke="white" strokeWidth="3" fill="none" />
                    <polygon points="50,22 82,78 18,78" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" />
                    <circle cx="50" cy="60" r="4" fill="white" opacity="0.8" />
                    <line x1="50" y1="35" x2="50" y2="55" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                {/* MagicUI ShineBorder */}
                <ShineBorder shineColor={["#ef4444", "#f97316", "#dc2626"]} duration={6} borderWidth={1} />
                {/* Pulse rings */}
                <div className="absolute top-8 left-8 w-16 h-16 rounded-full border border-red-500/15 pointer-events-none" />
                <div className="absolute top-6 left-6 w-20 h-20 rounded-full border border-red-500/8 pointer-events-none" />

                <div className="absolute top-6 right-6">
                  <span className={`text-xs font-medium ${angebote[0].badgeClass} px-3 py-1 rounded-full`}>
                    {angebote[0].badge}
                  </span>
                </div>
                <div className="relative z-10">
                  <AlertTriangle size={30} className={`${angebote[0].iconClass} mb-5`} />
                  <h3 className="text-white text-[2rem] font-black mb-2 leading-tight" style={{ letterSpacing: "-0.025em" }}>
                    {angebote[0].titel}
                  </h3>
                  <p className="text-white/40 text-sm italic mb-3">{angebote[0].claim}</p>
                  <p className="text-white/50 text-sm font-normal leading-relaxed mb-6 max-w-md">{angebote[0].kurz}</p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                    Mehr erfahren <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Link href="/psychotherapie"
                className={`bento-card spotlight-card ${angebote[1].glow} category-glow group relative rounded-3xl overflow-hidden min-h-[420px] flex flex-col justify-end p-7 block`}
                style={{ background: angebote[1].bg }}>
                {/* Decorative: sine wave */}
                <div className="absolute top-8 left-0 right-0 opacity-[0.06] pointer-events-none px-6">
                  <svg viewBox="0 0 300 80" fill="none" className="w-full">
                    <path d="M0 40 Q37.5 10 75 40 Q112.5 70 150 40 Q187.5 10 225 40 Q262.5 70 300 40"
                      stroke="white" strokeWidth="2" fill="none" />
                    <path d="M0 40 Q37.5 15 75 40 Q112.5 65 150 40 Q187.5 15 225 40 Q262.5 65 300 40"
                      stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
                  </svg>
                </div>
                <div className="absolute top-6 right-6">
                  <span className={`text-xs font-medium ${angebote[1].badgeClass} px-3 py-1 rounded-full`}>
                    {angebote[1].badge}
                  </span>
                </div>
                <div className="relative z-10">
                  <Brain size={26} className={`${angebote[1].iconClass} mb-4`} />
                  <h3 className="text-white text-xl font-black mb-1 leading-tight">{angebote[1].titel}</h3>
                  <p className="text-white/40 text-xs italic mb-2">{angebote[1].claim}</p>
                  <p className="text-white/50 text-sm font-normal leading-relaxed mb-5">{angebote[1].kurz}</p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                    Mehr erfahren <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>

          {/* Reihe 2: 3 gleichgroß */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[angebote[2], angebote[3], angebote[4]].map((a, i) => {
              const Icon = a.icon;
              return (
                <ScrollReveal key={a.slug} delay={i * 80}>
                  <Link href={`/${a.slug}`}
                    className={`bento-card ${a.glow} category-glow group relative rounded-3xl overflow-hidden min-h-[300px] flex flex-col justify-end p-7 block`}
                    style={{ background: a.bg }}>
                    <div className="absolute top-5 right-5">
                      <span className={`text-xs font-medium ${a.badgeClass} px-2.5 py-1 rounded-full`}>
                        {a.badge}
                      </span>
                    </div>
                    <div className="relative z-10">
                      <Icon size={22} className={`${a.iconClass} mb-3`} />
                      <h3 className="text-white text-lg font-black mb-1 leading-tight">{a.titel}</h3>
                      <p className="text-white/40 text-xs italic mb-2">{a.claim}</p>
                      <p className="text-white/50 text-sm font-normal leading-relaxed mb-4">{a.kurz}</p>
                      <span className="inline-flex items-center gap-2 text-white text-xs font-semibold group-hover:gap-3 transition-all">
                        Mehr <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Reihe 3: 4 kompakt */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[angebote[5], angebote[6], angebote[7], angebote[8]].map((a, i) => {
              const Icon = a.icon;
              return (
                <ScrollReveal key={a.slug} delay={i * 60}>
                  <Link href={`/${a.slug}`}
                    className={`bento-card ${a.glow} category-glow group relative rounded-3xl overflow-hidden min-h-[220px] flex flex-col justify-end p-6 block`}
                    style={{ background: a.bg }}>
                    <div className="relative z-10">
                      <Icon size={18} className={`${a.iconClass} mb-3`} />
                      <h3 className="text-white text-base font-black mb-1 leading-tight">{a.titel}</h3>
                      <p className="text-white/40 text-xs italic mb-3">{a.claim}</p>
                      <span className="inline-flex items-center gap-1.5 text-white text-xs font-semibold group-hover:gap-2.5 transition-all">
                        Mehr <ArrowRight size={11} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Reihe 4: Ankerkleidung + Versorgung */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ScrollReveal delay={80} className="md:col-span-2">
              <Link href="/ankerkleidung"
                className={`bento-card ${angebote[9].glow} category-glow group relative rounded-3xl overflow-hidden min-h-[240px] flex items-center p-8 block`}
                style={{ background: angebote[9].bg }}>

                {/* Visual: abstract clothing silhouettes */}
                <div className="absolute inset-0 opacity-[0.06] flex items-center justify-end pr-8 pointer-events-none select-none">
                  <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
                    {/* T-Shirt silhouette */}
                    <path d="M60 40 L20 70 L40 80 L40 160 L180 160 L180 80 L200 70 L160 40 L140 55 Q110 68 80 55 Z"
                      fill="white" />
                    {/* Collar */}
                    <path d="M80 55 Q110 75 140 55" stroke="white" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                {/* Floating tags */}
                <div className="absolute top-5 right-5 bottom-5 hidden md:flex flex-col justify-center gap-2 pointer-events-none">
                  {["ADHS", "Trauma", "Autismus", "Bindung", "Angst"].map((t) => (
                    <span key={t} className="text-[11px] text-white/30 border border-white/10 px-2.5 py-1 rounded-full text-center">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="relative z-10 flex-1 pr-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Shirt size={24} className={angebote[9].iconClass} />
                    <span className={`text-xs font-medium ${angebote[9].badgeClass} px-3 py-1 rounded-full`}>Shop</span>
                  </div>
                  <h3 className="text-white text-2xl font-black mb-2" style={{ letterSpacing: "-0.02em" }}>Ankerkleidung</h3>
                  <p className="text-white/40 text-sm italic mb-3">Stabilität. Selbstwert. Alltag.</p>
                  <p className="text-white/50 text-sm font-normal leading-relaxed mb-5 max-w-sm">{angebote[9].kurz}</p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                    Kollektion entdecken <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Link href="/versorgung"
                className={`bento-card ${angebote[10].glow} category-glow group relative rounded-3xl overflow-hidden min-h-[240px] flex flex-col justify-end p-7 block`}
                style={{ background: angebote[10].bg }}>
                <div className="relative z-10">
                  <Star size={20} className={`${angebote[10].iconClass} mb-3`} />
                  <h3 className="text-white text-lg font-black mb-1" style={{ letterSpacing: "-0.02em" }}>Versorgung</h3>
                  <p className="text-white/40 text-xs italic mb-2">Würde im Alltag.</p>
                  <p className="text-white/50 text-sm font-normal leading-relaxed mb-4">{angebote[10].kurz}</p>
                  <span className="inline-flex items-center gap-2 text-white text-xs font-semibold group-hover:gap-3 transition-all">
                    Mehr <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ═══ STÄRKEN ═══ */}
      <section className="py-32 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0f172a 0%, #0c1420 100%)" }}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(74,127,165,0.08) 0%, transparent 70%)" }} />

        <div className="site-container">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A7FA5] mb-4">Was uns auszeichnet</p>
              <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-black text-white" style={{ letterSpacing: "-0.028em" }}>
                Stärke durch Verbindung.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {staerken.map((s, i) => {
              const Icon = s.icon;
              return (
                <ScrollReveal key={s.titel} delay={i * 100}>
                  <div className="p-8 rounded-3xl transition-colors"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-6"
                      style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
                      <Icon size={20} style={{ color: s.color }} />
                    </div>
                    <h3 className="text-xl font-black text-white mb-3" style={{ letterSpacing: "-0.02em" }}>{s.titel}</h3>
                    <p className="text-white/40 font-normal leading-[1.8] text-[0.9375rem]">{s.text}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ FÜR FACHKRÄFTE ═══ */}
      <section className="py-32 text-white relative overflow-hidden"
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
              <ScrollReveal>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A7FA5] mb-5">Für Jugendämter & Fachkräfte</p>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-black mb-6 leading-[1.1]" style={{ letterSpacing: "-0.03em" }}>
                  Klare Prozesse.<br />Schnelle Reaktion.<br />Verlässliche Partner.
                </h2>
                <p className="text-white/45 text-[1.0625rem] font-normal leading-[1.85] mb-10 max-w-lg">
                  Ankernetz arbeitet eng mit Jugendämtern und Fachkräften zusammen.
                  Schnelle Rückmeldungen, transparente Einschätzungen und passgenaue
                  Hilfeformen — direkt und unkompliziert.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/platzanfrage"
                    className="group flex items-center gap-2 px-8 py-3.5 bg-white text-[#0f172a] font-bold rounded-full text-sm hover:bg-white/95 transition-all">
                    Platzanfrage stellen
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/kontakt"
                    className="flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white/80 font-normal rounded-full text-sm hover:bg-white/8 hover:text-white transition-all">
                    Kontakt aufnehmen
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Stat-Grid — 5 Spalten, offset 1 */}
            <div className="lg:col-span-5 lg:col-start-8">
              <ScrollReveal delay={120}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { zahl: "< 24h", label: "Rückmeldung auf Anfragen", color: "#4A7FA5" },
                    { zahl: "24/7",  label: "Krisenbereitschaft",       color: "#ef4444" },
                    { zahl: "11",    label: "Spezialisierte Angebote",  color: "#8b5cf6" },
                    { zahl: "100%",  label: "Fachlich qualifiziert",    color: "#10b981" },
                  ].map((stat) => (
                    <div key={stat.zahl}
                      className="rounded-2xl p-6 text-center"
                      style={{ background: `${stat.color}0c`, border: `1px solid ${stat.color}22` }}>
                      <p className="text-[2.25rem] font-black text-white mb-2" style={{ letterSpacing: "-0.03em" }}>{stat.zahl}</p>
                      <p className="text-white/40 text-xs font-normal leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
