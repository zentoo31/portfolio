"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { BadgeCheck, ShieldCheck } from "lucide-react";

import tecnologiaGif from "@/assets/tecnologia.gif";
import experienciaGif from "@/assets/mc_experiencie.gif";
import cisco_logo from "@/assets/cisco_logo.webp";
import focusGif from "@/assets/focus.gif";
import { OverviewCard } from "@/components/ui/overview-card";
import { useLanguage } from "@/i18n/language-provider";

const iconByKey: Record<string, typeof tecnologiaGif> = {
  tecnologia: tecnologiaGif,
  experiencia: experienciaGif,
  focus: focusGif,
};

export default function OverviewContent() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const fullName = "Diego Alessandro";
  const [typedName, setTypedName] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    let currentIndex = 0;
    const interval = window.setInterval(() => {
      currentIndex += 1;
      setTypedName(fullName.slice(0, currentIndex));

      if (currentIndex >= fullName.length) {
        window.clearInterval(interval);
      }
    }, 120);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  const displayName = shouldReduceMotion ? fullName : typedName;
  const { overview } = t;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
      className="flex min-w-0 flex-col gap-5 font-mono sm:gap-6"
    >
      <section
        aria-labelledby="overview-heading"
        className="grid min-w-0 gap-5 xl:grid-cols-[1.6fr_0.9fr] xl:items-start sm:gap-6"
      >
        <div className="flex min-w-0 flex-col gap-3 sm:gap-4">
          <p className="text-sm font-semibold tracking-wider text-text-green">
            <span aria-hidden="true">&gt; </span>
            {overview.greeting}
          </p>

          <div className="flex min-w-0 flex-wrap items-baseline gap-2">
            <h1
              id="overview-heading"
              className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1 font-sans font-bold text-text-def"
            >
              <span className="sr-only">Diego Alessandro Pineda Calagua</span>
              <span
                aria-hidden="true"
                className="flex min-h-[2.25rem] items-end text-2xl sm:min-h-[2.5rem] sm:text-3xl"
              >
                {displayName}
                <motion.span
                  aria-hidden="true"
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: [1, 1, 0, 1] }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.9, repeat: Infinity, ease: "linear" }
                  }
                  className="ml-1 inline-block h-7 w-[2px] rounded-full bg-text-green align-middle sm:h-8"
                />
              </span>
              <span
                aria-hidden="true"
                className="text-xl font-medium text-text-description sm:text-2xl"
              >
                Pineda Calagua
              </span>
            </h1>
          </div>

          <p className="text-sm leading-relaxed text-text-green">
            {overview.roles.map((role, index) => (
              <span key={role}>
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="mx-1.5 select-none text-text-green/60 sm:mx-2"
                  >
                    °
                  </span>
                ) : null}
                <span>{role}</span>
              </span>
            ))}
          </p>
          <p className="max-w-2xl text-sm leading-relaxed break-words text-text-description sm:text-base">
            {overview.bio}
          </p>
        </div>

        <motion.div
          tabIndex={0}
          role="region"
          aria-label={overview.photoAriaLabel}
          initial={shouldReduceMotion ? false : { opacity: 0, x: 28, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.6, ease: "easeOut", delay: 0.2 }
          }
          whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
          className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[22px] border border-bg-3 bg-bg-2 p-2.5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-def focus-visible:border-text-green/80 sm:rounded-[28px] sm:p-3"
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }
            className="relative overflow-hidden rounded-[18px] border border-bg-3 bg-bg-def sm:rounded-[22px]"
          >
            {!imageLoaded && (
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-10"
              >
                <motion.div
                  animate={
                    shouldReduceMotion ? undefined : { x: ["-20%", "120%"] }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 1.3, repeat: Infinity, ease: "easeInOut" }
                  }
                  className="h-full w-1/3 bg-gradient-to-r from-transparent via-text-green/20 to-transparent blur-xl"
                />
                <div className="absolute inset-0 animate-pulse bg-bg-3/60" />
              </motion.div>
            )}

            <Image
              src="/photo.jpg"
              alt={overview.photoAlt}
              width={720}
              height={900}
              priority
              onLoad={() => setImageLoaded(true)}
              className="h-[280px] w-full rounded-[18px] object-cover transition-all duration-500 sm:h-[360px] sm:rounded-[22px] md:h-[420px]"
            />
          </motion.div>

          <motion.div
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? { opacity: 0.4 }
                : { opacity: [0.3, 0.7, 0.3], scale: [1, 1.12, 1] }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }
            className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-text-green/10 blur-3xl"
          />
        </motion.div>
      </section>

      <section aria-labelledby="repositorio-heading" className="space-y-3">
        <h2
          id="repositorio-heading"
          className="inline-flex items-center border-l-4 border-text-green pl-2 text-sm font-semibold uppercase tracking-wider text-text-green"
        >
          {overview.repositoryHeading}
        </h2>
        <div className="grid min-w-0 gap-3 sm:gap-4 md:grid-cols-3">
          {overview.cards.map((card, index) => (
            <OverviewCard
              key={card.title}
              title={card.title}
              value={card.value}
              accent={card.accent}
              icon={iconByKey[card.icon]}
              description={card.description}
              delay={index * 0.12}
            />
          ))}
        </div>
      </section>

      <div className="grid min-w-0 gap-5 pt-2 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.section
          aria-labelledby="estudios-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.45, delay: 0.2 }
          }
          className="min-w-0 border border-bg-3 bg-bg-2 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-5"
        >
          <div className="mb-4 flex items-center gap-3">
            <h2
              id="estudios-heading"
              className="inline-flex items-center border-l-4 border-text-green pl-2 text-sm font-semibold uppercase tracking-wider text-text-green"
            >
              {overview.studiesHeading}
            </h2>
          </div>

          <div className="space-y-4">
            {overview.education.map((item) => (
              <article
                key={item.title}
                tabIndex={0}
                aria-label={`${item.title} (${item.period})`}
                className="relative rounded-xl border border-bg-3 bg-bg-def/80 p-3 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-def hover:border-text-green/40 focus-visible:border-text-green sm:p-4"
              >
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-[2px] bg-text-green"
                />
                <div className="ml-3 min-w-0 space-y-2">
                  <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-2">
                    <h3 className="text-sm font-semibold break-words text-text-def sm:text-base">
                      {item.title}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.18em] text-text-description">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed break-words text-text-description">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          aria-labelledby="certificados-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.45, delay: 0.3 }
          }
          className="min-w-0 border border-bg-3 bg-bg-2 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-5"
        >
          <div className="mb-4 flex items-center gap-3">
            <h2
              id="certificados-heading"
              className="inline-flex items-center border-l-4 border-text-green pl-2 text-sm font-semibold uppercase tracking-wider text-text-green"
            >
              {overview.certificatesHeading}
            </h2>
          </div>

          <div className="grid min-w-0 gap-3">
            {overview.certificates.map((cert) => (
              <motion.article
                key={cert.name}
                tabIndex={0}
                aria-label={`${cert.name} — ${cert.issuer}, ${cert.period}`}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                className="min-w-0 rounded-xl border border-bg-3 bg-bg-def/60 p-3 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-def hover:border-text-green/40 focus-visible:border-text-green"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex min-w-0 items-start gap-3">
                    <div
                      aria-hidden="true"
                      className="shrink-0 rounded-lg border border-bg-3 bg-bg-def p-2 text-text-green"
                    >
                      <Image
                        src={cisco_logo}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.18em] text-text-description">
                        {cert.issuer}
                      </p>
                      <h3 className="mt-1 text-sm font-semibold break-words text-text-def sm:text-base">
                        {cert.name}
                      </h3>
                    </div>
                  </div>

                  <div className="inline-flex w-fit shrink-0 items-center gap-1 rounded-full border border-bg-3 bg-bg-def px-2.5 py-1 text-xs uppercase tracking-[0.12em] text-text-green">
                    <BadgeCheck aria-hidden="true" className="h-3.5 w-3.5" />
                    <span>{cert.period}</span>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 sm:gap-3">
                  <span className="border border-bg-3 bg-bg-2 px-2.5 py-1 text-xs uppercase tracking-[0.14em] text-text-description">
                    {cert.badge}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-text-description">
                    <ShieldCheck
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-text-green"
                    />
                    <span>{overview.verified}</span>
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}
