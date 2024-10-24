<script lang="ts" setup>
import { Image } from '~/types/Image';

defineProps<Image>()
</script>

<template>
  <app-image
    :lazy="false"
    class="image"
    :src="src"
    :alt="alt"
  />
</template>

<style lang="postcss" scoped>
.image:deep(img) {
  object-fit: cover;
  height: max(30vw, 20rem);
}
</style>
