<template>
  <section aria-labelledby="pages-title">
    <h1 id="pages-title" class="sr-only">{{ $t('title') }}</h1>
    <archive-list :items="pages" />
  </section>
</template>

<script>
export default {
  props: {
    pages: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<i18n>
{
  "nl": {
    "title": "Gerelateerde pagina's"
  },
  "de": {
    "title": "Verwandte Seiten"
  },
  "en": {
    "title": "Related pages"
  }
}
</i18n>
