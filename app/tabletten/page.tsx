"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  ShieldCheck, Star, Truck, RotateCcw, Leaf, Zap,
  ChevronDown, ChevronUp, Plus, Minus, Heart, Award, Clock
} from "lucide-react";

/* ─── Produktdaten ─────────────────────────────────────────────── */
const produkte = [
  {
    id: 1,
    name: "VitalComplex Pro",
    subtitle: "Multivitamin · 60 Tabletten",
    preis: 34.90,
    alt: 29.90,
    badge: "Bestseller",
    badgeColor: "bg-emerald-500",
    bewertung: 4.8,
    bewertungen: 2847,
    bild: "💊",
    farbe: "from-emerald-50 to-teal-50",
    akzent: "#059669",
    beschreibung: "Vollständige Mikronährstoff-Versorgung für den ganzen Tag. Mit 26 essenziellen Vitaminen und Mineralstoffen.",
    tags: ["Vegan", "Glutenfrei", "GMP-zertifiziert"],
    bestand: 84,
  },
  {
    id: 2,
    name: "OmegaForce 3",
    subtitle: "Omega-3-Fettsäuren · 90 Tabletten",
    preis: 44.90,
    alt: null,
    badge: "Neu",
    badgeColor: "bg-blue-500",
    bewertung: 4.6,
    bewertungen: 412,
    bild: "🔵",
    farbe: "from-blue-50 to-indigo-50",
    akzent: "#2563eb",
    beschreibung: "Hochdosiertes EPA & DHA aus nachhaltig gefischtem Meerestier. Für Herz, Gehirn und Augen.",
    tags: ["MSC-zertifiziert", "Kapselfrei", "Magenfreundlich"],
    bestand: 31,
  },
  {
    id: 3,
    name: "MagnesiumActive",
    subtitle: "Magnesium Citrat · 120 Tabletten",
    preis: 19.90,
    alt: 24.90,
    badge: "Angebot",
    badgeColor: "bg-orange-500",
    bewertung: 4.9,
    bewertungen: 1563,
    bild: "🟡",
    farbe: "from-amber-50 to-orange-50",
    akzent: "#d97706",
    beschreibung: "Hochbioverfügbares Magnesiumcitrat gegen Muskelkrämpfe, Stress und Schlafprobleme.",
    tags: ["Vegan", "Lactosefrei", "Ohne Zusatzstoffe"],
    bestand: 56,
  },
];

const bewertungsDaten = [
  { sterne: 5, prozent: 74 },
  { sterne: 4, prozent: 16 },
  { sterne: 3, prozent: 6 },
  { sterne: 2, prozent: 3 },
  { sterne: 1, prozent: 1 },
];

const faq = [
  { f: "Wie nehme ich die Tabletten ein?", a: "Einmal täglich eine Tablette mit einem großen Glas Wasser zu einer Mahlzeit einnehmen. Nicht auf leeren Magen." },
  { f: "Sind die Produkte vegan?", a: "VitalComplex Pro und MagnesiumActive sind 100 % vegan. OmegaForce 3 enthält Fischöl aus nachhaltigem Fang." },
  { f: "Wie lange dauert die Lieferung?", a: "Standardlieferung 2–3 Werktage (kostenlos ab 30 €). Express-Lieferung am nächsten Tag verfügbar." },
  { f: "Kann ich die Tabletten mit anderen Medikamenten kombinieren?", a: "Bei regelmäßiger Medikamenteneinnahme bitte vorher einen Arzt konsultieren." },
];

/* ─── Stern-Komponente ─────────────────────────────────────────── */
function Sterne({ wert, size = 14 }: { wert: number; size?: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={size}
          className={i <= Math.round(wert) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}
        />
      ))}
    </span>
  );
}

