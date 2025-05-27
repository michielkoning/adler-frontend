import type { Room } from "./Room";

export type LastMinute = {
  id: number;
  link: string;
  title: string;
  room: Room;
  isSold: boolean;
  prices: {
    kids: number;
    adults: number;
    price: string;
  }[];
  dates: {
    from?: Date;
    until?: Date;
  };
};
