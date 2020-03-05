<template>
  <app-page :page="page">
    <block-map />
    <the-address />
    <opening-hours />
    <social-media-links />
    <template v-slot:sidebar>
      <form-contact />
    </template>
  </app-page>
</template>

<script>
import SocialMediaLinks from '~/components/Contact/SocialMediaLinks.vue'
import FormContact from '~/components/Forms/FormContact.vue'
import BlockMap from '~/components/Contact/BlockMap.vue'
import PageQuery from '~/graphql/Page.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import { contactPageId } from '~/config/pages'
import TheAddress from '~/components/Contact/TheAddress.vue'
import OpeningHours from '~/components/Contact/OpeningHours.vue'

export default {
  components: {
    AppPage,
    FormContact,
    BlockMap,
    SocialMediaLinks,
    TheAddress,
    OpeningHours,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: contactPageId,
      },
    })
    return {
      page: page.data.page,
    }
  },
  nuxtI18n: {
    paths: {
      de: '/contact',
      en: '/contact',
      nl: '/contact',
    },
  },
}
</script>
