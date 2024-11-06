<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/zimmer/[slug]",
    en: "/rooms/[slug]",
    nl: "/kamers/[slug]",
  },
});

const route = useRoute();

const { data } = await useFetch("/api/room", {
  params: {
    slug: route.params.slug,
  },
});
</script>

<template>
  <app-page v-if="data" v-bind="data.content">
    <room-services v-if="data.services.length" :items="data.services" />
  </app-page>
  <pre>{{ data }}</pre>
</template>
