<template>
  <clickable-list-item :url="item.uri" :class="$style.item" :tag="tag">
    <div :class="$style.content">
      <h2 :class="$style.title">
        <!-- eslint-disable vue/no-v-html -->
        <router-link :to="item.uri" :class="$style.link" v-html="item.title" />
        <!-- eslint-enable vue/no-v-html -->
      </h2>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="item.excerpt" />
      <read-more :class="$style['read-more']" />
    </div>
    <price-badge
      v-if="item.pricesGroup.priceFrom"
      :price="item.pricesGroup.priceFrom"
      :class="$style['price-badge']"
    />
    <image-archive :image="item.featuredImage" :class="$style.image" />
  </clickable-list-item>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    tag: {
      type: String,
      default: 'li',
    },
  },
}
</script>

<style lang="postcss" module>
.item {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid transparent;

  &:focus-within,
  &:hover {
    border-color: var(--color-primary);
  }
}

.content {
  background: var(--color-white);
  padding: var(--spacing-m);
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}

.title {
  text-align: center;
}

.link {
  @mixin link-reset;
}

.image {
  height: 14em;
  order: -1;
}

.read-more {
  margin-top: auto;
  align-self: center;
}

.price-badge {
  position: absolute;
  top: 3em;
  right: calc(var(--spacing-s) * -1);
}
</style>
