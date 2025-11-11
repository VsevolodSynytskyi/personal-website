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
  const className = clsx("link", props.className);

  return (
    <Link
      {...{ ...props, className }}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
};

export default CustomLink;
