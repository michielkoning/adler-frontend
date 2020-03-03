<template>
  <sitebar-item-section id="related-arrangements" :title="$t('title')">
    <related-arrangements-container :not-in="notIn">
      <sitebar-item-list
        v-if="data"
        slot-scope="data"
        :items="data.relatedArrangements"
      />
    </related-arrangements-container>
  </sitebar-item-section>
</template>

<script>
import RelatedArrangementsContainer from '~/components/Arrangements/Related/RelatedArrangementsContainer.vue'
import SitebarItemSection from '~/components/Sidebar/SitebarItemSection.vue'
import SitebarItemList from '~/components/Sidebar/SitebarItemList.vue'

export default {
  components: {
    SitebarItemSection,
    SitebarItemList,
    RelatedArrangementsContainer,
  },
  props: {
    notIn: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<i18n>
{
  "nl": {
    "title": "Meer aanbiedingen"
  }
}
</i18n>
