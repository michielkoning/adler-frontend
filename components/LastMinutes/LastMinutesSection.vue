<template>
  <section
    v-if="items.length"
    aria-labelledby="arrangements-highlights-title"
    :class="$style.highlights"
  >
    <center-wrapper>
      <h1 id="arrangements-highlights-title" :class="$style.title">
        {{ $t('title') }}
      </h1>
      <last-minutes-list :items="items" />
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

<style lang="postcss" module>
.highlights {
  @mixin block-padding;

  background: var(--color-background-alternative);
}

.title {
  text-align: center;
}
</style>

<i18n>
{
  "nl": {
    "title": "Onze uitgelichte arrangementen"
  },
  "de": {
    "title": "Unsere Arrangements"
  },
  "en": {
    "title": "Our highlighted arrangements"
  }
}
</i18n>
