<template>
  <div>
    <app-loader v-if="loading" />
    <iframe
      ref="frame"
      height="600"
      width="1000"
      :title="$t('bookNow')"
      @load="updateLoader"
    />
  </div>
</template>

<script>
import { easyBookingUrl } from '~/data/siteDetails'
import lazyLoadFrame from '~/helpers/lazyLoadFrame'
import AppLoader from '~/components/Shared/AppLoader.vue'

export default {
  components: {
    AppLoader,
  },
  props: {
    url: {
      type: String,
      default: easyBookingUrl,
    },
  },
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    easyBookingUrlI18n() {
      const langId = this.getLangId()
      return this.url
        .replace(/\d\/category/, `${langId}/category`)
        .replace(/\d\/stepOne/, `${langId}/stepOne`)
    },
  },
  mounted() {
    const { frame } = this.$refs
    lazyLoadFrame(frame, this.easyBookingUrlI18n)
  },
  methods: {
    updateLoader() {
      this.loading = false
    },
    getLangId() {
      if (this.$i18n.locale === 'en') return 1
      if (this.$i18n.locale === 'nl') return 3
      return 2
    },
  },
}
</script>
