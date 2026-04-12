"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, X, Plus, Minus, Check, ChevronDown } from "lucide-react";

const kategorien = [
  {
    slug: "adhs",
    titel: "ADHS & Hyperaktivität",
    akzent: "#6FA3FE",
    beschreibung: "Reizarm, funktional, komfortabel. Keine ablenkenden Details, bequeme Schnitte, einfaches An- und Ausziehen.",
    produkte: [
      { name: "Basishose Komfort", material: "100% Bio-Baumwolle", groessen: ["104", "116", "128", "140", "152", "164"], farben: ["Anthrazit", "Navy", "Grau"], preis: 29.90, beschreibung: "Weicher Bund ohne Knöpfe, elastischer Schnitt, keine störenden Nähte innen." },
      { name: "Alltags-Shirt Reizarm", material: "Jersey Bio-Baumwolle", groessen: ["104", "116", "128", "140", "152", "164", "S", "M", "L"], farben: ["Weiß", "Hellgrau", "Blau"], preis: 19.90, beschreibung: "Ohne Aufdruck, nahtlos verarbeitet, angenehm auf der Haut." },
      { name: "Übergangsjacke Soft", material: "Fleece/Softshell", groessen: ["116", "128", "140", "152", "164", "S", "M"], farben: ["Navy", "Grau"], preis: 49.90, beschreibung: "Leicht, warm, einfach zu öffnen — kein Zipper-Stress." },
      { name: "Socken Komfort-Set", material: "Bambus/Baumwolle", groessen: ["23–26", "27–30", "31–34", "35–38", "39–42"], farben: ["Grau", "Weiß", "Schwarz"], preis: 14.90, beschreibung: "Ohne störende Zehennaht, rutschfest, langlebig." },
    ],
  },
  {
    slug: "trauma",
    titel: "Trauma & PTBS",
    akzent: "#FEC274",
    beschreibung: "Kleidung als Schutzraum: weich, hüllend, sicher. Für Kinder und Jugendliche, die körperliche Weichheit als Stabilisierung erleben.",
    produkte: [
      { name: "Comfort-Hoodie", material: "Fleece innen, Baumwolle außen", groessen: ["116", "128", "140", "152", "164", "S", "M", "L"], farben: ["Grau", "Dunkelblau", "Beige"], preis: 54.90, beschreibung: "Besonders weich gefüttert, großer Kapuzen-Schutzraum, beruhigend beim Tragen." },
      { name: "Wohlfühl-Jogger", material: "French Terry Bio", groessen: ["116", "128", "140", "152", "164", "S", "M", "L"], farben: ["Dunkelgrau", "Navy", "Schwarz"], preis: 39.90, beschreibung: "Hochgezogener Bund, kuschelig weich, gibt Halt ohne zu drücken." },
      { name: "Weighted Weste", material: "Spezialmaterial mit Gewichtseinlage", groessen: ["116", "128", "140", "152", "164"], farben: ["Grau", "Dunkelblau"], preis: 89.90, beschreibung: "Leichte Gewichtsweste — strukturgebend, beruhigend, dezentes Design." },
      { name: "Decken-Shirt Oversize", material: "100% Baumwolle schwer", groessen: ["140", "152", "164", "S", "M", "L", "XL"], farben: ["Beige", "Weiß", "Hellgrau"], preis: 34.90, beschreibung: "Schweres, weiches Shirt mit Hülleffekt. Gibt Geborgenheit." },
    ],
  },
  {
    slug: "autismus",
    titel: "Autismus-Spektrum",
    akzent: "#6FA3FE",
    beschreibung: "Sensorisch verträgliche Kleidung: keine Etiketten, keine störenden Nähte, eindeutige Passformen.",
    produkte: [
      { name: "Sensory-Shirt Nahtlos", material: "Bio-Baumwolle nahtlos gestrickt", groessen: ["104", "116", "128", "140", "152", "164", "S", "M"], farben: ["Weiß", "Grau", "Hellblau"], preis: 34.90, beschreibung: "Komplett nahtlos, keine Etiketten, angenehm auf empfindlicher Haut." },
      { name: "Hose Easy-Fit", material: "Baumwoll-Stretch", groessen: ["104", "116", "128", "140", "152", "164"], farben: ["Schwarz", "Navy", "Grau"], preis: 39.90, beschreibung: "Gleicher Schnitt in allen Größen — Verlässlichkeit durch Konsistenz." },
      { name: "Kompressionsshirt", material: "Elastan-Mix", groessen: ["116", "128", "140", "152", "164", "S", "M"], farben: ["Grau", "Dunkelblau"], preis: 44.90, beschreibung: "Leichter Kompressionsdruck — strukturgebend und beruhigend." },
      { name: "Schuhe Klettverschluss", material: "Leder/Textil", groessen: ["28", "30", "32", "34", "36", "38", "40"], farben: ["Schwarz", "Grau"], preis: 59.90, beschreibung: "Einfach anzuziehen, ohne Schnürsenkel, stabiler Halt." },
    ],
  },
  {
    slug: "vernachlaessigung",
    titel: "Vernachlässigung & Erstausstattung",
    akzent: "#FEC274",
    beschreibung: "Würdige Grundausstattung: vollständig, sauber, passend. Für Kinder, die eine komplette Erstausstattung benötigen.",
    produkte: [
      { name: "Starter-Set Kind", material: "Verschiedene", groessen: ["104–128", "128–152"], farben: ["Neutral gemischt"], preis: 129.90, beschreibung: "Vollständige Erstausstattung: 3 Shirts, 2 Hosen, Unterwäsche-Set, Socken, Jacke." },
      { name: "Starter-Set Jugendliche", material: "Verschiedene", groessen: ["152–164", "S/M", "M/L"], farben: ["Neutral gemischt"], preis: 159.90, beschreibung: "Vollständige Erstausstattung für Jugendliche — altersgerecht und würdevoll." },
      { name: "Schul-Paket", material: "Verschiedene", groessen: ["Universal"], farben: ["Neutral"], preis: 89.90, beschreibung: "Alles für den Schulstart: Rucksack, Federmäppchen, Schulkleidung-Set." },
      { name: "Hygiene-Starter", material: "—", groessen: ["Universal"], farben: ["—"], preis: 24.90, beschreibung: "Grundlegende Hygieneartikel als Ergänzung zur Ausstattung." },
    ],
  },
  {
    slug: "angststoerungen",
    titel: "Angststörungen",
    akzent: "#6FA3FE",
    beschreibung: "Dezent, unauffällig, nicht beengend. Kleidung, die Sicherheit gibt ohne aufzufallen.",
    produkte: [
      { name: "Unauffällig-Set Basic", material: "Bio-Baumwolle", groessen: ["116", "128", "140", "152", "164", "S", "M"], farben: ["Grau", "Navy", "Schwarz"], preis: 49.90, beschreibung: "Dezentes 2-teiliges Set ohne Logos. Macht unsichtbar im positiven Sinne." },
      { name: "Kapuzenpulli Rückzug", material: "Baumwolle French Terry", groessen: ["128", "140", "152", "164", "S", "M", "L"], farben: ["Dunkelgrau", "Schwarz", "Navy"], preis: 44.90, beschreibung: "Große Kapuze als Rückzugsraum, weich und warm." },
      { name: "Leggings Allrounder", material: "Baumwolle-Stretch", groessen: ["104", "116", "128", "140", "152", "164", "S", "M", "L"], farben: ["Schwarz", "Dunkelgrau", "Navy"], preis: 24.90, beschreibung: "Bequem, dehnbar, unauffällig — passt zu allem." },
      { name: "Layering-Shirt", material: "Jersey Bio", groessen: ["116", "128", "140", "152", "164", "S", "M", "L"], farben: ["Weiß", "Grau", "Beige"], preis: 19.90, beschreibung: "Zum Layern — gibt zusätzliche Sicherheit." },
    ],
  },
  {
    slug: "bindungsstoerungen",
    titel: "Bindungsstörungen",
    akzent: "#FEC274",
    beschreibung: "Kleidung als Beziehungsanker: erkennbar, persönlich, verbindend. Für Kinder, die durch persönliche Gegenstände Stabilität erleben.",
    produkte: [
      { name: "Personalisiertes Shirt", material: "Bio-Baumwolle", groessen: ["104", "116", "128", "140", "152", "164"], farben: ["Hellblau", "Rosa", "Grün", "Gelb"], preis: 29.90, beschreibung: "Mit individuellem Namen — schafft Identität und Zugehörigkeit." },
      { name: "Lieblings-Hoodie", material: "Fleece", groessen: ["116", "128", "140", "152", "164", "S", "M", "L"], farben: ["Frei wählbar"], preis: 54.90, beschreibung: "In der Lieblingsfarbe des Kindes — eine persönliche Wahl stärkt das Selbstgefühl." },
      { name: "Matching-Set Betreuer", material: "Bio-Baumwolle", groessen: ["Kind + Erwachsen"], farben: ["Gemeinsam wählbar"], preis: 39.90, beschreibung: "Passendes Set für Kind und Bezugsbetreuer — visueller Beziehungsanker." },
      { name: "Übergangs-Objekt Schal", material: "Merino-Mix weich", groessen: ["Universal"], farben: ["Warm, weich"], preis: 24.90, beschreibung: "Weicher Schal als Übergangsobjekt." },
    ],
  },
];

