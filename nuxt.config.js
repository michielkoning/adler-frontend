import pkg from './package'
import splashscreens from './config/splashscreens'
import googleAnalytics from './config/googleAnalytics'
import manifest from './config/manifest'
import i18n from './config/i18n'
import apollo from './config/apollo'
import sitemap from './config/sitemap'
import { apiUrl, baseUrl, title } from './data/siteDetails'
import { twitterUrl } from './data/socialMedia'

export default {
  mode: 'universal',
  env: {
    baseUrl,
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'nl',
    },
    title: pkg.name,
    titleTemplate: '%s',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        content: 'en_US',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: title,
      },
      // Twitter Card
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:site',
        content: `@${twitterUrl}`,
      },
      {
        name: 'twitter:creator',
        content: `@${twitterUrl}`,
      },
    ],
    link: [
      ...splashscreens,
      {
        rel: 'dns-prefetch',
        href: apiUrl,
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/styles/base.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/axios', '~/plugins/google-maps', '~/plugins/vuelidate'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/apollo',
    'nuxt-svg-loader',
    'nuxt-i18n',
  ],
  buildModules: ['@nuxtjs/google-analytics'],
  googleAnalytics,
  manifest,
  i18n,
  /*
   ** Axios module configuration
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
    transpile: [/^vue2-google-maps($|\/)/],

    postcss: {
      plugins: {
        'postcss-mixins': {
          mixinsDir: './styles/mixins/',
        },
        'postcss-preset-env': {
          importFrom: ['./styles/media-queries/media-queries.css'],

          features: {
            'nesting-rules': true,
            'custom-media-queries': true,
            'media-query-ranges': true,
          },
        },
      },
    },
  },

  apollo,
  sitemap,
}
