<script lang="ts" setup>
defineI18nRoute({
  paths: {
    nl: "/[...slug]",
  },
});

const route = useRoute();

const { data } = await useFetch("/api/pages", {
  params: {
    slug: route.params.slug,
  },
});
</script>

<template>
  <app-page v-if="data" v-bind="data.content">
    <related-pages :parent-id="data.id" />
  </app-page>
</template>
