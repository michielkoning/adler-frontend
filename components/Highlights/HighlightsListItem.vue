<script lang="ts" setup>
import type { Archive } from "~/types/Archive";

const props = defineProps<{
  item: Archive;
}>();
const localePath = useLocalePath();

const url = localePath({
  name: "arrangements-details",
  params: {
    slug: props.item.link,
  },
});
</script>

<template>
  <clickable-list-item :to="url" class="item">
    <div class="image-wrapper">
      <app-image
        v-if="item.image"
        v-bind="item.image"
        class="image"
        sizes="100vw md:33vw xl:400px"
      />
      <price-badge v-if="item.price" :price="item.price" class="price-badge" />
    </div>
    <div class="title-wrapper">
      <h2 class="title">
        <nuxt-link :to="url" class="link">
          <span v-html="item.title" />
        </nuxt-link>
      </h2>
    </div>
    <div class="text-wrapper">
      <div v-html="item.text" />
    </div>
    <div class="btn-wrapper">
      <read-more class="read-more" />
    </div>
  </clickable-list-item>
</template>

<style lang="postcss" scoped>
.item {
  position: relative;
  display: grid;
  gap: var(--spacing-m);
  grid-template-rows: subgrid;
  grid-row: span 4;
  background: var(--color-white);
  padding-bottom: var(--spacing-m);

  &:focus-within,
  &:hover {
    outline: 2px solid var(--color-primary);
  }
}

.title {
  margin-bottom: 0;
}

.title-wrapper,
.text-wrapper,
.btn-wrapper {
  padding-inline: var(--spacing-m);
}

.link {
  @mixin link-reset;
}

.image {
  height: 14em;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
}

.price-badge {
  position: absolute;
  top: 3em;
  right: calc(var(--spacing-s) * -1);
}
</style>
