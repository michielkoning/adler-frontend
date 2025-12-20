const settings = {
  title: 'Familienhotel Adler ***S',
  baseUrl: 'https://www.adler-lingenau.com/',
  themeColor: '#98012e',
  backgroundColor: '#98012e',
  categories: ['travel'],
  facebook: 'https://www.facebook.com/adler.hotel',
  twitter: '@Adler_Hotel',
  description:
    'Urlaub mit Kindern im Bregenzerwald. Machen Sie Urlaub mit Kindern in unserem Familienhotel in Vorarlberg im Bregenzerwald. Buchen Sie Ihren Familienurlaub mit Kindern im Hotel im Bregenzerwald, Vorarlberg, Österreich online"',
  locale: 'de',
}

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/eslint', // "@nuxtjs/stylelint-module",
    '@nuxt/image',
    'nuxt-schema-org',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@vite-pwa/nuxt',
    '@vee-validate/nuxt',
    '@nuxt/scripts',
  ],

  components: [
    '~/components/Animations',
    '~/components/Archive',
    '~/components/Arrangements/Prices',
    '~/components/Arrangements',
    '~/components/Contact',
    '~/components/Facilitites',
    '~/components/Forms/Elements',
    '~/components/Forms',
    '~/components/Gallery',
    '~/components/Highlights',
    '~/components/Home',
    '~/components/LastMinutes',
    '~/components/Layout',
    '~/components/Menu',
    '~/components/Menu/MainNavigation',
    '~/components/Posts',
    '~/components/Pages',
    '~/components/RelatedList',
    '~/components/Rooms/Details',
    '~/components/Rooms/Prices',
    '~/components/Rooms',
    '~/components/Shared',
    '~/components/Sidebar',
    '~/components',
  ],
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      meta: [
        {
          name: 'og:publisher',
          content: settings.facebook,
        },
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1,viewport-fit=cover',
        },

        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black',
        },
        { name: 'apple-mobile-web-app-title', content: settings.title },
        { property: 'og:site_name', content: settings.title },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: settings.twitter },
        { name: 'twitter:creator', content: settings.twitter },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          href: '/icons/apple-touch-icon-180x180.png',
        },
        {
          rel: 'icon',
          href: '/icons/favicon.svg',
          type: 'image/svg+xml',
        },
      ],
    },

  },
  css: ['~/assets/css/base.css'],
  runtimeConfig: {
    public: {
      scripts: {
        metaPixel: {
          id: '',
        },
        googleAnalytics: {
          id: '',
        },
      },
    },
  },
  compatibilityDate: '2025-08-03',

  nitro: {
    preset: 'netlify',
  },
  // typescript: {
  //   typeCheck: true,
  // },
  postcss: {
    plugins: {
      'postcss-mixins': {
        mixinsDir: './app/assets/css/mixins/',
      },

      'postcss-preset-env': {
        browsers: 'last 2 versions',
        stage: 4,

        features: {
          'nesting-rules': true,
          'custom-media-queries': true,
          'media-query-ranges': true,
        },
      },
      'autoprefixer': {},
      'cssnano': {},
    },
  },
  telemetry: false,
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    families: [
      {
        name: 'Dosis',
        provider: 'google',
        global: true,
        weights: [500],
      },
    ],
  },
  // stylelint: {
  //   lintOnStart: false,
  // },
  i18n: {
    strategy: 'prefix',
    experimental: {
      strictSeo: true,
    },
    defaultLocale: 'de',
    baseUrl: settings.baseUrl,
    customRoutes: 'meta',
    locales: [
      {
        name: 'Deutsch',
        code: 'de',
        language: 'de',
        file: 'de.json',
      },
      {
        name: 'Nederlands',
        code: 'nl',
        language: 'nl',
        file: 'nl.json',
      },
      {
        name: 'English',
        code: 'en',
        language: 'en',
        file: 'en.json',
      },
    ],
  },
  icon: {
    componentName: 'NuxtIcon',
    mode: 'svg',
    customCollections: [
      {
        prefix: 'adler',
        dir: './app/assets/icons',
      },
    ],
  },
  image: {
    densities: [1, 2],
    domains: ['api.adler-lingenau.com'],
  },
  pwa: {
    pwaAssets: {
      config: true,
    },
    strategies: 'generateSW',
    registerWebManifestInRouteRules: true,
    registerType: 'autoUpdate',
    manifest: {
      background_color: settings.backgroundColor,
      theme_color: settings.themeColor,
      categories: settings.categories,
      lang: settings.locale,
      name: settings.title,
      orientation: 'portrait-primary',
      description: settings.description,
      short_name: settings.title,
      edge_side_panel: {},
      dir: 'ltr',
      icons: [
        {
          src: '/icons/pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: '/icons/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icons/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/icons/maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
  },
  scripts: {
    registry: {
      metaPixel: true,
      googleAnalytics: true,
    },
  },
})
