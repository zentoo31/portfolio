"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import tecnologiaGif from "@/assets/tecnologia.gif";
import experienciaGif from "@/assets/mc_experiencie.gif";
import focusGif from "@/assets/focus.gif";
import { OverviewCard } from "@/components/ui/overview-card";

const overviewCards = [
  {
    title: "Tecnologías",
    value: "08+",
    accent: "STACK",
    icon: tecnologiaGif,
    description:
      "Desarrollo con Next.js, React, TypeScript, Node.js y herramientas modernas para crear experiencias rápidas y escalables.",
  },
  {
    title: "Experiencia",
    value: "1A",
    accent: "EXP",
    icon: experienciaGif,
    description:
      "Más de un año construyendo soluciones para infraestructura, automatización y proyectos web orientados a resultados.",
  },
  {
    title: "Enfoque",
    value: "100%",
    accent: "MINDSET",
    icon: focusGif,
    description:
      "Me interesa crear software claro, mantenible y útil, con atención en la experiencia de usuario y la calidad técnica.",
  },
];

export default function OverviewPage() {
  const [typedName, setTypedName] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const fullName = "Diego Alessandro";
    let currentIndex = 0;

    const interval = window.setInterval(() => {
      currentIndex += 1;
      setTypedName(fullName.slice(0, currentIndex));

      if (currentIndex >= fullName.length) {
        window.clearInterval(interval);
      }
    }, 120);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 space-y-4 font-mono"
    >
      <div className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr] xl:items-start">
        <div className="flex flex-col gap-4">
          <span className="text-text-green">&gt; BUENOS DÍAS</span>

          <div className="flex flex-wrap items-end gap-2">
            <h1 className="flex min-h-[2.5rem] items-end text-3xl font-sans font-bold text-text-def">
              {typedName}
              <motion.span
                aria-hidden="true"
                animate={{ opacity: [1, 1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
                className="ml-1 inline-block h-8 w-[2px] rounded-full bg-text-green align-middle"
              />
            </h1>
            <span className="text-2xl font-sans font-medium text-text-description">
              Pineda Calagua
            </span>
          </div>

          <span className="text-text-green">
            Ingeniería de Sistemas ° Desarrollador ° Administrador de Redes °
            Administrador de Sistemas Operativos
          </span>
          <p className="max-w-2xl text-text-description">
            Soy un desarrollador de software con experiencia en la creación de
            aplicaciones web y móviles. Me apasiona la tecnología y siempre estoy
            buscando aprender nuevas habilidades y mejorar mis conocimientos en el
            campo del desarrollo de software.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          whileHover={{ y: -4, scale: 1.01 }}
          className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[28px] border border-[#1F2128] bg-bg-2 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[22px] border border-[#1F2128] bg-[#11141a]"
          >
            {!imageLoaded && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-10"
              >
                <motion.div
                  animate={{ x: ["-20%", "120%"] }}
                  transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#00FF66]/20 to-transparent blur-xl"
                />
                <div className="absolute inset-0 animate-pulse bg-[#181d25]" />
              </motion.div>
            )}

            <Image
              src="/photo.jpg"
              alt="Foto de Diego Alessandro Pineda Calagua"
              width={720}
              height={900}
              priority
              onLoad={() => setImageLoaded(true)}
              className="h-[420px] w-full rounded-[22px] object-cover transition-all duration-500"
            />
          </motion.div>

          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.12, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[#00FF66]/10 blur-3xl"
          />
        </motion.div>
      </div>
      <span className="border-l-4 border-text-green pl-2 text-text-green">
        Repositorio
      </span>
      <div className="grid gap-4 md:grid-cols-3">
        {overviewCards.map((card, index) => (
          <OverviewCard
            key={card.title}
            title={card.title}
            value={card.value}
            accent={card.accent}
            icon={card.icon}
            description={card.description}
            delay={index * 0.12}
          />
        ))}
      </div>
    </motion.div>
  );
}
