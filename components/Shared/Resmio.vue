<template>
  <sitebar-item-section id="related-arrangements" :title="$t('title')">
    <iframe
      loading="lazy"
      width="400"
      height="300"
      :title="title"
      :src="resmioUrl"
    ></iframe>
  </sitebar-item-section>
</template>

<script>
import { resmioUrl } from '~/data/siteDetails'
import SitebarItemSection from '~/components/Sidebar/SitebarItemSection.vue'

export default {
  components: {
    SitebarItemSection,
  },
  data() {
    return {
      resmioUrl,
    }
  },
}
</script>

<i18n>
{
  "nl": {
    "title": "Ons restaurant"
  }
}
</i18n>
