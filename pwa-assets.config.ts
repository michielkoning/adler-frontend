import {
  defineConfig,
  combinePresetAndAppleSplashScreens,
  minimal2023Preset as preset,
} from "@vite-pwa/assets-generator/config";

export default defineConfig({
  headLinkOptions: {
    preset: "2023",
    basePath: "/images/",
  },
  // preset: {
  // linkMediaOptions: {
  //   basePath: "/images/",
  // },

  // resizeOptions: {
  //   background: "#98012e",
  // },
  // },
  preset,
  images: ["public/images/icon.svg"],
});
