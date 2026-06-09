<template>
  <div>
    <home-hero :page="page" />
    <center-wrapper v-if="page.content" :class="$style.article">
      <article>
        <!-- eslint-disable-next-line -->
        <h1 v-html="page.title" id="content" tabindex="-1" />
        <!-- eslint-disable-next-line -->
        <div v-html="page.content" />
      </article>
    </center-wrapper>
    <home-content :posts="relatedPosts" />
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

<style lang="postcss" module>
.article {
  padding-block: var(--spacing-m) var(--spacing-s);
}
</style>
