<template>
  <app-page :page="page" />
</template>

<script>
import PageQuery from '~/graphql/Pages/Page.gql'
import getSeoMetaData from '~/helpers/seo'
import { vouchersPageId } from '~/data/pages'
export default {
  async asyncData({ app, params, redirect }) {
    const language = app.i18n.locale

    const { defaultClient } = app.apolloProvider
    const page = await defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: vouchersPageId[language],
      },
    })

    if (!page.data.page) redirect(301, app.localePath('/'))

    return {
      page: page.data.page,
    }
  },
  nuxtI18n: {
    paths: {
      de: '/vouchers',
      en: '/vouchers-3',
      nl: '/vouchers-2',
    },
  },
  head() {
    return getSeoMetaData(this.page.seo)
  },
}
</script>
