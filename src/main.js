import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import Vuelidate from 'vuelidate'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import { router } from './router'
import App from './App.vue'

Vue.use(Vuelidate)
Vue.use(firestorePlugin)
Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
