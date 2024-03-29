import MenuQuery from '~/graphql/Menu/Menu.gql'
import { hotelPageId, environmentPageId, kidsPageId } from '~/data/pages'

export const state = () => ({
  menu: {
    nl: null,
    de: null,
    en: null,
  },
})

export const getters = {
  getByLanguage: (state) => (language) => {
    return state.menu[language]
  },
}

export const mutations = {
  set(state, payload) {
    state.menu[payload.language] = payload.data
  },
}

export const actions = {
  async set({ commit }, context) {
    const languages = ['nl', 'de', 'en']
    for (const language of languages) {
      const response = await context.app.apolloProvider.defaultClient.query({
        query: MenuQuery,
        variables: {
          language: language.toUpperCase(),
          hotelPageId: hotelPageId[language],
          environmentPageId: environmentPageId[language],
          kidsPageId: kidsPageId[language],
        },
      })
      commit('set', { language, data: response.data })
    }
  },
}
