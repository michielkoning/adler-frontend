<template>
  <app-page :page="page">
    <pages-archive-section :parent="page.pageId" />
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
import PageQuery from '~/graphql/Pages/Page.gql'
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
      query: PageQuery,
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
