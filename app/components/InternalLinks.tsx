import Link from "next/link";

interface InternalLink {
  label: string;
  href: string;
  description: string;
}

interface InternalLinksProps {
  title?: string;
  links: InternalLink[];
}

export function InternalLinks({
  title = "Das könnte Sie auch interessieren",
  links,
}: InternalLinksProps) {
  return (
    <section style={{ padding: "4rem 1.5rem", background: "#F5F0EA" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <p style={{
          fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.2em",
          textTransform: "uppercase", color: "#8B3A22", marginBottom: "0.75rem",
        }}>
          Weiterführend
        </p>
        <h2 style={{
          fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
          fontWeight: 700, color: "#1A1614",
          letterSpacing: "-0.02em", marginBottom: "2rem",
        }}>
          {title}
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1rem",
        }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ textDecoration: "none" }}
              className="internal-link-card"
            >
              <div style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: "14px",
                padding: "1.5rem 1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
              }}>
                <p style={{ fontSize: "1rem", fontWeight: 700, color: "#1A1614", margin: 0 }}>
                  {link.label}
                </p>
                <p style={{ fontSize: "0.9rem", color: "#7A6E6A", lineHeight: 1.6, margin: 0 }}>
                  {link.description}
                </p>
                <span style={{
                  marginTop: "0.5rem",
                  fontSize: "0.875rem", fontWeight: 600, color: "#8B3A22",
                  display: "flex", alignItems: "center", gap: "0.25rem",
                }}>
                  Mehr erfahren
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .internal-link-card div:hover {
          box-shadow: 0 8px 28px rgba(0,0,0,0.10);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
