<template>
  <picture v-if="image" :class="$style.picture">
    <source
      v-if="image.heroLargeWebP"
      :srcset="`
        ${image.heroLargeWebP} 1140w,
        ${image.heroMediumWebP} 800w,
        ${image.heroSmallWebP} 640w`"
      type="image/webp"
      sizes="(min-width: 1140px) 1140px, 100vw"
    />
    <source
      :srcset="`
        ${image.heroLarge} 1140w,
        ${image.heroMedium} 800w,
        ${image.heroSmall} 640w`"
      type="image/jpeg"
      sizes="(min-width: 1140px) 1140px, 100vw"
    />
    <lazy-loading-image
      :class="$style.image"
      :src="image.heroMedium"
      :alt="image.altText"
    />
  </picture>
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
.picture {
  height: 30vw;
  max-height: 20rem;
}

.image {
  @mixin object-fit;
}
</style>
