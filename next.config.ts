import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**", // Allows images from any HTTPS domain
            },
        ],
    },
};

export default nextConfig;
