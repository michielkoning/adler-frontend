<template>
  <clickable-list-item :url="item.uri" :class="$style['item']">
    <div :class="$style['link-wrapper']">
      <!-- eslint-disable vue/no-v-html -->
      <nuxt-link :to="item.uri" :class="$style.title" v-html="item.title" />
      <!-- eslint-enable vue/no-v-html -->
    </div>
    <image-sidebar :image="item.featuredImage" :class="$style.image" />
  </clickable-list-item>
</template>

<script>
import ClickableListItem from '~/components/Shared/ClickableListItem.vue'
import ImageSidebar from '~/components/Images/ImageSidebar.vue'

export default {
  components: {
    ClickableListItem,
    ImageSidebar,
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

  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-headings);
  font-size: var(--font-size-l);

  &:hover {
    box-shadow: 0 2px 0 0 var(--color-primary);
  }
}

.item {
  display: grid;
  grid-template-columns: 5em auto;
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
  grid-row-start: 1;
  height: 3em;
}

.link-wrapper {
  grid-column-start: 2;
}
</style>
