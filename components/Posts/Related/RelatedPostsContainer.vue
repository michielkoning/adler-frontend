<template>
  <apollo-query
    :query="require('~/graphql/Posts/RelatedPosts.gql')"
    :variables="{ notIn, language: $i18n.locale.toUpperCase() }"
  >
    <template v-slot="{ result: { data }, isLoading }">
      <app-loader v-if="isLoading" />
      <slot
        v-else-if="data && data.relatedPosts.edges"
        :relatedPosts="data.relatedPosts.edges"
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
