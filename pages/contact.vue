<template>
  <app-page :page="page">
    <block-map />

    <div :class="$style.wrapper">
      <the-address />
      <opening-times />
      <social-media-links />
    </div>

    <template #sidebar>
      <form-contact />
    </template>
  </app-page>
</template>

<script>
import PageQuery from '~/graphql/Pages/Page.gql'
import { contactPageId } from '~/data/pages'
import getSeoMetaData from '~/helpers/seo'

export default {
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
    return getSeoMetaData(this.page.seo)
  },
}
</script>

<style lang="postcss" module>
@import '~/styles/media-queries/media-queries.css';

.wrapper {
  display: grid;
  grid-gap: var(--gutter);

  @media (--viewport-sm) {
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  }
}
</style>
