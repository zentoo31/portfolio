"use client";

import { CpuIcon } from "lucide-react";
import Clock from "../ui/clock";
import LanguageSwitcher from "../ui/language-switcher";
import { motion } from "motion/react";
import { useLanguage } from "@/i18n/language-provider";

export default function TopBar() {
  const { t } = useLanguage();

  return (
    <div className="sticky top-0 z-40 flex flex-col gap-2 border-b border-[#1F2128] bg-bg-2/95 px-3 py-2.5 font-mono backdrop-blur-sm sm:gap-3 sm:px-4 sm:py-3 md:flex-row md:items-center md:justify-between">
      <div className="flex min-w-0 flex-row items-center justify-between gap-3 md:justify-start md:gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <CpuIcon className="h-5 w-5 shrink-0" color="#00FF66" />
          <span className="truncate text-sm sm:text-base">
            {t.topBar.systemName}
          </span>
        </div>
        <LanguageSwitcher className="shrink-0 md:hidden" />
      </div>

      <div className="flex min-w-0 flex-row items-center justify-between gap-2 sm:gap-4 md:contents">
        <div className="min-w-0 truncate text-xs text-text-description sm:text-sm md:text-base">
          <span className="sm:hidden">
            {t.topBar.status}: {t.topBar.statusValue}
          </span>
          <span className="hidden sm:inline">
            {t.topBar.status}. . . . . . . . . . . . . . : {t.topBar.statusValue}
          </span>
        </div>

        <LanguageSwitcher className="hidden shrink-0 md:inline-flex" />

        <div className="flex shrink-0 flex-row items-center gap-2 text-xs text-text-description sm:text-sm md:text-base">
          <motion.span
            className="h-2 w-2 shrink-0 rounded-full bg-text-green"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="whitespace-nowrap">
            <span className="sr-only sm:not-sr-only sm:inline">
              {t.topBar.sysOnline}
              <span className="mx-1" aria-hidden="true">
                ||
              </span>
            </span>
            <Clock />
          </span>
        </div>
      </div>
    </div>
  );
}
