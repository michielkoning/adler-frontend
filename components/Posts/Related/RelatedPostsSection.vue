<template>
  <sitebar-item-section id="related-posts" :title="title">
    <related-posts-container :not-in="notIn">
      <sitebar-item-list
        v-if="data"
        slot-scope="data"
        :items="data.relatedPosts"
      />
    </related-posts-container>
  </sitebar-item-section>
</template>

<script>
import RelatedPostsContainer from '~/components/Posts/Related/RelatedPostsContainer.vue'
import SitebarItemSection from '~/components/Sidebar/SitebarItemSection.vue'
import SitebarItemList from '~/components/Sidebar/SitebarItemList.vue'

export default {
  components: {
    SitebarItemSection,
    SitebarItemList,
    RelatedPostsContainer,
  },
  props: {
    notIn: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    title() {
      if (this.notIn) {
        return this.$t('othertPosts')
      }
      return this.$t('latestPosts')
    },
  },
}
</script>

<i18n>
{
  "nl": {
    "latestPosts": "Laatste berichten",
    "othertPosts": "Meer berichten"
  }
}
</i18n>
