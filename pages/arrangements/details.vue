<template>
  <app-page :page="arrangement" :show-resmio="false">
    <arrangement-prices :prices="arrangement.pricesGroup.prices" />
    <template v-slot:sidebar>
      <book-arrangement :title="arrangement.title" />
      <related-arrangements-section :not-in="arrangement.databaseId" />
    </template>
  </app-page>
</template>

<script>
import ArrangementQuery from '~/graphql/Arrangements/Arrangement.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import RelatedArrangementsSection from '~/components/Arrangements/Related/RelatedArrangementsSection.vue'
import ArrangementPrices from '~/components/Arrangements/Prices/ArrangementPrices.vue'
import BookArrangement from '~/components/Arrangements/Details/BookArrangement.vue'
import getTranslations from '~/helpers/i18n'
import getSeoMetaData from '~/helpers/seo'

export default {
  components: {
    AppPage,
    RelatedArrangementsSection,
    ArrangementPrices,
    BookArrangement,
  },
  async asyncData({ app, params, store, redirect }) {
    const arrangement = await app.apolloProvider.defaultClient.query({
      query: ArrangementQuery,
      variables: {
        uri: params.slug,
      },
    })

    if (!arrangement.data.arrangement)
      redirect(301, app.localePath('arrangements'))

    const translations = getTranslations(
      app.i18n,
      arrangement.data.arrangement.translations,
      'slug',
      'slug',
    )

    await store.dispatch('i18n/setRouteParams', translations)

    return {
      arrangement: arrangement.data.arrangement,
    }
  },
  nuxtI18n: {
    paths: {
      de: '/arrangements/:slug',
      en: '/arrangements/:slug',
      nl: '/arrangementen/:slug',
    },
  },
  head() {
    return getSeoMetaData(this.arrangement)
  },
}
</script>
