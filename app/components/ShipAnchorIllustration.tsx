import type { CSSProperties } from "react";

export function ShipAnchorIllustration({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 480 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sai-hull" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="sai-cabin" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#3270e8" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        <linearGradient id="sai-water" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#BAE6FD" />
          <stop offset="100%" stopColor="#7DD3FC" />
        </linearGradient>
        <linearGradient id="sai-waterdeep" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* ── Water ─────────────────────────────────── */}
      <path
        d="M0 178 Q60 168 120 178 Q180 188 240 178 Q300 168 360 178 Q420 188 480 178 L480 290 L0 290 Z"
        fill="url(#sai-water)"
      />
      <path
        d="M0 192 Q80 184 160 192 Q240 200 320 192 Q400 184 480 192 L480 290 L0 290 Z"
        fill="url(#sai-waterdeep)"
      />
      {/* wave lines */}
      <path d="M0 185 Q80 177 160 185 Q240 193 320 185 Q400 177 480 185" stroke="white" strokeWidth="1.5" opacity="0.5" />
      <path d="M0 200 Q100 193 200 200 Q300 207 400 200 Q440 197 480 200" stroke="white" strokeWidth="1" opacity="0.3" />
      <path d="M40 212 Q140 206 240 212 Q340 218 440 212" stroke="white" strokeWidth="1" opacity="0.2" />

      {/* ── Hull ───────────────────────────────────── */}
      <path d="M82 152 L438 152 L455 178 L64 178 Z" fill="url(#sai-hull)" />
      {/* lower dark belt */}
      <path d="M66 170 L453 170 L455 178 L64 178 Z" fill="#1e3a8a" />
      {/* waterline accent */}
      <line x1="65" y1="176" x2="454" y2="176" stroke="#60A5FA" strokeWidth="1" opacity="0.4" />
      {/* deck line */}
      <line x1="82" y1="152" x2="438" y2="152" stroke="#93C5FD" strokeWidth="0.8" opacity="0.35" />

      {/* ── Main cabin ─────────────────────────────── */}
      <rect x="112" y="110" width="318" height="42" rx="3" fill="url(#sai-cabin)" />
      {/* cabin windows */}
      <rect x="136" y="120" width="26" height="18" rx="2.5" fill="#BFDBFE" opacity="0.88" />
      <rect x="172" y="120" width="26" height="18" rx="2.5" fill="#BFDBFE" opacity="0.88" />
      <rect x="280" y="120" width="26" height="18" rx="2.5" fill="#BFDBFE" opacity="0.88" />
      <rect x="316" y="120" width="26" height="18" rx="2.5" fill="#BFDBFE" opacity="0.88" />
      <rect x="352" y="120" width="26" height="18" rx="2.5" fill="#BFDBFE" opacity="0.88" />
      <rect x="388" y="120" width="26" height="18" rx="2.5" fill="#BFDBFE" opacity="0.88" />

      {/* ── Bridge / wheelhouse ────────────────────── */}
      <rect x="215" y="72" width="152" height="40" rx="3" fill="#1e40af" />
      <rect x="225" y="82" width="26" height="20" rx="2.5" fill="#BAE6FD" opacity="0.92" />
      <rect x="261" y="82" width="26" height="20" rx="2.5" fill="#BAE6FD" opacity="0.92" />
      <rect x="297" y="82" width="26" height="20" rx="2.5" fill="#BAE6FD" opacity="0.92" />
      {/* bridge roof line */}
      <line x1="215" y1="72" x2="367" y2="72" stroke="#60A5FA" strokeWidth="0.8" opacity="0.35" />

      {/* ── Funnel ─────────────────────────────────── */}
      <rect x="130" y="76" width="30" height="76" rx="4" fill="#374151" />
      <ellipse cx="145" cy="74" rx="17" ry="6" fill="#4B5563" />
      {/* funnel stripe */}
      <rect x="130" y="76" width="30" height="13" rx="0" fill="#3B82F6" opacity="0.55" />

      {/* ── Smoke ──────────────────────────────────── */}
      <circle cx="140" cy="59" r="10" fill="rgba(209,213,219,0.42)" />
      <circle cx="148" cy="44" r="13" fill="rgba(209,213,219,0.28)" />
      <circle cx="139" cy="30" r="15" fill="rgba(209,213,219,0.16)" />
      <circle cx="150" cy="16" r="11" fill="rgba(209,213,219,0.08)" />

      {/* ── Mast ───────────────────────────────────── */}
      <line x1="296" y1="14" x2="296" y2="74" stroke="#1e3a8a" strokeWidth="3" strokeLinecap="round" />
      <line x1="276" y1="26" x2="316" y2="26" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />
      <line x1="296" y1="14" x2="296" y2="8" stroke="#4B5563" strokeWidth="1.5" />

      {/* ── Flag ───────────────────────────────────── */}
      <path d="M296 14 L324 22 L296 30 Z" fill="#3B82F6" />
      <path d="M296 18 Q310 21 296 24" stroke="#93C5FD" strokeWidth="1" fill="none" opacity="0.6" />

      {/* ── Bow wave ───────────────────────────────── */}
      <path d="M66 174 Q48 170 32 175 Q18 180 8 178" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8" />
      <path d="M66 177 Q42 175 22 181" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4" />

      {/* ── Anchor chain ───────────────────────────── */}
      <path
        d="M70 164 C 50 170 34 182 28 204 C 22 224 24 244 26 260"
        stroke="#9CA3AF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 5"
      />

      {/* ── Anchor ─────────────────────────────────── */}
      <g transform="translate(26, 258) rotate(-14)">
        {/* speed / motion lines (trailing upper-right) */}
        <line x1="16" y1="-40" x2="32" y2="-52" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
        <line x1="20" y1="-24" x2="38" y2="-26" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x1="18" y1="-8"  x2="36" y2="-4"  stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />

        {/* ring / shackle */}
        <circle cx="0" cy="-34" r="11" stroke="#374151" strokeWidth="3.5" fill="none" />
        <line x1="-8" y1="-34" x2="8" y2="-34" stroke="#4B5563" strokeWidth="2.5" />

        {/* shank */}
        <line x1="0" y1="-23" x2="0" y2="15" stroke="#374151" strokeWidth="4.5" strokeLinecap="round" />

        {/* stock */}
        <line x1="-21" y1="-10" x2="21" y2="-10" stroke="#374151" strokeWidth="4" strokeLinecap="round" />
        <circle cx="-21" cy="-10" r="4" fill="#374151" />
        <circle cx="21"  cy="-10" r="4" fill="#374151" />

        {/* crown */}
        <circle cx="0" cy="16" r="4.5" fill="#374151" />

        {/* left arm + fluke */}
        <path d="M0 14 L-20 29" stroke="#374151" strokeWidth="4" strokeLinecap="round" />
        <path d="M0 14 L-20 29 Q-30 26 -27 15 Q-16 8 0 14 Z" fill="#374151" />

        {/* right arm + fluke */}
        <path d="M0 14 L20 29" stroke="#374151" strokeWidth="4" strokeLinecap="round" />
        <path d="M0 14 L20 29 Q30 26 27 15 Q16 8 0 14 Z" fill="#374151" />
      </g>

      {/* ── Splash ─────────────────────────────────── */}
      <path
        d="M36 179 Q40 168 44 177 Q46 167 50 177 Q52 167 56 177 Q58 167 64 179"
        stroke="#60A5FA"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M30 182 Q22 172 18 177" stroke="#93C5FD" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M68 182 Q76 172 80 177" stroke="#93C5FD" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="34" cy="176" r="2.5" fill="#BAE6FD" />
      <circle cx="66" cy="175" r="2" fill="#BAE6FD" />
      <circle cx="22" cy="179" r="1.5" fill="#BAE6FD" />

      {/* ── Wake (stern) ───────────────────────────── */}
      <path d="M454 175 Q468 170 478 175" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
