import clsx from "clsx";
import { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import { Link as LinkLocalized } from "../lib/i18n/routing";
import { LinkPreview } from "./aceternity-ui/link-preview";

interface CustomLinkProps extends LinkProps {
  href: string;
  withPreview?: boolean;
  className?: string;
  locale?: string;
}

const CustomLink: React.FC<PropsWithChildren<CustomLinkProps>> = (props) => {
  const className = clsx(
    "underline text-primary underline-offset-4",
    props.className
  );
  if (props?.withPreview) {
    return (
      <LinkPreview
        {...{
          ...props,
          className,
        }}
      >
        <LinkLocalized {...{ ...props, className }}>
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
