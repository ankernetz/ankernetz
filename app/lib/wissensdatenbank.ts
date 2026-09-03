import Fuse from "fuse.js";
import { glossarKategorien } from "../data/glossar";
import { lexikonBuchstaben } from "../data/lexikon";

export interface WissenEintrag {
  frage: string;
  antwort: string;
  link?: string;
  quelle: "glossar" | "lexikon";
}

const wissen: WissenEintrag[] = [
  ...glossarKategorien.flatMap((kat) =>
    kat.items.map((item) => ({ frage: item.q, antwort: item.a, quelle: "glossar" as const }))
  ),
  ...lexikonBuchstaben.flatMap((buchstabe) =>
    buchstabe.entries.map((e) => ({
      frage: `Was bedeutet ${e.term}?`,
      antwort: e.def,
      link: e.href,
      quelle: "lexikon" as const,
    }))
  ),
];

const fuse = new Fuse(wissen, {
  keys: [
    { name: "frage", weight: 0.7 },
    { name: "antwort", weight: 0.3 },
  ],
  threshold: 0.38,
  ignoreLocation: true,
  minMatchCharLength: 3,
});

export interface SucheErgebnis {
  treffer: WissenEintrag[];
  eindeutig: boolean;
}

/**
 * Durchsucht Glossar (60+ Fragen) und Wortlexikon (99 Begriffe) lokal per
 * Fuzzy-Suche - ohne API-Aufruf, in Millisekunden. Dient als zweite
 * Fallback-Ebene, wenn die handgeschriebenen Kategorien in smartFallback()
 * nichts Passendes finden.
 */
export function sucheWissen(anfrage: string): SucheErgebnis {
  const ergebnisse = fuse.search(anfrage, { limit: 3 });
  const treffer = ergebnisse.map((r) => r.item);
  // Eindeutig, wenn genau ein Treffer sehr gut passt, oder der beste Treffer
  // deutlich besser ist als der zweitbeste.
  const eindeutig =
    ergebnisse.length > 0 &&
    (ergebnisse.length === 1 || (ergebnisse[1].score ?? 1) - (ergebnisse[0].score ?? 0) > 0.15);
  return { treffer, eindeutig };
}
