<script lang="ts" setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

const changePage = () => {};
</script>

<template>
  <div class="wrapper">
    <nuxt-link
      v-for="item in availableLocales"
      :key="item.code"
      class="link"
      :to="switchLocalePath(item.code)"
      @click="changePage"
    >
      <app-icon :icon="`adler:flag-${item.code}`" class="icon" />
      <span class="title">
        {{ item.name }}
      </span>
    </nuxt-link>
  </div>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

.wrapper {
  display: flex;
  gap: 0.5em;
}

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
