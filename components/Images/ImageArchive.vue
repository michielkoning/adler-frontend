<template>
  <picture v-if="image">
    <source
      v-if="image.node.archiveWebP"
      :srcset="`${image.node.archiveWebP} 1x, ${image.node.archiveWebP2x} 2x`"
      type="image/webp"
    />
    <source
      :srcset="`${image.node.archive} 1x, ${image.node.archive2x} 2x`"
      type="image/jpeg"
    />
    <lazy-loading-image
      :src="image.node.archive"
      :alt="image.node.altText"
      :class="$style.image"
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
