<template>
  <section aria-labelledby="arrangements-title">
    <h1 id="arrangements-title" class="sr-only">{{ $t('title') }}</h1>
    <archive-list :items="arrangements" />
  </section>
</template>

<script>
export default {
  props: {
    arrangements: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<i18n>
{
  "nl": {
    "title": "Onze arrangementen"
  },
  "de": {
    "title": "Unsere Arrangements"
  },
  "en": {
    "title": "Our arrangements"
  }
}
</i18n>
