<template>
  <app-page :page="arrangement">
    <arrangement-prices :prices="arrangement.pricesGroup.prices" />
    <template v-slot:sidebar>
      <book-arrangement :title="arrangement.title" />
      <related-arrangements-section :not-in="arrangement.arrangementId" />
    </template>
  </app-page>
</template>

<script>
import ArrangementQuery from '~/graphql/Arrangements/Arrangement.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import RelatedArrangementsSection from '~/components/Arrangements/Related/RelatedArrangementsSection.vue'
import ArrangementPrices from '~/components/Arrangements/Prices/ArrangementPrices.vue'
import BookArrangement from '~/components/Arrangements/Details/BookArrangement.vue'

export default {
  components: {
    AppPage,
    RelatedArrangementsSection,
    ArrangementPrices,
    BookArrangement,
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
  nuxtI18n: {
    paths: {
      de: '/arrangementen/:slug',
      en: '/arrangements/:slug',
      nl: '/arrangementen/:slug',
    },
  },
}
</script>
