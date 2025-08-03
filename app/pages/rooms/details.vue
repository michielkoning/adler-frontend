<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/zimmer/[slug]",
    en: "/rooms/[slug]",
    nl: "/kamers/[slug]",
  },
});

const route = useRoute();
const { locale } = useI18n();

const { data, error } = await useFetch("/api/room", {
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
  <the-page v-if="data" v-bind="data.content" :show-resmio="false">
    <room-prices :prices="data.prices" />
    <room-services v-if="data.services.length" :items="data.services" />
    <template #sidebar>
      <btn-book-room :title="data.content.title" :url="data.bookUrl" />
      <related-rooms-section :exclude="data.id" />
    </template>
  </the-page>
</template>
