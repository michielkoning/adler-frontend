<template>
  <sitebar-item-section id="related-pages" :title="$t('title')">
    <sitebar-item-list :items="pages" />
  </sitebar-item-section>
</template>

<script>
export default {
  props: {
    pages: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<i18n>
{
  "nl": {
    "title": "Bekijk ook"
  },
  "de":  {
    "title": "Auch interessant"
  },
  "en": {
    "title": "See also"
  }
}
</i18n>
