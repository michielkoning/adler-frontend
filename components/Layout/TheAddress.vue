<script lang="ts" setup>
const { address, title } = useAppConfig();
</script>

<template>
  <address itemscope itemtype="http://schema.org/Organization">
    <h2>{{ $t("address") }}</h2>
    <div class="address">
      {{ title }}
      <div
        itemprop="address"
        itemscope
        itemtype="http://schema.org/PostalAddress"
      >
        <span itemprop="streetAddress">{{ address.street }}</span> -
        <span itemprop="postal-code">{{ address.postalCode }}</span>
        <span itemprop="locality">{{ address.city }}</span>
        <br />
      </div>

      <span itemprop="addressCountry">{{ $t(address.country) }}</span> -
      <span itemprop="addressRegion">{{ address.region }}</span>
    </div>

    <div class="contact">
      <contact-phone-number itemprop="telephone" />
      <contact-emailaddress itemprop="email" />
    </div>

    <app-button
      :title="$t('directions')"
      size="small"
      :to="address.directionsUrl"
      target="_blank"
    />
  </address>
</template>

<style lang="postcss" scoped>
.address {
  margin-bottom: var(--spacing-xs);
}

.contact {
  margin-bottom: var(--spacing-m);
}
</style>
