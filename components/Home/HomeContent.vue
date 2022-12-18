<template>
  <div :class="$style.wrapper">
    <center-wrapper>
      <div v-if="arrangements.length" :class="$style.content">
        <div :class="$style.highlights">
          <highlights-item
            v-for="item in arrangements"
            :key="item.node.id"
            tag="div"
            :item="item.node"
            :class="$style.highlight"
          />
        </div>
        <div :class="$style.sidebar">
          <related-list-section
            v-if="posts && posts.edges.length"
            :items="posts.edges"
            :title="$t('relatedListTitle')"
          />
          <resmio-widget :class="$style.resmio" />
        </div>
      </div>
    </center-wrapper>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    arrangements() {
      return this.$store.getters['arrangements/getFirstByLanguage'](
        this.$i18n.locale,
        4,
      )
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

  @media (--viewport-lg) {
    grid-template-columns: 2fr 1fr;
  }
}

.highlights {
  grid-gap: var(--spacing-l);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
}

.sidebar {
  display: grid;
  gap: var(--spacing-l);
  grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));

  @media (--viewport-lg) {
    display: flex;
    flex-direction: column;
  }
}

.resmio {
  flex: 1 1 auto;
}
</style>

<i18n>
{
  "nl": {
    "relatedListTitle": "Laatste berichten"
  },
  "de": {
    "relatedListTitle": "Neueste Beiträge"
  },
  "en": {
    "relatedListTitle": "Latest posts"
  }
}
</i18n>
