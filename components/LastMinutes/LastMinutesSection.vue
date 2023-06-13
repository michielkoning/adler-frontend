<template>
  <section aria-labelledby="arrangements-highlights-title" class="wrapper">
    <center-wrapper>
      <h1 id="arrangements-highlights-title" class="title">
        {{ $t('title') }}
      </h1>
      <last-minutes-list v-if="items.length" :items="items" />
      <p v-else class="text">Er zijn geen last minutes gevonden</p>
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
    "title": "Onze last minute aanbiedingen"
  },
  "de": {
    "title": "Unsere Last minutes"
  },
  "en": {
    "title": "Our last minutes"
  }
}
</i18n>
