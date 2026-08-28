"use client"
import { motion } from "motion/react";

export default function ProjectsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 font-mono gap-1 flex flex-col">
      <h1 className="text-3xl text-text-def">Projects</h1>
      <p className="max-w-2xl text-text-description">
        A dedicated space for the main projects, case studies, and featured
        work.
      </p>
    </motion.div>
  );
}
