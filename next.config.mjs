import createNextIntlPlugin from "next-intl/plugin";
import createMDX from "@next/mdx";
/** @type {import('next').NextConfig} */

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
    ];
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withNextIntl = createNextIntlPlugin("./lib/i18n/request.ts");
const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withNextIntl(withMDX(nextConfig));
