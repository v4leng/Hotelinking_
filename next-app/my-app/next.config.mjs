/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api-proxy/:path*',
        destination: 'https://hotelinking-production.up.railway.app/:path*',
      },
    ]
  },
}

export default nextConfig;