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
};

// next-intl setup
const withNextIntl = createNextIntlPlugin("./lib/i18n/request.ts");

export default withNextIntl(nextConfig);
