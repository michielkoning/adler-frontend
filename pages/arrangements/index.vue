<template>
  <app-page :page="page">
    <arrangements-section />
    <template v-slot:sidebar>
      <p>{{ page.pageId }}</p>
    </template>
  </app-page>
</template>

<script>
import ArrangementsSection from '~/components/Arrangements/ArrangementsSection.vue'
import PageQuery from '~/graphql/Page.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import { arrangementsPageId } from '~/config/pages'

export default {
  components: {
    ArrangementsSection,
    AppPage,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: arrangementsPageId,
      },
    })
    return {
      page: page.data.page,
    }
  },
  nuxtI18n: {
    paths: {
      nl: '/arrangementen',
    },
  },
}
</script>
