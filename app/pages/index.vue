<script lang="ts" setup>
import ThePage from '~/components/Layout/ThePage.vue'

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
  query: {
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

  <center-wrapper size="md">
    <article v-if="data && data.content.text">
      <h1
        id="content"
        tabindex="-1"
        v-html="data.content.title"
      />
      <div v-html="data.content.title" />
    </article>
  </center-wrapper>
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
  .wrapper {
    @mixin block-padding;

    display: grid;
    gap: var(--spacing-8);

    @media (--lg) {
      grid-template-columns: 2fr 1fr;
    }
  }

  .highlights {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
    gap: var(--spacing-8);
  }

  .sidebar {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
    gap: var(--spacing-8);

    @media (--lg) {
      display: flex;
      flex-direction: column;
    }
  }

  .resmio {
    flex: 1 1 auto;
  }

  article {
    padding-block: var(--spacing-4);
  }
</style>
