<template>
  <section aria-labelledby="rooms-title">
    <h1 id="rooms-title" class="sr-only">{{ $t('title') }}</h1>
    <rooms-container>
      <template v-slot="data">
        <archive-list v-if="data" :items="data.rooms" />
      </template>
    </rooms-container>
  </section>
</template>

<script>
import ArchiveList from '~/components/Archive/ArchiveList.vue'
import RoomsContainer from '~/components/Rooms/Archive/RoomsContainer.vue'

export default {
  components: {
    ArchiveList,
    RoomsContainer,
  },
}
</script>

<i18n>
{
  "nl": {
    "title": "Onze kamers"
  },
  "de": {
    "title": "Unsere Zimmer"
  },
  "en": {
    "title": "Our rooms"
  }
}
</i18n>
