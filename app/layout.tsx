import { defaultLocale } from "@/lib/i18n/locales";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { PropsWithChildren } from "react";

const RootLayout: React.FC<PropsWithChildren> = async (props) => {
  const messages = await getMessages();

  return (
    <html lang={defaultLocale}>
      <body>
        <NextIntlClientProvider
          locale={defaultLocale}
          // Make sure to provide at least the messages for `Error`
          messages={messages}
        >
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
