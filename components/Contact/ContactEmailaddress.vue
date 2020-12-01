<template>
  <contact-item-wrapper>
    <template #icon>
      <icon-mail aria-hidden="true" width="20" height="20" />
    </template>

    <a :href="emailAddressLink" v-bind="$attrs">
      {{ emailAddress }}
    </a>
  </contact-item-wrapper>
</template>

<script>
import { emailAddress } from '~/data/address'

export default {
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
