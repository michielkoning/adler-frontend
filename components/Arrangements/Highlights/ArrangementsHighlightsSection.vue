<script lang="ts" setup>
const { locale } = useI18n();

const { data, error } = await useFetch("/api/arrangements", {
  params: {
    pageSize: 3,
    locale,
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <section
    v-if="data"
    :aria-label="$t('ourHighlightedArrangements')"
    class="highlights"
  >
    <center-wrapper>
      <h1 class="title">
        {{ $t("ourHighlightedArrangements") }}
      </h1>
      <highlights-list :items="data" />
      <div class="button-wrapper">
        <app-button
          :title="$t('viewAllArrangements')"
          :to="{ name: 'arrangements' }"
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
