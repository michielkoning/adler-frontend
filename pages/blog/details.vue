<template>
  <app-page :page="post">
    <template v-slot:sidebar>
      <related-posts-section :not-in="post.databaseId" />
    </template>
  </app-page>
</template>

<script>
import PostQuery from '~/graphql/Posts/Post.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import RelatedPostsSection from '~/components/Posts/Related/RelatedPostsSection.vue'

export default {
  components: {
    AppPage,
    RelatedPostsSection,
  },
  async asyncData({ app, params }) {
    const post = await app.apolloProvider.defaultClient.query({
      query: PostQuery,
      variables: {
        uri: params.slug,
      },
    })
    return {
      post: post.data.post,
    }
  },
  nuxtI18n: {
    paths: {
      de: '/blog/:slug',
      en: '/blog/:slug',
      nl: '/blog/:slug',
    },
  },
}
</script>
