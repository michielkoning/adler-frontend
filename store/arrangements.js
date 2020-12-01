import ArrangementsHighlightsQuery from '~/graphql/Arrangements/ArrangementsHighlights.gql'

export const state = () => ({
  highlights: {
    nl: null,
    de: null,
    en: null,
  },
})

export const mutations = {
  set(state, payload) {
    state.highlights[payload.language] = payload.data
  },
}

export const actions = {
  async set({ commit }, context) {
    const languages = ['nl', 'de', 'en']
    for (const language of languages) {
      const response = await context.app.apolloProvider.defaultClient.query({
        query: ArrangementsHighlightsQuery,
        variables: {
          language: language.toUpperCase(),
        },
      })
      commit('set', { language, data: response.data })
    }
  },
}
