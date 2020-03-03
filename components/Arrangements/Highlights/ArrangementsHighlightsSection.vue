<template>
  <section
    aria-labelledby="arrangements-highlights-title"
    :class="$style.highlights"
  >
    <notch-wrapper>
      <h1 id="arrangements-highlights-title" :class="$style.title">
        {{ $t('title') }}
      </h1>
      <arrangements-highlights-container>
        <highlights-list
          v-if="data"
          slot-scope="data"
          :items="data.arrangementsHighlights"
        />
      </arrangements-highlights-container>
    </notch-wrapper>
  </section>
</template>

<script>
import ArrangementsHighlightsContainer from '~/components/Arrangements/Highlights/ArrangementsHighlightsContainer.vue'
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'
import HighlightsList from '~/components/Highlights/HighlightsList.vue'

export default {
  components: {
    ArrangementsHighlightsContainer,
    NotchWrapper,
    HighlightsList,
  },
}
</script>

<style lang="postcss" module>
.highlights {
  @mixin block-padding;
  background: var(--color-4);
}

.title {
  text-align: center;
}
</style>

<i18n>
{
  "nl": {
    "title": "Onze arrangementen"
  }
}
</i18n>
