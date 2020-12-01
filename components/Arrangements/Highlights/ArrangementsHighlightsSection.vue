<template>
  <section
    aria-labelledby="arrangements-highlights-title"
    :class="$style.highlights"
  >
    <center-wrapper>
      <h1 id="arrangements-highlights-title" :class="$style.title">
        {{ $t('title') }}
      </h1>
      <highlights-list v-if="arrangements" :items="arrangements" />
      <div :class="$style['button-wrapper']">
        <app-button
          :to="localePath({ name: 'arrangements' })"
          button-style="ghost"
        >
          {{ $t('btnTitle') }}
        </app-button>
      </div>
    </center-wrapper>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('arrangements', ['highlights']),
    currentMenu() {
      return this.arrangements[this.$i18n.locale]
    },
  },
}
</script>

<style lang="postcss" module>
.highlights {
  @mixin block-padding;

  background: var(--color-background-alternative);
}

.title {
  text-align: center;
}

.button-wrapper {
  display: flex;
  justify-content: center;
}
</style>

<i18n>
{
  "nl": {
    "title": "Onze uitgelichte arrangementen",
    "btnTitle": "Bekijk al onze arrangementen"
  },
  "de": {
    "title": "Unsere Arrangements",
    "btnTitle": "Unsere Arrangements"
  },
  "en": {
    "title": "Our highlighted arrangements",
    "btnTitle": "View all our arrangements"
  }
}
</i18n>
