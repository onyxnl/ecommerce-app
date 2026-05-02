import "server-only";

const dictionaries = {
  en: () => import("../locales/en/common.json").then((module) => module.default),
  fr: () => import("../locales/fr/common.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const SUPPORTED_LOCALES = Object.keys(dictionaries) as Locale[];

export const hasLocale = (locale: string): locale is Locale => locale in dictionaries;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();