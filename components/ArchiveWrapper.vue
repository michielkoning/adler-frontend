<template>
  <div class="wrapper">
    <div v-if="image" class="image-wrapper">
      <image-archive :image="image" />
    </div>

    <div class="text">
      <h2 class="title">
        <slot name="title" />
      </h2>

      <slot />
    </div>
  </div>
</template>

<script>
import ImageArchive from '@/components/Images/ImageArchive.vue'

export default {
  components: {
    ImageArchive,
  },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  @mixin block-padding;
  flex-wrap: wrap;
  @media (--viewport-sm) {
    display: flex;
  }
}

.image-wrapper {
  flex: 0 0 33%;
  margin-bottom: var(--spacing-m);
  max-width: 20em;

  @media (--viewport-sm) {
    max-width: none;
    padding-right: var(--gutter);
  }
}

.text {
  flex: 0 0 66%;
}

.image {
  display: block;
  width: 100%;
  @media (--viewport-sm) {
    margin: 0 auto;
  }
}
</style>
