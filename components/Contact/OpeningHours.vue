<template>
  <div>{{ openingHours }}</div>
</template>

<script>
import openingHours from '~/data/openingHours.json'

export default {
  data() {
    return {
      openingHours,
    }
  },
}
</script>
