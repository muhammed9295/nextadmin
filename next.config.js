/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    images: {
        remotePatterns: [
            {
                protocol:"https",
                hostname:"media.licdn.com",
            }
        ],
    }
}

module.exports = nextConfig
