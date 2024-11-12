<script lang="ts" setup>
const { data, error } = await useFetch("/api/arrangements");

if (error.value) {
  throw createError(error.value);
}

const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <section
    v-if="data"
    aria-labelledby="arrangements-highlights-title"
    class="highlights"
  >
    <center-wrapper>
      <h1 id="arrangements-highlights-title" class="title">
        {{ t("title") }}
      </h1>
      <highlights-list :items="data" />
      <div class="button-wrapper">
        <!-- <app-button
          :to="localePath({ name: 'arrangements' })"
          button-style="ghost"
        >
          {{ $t('btnTitle') }}
        </app-button> -->
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

<i18n>
{
  "nl": {
    "title": "Onze uitgelichte arrangementen",
    "btnTitle": "Bekijk al onze arrangementen"
  },
  "de": {
    "title": "Unsere Arrangements",
    "btnTitle": "Unsere Arrangements"
  },
  "en": {
    "title": "Our highlighted arrangements",
    "btnTitle": "View all our arrangements"
  }
}
</i18n>
