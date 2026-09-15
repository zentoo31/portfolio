"use client"

import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";

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
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      className={cn(
        "group relative overflow-hidden border border-[#1F2128] bg-bg-2/80 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,102,0.16),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {icon ? (
              <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border border-[#1F2128] bg-[#11141a]">
                <Image
                  src={icon}
                  alt={`${accent} icon`}
                  width={18}
                  height={18}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : null}
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-text-green">
              {accent}
            </span>
          </div>
          {value ? (
            <span className="text-lg font-bold text-text-def">{value}</span>
          ) : null}
        </div>

        <h2 className="text-lg font-semibold text-text-def">{title}</h2>
        <p className="text-sm leading-relaxed text-text-description">{description}</p>
      </div>
    </motion.article>
  );
}
