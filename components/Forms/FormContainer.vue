<template>
  <div>
    <template v-slot="data">
      <slot v-if="data" :data="data" />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      submitted: false,
    }
  },
  methods: {
    encodeFormData(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
        )
        .join('&')
    },
    validate() {
      this.$v.$touch()
      return !this.$v.$invalid
    },
    async submit() {
      this.errorMessageForm = ''
      if (this.validate()) {
        const axiosConfig = {
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
        await axios.post(
          '/',
          this.encodeFormData({
            'form-name': 'contact',
            ...this.form,
          }),
          axiosConfig,
        )
        this.submitted = true
      }
    },
  },
}
</script>
