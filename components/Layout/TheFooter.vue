<template>
  <footer :class="$style.footer">
    <notch-wrapper>
      <div :class="$style.wrapper">
        <the-address :class="$style.address" />
        <opening-hours />
        <social-media-links />
      </div>
    </notch-wrapper>
  </footer>
</template>

<script>
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'
import SocialMediaLinks from '~/components/Contact/SocialMediaLinks.vue'
import TheAddress from '~/components/Contact/TheAddress.vue'
import OpeningHours from '~/components/Contact/OpeningHours.vue'

export default {
  components: {
    NotchWrapper,
    SocialMediaLinks,
    TheAddress,
    OpeningHours,
  },
}
</script>

<style lang="postcss" module>
.footer {
  @mixin block-padding;

  background: var(--color-3);
  color: var(--color-white);
}

.wrapper {
  display: grid;
  grid-gap: var(--spacing-l) var(--gutter);
  align-items: start;
  justify-items: start;

  @media (--viewport-sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (--viewport-lg) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.address a {
  box-shadow: 0 2px 0 0 currentColor;

  &:hover,
  &:focus {
    box-shadow: 0 3px 0 0 currentColor;
  }
}
</style>
