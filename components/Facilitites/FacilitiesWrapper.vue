<template>
  <section :class="$style.facilities">
    <notch-wrapper>
      <div :class="$style.wrapper">
        <h1 :class="$style.title">Faciliteiten</h1>
        <facilities-groups :facilities="facilities" />
      </div>
    </notch-wrapper>
  </section>
</template>

<script>
import NotchWrapper from '@/components/Layout/NotchWrapper.vue'
import FacilitiesGroups from '~/components/Facilitites/FacilitiesGroups.vue'

import facilities from '~/components/Facilitites/facilities.json'

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
}
.wrapper {
}

.overview {
}

.column {
}

.title {
}

.icon {
}

.list {
}

.item {
}
</style>
