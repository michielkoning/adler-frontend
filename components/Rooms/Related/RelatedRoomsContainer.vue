<template>
  <apollo-query
    :query="require('~/graphql/RelatedRooms.gql')"
    :variables="{ notIn }"
  >
    <template slot-scope="{ result: { data }, isLoading }">
      <app-loader v-if="isLoading" />
      <slot v-if="data" :relatedRooms="data.relatedRooms.edges" />
    </template>
  </apollo-query>
</template>

<script>
import AppLoader from '@/components/Shared/AppLoader.vue'

export default {
  components: {
    AppLoader,
  },
  props: {
    notIn: {
      type: Number,
      default: 0,
    },
  },
}
</script>
