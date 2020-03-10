<template>
  <section :class="$style['rooms']" aria-labelledby="rooms-title">
    <div :class="$style.wrapper">
      <h1 id="rooms-title">{{ $t('title') }}</h1>
      <rooms-container>
        <template v-slot="data">
          <archive-list v-if="data" :items="data.rooms" />
        </template>
      </rooms-container>
    </div>
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

<style lang="postcss" module>
.rooms {
}
</style>
