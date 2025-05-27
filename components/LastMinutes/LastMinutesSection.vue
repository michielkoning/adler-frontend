<script lang="ts" setup>
import LastMinutesList from "./LastMinutesList.vue";

const { locale } = useI18n();

const { data } = await useFetch("/api/lastMinutes", {
  params: {
    locale,
  },
  // server: false,
});
</script>

<template>
  <section aria-labelledby="arrangements-highlights-title" class="wrapper">
    <center-wrapper>
      <h1 id="arrangements-highlights-title" class="title">
        {{ $t("lastMinutesTitle") }}
      </h1>
      <template v-if="data">
        <last-minutes-list v-if="data.length" :items="data" />
        <p v-else class="text">{{ $t("lastMinutesNoResults") }}</p>
      </template>
    </center-wrapper>
  </section>
</template>

<style lang="postcss" scoped>
.wrapper {
  @mixin block-padding;

  background: var(--color-background-alternative);
}

.text,
.title {
  text-align: center;
}
</style>
