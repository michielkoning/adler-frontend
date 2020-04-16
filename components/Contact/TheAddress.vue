<template>
  <address itemscope itemtype="http://schema.org/Organization" class="">
    <h2>{{ $t('title') }}</h2>
    <div :class="$style.address">
      {{ title }}
      <div
        itemprop="address"
        itemscope
        itemtype="http://schema.org/PostalAddress"
      >
        <span itemprop="streetAddress">{{ street }}</span> -
        <span itemprop="postal-code">{{ postalCode }}</span>
        <span itemprop="locality">{{ city }}</span>
        <br />
      </div>

      <span itemprop="addressCountry">{{ countryI18n }}</span> -
      <span itemprop="addressRegion">{{ region }}</span>
    </div>

    <div :class="$style.contact">
      <contact-phone-number itemprop="telephone" />
      <contact-emailaddress itemprop="email" />
    </div>

    <app-button
      :is-large="false"
      :href="directionsUrl"
      target="_blank"
      rel="noopener"
    >
      {{ $t('directions') }}
    </app-button>
  </address>
</template>

<script>
import {
  street,
  postalCode,
  city,
  country,
  region,
  directionsUrl,
} from '~/data/address'
import { title } from '~/data/siteDetails'
import ContactEmailaddress from '~/components/Contact/ContactEmailaddress.vue'
import ContactPhoneNumber from '~/components/Contact/ContactPhoneNumber.vue'
import AppButton from '~/components/Shared/AppButton.vue'

export default {
  components: {
    AppButton,
    ContactEmailaddress,
    ContactPhoneNumber,
  },

  data() {
    return {
      directionsUrl,
      title,
      street,
      postalCode,
      city,
      country,
      region,
    }
  },
  computed: {
    countryI18n() {
      return this.$t(this.country)
    },
  },
}
</script>

<style lang="postcss" module>
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
    "title": "Adres",
    "austria": "Oostenrijk",
    "directions": "Routebeschrijving"
  },
  "de": {
    "title": "Adresse",
    "austria": "Österreich",
    "directions": "Routenbeschreibung"
  },
  "en": {
    "title": "Address",
    "austria": "Austria",
    "directions": "Travel directions"
  }
}
</i18n>
