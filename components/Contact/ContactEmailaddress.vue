<script lang="ts" setup>
const { address } = useAppConfig();

const emailLink = computed(() => {
  return `mailto:${encodeURIComponent(address.emailAddress)}`;
});
</script>

<template>
  <contact-item-wrapper
    :title="address.emailAddress"
    :url="emailLink"
    icon="envelope"
  />
</template>
