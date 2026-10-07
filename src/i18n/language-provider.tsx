"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import { dictionaries, type Dictionary } from "./dictionaries";
import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "./types";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(stored)) {
      return stored;
    }
  } catch {
    // Ignore storage access errors
  }
  return DEFAULT_LOCALE;
}

let currentLocale: Locale = DEFAULT_LOCALE;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getClientSnapshot(): Locale {
  currentLocale = readStoredLocale();
  return currentLocale;
}

function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

function writeLocale(next: Locale) {
  currentLocale = next;
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
  } catch {
    // Ignore storage write errors
  }
  emit();
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = dictionaries[locale].meta.htmlLang;
  }, [locale]);

  const value: LanguageContextValue = {
    locale,
    setLocale: writeLocale,
    t: dictionaries[locale],
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
