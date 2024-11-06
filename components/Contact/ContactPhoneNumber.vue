<template>
  <contact-item-wrapper>
    <template #icon>
      <icon-phone aria-hidden="true" width="20" height="20" />
    </template>

    <a :href="phoneNumberLink" v-bind="$attrs">
      {{ phoneNumber }}
    </a>
  </contact-item-wrapper>
</template>

<script>
import { phoneNumber } from "~/data/address";
import IconPhone from "~/icons/phone.svg";

export default {
  components: {
    IconPhone,
  },
  data() {
    return {
      phoneNumber,
    };
  },
  computed: {
    phoneNumberLink() {
      return `tel:${this.encodeURIComponent(this.phoneNumber)}`;
    },
  },
  methods: {
    encodeURIComponent(value) {
      return encodeURIComponent(value);
    },
  },
};
</script>
