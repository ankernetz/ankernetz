"use client";

import Link from "next/link";
import { Shirt, ArrowLeft, Sparkles, Clock } from "lucide-react";

export default function AnkerkleidungPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f4f8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(26,63,111,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Back link */}
      <div
        style={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "rgba(26,63,111,0.45)",
            fontSize: "0.875rem",
            textDecoration: "none",
          }}
        >
          <ArrowLeft size={16} />
          Zurück
        </Link>
      </div>

      {/* Card */}
      <div
        style={{
          position: "relative",
          maxWidth: "640px",
          width: "100%",
          background:
            "radial-gradient(ellipse 65% 50% at 95% 5%, #6FA3FE18 0%, transparent 60%), #ffffff",
          border: "1px solid rgba(26,63,111,0.1)",
          borderRadius: "1.25rem",
          overflow: "hidden",
          padding: "3.5rem 3rem",
          textAlign: "center",
        }}
      >
        {/* Accent stripe */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "#6FA3FE",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.6875rem",
            fontWeight: 600,
            color: "#6FA3FE",
            background: "#6FA3FE18",
            border: "1px solid #6FA3FE35",
            padding: "0.2rem 0.75rem",
            borderRadius: "100px",
            marginBottom: "2rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase" as const,
          }}
        >
          <Clock size={11} />
          Bald verfügbar
        </div>

        {/* Icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.75rem",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "1rem",
              background: "#6FA3FE18",
              border: "1px solid #6FA3FE35",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Shirt size={32} color="#6FA3FE" strokeWidth={1.5} />
          </div>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "2.25rem",
            fontWeight: 900,
            letterSpacing: "-0.025em",
            color: "#1a3f6f",
            lineHeight: 1.15,
            marginBottom: "0.75rem",
          }}
        >
          Ankerkleidung
        </h1>

        {/* Claim */}
        <p
          style={{
            fontSize: "1rem",
            color: "rgba(26,63,111,0.5)",
            fontStyle: "italic",
            marginBottom: "1.75rem",
            lineHeight: 1.6,
          }}
        >
          Etwas Großes entsteht.
        </p>

        {/* Body */}
        <p
          style={{
            fontSize: "1rem",
            color: "rgba(26,63,111,0.6)",
            lineHeight: 2.0,
            marginBottom: "2.5rem",
            maxWidth: "480px",
            margin: "0 auto 2.5rem auto",
          }}
        >
          Wir entwickeln spezialisierte Kleidung für Kinder und Jugendliche mit
          besonderen Bedürfnissen — sensorisch abgestimmt, nach Störungsbild
          ausgewählt, mit Liebe zum Detail. Ankerkleidung wird bald Teil des
          Ankernetz-Hilfesystems.
        </p>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(26,63,111,0.08)",
            marginBottom: "2rem",
          }}
        />

        {/* Sparkle row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
            color: "rgba(26,63,111,0.4)",
            fontSize: "0.8125rem",
          }}
        >
          <Sparkles size={14} color="#FEC274" />
          <span>
            In der Zwischenzeit:{" "}
            <Link
              href="/"
              style={{
                color: "#6FA3FE",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Ankernetz entdecken
            </Link>
          </span>
          <Sparkles size={14} color="#FEC274" />
        </div>
      </div>
    </main>
  );
}
