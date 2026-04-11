import Link from "next/link";
import {
  AlertTriangle, Home, Brain, Baby, Search, Shirt,
  MessageCircle, Briefcase, School, Heart, ArrowRight,
  Shield, Network, Star
} from "lucide-react";
import ScrollReveal from "./components/ScrollReveal";

const angebote = [
  {
    slug: "krisenintervention",
    titel: "Krisenintervention",
    claim: "Sofort da. Wenn es zählt.",
    kurz: "24/7 Sofortaufnahme für Jugendliche in akuter Not — rund um die Uhr, an 365 Tagen.",
    icon: AlertTriangle,
    iconColor: "#ef4444",
    bg: "linear-gradient(145deg, #0f172a 0%, #1e3a5f 100%)",
    badge: "24/7",
    badgeColor: "#ef4444",
    span: "lg:col-span-2 lg:row-span-2",
    gross: true,
  },
  {
    slug: "psychotherapie",
    titel: "Kinder- & Jugend­psychotherapie",
    claim: "Professionelle Therapie. Mit Kassensitz.",
    kurz: "Eingebunden in alle Hilfeprozesse — direkt dort, wo Kinder und Jugendliche leben.",
    icon: Brain,
    iconColor: "#8b5cf6",
    bg: "linear-gradient(145deg, #1a2f4a 0%, #2d3748 100%)",
    badge: "Kassensitz",
    badgeColor: "#8b5cf6",
    span: "",
    gross: false,
  },
  {
    slug: "fruehe-hilfen",
    titel: "Frühe Hilfen",
    claim: "Schutz von Anfang an.",
    kurz: "Bindung, Sicherheit und Entwicklung für die Kleinsten.",
    icon: Baby,
    iconColor: "#10b981",
    bg: "linear-gradient(145deg, #064e3b 0%, #065f46 100%)",
    badge: "0–6 Jahre",
    badgeColor: "#10b981",
    span: "",
    gross: false,
  },
  {
    slug: "therapie-wohnen",
    titel: "Therapie & Wohnen",
    claim: "Raum zum Ankommen.",
    kurz: "Therapeutische Wohngruppen mit intensiver Begleitung und Traumaarbeit.",
    icon: Home,
    iconColor: "#4A7FA5",
    bg: "linear-gradient(145deg, #1e3a5f 0%, #2d4a6e 100%)",
    badge: "12–17 Jahre",
    badgeColor: "#4A7FA5",
    span: "",
    gross: false,
  },
  {
    slug: "jugendhilfe",
    titel: "Jugendhilfe",
    claim: "Sicherheit im Alltag.",
    kurz: "Kinderwohngruppen mit verlässlicher Struktur und Beziehungsarbeit.",
    icon: Heart,
    iconColor: "#f59e0b",
    bg: "linear-gradient(145deg, #451a03 0%, #78350f 100%)",
    badge: "6–12 Jahre",
    badgeColor: "#f59e0b",
    span: "",
    gross: false,
  },
  {
    slug: "diagnostik-clearing",
    titel: "Diagnostik & Clearing",
    claim: "Klarheit schafft die richtige Hilfe.",
    kurz: "Psychologische Diagnostik und handlungsorientierte Berichte für Jugendämter.",
    icon: Search,
    iconColor: "#06b6d4",
    bg: "linear-gradient(145deg, #0c4a6e 0%, #075985 100%)",
    badge: "Gutachten",
    badgeColor: "#06b6d4",
    span: "",
    gross: false,
  },
  {
    slug: "beratung-praevention",
    titel: "Beratung & Prävention",
    claim: "Früh helfen. Gemeinsam stärken.",
    kurz: "Niedrigschwellig, online und vor Ort — als erster Schritt ins System.",
    icon: MessageCircle,
    iconColor: "#a3e635",
    bg: "linear-gradient(145deg, #1a2e1a 0%, #14532d 100%)",
    badge: "Online & vor Ort",
    badgeColor: "#a3e635",
    span: "",
    gross: false,
  },
  {
    slug: "kita-beratung",
    titel: "Beratung in Kitas",
    claim: "Früh erkennen.",
    kurz: "Therapeutisch fundierte Beratung für Kita-Fachkräfte.",
    icon: School,
    iconColor: "#fb923c",
    bg: "linear-gradient(145deg, #431407 0%, #7c2d12 100%)",
    badge: "Fachkräfte",
    badgeColor: "#fb923c",
    span: "",
    gross: false,
  },
  {
    slug: "uebergang-arbeit",
    titel: "Übergang Arbeit",
    claim: "Der nächste Schritt.",
    kurz: "Berufsorientierung und Begleitung vom Hilfesystem in ein eigenständiges Leben.",
    icon: Briefcase,
    iconColor: "#e879f9",
    bg: "linear-gradient(145deg, #2e1065 0%, #4c1d95 100%)",
    badge: "Übergang",
    badgeColor: "#e879f9",
    span: "",
    gross: false,
  },
  {
    slug: "ankerkleidung",
    titel: "Ankerkleidung",
    claim: "Stabilität. Selbstwert. Alltag.",
    kurz: "Spezialisierte Kleidung nach Störungsbild — Teil des Hilfesystems.",
    icon: Shirt,
    iconColor: "#94a3b8",
    bg: "linear-gradient(145deg, #1a2e45 0%, #2c3e50 100%)",
    badge: "Shop",
    badgeColor: "#94a3b8",
    span: "",
    gross: false,
  },
  {
    slug: "versorgung",
    titel: "Versorgung",
    claim: "Würde im Alltag.",
    kurz: "Bedarfsorientierte Ausstattung für Kinder und Jugendliche im Hilfesystem.",
    icon: Star,
    iconColor: "#fbbf24",
    bg: "linear-gradient(145deg, #1c1917 0%, #292524 100%)",
    badge: "Ausstattung",
    badgeColor: "#fbbf24",
    span: "",
    gross: false,
  },
];

