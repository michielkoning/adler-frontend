<script lang="ts" setup>
const { resmioWidget } = useAppConfig();
</script>

<template>
  <sidebar-item-section id="related-arrangements" :title="$t('ourRestaurant')">
    <iframe
      ref="frame"
      :src="resmioWidget"
      :class="$style.resmio"
      width="400"
      height="300"
      :lazy="true"
      :title="$t('reserveForOurRestaurant')"
    />
  </sidebar-item-section>
</template>

<style lang="postcss" module>
.resmio {
  min-height: 24em;
  height: calc(100% - 3em);
}
</style>
