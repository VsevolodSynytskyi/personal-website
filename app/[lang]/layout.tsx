import { Toaster } from "@/components/aceternity-ui/sonner";
import environment from "@/lib/environment";
import Hotjar from "@/lib/hotjar/Hotjar";
import { locales } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Seva",
  description: "Seva's personal website",
  icons: {
    icon: "./favicon.png",
  },
};

interface RootLayoutProps {
  params: {
    lang: string;
  };
}

const RootLayout: React.FC<PropsWithChildren<RootLayoutProps>> = ({
  children,
  params,
}) => {
  const { lang } = params;
  return (
    <html lang={lang}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <Toaster closeButton position="top-center" />
        {children}
        {environment === "production" && (
          <>
            <SpeedInsights />
            <Analytics />
            <Hotjar />
          </>
        )}
      </body>
    </html>
  );
};

export async function generateStaticParams() {
  const langParams = locales.map((lang) => ({
    lang,
  }));

  return langParams;
}

export default RootLayout;
