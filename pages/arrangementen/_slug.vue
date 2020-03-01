<template>
  <app-page :page="arrangement">
    <div v-for="(price, index) in arrangement.pricesGroup.prices" :key="index">
      {{ price.label }} - {{ $n(price.value, 'currency') }}
    </div>
    <template v-slot:sidebar>
      <RelatedArrangements :not-in="arrangement.arrangementId" />
    </template>
  </app-page>
</template>

<script>
import ArrangementQuery from '~/graphql/Arrangement.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import RelatedArrangements from '~/components/RelatedArrangements/RelatedArrangements.vue'

export default {
  components: {
    AppPage,
    RelatedArrangements,
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
