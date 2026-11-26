<script lang="ts" setup>
const { address } = useAppConfig()

const emailLink = computed(() => {
  return `mailto:${encodeURIComponent(address.emailAddress)}`
})
</script>

<template>
  <app-button
    title="Chatten auf WhatsApp"
    size="small"
    :to="address.directionsUrl"
    target="_blank"
    icon="adler:whatsapp"
  />
</template>
