/** @type {import('next').NextConfig} */
const withLess = require("next-with-less")

const nextConfig = withLess({
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    return config
  },
  devIndicators: {
    buildActivity: false,
  },
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        "primary-color": "#6667ab",
        "input-height-base": "50px",
      },
    },
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
})

module.exports = nextConfig
