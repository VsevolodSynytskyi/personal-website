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
      // Basic redirect
      {
        source: "/qr/tshirt",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
