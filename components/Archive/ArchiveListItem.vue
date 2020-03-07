<template>
  <clickable-list-item :url="item.relativeUrl" :class="$style['item']">
    <div :class="$style.content">
      <h2 :class="$style.title">
        <!-- eslint-disable vue/no-v-html -->
        <router-link
          :to="item.relativeUrl"
          :class="$style.link"
          v-html="item.title"
        />
        <!-- eslint-enable vue/no-v-html -->
      </h2>
      <post-date v-if="item.date" :date="item.date" />
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="item.excerpt" />
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
import PostDate from '@/components/Shared/PostDate.vue'
import ClickableListItem from '~/components/Shared/ClickableListItem.vue'
import ImageArchive from '~/components/Images/ImageArchive.vue'
import PriceBadge from '~/components/Shared/PriceBadge.vue'
import ReadMore from '~/components/Shared/ReadMore.vue'

export default {
  components: {
    ClickableListItem,
    ImageArchive,
    PriceBadge,
    ReadMore,
    PostDate,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" module>
.item {
  display: grid;
  grid-gap: var(--spacing-s);
  margin-bottom: var(--spacing-l);
  position: relative;
  grid-row: 1 / 2;

  @media (--viewport-sm) {
    grid-template-columns: 15em auto;
  }
}

.content {
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  /* grid-row: 2 / 3; */
}

.image {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 8em;

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

.read-more {
  flex: 0 0 auto;
}

.link {
  @mixin link-reset;
}
</style>
