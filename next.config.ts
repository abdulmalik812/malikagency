import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Enable React strict mode for better dev warnings
  reactStrictMode: true,
  // Compress responses
  compress: true,
  // Power by header off for security
  poweredByHeader: false,
};

export default nextConfig;
