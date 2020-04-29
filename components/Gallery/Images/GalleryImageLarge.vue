<template>
  <lazy-loading-image
    v-if="image"
    :src="image.galleryLarge"
    :alt="image.altText"
    :srcset="`${image.galleryMedium} 1x, ${image.galleryLarge} 2x`"
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
