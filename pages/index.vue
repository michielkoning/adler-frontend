<script setup lang="ts">
  import PageQuery from "~/graphql/Pages/Page.gql";
  import type { IPage } from "~~/interfaces/IContent";
  import { homePageId } from "~/data/pages";

  defineI18nRoute({
    paths: {
      en: "/",
      nl: "/",
      de: "/",
    },
  });

  const { locale } = useI18n();
  const route = useRoute();

  const { data } = await useAsyncQuery<{ page: IPage }>(PageQuery, {
    pageId: homePageId[locale.value],
  });

  const page = computed(() => {
    if (data.value) {
      return data.value.page;
    }
    return null;
  });

  useMeta(page);
</script>

<template>
  <div v-if="page">
    <h1>{{ page.title }}</h1>
  </div>
</template>
