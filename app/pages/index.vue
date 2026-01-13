<script lang="ts" setup>
definePageMeta({
  i18n: {
    paths: {
      de: '/',
      en: '/',
      nl: '/',
    },
  },
})

const { pageIds } = useAppConfig()

const { data, error } = await useFetch('/api/pageById', {
  params: {
    id: getPageId(pageIds.homePageId),
  },
})

if (error.value) {
  throw createError(error.value)
}

useSeo(data.value?.seo)
</script>

<template>
  <home-hero
    v-if="data && data.content.image"
    :image="data.content.image"
  />
  <center-wrapper>
    <div class="wrapper">
      <highlights-list
        :items="data"
        :page-size="4"
      />
      <aside class="sidebar">
        <latest-posts-list />
        <resmio-widget class="resmio" />
      </aside>
    </div>
  </center-wrapper>
  <facilities-section />
</template>

<style lang="css" scoped>
  @import "~/assets/css/media-queries/media-queries.css";

  .wrapper {
    @mixin block-padding;

    display: grid;
    gap: var(--spacing-l);

    @media (--viewport-lg) {
      grid-template-columns: 2fr 1fr;
    }
  }

  .highlights {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
    gap: var(--spacing-l);
  }

  .sidebar {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
    gap: var(--spacing-l);

    @media (--viewport-lg) {
      display: flex;
      flex-direction: column;
    }
  }

  .resmio {
    flex: 1 1 auto;
  }
</style>
