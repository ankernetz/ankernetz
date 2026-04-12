// Adapted from MagicUI ShineBorder
// Original: github.com/magicuidesign/magicui — apps/www/registry/magicui/shine-border.tsx
// An animated gradient border that sweeps around the card edge

import { type CSSProperties } from "react";

interface ShineBorderProps {
  shineColor?: string | string[];
  duration?: number;
  borderWidth?: number;
}

export function ShineBorder({
  shineColor = ["#ef4444", "#f97316", "#1a3f6f"],
  duration = 8,
  borderWidth = 1,
}: ShineBorderProps) {
  return (
    <span
      className="animate-shine"
      style={
        {
          "--duration": `${duration}s`,
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          padding: `${borderWidth}px`,
          backgroundImage: `radial-gradient(transparent, transparent, ${
            Array.isArray(shineColor) ? shineColor.join(",") : shineColor
          }, transparent, transparent)`,
          backgroundSize: "300% 300%",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        } as CSSProperties
      }
    />
  );
}
