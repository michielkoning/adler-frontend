<template>
  <clickable-list-item :url="item.relativeUrl" :class="$style['item']">
    <div :class="$style['link-wrapper']">
      <nuxt-link :to="item.relativeUrl" :class="$style.title">
        {{ item.title }}
      </nuxt-link>
    </div>
    <image-related :image="item.featuredImage" :class="$style.image" />
  </clickable-list-item>
</template>

<script>
import ClickableListItem from '~/components/Shared/ClickableListItem.vue'
import ImageRelated from '~/components/Images/ImageRelated.vue'

export default {
  components: {
    ClickableListItem,
    ImageRelated,
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
.title {
  @mixin link-reset;

  font-family: var(--font-family-header);

  &:hover {
    box-shadow: 0 2px 0 0 var(--color-primary);
  }
}

.item {
  margin-bottom: var(--spacing-xs);
  display: grid;
  grid-template-columns: 6em auto;
  grid-gap: var(--spacing-s);
  align-items: center;

  &:focus-within,
  &:hover {
    & .title {
      box-shadow: 0 2px 0 0 var(--color-primary);
    }
  }
}

.image {
  grid-row: 1 / 2;
}

.link-wrapper {
  grid-column: 2 / 3;
}
</style>
