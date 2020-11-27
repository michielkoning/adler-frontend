<template>
  <apollo-query
    :query="require('~/graphql/Arrangements/ArrangementsHighlights.gql')"
    :variables="{ language: $i18n.locale.toUpperCase(), first }"
  >
    <template #default="{ result: { data }, isLoading }">
      <app-loader v-if="isLoading" />
      <slot
        v-else-if="data && data.arrangementsHighlights.edges"
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
