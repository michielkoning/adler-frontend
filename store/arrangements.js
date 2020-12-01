import ArrangementsHighlightsQuery from '~/graphql/Arrangements/ArrangementsHighlights.gql'

export const state = () => ({
  highlights: {
    nl: [],
    de: [],
    en: [],
  },
})

export const getters = {
  getFirstByLanguage: (state) => (language, amount) => {
    return state.highlights[language].slice(0, amount)
  },
  getByLanguage: (state) => (language) => {
    return state.highlights[language]
  },
}

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
      if (response.data?.arrangementsHighlights?.edges.length) {
        commit('set', {
          language,
          data: response.data.arrangementsHighlights.edges,
        })
      }
    }
  },
}
