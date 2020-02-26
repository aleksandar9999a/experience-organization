import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        regOrLog: true
    },
    mutations: {
        changeRegOrLog(state) {
            state.regOrLog = !state.regOrLog;
        }
    }
})