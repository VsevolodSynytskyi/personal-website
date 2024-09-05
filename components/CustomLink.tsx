import { Locale } from "@/lib/i18n/locales";
import clsx from "clsx";
import { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import { Link as LinkLocalized } from "../lib/i18n/routing";
import { LinkPreview } from "./aceternity-ui/link-preview";

interface CustomLinkProps extends LinkProps {
  href: string;
  withPreview?: boolean;
  className?: string;
  locale?: Locale;
}

const CustomLink: React.FC<PropsWithChildren<CustomLinkProps>> = (props) => {
  const className = clsx(
    "underline text-primary underline-offset-4",
    props.className
  );

  const { withPreview, ...linkProps } = props;

  if (withPreview) {
    return (
      <LinkPreview
        {...{
          ...linkProps,
          className,
        }}
      >
        <LinkLocalized {...{ ...linkProps, className }}>
          {props.children}
        </LinkLocalized>
      </LinkPreview>
    );
  }
  return (
    <LinkLocalized {...{ ...props, className }}>{props.children}</LinkLocalized>
  );
};

export default CustomLink;
