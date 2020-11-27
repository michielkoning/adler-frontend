<template>
  <picture v-if="image" :class="$style.picture">
    <source
      v-if="image.node.heroLargeWebP"
      :srcset="`
        ${image.node.heroLargeWebP} 1140w,
        ${image.node.heroMediumWebP} 800w,
        ${image.node.heroSmallWebP} 640w`"
      type="image/webp"
      sizes="(min-width: 1140px) 1140px, 100vw"
    />
    <source
      :srcset="`
        ${image.node.heroLarge} 1140w,
        ${image.node.heroMedium} 800w,
        ${image.node.heroSmall} 640w`"
      type="image/jpeg"
      sizes="(min-width: 1140px) 1140px, 100vw"
    />
    <lazy-loading-image
      :class="$style.image"
      :src="image.node.heroMedium"
      :alt="image.node.altText"
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
