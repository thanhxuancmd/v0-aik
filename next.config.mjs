/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.basehub.com",
      },
      {
        protocol: "https",
        hostname: "basehub.earth",
      },
    ],
  },
  // Suppress BaseHub warnings during build
  webpack: (config, { isServer }) => {
    if (isServer && !process.env.BASEHUB_TOKEN) {
      config.externals.push({
        'basehub': 'commonjs basehub'
      })
    }
    return config
  }
};

export default nextConfig;
