"use client";

// Adapted from MagicUI BlurFade — uses framer-motion
// github.com/magicuidesign/magicui — components/blur-fade.tsx

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  delay?: number;       // seconds
  duration?: number;    // seconds
  offset?: number;      // px translateY
  blur?: string;        // css blur value
  className?: string;
}

export function BlurFade({
  children,
  delay = 0,
  duration = 0.55,
  offset = 22,
  blur = "7px",
  className = "",
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offset, filter: `blur(${blur})` }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ width: "100%" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
