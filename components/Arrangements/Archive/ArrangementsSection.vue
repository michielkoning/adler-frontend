<template>
  <section aria-labelledby="arrangements-title">
    <h1 id="arrangements-title" class="sr-only">{{ $t('title') }}</h1>
    <archive-list :items="arrangements" />
  </section>
</template>

<script>
import ArchiveList from '~/components/Archive/ArchiveList.vue'

export default {
  components: {
    ArchiveList,
  },
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
