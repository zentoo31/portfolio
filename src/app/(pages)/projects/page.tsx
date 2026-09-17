"use client"
import { motion } from "motion/react";

import { ProjectCard } from "@/components/ui/project-card";
import projects from "@/data/projects.json";

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 space-y-4 font-mono"
    >
      <h1 className="text-3xl text-text-def">Proyectos</h1>
      <p className="max-w-2xl text-text-description">
        Una selección de proyectos con su descripción, tecnologías utilizadas y
        enlaces para verlos.
      </p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
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
