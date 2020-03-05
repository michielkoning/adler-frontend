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
import ClickableListItem from '~/components/Shared/ClickableListItem.vue'
import ImageArchive from '~/components/Images/ImageArchive.vue'
import ReadMore from '~/components/Shared/ReadMore.vue'
import PriceBadge from '~/components/Shared/PriceBadge.vue'

export default {
  components: {
    ClickableListItem,
    ImageArchive,
    ReadMore,
    PriceBadge,
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
  position: relative;
  display: flex;
  flex-direction: column;
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

.image {
  display: block;
  object-fit: cover;
  width: 100%;
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
  right: -1em;
}
</style>
