<template>
  <p v-if="submitted">{{ successMessage }}</p>
  <form
    v-else
    :action="urlAction"
    data-netlify="true"
    netlify-honeypot="bot-field"
    method="post"
    @submit.prevent="submit"
  >
    <p v-if="intro">{{ intro }}</p>
    <input type="hidden" name="form-name" :value="name" />
    <slot />
    <form-input-text
      id="bot-field"
      v-model="botField"
      :title="$t('botField')"
      type="text"
      :class="$style['bot-field']"
      name="bot-field"
    />
    <p>{{ errorMessage }}</p>

    <app-button v-if="!loading" type="submit" :is-full-width="true">
      {{ btnText }}
    </app-button>
  </form>
</template>

<script>
import axios from 'axios'
import AppButton from '~/components/Shared/AppButton.vue'
import FormInputText from '~/components/Forms/Elements/FormInputText.vue'

export default {
  components: {
    AppButton,
    FormInputText,
  },
  props: {
    intro: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      required: true,
    },
    successMessage: {
      type: String,
      default: null,
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
      urlAction: '/',
      errorMessage: '',
      botField: '',
      submitted: false,
      loading: false,
    }
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
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
        )
        .join('&')
    },
    async postForm() {
      this.loading = true
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
      const encodeFormData = this.encodeFormData({
        'form-name': this.name,
        'bot-field': this.botField,
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
</style>

<i18n>
{
  "nl": {
    "botField": "Vul dit niet in als je mens bent",
    "errorMessage": "Niet alle velden zijn correct ingevuld."
  }
}
</i18n>
