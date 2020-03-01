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
  background: var(--color-4);
  @mixin block-padding;
}
.wrapper {
}

.overview {
}

.column {
}

.title {
  text-align: center;
}

.icon {
}

.list {
}

.item {
}
</style>
