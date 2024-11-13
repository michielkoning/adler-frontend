<template>
  <section :aria-label="title">
    <h1 class="sr-only">
      {{ title }}
    </h1>
    <archive-list :items="items" />
  </section>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
