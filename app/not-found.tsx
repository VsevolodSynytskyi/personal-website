"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { defaultLocale, locales } from "@/lib/i18n/locales";

export default function NotFound() {
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const alreadyHasLocale = locales.some(
      (locale) =>
        pathName === `/${locale}` || pathName.startsWith(`/${locale}/`)
    );

    if (!alreadyHasLocale) {
      router.replace(`/${defaultLocale}${pathName}`);
    }
  }, [pathName, router]);

  return null;
}
