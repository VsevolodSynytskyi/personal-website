/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
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
