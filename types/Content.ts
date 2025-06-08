import type { Image } from "./Image";

export type Content = {
  title: string;
  text: string;
  image?: Image;
  date?: string;
  gallery?: Image[];
};
