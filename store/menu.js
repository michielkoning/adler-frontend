import MenuQuery from '~/graphql/Menu/Menu.gql'
import { hotelPageId, environmentPageId } from '~/data/pages'

export const state = () => ({
  menu: {
    nl: null,
    de: null,
    en: null,
  },
})

export const mutations = {
  set(state, payload) {
    state.menu[payload.language] = payload.data
  },
}

export const actions = {
  set({ commit }, context) {
    const languages = ['nl', 'de', 'en']
    languages.forEach(async (language) => {
      const response = await context.app.apolloProvider.defaultClient.query({
        query: MenuQuery,
        variables: {
          language: language.toUpperCase(),
          hotelPageId: hotelPageId[language],
          environmentPageId: environmentPageId[language],
        },
      })
      commit('set', { language, data: response.data })
    })
  },
}
