"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

interface LexEntry { term: string; def: string; href?: string; }
interface LexLetter { letter: string; entries: LexEntry[]; }

export default function LexikonBrowser({ lexikon }: { lexikon: LexLetter[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return lexikon;
    return lexikon
      .map((l) => ({
        ...l,
        entries: l.entries.filter(
          (e) => e.term.toLowerCase().includes(q) || e.def.toLowerCase().includes(q)
        ),
      }))
      .filter((l) => l.entries.length > 0);
  }, [query, lexikon]);

  const resultCount = filtered.reduce((n, l) => n + l.entries.length, 0);

  return (
    <>
      <div style={{ position: "sticky", top: "56px", zIndex: 10, background: "#ffffff", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="site-container" style={{ maxWidth: "820px", padding: "1.25rem 1.5rem 0" }}>
          <div style={{ position: "relative" }}>
            <Search size={18} color="#9c9088" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Begriff suchen, z.B. Inobhutnahme, ADHS, Kassensitz..."
              style={{
                width: "100%", padding: "0.875rem 1rem 0.875rem 2.75rem",
                border: "1.5px solid rgba(0,0,0,0.1)", borderRadius: "10px",
                fontSize: "0.9375rem", color: "#1A1614", outline: "none",
                boxSizing: "border-box", fontFamily: "inherit",
              }}
            />
          </div>
          {query.trim() && (
            <p style={{ fontSize: "0.8125rem", color: "#7A6E6A", margin: "0.75rem 0 0" }}>
              {resultCount} {resultCount === 1 ? "Treffer" : "Treffer"} für "{query}"
            </p>
          )}
        </div>

        {!query.trim() && (
          <div className="site-container" style={{ maxWidth: "820px", display: "flex", flexWrap: "wrap", gap: "0.5rem", padding: "1rem 1.5rem 1.25rem" }}>
            {lexikon.map((l) => (
              <a key={l.letter} href={`#buchstabe-${l.letter}`} style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "32px", height: "32px", fontSize: "0.8125rem", fontWeight: 700,
                color: "#1a3f6f", background: "#eef3fb", borderRadius: "8px", textDecoration: "none",
              }}>
                {l.letter}
              </a>
            ))}
          </div>
        )}
      </div>

      <section style={{ padding: "3rem 1.5rem 6rem" }}>
        <div className="site-container" style={{ maxWidth: "820px" }}>
          {filtered.length === 0 && (
            <p style={{ fontSize: "0.9375rem", color: "#7A6E6A", textAlign: "center", padding: "3rem 0" }}>
              Kein Begriff gefunden. Versuchen Sie ein anderes Stichwort oder schauen Sie im{" "}
              <Link href="/aktuelles#glossar" style={{ color: "#8B3A22" }}>Glossar &amp; FAQ</Link> nach.
            </p>
          )}
          {filtered.map((l) => (
            <div key={l.letter} id={`buchstabe-${l.letter}`} style={{ scrollMarginTop: "160px", marginBottom: "3rem" }}>
              <h2 style={{
                fontSize: "1.75rem", fontWeight: 800, color: "#8B3A22",
                marginBottom: "1.25rem", letterSpacing: "-0.02em",
              }}>
                {l.letter}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {l.entries.map((e, i) => (
                  <div key={i} style={{
                    background: "#ffffff", border: "1px solid rgba(0,0,0,0.07)",
                    borderRadius: "12px", padding: "1.5rem",
                  }}>
                    <p style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#1A1614", marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>
                      {e.href ? (
                        <Link href={e.href} style={{ color: "#1A1614", textDecoration: "none" }}>{e.term}</Link>
                      ) : e.term}
                    </p>
                    <p style={{ fontSize: "0.9375rem", color: "#5A4E48", lineHeight: 1.8, margin: 0 }}>
                      {e.def}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
