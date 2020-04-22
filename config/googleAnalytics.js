// import doNotTrack from './../helpers/doNotTrack'

export default {
  id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_KEY,
  set: [{ field: 'anonymizeIp', value: true }],
  // disabled: () => doNotTrack(),
  disabled: true,
}
