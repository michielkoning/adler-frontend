<template>
  <picture v-if="image">
    <source
      v-if="image.node.relatedAvif"
      :srcset="`${image.node.relatedAvif} 1x, ${image.node.relatedAvif2x} 2x`"
      type="image/avif"
    />
    <source
      v-if="image.node.relatedWebP"
      :srcset="`${image.node.relatedWebP} 1x, ${image.node.relatedWebP2x} 2x`"
      type="image/webp"
    />
    <source
      :srcset="`${image.node.related} 1x, ${image.node.related2x} 2x`"
      type="image/jpeg"
    />
    <app-image
      :src="image.node.related"
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

  height: 3em;
}
</style>
