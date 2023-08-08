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

    const convertToDate = (value) => {
      if (!value) {
        return null
      }
      const [day, month, year] = value.split('/')
      return new Date(`${year}-${month}-${day}`)
    }

    const lastMinutesByDate = lastMinutes.data.lastMinutes.edges.sort(
      (a, b) => {
        return (
          convertToDate(a.node.lastMinute.dates.dateFrom) -
          convertToDate(b.node.lastMinute.dates.dateFrom)
        )
      },
    )
    return {
      lastMinutes: lastMinutesByDate,
      page: page.data.page,
    }
  },
  nuxtI18n: {
    b: {
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
