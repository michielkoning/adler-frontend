<script lang="ts" setup>
const { data, error } = await useFetch('/api/openingHours')

if (error.value) {
  throw createError(error.value)
}
</script>

<template>
  <div v-if="data">
    <h2>{{ $t("openingHours") }}</h2>
    <dl>
      <template
        v-for="(openingDay, index) in data"
        :key="`day-${index}`"
      >
        <dt>
          {{ $t(`openingTimes.${index}`) }}
        </dt>
        <dd>
          <span
            v-for="hours in openingDay"
            :key="`from-${index}-${hours.start}`"
          >
            {{ hours.start }}
            –
            {{ hours.end }}
          </span>
        </dd>
      </template>
      <dt class="public-holidays">
        Feestdagen
      </dt>
      <dd
        class="value public-holidays"
      >
        <span
          v-for="hours in data.sunday"
          :key="`from-${hours.start}`"
        >
          {{ hours.start }}
          –
          {{ hours.end }}
        </span>
      </dd>
    </dl>
  </div>
</template>

<style lang="css" scoped>
dl {
  display: grid;
  grid-template-columns: 2.5em auto;
}

dt {
  font-weight: var(--font-weight-bold);

  &.public-holidays {
    grid-column: span 2;
    margin-top: var(--spacing-2);
  }
}

dd {
  display: flex;
  gap: 1ch;
  margin: 0;

  &.public-holidays {
    grid-column: span 2;
  }
}
</style>
