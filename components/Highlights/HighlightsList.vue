<template>
  <ul v-if="items.length" :class="$style.list">
    <highlights-list-item
      v-for="item in items"
      :key="item.node.id"
      :item="item.node"
    />
  </ul>
</template>

<script>
import HighlightsListItem from '~/components/Highlights/HighlightsListItem.vue'

export default {
  components: {
    HighlightsListItem,
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

  @media (--viewport-sm) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
