<template>
  <div :class="$style.wrapper">
    <notch-wrapper>
      <arrangements-highlights-container :first="2">
        <div v-if="data" slot-scope="data" :class="$style.content">
          <highlights-item
            v-for="item in data.arrangementsHighlights"
            :key="item.node.id"
            tag="div"
            :item="item.node"
            :class="$style.highlight"
          />
          <related-posts-section />
          <resmio-widget />
        </div>
      </arrangements-highlights-container>
    </notch-wrapper>
  </div>
</template>

<script>
import ResmioWidget from '~/components/Shared/Resmio.vue'
import RelatedPostsSection from '~/components/Posts/Related/RelatedPostsSection.vue'
import HighlightsItem from '~/components/Highlights/HighlightsItem.vue'
import ArrangementsHighlightsContainer from '~/components/Arrangements/Highlights/ArrangementsHighlightsContainer.vue'
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'

export default {
  components: {
    ResmioWidget,
    RelatedPostsSection,
    HighlightsItem,
    ArrangementsHighlightsContainer,
    NotchWrapper,
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
  @media (--viewport-md) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.highlight {
  @media (--viewport-md) {
    grid-row: 1 / 3;
  }
}
</style>
