import { z } from "zod";
import { MenuListSchema } from "../schemas/MenuSchema";
import { getUrl } from "../utils/getUrl";

const querySchema = z.object({
  locale: z.string(),
});

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, (body) =>
    querySchema.safeParse(body)
  );

  if (!query.success) {
    throw query.error.issues;
  }

  const { pageIds } = useAppConfig();
  const baseUrl = {
    fields: ["title", "link", "parent"],
  };

  const environmentPageId = pageIds.environmentPageId[query.data.locale];
  const hotelPageId = pageIds.hotelPageId[query.data.locale];
  const kidsPageId = pageIds.kidsPageId[query.data.locale];
  const arrangementsPageId = pageIds.arrangementsPageId[query.data.locale];
  const roomsPageId = pageIds.roomsPageId[query.data.locale];
  const contactPageId = pageIds.contactPageId[query.data.locale];

  const validateResponse = (response: z.infer<typeof MenuListSchema>) => {
    const parsed = MenuListSchema.safeParse(response);

    if (!parsed.success) {
      throw createError({
        statusMessage: parsed.error.issues.map((i) => i.path).join(","),
      });
    }

    return parsed.data.map((item) => {
      return {
        id: item.id,
        title: item.title.rendered,
        link: item.link,
        parent: item.parent,
      };
    });
  };

  const getMainPages = new Promise((resolve) => {
    const url = getUrl({
      ...baseUrl,
      type: "pages",
      locale: query.data.locale,
      include: [
        environmentPageId,
        hotelPageId,
        kidsPageId,
        arrangementsPageId,
        roomsPageId,
        contactPageId,
      ],
    });
    $fetch<z.infer<typeof MenuListSchema>>(url).then((response) =>
      resolve(validateResponse(response))
    );
  });

  const getChildPagesByParent = (parent: number) =>
    new Promise((resolve) => {
      const url = getUrl({
        ...baseUrl,
        type: "pages",
        parent,
      });
      $fetch<z.infer<typeof MenuListSchema>>(url).then((response) =>
        resolve(validateResponse(response))
      );
    });

  const getChildPages = new Promise((resolve) => {
    return Promise.all([
      getChildPagesByParent(hotelPageId),
      getChildPagesByParent(environmentPageId),
      getChildPagesByParent(kidsPageId),
    ]).then(([hotelChildPages, environmentChildPages, kidsChildPages]) => {
      resolve([
        ...hotelChildPages,
        ...environmentChildPages,
        ...kidsChildPages,
      ]);
    });
  });

  const getChildPagesByType = (type: "room" | "arrangement") =>
    new Promise((resolve) => {
      const url = getUrl({
        ...baseUrl,
        type,
      });
      $fetch<z.infer<typeof MenuListSchema>>(url).then((response) =>
        resolve(validateResponse(response))
      );
    });

  const pages = await Promise.all([
    getMainPages,
    getChildPages,
    getChildPagesByType("room"),
    getChildPagesByType("arrangement"),
  ]).then(([mainPages, childPages, rooms, arrangements]) => {
    return [
      ...mainPages,
      ...childPages,
      ...rooms.map((item) => {
        return {
          ...item,
          parent: roomsPageId,
        };
      }),
      ...arrangements.map((item) => {
        return {
          ...item,
          parent: arrangementsPageId,
        };
      }),
    ];
  });

  const getMenuById = (id: number) => {
    const item = pages.find((item) => item.id === id);

    const subMenu = pages.filter((subItem) => subItem.parent === item.id);
    return {
      id: item.id,
      title: item.title,
      link: item.link,
      children: subMenu.map((subItem) => {
        return {
          id: subItem.id,
          title: subItem.title,
          link: subItem.link,
        };
      }),
    };
  };

  const menu = [
    getMenuById(hotelPageId),
    getMenuById(environmentPageId),
    getMenuById(kidsPageId),
    getMenuById(roomsPageId),
    getMenuById(arrangementsPageId),
    getMenuById(contactPageId),
  ];

  return menu;
});
