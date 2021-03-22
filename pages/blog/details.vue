<template>
  <app-page :page="post">
    <template #sidebar>
      <related-list-section
        v-if="relatedPosts.edges.length"
        :items="relatedPosts.edges"
        :title="$t('relatedListTitle')"
      />
    </template>
  </app-page>
</template>

<script>
import PostQuery from '~/graphql/Posts/Post.gql'
import RelatedPostQuery from '~/graphql/Posts/RelatedPosts.gql'
import getTranslations from '~/helpers/i18n'
import getSeoMetaData from '~/helpers/seo'

export default {
  async asyncData({ app, params, store, redirect }) {
    const post = await app.apolloProvider.defaultClient.query({
      query: PostQuery,
      variables: {
        uri: params.slug,
      },
    })

    if (!post.data.post) redirect(301, app.localePath('blog'))

    const relatedPosts = await app.apolloProvider.defaultClient.query({
      query: RelatedPostQuery,
      variables: {
        notIn: post.data.post.databaseId,
        language: app.i18n.locale.toUpperCase(),
      },
    })

    const translations = getTranslations(
      app.i18n,
      post.data.post.translations,
      'slug',
      'slug',
    )

    await store.dispatch('i18n/setRouteParams', translations)

    return {
      post: post.data.post,
      relatedPosts: relatedPosts.data.relatedPosts,
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
    return getSeoMetaData(this.post.seo)
  },
}
</script>

<i18n>
{
  "nl": {
    "relatedListTitle": "Meer berichten"
  },
  "de": {
    "relatedListTitle": "Mehr Berichte"
  },
  "en": {
    "relatedListTitle": "More posts"
  }
}
</i18n>
