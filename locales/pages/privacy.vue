<template>
  <app-page :page="page" />
</template>

<script>
import PageQuery from '~/graphql/Pages/Page.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import { privacyPageId } from '~/data/pages'

export default {
  components: {
    AppPage,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: privacyPageId,
      },
    })
    return {
      page: page.data.page,
    }
  },
  data() {
    return {
      privacyPageId,
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
