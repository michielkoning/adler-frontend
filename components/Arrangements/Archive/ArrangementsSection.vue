<template>
  <section aria-labelledby="arrangements-title">
    <h1 id="arrangements-title" class="sr-only">{{ $t('title') }}</h1>
    <arrangements-container>
      <template v-slot="data">
        <archive-list v-if="data" :items="data.arrangements" />
      </template>
    </arrangements-container>
  </section>
</template>

<script>
import ArchiveList from '~/components/Archive/ArchiveList.vue'
import ArrangementsContainer from '~/components/Arrangements/Archive/ArrangementsContainer.vue'

export default {
  components: {
    ArchiveList,
    ArrangementsContainer,
  },
}
</script>

<i18n>
{
  "nl": {
    "title": "Onze arrangementen"
  },
  "en": {
    "title": "Our arrangements"
  }
}
</i18n>
