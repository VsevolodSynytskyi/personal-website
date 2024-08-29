import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import { LinkPreview } from "./aceternity-ui/link-preview";

interface CustomLinkProps extends LinkProps {
  href: string;
  withPreview?: boolean;
  className?: string;
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
        {props.children}
      </LinkPreview>
    );
  }
  return <Link {...{ ...props, className }}>{props.children}</Link>;
};

export default CustomLink;
