<script lang="ts" setup>
const localePath = useLocalePath();
const { data, error } = await useFetch("/api/posts", {
  transform: (response) => {
    return response.map((item) => {
      return {
        ...item,
        link: localePath({
          name: "posts-details",
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
