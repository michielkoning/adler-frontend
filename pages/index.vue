<template>
  <div>
    <page :page="page">
      <teacher-list />
    </page>
    <services-wrapper />
  </div>
</template>

<script>
import pages from '@/config/pages'

import getSeoMetaData from '@/helpers/seo'
import TeacherList from '@/components/Teachers/TeacherList.vue'
import Page from '@/components/Page.vue'
import ServicesWrapper from '@/components/Services/ServicesWrapper.vue'
import PageHomeQuery from '~/graphql/PageHome.gql'

export default {
  components: {
    TeacherList,
    Page,
    ServicesWrapper,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageHomeQuery,
      variables: {
        pageId: pages.rooms,
      },
    })
    return {
      page: page.data.page,
    }
  },

  head() {
    return getSeoMetaData(this.page, this.$nuxt.$route)
  },
}
</script>
