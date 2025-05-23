export default defineNuxtConfig({
  compatibilityDate: "2024-08-20",
  telemetry: false,
  css: ["~/assets/css/base.css"],

  devtools: {
    enabled: true,
  },
  image: {
    densities: [1, 2],
    domains: ["api.adler-lingenau.com"],
  },
 
  components: [
    "~/components/Animations",
    // "~/components/LastMinutes",
    "~/components/Archive",
    // "~/components/Arrangements/Details",
    "~/components/Arrangements/Highlights",
    "~/components/Arrangements/Prices",
    "~/components/Contact",
    "~/components/Facilitites",
    "~/components/Forms/Elements",
    "~/components/Forms",
    // "~/components/Gallery/Images",
    "~/components/Gallery",
    // "~/components/Highlights",
    "~/components/Home",
    // "~/components/Images",
    "~/components/Layout",
    "~/components/Menu",
    "~/components/Menu/MainNavigation",
    // "~/components/Posts/Related",
    "~/components/RelatedList",
    "~/components/Rooms/Details",
    "~/components/Rooms/Prices",
    "~/components/Shared",
    "~/components/Sidebar",
    "~/components",
  ],

  nitro: {
    preset: "netlify",
  },

  postcss: {
    plugins: {
      "postcss-mixins": {
        mixinsDir: "./assets/css/mixins/",
      },

      "postcss-preset-env": {
        browsers: "last 2 versions",
        stage: 4,

        features: {
          "nesting-rules": true,
          "custom-media-queries": true,
          "media-query-ranges": true,
        },
      },
    },
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/eslint",
    "@nuxtjs/stylelint-module",
    "@nuxt/image",
    "nuxt-schema-org",
    "@nuxt/fonts",
    "@nuxt/icon",
  ],
  icon: {
    componentName: "NuxtIcon",
    mode: "svg",
    customCollections: [
      {
        prefix: 'adler',
        dir: './assets/icons'
      },
    ],
  },
  stylelint: {
    lintOnStart: false,
  },
  i18n: {
    strategy: "prefix",
    defaultLocale: "de",
    lazy: true,
    baseUrl: "https://www.adler-lingenau.com/",
    locales: [
      {
        name: "Deutsch",
        code: "de",
        language: "de",
        file: "de.json",
      },
      {
        name: "Nederlands",
        code: "nl",
        language: "nl",
        file: "nl.json",
      },
      {
        name: "English",
        code: "en",
        language: "en",
        file: "en.json",
      },
    ],
  },
  fonts: {
    families: [
      {
        name: "Dosis",
        provider: "google",
        global: true,
        weights: [500],
      },
    ],
  },
});
