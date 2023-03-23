<template>
  <ul v-if="items.length" :class="$style.list">
    <archive-item v-for="item in items" :key="item.node.id" :item="item.node" />
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" module>
@import '~/styles/media-queries/media-queries.css';

.list {
  @mixin list-reset;

  margin: 0 calc(var(--gutter) / -2);

  @media (--viewport-md) {
    margin-right: 0;
  }

  & > li {
    margin-bottom: var(--spacing-s);
  }
}
</style>
