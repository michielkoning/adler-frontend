<template>
  <section :class="$style.facilities">
    <notch-wrapper>
      <div :class="$style.wrapper">
        <h1 :class="$style.title">{{ $t('title') }}</h1>
        <facilities-groups :facilities="facilities" />
      </div>
    </notch-wrapper>
  </section>
</template>

<script>
import facilities from '~/data/facilities'
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'
import FacilitiesGroups from '~/components/Facilitites/FacilitiesGroups.vue'

export default {
  components: {
    NotchWrapper,
    FacilitiesGroups,
  },
  data() {
    return {
      facilities,
    }
  },
}
</script>

<style lang="postcss" module>
.facilities {
  @mixin block-padding;

  background: var(--color-4);
}

.title {
  text-align: center;
}
</style>

<i18n>
{
  "nl": {
    "title": "Onze faciliteiten"
  },
  "de": {
    "title": "Einrichtungen"
  },
  "en": {
    "title": "Our facilities"
  }
}
</i18n>
