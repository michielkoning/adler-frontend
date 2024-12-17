<script lang="ts" setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

const changePage = () => {};
</script>

<template>
  <nuxt-link
    v-for="item in availableLocales"
    :key="item.code"
    class="link"
    :to="switchLocalePath(item.code)"
    @click="changePage"
  >
    <!-- <app-icon :icon="`flag-${item.code}`" class="icon" /> -->
    <span class="title">
      {{ item.name }}
    </span>
  </nuxt-link>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

.link {
  @mixin link-reset;

  margin-bottom: var(--spacing-xxs);
  display: flex;
  gap: var(--spacing-xs);
  align-items: center;
}

.title {
  box-shadow: 0 1px 0 0 currentColor;

  .link:hover &,
  .link:focus & {
    box-shadow: 0 2px 0 0 currentColor;
  }

  @media (--navigation-md) {
    @mixin sr-only;
  }
}
</style>
