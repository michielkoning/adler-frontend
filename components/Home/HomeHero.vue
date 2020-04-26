<template>
  <div :class="$style.hero">
    <image-hero :image="page.featuredImage" :class="$style.image" />
    <div :class="$style.content">
      <icon-logo-hero
        aria-hidden="true"
        width="800"
        height="96"
        :class="$style.icon"
      />
      <h1 id="content" class="sr-only" tabindex="-1">
        {{ title }}
      </h1>
      <h2>
        {{ $t('subtitle', { province, city }) }}
      </h2>
    </div>
  </div>
</template>

<script>
import ImageHero from '~/components/Images/ImageHero.vue'
import IconLogoHero from '~/icons/logo-hero.svg'
import { title } from '~/data/siteDetails'
import { city, province } from '~/data/address'

export default {
  components: {
    ImageHero,
    IconLogoHero,
  },
  props: {
    page: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      title,
      city,
      province,
    }
  },
}
</script>

<style lang="postcss" module>
.hero {
  height: 30rem;
  position: relative;
  color: var(--color-white);
  -webkit-text-stroke: 1px #666;
  -webkit-text-fill-color: var(--color-white);
  max-height: 60vw;

  & .image {
    height: 100%;
    max-height: none;
  }
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.icon {
  height: 10vw;
  width: 100%;
  stroke: #666;

  @media (--viewport-lg) {
    width: 50rem;
    height: 6rem;
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
