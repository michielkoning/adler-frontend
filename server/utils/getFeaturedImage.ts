import { z } from "zod";
import type { Image } from "~/types/Image";
import { FeaturedImageSchema } from "../schemas/FeaturedImageSchema";

export const getFeaturedImage = (
  featuredImage: z.infer<typeof FeaturedImageSchema>[] | undefined
) => {
  if (!featuredImage) {
    return undefined;
  }
  const image = featuredImage[0];

  if (!image?.media_details?.sizes) {
    return undefined;
  }

  if (!image.source_url) {
    return undefined;
  }

  const result: Image = {
    alt: image.alt_text ?? "",
    width: image.media_details.width,
    height: image.media_details.height,
    src: image.source_url,
  };
  return result;
};
