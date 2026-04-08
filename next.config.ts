import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fivecred.com.br',
      },
    ],
  },
};

export default nextConfig;
