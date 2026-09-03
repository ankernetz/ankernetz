/**
 * Einfache In-Memory-Ratenbegrenzung pro IP und Route.
 * Wirkt nur innerhalb einer "warmen" Serverless-Instanz - kein Ersatz für
 * eine verteilte Lösung (z.B. Vercel KV) bei sehr hohem Traffic, aber
 * wirksamer Basisschutz gegen einfache Bots ohne zusätzliche Infrastruktur.
 */
const treffer = new Map<string, number[]>();

export function istRateLimitiert(ip: string, route: string, limit: number, fensterMs: number): boolean {
  const key = `${route}:${ip}`;
  const jetzt = Date.now();
  const bisherige = (treffer.get(key) ?? []).filter((t) => jetzt - t < fensterMs);
  bisherige.push(jetzt);
  treffer.set(key, bisherige);

  // Speicher begrenzen: gelegentlich alte Einträge komplett entfernen
  if (treffer.size > 5000) {
    for (const [k, zeiten] of treffer) {
      if (zeiten.every((t) => jetzt - t > fensterMs)) treffer.delete(k);
    }
  }

  return bisherige.length > limit;
}
