<template>
  <div>
    <home-hero :page="page" />
    <home-content />
    <facilities-wrapper />
  </div>
</template>

<script>
import PageQuery from '~/graphql/Pages/Page.gql'
import { homePageId } from '~/data/pages'
import getSeoMetaData from '~/helpers/seo'

export default {
  async asyncData({ app, params }) {
    const language = app.i18n.locale
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: homePageId[language],
      },
    })
    return {
      page: page.data.page,
    }
  },

  head() {
    return getSeoMetaData(this.page)
  },
}
</script>
