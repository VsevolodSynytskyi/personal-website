"use client";

import { defaultLocale } from "@/lib/i18n/locales";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${defaultLocale}${pathName}`);
  });

  return null;
}
