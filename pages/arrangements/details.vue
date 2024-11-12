<script lang="ts" setup>
defineI18nRoute({
  paths: {
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
  <app-page v-if="data" v-bind="data.content">
    <arrangement-prices :prices="data.prices" />
  </app-page>
</template>
