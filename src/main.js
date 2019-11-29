import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL: 'http://127.0.0.1:3000/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
