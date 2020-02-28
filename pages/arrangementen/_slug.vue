<template>
  <app-page :page="arrangement">
    <div v-for="(price, index) in arrangement.pricesGroup.prices" :key="index">
      {{ price.label }} - {{ $n(price.value, 'currency') }}
    </div>
    <template v-slot:sidebar>
      <p>Here's some contact info</p>
    </template>
  </app-page>
</template>

<script>
import ArrangementQuery from '~/graphql/Arrangement.gql'
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
    return {
      arrangement: arrangement.data.arrangement,
    }
  },
}
</script>
