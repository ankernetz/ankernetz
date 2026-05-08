interface FaqItem { q: string; a: string; }

export function SeoFaq({ items, intro }: { items: FaqItem[]; intro?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section style={{ background: "#F5F0EA", padding: "5rem 1.5rem", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8B3A22", marginBottom: "0.75rem" }}>FAQ</p>
          <h2 style={{ fontSize: "clamp(1.625rem,3vw,2.375rem)", fontWeight: 700, color: "#1A1614", letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: intro ? "1.5rem" : "3rem" }}>
            Häufige Fragen
          </h2>
          {intro && (
            <p style={{ fontSize: "1rem", color: "#4A3E38", lineHeight: 1.9, marginBottom: "3rem", maxWidth: "720px" }}>{intro}</p>
          )}
          <div>
            {items.map((item, i) => (
              <details key={i} style={{ borderTop: "1px solid rgba(0,0,0,0.08)", padding: "0" }} className="seo-faq-item">
                <summary style={{
                  fontSize: "0.9375rem", fontWeight: 600, color: "#1A1614",
                  cursor: "pointer", listStyle: "none", display: "flex",
                  justifyContent: "space-between", alignItems: "center",
                  gap: "1rem", padding: "1.375rem 0",
                }}>
                  <span>{item.q}</span>
                  <span className="faq-icon" style={{ fontSize: "1.375rem", flexShrink: 0, color: "#8B3A22", fontWeight: 300, lineHeight: 1, transition: "transform 0.2s" }}>+</span>
                </summary>
                <p style={{ fontSize: "0.9375rem", color: "#5A4E48", lineHeight: 1.85, paddingBottom: "1.5rem", paddingRight: "2.5rem" }}>
                  {item.a}
                </p>
              </details>
            ))}
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />
          </div>
        </div>
      </section>
      <style>{`
        .seo-faq-item[open] .faq-icon { transform: rotate(45deg); }
        .seo-faq-item summary::-webkit-details-marker { display: none; }
      `}</style>
    </>
  );
}
