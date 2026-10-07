"use client"

import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type OverviewCardProps = {
  title: string;
  description: string;
  value?: string;
  accent?: string;
  icon?: string | StaticImageData;
  delay?: number;
  className?: string;
};

export function OverviewCard({
  title,
  description,
  value,
  accent = "REPO",
  icon,
  delay = 0,
  className,
}: OverviewCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      tabIndex={0}
      role="region"
      aria-label={`${title} - ${accent}${value ? `: ${value}` : ""}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.45, ease: "easeOut", delay }
      }
      className={cn(
        "group relative min-w-0 overflow-hidden border border-bg-3 bg-bg-2/80 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-colors duration-200 sm:p-5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-def focus-visible:border-text-green/80",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,102,0.16),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />

      <div className="relative flex h-full min-w-0 flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            {icon ? (
              <div
                aria-hidden="true"
                className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-md border border-bg-3 bg-bg-def"
              >
                <Image
                  src={icon}
                  alt=""
                  width={18}
                  height={18}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : null}
            <span className="truncate text-xs font-semibold uppercase tracking-[0.18em] text-text-green">
              {accent}
            </span>
          </div>
          {value ? (
            <span className="shrink-0 text-base font-bold text-text-def sm:text-lg">
              {value}
            </span>
          ) : null}
        </div>

        <h3 className="text-base font-semibold text-text-def sm:text-lg">
          {title}
        </h3>
        <p className="text-sm leading-relaxed break-words text-text-description">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
