<template>
  <div>
    <gallery-carousel :gallery="gallery" />
    <ul :class="$style.list">
      <li v-for="item in gallery" :key="item.id" :class="$style.item">
        <img :src="item.heroLarge" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import GalleryCarousel from '~/components/Gallery/GalleryCarousel.vue'
export default {
  components: {
    GalleryCarousel,
  },
  props: {
    gallery: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" module>
.list {
  @mixin list-reset;
  display: grid;
  grid-column-gap: var(--gutter);
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
}

.item {
  &:nth-child(1) {
    grid-column: 1 / 5;
    grid-row: 1 / 5;
  }
  &:nth-child(2) {
    grid-column: 5 / 7;
    grid-row: 1 / 3;
  }
}
</style>
