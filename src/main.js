import Vue from 'vue'
import App from './App.vue'

import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

import { environment } from './environments/environments'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import VueRouter from 'vue-router'
import { organizationRoutes } from './router'

Vue.use(firestorePlugin)
Vue.use(VueMaterial)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter(organizationRoutes)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

export const db = firebase.initializeApp(environment.firebase).firestore()
