import { z } from "zod";

const daySchema = z
  .array(
    z.object({
      start: z.string(),
      end: z.string(),
    })
  )
  .default([]);

export const openingHoursSchema = z.object({
  monday: daySchema,
  tuesday: daySchema,
  wednesday: daySchema,
  thursday: daySchema,
  friday: daySchema,
  saturday: daySchema,
  sunday: daySchema,
});
