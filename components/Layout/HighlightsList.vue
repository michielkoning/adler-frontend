<script lang="ts" setup>
defineProps<{
  items: any[]
}>()

const localePath = useLocalePath();

</script>

<template>
  <ul v-if="items.length" class="list">
    <li v-for="item in items" :key="item.id">
      <h2>
        <nuxt-link
          :to="
            localePath({
              name: 'arrangement',
              params: {
                slug: item.slug,
              },
            })
          "
          v-html="item.title"  />
      </h2>
      <div v-html="item.excerpt" />
      <price-badge v-if="item.priceFrom" :price="item.priceFrom" />
    </li>
    <!-- 
    <highlights-item
      v-for="item in items"
      :key="item.id"
      :item="item"
    /> -->
  </ul>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

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
