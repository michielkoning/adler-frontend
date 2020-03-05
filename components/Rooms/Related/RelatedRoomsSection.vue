<template>
  <div>
    <template v-slot="data">
      <slot v-if="data" :data="data" />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    notIn: {
      type: Number,
      default: 0,
    },
  },
}
</script>
