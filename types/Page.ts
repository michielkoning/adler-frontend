import type { Content } from "./Content";

export type Page = {
  id: number;
  slug: string;
  parentId: number;
  content: Content;
};
