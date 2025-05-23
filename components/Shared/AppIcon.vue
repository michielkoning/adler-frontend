<script lang="ts" setup>
defineProps<{
  icon: string;
}>();
</script>

<template>
  <nuxt-icon class="icon" :name="icon" />
</template>

<style lang="postcss" scoped>
.icon {
  height: auto;
  aspect-ratio: 1;
}
</style>
