<template>
  <li>{{ item }}</li>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      default: '',
    },
  },
}
</script>
