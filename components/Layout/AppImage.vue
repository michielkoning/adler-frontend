<script lang="ts" setup>
import type { Image } from "~/types/Image";

const props = withDefaults(
  defineProps<
    Image & {
      sizes?: string;
      lazy?: boolean;
    }
  >(),
  {
    sizes: undefined,
    lazy: true,
  },
);
const loading = computed(() => {
  if (props.lazy) {
    return "lazy";
  }
  return "eager";
});
</script>

<template>
  <nuxt-picture
    :sizes="sizes"
    :alt="alt ? alt : ''"
    :loading="loading"
    :src="src"
    :preload="loading === 'eager'"
    :width="width"
    :quality="100"
    :height="height"
    class="image"
    format="avif,webp"
  />
</template>

<style lang="postcss" scoped>
.image :deep(img) {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
