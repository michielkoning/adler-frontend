<template>
  <app-page :page="arrangement" :show-resmio="false">
    <arrangement-prices :prices="arrangement.pricesGroup.prices" />
    <template #sidebar>
      <book-arrangement :title="arrangement.title" />
      <related-arrangements-section
        v-if="relatedArrangements.edges.length"
        :arrangements="relatedArrangements.edges"
      />
    </template>
  </app-page>
</template>

<script>
import ArrangementQuery from '~/graphql/Arrangements/Arrangement.gql'
import RelatedArrangementsQuery from '~/graphql/Arrangements/RelatedArrangements.gql'
import getTranslations from '~/helpers/i18n'
import getSeoMetaData from '~/helpers/seo'

export default {
  async asyncData({ app, params, store, redirect }) {
    const arrangement = await app.apolloProvider.defaultClient.query({
      query: ArrangementQuery,
      variables: {
        uri: params.slug,
      },
    })

    if (!arrangement.data.arrangement)
      redirect(301, app.localePath('arrangements'))

    const relatedArrangements = await app.apolloProvider.defaultClient.query({
      query: RelatedArrangementsQuery,
      variables: {
        notIn: arrangement.data.arrangement.databaseId,
        language: app.i18n.locale.toUpperCase(),
      },
    })

    const translations = getTranslations(
      app.i18n,
      arrangement.data.arrangement.translations,
      'slug',
      'slug',
    )

    await store.dispatch('i18n/setRouteParams', translations)

    return {
      arrangement: arrangement.data.arrangement,
      relatedArrangements: relatedArrangements.data.relatedArrangements,
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