/* ─── Produkt-Karte ────────────────────────────────────────────── */
function ProduktKarte({ produkt }: { produkt: typeof produkte[0] }) {
  const [menge, setMenge] = useState(1);
  const [inKorb, setInKorb] = useState(false);
  const [gemerkt, setGemerkt] = useState(false);

  const handleKorb = () => {
    setInKorb(true);
    setTimeout(() => setInKorb(false), 2000);
  };

  return (
    <Card className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Produkt-Bild */}
      <div className={`bg-gradient-to-br ${produkt.farbe} p-8 flex items-center justify-center relative`}>
        <span className="text-7xl">{produkt.bild}</span>
        <Badge className={`absolute top-3 left-3 ${produkt.badgeColor} text-white border-0 text-xs font-medium`}>
          {produkt.badge}
        </Badge>
        <button
          onClick={() => setGemerkt(g => !g)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white transition-colors"
        >
          <Heart size={14} className={gemerkt ? "fill-red-500 text-red-500" : "text-gray-400"} />
        </button>
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-gray-900 text-base leading-tight">{produkt.name}</h3>
            <p className="text-sm text-gray-500 mt-0.5">{produkt.subtitle}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="font-bold text-lg text-gray-900">{produkt.preis.toFixed(2)} €</p>
            {produkt.alt && (
              <p className="text-xs text-gray-400 line-through">{produkt.alt.toFixed(2)} €</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <Sterne wert={produkt.bewertung} />
          <span className="text-sm font-medium text-gray-700">{produkt.bewertung}</span>
          <span className="text-xs text-gray-400">({produkt.bewertungen.toLocaleString('de-DE')})</span>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <p className="text-sm text-gray-600 leading-relaxed">{produkt.beschreibung}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {produkt.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal bg-gray-100 text-gray-600 border-0">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Bestand */}
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span className="flex items-center gap-1">
              <Clock size={11} />
              Nur noch {produkt.bestand} verfügbar
            </span>
            <span>{Math.round((produkt.bestand / 100) * 100)}%</span>
          </div>
          <Progress value={produkt.bestand} className="h-1.5" />
        </div>
      </CardContent>

      <CardFooter className="flex-col gap-2 pt-0">
        {/* Mengenauswahl */}
        <div className="flex items-center justify-between w-full">
          <span className="text-sm text-gray-500">Menge</span>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setMenge(m => Math.max(1, m - 1))}
              className="px-2.5 py-1.5 hover:bg-gray-50 transition-colors"
            >
              <Minus size={12} />
            </button>
            <span className="text-sm font-medium w-5 text-center">{menge}</span>
            <button
              onClick={() => setMenge(m => m + 1)}
              className="px-2.5 py-1.5 hover:bg-gray-50 transition-colors"
            >
              <Plus size={12} />
            </button>
          </div>
        </div>
        <Button
          onClick={handleKorb}
          className="w-full font-medium transition-all duration-200"
          style={{ backgroundColor: inKorb ? "#059669" : undefined }}
        >
          {inKorb ? "✓ In den Warenkorb gelegt" : `In den Warenkorb · ${(produkt.preis * menge).toFixed(2)} €`}
        </Button>
      </CardFooter>
    </Card>
  );
}

/* ─── FAQ-Item ─────────────────────────────────────────────────── */
function FaqItem({ frage, antwort }: { frage: string; antwort: string }) {
  const [offen, setOffen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOffen(o => !o)}
        className="w-full flex items-center justify-between py-4 text-left text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
      >
        {frage}
        {offen ? <ChevronUp size={16} className="text-gray-400 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
      </button>
      {offen && (
        <p className="pb-4 text-sm text-gray-500 leading-relaxed">{antwort}</p>
      )}
    </div>
  );
}

/* ─── Hauptseite ───────────────────────────────────────────────── */
export default function TablettenPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">VitaStore</span>
            <Badge variant="secondary" className="text-xs">Premium</Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">Produkte</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Kategorien</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Beratung</a>
          </nav>
          <Button size="sm" variant="outline" className="text-sm">
            🛒 Warenkorb
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-white to-emerald-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-2xl">
            <Badge className="bg-emerald-100 text-emerald-700 border-0 mb-4">
              <Leaf size={12} className="mr-1" /> Natürliche Inhaltsstoffe
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Gesundheit.<br />
              <span className="text-emerald-600">Wissenschaftlich fundiert.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed max-w-lg">
              Premium-Nahrungsergänzungsmittel in Pharmaqualität - direkt vom Hersteller, ohne Zwischenhändler.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-8">
              {[
                { icon: ShieldCheck, text: "GMP-zertifiziert" },
                { icon: Award, text: "Laborgeprüft" },
                { icon: Truck, text: "Gratis ab 30 €" },
                { icon: RotateCcw, text: "30 Tage Rückgabe" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-sm text-gray-500">
                  <Icon size={15} className="text-emerald-500" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Produkte */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <Tabs defaultValue="alle">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <h2 className="text-xl font-semibold text-gray-900">Unsere Produkte</h2>
            <TabsList className="bg-gray-100 border-0">
              <TabsTrigger value="alle" className="text-sm">Alle</TabsTrigger>
              <TabsTrigger value="vitamine" className="text-sm">Vitamine</TabsTrigger>
              <TabsTrigger value="minerale" className="text-sm">Minerale</TabsTrigger>
              <TabsTrigger value="omega" className="text-sm">Omega-3</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="alle" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {produkte.map(p => <ProduktKarte key={p.id} produkt={p} />)}
            </div>
          </TabsContent>
          <TabsContent value="vitamine" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <ProduktKarte produkt={produkte[0]} />
            </div>
          </TabsContent>
          <TabsContent value="minerale" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <ProduktKarte produkt={produkte[2]} />
            </div>
          </TabsContent>
          <TabsContent value="omega" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <ProduktKarte produkt={produkte[1]} />
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Bewertungen + FAQ */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">

        {/* Bewertungsübersicht */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Kundenbewertungen</h2>
          <div className="flex items-end gap-4 mb-6">
            <div className="text-center">
              <p className="text-6xl font-bold text-gray-900">4.8</p>
              <Sterne wert={4.8} size={18} />
              <p className="text-sm text-gray-400 mt-1">4.822 Bewertungen</p>
            </div>
          </div>
          <div className="space-y-2">
            {bewertungsDaten.map(({ sterne, prozent }) => (
              <div key={sterne} className="flex items-center gap-3 text-sm">
                <span className="text-gray-500 w-6 text-right">{sterne}</span>
                <Star size={12} className="fill-amber-400 text-amber-400 shrink-0" />
                <Progress value={prozent} className="h-2 flex-1" />
                <span className="text-gray-400 w-8 text-right">{prozent}%</span>
              </div>
            ))}
          </div>

          {/* Trust-Badges */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            {[
              { icon: ShieldCheck, titel: "Geprüfte Qualität", sub: "ISO 22000" },
              { icon: Leaf, titel: "Nachhaltig", sub: "Klimaneutral" },
              { icon: Zap, titel: "Schnell wirksam", sub: "Hochdosiert" },
            ].map(({ icon: Icon, titel, sub }) => (
              <div key={titel} className="text-center p-4 rounded-xl bg-white border border-gray-100">
                <Icon size={20} className="text-emerald-500 mx-auto mb-2" />
                <p className="text-xs font-medium text-gray-700 leading-tight">{titel}</p>
                <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Häufige Fragen</h2>
          <div className="bg-white rounded-xl border border-gray-100 px-5">
            {faq.map(({ f, a }) => <FaqItem key={f} frage={f} antwort={a} />)}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2026 VitaStore · Alle Rechte vorbehalten</p>
          <p className="text-center text-xs leading-relaxed max-w-md">
            Nahrungsergänzungsmittel sind kein Ersatz für eine ausgewogene und abwechslungsreiche Ernährung.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-600 transition-colors">Impressum</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
