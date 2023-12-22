<template>
  <div>
    <home-hero :page="page" />
    <home-content :posts="relatedPosts" />
    <center-wrapper>
      <client-only>
        <giggle-widget />
      </client-only>
    </center-wrapper>
    <facilities-wrapper />
  </div>
</template>

<script>
import PageQuery from '~/graphql/Pages/Page.gql'
import RelatedPostsQuery from '~/graphql/Posts/RelatedPosts.gql'

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
    const relatedPosts = await defaultClient.query({
      query: RelatedPostsQuery,
      variables: {
        language: language.toUpperCase(),
        notIn: 0,
      },
    })
    return {
      page: page.data.page,
      relatedPosts: relatedPosts.data.relatedPosts,
    }
  },

  head() {
    return getSeoMetaData(this.page.seo)
  },
}
</script>
