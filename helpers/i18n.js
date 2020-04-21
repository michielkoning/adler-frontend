export default (i18n, translations, key, keyToReplace) => {
  const translatedPages = {}
  const currentLocale = i18n.locale
  i18n.locales.forEach((locale) => {
    const translatedPage = translations.find(
      (translation) => translation.language.slug === locale.code,
    )
    if (locale.code === currentLocale) {
      return
    }

    let translatedPageUrl = ''
    if (translatedPage) {
      // translatedPageUrl = translatedPage.relativeUrl.replace(
      //   `/${locale.code}/`,
      //   '',
      // )

      translatedPageUrl = translatedPage[keyToReplace].replace(
        `/${locale.code}/`,
        '',
      )
    }

    translatedPages[locale.code] = {
      [key]: translatedPageUrl,
    }
  })
  return translatedPages
}
