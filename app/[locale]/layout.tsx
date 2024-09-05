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

import { PageParamLocale } from "@/lib/customTypes";
import { routing } from "@/lib/i18n/routing";
import { PropsWithChildren } from "react";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const generateMetadata: (props: {
  params: PageParamLocale;
}) => Promise<Metadata> = async ({ params: { locale } }) => {
  const t = await getTranslations({ locale, namespace: "metadata" });

  const metadata: Metadata = {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "./favicon.png",
    },
  };
  return metadata;
};

interface RootLayoutProps {
  params: PageParamLocale;
}

const LangLayout: React.FC<PropsWithChildren<RootLayoutProps>> = async ({
  children,
  params,
}) => {
  const { locale } = params;
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
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
      </body>
    </html>
  );
};
export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

export default LangLayout;
