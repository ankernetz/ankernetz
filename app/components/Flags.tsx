export function FlagDE({ size = 22 }: { size?: number }) {
  const h = Math.round(size * 14 / 22);
  return (
    <svg width={size} height={h} viewBox="0 0 22 14" fill="none" style={{ display: "block", borderRadius: "2px", overflow: "hidden" }}>
      <rect width="22" height="4.67" fill="#1C1C1C" />
      <rect y="4.67" width="22" height="4.67" fill="#DD0000" />
      <rect y="9.33" width="22" height="4.67" fill="#FFCE00" />
      <rect x="0.5" y="0.5" width="21" height="13" rx="1.5" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="1" />
    </svg>
  );
}

export function FlagGB({ size = 22 }: { size?: number }) {
  const h = Math.round(size * 14 / 22);
  return (
    <svg width={size} height={h} viewBox="0 0 22 14" fill="none" style={{ display: "block", borderRadius: "2px", overflow: "hidden" }}>
      {/* Blue background */}
      <rect width="22" height="14" fill="#00247D" />

      {/* White saltire (St Andrew) */}
      <line x1="0" y1="0" x2="22" y2="14" stroke="white" strokeWidth="5" />
      <line x1="22" y1="0" x2="0" y2="14" stroke="white" strokeWidth="5" />

      {/* Red saltire (St Patrick - simplified, no counterchange) */}
      <line x1="0" y1="0" x2="22" y2="14" stroke="#CF142B" strokeWidth="2.5" />
      <line x1="22" y1="0" x2="0" y2="14" stroke="#CF142B" strokeWidth="2.5" />

      {/* White cross (St George) */}
      <rect x="0" y="5" width="22" height="4" fill="white" />
      <rect x="9" y="0" width="4" height="14" fill="white" />

      {/* Red cross (St George) */}
      <rect x="0" y="5.8" width="22" height="2.4" fill="#CF142B" />
      <rect x="9.8" y="0" width="2.4" height="14" fill="#CF142B" />

      {/* Border */}
      <rect x="0.5" y="0.5" width="21" height="13" rx="1.5" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="1" />
    </svg>
  );
}
