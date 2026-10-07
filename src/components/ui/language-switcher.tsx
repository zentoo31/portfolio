"use client";

import { useLanguage } from "@/i18n/language-provider";
import { LOCALES, type Locale } from "@/i18n/types";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({
  className,
}: {
  className?: string;
}) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.languageSwitcher.label}
      className={cn("inline-flex items-center gap-1 font-mono text-sm", className)}
    >
      {LOCALES.map((code: Locale) => {
        const isActive = locale === code;
        const label =
          code === "es" ? t.languageSwitcher.es : t.languageSwitcher.en;

        return (
          <button
            key={code}
            type="button"
            aria-pressed={isActive}
            aria-label={label}
            onClick={() => setLocale(code)}
            className={cn(
              "inline-flex min-h-11 min-w-11 items-center justify-center border px-2 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-2 sm:min-h-9 sm:min-w-9",
              isActive
                ? "border-text-green bg-[#0f1a13] text-text-green"
                : "border-[#1F2128] text-text-description hover:border-text-green/50 hover:text-text-def",
            )}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
