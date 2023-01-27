import de from "./de";
import en from "./en";
import nl from "./nl";

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

export default {
  nl,
  en,
  de,
  numberFormats,
  dateTimeFormats,
};
