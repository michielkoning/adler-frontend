<template>
  <div>
    <div :class="$style.hero">
      <image-hero :image="page.featuredImage" :class="$style.image" />
      <div :class="$style.content">
        <icon-logo-hero
          aria-hidden="true"
          width="36"
          height="36"
          :class="$style.icon"
        />
        <h1 class="sr-only">Familiehotel &amp; Gasthof ADler</h1>
        <h2>in Lingenau, Bregenzerwald</h2>
      </div>
    </div>
    <resmio-widget />
    <arrangements-highlights-section />
    <facilities-wrapper />
  </div>
</template>

<script>
import PageQuery from '~/graphql/Page.gql'
import { homePageId } from '~/data/pages'
import FacilitiesWrapper from '~/components/Facilitites/FacilitiesWrapper.vue'
import ImageHero from '~/components/Images/ImageHero.vue'
import IconLogoHero from '~/icons/logo-hero.svg'
import ArrangementsHighlightsSection from '~/components/Arrangements/Highlights/ArrangementsHighlightsSection.vue'
import ResmioWidget from '~/components/Shared/Resmio.vue'

export default {
  components: {
    FacilitiesWrapper,
    ImageHero,
    IconLogoHero,
    ArrangementsHighlightsSection,
    ResmioWidget,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: homePageId,
      },
    })
    return {
      page: page.data.page,
    }
  },

  nuxtI18n: {
    paths: {
      de: '/',
      en: '/',
      nl: '/',
    },
  },
}
</script>

<style lang="postcss" module>
.hero {
  height: 30rem;
  position: relative;
  color: var(--color-white);
  -webkit-text-stroke: 1px #666;
  -webkit-text-fill-color: white;
}

.image {
  height: 100%;
  max-height: none;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.icon {
  width: 50rem;
  height: 6rem;
  stroke: #666;
}
</style>
