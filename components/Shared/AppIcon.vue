<script lang="ts" setup>
withDefaults(
  defineProps<{
    icon?: string;
    width?: number;
    height?: number;
    title?: string | null;
  }>(),
  {

    width: 24,
    height: 24,
    title: null,
  },
);
</script>

<template>
  <nuxt-icon class="icon" :name="icon" />
</template>

<style lang="postcss" scoped>
.icon {
  width: auto;
  height: auto;
  aspect-ratio: 1;
}
</style>
