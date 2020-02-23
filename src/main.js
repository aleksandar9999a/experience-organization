import Vue from 'vue'
import App from './App.vue'

import { firestorePlugin } from 'vuefire'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import { router } from './router'

import { store } from './store'

Vue.use(firestorePlugin)
Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
