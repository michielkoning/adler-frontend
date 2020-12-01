<template>
  <app-page :page="page">
    <posts-archive-section v-if="posts.edges.length" :posts="posts.edges" />
  </app-page>
</template>

<script>
import PageQuery from '~/graphql/Pages/Page.gql'
import PostsQuery from '~/graphql/Posts/Posts.gql'
import getSeoMetaData from '~/helpers/seo'
import { blogPageId } from '~/data/pages'

export default {
  async asyncData({ app, params }) {
    const language = app.i18n.locale
    const { defaultClient } = app.apolloProvider
    const page = await defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: blogPageId[language],
      },
    })
    const posts = await defaultClient.query({
      query: PostsQuery,
      variables: {
        language: language.toUpperCase(),
      },
    })
    return {
      page: page.data.page,
      posts: posts.data.posts,
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
