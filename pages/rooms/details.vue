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
  <the-page v-if="data" v-bind="data.content">
    <room-prices :prices="data.prices" />
    <room-services v-if="data.services.length" :items="data.services" />
    <template #sidebar>
      <related-list-section
        v-if="data.relatedRooms.length"
        :items="data.relatedRooms"
        :title="$t('relatedRooms')"
      />
    </template>
    <!-- <btn-book-room :url="data.bookUrl" /> -->
  </the-page>
  <pre>{{ data }}</pre>
</template>
