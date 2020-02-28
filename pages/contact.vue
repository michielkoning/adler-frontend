<template>
  <app-page :page="page">
    <block-map />
    <template v-slot:sidebar>
      <form-contact />
    </template>
  </app-page>
</template>

<script>
import FormContact from '~/components/Forms/FormContact.vue'
import BlockMap from '~/components/Contact/BlockMap.vue'
import PageQuery from '~/graphql/Page.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import { contactPageId } from '~/config/pages'

export default {
  components: {
    AppPage,
    FormContact,
    BlockMap,
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
}
</script>
