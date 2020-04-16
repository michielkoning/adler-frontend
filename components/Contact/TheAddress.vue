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
      <div :class="$style['contact-item']">
        <div :class="$style.icon">
          <icon-phone aria-hidden="true" width="16" height="16" />
        </div>
        <div :class="$style.link">
          <a href="tel:%2B43-%280%295513-63670" itemprop="telephone">
            {{ phoneNumber }}
          </a>
        </div>
      </div>
      <div :class="$style['contact-item']">
        <div :class="$style.icon">
          <icon-mail aria-hidden="true" width="16" height="16" />
        </div>
        <div :class="$style.link">
          <a href="mailto:info@adler-lingenau.com" itemprop="email">
            {{ emailAddress }}
          </a>
        </div>
      </div>
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
  phoneNumber,
  emailAddress,
  directionsUrl,
} from '~/data/address'
import { title } from '~/data/siteDetails'
import IconMail from '~/icons/envelope.svg'
import IconPhone from '~/icons/phone.svg'

import AppButton from '~/components/Shared/AppButton.vue'

export default {
  components: {
    AppButton,
    IconMail,
    IconPhone,
  },
  filters: {
    encodeURIComponent(value) {
      return encodeURIComponent(value)
    },
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
      phoneNumber,
      emailAddress,
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

.contact-item {
  display: flex;
  margin-bottom: var(--spacing-xxs);
}

.icon {
  flex: 0 0 1.25em;
  transform: translateY(0.15em);
}

.link {
  flex: 0 0 auto;
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
