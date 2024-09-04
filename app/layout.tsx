import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { PropsWithChildren } from "react";

const RootLayout: React.FC<PropsWithChildren> = async (props) => {
  const messages = await getMessages();

  console.log(props);

  return (
    <html lang={"en"}>
      <body>
        <NextIntlClientProvider
          locale={"en"}
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
