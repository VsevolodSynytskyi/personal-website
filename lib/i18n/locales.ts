// Locales

export const languages: {
  locale: string;
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

export const locales: string[] = languages.map(({ locale }) => locale);
export const defaultLocale = locales[0];
