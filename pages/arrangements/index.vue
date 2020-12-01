<template>
  <app-page :page="page" :show-resmio="false">
    <archive-section
      v-if="arrangements.edges.length"
      :items="arrangements.edges"
      :title="$t('archiveTitle')"
    />
  </app-page>
</template>

<script>
import PageQuery from '~/graphql/Pages/Page.gql'
import ArrangementsQuery from '~/graphql/Arrangements/Arrangements.gql'
import getSeoMetaData from '~/helpers/seo'
import { arrangementsPageId } from '~/data/pages'

export default {
  async asyncData({ app, params }) {
    const language = app.i18n.locale
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: arrangementsPageId[language],
      },
    })
    const arrangements = await app.apolloProvider.defaultClient.query({
      query: ArrangementsQuery,
      variables: {
        language: language.toUpperCase(),
      },
    })
    return {
      arrangements: arrangements.data.arrangements,
      page: page.data.page,
    }
  },
  nuxtI18n: {
    paths: {
      de: '/arrangements',
      en: '/arrangements',
      nl: '/arrangementen',
    },
  },
  head() {
    return getSeoMetaData(this.page)
  },
}
</script>

<i18n>
{
  "nl": {
    "archiveTitle": "Onze arrangementen"
  },
  "de": {
    "archiveTitle": "Unsere Arrangements"
  },
  "en": {
    "archiveTitle": "Our arrangements"
  }
}
</i18n>
