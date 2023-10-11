export const actions = {
  async nuxtServerInit({ dispatch }, context) {
    await dispatch('arrangements/set', context)
    await dispatch('menu/set', context)
    await dispatch('openingHours/set', context)
  },
}
