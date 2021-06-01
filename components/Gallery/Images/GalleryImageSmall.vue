<template>
  <picture v-if="image">
    <source
      v-if="image.galleryMediumAvif"
      :srcset="`
        ${image.galleryMediumAvif} 600w,
        ${image.galleryExtraSmallAvif} 300w`"
      type="image/avif"
      sizes="(min-width: 540px) 300px, 50vw"
    />
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
    <app-image
      :class="$style.image"
      :src="image.galleryMedium"
      :alt="image.altText"
      :lazy="lazy"
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
    lazy: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="postcss" module>
.image {
  @mixin object-fit;
}
</style>
