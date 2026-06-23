import { z } from 'zod'
import { MenuListSchema } from '../schemas/MenuSchema'
import { getUrl } from '../utils/getUrl'
import { LocaleSchema } from '../schemas/LocaleSchema'
import { type MenuItem } from '~~/shared/types/Menu'

const querySchema = z.object({
  locale: LocaleSchema,
})

export default defineCachedEventHandler(async (event): Promise<MenuItem[]> => {
  const query = await getValidatedQuery(event, body => parseData(body, querySchema))

  const { pageIds } = useAppConfig()
  const baseUrl = {
    fields: ['title', 'link', 'parent'],
  }

  const environmentPageId = pageIds.environmentPageId[query.locale]
  const hotelPageId = pageIds.hotelPageId[query.locale]
  const kidsPageId = pageIds.kidsPageId[query.locale]
  const arrangementsPageId = pageIds.arrangementsPageId[query.locale]
  const roomsPageId = pageIds.roomsPageId[query.locale]
  const contactPageId = pageIds.contactPageId[query.locale]

  const getMainPages: Promise<z.infer<typeof MenuListSchema>> = new Promise(async (resolve) => {
    const url = getUrl({
      ...baseUrl,
      type: 'pages',
      locale: query.locale,
      include: [
        environmentPageId,
        hotelPageId,
        kidsPageId,
        arrangementsPageId,
        roomsPageId,
        contactPageId,
      ],
    })
    const response = await $fetch<z.infer<typeof MenuListSchema>>(url)
    const data = parseData(response, MenuListSchema)
    resolve(data)
  })

  const getChildPagesByParent = (parent: number): Promise<z.infer<typeof MenuListSchema>> =>
    new Promise(async (resolve) => {
      const url = getUrl({
        ...baseUrl,
        type: 'pages',
        orderby: 'menu_order',
        parent,
        locale: query.locale,
      })
      const response = await $fetch<z.infer<typeof MenuListSchema>>(url)
      const data = parseData(response, MenuListSchema)
      resolve(data)
    })

  const getChildPages: Promise<z.infer<typeof MenuListSchema>> = new Promise((resolve) => {
    return Promise.all([
      getChildPagesByParent(hotelPageId),
      getChildPagesByParent(environmentPageId),
      getChildPagesByParent(kidsPageId),
    ]).then(([hotelChildPages, environmentChildPages, kidsChildPages]) => {
      resolve([
        ...hotelChildPages,
        ...environmentChildPages,
        ...kidsChildPages,
      ])
    })
  })

  const getChildPagesByType = (type: 'room' | 'arrangement'): Promise<z.infer<typeof MenuListSchema>> =>
    new Promise(async (resolve) => {
      const url = getUrl({
        ...baseUrl,
        orderby: 'title',
        type,
        locale: query.locale,
      })
      const response = await $fetch<z.infer<typeof MenuListSchema>>(url)
      const data = parseData(response, MenuListSchema)
      resolve(data)
    })

  const pages = await Promise.all([
    getMainPages,
    getChildPages,
    getChildPagesByType('room'),
    getChildPagesByType('arrangement'),
  ]).then(([mainPages, childPages, rooms, arrangements]) => {
    return [
      ...mainPages,
      ...childPages,
      ...rooms.map((item) => {
        return {
          ...item,
          parent: roomsPageId,
        }
      }),
      ...arrangements.map((item) => {
        return {
          ...item,
          parent: arrangementsPageId,
        }
      }),
    ]
  })

  const getMenuById = (id: number) => {
    const item = pages.find(item => item.id === id)

    if (!item) {
      return undefined
    }

    const subMenu = pages.filter(subItem => subItem.parent === item.id)
    return {
      id: item.id,
      title: item.title,
      link: item.link,
      children: subMenu.map((subItem) => {
        return {
          id: subItem.id,
          title: subItem.title,
          link: subItem.link,
        }
      }),
    }
  }

  const menu = [
    getMenuById(hotelPageId),
    getMenuById(environmentPageId),
    getMenuById(kidsPageId),
    getMenuById(arrangementsPageId),
    getMenuById(roomsPageId),
  ]

  return menu.filter(item => item !== undefined)
}, {
  maxAge: 60 * 60,
})
