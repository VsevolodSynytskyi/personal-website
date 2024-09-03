import { defaultLocale } from "@/lib/i18n/locales";
import { PropsWithChildren } from "react";

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <html lang={defaultLocale}>
    <body>{children}</body>
  </html>
);

export default DefaultLayout;
