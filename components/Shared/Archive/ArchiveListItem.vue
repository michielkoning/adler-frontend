<template>
  <clickable-list-item :url="url" :class="$style['item']">
    <div :class="$style.content">
      <h2 :class="$style.title">
        <!-- eslint-disable-next-line -->
        <router-link :to="url" v-html="item.title" :class="$style.link" />
      </h2>
      <!-- eslint-disable-next-line -->
      <div v-html="item.excerpt" />
    </div>
    <image-archive :image="item.featuredImage" :class="$style.image" />
    <price-badge
      v-if="item.pricesGroup.priceFrom"
      :price="item.pricesGroup.priceFrom"
      :class="$style['price-badge']"
    />
  </clickable-list-item>
</template>

<script>
import ClickableListItem from '@/components/Shared/ClickableListItem.vue'
import ImageArchive from '@/components/Images/ImageArchive.vue'
import PriceBadge from '@/components/Shared/PriceBadge.vue'

export default {
  components: {
    ClickableListItem,
    ImageArchive,
    PriceBadge,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    url() {
      return `/arrangementen/${this.item.slug}/`
    },
  },
}
</script>

<style lang="postcss" module>
.item {
  display: grid;
  grid-gap: var(--spacing-s);
  margin-bottom: var(--spacing-m);
  position: relative;

  @media (--viewport-sm) {
    grid-template-columns: 15em auto;
  }
}

.image {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 8em;
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  @media (--viewport-sm) {
    margin-top: var(--spacing-xs);
    height: auto;
  }
}

.price-badge {
  top: -0.5em;
  right: -0.5em;
  position: absolute;

  @media (--viewport-sm) {
    top: 0;
    right: auto;
    left: -0.5em;
  }
}
</style>
