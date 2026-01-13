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
.address {
  margin-bottom: var(--spacing-xs);
}

.contact {
  margin-bottom: var(--spacing-m);
}
</style>
