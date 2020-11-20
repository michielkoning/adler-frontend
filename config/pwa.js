import { themeColor, title } from '../data/siteDetails'

const lang = 'de'

export default {
  manifest: {
    name: title,
    short_name: 'Adler',
    description: 'Familienhotel & Gasthof Adler, in Lingenau im Bregenzerwald',
    start_url: '/de/',
    lang,
    theme_color: themeColor,
    background_color: themeColor,
    purpose: 'maskable',
  },
}
