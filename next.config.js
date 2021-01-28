const { nextI18NextRewrites } = require('next-i18next/rewrites')
const withBabelMinify = require('next-babel-minify')()

const localeSubpaths = {}

module.exports = withBabelMinify({
  compress: true,
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
})