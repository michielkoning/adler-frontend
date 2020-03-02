<template>
  <section :class="$style['arrangements']" aria-labelledby="arrangements-title">
    <div :class="$style.wrapper">
      <h1 id="arrangements-title">{{ $t('title') }}</h1>
      <arrangements-container>
        <archive-list
          v-if="data"
          slot-scope="data"
          :items="data.arrangements"
        />
      </arrangements-container>
    </div>
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

<style lang="postcss" module>
.arrangements {
}
</style>
