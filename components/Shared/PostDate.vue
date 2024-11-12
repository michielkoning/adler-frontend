<script lang="ts" setup>
const props = defineProps<{
  date: string;
}>();

const dateTime = computed(() => {
  const date = new Date(props.date)
  return `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
});
</script>

<template>
  <time :datetime="dateTime">
    <i18n-d :value="new Date(date)" format="short" />
  </time>
</template>
