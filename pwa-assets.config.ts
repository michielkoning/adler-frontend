import type {
  ResolvedAssetSize } from '@vite-pwa/assets-generator/config'
import {
  defineConfig,
  combinePresetAndAppleSplashScreens,
  minimal2023Preset,
  defaultAssetName,
} from '@vite-pwa/assets-generator/config'

export default defineConfig({
  headLinkOptions: {
    preset: '2023',
    basePath: '/images/',
  },
  // preset: {
  // linkMediaOptions: {
  //   basePath: "/images/",
  // },

  // resizeOptions: {
  //   background: "#98012e",
  // },
  // },
  preset: {
    ...minimal2023Preset,
    assetName: (type: AssetType, size: ResolvedAssetSize) => {
      return `icons/favicons/${defaultAssetName(type, size)}`
    },
  },
  images: ['public/icon.svg'],
})
