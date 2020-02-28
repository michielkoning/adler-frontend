<template>
  <address itemscope itemtype="http://schema.org/Organization" class="">
    <h2>Adres</h2>
    Hotel Gasthof Adler
    <div
      itemprop="address"
      itemscope
      itemtype="http://schema.org/PostalAddress"
    >
      <span itemprop="streetAddress">{{ address.street }}</span> -
      <span itemprop="postal-code">{{ address.postalCode }}</span>
      <span itemprop="locality">{{ address.city }}</span
      ><br />
    </div>
    <span itemprop="addressCountry">{{ address.country }}</span> -
    <span itemprop="addressRegion">{{ address.region }}</span
    ><br />
    <br />
    Tel:
    <a href="tel:%2B43-%280%295513-63670" itemprop="telephone">
      {{ address.phoneNumber }}
    </a>
    <br />
    Email:
    <a href="mailto:info@adler-lingenau.com" itemprop="email">
      {{ address.emailAddress }} </a
    ><br /><br />
    <a
      :href="directionsUrl"
      target="_blank"
      rel="noopener"
      class="btn-primary btn-small"
      >Routebeschrijving</a
    >
  </address>
</template>

<script>
import address from '~/data/address.json'

export default {
  data() {
    return {
      address,
    }
  },
  computed: {
    directionsUrl() {
      return 'https://www.google.com/maps?daddr=Hof%2043%20Lingenau'
    },
  },
}
</script>
