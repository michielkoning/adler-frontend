<template>
  <app-page :page="page">
    <posts-archive-section />
  </app-page>
</template>

<script>
import PostsArchiveSection from '~/components/Posts/Archive/PostsArchiveSection.vue'
import AppPage from '~/components/Layout/AppPage.vue'
import PageQuery from '~/graphql/Pages/Page.gql'
import { blogPageId } from '~/data/pages'

export default {
  components: {
    PostsArchiveSection,
    AppPage,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: blogPageId,
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
}
</script>
