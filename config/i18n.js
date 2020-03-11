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
    fallbackLocale: 'de',
    numberFormats: {
      nl: {
        currency: {
          style: 'currency',
          currency: 'EUR',
          currencyDisplay: 'symbol',
        },
      },
      en: {
        currency: {
          style: 'currency',
          currency: 'EUR',
          currencyDisplay: 'symbol',
        },
      },
      de: {
        currency: {
          style: 'currency',
          currency: 'EUR',
          currencyDisplay: 'symbol',
        },
      },
    },
    dateTimeFormats: {
      nl: {
        short: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        },
        long: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          weekday: 'short',
          hour: 'numeric',
          minute: 'numeric',
        },
      },
      en: {
        short: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        },
        long: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          weekday: 'short',
          hour: 'numeric',
          minute: 'numeric',
        },
      },
      de: {
        short: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        },
        long: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          weekday: 'short',
          hour: 'numeric',
          minute: 'numeric',
        },
      },
    },
  },
}
