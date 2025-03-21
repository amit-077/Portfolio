/** @type {import('next').NextConfig} */
const nextConfig = { eslint: { ignoreDuringBuilds: true } };

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
    runtimeCaching: [
      {
        urlPattern: /^\/offline$/,
        handler: "CacheFirst", // Serve from cache first
        options: {
          cacheName: "offline-cache",
          expiration: { maxEntries: 1 },
        },
      },
      {
        urlPattern: /\/_next\/static\/.*/i,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "static-assets",
          expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 7 },
        },
      },
      {
        urlPattern: /.*/i,
        handler: "NetworkFirst",
        options: {
          cacheName: "general-cache",
          expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 7 },
        },
      },
    ],
  });
  
  module.exports = withPWA({
    experimental: {
      appDir: true,
    },
  });
  
  

module.exports = nextConfig;
