import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.flotiq.com',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'new-cms-staging.api.dev.cdwv.pl',
        port: '',
        pathname: '/image/**',
      },
    ],
  },
};

export default nextConfig;
