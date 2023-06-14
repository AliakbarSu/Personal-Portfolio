/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../..'),
    outputFileTracingIncludes: {
      '*': ['node_modules/next'],
    },
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
