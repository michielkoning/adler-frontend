import { z } from 'zod'

const NotificationTextSchema = z.object({
  title: z.string().optional().transform(val => val !== '' ? val : undefined),
  text: z.string().optional().transform(val => val !== '' ? val : undefined),
  link: z.string().optional().transform(val => val !== '' ? val : undefined),
  link_label: z.string().optional().transform(val => val !== '' ? val : undefined),
}).transform((val) => {
  if (val.title) {
    const getLink = () => {
      if (val.link && val.link_label) {
        return {
          to: val.link,
          title: val.link_label,
        }
      }
      return undefined
    }
    return {
      title: val.title,
      content: val.text,
      link: getLink(),
    }
  }
  return undefined
})

export const NotificationSchema = z.object({
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
  de: NotificationTextSchema,
  en: NotificationTextSchema,
  nl: NotificationTextSchema,
})
