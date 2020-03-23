<template>
  <lazy-loading-image
    v-if="image"
    :class="$style.image"
    :src="image.heroMedium"
    :alt="image.altText"
    :srcset="`
        ${image.heroLarge} 1140w,
        ${image.heroMedium} 800w,
        ${image.heroSmall} 640w`"
    sizes="(min-width: 1140px) 1140px, 100vw"
  />
</template>

<script>
import LazyLoadingImage from '~/components/Images/LazyLoadingImage.vue'

export default {
  components: {
    LazyLoadingImage,
  },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" module>
.image {
  height: 30vw;
  max-height: 20rem;
  object-fit: cover;
  display: block;
  width: 100%;
  margin-bottom: var(--spacing-m);
}
</style>
