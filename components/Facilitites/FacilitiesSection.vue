<script lang="ts" setup>
const { facilities } = useAppConfig();
</script>

<template>
  <section class="facilities" :aria-label="$t('ourFacilities')">
    <center-wrapper>
      <h1 class="title">
        {{ $t("ourFacilities") }}
      </h1>

      <div class="row">
        <facilities-group :facility="facilities.kids" />
        <div>
          <facilities-group :facility="facilities.rooms" />
          <facilities-group :facility="facilities.extras" />
        </div>
        <facilities-group :facility="facilities.environment" />
      </div>
    </center-wrapper>
  </section>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

.facilities {
  @mixin block-padding;

  background: var(--color-background-alternative);
}

.title {
  text-align: center;
}

.row {
  display: grid;
  grid-gap: var(--gutter);

  @media (--viewport-sm) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
