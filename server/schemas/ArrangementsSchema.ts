import { z } from "zod";
import { ArchiveSchema } from "./ArchiveSchema";

export const ArrangementsSchema = z.array(
  ArchiveSchema.extend({
    acf: z.object({
      price_from: z.string().transform((val) => Number(val)),
    }),
  }),
);
