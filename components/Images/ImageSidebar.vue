<template>
  <picture v-if="image">
    <source
      v-if="image.relatedWebP"
      :srcset="`${image.relatedWebP} 1x, ${image.relatedWebP2x} 2x`"
      type="image/webp"
    />
    <source
      :srcset="`${image.related} 1x, ${image.related2x} 2x`"
      type="image/jpeg"
    />
    <lazy-loading-image
      :src="image.related"
      :alt="image.altText"
      :class="$style.image"
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
.image {
  @mixin object-fit;
}
</style>
