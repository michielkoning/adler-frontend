<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/arrangements/[slug]",
    en: "/arrangements/[slug]",
    nl: "/arrangementen/[slug]",
  },
});

const route = useRoute();
const { locale } = useI18n();

const { data, error } = await useFetch("/api/arrangement", {
  params: {
    slug: route.params.slug,
    locale,
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <the-page v-if="data" v-bind="data.content">
    <arrangement-prices :prices="data.prices" />

    <template #sidebar>
      <related-list-section
        v-if="data.relatedArrangements.length"
        :items="data.relatedArrangements"
        :title="$t('relatedArrangements')"
      />
    </template>
  </the-page>
</template>
