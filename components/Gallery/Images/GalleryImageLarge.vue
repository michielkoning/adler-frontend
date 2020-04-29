<template>
  <lazy-loading-image
    v-if="image"
    :src="image.galleryMedium"
    :alt="image.altText"
    :srcset="`
        ${image.galleryLarge} 1140w,
        ${image.galleryMedium} 800w,
        ${image.gallerySmall} 640w`"
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
