import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loading: false,
        regOrLog: true
    },
    mutations: {
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