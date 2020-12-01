<template>
  <div :class="$style.wrapper">
    <center-wrapper>
      <div v-if="currentMenu" :class="$style.content">
        <highlights-item
          v-for="item in currentMenu"
          :key="item.node.id"
          tag="div"
          :item="item.node"
          :class="$style.highlight"
        />
        <related-list-section
          v-if="posts && posts.edges.length"
          :items="posts.edges"
          :title="$t('relatedListTitle')"
        />
        <resmio-widget />
      </div>
    </center-wrapper>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    posts: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapState('arrangements', ['highlights']),
    currentMenu() {
      return this.arrangements[this.$i18n.locale]
    },
  },
}
</script>

<style lang="postcss" module>
.wrapper {
  @mixin block-padding;
}

.content {
  grid-gap: var(--spacing-l);
  display: grid;

  @media (--viewport-sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (--viewport-lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.highlight {
  @media (--viewport-lg) {
    grid-row: 1 / 3;
  }
}
</style>

<i18n>
{
  "nl": {
    "latestPosts": "Laatste berichten"
  },
  "de": {
    "latestPosts": "Neueste Beiträge"
  },
  "en": {
    "latestPosts": "Latest posts"
  }
}
</i18n>
