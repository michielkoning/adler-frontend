export const title = "Familienhotel Adler ***S";
export const baseUrl = "https://www.adler-lingenau.com/";
export const themeColor = "#98012e";
export const categories = ["travel"];
export const facebook = "https://www.facebook.com/adler.hotel";
export const twitter = "@Adler_Hotel";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-27",
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
    "~/components/Archive",
    "~/components/Arrangements/Prices",
    "~/components/Arrangements",
    "~/components/Contact",
    "~/components/Facilitites",
    "~/components/Forms/Elements",
    "~/components/Forms",
    "~/components/Gallery",
    "~/components/Highlights",
    "~/components/Home",
    "~/components/LastMinutes",
    "~/components/Layout",
    "~/components/Menu",
    "~/components/Menu/MainNavigation",
    "~/components/Posts",
    "~/components/Pages",
    "~/components/RelatedList",
    "~/components/Rooms/Details",
    "~/components/Rooms/Prices",
    "~/components/Rooms",
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
        prefix: "adler",
        dir: "./assets/icons",
      },
    ],
  },
  stylelint: {
    lintOnStart: false,
  },
  i18n: {
    strategy: "prefix",
    defaultLocale: "de",
    baseUrl,
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
  app: {
    head: {
      meta: [
        {
          name: "og:publisher",
          content: facebook,
        },
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,viewport-fit=cover",
        },

        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black",
        },
        { name: "apple-mobile-web-app-title", content: title },
        { name: "theme-color", content: themeColor },
        { property: "og:site_name", content: title },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: twitter },
        { name: "twitter:creator", content: twitter },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          href: "/icons/manifest-icon-512.maskable.png",
          sizes: "512x512",
        },
        {
          rel: "icon",
          href: "/favicon.svg",
          type: "image/svg+xml",
        },
      ],
    },
  },
});
