<script lang="ts" setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const getUrl = (code: 'en' | 'de' | 'nl') => {
  if (switchLocalePath(code)) {
    return switchLocalePath(code)
  }
  else {
    return localePath('index', code)
  }
}
</script>

<template>
  <div class="wrapper">
    <nuxt-link
      v-for="item in availableLocales"
      :key="item.code"
      class="link"
      :to="getUrl(item.code)"
    >
      <app-icon
        :icon="`adler:flag-${item.code}`"
        class="icon"
      />
      <span class="title">
        {{ item.name }}
      </span>
    </nuxt-link>
  </div>
</template>

<style lang="css" scoped>
  @import "~/assets/css/media-queries/media-queries.css";

  .wrapper {
    display: flex;
    gap: 0.25em;
    flex-direction: column;

    @media (--navigation-md) {
      flex-direction: row;
      gap: 0.5em;
    }
  }

  .link {
    @mixin link-reset;

    margin-bottom: var(--spacing-xxs);
    display: flex;
    gap: var(--spacing-xs);
    align-items: center;
  }

  .title {
    box-shadow: 0 1px 0 0 currentcolor;

    .link:hover &,
    .link:focus & {
      box-shadow: 0 2px 0 0 currentcolor;
    }

    @media (--navigation-md) {
      @mixin sr-only;
    }
  }
</style>
