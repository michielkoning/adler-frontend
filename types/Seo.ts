type SeoImage = {
  width: number;
  height: number;
  url: string;
  type?: "image/jpeg" | "image/gif" | "image/png";
};

export type Seo = {
  title: string;
  ogTitle: string;
  description: string;
  ogDescription: string;
  ogImage: SeoImage[];
  twitterImage: SeoImage[];
  articleModifiedTime?: string;
};
