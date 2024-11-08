import { z } from "zod";
import { MenuListSchema } from "../schemas/MenuSchema";

export default defineEventHandler(async (event) => {
  const { pageIds } = useAppConfig();
  const baseUrl = {
    lang: "nl",
    fields: ["title", "link", "parent"],
  };

  const environmentPageId = pageIds.environmentPageId.nl;
  const hotelPageId = pageIds.hotelPageId.nl;
  const arrangementsPageId = pageIds.arrangementsPageId.nl;
  const roomsPageId = pageIds.roomsPageId.nl;

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
      include: [
        environmentPageId,
        hotelPageId,
        arrangementsPageId,
        roomsPageId,
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
    ]).then(([hotelChildPages, environmentChildPages]) => {
      resolve([...hotelChildPages, ...environmentChildPages]);
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
    getMenuById(roomsPageId),
    getMenuById(arrangementsPageId),
  ];

  return menu;
});
