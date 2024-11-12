<script lang="ts" setup>
const { data, error } = await useFetch("/api/openingHours");

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <div v-if="data">
    <h2>{{ $t("openingHours") }}</h2>
    <dl class="list">
      <template v-for="(openingDay, index) in data" :key="`day-${index}`">
        <dt class="label">
          {{ $t(index) }}
        </dt>
        <dd class="value">
          <template
            v-for="hours in openingDay"
            :key="`from-${index}-${hours.start}`"
          >
            {{ hours.start }}
            –
            {{ hours.end }}
          </template>
        </dd>
      </template>
    </dl>
  </div>
</template>

<style lang="postcss" scoped>
.list {
  display: grid;
  grid-template-columns: 2.5em auto;
}

.label {
  font-weight: var(--font-weight-bold);
}

.value {
  margin: 0;
}
</style>
