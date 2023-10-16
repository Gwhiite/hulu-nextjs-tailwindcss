/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["image.tmdb.org"],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
