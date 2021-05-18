const withOptimizedImages = require('next-optimized-images')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const path = require('path')

module.exports = withBundleAnalyzer(
  withOptimizedImages({
    webpack(config) {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias.images = path.join(__dirname, 'src/assets/images')
      return config
    },
    images: {
      domains: ['res.cloudinary.com'],
    },
  })
)
