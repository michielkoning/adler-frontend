<template>
  <apollo-query
    :query="require('~/graphql/Arrangements/Arrangements.gql')"
    :variables="{ language: $i18n.locale.toUpperCase() }"
  >
    <template v-slot="{ result: { data }, isLoading }">
      <app-loader v-if="isLoading" />
      <slot v-if="data" :arrangements="data.arrangements.edges" />
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