const staerken = [
  {
    icon: Shield,
    titel: "Verlässlich",
    text: "Feste Ansprechpartner, klare Prozesse, transparente Kommunikation — immer.",
  },
  {
    icon: Network,
    titel: "Vernetzt",
    text: "Alle 11 Angebote greifen ineinander. Kein Kind fällt zwischen die Stühle.",
  },
  {
    icon: Brain,
    titel: "Spezialisiert",
    text: "Jedes Angebot ist auf eine spezifische Situation und Zielgruppe ausgelegt.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0f172a 0%, #1A1A2E 50%, #1e3a5f 100%)" }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #4A7FA5 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="fade-in-up inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            <span className="text-white/70 text-xs font-medium">Krisenintervention 24/7 verfügbar</span>
          </div>

          <h1 className="fade-in-up delay-1 text-6xl md:text-8xl font-black text-white leading-none mb-6"
            style={{ letterSpacing: "-0.03em" }}>
            Anker<span className="text-[#4A7FA5]">netz</span>
          </h1>

          <p className="fade-in-up delay-2 text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto mb-4 leading-relaxed">
            Stabilität in Krisen.
          </p>
          <p className="fade-in-up delay-2 text-xl md:text-2xl text-white/40 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Perspektiven für junge Menschen.
          </p>

          <div className="fade-in-up delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#angebote"
              className="group flex items-center gap-2 px-8 py-4 bg-white text-[#1A1A2E] font-bold rounded-full text-sm hover:bg-white/95 transition-all">
              Angebote entdecken
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link href="/platzanfrage"
              className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full text-sm hover:bg-white/10 transition-colors backdrop-blur-sm">
              Platzanfrage stellen
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30">
          <div className="w-px h-12 bg-white/60" style={{ animation: "pulse 2s infinite" }} />
        </div>
      </section>

      {/* ═══ EINLEITUNG ═══ */}
      <section className="py-28 px-6 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs font-black uppercase tracking-widest text-[#4A7FA5] mb-6">
              Ein Netz. Elf Antworten.
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-[#1A1A2E] mb-8 leading-tight"
              style={{ letterSpacing: "-0.03em" }}>
              Für jede Situation<br />die richtige Hilfe.
            </h2>
            <p className="text-xl text-[#6E6E73] leading-relaxed max-w-3xl mx-auto">
              Ankernetz ist ein Netzwerk aus spezialisierten Hilfsangeboten für Kinder und Jugendliche —
              von der akuten Krisenintervention über Psychotherapie und frühe Hilfen bis zum Übergang in den Beruf.
              Alle Angebote sind aufeinander abgestimmt und unter einem gemeinsamen starken Dach vereint.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ BENTO GRID — ANGEBOTE ═══ */}
      <section id="angebote" className="py-6 px-6 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto">

          {/* Erste Reihe: Krisenintervention groß + 2 klein */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

            {/* Krisenintervention — groß */}
            <ScrollReveal className="md:col-span-2">
              <Link href="/krisenintervention"
                className="bento-card group relative rounded-3xl overflow-hidden min-h-[380px] flex flex-col justify-end p-8 block"
                style={{ background: angebote[0].bg }}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                <div className="absolute top-6 right-6">
                  <span className="text-xs font-bold bg-red-500/20 text-red-300 border border-red-400/30 px-3 py-1 rounded-full">
                    {angebote[0].badge}
                  </span>
                </div>
                <div className="relative z-10">
                  <AlertTriangle size={32} className="text-red-400 mb-4" />
                  <h3 className="text-white text-3xl font-black mb-2 leading-tight" style={{ letterSpacing: "-0.02em" }}>
                    {angebote[0].titel}
                  </h3>
                  <p className="text-white/50 text-sm italic mb-3">{angebote[0].claim}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">{angebote[0].kurz}</p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-bold group-hover:gap-3 transition-all">
                    Mehr erfahren <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Psychotherapie */}
            <ScrollReveal delay={100}>
              <Link href="/psychotherapie"
                className="bento-card group relative rounded-3xl overflow-hidden min-h-[380px] flex flex-col justify-end p-7 block"
                style={{ background: angebote[1].bg }}>
                <div className="absolute top-6 right-6">
                  <span className="text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-400/30 px-3 py-1 rounded-full">
                    {angebote[1].badge}
                  </span>
                </div>
                <div className="relative z-10">
                  <Brain size={28} className="text-purple-400 mb-4" />
                  <h3 className="text-white text-xl font-black mb-1 leading-tight">{angebote[1].titel}</h3>
                  <p className="text-white/50 text-xs italic mb-2">{angebote[1].claim}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">{angebote[1].kurz}</p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-bold group-hover:gap-3 transition-all">
                    Mehr erfahren <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>

          {/* Zweite Reihe: 3 gleichgroß */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[angebote[2], angebote[3], angebote[4]].map((a, i) => {
              const Icon = a.icon;
              return (
                <ScrollReveal key={a.slug} delay={i * 80}>
                  <Link href={`/${a.slug}`}
                    className="bento-card group relative rounded-3xl overflow-hidden min-h-[280px] flex flex-col justify-end p-7 block"
                    style={{ background: a.bg }}>
                    <div className="absolute top-5 right-5">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{ background: `${a.iconColor}22`, color: a.iconColor, border: `1px solid ${a.iconColor}44` }}>
                        {a.badge}
                      </span>
                    </div>
                    <div className="relative z-10">
                      <Icon size={24} style={{ color: a.iconColor }} className="mb-3" />
                      <h3 className="text-white text-lg font-black mb-1 leading-tight">{a.titel}</h3>
                      <p className="text-white/50 text-xs italic mb-2">{a.claim}</p>
                      <p className="text-white/60 text-sm leading-relaxed mb-4">{a.kurz}</p>
                      <span className="inline-flex items-center gap-2 text-white text-xs font-bold group-hover:gap-3 transition-all">
                        Mehr <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Dritte Reihe: 4 kompakt */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {[angebote[5], angebote[6], angebote[7], angebote[8]].map((a, i) => {
              const Icon = a.icon;
              return (
                <ScrollReveal key={a.slug} delay={i * 60}>
                  <Link href={`/${a.slug}`}
                    className="bento-card group relative rounded-3xl overflow-hidden min-h-[200px] flex flex-col justify-end p-6 block"
                    style={{ background: a.bg }}>
                    <div className="relative z-10">
                      <Icon size={20} style={{ color: a.iconColor }} className="mb-3" />
                      <h3 className="text-white text-base font-black mb-1 leading-tight">{a.titel}</h3>
                      <p className="text-white/50 text-xs italic mb-3">{a.claim}</p>
                      <span className="inline-flex items-center gap-1.5 text-white text-xs font-bold group-hover:gap-2.5 transition-all">
                        Mehr <ArrowRight size={11} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Vierte Reihe: Ankerkleidung groß + Versorgung */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ScrollReveal delay={100} className="md:col-span-2">
              <Link href="/ankerkleidung"
                className="bento-card group relative rounded-3xl overflow-hidden min-h-[220px] flex items-center p-8 block"
                style={{ background: angebote[9].bg }}>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Shirt size={28} className="text-slate-400" />
                    <span className="text-xs font-bold bg-slate-400/20 text-slate-300 border border-slate-400/30 px-3 py-1 rounded-full">Shop</span>
                  </div>
                  <h3 className="text-white text-2xl font-black mb-2">Ankerkleidung</h3>
                  <p className="text-white/50 text-sm italic mb-3">Stabilität. Selbstwert. Alltag.</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-md">{angebote[9].kurz}</p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-bold group-hover:gap-3 transition-all">
                    Kollektion entdecken <ArrowRight size={15} />
                  </span>
                </div>
                <div className="hidden md:flex gap-2 flex-wrap max-w-[180px]">
                  {["ADHS", "Trauma", "Autismus", "Bindung", "Angst"].map((t) => (
                    <span key={t} className="text-xs text-white/40 border border-white/10 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Link href="/versorgung"
                className="bento-card group relative rounded-3xl overflow-hidden min-h-[220px] flex flex-col justify-end p-7 block"
                style={{ background: angebote[10].bg }}>
                <Star size={22} className="text-amber-400 mb-3" />
                <h3 className="text-white text-lg font-black mb-1">Versorgung</h3>
                <p className="text-white/50 text-xs italic mb-2">Würde im Alltag.</p>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{angebote[10].kurz}</p>
                <span className="inline-flex items-center gap-2 text-white text-xs font-bold group-hover:gap-3 transition-all">
                  Mehr <ArrowRight size={12} />
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ STÄRKEN ═══ */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-black uppercase tracking-widest text-[#4A7FA5] mb-4">Was uns auszeichnet</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A2E]" style={{ letterSpacing: "-0.03em" }}>
                Stärke durch Verbindung.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staerken.map((s, i) => {
              const Icon = s.icon;
              return (
                <ScrollReveal key={s.titel} delay={i * 100}>
                  <div className="text-center p-8 rounded-3xl bg-[#F5F5F7] hover:bg-[#EBEBED] transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-[#1A1A2E] flex items-center justify-center mx-auto mb-5">
                      <Icon size={22} className="text-[#4A7FA5]" />
                    </div>
                    <h3 className="text-xl font-black text-[#1A1A2E] mb-3">{s.titel}</h3>
                    <p className="text-[#6E6E73] leading-relaxed text-sm">{s.text}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ FÜR FACHKRÄFTE ═══ */}
      <section className="py-28 px-6 text-white"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-xs font-black uppercase tracking-widest text-[#4A7FA5] mb-5">Für Jugendämter & Fachkräfte</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ letterSpacing: "-0.03em" }}>
              Klare Prozesse.<br />Schnelle Reaktion.<br />Verlässliche Partner.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Ankernetz arbeitet eng mit Jugendämtern und Fachkräften zusammen.
              Schnelle Rückmeldungen, transparente Einschätzungen und passgenaue
              Hilfeformen — direkt und unkompliziert.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/platzanfrage"
                className="group flex items-center gap-2 px-8 py-4 bg-white text-[#1A1A2E] font-bold rounded-full text-sm hover:bg-white/95 transition-all">
                Platzanfrage stellen
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/kontakt"
                className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full text-sm hover:bg-white/10 transition-colors">
                Kontakt aufnehmen
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { zahl: "< 24h", label: "Rückmeldung auf Anfragen" },
                { zahl: "24/7", label: "Krisenbereitschaft" },
                { zahl: "11", label: "Spezialisierte Angebote" },
                { zahl: "100%", label: "Fachlich qualifiziert" },
              ].map((stat) => (
                <div key={stat.zahl} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-black text-white mb-1" style={{ letterSpacing: "-0.02em" }}>{stat.zahl}</p>
                  <p className="text-white/40 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
