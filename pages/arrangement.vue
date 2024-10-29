<script lang="ts" setup>
defineI18nRoute({
  paths: {
    nl: "/arrangementen/[slug]",
  },
});

const route = useRoute();

const { data } = await useFetch("/api/arrangement", {
  params: {
    slug: route.params.slug,
  },
});
</script>

<template>
  <!-- <div>{{ data }}</div> -->
  <app-page v-if="data" v-bind="data.content">
    <arrangement-prices :prices="data.prices" />
    <pre>{{ data.response }}</pre>
  </app-page>
</template>
