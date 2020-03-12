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
        <template v-slot="data">
          <highlights-list v-if="data" :items="data.arrangementsHighlights" />
        </template>
      </arrangements-highlights-container>
      <div :class="$style['button-wrapper']">
        <app-button
          :to="localePath({ name: 'arrangements' })"
          button-style="ghost"
        >
          {{ $t('btnTitle') }}
        </app-button>
      </div>
    </notch-wrapper>
  </section>
</template>

<script>
import ArrangementsHighlightsContainer from '~/components/Arrangements/Highlights/ArrangementsHighlightsContainer.vue'
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'
import AppButton from '~/components/Shared/AppButton.vue'
import HighlightsList from '~/components/Highlights/HighlightsList.vue'

export default {
  components: {
    ArrangementsHighlightsContainer,
    NotchWrapper,
    HighlightsList,
    AppButton,
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

.button-wrapper {
  display: flex;
  justify-content: center;
}
</style>

<i18n>
{
  "nl": {
    "title": "Onze uitgelichte arrangementen",
    "btnTitle": "Bekijk al onze arrangementen"
  }
}
</i18n>
