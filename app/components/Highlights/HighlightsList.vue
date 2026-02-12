<script lang="ts" setup>
const { locale } = useI18n()

const props = withDefaults(
  defineProps<{
    pageSize?: number
  }>(),
  {
    pageSize: 3,
  },
)

const { data, error } = useFetch('/api/arrangements', {
  query: {
    pageSize: props.pageSize,
    locale,
  },
})

if (error.value) {
  throw createError(error.value)
}
</script>

<template>
  <ul
    v-if="data"
    class="list"
  >
    <highlights-list-item
      v-for="item in data"
      :key="item.id"
      :item="item"
    />
  </ul>
</template>

<style lang="css" scoped>
.list {
  @mixin list-reset;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  gap: var(--spacing-l);
  margin-bottom: var(--spacing-m);
}
</style>
