"use client";

// Adapted from MagicUI Meteors
// github.com/magicuidesign/magicui — components/meteors.tsx

import { useEffect, useState } from "react";

interface MeteorData {
  id: number;
  left: number;   // % across width
  delay: number;  // s
  duration: number; // s
  opacity: number;
}

export function Meteors({ count = 18 }: { count?: number }) {
  const [meteors, setMeteors] = useState<MeteorData[]>([]);

  useEffect(() => {
    setMeteors(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.floor(Math.random() * 100),
        delay: Math.random() * 10,
        duration: 4 + Math.random() * 5,
        opacity: 0.4 + Math.random() * 0.5,
      }))
    );
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {meteors.map((m) => (
        <span
          key={m.id}
          className="animate-meteor"
          style={{
            position: "absolute",
            top: "-5%",
            left: `${m.left}%`,
            width: "1px",
            height: "1px",
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
            opacity: m.opacity,
          }}
        >
          {/* trail */}
          <span
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "120px",
              height: "1px",
              background: "linear-gradient(90deg, rgba(255,255,255,0.8) 0%, transparent 100%)",
              borderRadius: "100px",
              transform: "rotate(-45deg)",
              transformOrigin: "left center",
            }}
          />
          {/* head glow */}
          <span
            style={{
              position: "absolute",
              top: "-1px",
              left: "-1px",
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 0 6px 1px rgba(255,255,255,0.5)",
            }}
          />
        </span>
      ))}
    </div>
  );
}
