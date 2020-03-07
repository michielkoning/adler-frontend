<template>
  <sitebar-item-section id="related-arrangements" :title="$t('title')">
    <iframe loading="lazy" width="400" height="400" :src="resmioUrl"></iframe>
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
    "title": "Reserveer voor ons restaurant"
  }
}
</i18n>
