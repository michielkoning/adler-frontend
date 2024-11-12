<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/blog/[slug]",
    en: "/blog/[slug]",
    nl: "/blog/[slug]",
  },
});

const route = useRoute();

const { data, error } = await useFetch("/api/post", {
  params: {
    slug: route.params.slug,
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <app-page v-if="data" v-bind="data.content" />
</template>
