"use client";

import NotFoundPage from "@/components/NotFoundPage";
import { NextPage } from "next";
import { useTranslations } from "next-intl";

const NotFound: NextPage = () => {
  const t = useTranslations("NotFoundPage");
  return (
    <html lang={"en"}>
      <body>
        <NotFoundPage />
      </body>
    </html>
  );
};

export default NotFound;
