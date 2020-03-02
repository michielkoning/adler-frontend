<template>
  <section :aria-labelledby="id">
    <h1 :id="id">{{ title }}</h1>
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
