<template>
  <app-image
    v-if="image"
    :srcset="image.node.srcSet"
    :lazy="false"
    :sizes="sizes"
    :class="$style.image"
    :src="image.node.src"
    :alt="image.node.altText"
  />
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {},
    },
    sizes: {
      type: String,
      default: '(min-width: 1140px) 1140px, 100vw',
    },
  },
}
</script>

<style lang="postcss" module>
.image {
  @mixin object-fit;

  height: 30vw;
  max-height: 20rem;
}
</style>
