import z from 'zod'

export const LocalesSchema = z.object({
  de: z.string().optional(),
  nl: z.string().optional(),
  en: z.string().optional(),
})
