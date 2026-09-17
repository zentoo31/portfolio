"use client";

import Image from "next/image";
import { GitBranchIcon, Globe } from "lucide-react";
import { motion } from "motion/react";

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
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      className={cn(
        "group relative overflow-visible border border-[#1F2128] bg-bg-2/80 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,102,0.16),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col gap-4">
        <div className="relative z-10 border border-[#1F2128] bg-[#11141a]">
          <Image
            src={image}
            alt={`Vista previa de ${title}`}
            width={1200}
            height={675}
            className="relative z-20 h-44 w-full origin-center object-cover transition-transform duration-300 group-hover:scale-[1.08]"
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-text-def">{title}</h2>
          <p className="text-sm leading-relaxed text-text-description">
            {description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="border border-[#1F2128] bg-[#11141a] px-2 py-1 text-xs text-text-green"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 border border-[#1F2128] bg-[#11141a] px-3 py-1.5 text-sm text-text-def transition-colors hover:border-text-green hover:text-text-green"
          >
            <Globe className="h-4 w-4" />
            Ver proyecto
          </a>
          {repositoryUrl ? (
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 border border-[#1F2128] bg-[#11141a] px-3 py-1.5 text-sm text-text-def transition-colors hover:border-text-green hover:text-text-green"
            >
              <GitBranchIcon className="h-4 w-4" />
              Repositorio
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
