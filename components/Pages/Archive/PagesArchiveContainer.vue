<template>
  <apollo-query
    :query="require('~/graphql/Pages/Pages.gql')"
    :variables="{
      parent: parent,
      language: $i18n.locale.toUpperCase(),
    }"
  >
    <template #default="{ result: { data }, isLoading }">
      <app-loader v-if="isLoading" />
      <slot v-else-if="data && data.pages.edges" :pages="data.pages.edges" />
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
    parent: {
      type: Number,
      default: 0,
    },
  },
}
</script>
