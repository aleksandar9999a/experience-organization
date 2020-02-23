import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        notifications: false,
        notificationMessage: '',
        loading: false,
        regOrLog: true
    },
    mutations: {
        showNotifications(state, payload) {
            state.notifications = true;
            state.notificationMessage = payload.message;
            setInterval(() => {
                state.notifications = false;
                state.notificationMessage = '';
            }, 5000);
        },
        showLoader(state) {
            state.loading = true;
        },
        hideLoader(state) {
            state.loading = false;
        },
        changeRegOrLog(state) {
            state.regOrLog = !state.regOrLog;
        }
    }
})