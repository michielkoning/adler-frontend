<template>
  <section :class="$style.facilities">
    <notch-wrapper>
      <div :class="$style.wrapper">
        <h1 :class="$style.title">Faciliteiten</h1>
        <ul v-if="facilities.length">
          <li v-for="(facility, index) in facilities" :key="index">
            <h2>{{ facility.title }}</h2>
            <ul v-if="facility.list.length">
              <li v-for="(item, itemIndex) in facility.list" :key="itemIndex">
                {{ item }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </notch-wrapper>
  </section>
</template>

<script>
import NotchWrapper from '@/components/Layout/NotchWrapper.vue'
import facilities from '~/components/Facilitites/facilities.json'

export default {
  components: {
    NotchWrapper,
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
