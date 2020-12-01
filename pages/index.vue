<template>
  <div>
    <home-hero :page="page" />
    <home-content :posts="posts" />
    <facilities-wrapper />
  </div>
</template>

<script>
import PageQuery from '~/graphql/Pages/Page.gql'
import PostsQuery from '~/graphql/Posts/Posts.gql'

import { homePageId } from '~/data/pages'
import getSeoMetaData from '~/helpers/seo'

export default {
  async asyncData({ app, params }) {
    const language = app.i18n.locale
    const { defaultClient } = app.apolloProvider

    const page = await defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: homePageId[language],
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

  head() {
    return getSeoMetaData(this.page)
  },
}
</script>
