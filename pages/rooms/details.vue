<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/zimmer/[slug]",
    en: "/rooms/[slug]",
    nl: "/kamers/[slug]",
  },
});

const route = useRoute();

const { data, error } = await useFetch("/api/room", {
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
    <room-prices :prices="data.prices" />
    <room-services v-if="data.services.length" :items="data.services" />
    <template #sidebar>
      <div></div>
    </template>
    <!-- <btn-book-room :url="data.bookUrl" /> -->
  </app-page>
  <pre>{{ data }}</pre>
</template>
