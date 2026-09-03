import { resolveMx } from "node:dns/promises";

const FORMAT = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Prüft Format und MX-Eintrag einer E-Mail-Adresse.
 * Bestätigt nur, dass die Domain überhaupt Mail empfangen kann - nicht,
 * dass das konkrete Postfach existiert. DNS-Fehler (Timeout, Netzwerk)
 * werden als "gültig" gewertet, um echte Anfragen nicht zu blockieren.
 */
export async function hatGueltigeDomain(email: string): Promise<boolean> {
  if (!FORMAT.test(email)) return false;
  const domain = email.split("@")[1];
  try {
    const mx = await resolveMx(domain);
    return mx.length > 0;
  } catch {
    return true;
  }
}
