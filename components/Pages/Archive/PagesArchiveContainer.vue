<template>
  <apollo-query
    :query="require('~/graphql/Pages/Pages.gql')"
    :variables="{
      parent: parent.toString(),
      language: $i18n.locale.toUpperCase(),
    }"
  >
    <template v-slot="{ result: { data }, isLoading }">
      <app-loader v-if="isLoading" />
      <slot v-if="data" :pages="data.pages.edges" />
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