interface CartItem {
  kategorie: string;
  produkt: string;
  groesse: string;
  farbe: string;
  menge: number;
  preis: number;
}

interface Selection {
  [key: string]: { groesse: string; farbe: string };
}

export default function AnkerkleidungPage() {
  const [activeKat, setActiveKat] = useState(kategorien[0].slug);
  const [selection, setSelection] = useState<Selection>({});
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [form, setForm] = useState({ name: "", einrichtung: "", email: "", telefon: "", notizen: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const aktKat = kategorien.find(k => k.slug === activeKat)!;
  const cartTotal = cart.reduce((s, i) => s + i.preis * i.menge, 0);
  const cartCount = cart.reduce((s, i) => s + i.menge, 0);

  function getKey(katSlug: string, produktName: string) {
    return `${katSlug}__${produktName}`;
  }

  function setField(key: string, field: "groesse" | "farbe", val: string) {
    setSelection(prev => ({ ...prev, [key]: { ...prev[key], [field]: val } }));
  }

  function addToCart(kat: typeof kategorien[0], produkt: typeof kategorien[0]["produkte"][0]) {
    const key = getKey(kat.slug, produkt.name);
    const sel = selection[key];
    if (!sel?.groesse || !sel?.farbe) return;

    setCart(prev => {
      const idx = prev.findIndex(i =>
        i.kategorie === kat.slug && i.produkt === produkt.name &&
        i.groesse === sel.groesse && i.farbe === sel.farbe
      );
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], menge: updated[idx].menge + 1 };
        return updated;
      }
      return [...prev, { kategorie: kat.slug, produkt: produkt.name, groesse: sel.groesse, farbe: sel.farbe, menge: 1, preis: produkt.preis }];
    });
    setCartOpen(true);
  }

  function changeQty(idx: number, delta: number) {
    setCart(prev => {
      const updated = [...prev];
      updated[idx] = { ...updated[idx], menge: updated[idx].menge + delta };
      if (updated[idx].menge <= 0) updated.splice(idx, 1);
      return updated;
    });
  }

  async function submitOrder() {
    if (!form.name || !form.email) return;
    setSubmitting(true);

    const items = cart.map(i =>
      `• ${i.produkt} | Größe: ${i.groesse} | Farbe: ${i.farbe} | Menge: ${i.menge} | ${(i.preis * i.menge).toFixed(2)} €`
    ).join("\n");

    const text = `🛍️ <b>Neue Bestellung — Ankerkleidung</b>\n\n` +
      `<b>Kunde:</b> ${form.name}\n` +
      `<b>Einrichtung:</b> ${form.einrichtung || "—"}\n` +
      `<b>E-Mail:</b> ${form.email}\n` +
      `<b>Telefon:</b> ${form.telefon || "—"}\n\n` +
      `<b>Bestellung:</b>\n${items}\n\n` +
      `<b>Gesamt:</b> ${cartTotal.toFixed(2)} €\n\n` +
      (form.notizen ? `<b>Notizen:</b> ${form.notizen}` : "");

    try {
      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
    } catch { /* ignore */ }

    setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <main style={{ overflowX: "hidden" }}>

      {/* ═══ HERO ═══ */}
      <section style={{
        position: "relative", minHeight: "58vh", display: "flex", alignItems: "flex-end",
        paddingBottom: "4.5rem", paddingTop: "8rem",
        background: "linear-gradient(155deg, #0d2444 0%, #1a3f6f 60%, #1e4d82 100%)",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px" }} />
        <div style={{ position: "absolute", top: "10%", right: "8%", width: "400px", height: "400px",
          borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(254,194,116,0.10) 0%, transparent 65%)" }} />

        <div className="site-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)", marginBottom: "1rem" }}>
            Ankernetz Versorgung
          </p>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1rem", maxWidth: "16ch" }}>
            Ankerkleidung
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 300,
            color: "rgba(255,255,255,0.6)", fontStyle: "italic", marginBottom: "1.75rem" }}>
            Stabilität. Selbstwert. Alltag.
          </p>
          <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.45)", maxWidth: "52ch", lineHeight: 1.7 }}>
            Spezialisierte Kleidung für Kinder und Jugendliche mit unterschiedlichen Störungsbildern —
            entwickelt mit Fachkräften aus Jugendhilfe und Psychotherapie.
          </p>
        </div>
      </section>

      {/* ═══ PHILOSOPHIE ═══ */}
      <section style={{ background: "#d8e4f0", padding: "4.5rem 0", textAlign: "center" }}>
        <div className="site-container" style={{ maxWidth: "680px" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#1a3f6f", marginBottom: "1.25rem" }}>Unsere Philosophie</p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "#1a3f6f",
            letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            Kleidung ist mehr als Stoff.
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(26,63,111,0.7)", lineHeight: 1.8 }}>
            Für Kinder mit Trauma, ADHS, Autismus oder Bindungsstörungen kann Kleidung beruhigen oder überreizen,
            Geborgenheit geben oder Stress erzeugen. Jede Kategorie ist auf ein spezifisches Störungsbild abgestimmt.
          </p>
        </div>
      </section>

      {/* ═══ SHOP ═══ */}
      <section style={{ background: "#ffffff", padding: "5rem 0" }}>
        <div className="site-container">

          {/* Kategorie-Tabs */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            {kategorien.map(k => (
              <button key={k.slug} onClick={() => setActiveKat(k.slug)}
                style={{
                  fontSize: "0.8125rem", fontWeight: 500,
                  padding: "0.45rem 1rem", borderRadius: "9999px",
                  border: activeKat === k.slug ? `1.5px solid ${k.akzent}` : "1.5px solid rgba(26,63,111,0.15)",
                  background: activeKat === k.slug ? k.akzent === "#6FA3FE" ? "rgba(111,163,254,0.1)" : "rgba(254,194,116,0.12)" : "transparent",
                  color: activeKat === k.slug ? "#1a3f6f" : "rgba(26,63,111,0.55)",
                  cursor: "pointer", transition: "all 0.15s ease",
                }}>
                {k.titel}
              </button>
            ))}
          </div>

          {/* Kategorie-Beschreibung */}
          <div style={{ marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
              color: aktKat.akzent, marginBottom: "0.5rem" }}>Störungsbild</p>
            <h2 style={{ fontSize: "1.625rem", fontWeight: 700, color: "#1a3f6f",
              letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>{aktKat.titel}</h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.6)", lineHeight: 1.65, maxWidth: "60ch" }}>
              {aktKat.beschreibung}
            </p>
          </div>

          {/* Produkt-Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {aktKat.produkte.map(produkt => {
              const key = getKey(aktKat.slug, produkt.name);
              const sel = selection[key] || {};
              const ready = !!(sel.groesse && sel.farbe);
              return (
                <div key={produkt.name} className="bento-card" style={{
                  background: "#f0f4f8", borderRadius: "1rem",
                  border: "1px solid rgba(26,63,111,0.08)",
                  display: "flex", flexDirection: "column", overflow: "hidden",
                }}>
                  {/* Bild-Placeholder */}
                  <div style={{ height: "160px", background: "linear-gradient(135deg, #1a3f6f 0%, #2d5fa0 100%)",
                    display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ width: "2px", height: "2px", borderRadius: "50%", background: aktKat.akzent,
                        margin: "0 auto 0.5rem", width: "32px", height: "32px",
                        border: `2px solid ${aktKat.akzent}`, borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "14px", color: aktKat.akzent }}>☆</span>
                      </div>
                      <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        Ankerkleidung
                      </p>
                    </div>
                  </div>

                  {/* Info */}
                  <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    <div>
                      <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1a3f6f", marginBottom: "0.375rem" }}>
                        {produkt.name}
                      </h3>
                      <p style={{ fontSize: "0.8125rem", color: "rgba(26,63,111,0.6)", lineHeight: 1.55 }}>
                        {produkt.beschreibung}
                      </p>
                      <p style={{ fontSize: "0.75rem", color: "rgba(26,63,111,0.45)", marginTop: "0.375rem" }}>
                        {produkt.material}
                      </p>
                    </div>

                    {/* Größe */}
                    <div>
                      <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                        color: "rgba(26,63,111,0.5)", marginBottom: "0.5rem" }}>Größe</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                        {produkt.groessen.map(g => (
                          <button key={g} onClick={() => setField(key, "groesse", g)}
                            style={{
                              fontSize: "0.75rem", padding: "0.2rem 0.5rem",
                              borderRadius: "0.3rem",
                              border: sel.groesse === g ? `1.5px solid #1a3f6f` : "1px solid rgba(26,63,111,0.2)",
                              background: sel.groesse === g ? "#1a3f6f" : "white",
                              color: sel.groesse === g ? "white" : "#1a3f6f",
                              cursor: "pointer", fontWeight: sel.groesse === g ? 600 : 400,
                              transition: "all 0.12s ease",
                            }}>
                            {g}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Farbe */}
                    <div>
                      <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                        color: "rgba(26,63,111,0.5)", marginBottom: "0.5rem" }}>Farbe</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                        {produkt.farben.map(f => (
                          <button key={f} onClick={() => setField(key, "farbe", f)}
                            style={{
                              fontSize: "0.75rem", padding: "0.2rem 0.625rem",
                              borderRadius: "9999px",
                              border: sel.farbe === f ? `1.5px solid ${aktKat.akzent}` : "1px solid rgba(26,63,111,0.2)",
                              background: sel.farbe === f ? aktKat.akzent === "#6FA3FE" ? "rgba(111,163,254,0.12)" : "rgba(254,194,116,0.15)" : "white",
                              color: "#1a3f6f",
                              cursor: "pointer", fontWeight: sel.farbe === f ? 600 : 400,
                              transition: "all 0.12s ease",
                            }}>
                            {f}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Preis + Button */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
                      paddingTop: "0.875rem", borderTop: "1px solid rgba(26,63,111,0.08)", marginTop: "auto" }}>
                      <span style={{ fontSize: "1.125rem", fontWeight: 700, color: "#1a3f6f" }}>
                        {produkt.preis.toFixed(2).replace(".", ",")} €
                      </span>
                      <button
                        onClick={() => addToCart(aktKat, produkt)}
                        disabled={!ready}
                        style={{
                          fontSize: "0.8125rem", fontWeight: 600, padding: "0.45rem 1rem",
                          borderRadius: "9999px", border: "none", cursor: ready ? "pointer" : "not-allowed",
                          background: ready ? "#1a3f6f" : "rgba(26,63,111,0.15)",
                          color: ready ? "white" : "rgba(26,63,111,0.4)",
                          transition: "all 0.15s ease",
                        }}>
                        {ready ? "In den Warenkorb" : "Auswahl treffen"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ HINWEIS ═══ */}
      <section style={{ background: "#d8e4f0", padding: "3rem 0" }}>
        <div className="site-container">
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "280px" }}>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#1a3f6f", marginBottom: "0.5rem" }}>Bestellung & Kostenübernahme</p>
              <p style={{ fontSize: "0.9rem", color: "rgba(26,63,111,0.7)", lineHeight: 1.7 }}>
                Einrichtungen und Jugendämter können Bestellungen mit Bedarfsnachweis und Kostenträgerabrechnung aufgeben.
                Private Bestellungen sind ebenfalls möglich. Alle Bestellungen werden individuell bearbeitet.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>
              <a href="tel:+4930224543220" style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1a3f6f",
                border: "1.5px solid rgba(26,63,111,0.3)", borderRadius: "9999px",
                padding: "0.5rem 1.125rem", textDecoration: "none" }}>
                +49 30 22 45 43 22
              </a>
              <a href="mailto:hilfe@ankernetz.com" style={{ fontSize: "0.875rem", fontWeight: 600, color: "white",
                background: "#1a3f6f", borderRadius: "9999px",
                padding: "0.5rem 1.125rem", textDecoration: "none" }}>
                hilfe@ankernetz.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WARENKORB FLOATING BUTTON ═══ */}
      {cartCount > 0 && !cartOpen && (
        <button onClick={() => setCartOpen(true)}
          style={{
            position: "fixed", bottom: "1.75rem", left: "1.75rem", zIndex: 900,
            background: "#1a3f6f", color: "white", border: "none", borderRadius: "9999px",
            padding: "0.75rem 1.25rem", cursor: "pointer",
            display: "flex", alignItems: "center", gap: "0.625rem",
            boxShadow: "0 4px 20px rgba(26,63,111,0.4)", fontSize: "0.875rem", fontWeight: 600,
          }}>
          <ShoppingCart size={18} />
          {cartCount} {cartCount === 1 ? "Artikel" : "Artikel"} · {cartTotal.toFixed(2).replace(".", ",")} €
        </button>
      )}

      {/* ═══ WARENKORB SIDEBAR ═══ */}
      {cartOpen && (
        <>
          <div onClick={() => setCartOpen(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", zIndex: 990, backdropFilter: "blur(2px)" }} />
          <div style={{
            position: "fixed", right: 0, top: 0, bottom: 0, width: "min(420px, 100vw)",
            background: "white", zIndex: 995, boxShadow: "-8px 0 40px rgba(0,0,0,0.12)",
            display: "flex", flexDirection: "column",
          }}>
            {/* Header */}
            <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid rgba(26,63,111,0.08)",
              display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <ShoppingCart size={18} color="#1a3f6f" />
                <span style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "1rem" }}>
                  Warenkorb ({cartCount})
                </span>
              </div>
              <button onClick={() => setCartOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(26,63,111,0.5)", display: "flex" }}>
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div style={{ flex: 1, overflowY: "auto", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {cart.length === 0 ? (
                <p style={{ color: "rgba(26,63,111,0.4)", fontSize: "0.875rem", textAlign: "center", marginTop: "2rem" }}>
                  Noch keine Artikel im Warenkorb.
                </p>
              ) : cart.map((item, idx) => (
                <div key={idx} style={{ background: "#f0f4f8", borderRadius: "0.75rem",
                  padding: "1rem", border: "1px solid rgba(26,63,111,0.07)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                    <div>
                      <p style={{ fontWeight: 600, color: "#1a3f6f", fontSize: "0.875rem" }}>{item.produkt}</p>
                      <p style={{ fontSize: "0.75rem", color: "rgba(26,63,111,0.55)", marginTop: "0.2rem" }}>
                        Größe: {item.groesse} · Farbe: {item.farbe}
                      </p>
                    </div>
                    <span style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "0.875rem" }}>
                      {(item.preis * item.menge).toFixed(2).replace(".", ",")} €
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <button onClick={() => changeQty(idx, -1)}
                      style={{ width: "26px", height: "26px", borderRadius: "50%", border: "1px solid rgba(26,63,111,0.2)",
                        background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a3f6f" }}>
                      <Minus size={12} />
                    </button>
                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1a3f6f", minWidth: "1.5rem", textAlign: "center" }}>
                      {item.menge}
                    </span>
                    <button onClick={() => changeQty(idx, 1)}
                      style={{ width: "26px", height: "26px", borderRadius: "50%", border: "1px solid rgba(26,63,111,0.2)",
                        background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a3f6f" }}>
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div style={{ padding: "1.25rem 1.5rem", borderTop: "1px solid rgba(26,63,111,0.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.6)" }}>Gesamt</span>
                  <span style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "1.125rem" }}>
                    {cartTotal.toFixed(2).replace(".", ",")} €
                  </span>
                </div>
                <button onClick={() => { setCartOpen(false); setCheckoutOpen(true); }}
                  style={{ width: "100%", padding: "0.75rem", background: "#1a3f6f", color: "white",
                    border: "none", borderRadius: "9999px", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer" }}>
                  Zur Bestellung →
                </button>
                <p style={{ fontSize: "0.7rem", color: "rgba(26,63,111,0.4)", textAlign: "center", marginTop: "0.75rem" }}>
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
          <div onClick={() => !submitted && setCheckoutOpen(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 990, backdropFilter: "blur(3px)" }} />
          <div style={{
            position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            width: "min(520px, calc(100vw - 2rem))", background: "white", zIndex: 995,
            borderRadius: "1.25rem", boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
            overflow: "hidden",
          }}>
            {submitted ? (
              <div style={{ padding: "3rem 2rem", textAlign: "center" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(34,197,94,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                  <Check size={28} color="#16a34a" />
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1a3f6f", marginBottom: "0.75rem" }}>
                  Bestellung eingegangen!
                </h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(26,63,111,0.6)", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen. Bei dringendem Bedarf rufen Sie uns direkt an.
                </p>
                <button onClick={() => { setCheckoutOpen(false); setCart([]); setSubmitted(false); }}
                  style={{ padding: "0.625rem 1.75rem", background: "#1a3f6f", color: "white",
                    border: "none", borderRadius: "9999px", fontWeight: 600, cursor: "pointer" }}>
                  Fertig
                </button>
              </div>
            ) : (
              <>
                <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid rgba(26,63,111,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "space-between", background: "#1a3f6f" }}>
                  <span style={{ fontWeight: 700, color: "white", fontSize: "1rem" }}>Bestellung abschließen</span>
                  <button onClick={() => setCheckoutOpen(false)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.6)", display: "flex" }}>
                    <X size={20} />
                  </button>
                </div>
                <div style={{ padding: "1.5rem", maxHeight: "70vh", overflowY: "auto" }}>
                  {/* Zusammenfassung */}
                  <div style={{ background: "#f0f4f8", borderRadius: "0.75rem", padding: "1rem", marginBottom: "1.5rem" }}>
                    <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                      color: "rgba(26,63,111,0.5)", marginBottom: "0.75rem" }}>Ihre Bestellung</p>
                    {cart.map((item, idx) => (
                      <div key={idx} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8125rem",
                        color: "#1a3f6f", paddingBottom: "0.375rem" }}>
                        <span>{item.menge}× {item.produkt} ({item.groesse}, {item.farbe})</span>
                        <span style={{ fontWeight: 600 }}>{(item.preis * item.menge).toFixed(2).replace(".", ",")} €</span>
                      </div>
                    ))}
                    <div style={{ borderTop: "1px solid rgba(26,63,111,0.1)", marginTop: "0.5rem", paddingTop: "0.5rem",
                      display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#1a3f6f" }}>
                      <span>Gesamt</span>
                      <span>{cartTotal.toFixed(2).replace(".", ",")} €</span>
                    </div>
                  </div>

                  {/* Formular */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    {[
                      { key: "name", label: "Name *", placeholder: "Vor- und Nachname" },
                      { key: "einrichtung", label: "Einrichtung / Institution", placeholder: "Optional" },
                      { key: "email", label: "E-Mail *", placeholder: "ihre@email.de" },
                      { key: "telefon", label: "Telefon", placeholder: "Optional" },
                    ].map(f => (
                      <div key={f.key}>
                        <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(26,63,111,0.6)",
                          display: "block", marginBottom: "0.35rem" }}>{f.label}</label>
                        <input type="text" placeholder={f.placeholder}
                          value={(form as Record<string, string>)[f.key]}
                          onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                          style={{ width: "100%", padding: "0.55rem 0.875rem", borderRadius: "0.5rem",
                            border: "1px solid rgba(26,63,111,0.15)", fontSize: "0.875rem", color: "#1a3f6f",
                            outline: "none", boxSizing: "border-box", background: "#fafbfc" }} />
                      </div>
                    ))}
                    <div>
                      <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(26,63,111,0.6)",
                        display: "block", marginBottom: "0.35rem" }}>Notizen / Besonderheiten</label>
                      <textarea placeholder="Besondere Anforderungen, Lieferadresse, etc."
                        value={form.notizen}
                        onChange={e => setForm(prev => ({ ...prev, notizen: e.target.value }))}
                        rows={3}
                        style={{ width: "100%", padding: "0.55rem 0.875rem", borderRadius: "0.5rem",
                          border: "1px solid rgba(26,63,111,0.15)", fontSize: "0.875rem", color: "#1a3f6f",
                          outline: "none", resize: "none", boxSizing: "border-box", background: "#fafbfc", fontFamily: "inherit" }} />
                    </div>

                    <button
                      onClick={submitOrder}
                      disabled={!form.name || !form.email || submitting}
                      style={{ width: "100%", padding: "0.75rem", background: form.name && form.email ? "#1a3f6f" : "rgba(26,63,111,0.2)",
                        color: form.name && form.email ? "white" : "rgba(26,63,111,0.4)",
                        border: "none", borderRadius: "9999px", fontWeight: 700, fontSize: "0.9rem",
                        cursor: form.name && form.email ? "pointer" : "not-allowed", marginTop: "0.25rem" }}>
                      {submitting ? "Wird gesendet…" : "Bestellung absenden"}
                    </button>
                    <p style={{ fontSize: "0.7rem", color: "rgba(26,63,111,0.4)", textAlign: "center" }}>
                      Ihre Daten werden vertraulich behandelt. Wir melden uns innerhalb von 24 Stunden.
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
