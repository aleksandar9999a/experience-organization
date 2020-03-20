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

Vue.filter('date', function (timestamp) {
  const date = timestamp.toDate();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
