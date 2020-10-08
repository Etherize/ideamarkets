import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loginStep: 0,
    paymentType: 0,
    loading:false,
    error:"",
    serverResponse:[], // will be json object,
    paymentInfo:null  // will be json object,
  },
  mutations: {
    SET_LOGIN_STEP: (state, step) => {
        state.loginStep = step;
    },
    SET_PAYMENT_TYPE: (state, step) => {
        state.paymentType = step;
    },
    SET_PAYMENT_INFO: (state, info) => {
      state.paymentInfo = info;
    },
    SET_WAITING_FOR_BACKEND: (state, loading) => {
      state.loading = loading;
  },
    SET_ERROR_FROM_BACKEND: (state, error) => {
      state.error = error;
  },
    SET_RESPONSE_FROM_BACKEND: (state, serverResponse) => {
      state.serverResponse = serverResponse;
    },
  }
})
export default store
