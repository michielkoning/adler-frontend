<script lang="ts" setup>
const { resmioWidget } = useAppConfig();
</script>

<template>
  <sidebar-item-section id="related-arrangements" :title="$t('ourRestaurant')">
    <iframe
      :src="resmioWidget"
      class="resmio"
      width="400"
      height="300"
      loading="lazy"
      :title="$t('reserveForOurRestaurant')"
    />
  </sidebar-item-section>
</template>

<style lang="postcss" scoped>
.resmio {
  min-height: 24em;
  height: calc(100% - 3em);
}
</style>
