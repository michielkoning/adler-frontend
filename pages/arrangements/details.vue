<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/arrangements/[slug]",
    en: "/arrangements/[slug]",
    nl: "/arrangementen/[slug]",
  },
});

const route = useRoute();

const { data, error } = await useFetch("/api/arrangement", {
  params: {
    slug: route.params.slug,
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <the-page v-if="data" v-bind="data.content">
    <arrangement-prices :prices="data.prices" />
  </the-page>
</template>
