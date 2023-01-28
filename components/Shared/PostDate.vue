<template>
  <div>
    <time v-if="date" :datetime="date | datetime">
      {{ $d(new Date(date), 'short') }}
    </time>
  </div>
</template>

<script>
export default {
  filters: {
    datetime(value) {
      const date = new Date(value)
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    },
  },
  props: {
    date: {
      type: String,
      default: '',
    },
  },
}
</script>
