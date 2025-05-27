import type { z } from "zod";

export const parseData = <T extends z.ZodTypeAny>(data: unknown, schema: T) => {
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    throw createError({
      statusMessage: parsed.error.name,
      data: parsed.error.issues,
    });
  }

  return parsed.data as z.infer<T>;
};
