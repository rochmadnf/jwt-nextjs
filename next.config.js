/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/register",
        destination: "/auth/register",
      },
    ];
  },
};

module.exports = nextConfig;
