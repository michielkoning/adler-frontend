<template>
  <section :aria-label="$t('ourHighlightedArrangements')" class="highlights">
    <center-wrapper>
      <h1 class="title">
        {{ $t("ourHighlightedArrangements") }}
      </h1>
      <highlights-list :page-size="3" />
      <div class="button-wrapper">
        <app-button
          :title="$t('viewAllArrangements')"
          :to="{
            name: 'arrangements-list',
          }"
          variant="ghost"
        />
      </div>
    </center-wrapper>
  </section>
</template>

<style lang="postcss" scoped>
.highlights {
  @mixin block-padding;

  background: var(--color-background-alternative);
}

.title {
  text-align: center;
}

.button-wrapper {
  display: flex;
  justify-content: center;
}
</style>
