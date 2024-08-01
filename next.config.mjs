/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pub-284c8c6794044acbba7a81db85aa17d0.r2.dev"
            }
        ]
    }
};

export default nextConfig;
