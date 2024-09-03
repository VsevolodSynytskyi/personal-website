import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";
import { defaultLocale, locales } from "./locales";

// Get the preferred locale
const getLocale = (request: NextRequest) => {
  const headers = { "accept-language": "en,en;q=0.5" };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
};

export default getLocale;
