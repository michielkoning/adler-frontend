<template>
  <section aria-labelledby="rooms-title">
    <h1 id="rooms-title" class="sr-only">{{ $t('title') }}</h1>
    <archive-list :items="rooms" />
  </section>
</template>

<script>
export default {
  props: {
    rooms: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<i18n>
{
  "nl": {
    "title": "Onze kamers"
  },
  "de": {
    "title": "Unsere Zimmer"
  },
  "en": {
    "title": "Our rooms"
  }
}
</i18n>
