<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/",
    en: "/",
    nl: "/",
  },
});

const { pageIds } = useAppConfig();

const { data, error } = await useFetch("/api/pageById", {
  params: {
    id: getPageId(pageIds.homePageId),
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <home-hero v-if="data && data.content.image" :image="data.content.image" />
  <center-wrapper>
    <div class="wrapper">
      <highlights-list :items="data" :page-size="4" />
      <aside class="sidebar">
        <latest-posts-list />
        <resmio-widget class="resmio" />
      </aside>
    </div>
  </center-wrapper>
  <facilities-section />
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

.wrapper {
  @mixin block-padding;

  grid-gap: var(--spacing-l);
  display: grid;

  @media (--viewport-lg) {
    grid-template-columns: 2fr 1fr;
  }
}

.highlights {
  grid-gap: var(--spacing-l);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
}

.sidebar {
  display: grid;
  gap: var(--spacing-l);
  grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));

  @media (--viewport-lg) {
    display: flex;
    flex-direction: column;
  }
}

.resmio {
  flex: 1 1 auto;
}
</style>
