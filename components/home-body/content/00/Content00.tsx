import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import React from "react";
import {
  default as Content00en,
  default as Content00uk,
} from "./Content00en.mdx";

const Content00: React.FC = () => {
  const locale = useLocale();

  switch (locale) {
    case "en":
      return <Content00en />;
    case "uk":
      return <Content00uk />;
    default:
      notFound();
  }
};

export default Content00;
