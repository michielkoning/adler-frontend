<template>
  <last-minutes-section :items="lastMinutes" />
</template>

<script>
import { lastMinutePageId } from '~/data/pages'
import PageQuery from '~/graphql/Pages/Page.gql'
import getSeoMetaData from '~/helpers/seo'
import LastMinutesQuery from '~/graphql/LastMinutes/LastMinutes.gql'
export default {
  async asyncData({ app, params }) {
    const language = app.i18n.locale
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: lastMinutePageId[language],
      },
    })
    const lastMinutes = await app.apolloProvider.defaultClient.query({
      query: LastMinutesQuery,
      variables: {
        language: language.toUpperCase(),
      },
    })
    return {
      lastMinutes: lastMinutes.data.lastMinutes.edges,
      page: page.data.page,
    }
  },
  nuxtI18n: {
    paths: {
      de: '/last-minute',
      en: '/last-minute',
      nl: '/last-minute',
    },
  },
  head() {
    return getSeoMetaData(this.page.seo)
  },
}
</script>
