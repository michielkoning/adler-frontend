import OpeningHoursQuery from '~/graphql/OpeningHours/OpeningHours.gql'

export const state = () => ({
  openingHours: null,
})

export const mutations = {
  set(state, payload) {
    state.openingHours = payload.data
  },
}

export const actions = {
  async set({ commit }, context) {
    const response = await context.app.apolloProvider.defaultClient.query({
      query: OpeningHoursQuery,
    })
    commit('set', { data: response.data.adlerSettings.openingHours })
  },
}
