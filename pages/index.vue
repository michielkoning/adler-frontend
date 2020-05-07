<template>
  <div>
    <lazy-hydrate when-idle>
      <home-hero :page="page" />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <home-content />
    </lazy-hydrate>
    <lazy-hydrate ssr-only>
      <facilities-wrapper />
    </lazy-hydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import PageQuery from '~/graphql/Pages/Page.gql'
import { homePageId } from '~/data/pages'
import getSeoMetaData from '~/helpers/seo'
export default {
  components: {
    LazyHydrate,

    FacilitiesWrapper: () =>
      import('~/components/Facilitites/FacilitiesWrapper.vue'),
    HomeHero: () => import('~/components/Home/HomeHero.vue'),
    HomeContent: () => import('~/components/Home/HomeContent.vue'),
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
