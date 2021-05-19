const { withSentryConfig } = require('@sentry/nextjs')

const withOptimizedImages = require('next-optimized-images')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const path = require('path')

const moduleExports = withBundleAnalyzer(
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

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions)
