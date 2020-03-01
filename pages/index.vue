<template>
  <div>
    <app-page :page="page">
      <archive-list :items="arrangements.edges" />
      <template v-slot:sidebar>
        <p>{{ page.pageId }}</p>
      </template>
    </app-page>
    <facilities-wrapper />
  </div>
</template>

<script>
import ArrangementsQuery from '~/graphql/Arrangements.gql'
import PageQuery from '~/graphql/Page.gql'
import ArchiveList from '~/components/Shared/Archive/ArchiveList.vue'
import AppPage from '~/components/Layout/AppPage.vue'
import { arrangementsPageId } from '~/config/pages'
import FacilitiesWrapper from '~/components/Facilitites/FacilitiesWrapper.vue'
export default {
  components: {
    ArchiveList,
    AppPage,
    FacilitiesWrapper,
  },
  async asyncData({ app, params }) {
    const arrangements = await app.apolloProvider.defaultClient.query({
      query: ArrangementsQuery,
    })
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: arrangementsPageId,
      },
    })
    return {
      arrangements: arrangements.data.arrangements,
      page: page.data.page,
    }
  },
}
</script>
