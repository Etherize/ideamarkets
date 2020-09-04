<template>
  <div id="app">
    <Header/>
    <Main msg="Idea Markets"/>
    <b-container>
      <b-row cols="2">
          <b-col>
            <ChartContainer/>
          </b-col>
          <b-col>
              <Account/>
              <Status/>
              <Login/>
              <Pay/>
              <CardPay/>
              <EthPay/>
              <Review/>
              <LogOut/>
              <b-container class="footer">
                <h3>Non-custodial & Secure</h3>
                <p>We do not own your private keys and cannot access your funds without your permission</p>
              </b-container>
          </b-col>
      </b-row>
    </b-container>
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
import Account from './components/Account.vue'
import ChartContainer from './components/ChartContainer.vue'
import Status from './components/Status.vue'

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
    Account,
    ChartContainer,
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
