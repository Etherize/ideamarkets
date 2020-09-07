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
              <LoginProgress/>
              <Review/>
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
import Pay from './components/Pay.vue'
import Review from './components/Review.vue'
import Account from './components/Account.vue'
import ChartContainer from './components/ChartContainer.vue'
import LoginProgress from './components/LoginProgress.vue'
import Review from './components/Review.vue'


export default {
  name: 'App',
  components: {
    Main,
    Account,
    ChartContainer,
    LoginProgress,
    Review,
  }
}
</script>

<style>
/* Make App full screen so that way there is no white margins */
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
