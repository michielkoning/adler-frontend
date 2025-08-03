<script lang="ts" setup>
const props = defineProps<{
  url?: string;
}>();

const { easyBookingUrl } = useAppConfig();

const { locale } = useI18n();

const langId = computed(() => {
  if (locale.value === "en") {
    return 1;
  } else if (locale.value === "nl") {
    return 3;
  } else {
    return 2;
  }
});

const easyBookingUrlI18n = computed(() => {
  const url = props.url || easyBookingUrl;
  return url
    .replace(/\d\/category/, `${langId.value}/category`)
    .replace(/\d\/stepOne/, `${langId.value}/stepOne`)
    .replace("clientWeb001", "bookingengine2");
});
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
