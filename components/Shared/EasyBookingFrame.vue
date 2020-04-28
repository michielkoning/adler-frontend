<template>
  <iframe height="600" width="1000" :src="easyBookingUrlI18n" />
</template>

<script>
import { easyBookingUrl } from '~/data/siteDetails'

export default {
  props: {
    url: {
      type: String,
      default: easyBookingUrl,
    },
  },
  computed: {
    easyBookingUrlI18n() {
      const langId = this.getLangId()
      return this.url
        .replace(/\d\/category/, `${langId}/category`)
        .replace(/\d\/stepOne/, `${langId}/stepOne`)
    },
  },
  methods: {
    getLangId() {
      if (this.$i18n.locale === 'en') return 1
      if (this.$i18n.locale === 'nl') return 3
      return 2
    },
  },
}
</script>
