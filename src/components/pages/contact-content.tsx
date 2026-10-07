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
import { contactOptions } from "@/data/contact";
import { useLanguage } from "@/i18n/language-provider";

const contactIcons = {
  mail: Mail,
  linkedin: WorkflowIcon,
  github: GitBranchIcon,
} as const;

export default function ContactContent() {
  const { t } = useLanguage();
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

    const subject = `${t.contact.mailSubjectPrefix} - ${formData.name || t.contact.mailSubjectFallback}`;
    const body = `${t.contact.mailBodyName}: ${formData.name}\n${t.contact.mailBodyEmail}: ${formData.email}\n\n${t.contact.mailBodyMessage}:\n${formData.message}`;

    window.location.href = `mailto:zentoo31@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-w-0 flex-col gap-5 font-mono sm:gap-6"
    >
      <div className="space-y-3">
        <h1 className="text-2xl text-text-def sm:text-3xl">{t.contact.heading}</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-text-description sm:text-base">
          {t.contact.description}
        </p>
      </div>

      <div className="grid min-w-0 gap-5 xl:grid-cols-[0.9fr_1.1fr] sm:gap-6">
        <div className="min-w-0 space-y-4">
          <div className="border border-[#1F2128] bg-bg-2 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-4">
            <div className="mb-4 flex items-center gap-3">
              <div className="shrink-0 border border-[#1F2128] bg-[#0d1117] p-2 text-text-green">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.2em] text-text-description">
                  {t.contact.locationLabel}
                </p>
                <p className="text-sm break-words text-text-def">
                  {t.contact.locationValue}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {contactOptions.map(({ title, value, href, icon }) => {
                const Icon = contactIcons[icon];

                return (
                  <a
                    key={title}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex min-h-11 items-center justify-between gap-3 border border-[#1F2128] bg-[#11141a] p-3 transition-colors hover:border-text-green/60 hover:bg-[#121a16]"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="shrink-0 border border-[#1F2128] bg-[#0d1117] p-2 text-text-green">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.2em] text-text-description">
                          {title}
                        </p>
                        <p className="truncate text-sm text-text-def">{value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-text-description transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text-green" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="min-w-0 border border-[#1F2128] bg-bg-2 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="shrink-0 border border-[#1F2128] bg-[#0d1117] p-2 text-text-green">
              <MessageSquareText className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.2em] text-text-description">
                {t.contact.formEyebrow}
              </p>
              <h2 className="text-lg text-text-def sm:text-xl">
                {t.contact.formHeading}
              </h2>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-text-description">
                <span>{t.contact.nameLabel}</span>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.namePlaceholder}
                  autoComplete="name"
                  className="min-h-11 w-full border border-[#1F2128] bg-[#0d1117] px-3 py-2.5 text-base text-text-def outline-none transition-colors placeholder:text-text-description/70 focus:border-text-green sm:text-sm"
                  required
                />
              </label>

              <label className="space-y-2 text-sm text-text-description">
                <span>{t.contact.emailLabel}</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.emailPlaceholder}
                  autoComplete="email"
                  className="min-h-11 w-full border border-[#1F2128] bg-[#0d1117] px-3 py-2.5 text-base text-text-def outline-none transition-colors placeholder:text-text-description/70 focus:border-text-green sm:text-sm"
                  required
                />
              </label>
            </div>

            <label className="block space-y-2 text-sm text-text-description">
              <span>{t.contact.messageLabel}</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder={t.contact.messagePlaceholder}
                className="min-h-28 w-full resize-y border border-[#1F2128] bg-[#0d1117] px-3 py-2.5 text-base text-text-def outline-none transition-colors placeholder:text-text-description/70 focus:border-text-green sm:resize-none sm:text-sm"
                required
              />
            </label>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <Button
                type="submit"
                className="inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 bg-text-green text-[#08100c] hover:bg-text-green/85 sm:w-auto"
              >
                <Send className="h-4 w-4" />
                {t.contact.submit}
              </Button>

              {submitted ? (
                <p className="text-sm text-text-green">{t.contact.submitted}</p>
              ) : (
                <p className="text-xs leading-relaxed text-text-description">
                  {t.contact.responseTime}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
