"use client"
import { motion } from "motion/react";

import { ProjectCard } from "@/components/ui/project-card";

const projects = [
  {
    title: "Portfolio personal",
    description:
      "Sitio web personal para mostrar perfil profesional, stack tecnológico y experiencia en desarrollo.",
    image: "/profile-placeholder.svg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    projectUrl: "https://example.com",
    repositoryUrl: "https://github.com/zentoo31/portfolio",
  },
  {
    title: "Panel de monitoreo",
    description:
      "Dashboard para visualizar métricas clave, estado de servicios y actividad en tiempo real.",
    image: "/profile-placeholder.svg",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    projectUrl: "https://example.com",
    repositoryUrl: "https://github.com/zentoo31",
  },
  {
    title: "Sistema de automatización",
    description:
      "Aplicación orientada a la gestión y ejecución de tareas automáticas para procesos internos.",
    image: "/profile-placeholder.svg",
    technologies: ["TypeScript", "Node.js", "Docker", "REST API"],
    projectUrl: "https://example.com",
    repositoryUrl: "https://github.com/zentoo31",
  },
];

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 space-y-4 font-mono"
    >
      <h1 className="text-3xl text-text-def">Projects</h1>
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
