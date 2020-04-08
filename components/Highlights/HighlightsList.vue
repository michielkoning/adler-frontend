<template>
  <ul v-if="items.length" :class="$style.list">
    <highlights-item
      v-for="item in items"
      :key="item.node.id"
      :item="item.node"
    />
  </ul>
</template>

<script>
import HighlightsItem from '~/components/Highlights/HighlightsItem.vue'

export default {
  components: {
    HighlightsItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" module>
.list {
  @mixin list-reset;

  margin-bottom: var(--spacing-m);
  display: grid;
  grid-gap: var(--spacing-l);

  @media (--viewport-md) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
