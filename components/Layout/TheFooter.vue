<template>
  <footer class="footer">
    <notch-wrapper>
      <div class="wrapper">
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

<style lang="postcss" scoped>
.footer {
  background: var(--color-3);
  color: var(--color-white);

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

  @media (--viewport-md) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
