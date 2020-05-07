<template>
  <app-page :page="page">
    <lazy-hydrate when-idle>
      <block-map />
    </lazy-hydrate>
    <lazy-hydrate ssr-only>
      <div :class="$style.wrapper">
        <the-address />
        <opening-times />
        <social-media-links />
      </div>
    </lazy-hydrate>
    <template v-slot:sidebar>
      <lazy-hydrate when-visible>
        <form-contact />
      </lazy-hydrate>
    </template>
  </app-page>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import PageQuery from '~/graphql/Pages/Page.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import { contactPageId } from '~/data/pages'
import getSeoMetaData from '~/helpers/seo'

export default {
  components: {
    LazyHydrate,
    AppPage,
    FormContact: () => import('~/components/Forms/FormContact.vue'),
    BlockMap: () => import('~/components/Contact/BlockMap.vue'),
    SocialMediaLinks: () => import('~/components/Contact/SocialMediaLinks.vue'),
    TheAddress: () => import('~/components/Contact/TheAddress.vue'),
    OpeningTimes: () => import('~/components/Contact/OpeningTimes.vue'),
  },
  async asyncData({ app, params }) {
    const language = app.i18n.locale
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: contactPageId[language],
      },
    })
    return {
      page: page.data.page,
      link: [
        {
          rel: 'dns-prefetch',
          href: '//maps.googleapis.com',
        },
      ],
    }
  },
  nuxtI18n: {
    paths: {
      de: '/kontakt',
      en: '/contact',
      nl: '/contact',
    },
  },
  head() {
    return getSeoMetaData(this.page)
  },
}
</script>

<style lang="postcss" module>
.wrapper {
  display: grid;
  grid-gap: var(--gutter);

  @media (--viewport-sm) {
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  }
}
</style>
