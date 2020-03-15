<template>
  <div>
    <slot :submit="submit" :submitted="submitted" :loading="loading" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      submitted: false,
      loading: false,
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
    async submit(formName, formData) {
      this.loading = true
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
      const encodeFormData = this.encodeFormData({
        'form-name': formName,
        ...formData,
      })

      try {
        await axios.post('/', encodeFormData, axiosConfig)
        this.submitted = true
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
