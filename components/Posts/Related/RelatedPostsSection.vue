<template>
  <sitebar-item-section id="related-posts" :title="title">
    <sitebar-item-list :items="relatedPosts" />
  </sitebar-item-section>
</template>

<script>
export default {
  props: {
    relatedPosts: {
      type: Array,
      default: () => [],
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
