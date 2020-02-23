import Vue from 'vue'
import App from './App.vue'

import { firestorePlugin } from 'vuefire'
import { auth } from './firebase'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import VueRouter from 'vue-router'
import { organizationRoutes } from './router'

Vue.use(firestorePlugin)
Vue.use(VueMaterial)
Vue.use(VueRouter)

Vue.config.productionTip = false

export const router = new VueRouter(organizationRoutes);

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
    auth.onAuthStateChanged(u => u ? next() : next('/auth'));
  } else {
    next();
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
