import Link from "next/link";

const angebote = [
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
];

const organisation = [
  { label: "Über uns",    href: "/ueber-uns" },
  { label: "Karriere",    href: "/karriere" },
  { label: "Kontakt",     href: "/kontakt" },
  { label: "Impressum",   href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

const col: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const label: React.CSSProperties = {
  fontSize: "0.6rem",
  fontWeight: 700,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#3b5a73",
  marginBottom: "1.25rem",
  display: "block",
};

const link: React.CSSProperties = {
  fontSize: "0.8rem",
  color: "#3d4f63",
  textDecoration: "none",
  lineHeight: 1,
  transition: "color 0.15s ease",
};

export default function Footer() {
  return (
    <footer style={{ background: "#08090e" }}>

      {/* ── Notfall-Banner ── */}
      <div style={{ background: "#9f1239", padding: "0.7rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="site-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <span style={{ width: "0.4rem", height: "0.4rem", borderRadius: "50%", background: "white", flexShrink: 0, animation: "pulse 2s infinite" }} />
            <p style={{ fontSize: "0.8125rem", fontWeight: 500, color: "rgba(255,255,255,0.85)", letterSpacing: "0.01em" }}>
              Krisenintervention — 24 Stunden, 7 Tage die Woche erreichbar
            </p>
          </div>
          <a href="tel:+4940876543210" style={{ fontSize: "0.75rem", fontWeight: 700, color: "#9f1239", background: "white", padding: "0.35rem 0.875rem", borderRadius: "0.3rem", textDecoration: "none", whiteSpace: "nowrap" }}>
            +49 (0) 40 87 65 43 21 — Jetzt anrufen
          </a>
        </div>
      </div>

      {/* ── Haupt-Footer ── */}
      <div className="site-container" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1.4fr 1fr 1.2fr", gap: "3.5rem" }}>

          {/* Spalte 1: Logo + Beschreibung + Kontakt */}
          <div style={col}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="1.5" />
                <path d="M14 7v14M7 14h14M10 10.5l8 7M18 10.5l-8 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white", letterSpacing: "-0.01em" }}>Ankernetz</span>
            </div>

            <p style={{ fontSize: "0.7875rem", color: "#3d4f63", lineHeight: "1.75", marginBottom: "1.75rem", maxWidth: "24ch" }}>
              Spezialisierte Hilfen für Kinder und Jugendliche. Vernetzt. Menschlich.
            </p>

            {/* Kontakt kompakt */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
              <div>
                <p style={{ ...label, marginBottom: "0.4rem" }}>Allgemein</p>
                <a href="tel:+4940876543210" style={link} className="footer-link">+49 (0) 40 87 65 43 21</a><br />
                <a href="mailto:info@ankernetz.com" style={{ ...link, marginTop: "0.25rem", display: "inline-block" }} className="footer-link">info@ankernetz.com</a>
              </div>
              <div>
                <p style={{ ...label, marginBottom: "0.4rem", color: "#7f1d1d" }}>Notfall 24/7</p>
                <a href="tel:+4940876543210" style={{ ...link, color: "rgba(255,255,255,0.75)", fontWeight: 600 }} className="footer-link">+49 (0) 40 87 65 43 21</a>
              </div>
              <div>
                <p style={{ ...label, marginBottom: "0.4rem" }}>Adresse</p>
                <p style={{ ...link, lineHeight: "1.65" }}>Friedrich-Franz-Straße 13<br />20459 Hamburg</p>
              </div>
            </div>
          </div>

          {/* Spalte 2: Angebote */}
          <div style={col}>
            <span style={label}>Angebote</span>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {angebote.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={link} className="footer-link">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 3: Organisation */}
          <div style={col}>
            <span style={label}>Organisation</span>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2rem" }}>
              {organisation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={link} className="footer-link">{item.label}</Link>
                </li>
              ))}
            </ul>
            <Link href="/platzanfrage" className="btn btn-primary btn-sm" style={{ alignSelf: "flex-start" }}>
              Platzanfrage →
            </Link>
          </div>

          {/* Spalte 4: Newsletter */}
          <div style={col}>
            <span style={label}>Newsletter</span>
            <p style={{ fontSize: "0.7875rem", color: "#3d4f63", lineHeight: "1.75", marginBottom: "1.25rem" }}>
              Aktuelle Informationen zu unseren Angeboten.
            </p>
            <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                style={{
                  width: "100%",
                  padding: "0.55rem 0.75rem",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "0.4rem",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.8rem",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <button type="submit" className="btn btn-primary" style={{ width: "100%", fontSize: "0.8rem", padding: "0.5rem" }}>
                Anmelden
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* ── Trennlinie ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

      {/* ── Bodenzeile ── */}
      <div style={{ padding: "1.125rem 0" }}>
        <div className="site-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <p style={{ fontSize: "0.75rem", color: "#1e2d3d" }}>
            © {new Date().getFullYear()} Ankernetz — Hwerk GmbH. Alle Rechte vorbehalten.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { label: "Impressum",   href: "/impressum" },
              { label: "Datenschutz", href: "/datenschutz" },
              { label: "Kontakt",     href: "/kontakt" },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                style={{ fontSize: "0.75rem", color: "#1e2d3d", textDecoration: "none" }}
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
