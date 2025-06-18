import { locales } from "@/lib/i18n/locales";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

const ScreenReaderLanguageSwitcher: React.FC = async () => {
  const currentLocale = await getLocale();
  const otherLocales = locales.filter((l) => l !== currentLocale);

  return (
    <div className="sr-only">
      {otherLocales.map((locale) => (
        <Link key={locale} href="/" locale={locale} lang={locale} />
      ))}
    </div>
  );
};

export default ScreenReaderLanguageSwitcher;
