import { resolveMx } from "node:dns/promises";

const FORMAT = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Prüft Format und MX-Eintrag einer E-Mail-Adresse.
 * Bestätigt nur, dass die Domain überhaupt Mail empfangen kann - nicht,
 * dass das konkrete Postfach existiert. Nur bei echten transienten
 * Fehlern (Timeout, Server nicht erreichbar) wird "gültig" angenommen,
 * damit ein kurzer DNS-Hänger keine echte Anfrage blockiert. Eine
 * tatsächlich nicht existierende Domain (ENOTFOUND/ENODATA) gilt als ungültig.
 */
export async function hatGueltigeDomain(email: string): Promise<boolean> {
  if (!FORMAT.test(email)) return false;
  const domain = email.split("@")[1];
  try {
    const mx = await resolveMx(domain);
    return mx.length > 0;
  } catch (err) {
    const code = (err as NodeJS.ErrnoException)?.code;
    if (code === "ENOTFOUND" || code === "ENODATA") return false;
    return true;
  }
}
