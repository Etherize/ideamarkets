<template>
    <div>
        <Status/>
        <div v-if="$store.state.loginStep === 0">
            <Login/>
        </div>
        <div v-else-if="$store.state.loginStep === 1">
            <Pay/>
        </div>
        <div v-else>
            <div v-if="$store.state.paymentType === 0">
                <CardPay/>
            </div>
            <div v-else>
                <EthPay/>
            </div>
        </div>
  </div>
</template>

<script>
import CardPay from './CardPay.vue'
import EthPay from './EthPay.vue'
import Login from './Login.vue'
import Pay from './Pay.vue'
import Status from './Status.vue'


export default {
  name: 'LoginProgress',
  components: {
    CardPay,
    EthPay,
    Login,
    Pay,
    Status
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #0360fe;
}
</style>
