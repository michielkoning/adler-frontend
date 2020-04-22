// import doNotTrack from './../helpers/doNotTrack'

export default {
  track: 'PageView',
  pixelId: process.env.NUXT_ENV_FACEBOOK_PIXEL_KEY || '1',
  // disabled: () => doNotTrack(),
  disabled: true,
}
