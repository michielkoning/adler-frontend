<template>
  <sitebar-item-section id="related-arrangements" :title="$t('title')">
    <iframe
      ref="frame"
      :class="$style.resmio"
      width="400"
      height="300"
      :title="$t('iframeTitle')"
    />
  </sitebar-item-section>
</template>

<script>
import { resmioUrl } from '~/data/siteDetails'
import SitebarItemSection from '~/components/Sidebar/SitebarItemSection.vue'
import lazyLoadFrame from '~/helpers/lazyLoadFrame'

export default {
  components: {
    SitebarItemSection,
  },
  data() {
    return {
      resmioUrl,
    }
  },
  mounted() {
    const { frame } = this.$refs
    lazyLoadFrame(frame, resmioUrl)
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
    "title": "Unser Restaurant",
    "iframeTitle": "Reservieren Sie in unserem Restaurant"
  },
  "en": {
    "title": "Our restaurant",
    "iframeTitle": "Make a reservation in our restaurant"
  }
}
</i18n>
