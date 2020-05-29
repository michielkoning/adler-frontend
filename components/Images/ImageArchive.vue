<template>
  <picture v-if="image">
    <source
      v-if="image.archiveWebP"
      :srcset="`${image.archiveWebP} 1x, ${image.archiveWebP2x} 2x`"
      type="image/webp"
    />
    <source
      :srcset="`${image.archive} 1x, ${image.archive2x} 2x`"
      type="image/jpeg"
    />
    <lazy-loading-image
      :src="image.archive"
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
