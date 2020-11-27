<template>
  <apollo-query
    :query="require('~/graphql/Pages/RelatedPages.gql')"
    :variables="{
      language: $i18n.locale.toUpperCase(),
      notIn,
      parentPageId: parentPageId.toString(),
    }"
  >
    <template #default="{ result: { data }, isLoading }">
      <app-loader v-if="isLoading" />
      <slot
        v-else-if="data && data.relatedPages.edges"
        :relatedPages="data.relatedPages.edges"
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
    parentPageId: {
      type: Number,
      default: 0,
    },
  },
}
</script>
