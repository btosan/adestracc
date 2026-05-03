import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Unsplash
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Cloudinary (next-cloudinary)
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      // Cloudinary upload/fetch via your cloud name (covers all subpaths)
      {
        protocol: "https",
        hostname: "*.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;