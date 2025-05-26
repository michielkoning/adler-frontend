<script lang="ts" setup>
defineProps<{
  facility: {
    icon: string;
    title: string;
    list: string[];
  };
}>();
</script>

<template>
  <div class="group">
    <app-icon :icon="facility.icon" class="icon" />
    <div>
      <h2>{{ $t(facility.title) }}</h2>
      <ul v-if="facility.list.length" class="list">
        <li v-for="item in facility.list" :key="item" class="list-item">
          {{ $t(item) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.group {
  display: flex;
  gap: 1em;
  align-items: flex-start;
}

.icon {
  margin-top: 0.1em;
  flex: 0 0 2em;
}

.list {
  @mixin list-reset;

  margin-bottom: var(--spacing-l);
}

.list-item {
  margin-bottom: var(--spacing-xxs);
}
</style>
