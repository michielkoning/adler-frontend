<template>
  <apollo-query :query="require('~/graphql/Arrangements.gql')">
    <template slot-scope="{ result: { data }, isLoading }">
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
