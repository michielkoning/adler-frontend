<template>
  <div>{{ openingHours }}</div>
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
