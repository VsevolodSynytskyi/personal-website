import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "./routing";
import { defaultLocale } from "@/lib/i18n/locales";

export default getRequestConfig(async (params) => {
  const locale = (await params.requestLocale) ?? defaultLocale;

  if (!routing.locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
