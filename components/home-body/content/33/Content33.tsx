import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import React from "react";

const Content33: React.FC = async () => {
  const fileName = `Content33`;
  const locale = useLocale();

  try {
    const Content = (await import(`./${fileName}${locale}.mdx`)).default;
    return <Content />;
  } catch (error) {
    console.group("Error on Content00");
    console.log(error);
    console.groupEnd();

    notFound();
  }
};

export default Content33;
