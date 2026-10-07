export const LOCALES = ["es", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

export const LOCALE_STORAGE_KEY = "kahawai-locale";

export function isLocale(value: unknown): value is Locale {
  return value === "es" || value === "en";
}
