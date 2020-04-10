<template>
  <app-page :page="page" />
</template>

<script>
import PageQuery from '~/graphql/Pages/Page.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import pages from '~/data/pages'

export default {
  components: {
    AppPage,
  },
  async asyncData({ app, params }) {
    const language = app.i18n.locale
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: pages.privacy[language],
      },
    })
    return {
      page: page.data.page,
    }
  },
  nuxtI18n: {
    paths: {
      de: '/privacy-policy',
      en: '/privacy-policy',
      nl: '/privacy-policy',
    },
  },
}
</script>
