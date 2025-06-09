import {
  defineConfig,
  combinePresetAndAppleSplashScreens,
  minimal2023Preset as preset,
} from "@vite-pwa/assets-generator/config";

export default defineConfig({
  headLinkOptions: {
    preset: "2023",
  },
  preset: combinePresetAndAppleSplashScreens(preset, {
    resizeOptions: {
      background: "#98012e",
    },
  }),
  images: ["public/images/icon.png"],
});
