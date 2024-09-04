import { defaultLocale } from "@/lib/i18n/locales";
import clsx from "clsx";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const RootLayout: React.FC<PropsWithChildren> = (props) => {
  return (
    <html lang={defaultLocale}>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {props.children}
      </body>
    </html>
  );
};

export default RootLayout;
