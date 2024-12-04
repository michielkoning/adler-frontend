<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/kontakt",
    en: "/contact",
    nl: "/contact",
  },
});

const { pageIds } = useAppConfig();

const { data, error } = await useFetch("/api/pageById", {
  params: {
    id: getPageId(pageIds.contactPageId),
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <the-page v-if="data" v-bind="data.content">
    <!-- <block-map /> -->
    <div class="wrapper">
      <the-address />
      <opening-times />
      <social-media-links />
    </div>
    <template #sidebar>
      <sidebar-item-section :title="$t('form.formContact')">
        <form-contact />
      </sidebar-item-section>
    </template>
  </the-page>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

.wrapper {
  display: grid;
  grid-gap: var(--gutter);

  @media (--viewport-sm) {
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  }
}
</style>
