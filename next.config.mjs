import createNextIntlPlugin from "next-intl/plugin";
import createMDX from "@next/mdx";
/** @type {import('next').NextConfig} */

const locales = ["en", "uk"];

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
        pathname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/qr/tshirt",
        destination: "/",
        permanent: true,
      },
      ...locales.flatMap((locale) => ({
        source: `/${locale}`,
        destination: `/${locale}/content`,
        permanent: true,
      })),
      ...locales.flatMap((locale) => ({
        source: `/${locale}/content`,
        destination: `/${locale}/content/0/0`,
        permanent: true,
      })),
    ];
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withNextIntl = createNextIntlPlugin("./lib/i18n/request.ts");
const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withNextIntl(withMDX(nextConfig));
