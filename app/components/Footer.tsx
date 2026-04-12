import Link from "next/link";

const angebote = [
  { label: "Krisenintervention",   href: "/krisenintervention" },
  { label: "Psychotherapie",       href: "/psychotherapie" },
  { label: "Frühe Hilfen",         href: "/fruehe-hilfen" },
  { label: "Therapie & Wohnen",    href: "/therapie-wohnen" },
  { label: "Jugendhilfe",          href: "/jugendhilfe" },
  { label: "Diagnostik & Clearing",href: "/diagnostik-clearing" },
  { label: "Beratung & Prävention",href: "/beratung-praevention" },
  { label: "Beratung in Kitas",    href: "/kita-beratung" },
  { label: "Übergang Arbeit",      href: "/uebergang-arbeit" },
  { label: "Ankerkleidung",        href: "/ankerkleidung" },
  { label: "Versorgung",           href: "/versorgung" },
];

const organisation = [
  { label: "Über uns",   href: "/ueber-uns" },
  { label: "Karriere",   href: "/karriere" },
  { label: "Kontakt",    href: "/kontakt" },
  { label: "Impressum",  href: "/impressum" },
  { label: "Datenschutz",href: "/datenschutz" },
];

const labelStyle: React.CSSProperties = {
  fontSize: "0.6875rem",
  fontWeight: 700,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#4A7FA5",
  marginBottom: "1.25rem",
  display: "block",
};

const linkStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "#64748b",
  textDecoration: "none",
  lineHeight: 1,
  transition: "color 0.15s ease",
};

export default function Footer() {
  return (
    <footer style={{ background: "#07090f", color: "white" }}>

      {/* ── Notfall-Banner ── */}
      <div style={{ background: "#b91c1c", padding: "0.875rem 0" }}>
        <div className="site-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: "white", flexShrink: 0, animation: "pulse 2s infinite" }} />
            <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "white" }}>
              Krisenintervention — 24 Stunden, 7 Tage die Woche erreichbar
            </p>
          </div>
          <a href="tel:+4940876543210"
            style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#b91c1c", background: "white", padding: "0.4rem 1rem", borderRadius: "0.375rem", textDecoration: "none", whiteSpace: "nowrap" }}>
            +49 (0) 40 87 65 43 21 — Jetzt anrufen
          </a>
        </div>
      </div>

      {/* ── Haupt-Footer ── */}
      <div className="site-container" style={{ paddingTop: "4.5rem", paddingBottom: "4.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr 1.25fr", gap: "4rem" }}>

          {/* Spalte 1: Marke + Kontakt */}
          <div>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.25rem" }}>
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="1.5" />
                <path d="M14 7v14M7 14h14M10 10.5l8 7M18 10.5l-8 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.01em" }}>Ankernetz</span>
            </div>

            <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: "1.85", marginBottom: "2rem", maxWidth: "26ch" }}>
              Ein Netzwerk aus spezialisierten Hilfen für Kinder und Jugendliche. Vernetzt. Spezialisiert. Menschlich.
            </p>

            {/* Kontakt-Block */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <div>
                <p style={{ fontSize: "0.6875rem", color: "#334155", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.3rem" }}>Allgemein</p>
                <a href="tel:+4940876543210" style={{ fontSize: "0.875rem", color: "#64748b", textDecoration: "none", display: "block" }}>+49 (0) 40 87 65 43 21</a>
                <a href="mailto:info@ankernetz.com" style={{ fontSize: "0.875rem", color: "#64748b", textDecoration: "none", display: "block" }}>info@ankernetz.com</a>
              </div>
              <div>
                <p style={{ fontSize: "0.6875rem", color: "#ef4444", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.3rem" }}>Notfall 24/7</p>
                <a href="tel:+4940876543210" style={{ fontSize: "0.875rem", color: "white", fontWeight: 700, textDecoration: "none" }}>+49 (0) 40 87 65 43 21</a>
              </div>
              <div>
                <p style={{ fontSize: "0.6875rem", color: "#334155", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.3rem" }}>Adresse</p>
                <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: "1.7" }}>
                  Friedrich-Franz-Straße 13<br />20459 Hamburg
                </p>
              </div>
            </div>
          </div>

          {/* Spalte 2: Angebote */}
          <div>
            <span style={labelStyle}>Angebote</span>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {angebote.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={linkStyle}
                    className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 3: Organisation */}
          <div>
            <span style={labelStyle}>Organisation</span>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
              {organisation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={linkStyle} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Platzanfrage CTA */}
            <Link href="/platzanfrage" className="btn btn-primary btn-sm">
              Platzanfrage →
            </Link>
          </div>

          {/* Spalte 4: Newsletter */}
          <div>
            <span style={labelStyle}>Newsletter</span>
            <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: "1.8", marginBottom: "1.5rem" }}>
              Aktuelle Informationen zu unseren Angeboten und Neuerungen.
            </p>
            <form style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                style={{
                  width: "100%",
                  padding: "0.625rem 0.875rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "0.5rem",
                  color: "white",
                  fontSize: "0.875rem",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                Anmelden
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* ── Bodenzeile ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "1.375rem 0" }}>
        <div className="site-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <p style={{ fontSize: "0.8125rem", color: "#334155" }}>
            © {new Date().getFullYear()} Ankernetz — Hwerk GmbH. Alle Rechte vorbehalten.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { label: "Impressum",  href: "/impressum" },
              { label: "Datenschutz",href: "/datenschutz" },
              { label: "Kontakt",    href: "/kontakt" },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                style={{ fontSize: "0.8125rem", color: "#334155", textDecoration: "none" }}
                className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
