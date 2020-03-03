import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home/Home'
import Sign from './components/auth/Sign'
import { auth } from './firebase'
Vue.use(VueRouter)

const organizationRoutes = {
    routes: [
        { path: '/', component: Home, meta: { requiresAuth: true } },
        { path: '/auth', component: Sign }
    ],
    mode: 'history'
}

export const router = new VueRouter(organizationRoutes);

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth) {
        auth.onAuthStateChanged(u => u ? next() : next('/auth'));
    } else {
        next();
    }
})