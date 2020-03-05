<template>
  <div :class="$style.group">
    <icon-child
      v-if="facility.icon === 'child'"
      class="logo"
      aria-hidden="true"
      width="24"
      height="24"
      :class="$style.icon"
    />
    <icon-utensils
      v-if="facility.icon === 'utensils'"
      class="logo"
      aria-hidden="true"
      width="24"
      height="24"
      :class="$style.icon"
    />
    <icon-bed
      v-if="facility.icon === 'bed'"
      class="logo"
      aria-hidden="true"
      width="24"
      height="24"
      :class="$style.icon"
    />
    <icon-mountain
      v-if="facility.icon === 'mountain'"
      class="logo"
      aria-hidden="true"
      width="24"
      height="24"
      :class="$style.icon"
    />
    <div>
      <h2>{{ facility.title }}</h2>
      <facilities-list :list="facility.list" />
    </div>
  </div>
</template>

<script>
import FacilitiesList from '~/components/Facilitites/FacilitiesList.vue'
import IconUtensils from '~/icons/utensils.svg'
import IconBed from '~/icons/bed.svg'
import IconMountain from '~/icons/mountain.svg'
import IconChild from '~/icons/child.svg'

export default {
  components: {
    FacilitiesList,
    IconUtensils,
    IconBed,
    IconMountain,
    IconChild,
  },
  props: {
    facility: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" module>
.group {
  display: flex;
}

.icon {
  margin-top: 0.1em;
  flex: 0 0 3em;
}
</style>
