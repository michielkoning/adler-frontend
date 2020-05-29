import splashscreens from './config/splashscreens'
import googleAnalytics from './config/googleAnalytics'
import facebookPixel from './config/facebookPixel'
import googleTagManager from './config/googleTagManager'
import generate from './config/generate'
import i18n from './config/i18n'
import pwa from './config/pwa'
import apollo from './config/apollo'
import sitemap from './config/sitemap'
import { apiUrl, baseUrl, title } from './data/siteDetails'
import { twitterUrl } from './data/socialMedia'

export default {
  mode: 'universal',
  env: {
    baseUrl,
  },
  server: {
    port: 3333,
    host: '0.0.0.0',
  },
  /*
   ** Headers of the page
   */
  head: {
    title,
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
        rel: 'dns-prefetch',
        href: 'https://connect.facebook.net',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://www.google-analytics.com/analytics.js',
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
  loading: { color: 'var(--nuxt-loader-color)', height: '2px' },

  /*
   ** Global CSS
   */
  css: ['~/styles/base.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios',
    '~/plugins/google-maps',
    '~/plugins/vuelidate',
    '~/plugins/filters/currency',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    'nuxt-i18n',
    'nuxt-svg-loader',
    '@nuxtjs/sitemap',
  ],
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/gtm',
    '@nuxtjs/stylelint-module',
    'nuxt-facebook-pixel-module',
  ],
  googleAnalytics,
  facebook: facebookPixel,
  gtm: googleTagManager,
  pwa,
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
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    },
    loaders: {
      cssModules: {
        modules: {
          // this is where you can alter the generated class names:
          localIdentName: '[local]-[hash:base64:4]',
        },
      },
    },
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
  generate,
  apollo,
  sitemap,
}
