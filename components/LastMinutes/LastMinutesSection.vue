<template>
  <section aria-labelledby="arrangements-highlights-title" class="wrapper">
    <center-wrapper>
      <h1 id="arrangements-highlights-title" class="title">
        {{ $t('lastMinutesTitle') }}
      </h1>
      <last-minutes-list v-if="items.length" :items="items" />
      <p v-else class="text">{{ $t('lastMinutesNoResults') }}</p>
    </center-wrapper>
  </section>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  @mixin block-padding;

  background: var(--color-background-alternative);
}

.text,
.title {
  text-align: center;
}
</style>

<i18n>
{
  "nl": {
    "lastMinutesTitle": "Onze last minute aanbiedingen",
    "lastMinutesNoResults": "Er zijn momenteel geen last minute aanbiedingen"
  },
  "de": {
    "lastMinutesTitle": "Unsere Last minutes",
    "lastMinutesNoResults": "Derzeit gibt es keine Last-Minute-Angebote"

  },
  "en": {
    "lastMinutesTitle": "Our last minutes",
    "lastMinutesNoResults": "There are currently no last minute offers"
  }
}
</i18n>
