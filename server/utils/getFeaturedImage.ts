import { z } from "zod";
import type { Image } from "~/types/Image";
import { FeaturedImageSchema } from "../schemas/FeaturedImageSchema";

export default (
  featuredImage: z.infer<typeof FeaturedImageSchema>[] | undefined,
  title?: string
) => {
  if (!featuredImage) {
    return undefined;
  }
  const image = featuredImage[0];

  if (image.code) {
    return undefined;
  }

  if (!image?.media_details?.sizes) {
    return undefined;
  }

  if (!image.source_url) {
    return undefined;
  }

  const srcSet = Object.values(image.media_details.sizes).map((size) => {
    return `${size.source_url} ${size.width}w`;
  });

  let alt = "";
  if (title) {
    alt = title;
  } else if (image.alt_text) {
    alt = image.alt_text;
  }

  const result: Image = {
    alt,
    width: image.media_details.width,
    height: image.media_details.height,
    src: image.source_url,
  };
  return result;
};
