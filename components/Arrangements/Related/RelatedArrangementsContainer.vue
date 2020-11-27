<template>
  <apollo-query
    :query="require('~/graphql/Arrangements/RelatedArrangements.gql')"
    :variables="{ notIn, language: $i18n.locale.toUpperCase() }"
  >
    <template #default="{ result: { data }, isLoading }">
      <app-loader v-if="isLoading" />
      <slot
        v-else-if="data && data.relatedArrangements.edges"
        :relatedArrangements="data.relatedArrangements.edges"
      />
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
