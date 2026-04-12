"use client";

// Adapted from MagicUI AnimatedGridPattern
// Original: github.com/magicuidesign/magicui — apps/www/registry/magicui/animated-grid-pattern.tsx
// Simplified: uses CSS animations instead of Framer Motion for lighter bundle

import { useCallback, useEffect, useId, useRef, useState } from "react";

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  className?: string;
  strokeColor?: string;
}

type Square = {
  id: number;
  pos: [number, number];
  iteration: number;
};

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  numSquares = 30,
  maxOpacity = 0.12,
  duration = 3,
  strokeColor = "rgba(255,255,255,0.15)",
  className = "",
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState<Square[]>([]);
  const [visibleSquares, setVisibleSquares] = useState<Set<number>>(new Set());

  const getPos = useCallback((): [number, number] => {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ];
  }, [dimensions.height, dimensions.width, height, width]);

  const generateSquares = useCallback(
    (count: number) => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        pos: getPos(),
        iteration: 0,
      }));
    },
    [getPos]
  );

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions.width, dimensions.height, generateSquares, numSquares]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({ width: entry.contentRect.width, height: entry.contentRect.height });
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Animate squares: randomly toggle visibility
  useEffect(() => {
    if (!squares.length) return;
    const interval = setInterval(() => {
      const randomId = Math.floor(Math.random() * squares.length);
      setVisibleSquares((prev) => {
        const next = new Set(prev);
        if (next.has(randomId)) {
          next.delete(randomId);
        } else {
          next.add(randomId);
        }
        return next;
      });
    }, (duration * 1000) / numSquares);
    return () => clearInterval(interval);
  }, [squares, duration, numSquares]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ fill: "none", stroke: strokeColor }}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      {squares.map(({ pos: [squareX, squareY], id: sqId, iteration }) => (
        <rect
          key={`${sqId}-${iteration}`}
          width={width - 1}
          height={height - 1}
          x={squareX * width + 1}
          y={squareY * height + 1}
          fill={strokeColor}
          stroke="none"
          style={{
            opacity: visibleSquares.has(sqId) ? maxOpacity : 0,
            transition: `opacity ${duration * 0.4}s ease-in-out`,
          }}
        />
      ))}
    </svg>
  );
}
