import Vue from 'vue'

Vue.filter('currency', (value) => {
  return value.replace(/((\.|,)[0-9]{2})/g, '')
})
