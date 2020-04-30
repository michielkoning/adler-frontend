<template>
  <section :class="$style.facilities">
    <center-wrapper>
      <div :class="$style.wrapper">
        <h1 :class="$style.title">{{ $t('title') }}</h1>
        <facilities-groups :facilities="facilities" />
      </div>
    </center-wrapper>
  </section>
</template>

<script>
import facilities from '~/data/facilities'
import CenterWrapper from '~/components/Layout/CenterWrapper.vue'
import FacilitiesGroups from '~/components/Facilitites/FacilitiesGroups.vue'

export default {
  components: {
    CenterWrapper,
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

  background: var(--color-background-alternative);
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
