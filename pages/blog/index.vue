<template>
  <app-page :page="page">
    <posts-archive-section />
  </app-page>
</template>

<script>
import AppPage from '~/components/Layout/AppPage.vue'
import PageQuery from '~/graphql/Pages/Page.gql'
import getSeoMetaData from '~/helpers/seo'
import { blogPageId } from '~/data/pages'

export default {
  components: {
    PostsArchiveSection: () =>
      import('~/components/Posts/Archive/PostsArchiveSection.vue'),
    AppPage,
  },
  async asyncData({ app, params }) {
    const language = app.i18n.locale
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: blogPageId[language],
      },
    })
    return {
      page: page.data.page,
    }
  },
  nuxtI18n: {
    paths: {
      de: '/blog',
      en: '/blog',
      nl: '/blog',
    },
  },
  head() {
    return getSeoMetaData(this.page)
  },
}
</script>
