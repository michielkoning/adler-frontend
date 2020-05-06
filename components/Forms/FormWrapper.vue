<template>
  <p v-if="submitted">{{ $t('success') }}</p>
  <form
    v-else
    :action="urlAction"
    data-netlify="true"
    netlify-honeypot="bot-field"
    method="POST"
    :name="name"
    novalidate
    @submit.prevent="submit"
  >
    <p>{{ $t('intro') }}</p>
    <input type="hidden" name="form-name" :value="name" />
    <input type="hidden" name="page" :value="currentPage" />
    <slot />
    <form-input-text
      id="bot-field"
      v-model="botField"
      :title="$t('botField')"
      :class="$style['bot-field']"
    />
    <div>{{ errorMessage }}</div>
    <app-loader v-if="loading" />
    <app-button v-else type="submit" :is-full-width="true" :class="$style.btn">
      {{ btnText }}
    </app-button>
  </form>
</template>

<script>
import axios from 'axios'
import AppButton from '~/components/Shared/AppButton.vue'
import FormInputText from '~/components/Forms/Elements/FormInputText.vue'
import AppLoader from '~/components/Shared/AppLoader.vue'
import { baseUrl } from '~/data/siteDetails'

export default {
  components: {
    AppLoader,
    AppButton,
    FormInputText,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    formData: {
      type: Object,
      required: true,
    },
    btnText: {
      type: String,
      default: null,
    },
    valid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      errorMessage: '',
      botField: '',
      submitted: false,
      loading: false,
    }
  },
  computed: {
    urlAction() {
      return this.$route.fullPath
    },
    currentPage() {
      const cleanBaseUrl = baseUrl.slice(0, -1)
      return `${cleanBaseUrl}${this.$route.path}`
    },
  },
  methods: {
    submit() {
      this.errorMessage = ''
      this.$emit('validate')
      if (this.valid) {
        this.postForm()
      } else {
        this.errorMessage = this.$t('errorMessage')
      }
    },
    encodeFormData(data) {
      return Object.keys(data)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
        )
        .join('&')
    },
    async postForm() {
      this.loading = true
      const axiosConfig = {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
      const encodeFormData = this.encodeFormData({
        'form-name': this.name,
        'bot-field': this.botField,
        page: this.currentPage,
        ...this.formData,
      })

      try {
        await axios.post(this.urlAction, encodeFormData, axiosConfig)
        this.submitted = true
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="postcss" module>
.bot-field {
  display: none;
}

.btn {
  margin-top: var(--spacing-m);
}
</style>

<i18n>
{
  "nl": {
    "botField": "Vul dit niet in als je mens bent",
    "errorMessage": "Niet alle velden zijn correct ingevuld.",
    "success": "Hartelijk dank voor uw reactie. Wij nemen zo snel mogelijk contact met u op.",
    "intro": "Vul het formulier in met uw gegevens. Wij zullen u zo spoedig mogelijk benaderen."
  },
  "de": {
    "botField": "Geben Sie dies nicht ein, wenn Sie ein Mensch sind",
    "errorMessage": "Nicht alle Felder sind korrekt ausgefüllt.",
    "success": "Vielen Dank für ihre Antwort. Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen.",
    "intro": "Bitte senden Sie uns das Formular mit Ihren Daten. Sie bekommen innerhalb 1 Tages Antwort von uns."
  },
  "en": {
    "botField": "Don’t fill this out if you're human",
    "errorMessage": "Not all fields are filled in correctly.",
    "success": "Thank you for your response. We will contact you as soon as possible.",
    "intro": "Fill in the form with your details. We will approach you as soon as possible."
  }
}
</i18n>
