"use client";

import { motion } from "motion/react";

import { ProjectCard } from "@/components/ui/project-card";
import { useLanguage } from "@/i18n/language-provider";

export default function ProjectsContent() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-w-0 flex-col gap-4 font-mono"
    >
      <h1 className="text-2xl text-text-def sm:text-3xl">{t.projects.heading}</h1>
      <p className="max-w-2xl text-sm leading-relaxed text-text-description sm:text-base">
        {t.projects.description}
      </p>
      <div className="grid min-w-0 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
        {t.projects.items.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            projectUrl={project.projectUrl}
            repositoryUrl={project.repositoryUrl}
            delay={index * 0.12}
          />
        ))}
      </div>
    </motion.div>
  );
}
