import splashscreens from './config/splashscreens'
import googleAnalytics from './config/googleAnalytics'
import facebookPixel from './config/facebookPixel'
import generate from './config/generate'
import i18n from './config/i18n'
import pwa from './config/pwa'
import apollo from './config/apollo'
import { apiUrl, baseUrl, title } from './data/siteDetails'
import { twitterUrl } from './data/socialMedia'

export default {
  target: 'static',
  modern: 'client',
  env: {
    baseUrl,
  },
  components: [
    '~/components/Animations',
    '~/components/LastMinutes',
    '~/components/Archive',
    '~/components/Arrangements/Details',
    '~/components/Arrangements/Highlights',
    '~/components/Arrangements/Prices',
    '~/components/Contact',
    '~/components/Facilitites',
    '~/components/Forms',
    '~/components/Forms/Elements',
    '~/components/Gallery',
    '~/components/Gallery/Images',
    '~/components/Highlights',
    '~/components/Home',
    '~/components/Images',
    '~/components/Layout',
    '~/components/Menu',
    '~/components/Menu/MainNavigation',
    '~/components/Posts/Related',
    '~/components/RelatedList',
    '~/components/Rooms/Details',
    '~/components/Rooms/Prices',
    '~/components/Shared',
    '~/components/Sidebar',
    '~/components',
  ],
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
        name: 'format-detection',
        content: 'telephone=no',
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
    '~/plugins/filters/currency',
    '~/plugins/vuelidate',
    { src: '~/plugins/google-maps', mode: 'client' },
    { src: '~/plugins/vue-announcer.js', mode: 'client' },
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
  ],
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/stylelint-module',
    'nuxt-facebook-pixel-module',
  ],
  googleAnalytics,
  facebook: facebookPixel,
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
}
