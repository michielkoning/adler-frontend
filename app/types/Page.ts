import type { Content } from "./Content";
import type { Seo } from "./Seo";

export type Page = {
  id: number;
  slug: string;
  parentId: number;
  content: Content;
  seo: Seo;
  locales: {
    de?: string;
    nl?: string;
    en?: string;
  };
};
