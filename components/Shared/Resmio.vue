<template>
  <sitebar-item-section id="related-arrangements" :title="$t('title')">
    <!-- <iframe
      :class="$style.resmio"
      loading="lazy"
      width="400"
      height="300"
      :title="$t('iframeTitle')"
      :src="resmioUrl"
    ></iframe> -->
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

<style lang="postcss" module>
.resmio {
  min-height: 24em;
  height: calc(100% - 3em);
}
</style>

<i18n>
{
  "nl": {
    "title": "Ons restaurant",
    "iframeTitle": "Reserveer voor ons restaurant"
  },
  "de": {
    "title": "PLACEHOLDER",
    "iframeTitle": "PLACEHOLDER"
  },
  "en": {
    "title": "Our restaurant",
    "iframeTitle": "Make a reservation in our restaurant"
  }
}
</i18n>
