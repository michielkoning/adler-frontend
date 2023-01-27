<script setup lang="ts">
  import PageQuery from "~/graphql/Pages/Page.gql";
  import type { IPage } from "~~/interfaces/IContent";

  defineI18nRoute({
    paths: {
      en: "/",
      nl: "/",
      de: "/",
    },
  });

  const { locale } = useI18n();

  const { data } = await useAsyncQuery<{ page: IPage }>(PageQuery, {
    pageId: 22,
  });

  const page = computed(() => {
    if (data.value) {
      return data.value.page;
    }
    return null;
  });

  useMeta(page);

  // export default {
  //   async asyncData({ app, params }) {
  //     const language = app.i18n.locale;
  //     const { defaultClient } = app.apolloProvider;

  //     const page = await defaultClient.query({
  //       query: PageQuery,
  //       variables: {
  //         pageId: homePageId[language],
  //       },
  //     });
  //     const relatedPosts = await defaultClient.query({
  //       query: RelatedPostsQuery,
  //       variables: {
  //         language: language.toUpperCase(),
  //         notIn: 0,
  //       },
  //     });
  //     return {
  //       page: page.data.page,
  //       relatedPosts: relatedPosts.data.relatedPosts,
  //     };
  //   },

  //   head() {
  //     return getSeoMetaData(this.page.seo);
  //   },
  // };
</script>

<template>
  <h1>{{ $t("prices") }}</h1>
  <div>{{ locale }}</div>
  <div>{{ page }}</div>
</template>
