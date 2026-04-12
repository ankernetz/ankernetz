// Adapted from MagicUI AnimatedShinyText
// Original: github.com/magicuidesign/magicui — apps/www/registry/magicui/animated-shiny-text.tsx
// The shimmer moves across the text creating a premium gloss effect

import { type ReactNode, type CSSProperties } from "react";

interface ShineTextProps {
  children: ReactNode;
  shimmerWidth?: number;
  className?: string;
}

export function ShineText({ children, shimmerWidth = 100, className = "" }: ShineTextProps) {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={`animate-shiny-text bg-[length:var(--shiny-width)_100%] bg-clip-text bg-no-repeat [background-position:0_0] text-transparent [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] bg-gradient-to-r from-transparent via-white/90 via-50% to-transparent ${className}`}
    >
      {children}
    </span>
  );
}
