<template>
  <apollo-query
    :query="require('~/graphql/Rooms.gql')"
    :variables="{ language: $i18n.locale.toUpperCase() }"
  >
    <template slot-scope="{ result: { data }, isLoading }">
      <app-loader v-if="isLoading" />
      <slot v-if="data" :rooms="data.rooms.edges" />
    </template>
  </apollo-query>
</template>

<script>
import AppLoader from '~/components/Shared/AppLoader.vue'

export default {
  components: {
    AppLoader,
  },
}
</script>
