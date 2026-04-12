"use client";

import { useState } from "react";
import {
  ShoppingCart, X, Plus, Minus, Check,
  Shirt, Wind, Feather, Footprints,
  Shield, Activity, Layers, Sun,
  Zap, Repeat, Move,
  Package, Gift, BookOpen, Droplets,
  EyeOff, Umbrella, AlignJustify,
  Tag, Heart, Link2, Anchor,
  ArrowRight, Truck, FileText, SlidersHorizontal, Phone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── Daten ───────────────────────────────────────────────────── */
const kategorien: {
  slug: string; titel: string; akzent: string; bg: string; beschreibung: string;
  produkte: { name: string; material: string; groessen: string[]; farben: string[]; preis: number; beschreibung: string; icon: LucideIcon; }[];
}[] = [
  {
    slug: "adhs", titel: "ADHS & Hyperaktivität", akzent: "#6FA3FE", bg: "rgba(111,163,254,0.08)",
    beschreibung: "Reizarm, funktional, komfortabel.",
    produkte: [
      { name: "Basishose Komfort",     icon: AlignJustify, material: "100% Bio-Baumwolle",   groessen: ["104","116","128","140","152","164"],             farben: ["Anthrazit","Navy","Grau"],   preis: 29.90, beschreibung: "Weicher Bund ohne Knöpfe, elastischer Schnitt, keine störenden Nähte." },
      { name: "Alltags-Shirt Reizarm", icon: Shirt,        material: "Jersey Bio-Baumwolle",  groessen: ["104","116","128","140","152","164","S","M","L"], farben: ["Weiß","Hellgrau","Blau"],    preis: 19.90, beschreibung: "Ohne Aufdruck, nahtlos verarbeitet, angenehm auf der Haut." },
      { name: "Übergangsjacke Soft",   icon: Wind,         material: "Fleece/Softshell",      groessen: ["116","128","140","152","164","S","M"],           farben: ["Navy","Grau"],              preis: 49.90, beschreibung: "Leicht, warm, einfach zu öffnen — kein Zipper-Stress." },
      { name: "Socken Komfort-Set",    icon: Footprints,   material: "Bambus/Baumwolle",      groessen: ["23–26","27–30","31–34","35–38","39–42"],         farben: ["Grau","Weiß","Schwarz"],    preis: 14.90, beschreibung: "Ohne störende Zehennaht, rutschfest, langlebig." },
    ],
  },
  {
    slug: "trauma", titel: "Trauma & PTBS", akzent: "#FEC274", bg: "rgba(254,194,116,0.08)",
    beschreibung: "Weich, hüllend, sicher.",
    produkte: [
      { name: "Comfort-Hoodie",        icon: Shield,    material: "Fleece innen, Baumwolle außen",       groessen: ["116","128","140","152","164","S","M","L"], farben: ["Grau","Dunkelblau","Beige"],  preis: 54.90, beschreibung: "Besonders weich gefüttert, großer Kapuzen-Schutzraum." },
      { name: "Wohlfühl-Jogger",       icon: Activity,  material: "French Terry Bio",                    groessen: ["116","128","140","152","164","S","M","L"], farben: ["Dunkelgrau","Navy","Schwarz"], preis: 39.90, beschreibung: "Kuschelig weich, gibt Halt ohne zu drücken." },
      { name: "Weighted Weste",        icon: Layers,    material: "Spezialmaterial mit Gewichtseinlage", groessen: ["116","128","140","152","164"],             farben: ["Grau","Dunkelblau"],         preis: 89.90, beschreibung: "Strukturgebend, beruhigend, dezentes Design." },
      { name: "Decken-Shirt Oversize", icon: Sun,       material: "100% Baumwolle schwer",               groessen: ["140","152","164","S","M","L","XL"],        farben: ["Beige","Weiß","Hellgrau"],   preis: 34.90, beschreibung: "Schweres, weiches Shirt mit Hülleffekt." },
    ],
  },
  {
    slug: "autismus", titel: "Autismus-Spektrum", akzent: "#6FA3FE", bg: "rgba(111,163,254,0.08)",
    beschreibung: "Keine Nähte, keine Etiketten.",
    produkte: [
      { name: "Sensory-Shirt Nahtlos",  icon: Feather, material: "Bio-Baumwolle nahtlos gestrickt", groessen: ["104","116","128","140","152","164","S","M"], farben: ["Weiß","Grau","Hellblau"],  preis: 34.90, beschreibung: "Komplett nahtlos, keine Etiketten, angenehm auf empfindlicher Haut." },
      { name: "Hose Easy-Fit",          icon: Repeat,  material: "Baumwoll-Stretch",                groessen: ["104","116","128","140","152","164"],         farben: ["Schwarz","Navy","Grau"],   preis: 39.90, beschreibung: "Gleicher Schnitt in allen Größen — Verlässlichkeit durch Konsistenz." },
      { name: "Kompressionsshirt",      icon: Zap,     material: "Elastan-Mix",                     groessen: ["116","128","140","152","164","S","M"],       farben: ["Grau","Dunkelblau"],      preis: 44.90, beschreibung: "Leichter Kompressionsdruck — strukturgebend und beruhigend." },
      { name: "Schuhe Klettverschluss", icon: Move,    material: "Leder/Textil",                    groessen: ["28","30","32","34","36","38","40"],          farben: ["Schwarz","Grau"],         preis: 59.90, beschreibung: "Einfach anzuziehen, ohne Schnürsenkel, stabiler Halt." },
    ],
  },
  {
    slug: "vernachlaessigung", titel: "Erstausstattung", akzent: "#FEC274", bg: "rgba(254,194,116,0.08)",
    beschreibung: "Vollständig, würdevoll, passend.",
    produkte: [
      { name: "Starter-Set Kind",        icon: Package,  material: "Verschiedene", groessen: ["104–128","128–152"],   farben: ["Neutral"], preis: 129.90, beschreibung: "3 Shirts, 2 Hosen, Unterwäsche-Set, Socken, Jacke." },
      { name: "Starter-Set Jugendliche", icon: Gift,     material: "Verschiedene", groessen: ["152–164","S/M","M/L"], farben: ["Neutral"], preis: 159.90, beschreibung: "Vollständige Erstausstattung — altersgerecht und würdevoll." },
      { name: "Schul-Paket",            icon: BookOpen, material: "Verschiedene", groessen: ["Universal"],           farben: ["Neutral"], preis: 89.90,  beschreibung: "Rucksack, Federmäppchen, Schulkleidung-Set." },
      { name: "Hygiene-Starter",         icon: Droplets, material: "—",           groessen: ["Universal"],           farben: ["—"],       preis: 24.90,  beschreibung: "Grundlegende Hygieneartikel als Ergänzung." },
    ],
  },
  {
    slug: "angststoerungen", titel: "Angststörungen", akzent: "#6FA3FE", bg: "rgba(111,163,254,0.08)",
    beschreibung: "Dezent, unauffällig, sicher.",
    produkte: [
      { name: "Unauffällig-Set Basic", icon: EyeOff,       material: "Bio-Baumwolle",      groessen: ["116","128","140","152","164","S","M"],       farben: ["Grau","Navy","Schwarz"],      preis: 49.90, beschreibung: "Ohne Logos — unsichtbar im positiven Sinne." },
      { name: "Kapuzenpulli Rückzug",  icon: Umbrella,     material: "Baumwolle French Terry", groessen: ["128","140","152","164","S","M","L"],     farben: ["Dunkelgrau","Schwarz","Navy"], preis: 44.90, beschreibung: "Große Kapuze als Rückzugsraum, weich und warm." },
      { name: "Leggings Allrounder",   icon: AlignJustify, material: "Baumwolle-Stretch",  groessen: ["104","116","128","140","152","164","S","M","L"], farben: ["Schwarz","Dunkelgrau","Navy"], preis: 24.90, beschreibung: "Bequem, dehnbar, unauffällig." },
      { name: "Layering-Shirt",        icon: Layers,       material: "Jersey Bio",         groessen: ["116","128","140","152","164","S","M","L"],   farben: ["Weiß","Grau","Beige"],       preis: 19.90, beschreibung: "Zum Layern — gibt zusätzliche Sicherheit." },
    ],
  },
  {
    slug: "bindungsstoerungen", titel: "Bindungsstörungen", akzent: "#FEC274", bg: "rgba(254,194,116,0.08)",
    beschreibung: "Erkennbar, persönlich, verbindend.",
    produkte: [
      { name: "Personalisiertes Shirt", icon: Tag,    material: "Bio-Baumwolle",   groessen: ["104","116","128","140","152","164"],     farben: ["Hellblau","Rosa","Grün","Gelb"], preis: 29.90, beschreibung: "Mit individuellem Namen — Identität und Zugehörigkeit." },
      { name: "Lieblings-Hoodie",       icon: Heart,  material: "Fleece",          groessen: ["116","128","140","152","164","S","M","L"], farben: ["Frei wählbar"],               preis: 54.90, beschreibung: "In der Lieblingsfarbe — stärkt das Selbstgefühl." },
      { name: "Matching-Set Betreuer",  icon: Link2,  material: "Bio-Baumwolle",   groessen: ["Kind + Erwachsen"],                     farben: ["Gemeinsam wählbar"],           preis: 39.90, beschreibung: "Set für Kind und Bezugsbetreuer — visueller Beziehungsanker." },
      { name: "Übergangs-Schal",        icon: Anchor, material: "Merino-Mix weich",groessen: ["Universal"],                            farben: ["Warm, weich"],                 preis: 24.90, beschreibung: "Weicher Schal als Übergangsobjekt." },
    ],
  },
];

/* ─── Types ───────────────────────────────────────────────────── */
interface CartItem { kategorie: string; produkt: string; groesse: string; farbe: string; menge: number; preis: number; }
interface Sel { [k: string]: { groesse?: string; farbe?: string }; }

/* ─── Produkt-Karte ───────────────────────────────────────────── */
function ProduktKarte({
  produkt, akzent, bg, onAdd, sel, setSel, cardKey,
}: {
  produkt: typeof kategorien[0]["produkte"][0];
  akzent: string; bg: string;
  onAdd: () => void;
  sel: { groesse?: string; farbe?: string };
  setSel: (field: "groesse" | "farbe", val: string) => void;
  cardKey: string;
}) {
  const [hovered, setHovered] = useState(false);
  const ready = !!(sel.groesse && sel.farbe);
  const Icon = produkt.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#ffffff",
        borderRadius: "0",
        border: "1px solid #e8ecf0",
        display: "flex", flexDirection: "column",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
        boxShadow: hovered ? "0 16px 48px rgba(26,63,111,0.13)" : "0 1px 4px rgba(26,63,111,0.06)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "default",
      }}
    >
      {/* Bild-Bereich */}
      <div style={{
        position: "relative", height: "260px", overflow: "hidden",
        background: hovered
          ? `linear-gradient(160deg, #0d2444 0%, #1a3f6f 100%)`
          : `linear-gradient(160deg, #132240 0%, #1e3a6a 100%)`,
        transition: "background 0.3s ease",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {/* Hintergrund-Muster */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }} />
        {/* Akzent-Blob */}
        <div style={{
          position: "absolute", bottom: "-30px", right: "-30px",
          width: "140px", height: "140px", borderRadius: "50%",
          background: `radial-gradient(circle, ${akzent}22 0%, transparent 70%)`,
          transition: "opacity 0.3s ease",
          opacity: hovered ? 1 : 0.5,
        }} />

        {/* Icon */}
        <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <div style={{
            width: "80px", height: "80px", borderRadius: "50%",
            border: `1.5px solid ${akzent}55`,
            background: `${akzent}15`,
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 1rem",
            transition: "transform 0.3s ease, border-color 0.3s ease, background 0.3s ease",
            transform: hovered ? "scale(1.08)" : "scale(1)",
            borderColor: hovered ? `${akzent}99` : `${akzent}55`,
            backgroundColor: hovered ? `${akzent}22` : `${akzent}15`,
          }}>
            <Icon size={34} color={akzent} strokeWidth={1.25} />
          </div>
          <p style={{
            fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)", fontWeight: 500,
          }}>{produkt.material}</p>
        </div>

        {/* Preis-Badge oben rechts */}
        <div style={{
          position: "absolute", top: "1rem", right: "1rem",
          background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)",
          borderRadius: "100px", padding: "0.25rem 0.625rem",
          border: "1px solid rgba(255,255,255,0.12)",
        }}>
          <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "white" }}>
            {produkt.preis.toFixed(2).replace(".", ",")} €
          </span>
        </div>
      </div>

      {/* Info-Bereich */}
      <div style={{ padding: "1.25rem 1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>

        {/* Name + Beschreibung */}
        <div>
          <h3 style={{
            fontSize: "0.9375rem", fontWeight: 700, color: "#1a3f6f",
            marginBottom: "0.375rem", letterSpacing: "-0.01em", lineHeight: 1.3,
          }}>{produkt.name}</h3>
          <p style={{ fontSize: "0.8125rem", color: "rgba(26,63,111,0.55)", lineHeight: 1.6 }}>
            {produkt.beschreibung}
          </p>
        </div>

        {/* Größe */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(26,63,111,0.4)" }}>
              Größe
            </p>
            {sel.groesse && (
              <span style={{ fontSize: "0.7rem", fontWeight: 600, color: akzent }}>{sel.groesse}</span>
            )}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
            {produkt.groessen.map(g => (
              <button key={g} onClick={() => setSel("groesse", g)} style={{
                fontSize: "0.72rem", padding: "0.2rem 0.5rem", borderRadius: "3px",
                border: sel.groesse === g ? `1.5px solid #1a3f6f` : "1px solid rgba(26,63,111,0.18)",
                background: sel.groesse === g ? "#1a3f6f" : "transparent",
                color: sel.groesse === g ? "white" : "rgba(26,63,111,0.6)",
                cursor: "pointer", fontWeight: sel.groesse === g ? 600 : 400,
                transition: "all 0.1s ease",
              }}>{g}</button>
            ))}
          </div>
        </div>

        {/* Farbe */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(26,63,111,0.4)" }}>
              Farbe
            </p>
            {sel.farbe && (
              <span style={{ fontSize: "0.7rem", fontWeight: 600, color: akzent }}>{sel.farbe}</span>
            )}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
            {produkt.farben.map(f => (
              <button key={f} onClick={() => setSel("farbe", f)} style={{
                fontSize: "0.72rem", padding: "0.2rem 0.625rem", borderRadius: "100px",
                border: sel.farbe === f ? `1.5px solid ${akzent}` : "1px solid rgba(26,63,111,0.18)",
                background: sel.farbe === f ? bg : "transparent",
                color: "#1a3f6f", cursor: "pointer",
                fontWeight: sel.farbe === f ? 600 : 400,
                transition: "all 0.1s ease",
              }}>{f}</button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button onClick={onAdd} disabled={!ready} style={{
          marginTop: "auto",
          width: "100%", padding: "0.75rem",
          background: ready ? "#1a3f6f" : "transparent",
          color: ready ? "white" : "rgba(26,63,111,0.3)",
          border: ready ? "1.5px solid #1a3f6f" : "1.5px solid rgba(26,63,111,0.15)",
          borderRadius: "3px", fontWeight: 700, fontSize: "0.8125rem",
          cursor: ready ? "pointer" : "not-allowed",
          letterSpacing: "0.04em", textTransform: "uppercase",
          transition: "all 0.15s ease",
        }}>
          {ready ? "In den Warenkorb" : "Größe & Farbe wählen"}
        </button>
      </div>
    </div>
  );
}

/* ─── Hauptseite ──────────────────────────────────────────────── */
export default function AnkerkleidungPage() {
  const [activeKat, setActiveKat]       = useState(kategorien[0].slug);
  const [selection, setSelection]       = useState<Sel>({});
  const [cart, setCart]                 = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen]         = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [form, setForm]                 = useState({ name: "", einrichtung: "", email: "", telefon: "", notizen: "" });
  const [submitted, setSubmitted]       = useState(false);
  const [submitting, setSubmitting]     = useState(false);

  const aktKat    = kategorien.find(k => k.slug === activeKat)!;
  const cartTotal = cart.reduce((s, i) => s + i.preis * i.menge, 0);
  const cartCount = cart.reduce((s, i) => s + i.menge, 0);

  function pKey(katSlug: string, name: string) { return `${katSlug}__${name}`; }

  function addToCart(kat: typeof kategorien[0], produkt: typeof kategorien[0]["produkte"][0]) {
    const k = pKey(kat.slug, produkt.name);
    const sel = selection[k];
    if (!sel?.groesse || !sel?.farbe) return;
    setCart(prev => {
      const idx = prev.findIndex(i => i.kategorie === kat.slug && i.produkt === produkt.name && i.groesse === sel.groesse && i.farbe === sel.farbe);
      if (idx >= 0) { const u = [...prev]; u[idx] = { ...u[idx], menge: u[idx].menge + 1 }; return u; }
      return [...prev, { kategorie: kat.slug, produkt: produkt.name, groesse: sel.groesse!, farbe: sel.farbe!, menge: 1, preis: produkt.preis }];
    });
    setCartOpen(true);
  }

  function changeQty(idx: number, delta: number) {
    setCart(prev => { const u = [...prev]; u[idx] = { ...u[idx], menge: u[idx].menge + delta }; if (u[idx].menge <= 0) u.splice(idx, 1); return u; });
  }

  async function submitOrder() {
    if (!form.name || !form.email) return;
    setSubmitting(true);
    const items = cart.map(i => `• ${i.produkt} | ${i.groesse} | ${i.farbe} | ${i.menge}× | ${(i.preis * i.menge).toFixed(2)} €`).join("\n");
    const text = `🛍 <b>Neue Bestellung — Ankerkleidung</b>\n\n<b>Name:</b> ${form.name}\n<b>Einrichtung:</b> ${form.einrichtung || "—"}\n<b>E-Mail:</b> ${form.email}\n<b>Telefon:</b> ${form.telefon || "—"}\n\n<b>Artikel:</b>\n${items}\n\n<b>Gesamt:</b> ${cartTotal.toFixed(2)} €${form.notizen ? `\n\n<b>Notizen:</b> ${form.notizen}` : ""}`;
    try { await fetch("/api/order", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text }) }); } catch { /**/ }
    setSubmitted(true);
    setSubmitting(false);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "0.6rem 0.875rem", border: "1px solid rgba(26,63,111,0.15)",
    borderRadius: "3px", fontSize: "0.875rem", color: "#1a3f6f", outline: "none",
    boxSizing: "border-box", background: "#fafbfc", fontFamily: "inherit",
  };

  return (
    <main style={{ overflowX: "hidden", background: "#ffffff" }}>

      {/* ═══ HERO ═══ */}
      <section style={{
        position: "relative", minHeight: "62vh",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
      }}>
        {/* Links: Text */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "7rem 4rem 3.5rem 6rem",
          position: "relative", zIndex: 2,
        }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "1.75rem" }}>
            Ankernetz — Spezialisierte Kleidung
          </p>
          <h1 style={{
            fontSize: "clamp(2.5rem, 4vw, 3.75rem)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1.5rem",
          }}>
            Kleidung,<br />
            <span style={{ color: "#6FA3FE" }}>die versteht.</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8,
            maxWidth: "38ch", marginBottom: "2.5rem" }}>
            Für Kinder mit ADHS, Trauma, Autismus oder Bindungsstörungen — jedes Stück entwickelt
            mit Fachkräften aus der Jugendhilfe.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                background: "#ffffff", color: "#1a3f6f", border: "none",
                padding: "0.875rem 1.75rem", borderRadius: "3px",
                fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.04em",
                textTransform: "uppercase", cursor: "pointer",
              }}>
              Kollektion entdecken <ArrowRight size={15} />
            </button>
            <a href="tel:+4930224543220" style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)",
              padding: "0.875rem 1.5rem", borderRadius: "3px",
              fontWeight: 500, fontSize: "0.875rem", textDecoration: "none",
            }}>Beratung anfragen</a>
          </div>
        </div>

        {/* Rechts: Visual */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          {/* Dot grid */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.04,
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px" }} />
          {/* Blobs */}
          <div style={{ position: "absolute", top: "20%", left: "20%", width: "300px", height: "300px",
            borderRadius: "50%", background: "radial-gradient(circle, rgba(111,163,254,0.2) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: "15%", right: "10%", width: "240px", height: "240px",
            borderRadius: "50%", background: "radial-gradient(circle, rgba(254,194,116,0.15) 0%, transparent 70%)" }} />
          {/* Zentral-Icon-Grid */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              {[
                { Icon: Shirt,   color: "#6FA3FE", label: "ADHS" },
                { Icon: Shield,  color: "#FEC274", label: "Trauma" },
                { Icon: Feather, color: "#6FA3FE", label: "Autismus" },
                { Icon: Heart,   color: "#FEC274", label: "Bindung" },
              ].map(({ Icon, color, label }) => (
                <div key={label} style={{
                  width: "100px", height: "100px", borderRadius: "12px",
                  border: `1px solid ${color}33`, background: `${color}10`,
                  display: "flex", flexDirection: "column", alignItems: "center",
                  justifyContent: "center", gap: "0.5rem",
                }}>
                  <Icon size={32} color={color} strokeWidth={1.25} />
                  <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.15em", textTransform: "uppercase" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Stats */}
          <div style={{
            position: "absolute", bottom: "3rem", left: "3rem", right: "3rem",
            display: "flex", gap: "2rem",
          }}>
            {[
              { n: "6",  label: "Störungsbilder" },
              { n: "24", label: "Produkte" },
              { n: "24h",label: "Lieferzeit" },
            ].map(s => (
              <div key={s.label}>
                <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", lineHeight: 1 }}>{s.n}</p>
                <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em",
                  textTransform: "uppercase", marginTop: "0.25rem" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VALUE STRIP ═══ */}
      <div style={{ background: "#f7f9fc", borderTop: "1px solid #e8ecf0", borderBottom: "1px solid #e8ecf0" }}>
        <div className="site-container" style={{ display: "flex", justifyContent: "space-between",
          padding: "1.25rem 0", flexWrap: "wrap", gap: "1rem" }}>
          {[
            { Icon: Truck,              text: "Kostenlose Lieferung" },
            { Icon: FileText,           text: "Kostenträgerabrechnung möglich" },
            { Icon: SlidersHorizontal,  text: "Individuelle Bedarfsermittlung" },
            { Icon: Phone,              text: "Persönliche Beratung: +49 30 22 45 43 22" },
          ].map(v => (
            <div key={v.text} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <v.Icon size={15} color="#6FA3FE" strokeWidth={1.75} />
              <span style={{ fontSize: "0.8125rem", color: "rgba(26,63,111,0.65)", fontWeight: 500 }}>{v.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ SHOP ═══ */}
      <section id="shop" style={{ background: "#ffffff", padding: "5rem 0" }}>
        <div className="site-container">

          {/* Shop-Header */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#6FA3FE", marginBottom: "0.5rem" }}>Kollektion</p>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1a3f6f",
                letterSpacing: "-0.02em", lineHeight: 1.1 }}>Nach Störungsbild</h2>
            </div>
            {cartCount > 0 && (
              <button onClick={() => setCartOpen(true)} style={{
                display: "flex", alignItems: "center", gap: "0.625rem",
                background: "#1a3f6f", color: "white", border: "none",
                padding: "0.625rem 1.125rem", borderRadius: "3px",
                fontSize: "0.8125rem", fontWeight: 600, cursor: "pointer",
              }}>
                <ShoppingCart size={15} />
                {cartCount} Artikel · {cartTotal.toFixed(2).replace(".", ",")} €
              </button>
            )}
          </div>

          {/* Kategorie-Tabs */}
          <div style={{
            display: "flex", gap: "0", marginBottom: "3rem",
            borderBottom: "1px solid #e8ecf0", overflowX: "auto",
          }}>
            {kategorien.map(k => {
              const active = activeKat === k.slug;
              return (
                <button key={k.slug} onClick={() => setActiveKat(k.slug)} style={{
                  padding: "0.875rem 1.25rem", background: "none", border: "none",
                  borderBottom: active ? `2px solid ${k.akzent}` : "2px solid transparent",
                  marginBottom: "-1px",
                  color: active ? "#1a3f6f" : "rgba(26,63,111,0.4)",
                  fontWeight: active ? 700 : 400, fontSize: "0.8125rem",
                  cursor: "pointer", whiteSpace: "nowrap",
                  transition: "all 0.15s ease", letterSpacing: "0.01em",
                }}>
                  {k.titel}
                </button>
              );
            })}
          </div>

          {/* Kategorie-Info */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem",
            marginBottom: "2.5rem", padding: "1rem 1.25rem",
            background: aktKat.bg, borderRadius: "4px",
            border: `1px solid ${aktKat.akzent}22` }}>
            <div style={{ width: "3px", height: "36px", background: aktKat.akzent,
              borderRadius: "9999px", flexShrink: 0 }} />
            <p style={{ fontSize: "0.9rem", color: "#1a3f6f", lineHeight: 1.6 }}>
              <strong>{aktKat.titel}</strong> — {aktKat.beschreibung}
            </p>
          </div>

          {/* Produkt-Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {aktKat.produkte.map(produkt => {
              const k = pKey(aktKat.slug, produkt.name);
              return (
                <ProduktKarte
                  key={produkt.name}
                  produkt={produkt}
                  akzent={aktKat.akzent}
                  bg={aktKat.bg}
                  sel={selection[k] || {}}
                  setSel={(field, val) => setSelection(prev => ({ ...prev, [k]: { ...prev[k], [field]: val } }))}
                  onAdd={() => addToCart(aktKat, produkt)}
                  cardKey={k}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ INFO-BANNER ═══ */}
      <section style={{ background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 100%)", padding: "4rem 0" }}>
        <div className="site-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#6FA3FE", marginBottom: "1rem" }}>
              Bestellung &amp; Kostenübernahme
            </p>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "white",
              letterSpacing: "-0.02em", marginBottom: "1rem", lineHeight: 1.2 }}>
              Kein Standard-Shop.<br />Ein Teil des Hilfesystems.
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
              Einrichtungen und Jugendämter können mit Bedarfsnachweis und Kostenträgerabrechnung bestellen.
              Private Bestellungen sind ebenfalls möglich — wir beraten Sie gerne.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a href="tel:+4930224543220" style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "1.125rem 1.25rem", background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px",
              textDecoration: "none", transition: "background 0.15s ease",
            }}>
              <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }}>Telefon</span>
              <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white" }}>+49 30 22 45 43 22</span>
            </a>
            <a href="mailto:hilfe@ankernetz.com" style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "1.125rem 1.25rem", background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px",
              textDecoration: "none",
            }}>
              <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }}>E-Mail</span>
              <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white" }}>hilfe@ankernetz.com</span>
            </a>
            {cartCount > 0 && (
              <button onClick={() => { setCartOpen(false); setCheckoutOpen(true); }} style={{
                padding: "1rem", background: "#6FA3FE", color: "#0b1828",
                border: "none", borderRadius: "4px", fontWeight: 800,
                fontSize: "0.9rem", cursor: "pointer", letterSpacing: "0.02em",
              }}>
                Warenkorb ({cartCount}) · {cartTotal.toFixed(2).replace(".", ",")} € →
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ═══ WARENKORB SIDEBAR ═══ */}
      {cartOpen && (
        <>
          <div onClick={() => setCartOpen(false)} style={{
            position: "fixed", inset: 0, background: "rgba(11,24,40,0.5)",
            zIndex: 990, backdropFilter: "blur(3px)",
          }} />
          <div style={{
            position: "fixed", right: 0, top: 0, bottom: 0, width: "min(420px, 100vw)",
            background: "white", zIndex: 995,
            boxShadow: "-12px 0 48px rgba(0,0,0,0.15)",
            display: "flex", flexDirection: "column",
          }}>
            <div style={{ padding: "1.5rem", borderBottom: "1px solid #e8ecf0",
              display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <ShoppingCart size={17} color="#1a3f6f" />
                <span style={{ fontWeight: 800, color: "#1a3f6f", fontSize: "1rem", letterSpacing: "-0.01em" }}>
                  Warenkorb
                </span>
                <span style={{ fontSize: "0.75rem", color: "rgba(26,63,111,0.4)", fontWeight: 500 }}>
                  ({cartCount} Artikel)
                </span>
              </div>
              <button onClick={() => setCartOpen(false)} style={{
                background: "none", border: "none", cursor: "pointer", display: "flex",
                color: "rgba(26,63,111,0.4)",
              }}><X size={18} /></button>
            </div>

            <div style={{ flex: 1, overflowY: "auto", padding: "1.25rem",
              display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {cart.length === 0 ? (
                <p style={{ color: "rgba(26,63,111,0.35)", fontSize: "0.875rem",
                  textAlign: "center", marginTop: "3rem" }}>
                  Noch keine Artikel im Warenkorb.
                </p>
              ) : cart.map((item, idx) => (
                <div key={idx} style={{
                  display: "flex", gap: "1rem", padding: "1rem",
                  border: "1px solid #e8ecf0", borderRadius: "4px",
                }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600, color: "#1a3f6f", fontSize: "0.875rem", marginBottom: "0.25rem" }}>
                      {item.produkt}
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "rgba(26,63,111,0.45)" }}>
                      {item.groesse} · {item.farbe}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.625rem" }}>
                      <button onClick={() => changeQty(idx, -1)} style={{
                        width: "24px", height: "24px", border: "1px solid #e8ecf0",
                        background: "white", cursor: "pointer", borderRadius: "2px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}><Minus size={11} color="#1a3f6f" /></button>
                      <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1a3f6f",
                        minWidth: "1.25rem", textAlign: "center" }}>{item.menge}</span>
                      <button onClick={() => changeQty(idx, 1)} style={{
                        width: "24px", height: "24px", border: "1px solid #e8ecf0",
                        background: "white", cursor: "pointer", borderRadius: "2px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}><Plus size={11} color="#1a3f6f" /></button>
                    </div>
                  </div>
                  <span style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "0.9375rem", flexShrink: 0 }}>
                    {(item.preis * item.menge).toFixed(2).replace(".", ",")} €
                  </span>
                </div>
              ))}
            </div>

            {cart.length > 0 && (
              <div style={{ padding: "1.25rem", borderTop: "1px solid #e8ecf0", background: "#fafbfc" }}>
                <div style={{ display: "flex", justifyContent: "space-between",
                  marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid #e8ecf0" }}>
                  <span style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.5)" }}>Gesamt</span>
                  <span style={{ fontWeight: 800, color: "#1a3f6f", fontSize: "1.125rem" }}>
                    {cartTotal.toFixed(2).replace(".", ",")} €
                  </span>
                </div>
                <button onClick={() => { setCartOpen(false); setCheckoutOpen(true); }} style={{
                  width: "100%", padding: "0.875rem", background: "#1a3f6f", color: "white",
                  border: "none", borderRadius: "3px", fontWeight: 700, fontSize: "0.875rem",
                  letterSpacing: "0.04em", textTransform: "uppercase", cursor: "pointer",
                }}>Zur Bestellung →</button>
                <p style={{ fontSize: "0.7rem", color: "rgba(26,63,111,0.35)",
                  textAlign: "center", marginTop: "0.75rem" }}>
                  Kostenlose Lieferung · Rechnung nach Erhalt
                </p>
              </div>
            )}
          </div>
        </>
      )}

      {/* ═══ CHECKOUT MODAL ═══ */}
      {checkoutOpen && (
        <>
          <div onClick={() => !submitted && setCheckoutOpen(false)} style={{
            position: "fixed", inset: 0, background: "rgba(11,24,40,0.6)",
            zIndex: 990, backdropFilter: "blur(4px)",
          }} />
          <div style={{
            position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            width: "min(540px, calc(100vw - 2rem))",
            background: "white", zIndex: 995,
            boxShadow: "0 24px 80px rgba(0,0,0,0.25)",
          }}>
            {submitted ? (
              <div style={{ padding: "4rem 2.5rem", textAlign: "center" }}>
                <div style={{ width: "64px", height: "64px",
                  border: "2px solid #22c55e", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.5rem" }}>
                  <Check size={28} color="#22c55e" />
                </div>
                <h3 style={{ fontSize: "1.375rem", fontWeight: 800, color: "#1a3f6f",
                  letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
                  Bestellung eingegangen.
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.55)",
                  lineHeight: 1.75, marginBottom: "2rem" }}>
                  Wir melden uns innerhalb von 24 Stunden.
                  Bei dringendem Bedarf: +49 30 22 45 43 22
                </p>
                <button onClick={() => { setCheckoutOpen(false); setCart([]); setSubmitted(false); }} style={{
                  padding: "0.75rem 2rem", background: "#1a3f6f", color: "white",
                  border: "none", borderRadius: "3px", fontWeight: 700,
                  letterSpacing: "0.04em", textTransform: "uppercase", cursor: "pointer",
                }}>Fertig</button>
              </div>
            ) : (
              <>
                <div style={{ padding: "1.25rem 1.5rem",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  borderBottom: "1px solid #e8ecf0" }}>
                  <span style={{ fontWeight: 800, color: "#1a3f6f", fontSize: "1rem",
                    letterSpacing: "-0.01em" }}>Bestellung abschließen</span>
                  <button onClick={() => setCheckoutOpen(false)} style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "rgba(26,63,111,0.4)", display: "flex",
                  }}><X size={18} /></button>
                </div>

                <div style={{ maxHeight: "75vh", overflowY: "auto" }}>
                  {/* Übersicht */}
                  <div style={{ padding: "1.25rem 1.5rem", background: "#f7f9fc",
                    borderBottom: "1px solid #e8ecf0" }}>
                    {cart.map((item, idx) => (
                      <div key={idx} style={{ display: "flex", justifyContent: "space-between",
                        fontSize: "0.8125rem", color: "#1a3f6f", padding: "0.25rem 0" }}>
                        <span style={{ color: "rgba(26,63,111,0.65)" }}>
                          {item.menge}× {item.produkt} ({item.groesse}, {item.farbe})
                        </span>
                        <span style={{ fontWeight: 600, flexShrink: 0, marginLeft: "1rem" }}>
                          {(item.preis * item.menge).toFixed(2).replace(".", ",")} €
                        </span>
                      </div>
                    ))}
                    <div style={{ display: "flex", justifyContent: "space-between",
                      marginTop: "0.75rem", paddingTop: "0.75rem",
                      borderTop: "1px solid #e8ecf0",
                      fontWeight: 800, color: "#1a3f6f", fontSize: "1rem" }}>
                      <span>Gesamt</span>
                      <span>{cartTotal.toFixed(2).replace(".", ",")} €</span>
                    </div>
                  </div>

                  {/* Formular */}
                  <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {[
                      { k: "name",        label: "Name *",                    type: "text",  placeholder: "Vor- und Nachname" },
                      { k: "einrichtung", label: "Einrichtung / Institution", type: "text",  placeholder: "Optional" },
                      { k: "email",       label: "E-Mail *",                  type: "email", placeholder: "ihre@email.de" },
                      { k: "telefon",     label: "Telefon",                   type: "tel",   placeholder: "Optional" },
                    ].map(f => (
                      <div key={f.k}>
                        <label style={{ fontSize: "0.72rem", fontWeight: 700,
                          color: "rgba(26,63,111,0.45)", letterSpacing: "0.1em",
                          textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                          {f.label}
                        </label>
                        <input type={f.type} placeholder={f.placeholder}
                          value={(form as Record<string, string>)[f.k]}
                          onChange={e => setForm(prev => ({ ...prev, [f.k]: e.target.value }))}
                          style={inputStyle} />
                      </div>
                    ))}
                    <div>
                      <label style={{ fontSize: "0.72rem", fontWeight: 700,
                        color: "rgba(26,63,111,0.45)", letterSpacing: "0.1em",
                        textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                        Notizen
                      </label>
                      <textarea placeholder="Besondere Anforderungen, Lieferadresse etc."
                        value={form.notizen}
                        onChange={e => setForm(prev => ({ ...prev, notizen: e.target.value }))}
                        rows={3} style={{ ...inputStyle, resize: "none" }} />
                    </div>

                    <button onClick={submitOrder} disabled={!form.name || !form.email || submitting}
                      style={{
                        width: "100%", padding: "0.875rem",
                        background: form.name && form.email ? "#1a3f6f" : "#e8ecf0",
                        color: form.name && form.email ? "white" : "rgba(26,63,111,0.3)",
                        border: "none", borderRadius: "3px", fontWeight: 700,
                        fontSize: "0.875rem", letterSpacing: "0.04em", textTransform: "uppercase",
                        cursor: form.name && form.email ? "pointer" : "not-allowed",
                      }}>
                      {submitting ? "Wird gesendet…" : "Bestellung absenden"}
                    </button>
                    <p style={{ fontSize: "0.7rem", color: "rgba(26,63,111,0.3)", textAlign: "center" }}>
                      Ihre Daten werden vertraulich behandelt.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}

    </main>
  );
}
