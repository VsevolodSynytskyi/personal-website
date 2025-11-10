import type { MDXComponents } from "mdx/types";
import CustomLink from "@/components/CustomLink";

const components: MDXComponents = {};

export const useMDXComponents: () => MDXComponents = () => ({
  ...components,
  a: ({ href = "", children, ...props }) => (
    <CustomLink href={href} {...props}>
      {children}
    </CustomLink>
  ),
});
