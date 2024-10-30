<script lang="ts" setup>
const localePath = useLocalePath();
const { data } = await useFetch("/api/rooms", {
  transform: (response) => {
    return response.map((item) => {
      return {
        ...item,
        link: localePath({
          name: "rooms-details",
          params: {
            slug: item.link,
          },
        }),
      };
    });
  },
});
</script>

<template>
  <archive-list v-if="data" :items="data" />
</template>
