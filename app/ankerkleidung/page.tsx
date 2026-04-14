"use client";

import { useState, useMemo } from "react";
import {
  ShoppingCart, X, Plus, Minus, Check,
  Shirt, Wind, Feather, Footprints,
  Shield, Activity, Layers, Sun,
  Zap, Repeat, Move,
  Package, Gift, BookOpen, Droplets,
  EyeOff, Umbrella, AlignJustify,
  Tag, Heart, Link2, Anchor,
  Truck, FileText, SlidersHorizontal, Phone,
  Ruler, ChevronDown, Building2,
  Snowflake, Star, Box, ShoppingBag, Thermometer, CloudSun,
  EarOff, Waves, Brain,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── Farbkreise ───────────────────────────────────────────────── */
const farbenMap: Record<string, string> = {
  "Anthrazit": "#4b5563", "Navy": "#1e3a5f", "Grau": "#9ca3af",
  "Weiß": "#f3f4f6", "Hellgrau": "#d1d5db", "Blau": "#3b82f6",
  "Dunkelblau": "#1e3a5f", "Dunkelgrau": "#374151", "Schwarz": "#1a3f6f",
  "Beige": "#d4b896", "Hellblau": "#93c5fd", "Rosa": "#f9a8d4",
  "Grün": "#86efac", "Gelb": "#fde68a", "Neutral": "#9ca3af",
  "Frei wählbar": "#6FA3FE", "Gemeinsam wählbar": "#FEC274",
  "Warm, weich": "#d4b896", "—": "#e5e7eb",
};

/* ─── Daten ────────────────────────────────────────────────────── */
const kategorien: {
  slug: string; titel: string; akzent: string; bg: string; beschreibung: string;
  produkte: {
    name: string; material: string; groessen: string[]; farben: string[];
    preis: number; beschreibung: string; icon: LucideIcon;
    badge?: string;
  }[];
}[] = [
  {
    slug: "adhs", titel: "ADHS & Hyperaktivität", akzent: "#6FA3FE", bg: "rgba(111,163,254,0.08)",
    beschreibung: "Reizarm, funktional, komfortabel.",
    produkte: [
      { name: "Basishose Komfort",     badge: "Bestseller", icon: AlignJustify, material: "100% Bio-Baumwolle",   groessen: ["104","116","128","140","152","164"],             farben: ["Anthrazit","Navy","Grau"],   preis: 29.90, beschreibung: "Weicher Bund ohne Knöpfe, elastischer Schnitt, keine störenden Nähte." },
      { name: "Alltags-Shirt Reizarm", badge: "Beliebt",    icon: Shirt,        material: "Jersey Bio-Baumwolle",  groessen: ["104","116","128","140","152","164","S","M","L"], farben: ["Weiß","Hellgrau","Blau"],    preis: 19.90, beschreibung: "Ohne Aufdruck, nahtlos verarbeitet, angenehm auf der Haut." },
      { name: "Übergangsjacke Soft",                        icon: Wind,         material: "Fleece/Softshell",      groessen: ["116","128","140","152","164","S","M"],           farben: ["Navy","Grau"],              preis: 49.90, beschreibung: "Leicht, warm, einfach zu öffnen — kein Zipper-Stress." },
      { name: "Socken Komfort-Set",    badge: "Neu",         icon: Footprints,   material: "Bambus/Baumwolle",      groessen: ["23–26","27–30","31–34","35–38","39–42"],         farben: ["Grau","Weiß","Schwarz"],    preis: 14.90, beschreibung: "Ohne störende Zehennaht, rutschfest, langlebig." },
    ],
  },
  {
    slug: "trauma", titel: "Trauma & PTBS", akzent: "#FEC274", bg: "rgba(254,194,116,0.08)",
    beschreibung: "Weich, hüllend, sicher.",
    produkte: [
      { name: "Comfort-Hoodie",        badge: "Bestseller", icon: Shield,    material: "Fleece innen, Baumwolle außen",       groessen: ["116","128","140","152","164","S","M","L"], farben: ["Grau","Dunkelblau","Beige"],  preis: 54.90, beschreibung: "Besonders weich gefüttert, großer Kapuzen-Schutzraum." },
      { name: "Wohlfühl-Jogger",       badge: "Beliebt",    icon: Activity,  material: "French Terry Bio",                    groessen: ["116","128","140","152","164","S","M","L"], farben: ["Dunkelgrau","Navy","Schwarz"], preis: 39.90, beschreibung: "Kuschelig weich, gibt Halt ohne zu drücken." },
      { name: "Weighted Weste",        badge: "Empfohlen",  icon: Layers,    material: "Spezialmaterial mit Gewichtseinlage", groessen: ["116","128","140","152","164"],             farben: ["Grau","Dunkelblau"],         preis: 89.90, beschreibung: "Strukturgebend, beruhigend, dezentes Design." },
      { name: "Decken-Shirt Oversize",                      icon: Sun,       material: "100% Baumwolle schwer",               groessen: ["140","152","164","S","M","L","XL"],        farben: ["Beige","Weiß","Hellgrau"],   preis: 34.90, beschreibung: "Schweres, weiches Shirt mit Hülleffekt." },
    ],
  },
  {
    slug: "autismus", titel: "Autismus-Spektrum", akzent: "#6FA3FE", bg: "rgba(111,163,254,0.08)",
    beschreibung: "Keine Nähte, keine Etiketten.",
    produkte: [
      { name: "Sensory-Shirt Nahtlos",  badge: "Neu",      icon: Feather, material: "Bio-Baumwolle nahtlos gestrickt", groessen: ["104","116","128","140","152","164","S","M"], farben: ["Weiß","Grau","Hellblau"],  preis: 34.90, beschreibung: "Komplett nahtlos, keine Etiketten, angenehm auf empfindlicher Haut." },
      { name: "Hose Easy-Fit",                             icon: Repeat,  material: "Baumwoll-Stretch",                groessen: ["104","116","128","140","152","164"],         farben: ["Schwarz","Navy","Grau"],   preis: 39.90, beschreibung: "Gleicher Schnitt in allen Größen — Verlässlichkeit durch Konsistenz." },
      { name: "Kompressionsshirt",      badge: "Empfohlen",icon: Zap,     material: "Elastan-Mix",                     groessen: ["116","128","140","152","164","S","M"],       farben: ["Grau","Dunkelblau"],      preis: 44.90, beschreibung: "Leichter Kompressionsdruck — strukturgebend und beruhigend." },
      { name: "Schuhe Klettverschluss",                    icon: Move,    material: "Leder/Textil",                    groessen: ["28","30","32","34","36","38","40"],          farben: ["Schwarz","Grau"],         preis: 59.90, beschreibung: "Einfach anzuziehen, ohne Schnürsenkel, stabiler Halt." },
    ],
  },
  {
    slug: "vernachlaessigung", titel: "Erstausstattung", akzent: "#FEC274", bg: "rgba(254,194,116,0.08)",
    beschreibung: "Vollständig, würdevoll, passend.",
    produkte: [
      { name: "Starter-Set Kind",        badge: "Empfohlen", icon: Package,  material: "Verschiedene", groessen: ["104–128","128–152"],   farben: ["Neutral"], preis: 129.90, beschreibung: "3 Shirts, 2 Hosen, Unterwäsche-Set, Socken, Jacke." },
      { name: "Starter-Set Jugendliche",                     icon: Gift,     material: "Verschiedene", groessen: ["152–164","S/M","M/L"], farben: ["Neutral"], preis: 159.90, beschreibung: "Vollständige Erstausstattung — altersgerecht und würdevoll." },
      { name: "Schul-Paket",                                 icon: BookOpen, material: "Verschiedene", groessen: ["Universal"],           farben: ["Neutral"], preis: 89.90,  beschreibung: "Rucksack, Federmäppchen, Schulkleidung-Set." },
      { name: "Hygiene-Starter",          badge: "Neu",      icon: Droplets, material: "—",            groessen: ["Universal"],           farben: ["—"],       preis: 24.90,  beschreibung: "Grundlegende Hygieneartikel als Ergänzung." },
    ],
  },
  {
    slug: "angststoerungen", titel: "Angststörungen", akzent: "#6FA3FE", bg: "rgba(111,163,254,0.08)",
    beschreibung: "Dezent, unauffällig, sicher.",
    produkte: [
      { name: "Unauffällig-Set Basic", badge: "Bestseller", icon: EyeOff,       material: "Bio-Baumwolle",      groessen: ["116","128","140","152","164","S","M"],       farben: ["Grau","Navy","Schwarz"],      preis: 49.90, beschreibung: "Ohne Logos — unsichtbar im positiven Sinne." },
      { name: "Kapuzenpulli Rückzug",                       icon: Umbrella,     material: "Baumwolle French Terry", groessen: ["128","140","152","164","S","M","L"],     farben: ["Dunkelgrau","Schwarz","Navy"], preis: 44.90, beschreibung: "Große Kapuze als Rückzugsraum, weich und warm." },
      { name: "Leggings Allrounder",   badge: "Beliebt",    icon: AlignJustify, material: "Baumwolle-Stretch",  groessen: ["104","116","128","140","152","164","S","M","L"], farben: ["Schwarz","Dunkelgrau","Navy"], preis: 24.90, beschreibung: "Bequem, dehnbar, unauffällig." },
      { name: "Layering-Shirt",                             icon: Layers,       material: "Jersey Bio",         groessen: ["116","128","140","152","164","S","M","L"],   farben: ["Weiß","Grau","Beige"],       preis: 19.90, beschreibung: "Zum Layern — gibt zusätzliche Sicherheit." },
    ],
  },
  {
    slug: "bindungsstoerungen", titel: "Bindungsstörungen", akzent: "#FEC274", bg: "rgba(254,194,116,0.08)",
    beschreibung: "Erkennbar, persönlich, verbindend.",
    produkte: [
      { name: "Personalisiertes Shirt", badge: "Neu",       icon: Tag,    material: "Bio-Baumwolle",    groessen: ["104","116","128","140","152","164"],      farben: ["Hellblau","Rosa","Grün","Gelb"], preis: 29.90, beschreibung: "Mit individuellem Namen — Identität und Zugehörigkeit." },
      { name: "Lieblings-Hoodie",       badge: "Bestseller",icon: Heart,  material: "Fleece",           groessen: ["116","128","140","152","164","S","M","L"], farben: ["Frei wählbar"],                 preis: 54.90, beschreibung: "In der Lieblingsfarbe — stärkt das Selbstgefühl." },
      { name: "Matching-Set Betreuer",                      icon: Link2,  material: "Bio-Baumwolle",    groessen: ["Kind + Erwachsen"],                      farben: ["Gemeinsam wählbar"],            preis: 39.90, beschreibung: "Set für Kind und Bezugsbetreuer — visueller Beziehungsanker." },
      { name: "Übergangs-Schal",                            icon: Anchor, material: "Merino-Mix weich", groessen: ["Universal"],                             farben: ["Warm, weich"],                  preis: 24.90, beschreibung: "Weicher Schal als Übergangsobjekt." },
    ],
  },
  {
    slug: "erstbekleidung", titel: "Erstbekleidungspakete", akzent: "#22c55e", bg: "rgba(34,197,94,0.07)",
    beschreibung: "Komplettausstattung für den ersten Tag — würdevoll und vollständig.",
    produkte: [
      { name: "Erstpaket Klein",      badge: "Bestseller", icon: Package,     material: "Gemischte Materialien", groessen: ["80–104","104–116"],         farben: ["Neutral"],       preis: 119.90, beschreibung: "5 Oberteile, 3 Hosen, Unterwäsche, Socken, Jacke — alles für den Start." },
      { name: "Erstpaket Mittel",     badge: "Empfohlen",  icon: Box,         material: "Gemischte Materialien", groessen: ["116–128","128–140"],         farben: ["Neutral"],       preis: 139.90, beschreibung: "Vollständige Ausstattung für Schulkinder — altersgerecht und praktisch." },
      { name: "Erstpaket Groß",                            icon: ShoppingBag, material: "Gemischte Materialien", groessen: ["140–152","152–164","S/M"],   farben: ["Frei wählbar"],  preis: 159.90, beschreibung: "Komplettset für Jugendliche — inkl. Freizeitkleidung und Schuloutfit." },
      { name: "Erstpaket Premium",    badge: "Neu",        icon: Star,        material: "Premium Bio-Baumwolle", groessen: ["Alle Größen wählbar"],       farben: ["Frei wählbar"],  preis: 199.90, beschreibung: "Premium-Ausstattung mit individueller Beratung und Größenanpassung." },
    ],
  },
  {
    slug: "winterpauschale", titel: "Winterpauschale", akzent: "#93c5fd", bg: "rgba(147,197,253,0.08)",
    beschreibung: "Warm, wetterfest und vollständig für die kalte Jahreszeit.",
    produkte: [
      { name: "Winterpaket Kleinkind",  badge: "Bestseller", icon: Snowflake,   material: "Fleece + Außenmaterial", groessen: ["80–104","104–116"],       farben: ["Navy","Dunkelgrau","Schwarz"], preis: 149.90, beschreibung: "Winterjacke, Thermohose, Mütze, Handschuhe, Schal, Thermosocken." },
      { name: "Winterpaket Kind",       badge: "Empfohlen",  icon: Thermometer, material: "Softshell + Fleece",     groessen: ["116–128","128–140"],       farben: ["Navy","Dunkelgrau","Anthrazit"], preis: 169.90, beschreibung: "Komplettes Winteroutfit inkl. wasserabweisender Jacke und Thermobase." },
      { name: "Winterpaket Jugend",                          icon: Wind,        material: "Funktionsmaterial",      groessen: ["140–152","152–164","S/M"], farben: ["Schwarz","Navy","Dunkelgrau"],  preis: 189.90, beschreibung: "Jugend-Winterset mit wärmender Funktionsjacke und Outdoorhose." },
      { name: "Winterjacke Einzeln",    badge: "Neu",        icon: Shield,      material: "Softshell wasserdicht",  groessen: ["104","116","128","140","152","164","S","M","L"], farben: ["Navy","Schwarz","Anthrazit"], preis: 79.90, beschreibung: "Hochwertige Winterjacke — wasserdicht, winddicht, warm." },
    ],
  },
  {
    slug: "sommerpauschale", titel: "Sommerpauschale", akzent: "#f97316", bg: "rgba(249,115,22,0.07)",
    beschreibung: "Leicht, atmungsaktiv und feriengerecht für warme Monate.",
    produkte: [
      { name: "Sommerpaket Kleinkind",  badge: "Bestseller", icon: Sun,       material: "100% Bio-Baumwolle leicht", groessen: ["80–104","104–116"],       farben: ["Hellblau","Hellgrau","Weiß"],  preis: 99.90,  beschreibung: "3 T-Shirts, 2 Shorts, Sonnenhut, Badesachen, leichte Sandalen." },
      { name: "Sommerpaket Kind",       badge: "Beliebt",    icon: CloudSun,  material: "Leichtgewebe atmungsaktiv", groessen: ["116–128","128–140"],       farben: ["Hellblau","Weiß","Grün"],      preis: 119.90, beschreibung: "Sommeroutfit für den Schulalltag und Freizeit — UV-schützende Qualität." },
      { name: "Sommerpaket Jugend",                          icon: Feather,   material: "Jersey + Leinen-Mix",       groessen: ["140–152","152–164","S/M"], farben: ["Frei wählbar"],                preis: 139.90, beschreibung: "Komplettes Sommerpaket für Jugendliche inkl. Schwimmbekleidung." },
      { name: "Sonnenschutz-Set",       badge: "Neu",        icon: Umbrella,  material: "UV 50+ Funktionsmaterial",  groessen: ["Universal"],               farben: ["Hellblau","Weiß"],             preis: 39.90,  beschreibung: "Sonnenhut, Schutzkragen und UV-Shirt — Ergänzung zu jedem Sommerpaket." },
    ],
  },
];

const badgeLabels: Record<string, string> = {
  "Bestseller": "BESTSELLER",
  "Beliebt":    "BELIEBT",
  "Empfohlen":  "EMPFOHLEN",
  "Neu":        "NEU EINGETROFFEN",
};

const zahlungsarten = [
  { id: "vorkasse",  label: "Vorkasse",   sub: "Banküberweisung",  icon: Building2, color: "#1a3f6f" },
  { id: "paypal",    label: "PayPal",     sub: "Sicher & schnell", color: "#003087" },
  { id: "applepay",  label: "Apple Pay",  sub: "Schnell & sicher", color: "#000000" },
  { id: "googlepay", label: "Google Pay", sub: "Mit Google-Konto", color: "#4285F4" },
];

interface CartItem { kategorie: string; produkt: string; groesse: string; farbe: string; menge: number; preis: number; }
interface Sel { [k: string]: { groesse?: string; farbe?: string }; }

/* ─── Produkt-Karte (Luxury-Stil) ─────────────────────────────── */
function ProduktKarte({ produkt, kat, onAdd, sel, setSel, wished, onWish }:
  { produkt: typeof kategorien[0]["produkte"][0]; kat: typeof kategorien[0];
    onAdd: () => void; sel: { groesse?: string; farbe?: string };
    setSel: (f: "groesse"|"farbe", v: string) => void;
    wished: boolean; onWish: () => void; }) {
  const [hovered, setHovered] = useState(false);
  const [sizeGuide, setSizeGuide] = useState(false);
  const ready = !!(sel.groesse && sel.farbe);
  const Icon = produkt.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: "#ffffff", display: "flex", flexDirection: "column" }}
    >
      {/* ── Zeile über dem Bild: Badge + Herz ── */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        minHeight: "2rem", marginBottom: "0.5rem",
      }}>
        {produkt.badge ? (
          <div>
            <span style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase",
              fontWeight: 700, color: kat.akzent }}>
              {badgeLabels[produkt.badge] ?? produkt.badge}
            </span>
            <div style={{ width: "100%", height: "1.5px", background: kat.akzent, marginTop: "2px" }} />
            <div style={{ width: 0, height: 0, margin: "0 auto",
              borderLeft: "5px solid transparent", borderRight: "5px solid transparent",
              borderTop: `5px solid ${kat.akzent}` }} />
          </div>
        ) : <div />}
        <button
          onClick={e => { e.stopPropagation(); onWish(); }}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0",
            display: "flex", marginLeft: "0.5rem", flexShrink: 0 }}
        >
          <Heart size={17} color={wished ? "#ef4444" : "#1a3f6f"}
            fill={wished ? "#ef4444" : "none"} strokeWidth={1.5} />
        </button>
      </div>

      {/* ── Bildbereich ── */}
      <div style={{ position: "relative", height: "280px", overflow: "hidden",
        background: "linear-gradient(155deg, #eef2f7 0%, #f4f7fb 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "default" }}>
        {/* Icon */}
        <Icon size={64} color="#1a3f6f" strokeWidth={0.9}
          style={{ opacity: hovered ? 0.85 : 0.55, transition: "opacity 0.25s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)" } as React.CSSProperties} />

        {/* Größen-Overlay bei Hover */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "rgba(26,63,111,0.95)",
          backdropFilter: "blur(6px)",
          padding: "0.625rem 0.75rem",
          transform: hovered ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.22s ease",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
            marginBottom: "0.375rem" }}>
            <p style={{ fontSize: "9px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.12em",
              textTransform: "uppercase", fontWeight: 600 }}>Verfügbare Größen</p>
            <button onClick={() => setSizeGuide(true)}
              style={{ fontSize: "9px", color: "rgba(255,255,255,0.5)", background: "none", border: "none",
                cursor: "pointer", display: "flex", alignItems: "center", gap: "2px",
                letterSpacing: "0.08em", textTransform: "uppercase", padding: 0 }}>
              <Ruler size={9} /> Tabelle
            </button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
            {produkt.groessen.map(g => (
              <button key={g} onClick={() => setSel("groesse", g)} style={{
                fontSize: "10px", padding: "2px 7px",
                border: sel.groesse === g ? `1.5px solid ${kat.akzent}` : "1px solid rgba(255,255,255,0.25)",
                background: sel.groesse === g ? kat.akzent : "rgba(255,255,255,0.1)",
                color: "white",
                cursor: "pointer", fontWeight: sel.groesse === g ? 700 : 400,
                letterSpacing: "0.02em",
              }}>{g}</button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Produktinfo ── */}
      <div style={{ paddingTop: "0.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: "9px", fontWeight: 700, color: kat.akzent,
          letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.25rem",
          display: "flex", alignItems: "center", gap: "0.3rem" }}>
          <span style={{ width: "5px", height: "5px", borderRadius: "50%",
            background: kat.akzent, flexShrink: 0, display: "inline-block" }} />
          {kat.titel}
        </p>
        <h3 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1a3f6f",
          marginBottom: "0.2rem", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
          {produkt.name}
        </h3>
        <p style={{ fontSize: "0.875rem", color: "#1a3f6f", marginBottom: "0.625rem" }}>
          € {produkt.preis.toFixed(2).replace(".", ",")}
        </p>

        {/* Farbkreise */}
        <div style={{ display: "flex", gap: "0.35rem", marginBottom: "0.625rem", flexWrap: "wrap" }}>
          {produkt.farben.map(f => {
            const hex = farbenMap[f] ?? "#9ca3af";
            const isLight = ["Weiß","Hellgrau","Neutral","—"].includes(f);
            return (
              <button key={f} onClick={() => setSel("farbe", f)} title={f} style={{
                width: "16px", height: "16px", borderRadius: "50%", background: hex,
                border: sel.farbe === f ? "2px solid #1a3f6f" : isLight ? "1px solid rgba(0,0,0,0.2)" : "1.5px solid transparent",
                outline: sel.farbe === f ? "2px solid white" : "none",
                outlineOffset: "-2px", cursor: "pointer",
                boxShadow: isLight ? "inset 0 0 0 1px rgba(0,0,0,0.1)" : "none",
              }} />
            );
          })}
          {sel.farbe && (
            <span style={{ fontSize: "9px", color: "#6b7280", alignSelf: "center",
              letterSpacing: "0.04em" }}>{sel.farbe}</span>
          )}
        </div>

        {/* Warenkorb-Button */}
        <div style={{ marginTop: "auto" }}>
          {sel.groesse ? (
            <button onClick={onAdd} disabled={!ready} style={{
              width: "100%", padding: "0.5rem 0",
              background: ready ? "#1a3f6f" : "transparent",
              color: ready ? "white" : "rgba(0,0,0,0.35)",
              border: ready ? "none" : "1px solid rgba(0,0,0,0.15)",
              fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", cursor: ready ? "pointer" : "default",
              transition: "all 0.15s ease",
            }}>
              {ready ? "In den Warenkorb" : "Farbe wählen"}
            </button>
          ) : (
            <div style={{ height: "30px" }} />
          )}
        </div>
      </div>

      {/* ── Größentabelle Modal ── */}
      {sizeGuide && (
        <>
          <div onClick={() => setSizeGuide(false)} style={{ position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.4)", zIndex: 1100, backdropFilter: "blur(3px)" }} />
          <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            width: "min(480px, calc(100vw - 2rem))", background: "white", zIndex: 1101,
            boxShadow: "0 20px 60px rgba(0,0,0,0.2)", overflow: "hidden" }}>
            <div style={{ padding: "1.125rem 1.5rem", borderBottom: "1px solid #e8ecf0",
              display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontWeight: 800, color: "#1a3f6f", fontSize: "0.9375rem" }}>Größentabelle</span>
              <button onClick={() => setSizeGuide(false)} style={{ background: "none", border: "none",
                cursor: "pointer", color: "#6b7280", display: "flex" }}><X size={18} /></button>
            </div>
            <div style={{ padding: "1.5rem", overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8125rem" }}>
                <thead>
                  <tr style={{ background: "#f9fafb" }}>
                    {["Größe","Alter (ca.)","Körpergröße","Gewicht (ca.)"].map(h => (
                      <th key={h} style={{ padding: "0.625rem 0.875rem", textAlign: "left",
                        fontWeight: 700, color: "#1a3f6f", fontSize: "0.72rem",
                        letterSpacing: "0.08em", textTransform: "uppercase",
                        borderBottom: "1px solid #e5e7eb" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["104","3–4 J.","98–104 cm","15–18 kg"],
                    ["116","5–6 J.","110–116 cm","18–22 kg"],
                    ["128","7–8 J.","122–128 cm","22–27 kg"],
                    ["140","9–10 J.","134–140 cm","27–33 kg"],
                    ["152","11–12 J.","146–152 cm","33–42 kg"],
                    ["164","13–14 J.","158–164 cm","42–52 kg"],
                    ["S","XS–S","160–168 cm","50–62 kg"],
                    ["M","M","168–176 cm","62–74 kg"],
                    ["L","L–XL","176–184 cm","74–90 kg"],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #f3f4f6",
                      background: i % 2 === 0 ? "white" : "#f9fafb" }}>
                      {row.map((cell, j) => (
                        <td key={j} style={{ padding: "0.5rem 0.875rem",
                          color: j === 0 ? "#1a3f6f" : "#6b7280",
                          fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ fontSize: "0.72rem", color: "#9ca3af", marginTop: "1rem" }}>
                Bei Unsicherheit empfehlen wir die nächst größere Größe.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ─── Zahlungsart-Button ───────────────────────────────────────── */
function ZahlungButton({ z, active, onClick }: {
  z: typeof zahlungsarten[0]; active: boolean; onClick: () => void;
}) {
  const Icon = z.icon;
  return (
    <button onClick={onClick} style={{
      flex: 1, minWidth: "110px", padding: "0.875rem 0.75rem",
      border: active ? `2px solid #1a3f6f` : "1.5px solid #e8ecf0",
      borderRadius: "4px", background: active ? "rgba(26,63,111,0.04)" : "white",
      cursor: "pointer", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: "0.375rem",
      transition: "all 0.15s ease",
    }}>
      {z.id === "vorkasse" && Icon && (
        <Icon size={20} color={active ? "#1a3f6f" : "#9ca3af"} strokeWidth={1.5} />
      )}
      {z.id === "paypal" && (
        <div style={{ width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <rect width="24" height="24" rx="3" fill={active ? "#003087" : "#e8ecf0"} />
            <text x="3" y="17" fill="white" fontSize="11" fontWeight="800" fontFamily="Arial">P</text>
            <text x="9" y="17" fill={active ? "#009cde" : "#aaa"} fontSize="11" fontWeight="800" fontFamily="Arial">P</text>
          </svg>
        </div>
      )}
      {z.id === "applepay" && (
        <div style={{ width: "40px", height: "20px", background: active ? "#000" : "#e8ecf0",
          borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg viewBox="0 0 40 20" width="40" height="20">
            <text x="6" y="14" fill="white" fontSize="9" fontWeight="600" fontFamily="-apple-system, sans-serif">Pay</text>
            <circle cx="3" cy="10" r="2.5" fill="white" />
          </svg>
        </div>
      )}
      {z.id === "googlepay" && (
        <div style={{ width: "48px", height: "20px", background: active ? "#fff" : "#e8ecf0",
          borderRadius: "3px", border: active ? "1px solid #e8ecf0" : "none",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "2px" }}>
          {(["G","o","o","g"] as string[]).map((l, i) => (
            <span key={i} style={{ fontSize: "8px", fontWeight: 700,
              color: active ? (["#4285F4","#EA4335","#FBBC05","#4285F4"] as string[])[i] : "#aaa",
              fontFamily: "Arial", lineHeight: "1" }}>{l}</span>
          ))}
          <span style={{ fontSize: "8px", fontWeight: 600, color: active ? "#5f6368" : "#aaa", fontFamily: "Arial" }}> Pay</span>
        </div>
      )}
      <span style={{ fontSize: "0.7rem", fontWeight: 700, color: active ? "#1a3f6f" : "#9ca3af",
        letterSpacing: "0.03em" }}>{z.label}</span>
      <span style={{ fontSize: "0.6rem", color: active ? "rgba(26,63,111,0.5)" : "#c4c9d0" }}>{z.sub}</span>
    </button>
  );
}

/* ─── Bedürfnis-Mapping ────────────────────────────────────────── */
const beduerfnisse: { id: string; label: string; icon: LucideIcon; slugs: string[] }[] = [
  { id: "gerausche",       label: "Geräusche reduzieren", icon: EarOff,      slugs: ["autismus","adhs","angststoerungen"] },
  { id: "sensorik",        label: "Sensorik beruhigen",   icon: Waves,       slugs: ["autismus","adhs","trauma"] },
  { id: "geborgenheit",    label: "Geborgenheit & Halt",  icon: Heart,       slugs: ["trauma","bindungsstoerungen","angststoerungen"] },
  { id: "bewegung",        label: "Bewegungsdrang",        icon: Footprints,  slugs: ["adhs"] },
  { id: "konzentration",   label: "Konzentration",         icon: Brain,       slugs: ["adhs","autismus"] },
  { id: "erstausstattung", label: "Erstausstattung",       icon: Shirt,       slugs: ["vernachlaessigung","erstbekleidung"] },
  { id: "saisonal",        label: "Saisonal",              icon: Thermometer, slugs: ["winterpauschale","sommerpauschale"] },
  { id: "schmerz",         label: "Schmerzauslöser",       icon: Zap,         slugs: ["autismus","angststoerungen","trauma"] },
];

/* ─── Hauptseite ───────────────────────────────────────────────── */
export default function AnkerkleidungPage() {
  const [filterKats, setFilterKats]     = useState<Set<string>>(new Set());
  const [aktBeduerfnis, setAktBeduerfnis] = useState<string | null>(null);
  const [selection, setSelection]       = useState<Sel>({});
  const [wished, setWished]             = useState<Set<string>>(new Set());
  const [sort, setSort]                 = useState<"default"|"asc"|"desc">("default");
  const [cart, setCart]                 = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen]         = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [zahlung, setZahlung]           = useState("vorkasse");
  const [form, setForm]                 = useState({ name: "", einrichtung: "", email: "", telefon: "", notizen: "" });
  const [submitted, setSubmitted]       = useState(false);
  const [submitting, setSubmitting]     = useState(false);

  const cartTotal = cart.reduce((s, i) => s + i.preis * i.menge, 0);
  const cartCount = cart.reduce((s, i) => s + i.menge, 0);

  /* Alle Produkte flach (gefiltert + sortiert) */
  const allProdukte = useMemo(() => {
    const flat: Array<typeof kategorien[0]["produkte"][0] & { kat: typeof kategorien[0] }> = [];
    for (const k of kategorien) {
      if (filterKats.size === 0 || filterKats.has(k.slug)) {
        for (const p of k.produkte) flat.push({ ...p, kat: k });
      }
    }
    if (sort === "asc")  flat.sort((a, b) => a.preis - b.preis);
    if (sort === "desc") flat.sort((a, b) => b.preis - a.preis);
    return flat;
  }, [filterKats, sort]);

  function pKey(katSlug: string, name: string) { return `${katSlug}__${name}`; }

  function toggleFilter(slug: string) {
    setFilterKats(prev => {
      const n = new Set(prev);
      n.has(slug) ? n.delete(slug) : n.add(slug);
      return n;
    });
  }

  function selectBeduerfnis(id: string) {
    if (aktBeduerfnis === id) {
      // Deselect → alle Filter zurücksetzen
      setAktBeduerfnis(null);
      setFilterKats(new Set());
    } else {
      const b = beduerfnisse.find(b => b.id === id);
      if (!b) return;
      setAktBeduerfnis(id);
      setFilterKats(new Set(b.slugs));
    }
  }

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
    const zahlungLabel = zahlungsarten.find(z => z.id === zahlung)?.label ?? zahlung;
    const items = cart.map(i => `• ${i.produkt} | ${i.groesse} | ${i.farbe} | ${i.menge}× | ${(i.preis * i.menge).toFixed(2)} €`).join("\n");
    const text = `🛍 <b>Neue Bestellung — Ankerkleidung</b>\n\n<b>Name:</b> ${form.name}\n<b>Einrichtung:</b> ${form.einrichtung || "—"}\n<b>E-Mail:</b> ${form.email}\n<b>Telefon:</b> ${form.telefon || "—"}\n<b>Zahlungsart:</b> ${zahlungLabel}\n\n<b>Artikel:</b>\n${items}\n\n<b>Gesamt:</b> ${cartTotal.toFixed(2)} €${form.notizen ? `\n\n<b>Notizen:</b> ${form.notizen}` : ""}`;
    try { await fetch("/api/order", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text }) }); } catch { /**/ }
    setSubmitted(true); setSubmitting(false);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "0.6rem 0.875rem", border: "1px solid rgba(26,63,111,0.15)",
    borderRadius: "3px", fontSize: "0.875rem", color: "#1a3f6f", outline: "none",
    boxSizing: "border-box", background: "#fafbfc", fontFamily: "inherit",
  };

  return (
    <main style={{ background: "#ffffff", paddingTop: "56px" }}>

      {/* ══ SEITEN-HEADER ══ */}
      <div style={{ borderBottom: "1px solid #dde4ee",
        background: "linear-gradient(180deg, #f4f7fb 0%, #ffffff 100%)", padding: "2rem 0" }}>
        <div className="site-container">
          <p style={{ fontSize: "9px", color: "#6FA3FE", letterSpacing: "0.18em",
            textTransform: "uppercase", fontWeight: 700, marginBottom: "0.5rem" }}>
            Ankernetz — Spezialisierte Kleidung
          </p>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1a3f6f",
            letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "0.5rem" }}>
            Kleidung,{" "}
            <span style={{ color: "#6FA3FE" }}>die versteht.</span>
          </h1>
          <p style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.55)", maxWidth: "52ch" }}>
            Entwickelt mit Fachkräften der Kinder- und Jugendhilfe — für Kinder mit besonderen Bedürfnissen.
          </p>
        </div>
      </div>

      {/* ══ VALUE STRIP ══ */}
      <div style={{ background: "rgba(26,63,111,0.03)", borderBottom: "1px solid #dde4ee" }}>
        <div className="site-container" style={{ display: "flex", justifyContent: "space-between",
          padding: "0.875rem 0", flexWrap: "wrap", gap: "1rem" }}>
          {[
            { Icon: Truck,             text: "Kostenlose Lieferung" },
            { Icon: FileText,          text: "Kostenträgerabrechnung möglich" },
            { Icon: SlidersHorizontal, text: "Individuelle Bedarfsermittlung" },
            { Icon: Phone,             text: "+49 30 22 45 43 22" },
          ].map(v => (
            <div key={v.text} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <v.Icon size={14} color="#6FA3FE" strokeWidth={1.75} />
              <span style={{ fontSize: "0.75rem", color: "rgba(26,63,111,0.6)", fontWeight: 500 }}>{v.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══ MAIN: SIDEBAR + GRID ══ */}
      <div className="site-container" style={{ padding: "2.5rem 0 6rem" }}>
        <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start" }}>

          {/* ── SIDEBAR ── */}
          <aside style={{ width: "200px", flexShrink: 0, position: "sticky", top: "72px" }}>

            {/* Filtern Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
              paddingBottom: "1rem", borderBottom: "1px solid #dde4ee", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#6FA3FE",
                letterSpacing: "0.18em", textTransform: "uppercase" }}>Filtern</span>
              {filterKats.size > 0 && (
                <button onClick={() => setFilterKats(new Set())} style={{
                  fontSize: "10px", color: "#6b7280", background: "none", border: "none",
                  cursor: "pointer", letterSpacing: "0.08em", textTransform: "uppercase",
                  fontWeight: 600, padding: 0, textDecoration: "underline" }}>
                  Löschen
                </button>
              )}
            </div>

            {/* Kategorien */}
            <div style={{ marginBottom: "2rem" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, color: "#1a3f6f",
                letterSpacing: "0.14em", textTransform: "uppercase",
                marginBottom: "1rem", display: "flex", alignItems: "center",
                justifyContent: "space-between", cursor: "pointer" }}>
                Kategorien
                <ChevronDown size={12} color="#6b7280" />
              </p>
              {kategorien.map(k => (
                <label key={k.slug} style={{ display: "flex", alignItems: "center",
                  justifyContent: "space-between", cursor: "pointer",
                  marginBottom: "0.625rem", gap: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <input
                      type="checkbox"
                      checked={filterKats.has(k.slug)}
                      onChange={() => toggleFilter(k.slug)}
                      style={{ width: "13px", height: "13px", cursor: "pointer",
                        accentColor: "#1a3f6f" }}
                    />
                    <span style={{ fontSize: "12px", color: filterKats.has(k.slug) ? "#1a3f6f" : "#6b7280",
                      fontWeight: filterKats.has(k.slug) ? 600 : 400,
                      lineHeight: 1.3 }}>
                      {k.titel}
                    </span>
                  </div>
                  <span style={{ fontSize: "10px", color: "#9ca3af", flexShrink: 0 }}>
                    {k.produkte.length}
                  </span>
                </label>
              ))}
            </div>

            {/* Sortierung */}
            <div style={{ paddingTop: "1.25rem", borderTop: "1px solid #e5e7eb" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, color: "#1a3f6f",
                letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.875rem" }}>
                Sortierung
              </p>
              {[
                { value: "default", label: "Standard" },
                { value: "asc",     label: "Preis aufsteigend" },
                { value: "desc",    label: "Preis absteigend" },
              ].map(opt => (
                <label key={opt.value} style={{ display: "flex", alignItems: "center",
                  gap: "0.5rem", marginBottom: "0.5rem", cursor: "pointer" }}>
                  <input type="radio" name="sort" value={opt.value}
                    checked={sort === opt.value}
                    onChange={() => setSort(opt.value as typeof sort)}
                    style={{ accentColor: "#1a3f6f", width: "12px", height: "12px" }} />
                  <span style={{ fontSize: "12px", color: sort === opt.value ? "#1a3f6f" : "#6b7280",
                    fontWeight: sort === opt.value ? 600 : 400 }}>
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          </aside>

          {/* ── PRODUKT-GRID ── */}
          <section style={{ flex: 1, minWidth: 0 }}>

            {/* ── Bedürfnis-Filter ── */}
            <div style={{
              marginBottom: "2rem",
              padding: "1.25rem 1.5rem",
              background: "white",
              border: "1px solid #e8edf5",
              borderRadius: "4px",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.1rem" }}>
                <p style={{ fontSize: "10px", fontWeight: 700, color: "#1a3f6f",
                  letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  Was wird benötigt?
                </p>
                {aktBeduerfnis !== null && (
                  <button
                    onClick={() => { setAktBeduerfnis(null); setFilterKats(new Set()); }}
                    style={{ background: "none", border: "none", cursor: "pointer",
                      fontSize: "11px", color: "#9ca3af", fontWeight: 500,
                      display: "flex", alignItems: "center", gap: "4px", padding: 0 }}
                  >
                    <X size={11} /> Filter zurücksetzen
                  </button>
                )}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {/* Alle */}
                <button
                  onClick={() => { setAktBeduerfnis(null); setFilterKats(new Set()); }}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center",
                    gap: "7px", padding: "12px 14px", width: "86px",
                    border: aktBeduerfnis === null ? "1.5px solid #1a3f6f" : "1.5px solid #e8edf5",
                    borderRadius: "4px", cursor: "pointer",
                    background: aktBeduerfnis === null ? "#1a3f6f" : "#fafbfd",
                    transition: "all 0.15s",
                    boxShadow: aktBeduerfnis === null ? "0 2px 10px rgba(26,63,111,0.18)" : "none",
                  }}
                  onMouseEnter={e => { if (aktBeduerfnis !== null) { (e.currentTarget as HTMLElement).style.borderColor = "#1a3f6f"; (e.currentTarget as HTMLElement).style.background = "#f4f7fb"; } }}
                  onMouseLeave={e => { if (aktBeduerfnis !== null) { (e.currentTarget as HTMLElement).style.borderColor = "#e8edf5"; (e.currentTarget as HTMLElement).style.background = "#fafbfd"; } }}
                >
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    background: aktBeduerfnis === null ? "rgba(255,255,255,0.2)" : "#eef2f8",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <SlidersHorizontal size={15} color={aktBeduerfnis === null ? "white" : "#1a3f6f"} strokeWidth={1.75} />
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 600, lineHeight: 1.2, textAlign: "center",
                    color: aktBeduerfnis === null ? "white" : "#374151" }}>
                    Alle
                  </span>
                </button>

                {beduerfnisse.map(b => {
                  const active = aktBeduerfnis === b.id;
                  const BIcon = b.icon;
                  return (
                    <button
                      key={b.id}
                      onClick={() => selectBeduerfnis(b.id)}
                      style={{
                        display: "flex", flexDirection: "column", alignItems: "center",
                        gap: "7px", padding: "12px 14px", width: "86px",
                        border: active ? "1.5px solid #1a3f6f" : "1.5px solid #e8edf5",
                        borderRadius: "4px", cursor: "pointer",
                        background: active ? "#eef4ff" : "#fafbfd",
                        transition: "all 0.15s",
                        boxShadow: active ? "0 2px 10px rgba(26,63,111,0.12)" : "none",
                      }}
                      onMouseEnter={e => { if (!active) { (e.currentTarget as HTMLElement).style.borderColor = "#1a3f6f"; (e.currentTarget as HTMLElement).style.background = "#f4f7fb"; } }}
                      onMouseLeave={e => { if (!active) { (e.currentTarget as HTMLElement).style.borderColor = "#e8edf5"; (e.currentTarget as HTMLElement).style.background = "#fafbfd"; } }}
                    >
                      <div style={{
                        width: "32px", height: "32px", borderRadius: "50%",
                        background: active ? "rgba(26,63,111,0.12)" : "#eef2f8",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "background 0.15s",
                      }}>
                        <BIcon size={15} color={active ? "#1a3f6f" : "#6b7280"} strokeWidth={1.75} />
                      </div>
                      <span style={{ fontSize: "11px", fontWeight: active ? 700 : 500,
                        lineHeight: 1.25, textAlign: "center",
                        color: active ? "#1a3f6f" : "#374151" }}>
                        {b.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Treffer + Warenkorb-Button */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
              marginBottom: "1.75rem", paddingBottom: "1rem", borderBottom: "1px solid #dde4ee" }}>
              <span style={{ fontSize: "12px", color: "rgba(26,63,111,0.45)", letterSpacing: "0.04em" }}>
                <strong style={{ color: "#6FA3FE", fontWeight: 700 }}>{allProdukte.length}</strong>
                {" "}Artikel
                {filterKats.size > 0 && <span style={{ color: "#FEC274" }}> · {filterKats.size} Filter aktiv</span>}
              </span>
              {cartCount > 0 && (
                <button onClick={() => setCartOpen(true)} style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  background: "#1a3f6f", color: "white", border: "none",
                  padding: "0.5rem 1rem", fontSize: "11px", fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>
                  <ShoppingCart size={13} />
                  {cartCount} Artikel · {cartTotal.toFixed(2).replace(".", ",")} €
                </button>
              )}
            </div>

            {/* Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2.5rem 1.5rem" }}>
              {allProdukte.map(produkt => {
                const k = pKey(produkt.kat.slug, produkt.name);
                return (
                  <ProduktKarte
                    key={k}
                    produkt={produkt}
                    kat={produkt.kat}
                    sel={selection[k] || {}}
                    setSel={(field, val) => setSelection(prev => ({ ...prev, [k]: { ...prev[k], [field]: val } }))}
                    onAdd={() => addToCart(produkt.kat, produkt)}
                    wished={wished.has(k)}
                    onWish={() => setWished(prev => { const n = new Set(prev); n.has(k) ? n.delete(k) : n.add(k); return n; })}
                  />
                );
              })}
            </div>

            {allProdukte.length === 0 && (
              <div style={{ textAlign: "center", padding: "4rem 0", color: "#9ca3af" }}>
                <p style={{ fontSize: "0.875rem" }}>Keine Artikel für diesen Filter.</p>
                <button onClick={() => setFilterKats(new Set())} style={{
                  marginTop: "1rem", fontSize: "11px", fontWeight: 700,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  background: "none", border: "none", cursor: "pointer",
                  color: "#1a3f6f", textDecoration: "underline" }}>
                  Filter zurücksetzen
                </button>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* ══ STICKY CART BAR ══ */}
      {cartCount > 0 && !cartOpen && !checkoutOpen && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 800,
          background: "#1a3f6f", borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "0.875rem 5.5rem 0.875rem 2rem", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "1rem",
          boxShadow: "0 -4px 24px rgba(0,0,0,0.2)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
            <ShoppingCart size={16} color="white" />
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8125rem" }}>
              {cartCount} Artikel im Warenkorb
            </span>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <span style={{ fontWeight: 800, color: "white", fontSize: "0.9375rem" }}>
              {cartTotal.toFixed(2).replace(".", ",")} €
            </span>
            <button onClick={() => setCartOpen(true)} style={{
              background: "white", color: "#1a3f6f", border: "none",
              padding: "0.5rem 1.125rem", fontWeight: 700, fontSize: "0.75rem",
              cursor: "pointer", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Warenkorb
            </button>
            <button onClick={() => setCheckoutOpen(true)} style={{
              background: "#1a3f6f", color: "white", border: "none",
              padding: "0.5rem 1.125rem", fontWeight: 700, fontSize: "0.75rem",
              cursor: "pointer", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Zur Kasse →
            </button>
          </div>
        </div>
      )}

      {/* ══ WARENKORB SIDEBAR ══ */}
      {cartOpen && (
        <>
          <div onClick={() => setCartOpen(false)} style={{ position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.4)", zIndex: 990, backdropFilter: "blur(3px)" }} />
          <div style={{ position: "fixed", right: 0, top: 0, bottom: 0, width: "min(420px, 100vw)",
            background: "white", zIndex: 995, boxShadow: "-12px 0 48px rgba(0,0,0,0.15)",
            display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "1.5rem", borderBottom: "1px solid #e5e7eb",
              display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <ShoppingCart size={17} color="#1a3f6f" />
                <span style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "0.9375rem",
                  letterSpacing: "0.04em", textTransform: "uppercase" }}>Warenkorb</span>
                <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>({cartCount})</span>
              </div>
              <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none",
                cursor: "pointer", color: "#6b7280", display: "flex" }}><X size={18} /></button>
            </div>
            <div style={{ flex: 1, overflowY: "auto", padding: "1.25rem",
              display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {cart.length === 0 ? (
                <p style={{ color: "#9ca3af", fontSize: "0.875rem", textAlign: "center", marginTop: "3rem" }}>
                  Noch keine Artikel.
                </p>
              ) : cart.map((item, idx) => (
                <div key={idx} style={{ display: "flex", gap: "1rem", padding: "1rem",
                  border: "1px solid #e5e7eb" }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600, color: "#1a3f6f", fontSize: "0.8125rem", marginBottom: "0.25rem" }}>
                      {item.produkt}
                    </p>
                    <p style={{ fontSize: "0.72rem", color: "#9ca3af" }}>{item.groesse} · {item.farbe}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.625rem" }}>
                      <button onClick={() => changeQty(idx, -1)} style={{ width: "24px", height: "24px",
                        border: "1px solid #e5e7eb", background: "white", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Minus size={11} color="#1a3f6f" />
                      </button>
                      <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1a3f6f",
                        minWidth: "1.25rem", textAlign: "center" }}>{item.menge}</span>
                      <button onClick={() => changeQty(idx, 1)} style={{ width: "24px", height: "24px",
                        border: "1px solid #e5e7eb", background: "white", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Plus size={11} color="#1a3f6f" />
                      </button>
                    </div>
                  </div>
                  <span style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "0.9375rem", flexShrink: 0 }}>
                    {(item.preis * item.menge).toFixed(2).replace(".", ",")} €
                  </span>
                </div>
              ))}
            </div>
            {cart.length > 0 && (
              <div style={{ padding: "1.25rem", borderTop: "1px solid #e5e7eb", background: "#fafafa" }}>
                <div style={{ display: "flex", justifyContent: "space-between",
                  marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid #e5e7eb" }}>
                  <span style={{ fontSize: "0.875rem", color: "#9ca3af" }}>Gesamt</span>
                  <span style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "1.125rem" }}>
                    {cartTotal.toFixed(2).replace(".", ",")} €
                  </span>
                </div>
                <button onClick={() => { setCartOpen(false); setCheckoutOpen(true); }} style={{
                  width: "100%", padding: "0.875rem", background: "#1a3f6f", color: "white",
                  border: "none", fontWeight: 700, fontSize: "0.8125rem",
                  letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>
                  Zur Kasse →
                </button>
                <p style={{ fontSize: "0.7rem", color: "#9ca3af", textAlign: "center", marginTop: "0.75rem" }}>
                  Kostenlose Lieferung · Rechnung nach Erhalt
                </p>
              </div>
            )}
          </div>
        </>
      )}

      {/* ══ CHECKOUT MODAL ══ */}
      {checkoutOpen && (
        <>
          <div onClick={() => !submitted && setCheckoutOpen(false)} style={{ position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.55)", zIndex: 990, backdropFilter: "blur(4px)" }} />
          <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            width: "min(560px, calc(100vw - 2rem))", background: "white", zIndex: 995,
            boxShadow: "0 24px 80px rgba(0,0,0,0.25)" }}>
            {submitted ? (
              <div style={{ padding: "4rem 2.5rem", textAlign: "center" }}>
                <div style={{ width: "64px", height: "64px", border: "2px solid #22c55e",
                  borderRadius: "50%", display: "flex", alignItems: "center",
                  justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <Check size={28} color="#22c55e" />
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1a3f6f",
                  letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>Bestellung eingegangen.</h3>
                <p style={{ fontSize: "0.9rem", color: "#6b7280", lineHeight: 1.75, marginBottom: "2rem" }}>
                  Wir melden uns innerhalb von 24 Stunden.<br />
                  Bei dringendem Bedarf: +49 30 22 45 43 22
                </p>
                <button onClick={() => { setCheckoutOpen(false); setCart([]); setSubmitted(false); }} style={{
                  padding: "0.75rem 2rem", background: "#1a3f6f", color: "white", border: "none",
                  fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>
                  Fertig
                </button>
              </div>
            ) : (
              <>
                <div style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "center",
                  justifyContent: "space-between", borderBottom: "1px solid #e5e7eb" }}>
                  <span style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "0.9375rem",
                    letterSpacing: "0.04em", textTransform: "uppercase" }}>Bestellung abschließen</span>
                  <button onClick={() => setCheckoutOpen(false)} style={{ background: "none", border: "none",
                    cursor: "pointer", color: "#6b7280", display: "flex" }}><X size={18} /></button>
                </div>
                <div style={{ maxHeight: "78vh", overflowY: "auto" }}>
                  <div style={{ padding: "1rem 1.5rem", background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
                    {cart.map((item, idx) => (
                      <div key={idx} style={{ display: "flex", justifyContent: "space-between",
                        fontSize: "0.8125rem", padding: "0.2rem 0" }}>
                        <span style={{ color: "#6b7280" }}>{item.menge}× {item.produkt} ({item.groesse}, {item.farbe})</span>
                        <span style={{ fontWeight: 600, color: "#1a3f6f", flexShrink: 0, marginLeft: "1rem" }}>
                          {(item.preis * item.menge).toFixed(2).replace(".", ",")} €
                        </span>
                      </div>
                    ))}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.625rem",
                      paddingTop: "0.625rem", borderTop: "1px solid #e5e7eb",
                      fontWeight: 700, color: "#1a3f6f", fontSize: "0.9375rem" }}>
                      <span>Gesamt</span><span>{cartTotal.toFixed(2).replace(".", ",")} €</span>
                    </div>
                  </div>
                  <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div>
                      <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em",
                        textTransform: "uppercase", color: "#6b7280", marginBottom: "0.75rem" }}>
                        Zahlungsart
                      </p>
                      <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
                        {zahlungsarten.map(z => (
                          <ZahlungButton key={z.id} z={z} active={zahlung === z.id} onClick={() => setZahlung(z.id)} />
                        ))}
                      </div>
                      {zahlung === "vorkasse" && (
                        <div style={{ marginTop: "0.75rem", padding: "0.75rem", background: "#f9fafb",
                          fontSize: "0.8rem", color: "#6b7280", lineHeight: 1.6 }}>
                          Nach Eingang Ihrer Bestellung erhalten Sie unsere Bankdaten per E-Mail. Lieferung nach Zahlungseingang.
                        </div>
                      )}
                      {zahlung === "paypal" && (
                        <div style={{ marginTop: "0.75rem", padding: "0.75rem", background: "#f9fafb",
                          fontSize: "0.8rem", color: "#6b7280" }}>
                          Sie erhalten einen PayPal-Zahlungslink per E-Mail.
                        </div>
                      )}
                      {(zahlung === "applepay" || zahlung === "googlepay") && (
                        <div style={{ marginTop: "0.75rem", padding: "0.75rem", background: "#f9fafb",
                          fontSize: "0.8rem", color: "#6b7280" }}>
                          Wir senden Ihnen nach Bestätigung einen sicheren Zahlungslink.
                        </div>
                      )}
                    </div>
                    {[
                      { k: "name",        label: "Name *",                    type: "text",  placeholder: "Vor- und Nachname" },
                      { k: "einrichtung", label: "Einrichtung / Institution", type: "text",  placeholder: "Optional" },
                      { k: "email",       label: "E-Mail *",                  type: "email", placeholder: "ihre@email.de" },
                      { k: "telefon",     label: "Telefon",                   type: "tel",   placeholder: "Optional" },
                    ].map(f => (
                      <div key={f.k}>
                        <label style={{ fontSize: "0.72rem", fontWeight: 700, color: "#6b7280",
                          letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                          {f.label}
                        </label>
                        <input type={f.type} placeholder={f.placeholder}
                          value={(form as Record<string, string>)[f.k]}
                          onChange={e => setForm(prev => ({ ...prev, [f.k]: e.target.value }))}
                          style={inputStyle} />
                      </div>
                    ))}
                    <div>
                      <label style={{ fontSize: "0.72rem", fontWeight: 700, color: "#6b7280",
                        letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                        Notizen
                      </label>
                      <textarea placeholder="Besondere Anforderungen, Lieferadresse etc."
                        value={form.notizen}
                        onChange={e => setForm(prev => ({ ...prev, notizen: e.target.value }))}
                        rows={3} style={{ ...inputStyle, resize: "none" }} />
                    </div>
                    <button onClick={submitOrder} disabled={!form.name || !form.email || submitting} style={{
                      width: "100%", padding: "0.875rem",
                      background: form.name && form.email ? "#1a3f6f" : "#e5e7eb",
                      color: form.name && form.email ? "white" : "#9ca3af",
                      border: "none", fontWeight: 700, fontSize: "0.8125rem",
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      cursor: form.name && form.email ? "pointer" : "not-allowed" }}>
                      {submitting ? "Wird gesendet…" : `Jetzt bestellen · ${cartTotal.toFixed(2).replace(".", ",")} €`}
                    </button>
                    <p style={{ fontSize: "0.7rem", color: "#9ca3af", textAlign: "center" }}>
                      Ihre Daten werden vertraulich behandelt. Keine automatische Abbuchung.
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
