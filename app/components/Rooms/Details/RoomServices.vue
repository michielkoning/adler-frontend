<script lang="ts" setup>
defineProps<{
  items: string[]
}>()
</script>

<template>
  <div>
    <h2>{{ $t("thisRoomIncludes") }}:</h2>
    <ul class="list">
      <li
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.list {
  display: grid;
  column-gap: var(--gutter);

  @media (--sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
