import {
  defineConfig,
  combinePresetAndAppleSplashScreens,
  minimal2023Preset,
} from '@vite-pwa/assets-generator/config'

export default defineConfig({
  headLinkOptions: {
    preset: '2023',
    basePath: '/',
  },

  preset:
    combinePresetAndAppleSplashScreens(minimal2023Preset, {
      resizeOptions: {
        background: '#98012e',
        width: 300,

      },
      linkMediaOptions: {
        basePath: '/',
      },
      name: (landscape, size) => {
        return `apple-splash-${landscape ? 'landscape' : 'portrait'}-${size.width}x${size.height}.png`
      },
    }),
  images: 'public/logo.svg',
})
