<template>
  <div>
    <div id="ebFrontEndFrame"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.jQuery('#ebFrontEndFrame').ebFrontEnd({
      customerId: 7731,
      serialNo: '8531-6749-1187',
      localeId: this.getLocale(),
      frameId: 'ebFrontEndPlugin',
      encapsulated: true,
      adultOnly: false,
      hideFilters: 'on',
      conversionReservation: '',
      conversionEnquiry: '',
      frameWidth: 'auto',
      frameHeight: 'auto',
      resizeInterval: 500,
      source: 'website',
      collapsedExtras: false,
    })
  },
  methods: {
    getLocale() {
      if (this.$i18n.locale === 'en') return 1
      if (this.$i18n.locale === 'nl') return 3
      return 2
    },
  },
}
</script>
