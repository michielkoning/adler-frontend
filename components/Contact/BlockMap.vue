<template>
  <gmap-map :center="center" :zoom="15" :class="$style.map">
    <gmap-marker
      :icon="icon"
      :position="center"
      :clickable="true"
      @click="toggleInfoWindow()"
    />
    <gmap-info-window
      :options="infoOptions"
      :position="center"
      :opened="infoWinOpen"
      @closeclick="infoWinOpen = false"
    />
  </gmap-map>
</template>

<script>
import { street, postalCode, city, longitude, latitude } from '~/data/address'
import marker from '~/assets/marker@2x.png'
export default {
  data() {
    return {
      center: {
        lat: longitude,
        lng: latitude,
      },
      icon: {
        url: marker,
        size: { width: 30, height: 30 },
        scaledSize: { width: 30, height: 30 },
      },
      infoWinOpen: false,
      infoOptions: {
        content: '',
        // optional: offset infowindow so it visually sits nicely on top of our marker
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    }
  },

  methods: {
    toggleInfoWindow() {
      this.infoOptions.content = `<strong>${street}</strong><br>${postalCode}, ${city}`
      this.infoWinOpen = !this.infoWinOpen
    },
  },
}
</script>

<style lang="postcss" module>
.map {
  width: 100%;
  height: 20em;
  margin-bottom: var(--gutter);
}
</style>
