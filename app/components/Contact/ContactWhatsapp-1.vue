<script lang="ts" setup>
const { address } = useAppConfig()

const emailLink = computed(() => {
  return `mailto:${encodeURIComponent(address.emailAddress)}`
})
</script>

<template>
  <contact-item-wrapper
    title="Chatten auf WhatsApp"
    :url="emailLink"
    icon="adler:whatsapp"
  />
</template>
