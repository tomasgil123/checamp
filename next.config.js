const withOptimizedImages = require('next-optimized-images')

const path = require('path')

module.exports = withOptimizedImages({
  webpack(config) {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias.images = path.join(__dirname, 'src/assets/images')
    return config
  },
})
