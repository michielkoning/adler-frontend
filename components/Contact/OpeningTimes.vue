<template>
  <div>
    <h2>{{ $t('title') }}</h2>
    <dl :class="$style.list">
      <template v-for="(openingDay, index) in days">
        <dt :key="`day-${index}`" :class="$style.label">
          {{ getDayOfWeek(index) }}
        </dt>
        <dd :key="`hours-${index}`" :class="$style.value">
          <template v-for="hours in openingDay">
            <span :key="`from-${index}-${hours.from}`">
              {{ hours.start }}
            </span>
            –
            <span :key="`until-${openingDay.day}-${hours.until}`">
              {{ hours.end }}
            </span>
          </template>
        </dd>
      </template>
    </dl>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      openingHours: (state) => state.openingHours.openingHours,
    }),
    days() {
      if (!this.openingHours) {
        return []
      }
      const list = Object.values(this.openingHours)
      const days = list.filter((day) => day !== 'AdlerSettings_Openinghours')
      return days
    },
  },

  methods: {
    getDayOfWeek(day) {
      const date = new Date()
      const selectDay = date.getDay() === 0 && day === 0 ? -6 : day + 1
      const diff = date.getDate() - date.getDay() + selectDay
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
  font-weight: var(--font-weight-bold);
}

.value {
  margin: 0;
}

.holidays {
  &.label {
    margin-top: var(--spacing-s);
  }

  grid-column: span 2;
}
</style>

<i18n>
{
  "nl": {
    "title": "Openingstijden",
    "holidays": "Feestdagen"
  },
  "de": {
    "title": "Öffnungszeiten",
    "holidays": "Feiertage"
  },
  "en": {
    "title": "Opening hours",
    "holidays": "Public holidays"
  }
}
</i18n>
