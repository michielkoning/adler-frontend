<template>
  <footer :class="$style.footer">
    <notch-wrapper>
      <div :class="$style.wrapper">
        <the-address />
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
  @mixin color-negative;
  @mixin block-padding;
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
</style>
