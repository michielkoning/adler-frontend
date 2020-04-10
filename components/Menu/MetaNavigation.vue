<template>
  <nav aria-labelledby="menu-title" class="nav">
    <h2 id="menu-title" class="sr-only" tabindex="-1">
      {{ $t('mainNavigation') }}
    </h2>

    <a href="tel:%2B43-%280%295513-63670" itemprop="telephone">
      {{ address.phoneNumber }}
    </a>
    <a href="mailto:info@adler-lingenau.com" itemprop="email">
      {{ address.emailAddress }}
    </a>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      >{{ locale.name }}</nuxt-link
    >
  </nav>
</template>

<script>
import { phoneNumber, emailAddress, directionsUrl } from '~/data/address'

export default {
  data() {
    return {
      directionsUrl,
      address: {
        phoneNumber,
        emailAddress,
      },
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
