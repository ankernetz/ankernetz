import Link from "next/link";
import {
  AlertTriangle, Home, Brain, Baby, Search, Shirt,
  MessageCircle, Rocket, Building2, Heart, ArrowRight,
  Shield, Network, Star
} from "lucide-react";
import { AnimatedGridPattern } from "./components/AnimatedGridPattern";
import { ShineText } from "./components/ShineText";
import { BlurFade } from "./components/BlurFade";

const angebote = [
  { slug: "krisenintervention",   titel: "Krisenintervention",             claim: "Sofort da. Wenn es zählt.",            kurz: "24/7 Sofortaufnahme für Jugendliche in akuter Not — rund um die Uhr, an 365 Tagen.",                           icon: AlertTriangle, badge: "24/7",           iconColor: "#FEC274", stripe: "#c47a20" },
  { slug: "psychotherapie",       titel: "Kinder- & Jugend­psychotherapie", claim: "Professionelle Therapie. Mit Kassensitz.", kurz: "Eingebunden in alle Hilfeprozesse — direkt dort, wo Kinder und Jugendliche leben.",               icon: Brain,         badge: "Kassensitz",   iconColor: "#6FA3FE", stripe: "#4d85e8" },
  { slug: "fruehe-hilfen",        titel: "Frühe Hilfen",                   claim: "Schutz von Anfang an.",                kurz: "Bindung, Sicherheit und Entwicklung für die Kleinsten.",                                                    icon: Baby,          badge: "0–6 Jahre",    iconColor: "#FEC274", stripe: "#c47a20" },
  { slug: "therapie-wohnen",      titel: "Therapie & Wohnen",              claim: "Raum zum Ankommen.",                   kurz: "Therapeutische Wohngruppen mit intensiver Begleitung und Traumaarbeit.",                                   icon: Home,          badge: "12–17 Jahre",  iconColor: "#6FA3FE", stripe: "#4d85e8" },
  { slug: "jugendhilfe",          titel: "Jugendhilfe",                    claim: "Sicherheit im Alltag.",                kurz: "Kinderwohngruppen mit verlässlicher Struktur und Beziehungsarbeit.",                                        icon: Heart,         badge: "6–12 Jahre",   iconColor: "#FEC274", stripe: "#c47a20" },
  { slug: "diagnostik-clearing",  titel: "Diagnostik & Clearing",          claim: "Klarheit schafft die richtige Hilfe.", icon: Search,        badge: "Gutachten",    iconColor: "#6FA3FE", stripe: "#4d85e8" },
  { slug: "beratung-praevention", titel: "Beratung & Prävention",          claim: "Früh helfen. Gemeinsam stärken.",      icon: MessageCircle, badge: "Online & vor Ort", iconColor: "#6FA3FE", stripe: "#4d85e8" },
  { slug: "kita-beratung",        titel: "Beratung in Kitas",              claim: "Früh erkennen.",                       icon: Building2,     badge: "Fachkräfte",   iconColor: "#FEC274", stripe: "#c47a20" },
  { slug: "uebergang-arbeit",     titel: "Übergang Arbeit",                claim: "Der nächste Schritt.",                 icon: Rocket,        badge: "Übergang",     iconColor: "#6FA3FE", stripe: "#4d85e8" },
  { slug: "ankerkleidung",        titel: "Ankerkleidung",                  claim: "Stabilität. Selbstwert. Alltag.",      kurz: "Spezialisierte Kleidung nach Störungsbild — Teil des Hilfesystems.",                                        icon: Shirt,         badge: "Shop",         iconColor: "#6FA3FE", stripe: "#4d85e8" },
  { slug: "versorgung",           titel: "Versorgung",                     claim: "Würde im Alltag.",                     kurz: "Bedarfsorientierte Ausstattung für Kinder und Jugendliche im Hilfesystem.",                                  icon: Star,          badge: "Ausstattung",  iconColor: "#FEC274", stripe: "#c47a20" },
];

