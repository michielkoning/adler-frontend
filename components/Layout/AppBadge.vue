<script>
export default {
  props: {
    prefix: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      required: true,
    },
    smallText: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div class="badge">
    <div class="label">
      {{ prefix }}
    </div>
    <div class="value" :class="{ 'has-small-text': smallText }">
      {{ text }}
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.badge {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-headings);
  background-color: var(--color-gray-darker);
  border-radius: 50%;
  color: var(--color-white);
  line-height: var(--line-height-headings);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
}

.value {
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-bold);

  &.has-small-text {
    font-size: var(--font-size-xl);
  }
}

.decimal,
.fraction {
  display: none;
}
</style>
