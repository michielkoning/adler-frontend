import { z } from "zod";

export const LocaleSchema = z.enum(["de", "nl", "en"]);
