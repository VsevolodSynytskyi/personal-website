"use client";

import { languages, locales } from "@/lib/i18n/locales";
import clsx from "clsx";
import { useMotionValue, useTransform } from "framer-motion";
import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const LanguageSwitcher: React.FC = () => {
  const currentLocale = useLocale();
  const currentLocaleIndex = locales.findIndex(
    (locale) => locale === currentLocale
  );

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const switchLanguage = (locale: string) => {
    console.log(locale);
    // Extract current path segments
    const pathSegments = pathname.split("/");

    // Replace the language segment with the new language
    pathSegments[1] = locale;

    // Reconstruct the path with the new language
    const newPathname = pathSegments.join("/");

    // Navigate to the new path while preserving query parameters
    const pathNameToPush = `${newPathname}?${searchParams.toString()}`;

    router.push(pathNameToPush);
  };

  const x = useMotionValue(currentLocaleIndex);
  const xTransformed = useTransform(x, [0, 1], [0, 50]);

  return (
    <div className="relative px-2">
      {currentLocaleIndex === 0 && (
        <div className="absolute top-0 left-0 z-0 h-full">
          <svg
            width="45"
            height="26"
            viewBox="0 0 45 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.000298865 8.0003L0.000672432 18.0003C0.00083748 22.4185 3.58251 26 8.00067 26H33.4317C36.8577 26 39.9034 23.8185 41.0061 20.5747L44.4054 10.5747C46.1692 5.38591 42.3114 0 36.831 0H8.0003C3.5819 0 0.000133808 3.5819 0.000298865 8.0003Z"
              className="fill-accent"
            />
          </svg>
        </div>
      )}
      {currentLocaleIndex === 1 && (
        <div className="absolute top-0 -right-0">
          <svg
            width="45"
            height="26"
            viewBox="0 0 45 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.9997 17.9997L44.9993 7.9997C44.9992 3.58154 41.4175 0 36.9993 0H11.5683C8.14227 0 5.09656 2.18154 3.99393 5.42527L0.594646 15.4253C-1.16918 20.6141 2.68858 26 8.169 26H36.9997C41.4181 26 44.9999 22.4181 44.9997 17.9997Z"
              className="fill-accent"
            />
          </svg>
        </div>
      )}
      <div
        onClick={() => {
          const newLocale =
            currentLocaleIndex < locales.length - 1
              ? locales[currentLocaleIndex + 1]
              : locales[0];

          switchLanguage(newLocale);
        }}
        className="relative z-10 flex flex-row items-center gap-2 cursor-pointer select-none"
      >
        {languages.map((lang, index) => {
          const isCurrent = lang.locale === currentLocale;
          return (
            <React.Fragment key={lang.locale}>
              {!!index && <div>/</div>}

              <div
                className={clsx(
                  isCurrent ? "" : "underline",
                  "transition-all "
                )}
              >
                {lang.shortName}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
