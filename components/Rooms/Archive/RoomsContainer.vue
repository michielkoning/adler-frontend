<template>
  <apollo-query
    :query="require('~/graphql/Rooms/Rooms.gql')"
    :variables="{ language: $i18n.locale.toUpperCase() }"
  >
    <template #default="{ result: { data }, isLoading }">
      <app-loader v-if="isLoading" />
      <slot v-else-if="data && data.rooms.edges" :rooms="data.rooms.edges" />
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
