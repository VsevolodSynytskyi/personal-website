import { Locale } from "./i18n/locales";

// Content Matrix:
// [i][j] - each element represents entire component content
// where:
// i - value of content_type (proffessional vs personal)
// j - value of read_time (short vs descriptive)

export type ContentMatrix<T = React.ReactNode> = {
  [locale in Locale]: T;
}[][];
