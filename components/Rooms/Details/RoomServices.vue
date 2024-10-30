<script lang="ts" setup>
defineProps<{
  items: string[]
}>()
</script>

<template>
  <div>
    <h2>{{ $t("thisRoomIncludes") }}:</h2>
    <ul class="list">
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

.list {
  display: grid;
  grid-column-gap: var(--gutter);

  @media (--viewport-sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

<i18n>
{
  "nl": {
    "title": "Deze kamer is voorzien van"
  },
  "de": {
    "title": "Dieses Zimmer ist ausgestattet mit"
  },
  "en": {
    "title": "This room is equipped with"
  }
}
</i18n>
