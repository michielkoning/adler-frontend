<script lang="ts" setup>
const { locale } = useI18n();

const localePath = useLocalePath();

const { data, error } = await useFetch("/api/arrangements", {
  params: {
    locale,
  },
  transform: (response) => {
    return response.map((item) => {
      return {
        ...item,
        link: localePath({
          name: "arrangements-details",
          params: {
            slug: item.link,
          },
        }),
      };
    });
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <archive-list v-if="data" :items="data" />
</template>
