<template>
  <nav aria-labelledby="menu-title" :class="$style.nav">
    <contact-phone-number />
    <contact-emailaddress />
    <language-switcher />
  </nav>
</template>

<script>
import { phoneNumber, emailAddress } from '~/data/address'
import LanguageSwitcher from '~/components/Menu/LanguageSwitcher.vue'
import ContactEmailaddress from '~/components/Contact/ContactEmailaddress.vue'
import ContactPhoneNumber from '~/components/Contact/ContactPhoneNumber.vue'
export default {
  components: {
    ContactEmailaddress,
    ContactPhoneNumber,
    LanguageSwitcher,
  },
  data() {
    return {
      address: {
        phoneNumber,
        emailAddress,
      },
    }
  },
}
</script>

<style lang="postcss" module>
.nav {
  display: flex;
}
</style>