const staerken = [
  {
    icon: Shield,
    color: "#6FA3FE",
    titel: "Verlässlich",
    text: "Feste Ansprechpartner, klare Prozesse, transparente Kommunikation — immer.",
  },
  {
    icon: Network,
    color: "#FEC274",
    titel: "Vernetzt",
    text: "Alle 11 Angebote greifen ineinander. Kein Kind fällt zwischen die Stühle.",
  },
  {
    icon: Brain,
    color: "#6FA3FE",
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
        style={{ background: "linear-gradient(155deg, #eef4ff 0%, #fafbff 45%, #fff8ee 100%)" }}
      >
        {/* Soft color blobs */}
        <div className="absolute top-0 left-[10%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(111,163,254,0.14) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(254,194,116,0.12) 0%, transparent 65%)" }} />
        <div className="absolute top-1/3 right-[20%] w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(3,41,92,0.05) 0%, transparent 65%)" }} />

        {/* Animated Grid Pattern */}
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
              Krisendienst 24/7 verfügbar
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
              Stabilität in Krisen.
            </p>
            <p style={{ fontSize: "clamp(1.0625rem,2.2vw,1.25rem)", color: "rgba(3,41,92,0.45)", fontWeight: 400, lineHeight: 1.7 }}>
              Perspektiven für junge Menschen.
            </p>
          </div>

          <div className="fade-in-up delay-3" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "6rem" }}>
            <a href="#angebote" className="btn btn-primary btn-lg group">
              Angebote entdecken
              <ArrowRight size={15} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link href="/platzanfrage" className="btn btn-outline btn-lg">
              Platzanfrage stellen
            </Link>
          </div>

        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #fff8ee)" }} />

        {/* Scroll indicator */}
        <div className="scroll-pulse absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-8" style={{ background: "rgba(15,23,42,0.15)" }} />
        </div>
      </section>

      {/* ═══ EINLEITUNG ═══ — HELL */}
      <section className="relative overflow-hidden bg-[#F5F5F7]" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)" }} />

        <div className="site-container">
          <BlurFade>
            <div className="text-center" style={{ maxWidth: "640px", margin: "0 auto" }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6FA3FE] mb-5">
                Ein Netz. Elf Antworten.
              </p>
              <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-black text-[#1a3f6f] mb-8 leading-[1.1]"
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
      <section id="angebote" style={{ background: "#d8e4f0", paddingTop: "4.5rem", paddingBottom: "5rem" }}>
        <div className="site-container">

          {/* Abschnitts-Header */}
          <BlurFade>
            <div className="text-center" style={{ marginBottom: "2.5rem" }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#1a3f6f" }}>
                Unsere Angebote
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-black" style={{ letterSpacing: "-0.028em", color: "#1a3f6f" }}>
                Spezialisiert. Vernetzt. Menschlich.
              </h2>
            </div>
          </BlurFade>

        </div>
        <div className="site-container" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          {/* ── Reihe 1: Krisenintervention (Large) + Psychotherapie (Medium) ── */}
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
                    Mehr erfahren <ArrowRight size={14} strokeWidth={1.5} />
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
                    Mehr erfahren <ArrowRight size={13} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </BlurFade>
          </div>

          {/* ── Reihe 2: 3 Medium ── */}
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
                        Mehr erfahren <ArrowRight size={13} strokeWidth={1.5} />
                      </span>
                    </div>
                  </Link>
                </BlurFade>
              );
            })}
          </div>

          {/* ── Reihe 3: 4 Compact ── */}
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

          {/* ── Reihe 4: Ankerkleidung (Large) + Versorgung (Medium) ── */}
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
                    Kollektion entdecken <ArrowRight size={14} strokeWidth={1.5} />
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
                    Mehr erfahren <ArrowRight size={13} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </BlurFade>
          </div>

        </div>
      </section>

      {/* ═══ STÄRKEN ═══ */}
      <section className="relative overflow-hidden bg-white" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
        <div className="site-container">
          <BlurFade>
            <div style={{ marginBottom: "4.5rem" }}>
              <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1.25rem" }}>Was uns auszeichnet</p>
              <h2 style={{ fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 900, color: "#1a3f6f", letterSpacing: "-0.028em", lineHeight: 1.15 }}>
                Stärke durch Verbindung.
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "2rem" }}>
            {staerken.map((s, i) => {
              const Icon = s.icon;
              return (
                <BlurFade key={s.titel} delay={i * 0.1}>
                  <div className="bento-card group relative overflow-hidden" style={{ background: "#ffffff", borderRadius: "1.125rem", border: "1px solid rgba(0,0,0,0.07)", padding: "3rem", boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 8px 28px rgba(0,0,0,0.05)", transition: "box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: s.color }} />
                    <div style={{ width: "3.25rem", height: "3.25rem", borderRadius: "0.875rem", background: `${s.color}12`, border: `1px solid ${s.color}22`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2.25rem" }}>
                      <Icon size={22} strokeWidth={1.5} style={{ color: s.color }} />
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

      {/* ═══ FÜR FACHKRÄFTE ═══ */}
      <section className="relative overflow-hidden"
        style={{ background: "#d8e4f0", paddingTop: "6rem", paddingBottom: "6rem" }}>

        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Text — 6 Spalten */}
            <div className="lg:col-span-6">
              <BlurFade>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-6" style={{ color: "#1a3f6f" }}>Für Jugendämter & Fachkräfte</p>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-black mb-10 leading-[1.15]" style={{ letterSpacing: "-0.03em", color: "#1a3f6f" }}>
                  Klare Prozesse.<br />Schnelle Reaktion.<br />Verlässliche Partner.
                </h2>
                <p className="text-[1.0625rem] font-normal leading-[2] mb-14 max-w-lg" style={{ color: "rgba(26,63,111,0.65)" }}>
                  Ankernetz arbeitet eng mit Jugendämtern und Fachkräften zusammen.
                  Schnelle Rückmeldungen, transparente Einschätzungen und passgenaue
                  Hilfeformen — direkt und unkompliziert.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/platzanfrage" className="btn btn-primary btn-lg group">
                    Platzanfrage stellen
                    <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link href="/kontakt" className="btn btn-outline btn-lg">
                    Kontakt aufnehmen
                  </Link>
                </div>
              </BlurFade>
            </div>

            {/* Stat-Grid */}
            <div className="lg:col-span-5 lg:col-start-8">
              <BlurFade delay={0.12}>
                <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                  {[
                    { zahl: "< 24h", label: "Rückmeldung auf Anfragen", color: "#6FA3FE" },
                    { zahl: "24/7",  label: "Krisenbereitschaft",       color: "#ef4444" },
                    { zahl: "11",    label: "Spezialisierte Angebote",  color: "#FEC274" },
                    { zahl: "100%",  label: "Fachlich qualifiziert",    color: "#6FA3FE" },
                  ].map((stat) => (
                    <div key={stat.zahl} className="bento-card" style={{ background: "#f0f4f8", border: "1px solid rgba(26,63,111,0.1)", borderRadius: "0.875rem", padding: "2rem 1.75rem", position: "relative", overflow: "hidden" }}>
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: stat.color }} />
                      <p style={{ fontSize: "2.25rem", fontWeight: 900, color: "#1a3f6f", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "0.625rem" }}>{stat.zahl}</p>
                      <p style={{ fontSize: "0.8125rem", color: "rgba(26,63,111,0.55)", lineHeight: 1.5, fontWeight: 400 }}>{stat.label}</p>
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
