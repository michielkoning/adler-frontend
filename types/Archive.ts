import type { Image } from "./Image";

export type Archive = {
  id: number;
  title: string;
  link: string;
  text: string;
  image?: Image;
  date?: string;
  price?: number;
};
