<template>
  <footer class="footer">
    <center-wrapper>
      <div class="wrapper">
        <the-address class="address" />
        <opening-times />
        <quick-links class="quick-links" />
        <social-media-links />
      </div>
    </center-wrapper>
  </footer>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

.footer {
  @mixin block-padding;

  background: var(--color-gray-dark);
  color: var(--color-white);
}

.wrapper {
  display: grid;
  grid-gap: var(--spacing-l) var(--gutter);
  align-items: start;

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
