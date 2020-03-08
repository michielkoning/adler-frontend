<template>
  <apollo-query
    :query="require('~/graphql/ArrangementsHighlights.gql')"
    :variables="{ language: $i18n.locale.toUpperCase(), first }"
  >
    <template slot-scope="{ result: { data }, isLoading }">
      <app-loader v-if="isLoading" />
      <slot
        v-if="data"
        :arrangementsHighlights="data.arrangementsHighlights.edges"
      />
    </template>
  </apollo-query>
</template>

<script>
import AppLoader from '~/components/Shared/AppLoader.vue'

export default {
  components: {
    AppLoader,
  },
  props: {
    first: {
      type: Number,
      default: 3,
    },
  },
}
</script>
