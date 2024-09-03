import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";
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
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
const withNextIntl = createNextIntlPlugin("./lib/i18n/request.ts");

// next-intl setup + MDX setup
export default withMDX(withNextIntl(nextConfig));
