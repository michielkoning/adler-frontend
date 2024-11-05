
<script lang="ts" setup>
import type { Image } from "~/types/Image";

defineProps<{
  image: Image
}>()

const {title, address} = useAppConfig()
</script>


<template>
  <div class="hero">
    <image-hero
      v-bind="image"
      class="image"
      sizes="100vw"
    />

    <div class="content">
      <center-wrapper>
        <app-icon
          icon="logo-hero"
          aria-hidden="true"
          width="800"
          height="96"
          class="icon"
        />
        <h1 id="content" tabindex="-1" class="sr-only">
          {{ title }}
        </h1>
        <h2 class="subtitle">
          {{ $t("subtitle", { 
            province: address.province, 
            city: address.city 
            }) }}
        </h2>
      </center-wrapper>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

.hero {
  height: 30rem;
  position: relative;
  color: var(--color-white);
  -webkit-text-stroke: 1px var(--color-gray-darker);
  -webkit-text-fill-color: var(--color-white);
  max-height: 60vw;

  & .image {
    height: 100%;
    max-height: none;
  }
}

.content {
  position: absolute;
  inset: 0 0 var(--spacing-l); 
  justify-content: flex-end;
  display: flex;
  flex-direction: column;

  @media (--viewport-sm) {
    top: 5em;
  }
}

.icon {
  stroke: var(--color-gray-darker);
  width: 100%;
  max-width: 50rem;
  height: 11vw;
  max-height: 6em;
}

.subtitle {
  transform: translateY(calc(var(--spacing-xxs) * -1));
  font-size: var(--font-size-xl);

  @media (--viewport-sm) {
    font-size: var(--font-size-xxl);
  }
}
</style>

<i18n>
{
  "nl": {
    "subtitle": "in {city}, {province}"
  },
  "de": {
    "subtitle": "in {city} im {province}"
  },
  "en": {
    "subtitle": "in {city}, {province}"
  }
}
</i18n>
