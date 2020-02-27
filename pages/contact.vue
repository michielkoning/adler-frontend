<template>
  <app-page :page="page">
    <template v-slot:sidebar>
      <p>Here's some contact info</p>
    </template>
  </app-page>
</template>

<script>
import PageQuery from '~/graphql/Page.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import { contactPageId } from '~/config/pages'

export default {
  components: {
    AppPage,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: contactPageId,
      },
    })
    return {
      page: page.data.page,
    }
  },
}
</script>
