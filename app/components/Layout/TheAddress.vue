<script lang="ts" setup>
const { address, title } = useAppConfig()
</script>

<template>
  <address
    itemscope
    itemtype="http://schema.org/Organization"
  >
    <h2>{{ $t("address") }}</h2>
    <div class="address">
      {{ title }}<br>
      {{ address.street }} - {{ address.postalCode }}
      {{ address.city }}
      <br>

      {{ $t(address.country) }} -
      {{ address.region }}
    </div>

    <div class="contact">
      <contact-phone-number />
      <contact-emailaddress />
      <contact-whatsapp-1 class="btn" />
      <contact-whatsapp-2 class="btn" /><br>
      <contact-whatsapp-3 class="btn" /><br>
      <contact-whatsapp-4 class="btn" /><br>
    </div>

    <app-button
      :title="$t('directions')"
      size="small"
      :to="address.directionsUrl"
      target="_blank"
    />
  </address>
</template>

<style lang="css" scoped>
.btn {
  margin-block-end: var(--spacing-2);
}

.address {
  margin-block-end: var(--spacing-2);
}

.contact {
  margin-block-end: var(--spacing-4);
}
</style>
