import { themeColor, baseUrl } from '../data/siteDetails'

const lang = 'de'

export default {
  manifest: {
    description: 'Familienhotel & Gasthof Adler, in Lingenau im Bregenzerwald',
    lang,
    start_url: `${baseUrl}${lang}/`,
    theme_color: themeColor,
    background_color: '#f9f9f9',
  },
}
