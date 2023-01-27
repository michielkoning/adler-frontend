<script setup lang="ts">
  import PageByURIQuery from "~/graphql/Pages/PageByURI.gql";
  import type { IPage } from "~~/interfaces/IContent";

  defineI18nRoute({
    paths: {
      en: "/:pathMatch(.*)*",
      nl: "/:pathMatch(.*)*",
      de: "/:pathMatch(.*)*",
    },
  });

  const route = useRoute();

  const { data } = await useAsyncQuery<{ page: IPage }>(PageByURIQuery, {
    uri: route.fullPath,
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
    <div v-html="page.content" />
  </div>
</template>
