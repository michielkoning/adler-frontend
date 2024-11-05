// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
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
    "~/components/LastMinutes",
    "~/components/Archive",
    "~/components/Arrangements/Details",
    "~/components/Arrangements/Highlights",
    "~/components/Arrangements/Prices",
    "~/components/Contact",
    "~/components/Facilitites",
    "~/components/Forms",
    "~/components/Forms/Elements",
    "~/components/Gallery",
    "~/components/Gallery/Images",
    "~/components/Highlights",
    "~/components/Home",
    "~/components/Images",
    "~/components/Layout",
    "~/components/Menu",
    "~/components/Menu/MainNavigation",
    "~/components/Posts/Related",
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
    "nuxt-svgo",
    "@nuxt/eslint",
    "@nuxtjs/stylelint-module",
    "@nuxt/image",
    "nuxt-schema-org",
  ],
  stylelint: {
    lintOnStart: false,
  },

  i18n: {
    strategy: 'prefix',
    defaultLocale: "nl",
    lazy: true,
    baseUrl: "https://www.adler-lingenau.com/",
    locales: [
      {
        language: "nl-NL",
        code: "nl",
      },
    ],
  },
});