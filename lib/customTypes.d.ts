import { Locale } from "./i18n/locales";
import { ContentPageParam, contentPageParams, } from "@/lib/content-slider/useContentPageParamState";

// Content Matrix:
// [i][j] - each element represents entire component content
// where:
// i - value of content_type (professional vs personal)
// j - value of read_time (short vs descriptive)

export type ContentMatrix<T = React.ReactNode> = {
  [locale in Locale]: T;
}[][];

// Page Params
export type PageParamLocale = {
  locale: string;
};

export type PageParamContent = Record<ContentPageParam, string>;

export type ContentParamValues = Record<ContentPageParam, number>;
