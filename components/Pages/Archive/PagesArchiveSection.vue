<template>
  <pages-archive-container :parent="parent">
    <template v-slot="data">
      <section
        v-if="data.pages && data.pages.length"
        aria-labelledby="posts-title"
      >
        <h1 id="posts-title" class="sr-only">{{ $t('title') }}</h1>
        <archive-list :items="data.pages" />
      </section>
    </template>
  </pages-archive-container>
</template>

<script>
import ArchiveList from '~/components/Archive/ArchiveList.vue'
import PagesArchiveContainer from '~/components/Pages/Archive/PagesArchiveContainer.vue'

export default {
  components: {
    ArchiveList,
    PagesArchiveContainer,
  },
  props: {
    parent: {
      type: Number,
      default: 0,
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
