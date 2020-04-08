<template>
  <app-page :page="page">
    <pages-archive-section :parent="page.databaseId" />
    <template v-slot:sidebar>
      <related-pages-section
        v-if="page.parent"
        :not-in="page.pageId"
        :parent-page-id="page.parent.pageId"
      />
    </template>
  </app-page>
</template>

<script>
import PageByURIQuery from '~/graphql/Pages/PageByURI.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import PagesArchiveSection from '~/components/Pages/Archive/PagesArchiveSection.vue'
import RelatedPagesSection from '~/components/Pages/Related/RelatedPagesSection.vue'

export default {
  components: {
    AppPage,
    PagesArchiveSection,
    RelatedPagesSection,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageByURIQuery,
      variables: {
        uri: params.pathMatch,
      },
    })
    return {
      page: page.data.page,
    }
  },
  nuxtI18n: {
    paths: {
      de: '/*',
      en: '/*',
      nl: '/*',
    },
  },
}
</script>
