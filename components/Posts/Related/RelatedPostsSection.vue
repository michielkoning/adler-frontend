<template>
  <sitebar-item-section id="related-posts" :title="title">
    <related-posts-container :not-in="notIn">
      <template #default="data">
        <sitebar-item-list v-if="data" :items="data.relatedPosts" />
      </template>
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
        return this.$t('otherPosts')
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
    "otherPosts": "Meer berichten"
  },
  "de": {
    "latestPosts": "Neueste Beiträge",
    "otherPosts": "Mehr Berichte"
  },
  "en": {
    "latestPosts": "Latest posts",
    "otherPosts": "More posts"
  }
}
</i18n>
