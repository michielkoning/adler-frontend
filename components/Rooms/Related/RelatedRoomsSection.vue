<template>
  <sitebar-item-section id="related-rooms" :title="$t('title')">
    <sitebar-item-list v-if="rooms.length" :items="rooms" />
  </sitebar-item-section>
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
    "title": "Onze andere kamers"
  },
  "de": {
    "title": "Andere Zimmerarten"
  },
  "en": {
    "title": "Our other rooms"
  }
}
</i18n>
