<script lang="ts" setup>
const props = defineProps<{
  exclude: number;
}>();

const { locale } = useI18n();

const { data, error } = await useFetch("/api/rooms", {
  params: {
    locale,
    exclude: props.exclude,
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <related-list-section v-if="data" :items="data" :title="$t('relatedRooms')" />
</template>
