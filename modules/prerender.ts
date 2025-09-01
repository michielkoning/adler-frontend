import { ofetch } from "ofetch";
import { defineNuxtModule, addPrerenderRoutes } from "nuxt/kit";

const PAGESIZE = 20;
// const PAGESIZE = 99
const FETCH_TIMEOUT = 0;

const pauseFetching = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, FETCH_TIMEOUT);
  });
};

const defaultRoutes = [
  "/de",
  "/en",
  "/nl",
  "/de/blog",
  "/en/blog",
  "/nl/blog",
  "/de/kontakt",
  "/en/contact",
  "/nl/contact",
  "/de/arrangements",
  "/en/arrangements",
  "/nl/arrangementen",
  "/de/last-minutes",
  "/en/last-minutes",
  "/nl/last-minutes",
  "/de/privacy-policy",
  "/en/privacy-policy",
  "/nl/privacy-policy",
  "/de/zimmer",
  "/en/rooms",
  "/nl/kamers",
];
export default defineNuxtModule({
  hooks: {
    "build:before": async () => {
      if (process.env.NODE_ENV === "development") {
        return;
      }

      if (process.env.NUXT_SSR === "false") {
        return;
      }

      const baseUrl = "https://api.adler-lingenau.com/wp-json/";

      addPrerenderRoutes(defaultRoutes);

      const fetchPagesByType = async (
        type: "posts" | "room" | "pages" | "arrangement",
      ) => {
        let hasNextPage = true;
        let page = 1;
        while (hasNextPage) {
          const apiUrl = `${baseUrl}wp/v2/${type}/?_fields[]=link&per_page=${PAGESIZE}&page=${[
            page,
          ]}&status=publish`;
          const response = await ofetch
            .raw(apiUrl)
            .catch((error) => error.data);
          const totalPages = Number(response.headers.get("X-WP-TotalPages"));
          const urls = response._data.map((r: { link: string }) => {
            let link = r.link.replace("https://www.adler-lingenau.com/", "/");
            if (type === "room") {
              link = link.replace("/de/rooms/", "/de/zimmer/");
              link = link.replace("/nl/rooms/", "/nl/kamers/");
            } else if (type === "arrangement") {
              link = link.replace("/nl/arrangements/", "/nl/arrangementen/");
            }
            return link;
          });
          addPrerenderRoutes(urls);
          if (page >= totalPages) {
            hasNextPage = false;
          }
          page = page + 1;
          pauseFetching();
        }
      };
      await fetchPagesByType("posts");
      await fetchPagesByType("arrangement");
      await fetchPagesByType("room");
      await fetchPagesByType("pages");
    },

    close: (nuxt) => {
      if (!nuxt.options._prepare) process.exit();
    },
  },
});
