"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  GitBranchIcon,
  WorkflowIcon,
  Mail,
  MapPin,
  MessageSquareText,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const contactOptions = [
  {
    title: "Email",
    value: "zentoo31@gmail.com",
    href: "mailto:zentoo31@gmail.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    value: "/in/diego-pineda-53223a21a",
    href: "https://www.linkedin.com/in/diego-pineda-53223a21a/",
    icon: WorkflowIcon,
  },
  {
    title: "GitHub",
    value: "@zentoo31",
    href: "https://github.com/zentoo31",
    icon: GitBranchIcon,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Portfolio contact - ${formData.name || "Nuevo mensaje"}`;
    const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`;

    window.location.href = `mailto:diegoalessandropineda@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6 font-mono"
    >
      <div className="space-y-3">
        <h1 className="text-3xl text-text-def">Hablemos de tu próximo proyecto</h1>
        <p className="max-w-2xl text-text-description">
          Estoy disponible para colaborar en ideas, desarrollos web, aplicaciones
          y desafíos técnicos. Si tienes una propuesta o quieres conversar, aquí
          tienes la mejor forma de contactarme.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <div className="border border-[#1F2128] bg-bg-2 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="mb-4 flex items-center gap-3">
              <div className="border border-[#1F2128] bg-[#0d1117] p-2 text-text-green">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-text-description">
                  Ubicación
                </p>
                <p className="text-sm text-text-def">Perú</p>
              </div>
            </div>

            <div className="space-y-3">
              {contactOptions.map(({ title, value, href, icon: Icon }) => (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between gap-3  border border-[#1F2128] bg-[#11141a] p-3 transition-colors hover:border-text-green/60 hover:bg-[#121a16]"
                >
                  <div className="flex items-center gap-3">
                    <div className=" border border-[#1F2128] bg-[#0d1117] p-2 text-text-green">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-text-description">
                        {title}
                      </p>
                      <p className="text-sm text-text-def">{value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-text-description transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text-green" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className=" border border-[#1F2128] bg-bg-2 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className="mb-5 flex items-center gap-3">
            <div className=" border border-[#1F2128] bg-[#0d1117] p-2 text-text-green">
              <MessageSquareText className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-text-description">
                Envíame un mensaje
              </p>
              <h2 className="text-xl text-text-def">Contacto directo</h2>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-text-description">
                <span>Nombre</span>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full border border-[#1F2128] bg-[#0d1117] px-3 py-2.5 text-text-def outline-none transition-colors placeholder:text-text-description/70 focus:border-text-green"
                  required
                />
              </label>

              <label className="space-y-2 text-sm text-text-description">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full border border-[#1F2128] bg-[#0d1117] px-3 py-2.5 text-text-def outline-none transition-colors placeholder:text-text-description/70 focus:border-text-green"
                  required
                />
              </label>
            </div>

            <label className="block space-y-2 text-sm text-text-description">
              <span>Mensaje</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Cuéntame sobre tu proyecto, idea o colaboración..."
                className="w-full resize-none border border-[#1F2128] bg-[#0d1117] px-3 py-2.5 text-text-def outline-none transition-colors placeholder:text-text-description/70 focus:border-text-green"
                required
              />
            </label>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" className="cursor-pointer inline-flex items-center gap-2 bg-text-green text-[#08100c] hover:bg-text-green/85">
                <Send className="h-4 w-4" />
                Enviar mensaje
              </Button>

              {submitted ? (
                <p className="text-sm text-text-green">
                  Tu cliente de correo está listo.
                </p>
              ) : (
                <p className="text-xs text-text-description">
                  Respondo normalmente en 12 a 24 horas.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
