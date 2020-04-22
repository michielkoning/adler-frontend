export default (i18n, translations, paramKey, keyToReplace) => {
  const translatedPages = {}
  const currentLocale = i18n.locale
  i18n.locales.forEach((locale) => {
    const translatedPage = translations.find(
      (translation) => translation.language.slug === locale.code,
    )
    if (locale.code === currentLocale) {
      return
    }

    let translatedPageUrl = '-'
    if (translatedPage) {
      translatedPageUrl = translatedPage[keyToReplace].replace(
        `/${locale.code}/`,
        '',
      )
    }

    translatedPages[locale.code] = {
      [paramKey]: translatedPageUrl,
    }
  })
  return translatedPages
}
