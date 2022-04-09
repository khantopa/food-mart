/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    return config;
  },
  webpackDevMiddleware: (config) => config,
};

module.exports = nextConfig;
