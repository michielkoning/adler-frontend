const numberFormats = {
  currency: {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "symbol",
  },
};

export default defineI18nConfig(() => ({
  legacy: false,
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
  datetimeFormats: {
    nl: {
      short: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
      day: {
        weekday: "short",
      },
    },
    en: {
      short: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
      day: {
        weekday: "short",
      },
    },
    de: {
      short: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
      day: {
        weekday: "short",
      },
    },
  },
}));
