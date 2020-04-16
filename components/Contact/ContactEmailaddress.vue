<template>
  <contact-item-wrapper>
    <template v-slot:icon>
      <icon-mail aria-hidden="true" width="20" height="20" />
    </template>

    <a :href="emailAddressLink" v-bind="$attrs">
      {{ emailAddress }}
    </a>
  </contact-item-wrapper>
</template>

<script>
import { emailAddress } from '~/data/address'
import IconMail from '~/icons/envelope.svg'
import ContactItemWrapper from '~/components/Contact/ContactItemWrapper.vue'

export default {
  components: {
    IconMail,
    ContactItemWrapper,
  },
  data() {
    return {
      emailAddress,
    }
  },
  computed: {
    emailAddressLink() {
      return `mailto:${this.emailAddress}`
    },
  },
}
</script>
