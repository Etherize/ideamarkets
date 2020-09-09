import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loginStep: 0,
    paymentType: 0,
    loginCallbacks:[],
  },
  mutations: {
    SET_LOGIN_CALLBACK:(state,callback)=>{
      console.log("callback set!");
      state.loginCallbacks.unshift(callback);
    },
    SET_LOGIN_STEP: (state, step) => {
        state.loginStep = step;
    },
    SET_PAYMENT_TYPE: (state, step) => {
        state.paymentType = step;
    }
  }
})
export default store
