import type { Page } from "./Page";

export type ArrangementPrice = {
  label: string;
  value: number;
  nights: number;
  adults: number;
  kids: number;
  age_kids: number;
  extra_night: number;
};

export type ArrangementPrices = ArrangementPrice[];

export type Arrangement = Page & {
  prices: ArrangementPrices;
};
