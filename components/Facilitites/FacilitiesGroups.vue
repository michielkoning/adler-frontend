<template>
  <div :class="$style.row">
    <facilities-group :facility="facilities.kids" :class="$style.group" />
    <div>
      <facilities-group :facility="facilities.rooms" :class="$style.group" />
      <facilities-group :facility="facilities.extras" :class="$style.group" />
    </div>
    <facilities-group
      :facility="facilities.environment"
      :class="$style.group"
    />
  </div>
</template>

<script>
export default {
  props: {
    facilities: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" module>
@import '~/styles/media-queries/media-queries.css';

.row {
  display: grid;
  grid-gap: var(--gutter);

  @media (--viewport-sm) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
