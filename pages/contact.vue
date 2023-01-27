<script setup lang="ts">
  import PageQuery from "~/graphql/Pages/Page.gql";
  import type { IPage } from "~~/interfaces/IContent";
  import { contactPageId } from "~/data/pages";

  defineI18nRoute({
    paths: {
      de: "/kontakt",
      en: "/contact",
      nl: "/contact",
    },
  });

  const { locale } = useI18n();

  const { data } = await useAsyncQuery<{ page: IPage }>(PageQuery, {
    pageId: contactPageId[locale.value],
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
