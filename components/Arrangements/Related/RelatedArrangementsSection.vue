<template>
  <sitebar-item-section id="related-arrangements" :title="$t('title')">
    <sitebar-item-list v-if="arrangements.length" :items="arrangements" />
  </sitebar-item-section>
</template>

<script>
import SitebarItemSection from '~/components/Sidebar/SitebarItemSection.vue'
import SitebarItemList from '~/components/Sidebar/SitebarItemList.vue'

export default {
  components: {
    SitebarItemSection,
    SitebarItemList,
  },
  props: {
    arrangements: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<i18n>
{
  "nl": {
    "title": "Meer aanbiedingen"
  },
  "de": {
    "title": "Weitere Angebote"
  },
  "en": {
    "title": "More offers"
  }
}
</i18n>
