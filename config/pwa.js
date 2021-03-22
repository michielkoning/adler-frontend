import { title, categories, twitter, themeColor } from './../data/siteDetails'

// PWA module configuration: https://go.nuxtjs.dev/pwa
export default {
  manifest: {
    background_color: themeColor,
    theme_color: themeColor,
    categories,
    lang: 'de',
    name: title,
    orientation: 'portrait-primary',
    short_name: 'Adler',
  },
  meta: {
    appleStatusBarStyle: 'black-translucent',
    mobileApp: true,
    mobileAppIOS: true,
    theme_color: themeColor,
    twitterCard: 'summary_large_image',
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    twitterCreator: twitter,
    twitterSite: twitter,
  },
}
