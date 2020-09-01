<template>
  <div id="app">
    <Header/>
    <Main msg="Idea Markets"/>

    <Chart/>
    <State/>
    <Login/>
    <Pay/>
    <CardPay/>
    <EthPay/>
    <Review/>
    <LogOut/>
    <div>
    <h3>Non-custodial & Secure</h3>
    <p>We do not own your private keys and cannot access your funds without your permission</p>
    </div>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import CardPay from './components/CardPay.vue'
import EthPay from './components/EthPay.vue'
import Login from './components/Login.vue'
import LogOut from './components/LogOut.vue'
import Pay from './components/Pay.vue'
import Review from './components/Review.vue'
import State from './components/State.vue'
import Chart from './components/Chart.vue'

export default {
  name: 'App',
  components: {
    Main,
    CardPay,
    EthPay,
    Login,
    LogOut,
    Pay,
    Review,
    State,
    Chart
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
}
</style>
