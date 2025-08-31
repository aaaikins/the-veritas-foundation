/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  serverExternalPackages: [],
  // Disable static optimization for error pages
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
}

export default nextConfig