<template>
  <clickable-list-item :url="item.uri" :class="$style['item']">
    <div :class="$style.content">
      <h2 :class="$style.title">
        <!-- eslint-disable vue/no-v-html -->
        <router-link :to="item.uri" :class="$style.link" v-html="item.title" />
        <!-- eslint-enable vue/no-v-html -->
      </h2>
      <post-date v-if="item.date" :date="item.date" />
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="item.excerpt" />
      <!-- eslint-enable vue/no-v-html -->
      <read-more :class="$style['read-more']" />
    </div>
    <image-archive :image="item.featuredImage" :class="$style.image" />
    <price-badge
      v-if="item.pricesGroup && item.pricesGroup.priceFrom"
      :price="item.pricesGroup.priceFrom"
      :class="$style['price-badge']"
    />
  </clickable-list-item>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" module>
@import '~/styles/media-queries/media-queries.css';

.link {
  @mixin link-reset;
}

.item {
  display: grid;
  grid-gap: var(--spacing-s);
  position: relative;
  grid-row: 1 / 2;
  padding: calc(var(--gutter) / 2);
  margin-bottom: var(--spacing-s);

  @media (--viewport-sm) {
    grid-template-columns: 15em auto;
  }

  &:focus-within,
  &:hover {
    & .link {
      box-shadow: 0 2px 0 0 var(--color-primary);
    }
  }

  &:nth-child(2n) {
    background: var(--color-gray-light);
  }
}

.content {
  grid-row-start: 2;

  @media (--viewport-sm) {
    grid-column-start: 2;
    grid-row-start: 1;
  }
}

.image {
  height: 8em;
}

.price-badge {
  top: calc(var(--spacing-xs) * -1);
  right: calc(var(--spacing-xxs) * -1);
  position: absolute;

  @media (--viewport-sm) {
    top: 0;
    left: calc(var(--spacing-xxs) * -1);
  }
}

.read-more {
  flex: 0 0 auto;
}
</style>
