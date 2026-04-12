"use client";

import { useState } from "react";
import { ShoppingCart, X, Plus, Minus, Check } from "lucide-react";

const kategorien = [
  {
    slug: "adhs",
    titel: "ADHS & Hyperaktivität",
    akzent: "#6FA3FE",
    beschreibung: "Reizarm, funktional, komfortabel. Keine ablenkenden Details, bequeme Schnitte, einfaches An- und Ausziehen.",
    produkte: [
      { name: "Basishose Komfort", material: "100% Bio-Baumwolle", groessen: ["104","116","128","140","152","164"], farben: ["Anthrazit","Navy","Grau"], preis: 29.90, beschreibung: "Weicher Bund ohne Knöpfe, elastischer Schnitt, keine störenden Nähte innen." },
      { name: "Alltags-Shirt Reizarm", material: "Jersey Bio-Baumwolle", groessen: ["104","116","128","140","152","164","S","M","L"], farben: ["Weiß","Hellgrau","Blau"], preis: 19.90, beschreibung: "Ohne Aufdruck, nahtlos verarbeitet, angenehm auf der Haut." },
      { name: "Übergangsjacke Soft", material: "Fleece/Softshell", groessen: ["116","128","140","152","164","S","M"], farben: ["Navy","Grau"], preis: 49.90, beschreibung: "Leicht, warm, einfach zu öffnen — kein Zipper-Stress." },
      { name: "Socken Komfort-Set", material: "Bambus/Baumwolle", groessen: ["23–26","27–30","31–34","35–38","39–42"], farben: ["Grau","Weiß","Schwarz"], preis: 14.90, beschreibung: "Ohne störende Zehennaht, rutschfest, langlebig." },
    ],
  },
  {
    slug: "trauma",
    titel: "Trauma & PTBS",
    akzent: "#FEC274",
    beschreibung: "Kleidung als Schutzraum: weich, hüllend, sicher. Für Kinder und Jugendliche, die Weichheit als Stabilisierung erleben.",
    produkte: [
      { name: "Comfort-Hoodie", material: "Fleece innen, Baumwolle außen", groessen: ["116","128","140","152","164","S","M","L"], farben: ["Grau","Dunkelblau","Beige"], preis: 54.90, beschreibung: "Besonders weich gefüttert, großer Kapuzen-Schutzraum, beruhigend beim Tragen." },
      { name: "Wohlfühl-Jogger", material: "French Terry Bio", groessen: ["116","128","140","152","164","S","M","L"], farben: ["Dunkelgrau","Navy","Schwarz"], preis: 39.90, beschreibung: "Hochgezogener Bund, kuschelig weich, gibt Halt ohne zu drücken." },
      { name: "Weighted Weste", material: "Spezialmaterial mit Gewichtseinlage", groessen: ["116","128","140","152","164"], farben: ["Grau","Dunkelblau"], preis: 89.90, beschreibung: "Leichte Gewichtsweste — strukturgebend, beruhigend, dezentes Design." },
      { name: "Decken-Shirt Oversize", material: "100% Baumwolle schwer", groessen: ["140","152","164","S","M","L","XL"], farben: ["Beige","Weiß","Hellgrau"], preis: 34.90, beschreibung: "Schweres, weiches Shirt mit Hülleffekt. Gibt Geborgenheit." },
    ],
  },
  {
    slug: "autismus",
    titel: "Autismus-Spektrum",
    akzent: "#6FA3FE",
    beschreibung: "Sensorisch verträgliche Kleidung: keine Etiketten, keine störenden Nähte, eindeutige Passformen.",
    produkte: [
      { name: "Sensory-Shirt Nahtlos", material: "Bio-Baumwolle nahtlos gestrickt", groessen: ["104","116","128","140","152","164","S","M"], farben: ["Weiß","Grau","Hellblau"], preis: 34.90, beschreibung: "Komplett nahtlos, keine Etiketten, angenehm auf empfindlicher Haut." },
      { name: "Hose Easy-Fit", material: "Baumwoll-Stretch", groessen: ["104","116","128","140","152","164"], farben: ["Schwarz","Navy","Grau"], preis: 39.90, beschreibung: "Gleicher Schnitt in allen Größen — Verlässlichkeit durch Konsistenz." },
      { name: "Kompressionsshirt", material: "Elastan-Mix", groessen: ["116","128","140","152","164","S","M"], farben: ["Grau","Dunkelblau"], preis: 44.90, beschreibung: "Leichter Kompressionsdruck — strukturgebend und beruhigend." },
      { name: "Schuhe Klettverschluss", material: "Leder/Textil", groessen: ["28","30","32","34","36","38","40"], farben: ["Schwarz","Grau"], preis: 59.90, beschreibung: "Einfach anzuziehen, ohne Schnürsenkel, stabiler Halt." },
    ],
  },
  {
    slug: "vernachlaessigung",
    titel: "Vernachlässigung & Erstausstattung",
    akzent: "#FEC274",
    beschreibung: "Würdige Grundausstattung: vollständig, sauber, passend. Für Kinder, die eine komplette Erstausstattung benötigen.",
    produkte: [
      { name: "Starter-Set Kind", material: "Verschiedene", groessen: ["104–128","128–152"], farben: ["Neutral"], preis: 129.90, beschreibung: "Vollständige Erstausstattung: 3 Shirts, 2 Hosen, Unterwäsche-Set, Socken, Jacke." },
      { name: "Starter-Set Jugendliche", material: "Verschiedene", groessen: ["152–164","S/M","M/L"], farben: ["Neutral"], preis: 159.90, beschreibung: "Vollständige Erstausstattung für Jugendliche — altersgerecht und würdevoll." },
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
      { name: "Unauffällig-Set Basic", material: "Bio-Baumwolle", groessen: ["116","128","140","152","164","S","M"], farben: ["Grau","Navy","Schwarz"], preis: 49.90, beschreibung: "Dezentes 2-teiliges Set ohne Logos. Macht unsichtbar im positiven Sinne." },
      { name: "Kapuzenpulli Rückzug", material: "Baumwolle French Terry", groessen: ["128","140","152","164","S","M","L"], farben: ["Dunkelgrau","Schwarz","Navy"], preis: 44.90, beschreibung: "Große Kapuze als Rückzugsraum, weich und warm." },
      { name: "Leggings Allrounder", material: "Baumwolle-Stretch", groessen: ["104","116","128","140","152","164","S","M","L"], farben: ["Schwarz","Dunkelgrau","Navy"], preis: 24.90, beschreibung: "Bequem, dehnbar, unauffällig — passt zu allem." },
      { name: "Layering-Shirt", material: "Jersey Bio", groessen: ["116","128","140","152","164","S","M","L"], farben: ["Weiß","Grau","Beige"], preis: 19.90, beschreibung: "Zum Layern — gibt zusätzliche Sicherheit." },
    ],
  },
  {
    slug: "bindungsstoerungen",
    titel: "Bindungsstörungen",
    akzent: "#FEC274",
    beschreibung: "Kleidung als Beziehungsanker: erkennbar, persönlich, verbindend. Für Kinder, die durch persönliche Gegenstände Stabilität erleben.",
    produkte: [
      { name: "Personalisiertes Shirt", material: "Bio-Baumwolle", groessen: ["104","116","128","140","152","164"], farben: ["Hellblau","Rosa","Grün","Gelb"], preis: 29.90, beschreibung: "Mit individuellem Namen — schafft Identität und Zugehörigkeit." },
      { name: "Lieblings-Hoodie", material: "Fleece", groessen: ["116","128","140","152","164","S","M","L"], farben: ["Frei wählbar"], preis: 54.90, beschreibung: "In der Lieblingsfarbe des Kindes — stärkt das Selbstgefühl." },
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
  [key: string]: { groesse?: string; farbe?: string };
}

export default function AnkerkleidungPage() {
  const [activeKat, setActiveKat]     = useState(kategorien[0].slug);
  const [selection, setSelection]     = useState<Selection>({});
  const [cart, setCart]               = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen]       = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [form, setForm]               = useState({ name: "", einrichtung: "", email: "", telefon: "", notizen: "" });
  const [submitted, setSubmitted]     = useState(false);
  const [submitting, setSubmitting]   = useState(false);

  const aktKat     = kategorien.find(k => k.slug === activeKat)!;
  const cartTotal  = cart.reduce((s, i) => s + i.preis * i.menge, 0);
  const cartCount  = cart.reduce((s, i) => s + i.menge, 0);

  function key(katSlug: string, produktName: string) {
    return `${katSlug}__${produktName}`;
  }

  function setField(k: string, field: "groesse" | "farbe", val: string) {
    setSelection(prev => ({ ...prev, [k]: { ...prev[k], [field]: val } }));
  }

  function addToCart(kat: typeof kategorien[0], produkt: typeof kategorien[0]["produkte"][0]) {
    const k   = key(kat.slug, produkt.name);
    const sel = selection[k];
    if (!sel?.groesse || !sel?.farbe) return;
    setCart(prev => {
      const idx = prev.findIndex(i =>
        i.kategorie === kat.slug && i.produkt === produkt.name &&
        i.groesse === sel.groesse && i.farbe === sel.farbe
      );
      if (idx >= 0) {
        const u = [...prev];
        u[idx] = { ...u[idx], menge: u[idx].menge + 1 };
        return u;
      }
      return [...prev, { kategorie: kat.slug, produkt: produkt.name, groesse: sel.groesse!, farbe: sel.farbe!, menge: 1, preis: produkt.preis }];
    });
    setCartOpen(true);
  }

  function changeQty(idx: number, delta: number) {
    setCart(prev => {
      const u = [...prev];
      u[idx] = { ...u[idx], menge: u[idx].menge + delta };
      if (u[idx].menge <= 0) u.splice(idx, 1);
      return u;
    });
  }

  async function submitOrder() {
    if (!form.name || !form.email) return;
    setSubmitting(true);
    const items = cart.map(i =>
      `• ${i.produkt} | Größe: ${i.groesse} | Farbe: ${i.farbe} | ${i.menge}× | ${(i.preis * i.menge).toFixed(2)} €`
    ).join("\n");
    const text =
      `🛍 <b>Neue Bestellung — Ankerkleidung</b>\n\n` +
      `<b>Name:</b> ${form.name}\n` +
      `<b>Einrichtung:</b> ${form.einrichtung || "—"}\n` +
      `<b>E-Mail:</b> ${form.email}\n` +
      `<b>Telefon:</b> ${form.telefon || "—"}\n\n` +
      `<b>Artikel:</b>\n${items}\n\n` +
      `<b>Gesamt:</b> ${cartTotal.toFixed(2)} €` +
      (form.notizen ? `\n\n<b>Notizen:</b> ${form.notizen}` : "");
    try {
      await fetch("/api/order", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text }) });
    } catch { /* ignore */ }
    setSubmitted(true);
    setSubmitting(false);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "0.55rem 0.875rem", borderRadius: "0.5rem",
    border: "1px solid rgba(26,63,111,0.15)", fontSize: "0.875rem", color: "#1a3f6f",
    outline: "none", boxSizing: "border-box", background: "#fafbfc", fontFamily: "inherit",
  };

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
        <div style={{ position: "absolute", top: "10%", right: "8%", width: "380px", height: "380px",
          borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(254,194,116,0.10) 0%, transparent 65%)" }} />
        <div className="site-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)", marginBottom: "1rem" }}>Ankernetz Versorgung</p>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1rem", maxWidth: "16ch" }}>
            Ankerkleidung
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 300,
            color: "rgba(255,255,255,0.6)", fontStyle: "italic", marginBottom: "1.5rem" }}>
            Stabilität. Selbstwert. Alltag.
          </p>
          <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.45)", maxWidth: "52ch", lineHeight: 1.7 }}>
            Spezialisierte Kleidung für Kinder und Jugendliche mit unterschiedlichen Störungsbildern —
            entwickelt mit Fachkräften aus Jugendhilfe und Psychotherapie.
          </p>
        </div>
      </section>

      {/* ═══ PHILOSOPHIE ═══ */}
      <section style={{ background: "#d8e4f0", padding: "4rem 0" }}>
        <div className="site-container" style={{ maxWidth: "720px" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#6FA3FE", marginBottom: "1rem" }}>Unsere Philosophie</p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1a3f6f",
            letterSpacing: "-0.02em", marginBottom: "1rem", lineHeight: 1.2 }}>
            Kleidung ist mehr als Stoff.
          </h2>
          <p style={{ fontSize: "0.9375rem", color: "rgba(26,63,111,0.7)", lineHeight: 1.8 }}>
            Für Kinder mit Trauma, ADHS, Autismus oder Bindungsstörungen kann Kleidung beruhigen oder überreizen,
            Geborgenheit geben oder Stress erzeugen. Jede Kategorie ist auf ein spezifisches Störungsbild abgestimmt —
            in enger Zusammenarbeit mit Fachkräften aus der Jugendhilfe und Psychotherapie.
          </p>
        </div>
      </section>

      {/* ═══ SHOP ═══ */}
      <section style={{ background: "#ffffff", padding: "5rem 0" }}>
        <div className="site-container">

          {/* Kategorie-Tabs */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            {kategorien.map(k => {
              const isActive = activeKat === k.slug;
              return (
                <button key={k.slug} onClick={() => setActiveKat(k.slug)} style={{
                  fontSize: "0.8125rem", fontWeight: isActive ? 600 : 400,
                  padding: "0.45rem 1rem", borderRadius: "9999px", cursor: "pointer",
                  border: isActive ? `1.5px solid ${k.akzent}` : "1.5px solid rgba(26,63,111,0.15)",
                  background: isActive ? (k.akzent === "#6FA3FE" ? "rgba(111,163,254,0.1)" : "rgba(254,194,116,0.12)") : "transparent",
                  color: isActive ? "#1a3f6f" : "rgba(26,63,111,0.5)",
                  transition: "all 0.15s ease",
                }}>
                  {k.titel}
                </button>
              );
            })}
          </div>

          {/* Kategorie-Header */}
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
              const k   = key(aktKat.slug, produkt.name);
              const sel = selection[k] || {};
              const ready = !!(sel.groesse && sel.farbe);
              return (
                <div key={produkt.name} className="bento-card" style={{
                  background: "#f0f4f8", borderRadius: "1rem",
                  border: "1px solid rgba(26,63,111,0.08)",
                  display: "flex", flexDirection: "column", overflow: "hidden",
                }}>
                  {/* Bild-Placeholder */}
                  <div style={{
                    height: "148px", display: "flex", alignItems: "center", justifyContent: "center",
                    background: "linear-gradient(135deg, #1a3f6f 0%, #2d5fa0 100%)",
                  }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{
                        width: "36px", height: "36px", borderRadius: "50%",
                        border: `2px solid ${aktKat.akzent}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        margin: "0 auto 0.5rem",
                      }}>
                        <span style={{ fontSize: "16px", color: aktKat.akzent }}>☆</span>
                      </div>
                      <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.35)",
                        letterSpacing: "0.12em", textTransform: "uppercase" }}>Ankerkleidung</p>
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
                      <p style={{ fontSize: "0.75rem", color: "rgba(26,63,111,0.4)", marginTop: "0.375rem" }}>
                        {produkt.material}
                      </p>
                    </div>

                    {/* Größe */}
                    <div>
                      <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em",
                        textTransform: "uppercase", color: "rgba(26,63,111,0.45)", marginBottom: "0.5rem" }}>
                        Größe
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                        {produkt.groessen.map(g => (
                          <button key={g} onClick={() => setField(k, "groesse", g)} style={{
                            fontSize: "0.75rem", padding: "0.2rem 0.5rem", borderRadius: "0.3rem",
                            border: sel.groesse === g ? "1.5px solid #1a3f6f" : "1px solid rgba(26,63,111,0.2)",
                            background: sel.groesse === g ? "#1a3f6f" : "white",
                            color: sel.groesse === g ? "white" : "#1a3f6f",
                            cursor: "pointer", fontWeight: sel.groesse === g ? 600 : 400,
                            transition: "all 0.12s ease",
                          }}>{g}</button>
                        ))}
                      </div>
                    </div>

                    {/* Farbe */}
                    <div>
                      <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em",
                        textTransform: "uppercase", color: "rgba(26,63,111,0.45)", marginBottom: "0.5rem" }}>
                        Farbe
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                        {produkt.farben.map(f => (
                          <button key={f} onClick={() => setField(k, "farbe", f)} style={{
                            fontSize: "0.75rem", padding: "0.2rem 0.625rem", borderRadius: "9999px",
                            border: sel.farbe === f ? `1.5px solid ${aktKat.akzent}` : "1px solid rgba(26,63,111,0.2)",
                            background: sel.farbe === f
                              ? (aktKat.akzent === "#6FA3FE" ? "rgba(111,163,254,0.12)" : "rgba(254,194,116,0.15)")
                              : "white",
                            color: "#1a3f6f", cursor: "pointer",
                            fontWeight: sel.farbe === f ? 600 : 400,
                            transition: "all 0.12s ease",
                          }}>{f}</button>
                        ))}
                      </div>
                    </div>

                    {/* Preis + Button */}
                    <div style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      paddingTop: "0.875rem", borderTop: "1px solid rgba(26,63,111,0.08)", marginTop: "auto",
                    }}>
                      <span style={{ fontSize: "1.125rem", fontWeight: 700, color: "#1a3f6f" }}>
                        {produkt.preis.toFixed(2).replace(".", ",")} €
                      </span>
                      <button onClick={() => addToCart(aktKat, produkt)} disabled={!ready} style={{
                        fontSize: "0.8125rem", fontWeight: 600, padding: "0.45rem 1rem",
                        borderRadius: "9999px", border: "none",
                        cursor: ready ? "pointer" : "not-allowed",
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
        <div className="site-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "260px" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#1a3f6f", marginBottom: "0.5rem" }}>
              Bestellung &amp; Kostenübernahme
            </p>
            <p style={{ fontSize: "0.9rem", color: "rgba(26,63,111,0.65)", lineHeight: 1.7 }}>
              Einrichtungen und Jugendämter können mit Bedarfsnachweis und Kostenträgerabrechnung bestellen.
              Private Bestellungen sind ebenfalls möglich.
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="tel:+4930224543220" style={{
              fontSize: "0.875rem", fontWeight: 600, color: "#1a3f6f",
              border: "1.5px solid rgba(26,63,111,0.3)", borderRadius: "9999px",
              padding: "0.5rem 1.125rem", textDecoration: "none",
            }}>+49 30 22 45 43 22</a>
            <a href="mailto:hilfe@ankernetz.com" style={{
              fontSize: "0.875rem", fontWeight: 600, color: "white",
              background: "#1a3f6f", borderRadius: "9999px",
              padding: "0.5rem 1.125rem", textDecoration: "none",
            }}>hilfe@ankernetz.com</a>
          </div>
        </div>
      </section>

      {/* ═══ WARENKORB BUTTON (floating) ═══ */}
      {cartCount > 0 && !cartOpen && (
        <button onClick={() => setCartOpen(true)} style={{
          position: "fixed", bottom: "1.75rem", left: "1.75rem", zIndex: 900,
          background: "#1a3f6f", color: "white", border: "none", borderRadius: "9999px",
          padding: "0.75rem 1.25rem", cursor: "pointer",
          display: "flex", alignItems: "center", gap: "0.625rem",
          boxShadow: "0 4px 24px rgba(26,63,111,0.4)", fontSize: "0.875rem", fontWeight: 600,
        }}>
          <ShoppingCart size={17} />
          {cartCount} Artikel · {cartTotal.toFixed(2).replace(".", ",")} €
        </button>
      )}

      {/* ═══ WARENKORB SIDEBAR ═══ */}
      {cartOpen && (
        <>
          <div onClick={() => setCartOpen(false)} style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)",
            zIndex: 990, backdropFilter: "blur(2px)",
          }} />
          <div style={{
            position: "fixed", right: 0, top: 0, bottom: 0,
            width: "min(400px, 100vw)", background: "white",
            zIndex: 995, boxShadow: "-8px 0 40px rgba(0,0,0,0.12)",
            display: "flex", flexDirection: "column",
          }}>
            <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid rgba(26,63,111,0.08)",
              display: "flex", alignItems: "center", justifyContent: "space-between", background: "#1a3f6f" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <ShoppingCart size={17} color="white" />
                <span style={{ fontWeight: 700, color: "white", fontSize: "0.9375rem" }}>
                  Warenkorb ({cartCount})
                </span>
              </div>
              <button onClick={() => setCartOpen(false)} style={{
                background: "none", border: "none", cursor: "pointer",
                color: "rgba(255,255,255,0.6)", display: "flex",
              }}>
                <X size={18} />
              </button>
            </div>

            <div style={{ flex: 1, overflowY: "auto", padding: "1rem 1.25rem",
              display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {cart.length === 0 ? (
                <p style={{ color: "rgba(26,63,111,0.4)", fontSize: "0.875rem", textAlign: "center", marginTop: "2rem" }}>
                  Noch keine Artikel im Warenkorb.
                </p>
              ) : cart.map((item, idx) => (
                <div key={idx} style={{ background: "#f0f4f8", borderRadius: "0.75rem",
                  padding: "0.875rem", border: "1px solid rgba(26,63,111,0.07)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.625rem" }}>
                    <div>
                      <p style={{ fontWeight: 600, color: "#1a3f6f", fontSize: "0.875rem" }}>{item.produkt}</p>
                      <p style={{ fontSize: "0.75rem", color: "rgba(26,63,111,0.5)", marginTop: "0.15rem" }}>
                        {item.groesse} · {item.farbe}
                      </p>
                    </div>
                    <span style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "0.875rem", flexShrink: 0 }}>
                      {(item.preis * item.menge).toFixed(2).replace(".", ",")} €
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <button onClick={() => changeQty(idx, -1)} style={{
                      width: "24px", height: "24px", borderRadius: "50%",
                      border: "1px solid rgba(26,63,111,0.2)", background: "white",
                      cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a3f6f",
                    }}><Minus size={11} /></button>
                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1a3f6f",
                      minWidth: "1.25rem", textAlign: "center" }}>{item.menge}</span>
                    <button onClick={() => changeQty(idx, 1)} style={{
                      width: "24px", height: "24px", borderRadius: "50%",
                      border: "1px solid rgba(26,63,111,0.2)", background: "white",
                      cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a3f6f",
                    }}><Plus size={11} /></button>
                  </div>
                </div>
              ))}
            </div>

            {cart.length > 0 && (
              <div style={{ padding: "1.25rem", borderTop: "1px solid rgba(26,63,111,0.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "0.875rem", color: "rgba(26,63,111,0.55)" }}>Gesamt</span>
                  <span style={{ fontWeight: 700, color: "#1a3f6f", fontSize: "1.0625rem" }}>
                    {cartTotal.toFixed(2).replace(".", ",")} €
                  </span>
                </div>
                <button onClick={() => { setCartOpen(false); setCheckoutOpen(true); }} style={{
                  width: "100%", padding: "0.75rem", background: "#1a3f6f", color: "white",
                  border: "none", borderRadius: "9999px", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer",
                }}>Zur Bestellung →</button>
                <p style={{ fontSize: "0.7rem", color: "rgba(26,63,111,0.35)", textAlign: "center", marginTop: "0.75rem" }}>
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
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
            zIndex: 990, backdropFilter: "blur(3px)",
          }} />
          <div style={{
            position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            width: "min(500px, calc(100vw - 2rem))", background: "white",
            zIndex: 995, borderRadius: "1.25rem",
            boxShadow: "0 20px 60px rgba(0,0,0,0.2)", overflow: "hidden",
          }}>
            {submitted ? (
              <div style={{ padding: "3rem 2rem", textAlign: "center" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%",
                  background: "rgba(34,197,94,0.1)", display: "flex", alignItems: "center",
                  justifyContent: "center", margin: "0 auto 1.25rem" }}>
                  <Check size={26} color="#16a34a" />
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1a3f6f", marginBottom: "0.75rem" }}>
                  Bestellung eingegangen!
                </h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(26,63,111,0.6)", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                  Wir melden uns innerhalb von 24 Stunden. Bei dringendem Bedarf rufen Sie uns direkt an.
                </p>
                <button onClick={() => { setCheckoutOpen(false); setCart([]); setSubmitted(false); }} style={{
                  padding: "0.625rem 1.75rem", background: "#1a3f6f", color: "white",
                  border: "none", borderRadius: "9999px", fontWeight: 600, cursor: "pointer",
                }}>Fertig</button>
              </div>
            ) : (
              <>
                <div style={{ padding: "1.125rem 1.5rem", background: "#1a3f6f",
                  display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 700, color: "white", fontSize: "0.9375rem" }}>
                    Bestellung abschließen
                  </span>
                  <button onClick={() => setCheckoutOpen(false)} style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "rgba(255,255,255,0.6)", display: "flex",
                  }}><X size={18} /></button>
                </div>

                <div style={{ padding: "1.5rem", maxHeight: "72vh", overflowY: "auto" }}>
                  {/* Bestellübersicht */}
                  <div style={{ background: "#f0f4f8", borderRadius: "0.75rem",
                    padding: "1rem", marginBottom: "1.5rem" }}>
                    <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em",
                      textTransform: "uppercase", color: "rgba(26,63,111,0.45)", marginBottom: "0.75rem" }}>
                      Ihre Bestellung
                    </p>
                    {cart.map((item, idx) => (
                      <div key={idx} style={{ display: "flex", justifyContent: "space-between",
                        fontSize: "0.8125rem", color: "#1a3f6f", paddingBottom: "0.35rem" }}>
                        <span>{item.menge}× {item.produkt} ({item.groesse}, {item.farbe})</span>
                        <span style={{ fontWeight: 600, flexShrink: 0, marginLeft: "1rem" }}>
                          {(item.preis * item.menge).toFixed(2).replace(".", ",")} €
                        </span>
                      </div>
                    ))}
                    <div style={{ borderTop: "1px solid rgba(26,63,111,0.1)", marginTop: "0.625rem",
                      paddingTop: "0.625rem", display: "flex", justifyContent: "space-between",
                      fontWeight: 700, color: "#1a3f6f", fontSize: "0.9375rem" }}>
                      <span>Gesamt</span>
                      <span>{cartTotal.toFixed(2).replace(".", ",")} €</span>
                    </div>
                  </div>

                  {/* Formular */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    {[
                      { k: "name",        label: "Name *",                    placeholder: "Vor- und Nachname",    type: "text" },
                      { k: "einrichtung", label: "Einrichtung / Institution", placeholder: "Optional",             type: "text" },
                      { k: "email",       label: "E-Mail *",                  placeholder: "ihre@email.de",        type: "email" },
                      { k: "telefon",     label: "Telefon",                   placeholder: "Optional",             type: "tel" },
                    ].map(f => (
                      <div key={f.k}>
                        <label style={{ fontSize: "0.75rem", fontWeight: 600,
                          color: "rgba(26,63,111,0.55)", display: "block", marginBottom: "0.35rem" }}>
                          {f.label}
                        </label>
                        <input type={f.type} placeholder={f.placeholder}
                          value={(form as Record<string, string>)[f.k]}
                          onChange={e => setForm(prev => ({ ...prev, [f.k]: e.target.value }))}
                          style={inputStyle} />
                      </div>
                    ))}

                    <div>
                      <label style={{ fontSize: "0.75rem", fontWeight: 600,
                        color: "rgba(26,63,111,0.55)", display: "block", marginBottom: "0.35rem" }}>
                        Notizen / Besonderheiten
                      </label>
                      <textarea placeholder="Besondere Anforderungen, Lieferadresse, etc."
                        value={form.notizen}
                        onChange={e => setForm(prev => ({ ...prev, notizen: e.target.value }))}
                        rows={3}
                        style={{ ...inputStyle, resize: "none" }} />
                    </div>

                    <button onClick={submitOrder}
                      disabled={!form.name || !form.email || submitting}
                      style={{
                        width: "100%", padding: "0.75rem",
                        background: form.name && form.email ? "#1a3f6f" : "rgba(26,63,111,0.15)",
                        color: form.name && form.email ? "white" : "rgba(26,63,111,0.35)",
                        border: "none", borderRadius: "9999px", fontWeight: 700,
                        fontSize: "0.9rem", cursor: form.name && form.email ? "pointer" : "not-allowed",
                        marginTop: "0.25rem",
                      }}>
                      {submitting ? "Wird gesendet…" : "Bestellung absenden"}
                    </button>
                    <p style={{ fontSize: "0.7rem", color: "rgba(26,63,111,0.35)", textAlign: "center" }}>
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
