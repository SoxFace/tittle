import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Allow Wikimedia Commons for dev placeholder images.
    // Remove once real bird images are in /public/birds/
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
};

export default nextConfig;
