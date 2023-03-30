/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  output: 'standalone',
  experimental: {
    // outputFileTracingRoot: path.join(__dirname, '../../packages/**/*'),
    // outputFileTracingIncludes: {
    //   '*': ['./apps/blog/node_modules/next'],
    // },
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
