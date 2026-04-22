/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api-proxy/:path*',
                destination: 'https://railway.app*',
            },
        ]
    },
}

export default nextConfig;
