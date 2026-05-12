"use client";
import Link from "next/link";
import { useT } from "../i18n/useT";

const TRANS = {
  de: {
    angebote: "Angebote",
    organisation: "Organisation",
    newsletter: "Newsletter",
    newsletterDesc: "Aktuelle Informationen zu unseren Angeboten.",
    email: "Ihre E-Mail-Adresse",
    anmelden: "Anmelden",
    platzanfrage: "Platzanfrage →",
    notfall: "Krisenintervention - 24 Stunden, 7 Tage die Woche erreichbar",
    anrufen: "+49 (0) 30 22 45 43 22 - Jetzt anrufen",
    allgemein: "Allgemein",
    notfallLabel: "Notfall 24/7",
    adresse: "Adresse",
    beschreibung: "Spezialisierte Hilfen für Kinder und Jugendliche. Vernetzt. Menschlich.",
    rechte: `© ${new Date().getFullYear()} Ankernetz - Hwerk GmbH. Alle Rechte vorbehalten.`,
    angeboteListe: [
      { label: "Krisenintervention",    href: "/krisenintervention" },
      { label: "Psychotherapie",        href: "/psychotherapie" },
      { label: "Frühe Hilfen",          href: "/fruehe-hilfen" },
      { label: "Therapie & Wohnen",     href: "/therapie-wohnen" },
      { label: "Jugendhilfe",           href: "/jugendhilfe" },
      { label: "Diagnostik & Clearing", href: "/diagnostik-clearing" },
      { label: "Beratung & Prävention", href: "/beratung-praevention" },
      { label: "Beratung in Kitas",     href: "/kita-beratung" },
      { label: "Übergang Arbeit",       href: "/uebergang-arbeit" },
      { label: "Ankerkleidung",         href: "/ankerkleidung" },
      { label: "Versorgung",            href: "/versorgung" },
    ],
    organisationListe: [
      { label: "Über uns",    href: "/ueber-uns" },
      { label: "Karriere",    href: "/karriere" },
      { label: "Kontakt",     href: "/kontakt" },
      { label: "Impressum",   href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
    bodenLinks: [
      { label: "Impressum",   href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Kontakt",     href: "/kontakt" },
    ],
  },
  en: {
    angebote: "Services",
    organisation: "Organisation",
    newsletter: "Newsletter",
    newsletterDesc: "Stay up to date with our services and news.",
    email: "Your e-mail address",
    anmelden: "Subscribe",
    platzanfrage: "Request a place →",
    notfall: "Crisis intervention - available 24 hours a day, 7 days a week",
    anrufen: "+49 (0) 30 22 45 43 22 - Call now",
    allgemein: "General",
    notfallLabel: "Emergency 24/7",
    adresse: "Address",
    beschreibung: "Specialised support for children and young people. Connected. Human.",
    rechte: `© ${new Date().getFullYear()} Ankernetz - Hwerk GmbH. All rights reserved.`,
    angeboteListe: [
      { label: "Crisis Intervention",    href: "/krisenintervention" },
      { label: "Psychotherapy",          href: "/psychotherapie" },
      { label: "Early Help",             href: "/fruehe-hilfen" },
      { label: "Therapy & Housing",      href: "/therapie-wohnen" },
      { label: "Youth Welfare",          href: "/jugendhilfe" },
      { label: "Diagnostics & Clearing", href: "/diagnostik-clearing" },
      { label: "Counselling & Prevention", href: "/beratung-praevention" },
      { label: "Daycare Counselling",    href: "/kita-beratung" },
      { label: "Transition to Work",     href: "/uebergang-arbeit" },
      { label: "Anchor Clothing",        href: "/ankerkleidung" },
      { label: "Care & Supplies",        href: "/versorgung" },
    ],
    organisationListe: [
      { label: "About us",    href: "/ueber-uns" },
      { label: "Careers",     href: "/karriere" },
      { label: "Contact",     href: "/kontakt" },
      { label: "Legal Notice", href: "/impressum" },
      { label: "Privacy Policy", href: "/datenschutz" },
    ],
    bodenLinks: [
      { label: "Legal Notice",    href: "/impressum" },
      { label: "Privacy Policy",  href: "/datenschutz" },
      { label: "Contact",         href: "/kontakt" },
    ],
  },
};

const col: React.CSSProperties = { display: "flex", flexDirection: "column" };
const labelStyle: React.CSSProperties = {
  fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em",
  textTransform: "uppercase", color: "#ffffff", marginBottom: "1.25rem", display: "block",
};
const linkStyle: React.CSSProperties = {
  fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none",
  lineHeight: 1, transition: "color 0.15s ease",
};

export default function Footer() {
  const t = useT(TRANS);
  return (
    <footer style={{ background: "#0b1220" }}>
      {/* Notfall-Banner */}
      <div style={{ background: "#ffffff", padding: "0.7rem 0", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div className="site-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <span style={{ width: "0.4rem", height: "0.4rem", borderRadius: "50%", background: "#9f1239", flexShrink: 0, animation: "pulse 2s infinite" }} />
            <p style={{ fontSize: "0.8125rem", fontWeight: 500, color: "#1a3f6f", letterSpacing: "0.01em" }}>{t.notfall}</p>
          </div>
          <a href="tel:+493022454322" style={{ fontSize: "0.75rem", fontWeight: 700, color: "white", background: "#9f1239", padding: "0.35rem 0.875rem", borderRadius: "0.3rem", textDecoration: "none", whiteSpace: "nowrap" }}>
            {t.anrufen}
          </a>
        </div>
      </div>

      {/* Haupt-Footer */}
      <div className="site-container" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1.4fr 1fr 1.2fr", gap: "3.5rem" }}>
          {/* Spalte 1 */}
          <div style={col}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="1.5" />
                <path d="M14 7v14M7 14h14M10 10.5l8 7M18 10.5l-8 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white", letterSpacing: "-0.01em" }}>Ankernetz</span>
            </div>
            <p style={{ fontSize: "0.7875rem", color: "rgba(255,255,255,0.5)", lineHeight: "1.75", marginBottom: "1.75rem", maxWidth: "24ch" }}>
              {t.beschreibung}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
              <div>
                <p style={{ ...labelStyle, marginBottom: "0.4rem" }}>{t.allgemein}</p>
                <a href="tel:+493022454322" style={linkStyle} className="footer-link">+49 (0) 30 22 45 43 22</a><br />
                <a href="mailto:hilfe@ankernetz.com" style={{ ...linkStyle, marginTop: "0.25rem", display: "inline-block" }} className="footer-link">hilfe@ankernetz.com</a>
              </div>
              <div>
                <p style={{ ...labelStyle, marginBottom: "0.4rem", color: "#ffffff" }}>{t.notfallLabel}</p>
                <a href="tel:+493022454322" style={{ ...linkStyle, color: "rgba(255,255,255,0.75)", fontWeight: 600 }} className="footer-link">+49 (0) 30 22 45 43 22</a>
              </div>
              <div>
                <p style={{ ...labelStyle, marginBottom: "0.4rem" }}>{t.adresse}</p>
                <p style={{ ...linkStyle, lineHeight: "1.65" }}>Friedrich-Franz-Straße 13<br />12103 Berlin</p>
              </div>
            </div>
          </div>

          {/* Spalte 2 */}
          <div style={col}>
            <span style={labelStyle}>{t.angebote}</span>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {t.angeboteListe.map((item) => (
                <li key={item.href}><Link href={item.href} style={linkStyle} className="footer-link">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Spalte 3 */}
          <div style={col}>
            <span style={labelStyle}>{t.organisation}</span>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2rem" }}>
              {t.organisationListe.map((item) => (
                <li key={item.href}><Link href={item.href} style={linkStyle} className="footer-link">{item.label}</Link></li>
              ))}
            </ul>
            <Link href="/platzanfrage" className="btn btn-primary btn-sm" style={{ alignSelf: "flex-start" }}>
              {t.platzanfrage}
            </Link>
          </div>

          {/* Spalte 4 */}
          <div style={col}>
            <span style={labelStyle}>{t.newsletter}</span>
            <p style={{ fontSize: "0.7875rem", color: "rgba(255,255,255,0.5)", lineHeight: "1.75", marginBottom: "1.25rem" }}>{t.newsletterDesc}</p>
            <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <input type="email" placeholder={t.email} style={{ width: "100%", padding: "0.55rem 0.75rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.4rem", color: "rgba(255,255,255,0.75)", fontSize: "0.8rem", outline: "none", boxSizing: "border-box" }} />
              <button type="submit" className="btn btn-primary" style={{ width: "100%", fontSize: "0.8rem", padding: "0.5rem" }}>{t.anmelden}</button>
            </form>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

      <div style={{ padding: "1.125rem 0" }}>
        <div className="site-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>{t.rechte}</p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {t.bodenLinks.map((item) => (
              <Link key={item.href} href={item.href} style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", textDecoration: "none" }} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
