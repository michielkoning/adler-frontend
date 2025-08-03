import type { Content } from "./Content";

export type RoomPrices = {
  fullBoardHighSeason?: number;
  halfBoardHighSeason?: number;
  fullBoardLowSeason?: number;
  halfBoardLowSeason?: number;
};

export type Room = {
  id: number;
  slug: string;
  prices: RoomPrices;
  bookUrl: string;
  content: Content;
  services: string[];
};
