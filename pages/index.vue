<template>
  <app-page :page="page">
    <archive-list :items="arrangements.edges" />
  </app-page>
</template>

<script>
import ArrangementsQuery from '~/graphql/Arrangements.gql'
import PageQuery from '~/graphql/Page.gql'
import ArchiveList from '~/components/Shared/Archive/ArchiveList.vue'
import AppPage from '~/components/Layout/AppPage.vue'

export default {
  components: {
    ArchiveList,
    AppPage,
  },
  async asyncData({ app, params }) {
    const arrangements = await app.apolloProvider.defaultClient.query({
      query: ArrangementsQuery,
    })
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: 2450,
      },
    })
    return {
      arrangements: arrangements.data.arrangements,
      page: page.data.page,
    }
  },
}
</script>
