<template>
  <div :class="$style.hero">
    <image-hero
      :image="page.featuredImage"
      :class="$style.image"
      sizes="100vw"
    />

    <div :class="$style.content">
      <center-wrapper>
        <icon-logo-hero
          aria-hidden="true"
          width="800"
          height="96"
          :class="$style.icon"
        />
        <h1 id="content" tabindex="-1" class="sr-only">
          {{ title }}
        </h1>
        <h2 :class="$style.subtitle">
          {{ $t('subtitle', { province, city }) }}
        </h2>
      </center-wrapper>
    </div>
  </div>
</template>

<script>
import IconLogoHero from '~/icons/logo-hero.svg'
import { title } from '~/data/siteDetails'
import { city, province } from '~/data/address'

export default {
  components: {
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
  top: 0;
  left: 0;
  right: 0;
  bottom: var(--spacing-l);
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
