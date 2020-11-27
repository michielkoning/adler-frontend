<template>
  <sitebar-item-section id="related-pages" :title="$t('title')">
    <related-pages-container :not-in="notIn" :parent-page-id="parentPageId">
      <template #default="data">
        <sitebar-item-list v-if="data" :items="data.relatedPages" />
      </template>
    </related-pages-container>
  </sitebar-item-section>
</template>

<script>
import RelatedPagesContainer from '~/components/Pages/Related/RelatedPagesContainer.vue'
import SitebarItemSection from '~/components/Sidebar/SitebarItemSection.vue'
import SitebarItemList from '~/components/Sidebar/SitebarItemList.vue'

export default {
  components: {
    SitebarItemSection,
    SitebarItemList,
    RelatedPagesContainer,
  },
  props: {
    notIn: {
      type: Number,
      default: 0,
    },
    parentPageId: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<i18n>
{
  "nl": {
    "title": "Bekijk ook"
  },
  "de":  {
    "title": "Auch interessant"
  },
  "en": {
    "title": "See also"
  }
}
</i18n>
