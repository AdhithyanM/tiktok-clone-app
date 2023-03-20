/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.google.com",
      "c0.wallpaperflare.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
