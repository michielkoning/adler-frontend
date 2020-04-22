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
// import getTrans\lations from '~/helpers/i18n'
import getSeoMetaData from '~/helpers/seo'

export default {
  components: {
    AppPage,
    RelatedPostsSection,
  },
  async asyncData({ app, params, store, redirect }) {
    const post = await app.apolloProvider.defaultClient.query({
      query: PostQuery,
      variables: {
        uri: params.slug,
      },
    })

    // if (!post.data.post) redirect(301, app.localePath('blog'))

    // const translations = getTranslations(
    //   app.i18n,
    //   post.data.post.translations,
    //   'slug',
    //   'slug',
    // )

    // await store.dispatch('i18n/setRouteParams', translations)

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
  head() {
    return getSeoMetaData(this.post)
  },
}
</script>
