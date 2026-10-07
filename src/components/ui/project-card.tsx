"use client";

import Image from "next/image";
import { GitBranchIcon, Globe } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { useLanguage } from "@/i18n/language-provider";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  projectUrl: string;
  repositoryUrl?: string;
  delay?: number;
  className?: string;
};

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  projectUrl,
  repositoryUrl,
  delay = 0,
  className,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.45, ease: "easeOut", delay }
      }
      className={cn(
        "group relative overflow-hidden border border-bg-3 bg-bg-2/90 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-colors duration-200 hover:border-text-green/50",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,102,0.16),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col gap-4">
        <div className="relative z-10 overflow-hidden border border-bg-3 bg-bg-def">
          <span className="absolute left-3 top-3 z-30 border border-text-green/40 bg-bg-def/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-text-green">
            {t.projects.cardLabel}
          </span>
          <Image
            src={image}
            alt={`${t.projects.previewAlt} ${title}`}
            width={1200}
            height={675}
            className={cn(
              "relative z-20 aspect-video w-full object-cover transition-transform duration-300",
              !shouldReduceMotion && "group-hover:scale-[1.04]",
            )}
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold tracking-tight text-text-def">{title}</h2>
          <p className="line-clamp-4 text-sm leading-relaxed text-text-description">
            {description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="border border-bg-3 bg-bg-def px-2 py-1 text-xs text-text-green"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.projects.viewProject} ${title}`}
            className="inline-flex items-center gap-1 border border-text-green/50 bg-text-green px-3 py-1.5 text-sm font-semibold text-[#08100c] transition-colors hover:bg-text-green/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-2"
          >
            <Globe className="h-4 w-4" />
            {t.projects.viewProject}
          </a>
          {repositoryUrl ? (
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.projects.viewRepository} ${title}`}
              className="inline-flex items-center gap-1 border border-bg-3 bg-bg-def px-3 py-1.5 text-sm text-text-def transition-colors hover:border-text-green hover:text-text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-2"
            >
              <GitBranchIcon className="h-4 w-4" />
              {t.projects.viewRepository}
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
