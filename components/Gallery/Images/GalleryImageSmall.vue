<template>
  <lazy-loading-image
    v-if="image"
    :src="image.galleryMedium"
    :alt="image.altText"
    :srcset="`
        ${image.galleryMedium} 600w,
        ${image.galleryExtraSmall} 300w`"
    sizes="(min-width: 540px) 300px, 50vw"
  />
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
