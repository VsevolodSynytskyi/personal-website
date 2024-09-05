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
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

// Merge MDX config with Next.js config
const withNextIntl = createNextIntlPlugin("./lib/i18n/request.ts");

// next-intl setup
export default withNextIntl(nextConfig);
