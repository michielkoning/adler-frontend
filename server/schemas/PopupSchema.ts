import { z } from 'zod'

const PopupTextSchema = z.object({
  title: z.string().optional().transform(val => val !== '' ? val : undefined),
  text: z.string().optional().transform(val => val !== '' ? val : undefined),
  link: z.string().optional().transform(val => val !== '' ? val : undefined),
  link_label: z.string().optional().transform(val => val !== '' ? val : undefined),
}).transform(val => {
  if (val.title) {
    return val
  }
  return undefined
})

export const PopupSchema = z.object({
  activate: z.boolean().default(false),
  image: z.object({
    id: z.number(),
    alt: z.string().default(''),
    url: z.string(),
    width: z.number(),
    height: z.number(),
  }).transform((val) => {
    return {
      id: val.id,
      src: val.url,
      width: val.width,
      height: val.height,
      alt: val.alt,
    }
  }),
  de: PopupTextSchema,
  en: PopupTextSchema,
  nl: PopupTextSchema,
})

export const PageListSchema = z.array(PopupSchema)
