<script lang="ts" setup>
const props = defineProps<{
  url?: string
}>()

const { easyBookingUrl } = useAppConfig()

const { locale } = useI18n()

const langId = computed(() => {
  if (locale.value === 'en') {
    return 1
  }
  else if (locale.value === 'nl') {
    return 3
  }
  else {
    return 2
  }
})

const easyBookingUrlI18n = computed(() => {
  const url = props.url || easyBookingUrl
  return url
    .replace(/#7731\/\d\//, `#7731/${langId.value}/8531-6749-1187/`)
    .replace('clientWeb001', 'bookingengine2/?embedded&backgroundColor=%2398012e&fontColor=%23000000&')
})
</script>

<template>
  <iframe
    height="600"
    width="1000"
    loading="lazy"
    :title="$t('bookNow')"
    :src="easyBookingUrlI18n"
  />
</template>
