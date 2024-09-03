import { Toaster } from "@/components/aceternity-ui/sonner";
import environment from "@/lib/environment";
import Hotjar from "@/lib/hotjar/Hotjar";
import { locales } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

type PageParams = {
  locale: string;
};

export const generateMetadata: (props: {
  params: PageParams;
}) => Promise<Metadata> = async ({ params: { locale } }) => {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const metadata: Metadata = {
    title: t("title"),
    description: "Seva's personal website",
    icons: {
      icon: "./favicon.png",
    },
  };
  return metadata;
};

interface RootLayoutProps {
  params: PageParams;
}

const RootLayout: React.FC<PropsWithChildren<RootLayoutProps>> = async ({
  children,
  params,
}) => {
  const { locale } = params;
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
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
      </body>
    </html>
  );
};

export const generateStaticParams: () => Promise<PageParams[]> = async () => {
  const localeParams = locales.map((locale) => ({
    locale,
  }));

  return localeParams;
};

export default RootLayout;
