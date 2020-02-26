<template>
  <section class="highlights">
    <notch-wrapper>
      <h1 class="highlights__title">Onze arrangementen</h1>

      <apollo-query :query="require('~/graphql/Arrangements.gql')">
        <template slot-scope="{ result: { data } }">
          <ul v-if="data.arrangements.edges.length" class="highlights__row">
            <clickable-list-item
              v-for="arrangement in data.arrangements.edges"
              :key="arrangement.node.id"
              :url="arrangement.node.slug"
              class="highlights__column"
            >
              <div class="highlight">
                <div
                  v-if="arrangement.node.featuredImage"
                  class="highlight__image-wrapper"
                >
                  <image-archive
                    :image="arrangement.node.featuredImage"
                    class="highlight__image"
                  />
                  <price-badge
                    :price="arrangement.node.prijzenArrangementen.priceFrom"
                  />
                </div>

                <div class="highlight__text">
                  <h2 class="highlight__title">
                    <!-- eslint-disable-next-line -->
                    <router-link :to="arrangement.node.slug"  v-html="arrangement.node.title" />
                  </h2>
                  <h2 />
                  <!-- eslint-disable-next-line -->
                  <div class="intro" v-html="arrangement.node.excerpt" />
                </div>
                <app-button class="highlight__link">Meer info</app-button>
              </div>
            </clickable-list-item>
          </ul>
        </template>
      </apollo-query>
    </notch-wrapper>
  </section>
</template>

<script>
import NotchWrapper from '@/components/Layout/NotchWrapper.vue'
import PriceBadge from '@/components/Shared/PriceBadge.vue'
import AppButton from '@/components/Shared/AppButton.vue'
import ImageArchive from '@/components/Images/ImageArchive.vue'
import ClickableListItem from '@/components/Shared/ClickableListItem.vue'

export default {
  components: {
    NotchWrapper,
    PriceBadge,
    AppButton,
    ImageArchive,
    ClickableListItem,
  },
  props: {
    servicesGroup: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" scoped>
.highlights {
  @mixin block-padding;
  background: var(--color-4);
}

.highlights__title {
  text-align: center;
}

.highlights__row {
  display: grid;
  grid-gap: 2rem;
  justify-content: center;
  @media (--viewport-md) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.highlights__column {
  display: flex;
}

.highlight {
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5em;
  position: relative;
}

.highlight__title {
  text-align: center;
}

.highlight__image-wrapper {
  position: relative;
}

.highlight__image {
  display: block;
  height: 14em;
  object-fit: cover;
  width: 100%;
}

.highlight__text {
  flex: 1 1 auto;
  padding: 1em 1em 1.5em;
}

.highlight__link {
  align-self: center;
  flex: 0 1 auto;
  margin: 0 1em;
  padding: 0.25em 2em;
}
</style>
