<script lang="ts" setup>
const { address, title } = useAppConfig();

const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <address itemscope itemtype="http://schema.org/Organization" class="">
    <h2>{{ t("address") }}</h2>
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

      <span itemprop="addressCountry">{{ t(address.country) }}</span> -
      <span itemprop="addressRegion">{{ address.region }}</span>
    </div>

    <div class="contact">
      <contact-phone-number itemprop="telephone" />
      <contact-emailaddress itemprop="email" />
    </div>

    <app-button
      size="small"
      :href="address.directionsUrl"
      target="_blank"
      rel="noopener"
    >
      {{ t("directions") }}
    </app-button>
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

<i18n>
{
  "nl": {
    "address": "Adres",
    "austria": "Oostenrijk",
    "directions": "Routebeschrijving"
  },
  "de": {
    "address": "Adresse",
    "austria": "Österreich",
    "directions": "Routenbeschreibung"
  },
  "en": {
    "address": "Address",
    "austria": "Austria",
    "directions": "Travel directions"
  }
}
</i18n>
