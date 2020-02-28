<template>
  <app-page :page="arrangement">
    <div v-for="(price, index) in arrangement.pricesGroup.prices" :key="index">
      {{ price.label }} - {{ $n(price.value, 'currency') }}
    </div>
    <template v-slot:sidebar>
      {{ arrangements }}
    </template>
  </app-page>
</template>

<script>
import ArrangementQuery from '~/graphql/Arrangement.gql'
import ArrangementsQuery from '~/graphql/Arrangements.gql'

import AppPage from '~/components/Layout/AppPage.vue'

export default {
  components: {
    AppPage,
  },
  async asyncData({ app, params }) {
    const arrangement = await app.apolloProvider.defaultClient.query({
      query: ArrangementQuery,
      variables: {
        uri: params.slug,
      },
    })
    const arrangements = await app.apolloProvider.defaultClient.query({
      query: ArrangementsQuery,
      variables: {},
    })
    return {
      arrangement: arrangement.data.arrangement,
      arrangements: arrangements.data.arrangements,
    }
  },
}
</script>
