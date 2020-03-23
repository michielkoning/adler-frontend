<template>
  <section aria-labelledby="posts-title">
    <h1 id="posts-title">{{ $t('title') }}</h1>
    <pages-archive-container :parent="parent">
      <template v-slot="data">
        <archive-list v-if="data" :items="data.pages" />
      </template>
    </pages-archive-container>
  </section>
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
    "title": "Laatste berichten"
  }
}
</i18n>
