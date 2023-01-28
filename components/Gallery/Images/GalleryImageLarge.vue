<template>
  <picture v-if="image">
    <source
      v-if="image.galleryLargeAvif"
      :srcset="`
        ${image.galleryLargeAvif} 1140w,
        ${image.galleryMediumAvif} 800w,
        ${image.gallerySmallAvif} 640w`"
      type="image/avif"
      sizes="(min-width: 1140px) 1140px, 100vw"
    />
    <source
      v-if="image.galleryLargeWebP"
      :srcset="`
        ${image.galleryLargeWebP} 1140w,
        ${image.galleryMediumWebP} 800w,
        ${image.gallerySmallWebP} 640w`"
      type="image/webp"
      sizes="(min-width: 1140px) 1140px, 100vw"
    />
    <source
      :srcset="`
        ${image.galleryLarge} 1140w,
        ${image.galleryMedium} 800w,
        ${image.gallerySmall} 640w`"
      type="image/jpeg"
      sizes="(min-width: 1140px) 1140px, 100vw"
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
