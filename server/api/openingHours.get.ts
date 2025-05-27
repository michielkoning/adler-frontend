import { openingHoursSchema } from "../schemas/OpeningHoursSchema";

export default defineEventHandler(async () => {
  const { apiUrl } = useAppConfig();

  const response = await $fetch(`${apiUrl}adler/v1/settings`);

  const parsed = parseData(response, openingHoursSchema);

  return parsed;
});
