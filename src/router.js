import Home from './components/home/Home'
import Sign from './components/auth/Sign'

export const organizationRoutes = {
    routes: [
        { path: '/', component: Home, meta: { requiresAuth: true } },
        { path: '/auth', component: Sign }
    ],
    mode: 'history'
}
