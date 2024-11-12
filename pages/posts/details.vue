<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/blog/[slug]",
    en: "/blog/[slug]",
    nl: "/blog/[slug]",
  },
});

const route = useRoute();

const { data } = await useFetch("/api/post", {
  params: {
    slug: route.params.slug,
  },
});
</script>

<template>
  <app-page v-if="data" v-bind="data.content" />
</template>
