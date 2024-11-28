<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/[...slug]",
    en: "/[...slug]",
    nl: "/[...slug]",
  },
});

const route = useRoute();

const slug = computed(() => {
  if (Array.isArray(route.params.slug)) {
    const slugs = route.params.slug.filter((slug) => slug !== "");
    return slugs.at(-1) ?? "";
  } else {
    return route.params.slug;
  }
});

const { data, error } = await useFetch("/api/pages", {
  params: {
    slug,
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <the-page v-if="data" v-bind="data.content">
    <related-pages :parent-id="data.id" />
  </the-page>
</template>
