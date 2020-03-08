import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home/Home'
import Sign from './components/auth/Sign'
import MyProjects from './components/my-projects/MyProjects'
import Search from './components/search/Search'
import Details from './components/details/Details'
import { auth } from './firebase'
Vue.use(VueRouter)

const organizationRoutes = {
    routes: [
        { path: '/', component: Home, meta: { requiresAuth: true } },
        { path: '/my_projects', component: MyProjects, meta: { requiresAuth: true } },
        { path: '/search', component: Search, meta: { requiresAuth: true } },
        { path: '/details/:id', component: Details, meta: { requiresAuth: true } },
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