const numberFormats = {
  currency: {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "symbol",
  },
};

const dateTimeFormats = {
  short: {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
  day: {
    weekday: "short",
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
}));
