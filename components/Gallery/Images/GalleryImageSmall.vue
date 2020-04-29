<template>
  <lazy-loading-image
    v-if="image"
    :src="image.gallerySmall"
    :alt="image.altText"
    :srcset="`${image.gallerySmall} 1x, ${image.galleryMedium} 2x`"
    class="image"
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
