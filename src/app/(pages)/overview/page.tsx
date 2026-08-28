"use client"
import { motion } from "motion/react";

export default function OverviewPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 font-mono gap-1 flex flex-col">
      <span className="text-text-green">&gt; BUENOS DÍAS</span>
      <h1 className="text-3xl text-text-def font-sans font-bold">Diego Alessandro Pineda Calagua</h1>
      <span className="text-text-green">Ingeniería de Sistemas ° Desarrollador ° Administrador de Redes ° Administrador de Sistemas Operativos</span>
      <p className="max-w-2xl text-text-description">
        Soy un desarrollador de software con experiencia en la creación de aplicaciones web y móviles. Me apasiona la tecnología y siempre estoy buscando aprender nuevas habilidades y mejorar mis conocimientos en el campo del desarrollo de software.
      </p>
      <span className="text-text-green border-l-4 pl-2">Repositorio</span>

    </motion.div>
  );
}
