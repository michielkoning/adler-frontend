<script lang="ts" setup>
const { address } = useAppConfig();

const phoneNumberLink = computed(() => {
  return `tel:${encodeURIComponent(address.phoneNumber)}`;
});
</script>

<template>
  <contact-item-wrapper
    :title="address.phoneNumber"
    :url="phoneNumberLink"
    icon="phone"
  />
</template>
