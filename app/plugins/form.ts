import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json";
import nl from "@vee-validate/i18n/dist/locale/nl.json";
import de from "@vee-validate/i18n/dist/locale/de.json";

export default defineNuxtPlugin(() => {
  configure({
    generateMessage: localize({
      en,
      de,
      nl,
    }),
  });
});
