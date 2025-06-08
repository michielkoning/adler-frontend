import type { Image } from "./Image";

export type Content = {
  id: number;
  title: string;
  text: string;
  image?: Image;
  date?: string;
  gallery?: Image[];
};
