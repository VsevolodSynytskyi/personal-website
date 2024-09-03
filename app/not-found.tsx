"use client";

import { defaultLocale } from "@/lib/i18n/locales";
import { usePathname, useRouter } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  const router = useRouter();
  router.replace(`/${defaultLocale}${pathName}`);

  return null;
}
