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

<style lang="css" scoped>
@import "~/assets/css/media-queries/media-queries.css";

:global(a) {
  text-decoration-color: currentcolor;
}

.footer {
  @mixin block-padding;

  color: var(--color-white);
  background: var(--color-gray-dark);
}

.wrapper {
  display: grid;
  gap: var(--spacing-l) var(--gutter);
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
  & :deep(a:not(.btn)) {
    @mixin link-sm;
  }
}
</style>
