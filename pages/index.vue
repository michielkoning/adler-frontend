<template>
  <div>
    <home-hero :page="page" />
    <home-content />
    <facilities-wrapper />
  </div>
</template>

<script>
import PageQuery from '~/graphql/Pages/Page.gql'
import { homePageId } from '~/data/pages'
import FacilitiesWrapper from '~/components/Facilitites/FacilitiesWrapper.vue'
import HomeHero from '~/components/Home/HomeHero.vue'
import HomeContent from '~/components/Home/HomeContent.vue'
import getSeoMetaData from '~/helpers/seo'

export default {
  components: {
    FacilitiesWrapper,
    HomeHero,
    HomeContent,
  },
  async asyncData({ app, params }) {
    const language = app.i18n.locale
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: homePageId[language],
      },
    })
    return {
      page: page.data.page,
    }
  },
  head() {
    return getSeoMetaData(this.page)
  },
}
</script>
