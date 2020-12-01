<template>
  <app-page :page="page">
    <archive-section
      v-if="pages.edges.length"
      :items="pages.edges"
      :title="$t('archiveTitle')"
    />
    <template #sidebar>
      <related-list-section
        v-if="relatedPages && relatedPages.edges.length"
        :items="relatedPages.edges"
        :title="$t('relatedListTitle')"
      />
    </template>
  </app-page>
</template>

<script>
import PageByURIQuery from '~/graphql/Pages/PageByURI.gql'
import PagesQuery from '~/graphql/Pages/Pages.gql'
import RelatedPagesQuery from '~/graphql/Pages/RelatedPages.gql'
import getTranslations from '~/helpers/i18n'
import getSeoMetaData from '~/helpers/seo'

export default {
  async asyncData({ app, params, store, redirect }) {
    const { defaultClient } = app.apolloProvider
    const page = await defaultClient.query({
      query: PageByURIQuery,
      variables: {
        uri: params.pathMatch,
      },
    })

    if (!page.data.page) redirect(301, app.localePath('/'))

    const pages = await defaultClient.query({
      query: PagesQuery,
      variables: {
        parent: page.data.page.databaseId,
        language: app.i18n.locale.toUpperCase(),
      },
    })

    let relatedPages = null
    if (page.data.page.parentDatabaseId) {
      const relatedPagesResult = await defaultClient.query({
        query: RelatedPagesQuery,
        variables: {
          notIn: page.data.page.databaseId,
          parentId: page.data.page.parentDatabaseId,
          language: app.i18n.locale.toUpperCase(),
        },
      })
      relatedPages = relatedPagesResult.data.relatedPages
    }
    const translations = getTranslations(
      app.i18n,
      page.data.page.translations,
      'pathMatch',
      'relativeUrl',
    )

    await store.dispatch('i18n/setRouteParams', translations)

    return {
      page: page.data.page,
      pages: pages.data.pages,
      relatedPages,
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

<i18n>
{
  "nl": {
    "archiveTitle": "Gerelateerde pagina's",
    "relatedListTitle": "Bekijk ook"
  },
  "de":  {
    "archiveTitle": "Verwandte Seiten",
    "relatedListTitle": "Auch interessant"
  },
  "en": {
    "archiveTitle": "Related pages",
    "relatedListTitle": "See also"
  }
}
</i18n>
