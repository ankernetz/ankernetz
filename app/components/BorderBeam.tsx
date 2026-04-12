"use client";

// Adapted from MagicUI BorderBeam — pure CSS implementation, no additional dependencies
// Original source: github.com/magicuidesign/magicui

interface BorderBeamProps {
  colorFrom?: string;
  colorTo?: string;
  duration?: number;
  borderWidth?: number;
}

export function BorderBeam({
  colorFrom = "#ef4444",
  colorTo = "#f97316",
  duration = 5,
  borderWidth = 1.5,
}: BorderBeamProps) {
  return (
    <span
      className="border-beam-element"
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        pointerEvents: "none",
        padding: `${borderWidth}px`,
        background: `linear-gradient(var(--beam-angle, 0deg), transparent 40%, ${colorFrom}, ${colorTo}, transparent 60%)`,
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        animation: `borderBeamSpin ${duration}s linear infinite`,
      }}
    />
  );
}
