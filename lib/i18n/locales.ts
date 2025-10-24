// Locales

export const locales = ["en", "uk"] as const;
export type Locale = (typeof locales)[number];

export const languages: {
  locale: Locale;
  shortName: string;
  fullName: string;
}[] = [
  {
    locale: "en",
    shortName: "eng",
    fullName: "English",
  },
  {
    locale: "uk",
    shortName: "укр",
    fullName: "Українська",
  },
];

export const defaultLocale = locales[0];
export const isValidLocale = (locale: unknown): locale is Locale =>
  typeof locale === "string" && locales.includes(locale as Locale);
