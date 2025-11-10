import { Locale } from "@/lib/i18n/locales";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

interface CustomLinkProps extends LinkProps {
  href: string;
  className?: string;
  locale?: Locale;
}

const CustomLink: React.FC<PropsWithChildren<CustomLinkProps>> = (props) => {
  const className = clsx(
    "underline text-primary underline-offset-4",
    props.className
  );

  return <Link {...{ ...props, className }} />;
};

export default CustomLink;
