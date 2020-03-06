<template>
  <div>
    <h2>{{ $t('openingsHours') }}</h2>
    <dl :class="$style.list">
      <dt :class="$style.label">ma</dt>
      <dd :class="$style.value">
        8:00 – 11:30
      </dd>
      <dt :class="$style.label">di</dt>
      <dd :class="$style.value">
        8:00 – 11:30 16:00 – 21:30
      </dd>
      <dt :class="$style.label">wo</dt>
      <dd :class="$style.value">
        8:00 – 11:30 16:00 – 21:30
      </dd>
      <dt :class="$style.label">do</dt>
      <dd :class="$style.value">
        9:00 – 11:30 16:00 – 21:30
      </dd>
      <dt :class="$style.label">vr</dt>
      <dd :class="$style.value">
        9:00 – 11:30 16:00 – 21:30
      </dd>
      <dt :class="$style.label">za</dt>
      <dd :class="$style.value">
        9:00 – 21:00
      </dd>
      <dt :class="$style.label">zo</dt>
      <dd :class="$style.value">
        8:00 – 21:00
      </dd>
    </dl>
  </div>
</template>

<script>
import openingHours from '~/data/openingHours'

export default {
  data() {
    return {
      openingHours,
    }
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
    "openingsHours": "Openingstijden"
  }
}
</i18n>
