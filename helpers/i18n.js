export const replacePlaceholder = 'REDIRECT_LOCALE_PATH'

export default (i18n, translations, paramKey, keyToReplace) => {
  if (!translations.length) return

  const translatedPages = {}
  const currentLocale = i18n.locale
  i18n.locales.forEach((locale) => {
    const translatedPage = translations.find(
      (translation) => translation.language.slug === locale.code,
    )
    if (locale.code === currentLocale) {
      return
    }

    let translatedPageUrl = null
    if (translatedPage) {
      translatedPageUrl = translatedPage[keyToReplace].replace(
        `/${locale.code}/`,
        '',
      )
    } else {
      translatedPageUrl = replacePlaceholder
    }

    translatedPages[locale.code] = {
      [paramKey]: translatedPageUrl,
    }
  })
  return null
}
