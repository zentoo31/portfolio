"use client";

import { motion } from "motion/react";

const STAR_COUNT = 100;

const stars = Array.from({ length: STAR_COUNT }, (_, index) => ({
  id: index,
  left: `${((index * 13.7) % 100).toFixed(2)}%`,
  top: `${((index * 19.3) % 100).toFixed(2)}%`,
  size: `${((index % 4) + 1).toFixed(2)}px`,
  opacity: Number(((index % 8) * 0.1 + 0.6).toFixed(2)),
  duration: Number((6 + (index % 10) * 0.7).toFixed(2)),
  delay: Number((index % 7) * 0.45),
  driftX: Number((index % 2 === 0 ? 1 : -1) * ((index % 6) + 2)),
  driftY: Number((index % 2 === 0 ? 1 : -1) * ((index % 5) + 1.2)),
  blur: index % 3 === 0 ? 0.4 : 0,
}));

export default function SpaceBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-bg-def">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,102,0.12),transparent_30%),radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.12),transparent_25%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.08),transparent_35%)]" />

      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            filter: `blur(${star.blur}px)`,
          }}
          animate={{
            x: [0, star.driftX, 0],
            y: [0, star.driftY, 0],
            opacity: [star.opacity, Math.min(star.opacity + 0.5, 1), star.opacity],
            scale: [1, 1.7, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
