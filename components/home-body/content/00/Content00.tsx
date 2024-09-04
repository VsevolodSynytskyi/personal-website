import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import React from "react";

const Content00: React.FC = async () => {
  const fileName = `Content00`;
  const locale = useLocale();
  try {
    const Content = (await import(`./${fileName}${locale}.mdx`)).default;
    return <Content />;
  } catch (error) {
    notFound();
  }
};

export default Content00;
