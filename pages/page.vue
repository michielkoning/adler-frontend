<template>
  <app-page :page="page">
    <pages-archive-section :parent="page.databaseId" />
    <template v-slot:sidebar>
      <related-pages-section
        v-if="page.parent"
        :not-in="page.databaseId"
        :parent-page-id="page.parentId"
      />
    </template>
  </app-page>
</template>

<script>
import PageByURIQuery from '~/graphql/Pages/PageByURI.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import RelatedPagesSection from '~/components/Pages/Related/RelatedPagesSection.vue'
import getTranslations from '~/helpers/i18n'
import getSeoMetaData from '~/helpers/seo'
import PagesArchiveSection from '~/components/Pages/Archive/PagesArchiveSection.vue'

export default {
  components: {
    PagesArchiveSection,
    AppPage,
    RelatedPagesSection,
  },
  async asyncData({ app, params, store, redirect }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageByURIQuery,
      variables: {
        uri: params.pathMatch,
      },
    })

    if (!page.data.page) redirect(301, app.localePath('/'))

    const translations = getTranslations(
      app.i18n,
      page.data.page.translations,
      'pathMatch',
      'relativeUrl',
    )

    await store.dispatch('i18n/setRouteParams', translations)

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
  head() {
    return getSeoMetaData(this.page)
  },
}
</script>
