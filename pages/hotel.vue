<template>
  <app-page :page="page">
    <pages-archive-section :parent="hotelPageId" />
  </app-page>
</template>

<script>
import PagesArchiveSection from '~/components/Pages/Archive/PagesArchiveSection.vue'
import PageQuery from '~/graphql/Page.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import { hotelPageId } from '~/data/pages'

export default {
  components: {
    AppPage,
    PagesArchiveSection,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: hotelPageId,
      },
    })
    return {
      page: page.data.page,
    }
  },
  data() {
    return {
      hotelPageId,
    }
  },
  nuxtI18n: {
    paths: {
      de: '/hotel',
      en: '/hotel',
      nl: '/hotel',
    },
  },
}
</script>
