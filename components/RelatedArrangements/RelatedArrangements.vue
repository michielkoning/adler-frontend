<template>
  <div>
    <h1>Meer aanbiedingen</h1>
    <ul v-if="relatedArrangements">
      <li
        v-for="arrangement in relatedArrangements.edges"
        :key="arrangement.node.id"
        :arrangement="arrangement.node"
      >
        <nuxt-link :to="`/arrangementen/${arrangement.node.slug}`">
          {{ arrangement.node.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import RelatedArrangementsQuery from '~/graphql/RelatedArrangements.gql'

export default {
  apollo: {
    // Pages
    relatedArrangements: {
      query: RelatedArrangementsQuery,
      variables() {
        return {
          where: {
            notIn: this.notIn,
          },
        }
      },
    },
  },
  props: {
    notIn: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      relatedArrangements: null,
    }
  },
}
</script>
