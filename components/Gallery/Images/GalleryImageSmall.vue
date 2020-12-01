<template>
  <picture v-if="image">
    <source
      v-if="image.galleryMediumWebP"
      :srcset="`
        ${image.galleryMediumWebP} 600w,
        ${image.galleryExtraSmallWebP} 300w`"
      type="image/webp"
      sizes="(min-width: 540px) 300px, 50vw"
    />
    <source
      :srcset="`
        ${image.galleryMedium} 600w,
        ${image.galleryExtraSmall} 300w`"
      type="image/jpeg"
      sizes="(min-width: 540px) 300px, 50vw"
    />
    <lazy-loading-image
      :class="$style.image"
      :src="image.galleryMedium"
      :alt="image.altText"
    />
  </picture>
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

<style lang="postcss" module>
.image {
  @mixin object-fit;
}
</style>
