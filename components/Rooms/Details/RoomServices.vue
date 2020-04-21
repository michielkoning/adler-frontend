<template>
  <div v-if="services.edges && services.edges.length">
    <h2>{{ $t('title') }}:</h2>
    <ul :class="$style.list">
      <li v-for="service in services.edges" :key="service.node.id">
        {{ service.node.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    services: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss" module>
.list {
  display: grid;
  grid-column-gap: var(--gutter);
  grid-template-columns: repeat(2, 1fr);
}
</style>

<i18n>
{
  "nl": {
    "title": "Kamer is voorzien van"
  },
  "de": {
    "title": "PLACEHOLDER"
  },
  "en": {
    "title": "PLACEHOLDER"
  }
}
</i18n>
