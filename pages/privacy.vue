<template>
  <app-page :page="page" />
</template>

<script>
import PageQuery from '~/graphql/Pages/Page.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import getSeoMetaData from '~/helpers/seo'
import { privacyPageId } from '~/data/pages'

export default {
  components: {
    AppPage,
  },
  async asyncData({ app, params }) {
    const language = app.i18n.locale
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: privacyPageId[language],
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
  head() {
    return getSeoMetaData(this.page)
  },
}
</script>
