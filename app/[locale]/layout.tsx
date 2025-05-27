import { Toaster } from "@/components/aceternity-ui/sonner";
import environment from "@/lib/environment";
import Hotjar from "@/lib/hotjar/Hotjar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { locales } from "@/lib/i18n/locales";

import { PageParamLocale } from "@/lib/customTypes";
import { routing } from "@/lib/i18n/routing";
import React, { PropsWithChildren } from "react";
import "../globals.css";
import {
  BASE_URL,
  DOMAIN_NAME,
  GITHUB_PROFILE_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
  YOUTUBE_CHANNEL_URL,
} from "@/lib/constants";
import clsx from "clsx";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const generateMetadata: (props: {
  params: PageParamLocale;
}) => Promise<Metadata> = async (props) => {
  const params = props.params;

  const { locale } = params;

  const t = await getTranslations({ locale, namespace: "metadata" });

  const metadata: Metadata = {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: BASE_URL,
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `${BASE_URL}/${locale}`])
      ),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: BASE_URL,
      siteName: DOMAIN_NAME,
      type: "website",
      locale,
    },
    icons: {
      icon: "./favicon.png",
    },
    other: {
      lang: locale,
    },
  };
  return metadata;
};

interface RootLayoutProps {
  params: PageParamLocale;
}

const LangLayout: React.FC<PropsWithChildren<RootLayoutProps>> = async (
  props
) => {
  const params = await props.params;

  const { children } = props;

  const { locale } = params;
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  const t = await getTranslations({
    locale,
    namespace: "metadata",
  });

  return (
    <html lang={locale}>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Toaster closeButton position="top-center" />
          {children}
          {environment === "production" && (
            <>
              <SpeedInsights />
              <Analytics />
              <Hotjar />
            </>
          )}
        </NextIntlClientProvider>

        <script
          /*
      Google Search Structured Data
      https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
      */
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: t("fullName"),
              alternateName: [
                "Всеволод Синицький",
                "Vsevolod Synytskyi",
                "Сєва",
                "Сева",
                "Seva",
              ],
              url: BASE_URL,
              sameAs: [
                LINKEDIN_URL,
                GITHUB_PROFILE_URL,
                TELEGRAM_URL,
                INSTAGRAM_URL,
                YOUTUBE_CHANNEL_URL,
              ],
              jobTitle: t("jobTitle"),
              address: {
                "@type": "PostalAddress",
                addressLocality: t("city"),
                addressCountry: t("country"),
              },
            }),
          }}
        />
      </body>
    </html>
  );
};
export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

export default LangLayout;
