export default {
  defaultLocale: 'nl',
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
  ],
  vueI18nLoader: true,
  vueI18n: {
    numberFormats: {
      nl: {
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
    },
  },
}
