import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loginStep: 1,
    paymentType: 1
  },
  mutations: {
    SET_LOGIN_STEP: (state, step) => {
        state.loginStep = step;
    },
    SET_PAYMENT_TYPE: (state, type) => {
        state.paymentType = type;
    }
  }
})
export default store