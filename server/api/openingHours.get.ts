import { openingHoursSchema } from "../schemas/OpeningHoursSchema";

export default defineEventHandler(async (event) => {
  const { apiUrl } = useAppConfig();

  const response = await $fetch(`${apiUrl}adler/v1/settings`);

  const parsed = openingHoursSchema.safeParse(response);

  if (!parsed.success) {
    throw createError({
      data: parsed.error.format(),
    });
  }

  return parsed.data;
});
