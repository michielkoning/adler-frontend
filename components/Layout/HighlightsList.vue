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

<template>
  <ul v-if="items.length" class="list">
    <li v-for="item in items"
      :key="item.id">
    <h2>{{ item.title }}</h2>
    <div v-html="item.excerpt" />
    <price-badge
      v-if="item.priceFrom"
      :price="item.priceFrom"
    />
  </li>
    <!-- aa
    <highlights-item
      v-for="item in items"
      :key="item.id"
      :item="item"
    /> -->
  </ul>
</template>

<style lang="postcss" scoped>
@import '~/assets/css/media-queries/media-queries.css';

.list {
  @mixin list-reset;

  margin-bottom: var(--spacing-m);
  display: grid;
  gap: var(--spacing-l);

  @media (--viewport-md) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
