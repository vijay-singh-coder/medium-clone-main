import { hostname } from 'os'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'robust-gerbil-129.convex.cloud'
      },
      {
        protocol: 'https',
        hostname: 'reminiscent-gnu-303.convex.cloud'
      }
    ]
  }
}

export default nextConfig
