/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/shresth-ornaments-2',
  assetPrefix: '/shresth-ornaments-2',
}

module.exports = nextConfig