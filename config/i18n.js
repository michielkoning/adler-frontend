import { baseUrl } from './../data/siteDetails'

const numberFormats = {
  currency: {
    style: 'currency',
    currency: 'EUR',
    currencyDisplay: 'symbol',
  },
}

const dateTimeFormats = {
  short: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
  day: {
    weekday: 'short',
  },
}

export default {
  defaultLocale: 'nl',
  baseUrl,
  lazy: true,
  rootRedirect: 'nl',
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
      name: 'Deutsch',
      code: 'de',
      iso: 'de-DE',
      file: 'de.json',
    },
  ],
  vueI18nLoader: true,
  vueI18n: {
    silentFallbackWarn: true,
    fallbackLocale: 'nl',
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
}
