import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Instagram CDN - profile pictures & media
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        // Instagram scontent servers
        protocol: "https",
        hostname: "**.fbcdn.net",
      },
      {
        // Instagram graph API images
        protocol: "https",
        hostname: "graph.instagram.com",
      },
      {
        // Google profile pictures (Firebase Google Sign-In)
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        // Google user content (other Google CDN)
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
      {
        // UI Avatars
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        // Placeholder Images
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        // ImgBB (Portfolio data)
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://webdevelopmentai.in/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
