<template>
  <apollo-query
    :query="require('~/graphql/Menu/Menu.gql')"
    :variables="{
      hotelPageId: hotelPageId[this.$i18n.locale],
      language: $i18n.locale.toUpperCase(),
    }"
  >
    <template v-slot="{ result: { data }, isLoading }">
      <app-loader v-if="isLoading" />
      <slot
        v-else-if="data"
        :hotel="data.hotel"
        :arrangements="data.arrangements"
        :rooms="data.rooms"
      />
    </template>
  </apollo-query>
</template>

<script>
import AppLoader from '~/components/Shared/AppLoader.vue'
import { hotelPageId } from '~/data/pages'

export default {
  components: {
    AppLoader,
  },
  data() {
    return {
      hotelPageId,
    }
  },
}
</script>
