import { z } from "zod";
import { TermsListSchema } from "../schemas/TermsSchema";

export const getTagsByType = (terms: z.infer<typeof TermsListSchema>) => {
  if (!terms.length) return [];
  const tags = terms[0].filter((tag) => tag.taxonomy === "service");

  return tags.map((tag) => tag.name);
};
