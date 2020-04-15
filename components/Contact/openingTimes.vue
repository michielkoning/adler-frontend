<template>
  <div>
    <h2>{{ $t('title') }}</h2>
    <dl :class="$style.list">
      <template v-for="openingDay in openingTimes">
        <dt :key="openingDay.day" :class="$style.label">
          {{ getDayOfWeek(openingDay.day) }}
        </dt>
        <dd :key="openingDay.day" :class="$style.value">
          <template v-for="hours in openingDay.hours">
            <span :key="`${openingDay.day}-${hours.from}`">
              {{ hours.from }}
            </span>
            –
            <span :key="`${openingDay.day}-${hours.until}`">
              {{ hours.until }}
            </span>
          </template>
        </dd>
      </template>
    </dl>
  </div>
</template>

<script>
import openingTimes from '~/data/openingTimes'

export default {
  data() {
    return {
      openingTimes,
    }
  },
  methods: {
    getDayOfWeek(day) {
      const date = new Date()
      const diff =
        date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : day + 1)
      return this.$d(new Date(date.setDate(diff)), 'day')
    },
  },
}
</script>

<style lang="postcss" module>
.list {
  display: grid;
  grid-template-columns: 2.5em auto;
}

.label {
  font-weight: 700;
}

.value {
  margin: 0;
}
</style>

<i18n>
{
  "nl": {
    "title": "Openingstijden"
  },
  "en": {
    "title": "Opening hours"
  }
}
</i18n>
