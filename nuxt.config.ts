import { nl, de, en, numberFormats, dateTimeFormats } from "./locales";

export default defineNuxtConfig({
  typescript: {
    tsConfig: {
      compilerOptions: {
        isolatedModules: true,
        esModuleInterop: true,
        types: ["@types/body-scroll-lock", "@types/workbox-window"],
      },
    },
  },
  // generate: {
  //   routes,
  // },
  nitro: {
    preset: "netlify",
  },

  postcss: {
    plugins: {
      "postcss-import": {},
      "postcss-url": {},
      cssnano: true,
      "postcss-mixins": {
        mixinsDir: "./assets/css/mixins/",
      },

      "postcss-preset-env": {
        features: {
          "nesting-rules": true,
          "custom-media-queries": true,
          "media-query-ranges": true,
        },
      },
    },
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://api.adler-lingenau.com/nl//graphql",
        // httpEndpoint: "/.netlify/functions/graphql",
      },
    },
  },
  pwa: {
    manifest: {
      name: "Hotel Gasthof Adler",
      background_color: "#fff",
      theme_color: "#98012e",
      short_name: "Adler",
      orientation: "portrait-primary",
      categories: ["travel"],
    },
    meta: {
      appleStatusBarStyle: "black-translucent",
      mobileApp: true,
      mobileAppIOS: true,
      theme_color: "#98012e",
      twitterCard: "summary_large_image",
    },
  },
  css: ["~/assets/css/base.css"],
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/apollo",
    "nuxt-svgo",
    "@kevinmarrec/nuxt-pwa",
  ],
  i18n: {
    baseUrl: "https://www.adler-lingenau.com/nl/",
    defaultLocale: "de",
    strategy: "prefix",
    fallbackLocale: "de",
    rootRedirect: "de",
    locales: [
      {
        name: "Deutsch",
        code: "de",
        iso: "de",
      },
      {
        name: "Nederlands",
        code: "nl",
        iso: "nl",
      },
      {
        name: "English",
        code: "en",
        iso: "en",
      },
    ],
    vueI18n: {
      messages: {
        en,
        nl,
        de,
      },
      numberFormats: {
        nl: {
          currency: numberFormats.currency,
        },
        en: {
          currency: numberFormats.currency,
        },
        de: {
          currency: numberFormats.currency,
        },
      },
      dateTimeFormats: {
        nl: {
          short: dateTimeFormats.short,
          day: dateTimeFormats.day,
        },
        en: {
          short: dateTimeFormats.short,
          day: dateTimeFormats.day,
        },
        de: {
          short: dateTimeFormats.short,
          day: dateTimeFormats.day,
        },
      },
    },
  },
});
