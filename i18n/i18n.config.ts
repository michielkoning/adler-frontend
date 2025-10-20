export default defineI18nConfig(() => ({
  legacy: false,
  numberFormats: {
    nl: {
      currency: {
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'symbol',
        trailingZeroDisplay: 'stripIfInteger',
      },
    },
    en: {
      currency: {
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'symbol',
        trailingZeroDisplay: 'stripIfInteger',
      },
    },
    de: {
      currency: {
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'symbol',
        trailingZeroDisplay: 'stripIfInteger',
      },
    },
  },
  datetimeFormats: {
    nl: {
      short: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
      day: {
        weekday: 'short',
      },
    },
    en: {
      short: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
      day: {
        weekday: 'short',
      },
    },
    de: {
      short: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
      day: {
        weekday: 'short',
      },
    },
  },
}))
