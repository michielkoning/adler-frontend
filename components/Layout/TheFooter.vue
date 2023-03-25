<template>
  <footer :class="$style.footer">
    <center-wrapper>
      <div :class="$style.wrapper">
        <the-address :class="$style.address" />
        <opening-times />
        <quick-links :class="$style['quick-links']" />
        <social-media-links />
      </div>
    </center-wrapper>
  </footer>
</template>

<script>
import CenterWrapper from '~/components/Layout/CenterWrapper.vue'
import SocialMediaLinks from '~/components/Contact/SocialMediaLinks.vue'
import TheAddress from '~/components/Contact/TheAddress.vue'
import QuickLinks from '~/components/Menu/QuickLinks.vue'
import OpeningTimes from '~/components/Contact/OpeningTimes.vue'

export default {
  components: {
    CenterWrapper,
    SocialMediaLinks,
    TheAddress,
    OpeningTimes,
    QuickLinks,
  },
}
</script>

<style lang="postcss" module>
@import '~/styles/media-queries/media-queries.css';

.footer {
  @mixin block-padding;

  background: var(--color-gray-dark);
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

.quick-links,
.address {
  & a:not(:global(.btn)) {
    @mixin link-sm;
  }
}
</style>
