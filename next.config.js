const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placeholder.com"],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react"],
  },
}

module.exports = nextConfig

