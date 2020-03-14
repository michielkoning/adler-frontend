const currency = {
  style: 'currency',
  currency: 'EUR',
  currencyDisplay: 'symbol',
}

const dateTimeFormatShort = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export default {
  defaultLocale: 'nl',
  lazy: true,
  rootRedirect: 'de',
  strategy: 'prefix',
  langDir: 'locales/',
  locales: [
    {
      name: 'Nederlands',
      code: 'nl',
      iso: 'nl-NL',
      file: 'nl.json',
    },
    {
      name: 'English',
      code: 'en',
      iso: 'en-GB',
      file: 'en.json',
    },
    {
      name: 'Deutscg',
      code: 'de',
      iso: 'de-DE',
      file: 'de.json',
    },
  ],
  vueI18nLoader: true,
  vueI18n: {
    silentFallbackWarn: true,
    fallbackLocale: 'de',
    numberFormats: {
      nl: {
        currency,
      },
      en: {
        currency,
      },
      de: {
        currency,
      },
    },
    dateTimeFormats: {
      nl: {
        short: dateTimeFormatShort,
      },
      en: {
        short: dateTimeFormatShort,
      },
      de: {
        short: dateTimeFormatShort,
      },
    },
  },
}
