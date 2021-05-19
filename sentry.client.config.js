import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://a72fd6778e1540a3b9095d5e021e67a6@o687099.ingest.sentry.io/5772981',
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
})
